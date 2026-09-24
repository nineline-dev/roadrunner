import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

import { DEFAULT_POSTHOG_HOST, NATIVE_RUNTIME_SRC, NATIVE_RUNTIME_VERSION } from '../src/analytics/gcsNativeAnalytics.js'

const providerSource = () => fs.readFileSync('src/analytics/GcsAnalyticsProvider.jsx', 'utf8')
const adapterSource = () => fs.readFileSync('src/analytics/gcsNativeAnalytics.js', 'utf8')
const nativeAsset = () => fs.readFileSync('public/gcs-analytics-native.js', 'utf8')
const vendorSources = () => [
  fs.readFileSync('vendor/gcs-analytics/dist/index.js', 'utf8'),
  fs.readFileSync('vendor/gcs-analytics/dist/index.mjs', 'utf8'),
]
const cspDirectives = () => {
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
  const policies = vercel.headers
    .flatMap((entry) => entry.headers)
    .filter((header) => header.key === 'Content-Security-Policy')
    .map((header) => header.value)
  assert.equal(policies.length, 2, 'standalone and 9Line embed policies')
  return policies.map((policy) => Object.fromEntries(policy.split(';').map((part) => {
    const [name, ...sources] = part.trim().split(/\s+/)
    return [name, sources]
  })))
}

test('Roadrunner loads the canonical native runtime through the same-origin PostHog proxy', () => {
  const provider = providerSource()
  const adapter = adapterSource()

  assert.match(provider, /startNativeAnalytics/)
  assert.doesNotMatch(provider + adapter, /mountSiteAnalytics|mountStorefrontAnalytics|@gcs\/analytics/)
  assert.doesNotMatch(provider + adapter, /eventSink|firstPartyEndpoint|VITE_ANALYTICS_INGEST_ENDPOINT/)
  assert.equal(DEFAULT_POSTHOG_HOST, '/_gcs/e')
  assert.match(adapter, /posthogHost:\s*clean\(env\.VITE_GCS_POSTHOG_HOST\)\s*\|\|\s*clean\(env\.VITE_POSTHOG_HOST\)\s*\|\|\s*DEFAULT_POSTHOG_HOST/)
  assert.equal(NATIVE_RUNTIME_SRC, '/gcs-analytics-native.js')
  assert.equal(NATIVE_RUNTIME_VERSION, 'gcs-analytics-native@d834ad5d')
})

test('latest GCS analytics runtime can attach attribution and template metadata', () => {
  for (const source of vendorSources()) {
    assert.match(source, /campaign_key/)
    assert.match(source, /buildTemplateAnalyticsMetadata/)
    assert.match(source, /template_id/)
    assert.match(source, /business_vertical/)
  }
})

test('Roadrunner uses the native GA4 tag instead of a local collect fallback', () => {
  const adapter = adapterSource()
  const asset = nativeAsset()

  assert.doesNotMatch(adapter, /sendGa4PageViewFallback|gcs_ga4_fallback|google-analytics\.com\/g\/collect/)
  assert.match(asset, /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=/)
  assert.doesNotMatch(asset, /page_view/)
})

test('Roadrunner browser CSP does not allow direct PostHog traffic', () => {
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
  const csp = vercel.headers
    .flatMap((entry) => entry.headers)
    .find((header) => header.key === 'Content-Security-Policy')?.value || ''

  assert.doesNotMatch(csp, /posthog\.com/)
  assert.doesNotMatch(csp, /i\.posthog\.com/)
})

test('Roadrunner browser CSP admits every origin the native runtime uses', () => {
  // Exact source-list membership (not substring matching) for each directive.
  const allows = (sources, source) => sources.some((entry) => entry === source)
  for (const csp of cspDirectives()) {
    // Runtime asset, PostHog extensions (/_gcs/e/static) and remote config are same-origin.
    assert.ok(allows(csp['script-src'], "'self'"))
    assert.ok(allows(csp['script-src'], 'https://www.googletagmanager.com'))
    // PostHog (/_gcs/e) and the site-config route are same-origin; the runtime's fallback
    // live-config URL and GA4 collection are cross-origin.
    assert.ok(allows(csp['connect-src'], "'self'"))
    assert.ok(allows(csp['connect-src'], new URL('https://api.9line.dev/api/analytics/site-config').origin))
    assert.ok(allows(csp['connect-src'], 'https://www.google-analytics.com'))
    assert.ok(allows(csp['connect-src'], 'https://region1.google-analytics.com'))
  }
})

test('Roadrunner proxies PostHog browser traffic through same-origin Vercel rewrites', () => {
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
  const rewrites = vercel.rewrites.map((rewrite) => [rewrite.source, rewrite.destination])

  assert.ok(rewrites.some(([source, destination]) => (
    source === '/_gcs/e/:path*' && destination === 'https://us.i.posthog.com/:path*'
  )))
  assert.ok(rewrites.some(([source, destination]) => (
    source === '/_gcs/e/static/:path*' && destination === 'https://us-assets.i.posthog.com/static/:path*'
  )))
})
