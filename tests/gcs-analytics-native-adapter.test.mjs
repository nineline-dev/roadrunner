import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import vm from 'node:vm'

import {
  LIVE_CONFIG_URL,
  NATIVE_RUNTIME_SRC,
  NATIVE_RUNTIME_VERSION,
  PRODUCTION_HOSTS,
  ROADRUNNER_BUSINESS_ID,
  buildNativeAnalyticsConfig,
} from '../src/analytics/gcsNativeAnalytics.js'
import { baseEnv, loadRuntimeSections, plain, runAdapter } from './native-adapter-harness.mjs'

const expectedScope = {
  business_id: ROADRUNNER_BUSINESS_ID,
  customer_account_id: 'fixture-customer',
  site_id: 'fixture-site',
  page_id: 'fixture-site',
  site_stage: 'managed_prod',
  environment: 'production',
}

test('the host allow-list is exactly the two production hosts', () => {
  assert.deepEqual([...PRODUCTION_HOSTS].sort(), ['roadrunner.media', 'www.roadrunner.media'])
})

for (const hostname of [
  'roadrunner-media.vercel.app', 'roadrunner-media-git-main-nineline.vercel.app',
  'roadrunner-media-d5wiuzkvo-nineline.vercel.app',
  'gcs-site-1bee7396-roadrunner-preview-7munb26z2-nineline.vercel.app',
  'localhost', '127.0.0.1', '::1', 'staging.roadrunner.media', 'roadrunner.media.evil.invalid',
  'www.roadrunner.media.', 'www.aota-media.com', '9line.dev',
]) {
  test(`no configuration or runtime on ${hostname}`, () => {
    const result = runAdapter({ hostname })
    assert.equal(result.loaded, false)
    assert.equal(result.win.__GCS_ANALYTICS_CONFIG__, undefined)
    assert.equal(result.scripts.length, 0)
  })
}

for (const [name, env] of [
  ['site id', { VITE_GCS_SITE_ID: undefined }],
  ['blank site id', { VITE_GCS_SITE_ID: '  ' }],
  ['customer account id', { VITE_GCS_CUSTOMER_ACCOUNT_ID: undefined }],
]) {
  test(`a build without its ${name} loads nothing`, () => {
    const result = runAdapter({ env })
    assert.equal(result.loaded, false)
    assert.equal(result.scripts.length, 0)
  })
}

for (const hostname of ['roadrunner.media', 'www.roadrunner.media']) {
  test(`production scope, profile and single runtime load on ${hostname}`, () => {
    const result = runAdapter({ hostname, env: { VITE_GCS_POSTHOG_HOST: undefined } })
    assert.equal(result.loaded, true)
    assert.deepEqual(plain(result.win.__GCS_ANALYTICS_CONFIG__), {
      profile: {
        site_id: 'fixture-site',
        customer_account_id: 'fixture-customer',
        capabilities: ['lead_gen', 'content'],
        enabled_packs: [
          'core_engagement', 'local_service_intent', 'form_quality', 'diagnostics_performance',
          'content_media', 'search_discovery', 'data_quality',
        ],
        primary_conversion: 'lead_submitted',
        compliance_profile: 'STANDARD',
        replay_enabled: false,
        fingerprinting_mode: 'PSEUDONYMOUS',
        sampling_config: { default_rate: 1, by_event: { web_vitals: 0.1, scroll_depth: 0.25, time_on_page: 0.25 } },
        ga4_extended_events_enabled: true,
        quality_events_enabled: true,
      },
      businessId: ROADRUNNER_BUSINESS_ID,
      pageId: 'fixture-site',
      siteStage: 'managed_prod',
      environment: 'production',
      analyticsConfigUrl: LIVE_CONFIG_URL,
      analyticsRuntimeVersion: NATIVE_RUNTIME_VERSION,
      ga4MeasurementId: 'G-FIXTURE',
      posthogKey: 'phc_fixture',
      posthogHost: '/_gcs/e',
    })
    assert.equal(result.scripts[0].src, NATIVE_RUNTIME_SRC)
    assert.equal(result.scripts[0].async, true)
    assert.equal(result.rerun(), false)
    assert.equal(result.scripts.length, 1)
  })
}

