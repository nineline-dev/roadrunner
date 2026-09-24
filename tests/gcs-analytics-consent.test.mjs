import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'

const providerPath = 'src/analytics/GcsAnalyticsProvider.jsx'
const source = readFileSync(providerPath, 'utf8')
  .replace(/^import .*$/gm, '')
  .replace('const env = import.meta.env', 'const env = injectedEnv')
  .replace('export default function', 'function')
const vendor = readFileSync('vendor/gcs-analytics/dist/index.mjs', 'utf8')
// Exercise the consent gate used by the unchanged, deployed legacy runtime.
const analyticsAllowed = vm.runInNewContext(
  vendor.slice(vendor.indexOf('var CONSENT_STATES ='), vendor.indexOf('var buildGa4ConsentModeState =')) +
  vendor.match(/var analyticsAllowed = .*;/)[0] + '; analyticsAllowed',
)
const nativeKey = '__ph_opt_in_out_phc_fixture'
const cases = [
  ['new visitor retains approved collection', {}, 'accepted_override'],
  ['invalid saved choice retains default', { storage: { gcs_consent_analytics: 'invalid' } }, 'accepted_override'],
  ['saved denial', { storage: { gcs_consent_analytics: 'denied' } }, 'denied'],
  ['cookie denial beats stored grant', { cookie: 'gcs_consent_analytics=denied', storage: { gcs_consent_analytics: 'granted' } }, 'denied'],
  ['stored denial beats cookie grant', { cookie: 'gcs_consent_analytics=granted', storage: { gcs_consent_analytics: 'denied' } }, 'denied'],
  ['essential-only choice', { storage: { gcs_consent_analytics: 'essential_only' } }, 'denied'],
  ['legacy cookie decline', { cookie: 'cookie_consent=no' }, 'denied'],
  ['legacy stored decline', { storage: { cookie_consent: 'no' } }, 'denied'],
  ['native stored opt-out before SDK load', { storage: { [nativeKey]: '0' } }, 'denied'],
  ['native cookie opt-out before SDK load', { cookie: nativeKey + '=0' }, 'denied'],
  ['native cookie denial beats native stored grant', { cookie: nativeKey + '=0', storage: { [nativeKey]: '1' } }, 'denied'],
  ['native stored denial beats native cookie grant', { cookie: nativeKey + '=1', storage: { [nativeKey]: '0' } }, 'denied'],
  ['saved grant cannot clear native denial', { storage: { gcs_consent_analytics: 'granted', [nativeKey]: '0' }, env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'granted' } }, 'denied'],
  ['loaded SDK opt-out', { sdkDenied: true }, 'denied'],
  ['GA native disable', { gaDisabled: true }, 'denied'],
  ['unreadable storage fails closed', { storageError: true }, 'denied'],
  ['unreadable cookies fail closed', { cookieError: true }, 'denied'],
  ['operator denial remains', { env: { VITE_GCS_ANALYTICS_CONSENT_STATE: 'denied' } }, 'denied'],
  ['other project native marker is unrelated', { storage: { __ph_opt_in_out_other: '0' } }, 'accepted_override'],
  ['old native grant is not explicit visitor grant', { storage: { [nativeKey]: '1' } }, 'accepted_override'],
]
for (const [name, fixture, expected] of cases) {
  test(name, () => {
    let mounted
    let writes = 0
    const localStorage = {
      getItem(key) { if (fixture.storageError) throw Error('blocked'); return fixture.storage?.[key] ?? null },
      setItem() { writes++; throw Error('unexpected consent write') },
      removeItem() { writes++; throw Error('unexpected consent removal') },
    }
    const document = {
      get cookie() { if (fixture.cookieError) throw Error('blocked'); return fixture.cookie || '' },
      set cookie(value) { writes++; throw Error('unexpected cookie write') },
    }
    vm.runInNewContext(source + '; GcsAnalyticsProvider()', {
      injectedEnv: {
        VITE_GCS_SITE_ID: 'fixture-site', VITE_GCS_CUSTOMER_ACCOUNT_ID: 'fixture-customer',
        VITE_GCS_POSTHOG_KEY: 'phc_fixture', VITE_GA_ID: 'G-FIXTURE', ...fixture.env,
      },
      window: {
        localStorage, location: { origin: 'https://fixture.invalid' },
        ...(fixture.sdkDenied ? { posthog: { has_opted_out_capturing: () => true } } : {}),
        'ga-disable-G-FIXTURE': fixture.gaDisabled === true,
      },
      document,
      useEffect: (effect) => effect(),
      mountSiteAnalytics: (config) => { mounted = config; return { cleanup() {} } },
    })
    assert.equal(mounted.consentState, expected)
    assert.equal(analyticsAllowed(mounted), expected === 'accepted_override')
    assert.equal(writes, 0)
    assert.equal(mounted.posthogPageviewStrategy, 'off')
    assert.equal(mounted.profile.replay_enabled, false)
    assert.equal(Object.values(mounted.posthogNativeCapture).every((value) => value === false), true)
  })
}

test('canonical native asset and existing site-config proxy are ready', () => {
  const asset = readFileSync('public/gcs-analytics-native.js')
  assert.equal(asset.length, 419487)
  assert.equal(createHash('sha256').update(asset).digest('hex'), 'd834ad5d6d7849fb7ffabd6f2ac8a72d441c3b65a0442ca84749892678dd4cfb')
  const { rewrites } = JSON.parse(readFileSync('vercel.json', 'utf8'))
  assert.deepEqual(rewrites[0], {
    source: '/api/analytics/site-config',
    destination: 'https://api.9line.dev/api/analytics/site-config',
  })
})
