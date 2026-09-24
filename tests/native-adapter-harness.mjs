import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'

import { startNativeAnalytics } from '../src/analytics/gcsNativeAnalytics.js'

export const baseEnv = {
  VITE_GCS_SITE_ID: 'fixture-site',
  VITE_GCS_CUSTOMER_ACCOUNT_ID: 'fixture-customer',
  VITE_GCS_POSTHOG_KEY: 'phc_fixture',
  VITE_GA_ID: 'G-FIXTURE',
}

// Runs the adapter against a stub page; any consent store write fails the test.
export const runAdapter = (fixture = {}) => {
  const scripts = []
  let writes = 0
  const win = {
    location: { hostname: fixture.hostname ?? 'www.roadrunner.media' },
    localStorage: {
      getItem(key) { if (fixture.storageError) throw Error('blocked'); return fixture.storage?.[key] ?? null },
      setItem() { writes++; throw Error('unexpected consent write') },
      removeItem() { writes++; throw Error('unexpected consent removal') },
    },
    ...(fixture.sdkDenied ? { posthog: { has_opted_out_capturing: () => true } } : {}),
    'ga-disable-G-FIXTURE': fixture.gaDisabled === true,
  }
  const doc = {
    get cookie() { if (fixture.cookieError) throw Error('blocked'); return fixture.cookie || '' },
    set cookie(value) { writes++; throw Error('unexpected cookie write') },
    getElementById: (id) => scripts.find((script) => script.id === id) ?? null,
    createElement(tag) { assert.equal(tag, 'script'); return {} },
    head: {
      appendChild(script) {
        assert.ok(win.__GCS_ANALYTICS_CONFIG__, 'configuration precedes runtime execution')
        scripts.push(script)
      },
    },
  }
  const env = { ...baseEnv, ...fixture.env }
  const loaded = startNativeAnalytics({ env, win, doc })
  return {
    loaded,
    win,
    scripts,
    get writes() { return writes },
    rerun: () => startNativeAnalytics({ env, win, doc }),
  }
}

// Evaluates the pure configuration sections of the pinned canonical runtime asset, with the
// bundled PostHog client replaced by a recorder. Nothing here loads a vendor SDK.
export const loadRuntimeSections = ({ hostname = 'www.roadrunner.media' } = {}) => {
  const asset = readFileSync('public/gcs-analytics-native.js', 'utf8')
  const section = (from, to) => {
    const start = asset.indexOf(from)
    const end = asset.indexOf(to, start + from.length)
    assert.ok(start >= 0 && end > start, `runtime section ${from}`)
    return asset.slice(start, end)
  }
  const posthogBinding = asset.match(/(\w+)\.init\(config\.posthogKey, options\)/)[1]
  const inits = []
  const scripts = []
  const window = { location: { hostname } }
  const document = {
    getElementById: (id) => scripts.find((script) => script.id === id) ?? null,
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
  }
  const source = [
    section('// src/siteAnalyticsConsent.ts', '// src/siteAnalyticsProviderProperties.ts'),
    section('// src/siteAnalyticsProviderProperties.ts', '// src/siteAnalyticsLiveConfig.ts'),
    section('// src/siteAnalyticsLiveConfig.ts', '// src/siteLeadSubmit.ts'),
    section('var resolveEnvironment', 'var createNoopHandle'),
  ].join('\n')
  const exported = vm.runInNewContext(
    `(() => { ${source}; return { buildProviderScope, mountPosthog, mountGa4, resolveSiteAnalyticsLiveConfigUrls, parseSiteAnalyticsLiveConfig } })()`,
    {
      window,
      document,
      URL,
      [posthogBinding]: { init: (key, options) => inits.push({ key, options }) },
    },
  )
  return { ...exported, inits, scripts, window }
}

export const plain = (value) => JSON.parse(JSON.stringify(value))