test('both production hosts send the one operator site id (the apex is a redirect to www)', () => {
  const env = { VITE_GCS_SITE_ID: 'operator-site' }
  const [apex, www] = ['roadrunner.media', 'www.roadrunner.media']
    .map((hostname) => runAdapter({ hostname, env }).win.__GCS_ANALYTICS_CONFIG__)
  for (const config of [apex, www]) {
    assert.equal(config.profile.site_id, 'operator-site')
    assert.equal(config.pageId, 'operator-site')
    assert.equal(config.businessId, ROADRUNNER_BUSINESS_ID)
  }
})

test('replay stays off whatever a legacy env value says', () => {
  const config = buildNativeAnalyticsConfig({ ...baseEnv, VITE_GCS_REPLAY_ENABLED: 'true' })
  assert.equal(config.profile.replay_enabled, false)
  assert.equal('posthogPageviewStrategy' in config, false)
})

test('legacy key and host names still configure the vendors', () => {
  const config = buildNativeAnalyticsConfig({
    VITE_GCS_SITE_ID: 's', VITE_GCS_CUSTOMER_ACCOUNT_ID: 'c',
    VITE_POSTHOG_KEY: 'phc_legacy', VITE_POSTHOG_HOST: '/_gcs/e', VITE_GCS_GA4_MEASUREMENT_ID: 'G-LEGACY',
  })
  assert.equal(config.posthogKey, 'phc_legacy')
  assert.equal(config.posthogHost, '/_gcs/e')
  assert.equal(config.ga4MeasurementId, 'G-LEGACY')
})

test('canonical runtime tags every provider event with the six scope keys', () => {
  const runtime = loadRuntimeSections()
  const config = runAdapter().win.__GCS_ANALYTICS_CONFIG__
  assert.deepEqual(plain(runtime.buildProviderScope(config)), expectedScope)
})

test('canonical runtime sends PostHog native $pageview with replay off and no forced opt-in', () => {
  const runtime = loadRuntimeSections()
  const config = runAdapter().win.__GCS_ANALYTICS_CONFIG__
  const scope = runtime.buildProviderScope(config)
  assert.equal(runtime.mountPosthog(config, scope), true)
  assert.equal(runtime.inits.length, 1)
  const { key, options } = runtime.inits[0]
  assert.equal(key, 'phc_fixture')
  assert.equal(options.api_host, '/_gcs/e')
  assert.equal(options.defaults, '2026-05-30')
  // capture_pageview is left to PostHog's defaults (history_change); it is only forced off
  // when a site asks for posthogPageviewStrategy 'off', which this adapter never does.
  assert.equal('capture_pageview' in options, false)
  assert.equal(options.disable_session_recording, true)
  assert.equal('opt_out_capturing_by_default' in options, false)
  assert.equal('cookieless_mode' in options, false)
  let registered
  const client = {
    register: (value) => { registered = value },
    opt_in_capturing: () => assert.fail('no explicit opt-in'),
    opt_out_capturing: () => assert.fail('no explicit opt-out'),
  }
  options.loaded(client)
  assert.deepEqual(plain(registered), expectedScope)
})

