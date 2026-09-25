import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import test from 'node:test'

import { runAdapter } from './native-adapter-harness.mjs'

const nativeKey = '__ph_opt_in_out_phc_fixture'

const cases = [
  ['new visitor retains approved collection', {}, true],
  ['invalid saved choice retains default', { storage: { gcs_consent_analytics: 'invalid' } }, true],
  ['saved denial', { storage: { gcs_consent_analytics: 'denied' } }, false],
  ['cookie denial beats stored grant', { cookie: 'gcs_consent_analytics=denied', storage: { gcs_consent_analytics: 'granted' } }, false],
  ['stored denial beats cookie grant', { cookie: 'gcs_consent_analytics=granted', storage: { gcs_consent_analytics: 'denied' } }, false],
  ['essential-only choice', { storage: { gcs_consent_analytics: 'essential_only' } }, false],
  ['legacy cookie decline', { cookie: 'cookie_consent=no' }, false],
  ['legacy stored decline', { storage: { cookie_consent: 'no' } }, false],
  ['native stored opt-out before SDK load', { storage: { [nativeKey]: '0' } }, false],
  ['native cookie opt-out before SDK load', { cookie: nativeKey + '=0' }, false],
  ['native cookie denial beats native stored grant', { cookie: nativeKey + '=0', storage: { [nativeKey]: '1' } }, false],
  ['native stored denial beats native cookie grant', { cookie: nativeKey + '=1', storage: { [nativeKey]: '0' } }, false],
  ['saved grant cannot clear native denial', { storage: { gcs_consent_analytics: 'granted', [nativeKey]: '0' }, env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'granted' } }, false],
  ['loaded SDK opt-out', { sdkDenied: true }, false],
  ['GA native disable', { gaDisabled: true }, false],
  ['unreadable storage fails closed', { storageError: true }, false],
  ['unreadable cookies fail closed', { cookieError: true }, false],
  ['operator denial remains', { env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'denied' } }, false],
  ['operator essential-only remains', { env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'essential_only' } }, false],
  ['unrecognised operator state fails closed', { env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'maybe' } }, false],
  ['current operator policy keeps collection', { env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'accepted_override' } }, true],
  ['other project native marker is unrelated', { storage: { __ph_opt_in_out_other: '0' } }, true],
  ['old native grant is not explicit visitor grant', { storage: { [nativeKey]: '1' } }, true],
]

for (const [name, fixture, expected] of cases) {
  test(name, () => {
    const result = runAdapter(fixture)
    assert.equal(result.loaded, expected)
    assert.equal(result.scripts.length, expected ? 1 : 0)
    assert.equal(result.win.__GCS_ANALYTICS_CONFIG__ === undefined, !expected)
    assert.equal(result.writes, 0)
    if (expected) {
      // No explicit consent state: the native SDK never receives an unconditional opt-in.
      assert.equal('consentState' in result.win.__GCS_ANALYTICS_CONFIG__, false)
      assert.equal(result.win.__GCS_ANALYTICS_CONFIG__.profile.replay_enabled, false)
    }
  })
}

test('canonical native asset and same-origin proxy routes are ready', () => {
  const asset = readFileSync('public/gcs-analytics-native.js')
  assert.equal(asset.length, 427631)
  assert.equal(createHash('sha256').update(asset).digest('hex'), 'e538372ba467c245fc9c25aea0ee00fdf71a6a2a5b7c1dc96cf6135cb223fddd')
  const { rewrites } = JSON.parse(readFileSync('vercel.json', 'utf8'))
  assert.deepEqual(rewrites[0], {
    source: '/api/analytics/site-config',
    destination: 'https://api.9line.dev/api/analytics/site-config',
  })
  for (const route of [
    { source: '/_gcs/e/e/', destination: 'https://us.i.posthog.com/e/' },
    { source: '/_gcs/e/i/v0/e/', destination: 'https://us.i.posthog.com/i/v0/e/' },
    { source: '/_gcs/e/static/:path*', destination: 'https://us-assets.i.posthog.com/static/:path*' },
    { source: '/_gcs/e/array/:path*', destination: 'https://us-assets.i.posthog.com/array/:path*' },
    { source: '/_gcs/e/:path*', destination: 'https://us.i.posthog.com/:path*' },
  ]) {
    assert.deepEqual(rewrites.find(({ source }) => source === route.source), route)
  }
})
