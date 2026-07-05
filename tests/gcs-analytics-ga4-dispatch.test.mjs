import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const providerSource = () => fs.readFileSync('src/analytics/GcsAnalyticsProvider.jsx', 'utf8')
const vendorSources = () => [
  fs.readFileSync('vendor/gcs-analytics/dist/index.js', 'utf8'),
  fs.readFileSync('vendor/gcs-analytics/dist/index.mjs', 'utf8'),
]

test('Roadrunner analytics provider routes browser vendor delivery through GA4 and first-party proxy', () => {
  const source = providerSource()
  const envExample = fs.readFileSync('.env.example', 'utf8')

  assert.match(source, /mountSiteAnalytics/)
  assert.doesNotMatch(source, /mountStorefrontAnalytics/)
  assert.match(source, /eventSink:\s*env\.VITE_EVENT_SINK\s*\|\|\s*['"]ga4['"]/)
  assert.match(source, /posthogHost:\s*env\.VITE_GCS_POSTHOG_HOST\s*\|\|\s*env\.VITE_POSTHOG_HOST\s*\|\|\s*['"]\/_gcs\/e['"]/)
  assert.doesNotMatch(envExample, /^VITE_EVENT_SINK=/m)
  assert.doesNotMatch(envExample, /^VITE_POSTHOG_KEY=/m)
  assert.doesNotMatch(envExample, /^VITE_POSTHOG_HOST=/m)
})

test('latest GCS analytics runtime can attach attribution and template metadata', () => {
  for (const source of vendorSources()) {
    assert.match(source, /campaign_key/)
    assert.match(source, /buildTemplateAnalyticsMetadata/)
    assert.match(source, /template_id/)
    assert.match(source, /business_vertical/)
  }
})

test('Roadrunner uses latest GCS direct GA4 collect controls instead of a local fallback', () => {
  const source = providerSource()

  assert.match(source, /ga4DirectCollectEnabled/)
  assert.match(source, /ga4DirectCollectEventAllowlist/)
  assert.doesNotMatch(source, /sendGa4PageViewFallback/)
  assert.doesNotMatch(source, /gcs_ga4_fallback/)
  for (const vendorSource of vendorSources()) {
    assert.match(vendorSource, /ga4DirectCollectEnabled/)
    assert.match(vendorSource, /google-analytics\.com\/g\/collect/)
  }
})

test('Roadrunner analytics emits rollout attribution and routing metadata', () => {
  const source = providerSource()

  assert.match(source, /analyticsRuntimeVersion/)
  assert.match(source, /analyticsRolloutVersion/)
  assert.match(source, /analytics-fleet-20260702-roadrunner/)
  assert.match(source, /roadrunner-media-vite/)
  for (const vendorSource of vendorSources()) {
    assert.match(vendorSource, /analytics_runtime_version/)
    assert.match(vendorSource, /analytics_rollout_version/)
    assert.match(vendorSource, /getEventDestinations:\s*\(eventName\)\s*=>/)
    assert.match(vendorSource, /advancedPosthogModules/)
  }
})

test('Roadrunner browser CSP does not allow direct PostHog traffic', () => {
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
  const csp = vercel.headers
    .flatMap((entry) => entry.headers)
    .find((header) => header.key === 'Content-Security-Policy')?.value || ''

  assert.doesNotMatch(csp, /posthog\.com/)
  assert.doesNotMatch(csp, /i\.posthog\.com/)
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