test('canonical runtime configures GA4 natively with the same scope', () => {
  const runtime = loadRuntimeSections()
  const config = runAdapter().win.__GCS_ANALYTICS_CONFIG__
  runtime.mountGa4(config.ga4MeasurementId, runtime.buildProviderScope(config), config.consentState)
  const calls = Array.from(runtime.window.dataLayer, (args) => Array.from(args))
  assert.deepEqual(calls.map(([command]) => command), ['js', 'set', 'config'])
  assert.deepEqual(plain(calls[1][1]), expectedScope)
  assert.equal(calls[2][1], 'G-FIXTURE')
  assert.deepEqual(plain(calls[2][2]), expectedScope)
  assert.equal(runtime.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-FIXTURE')
})

test('live switches come from the site-config endpoint and only for this site id', () => {
  const runtime = loadRuntimeSections()
  const config = runAdapter().win.__GCS_ANALYTICS_CONFIG__
  assert.deepEqual(
    plain(runtime.resolveSiteAnalyticsLiveConfigUrls(config, 'https://www.roadrunner.media/')),
    ['https://www.roadrunner.media/api/analytics/site-config', LIVE_CONFIG_URL],
  )
  const answer = { siteId: 'fixture-site', customerAccountId: 'fixture-customer', replayEnabled: false }
  assert.deepEqual(plain(runtime.parseSiteAnalyticsLiveConfig(answer, 'fixture-site', 'fixture-customer')), { replayEnabled: false })
  // An answer for any other registry row (for example the apex duplicate) changes nothing.
  assert.equal(runtime.parseSiteAnalyticsLiveConfig({ ...answer, siteId: 'other-site', replayEnabled: true }, 'fixture-site', 'fixture-customer'), null)
  assert.equal(runtime.parseSiteAnalyticsLiveConfig({ ...answer, customerAccountId: 'other' }, 'fixture-site', 'fixture-customer'), null)
})

test('canonical runtime carries no custom page_view sender', () => {
  const asset = readFileSync('public/gcs-analytics-native.js', 'utf8')
  assert.equal(asset.includes('page_view'), false)
})

const sourceFiles = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name)
  return statSync(path).isDirectory() ? sourceFiles(path) : [path]
})

test('the app no longer bundles the July runtime and never hardcodes a site id', () => {
  const sources = sourceFiles('src').map((path) => [path, readFileSync(path, 'utf8')])
  for (const [path, text] of sources) {
    assert.doesNotMatch(text, /@gcs\/analytics|mountSiteAnalytics|posthog-js/, path)
    // The site id is the operator's env value (VITE_GCS_SITE_ID), never a literal; the apex
    // duplicate's site and business ids never appear either.
    assert.doesNotMatch(text, /ad62cb66|c71029ce|c51498f9|a5829af3/, path)
  }
})

test('provider reads the site id from VITE_GCS_SITE_ID and inlines only named public values', () => {
  const source = readFileSync('src/analytics/GcsAnalyticsProvider.jsx', 'utf8')
  assert.doesNotMatch(source, /import\.meta\.env(?!\.)/)
  const mapped = [...source.matchAll(/^\s+(\w+): import\.meta\.env\.(\w+),$/gm)]
  assert.ok(mapped.length > 0)
  for (const [, key, envName] of mapped) assert.equal(key, envName)
  // Every env name the adapter reads must be passed through, or a denial or key is silently lost.
  const adapter = readFileSync('src/analytics/gcsNativeAnalytics.js', 'utf8')
  const read = new Set([...adapter.matchAll(/\benv\.(VITE_\w+)/g)].map(([, name]) => name))
  assert.ok(read.has('VITE_GCS_SITE_ID') && read.has('VITE_GCS_ANALYTICS_CONSENT_STATE'))
  assert.deepEqual(new Set(mapped.map(([, key]) => key)), read)

  let received
  vm.runInNewContext(
    source
      .replace(/^import .*$/gm, '')
      .replaceAll('import.meta.env', 'injectedEnv')
      .replace('export default function', 'function') + '; GcsAnalyticsProvider()',
    {
      injectedEnv: { ...baseEnv, VITE_GCS_REPLAY_ENABLED: 'true' },
      useEffect: (effect) => effect(),
      startNativeAnalytics: (input) => { received = input },
      window: { marker: 'window' },
      document: { marker: 'document' },
    },
  )
  assert.equal(received.env.VITE_GCS_SITE_ID, 'fixture-site')
  assert.equal(received.env.VITE_GCS_CUSTOMER_ACCOUNT_ID, 'fixture-customer')
  assert.equal('VITE_GCS_REPLAY_ENABLED' in received.env, false)
  assert.equal(received.win.marker, 'window')
  assert.equal(received.doc.marker, 'document')
})
