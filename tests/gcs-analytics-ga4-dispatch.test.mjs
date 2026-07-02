import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const providerSource = () => fs.readFileSync('src/analytics/GcsAnalyticsProvider.jsx', 'utf8')
const vendorSources = () => [
  fs.readFileSync('vendor/gcs-analytics/index.js', 'utf8'),
  fs.readFileSync('vendor/gcs-analytics/index.mjs', 'utf8'),
]

test('Roadrunner analytics provider routes browser vendor delivery through GA4 and first-party proxy', () => {
  const source = providerSource()
  const envExample = fs.readFileSync('.env.example', 'utf8')

  assert.doesNotMatch(source, /eventSink:\s*env\.VITE_EVENT_SINK\s*\|\|\s*['"]posthog['"]/)
  assert.match(source, /eventSink:\s*['"]ga4['"]/)
  assert.doesNotMatch(source, /posthogKey:\s*env\.VITE_POSTHOG_KEY/)
  assert.doesNotMatch(source, /posthogHost:\s*env\.VITE_POSTHOG_HOST/)
  assert.doesNotMatch(envExample, /^VITE_EVENT_SINK=/m)
  assert.doesNotMatch(envExample, /^VITE_POSTHOG_KEY=/m)
  assert.doesNotMatch(envExample, /^VITE_POSTHOG_HOST=/m)
})

test('GA4 events can carry the URL campaign as a registered campaign_key dimension', () => {
  for (const source of vendorSources()) {
    assert.match(source, /campaign_key:\s*params\.get\(["']utm_campaign["']\)/)
  }
})

test('Roadrunner GA4 fallback sends campaign_key only when gtag collect is absent', () => {
  const source = providerSource()

  assert.match(source, /google-analytics\.com\/g\/collect/)
  assert.match(source, /ep\.campaign_key/)
  assert.match(source, /hasGa4CollectResource\(\)/)
  assert.match(source, /gcs_ga4_fallback/)
  assert.match(source, /getRandomValues/)
})

test('Roadrunner analytics emits rollout attribution and routing metadata', () => {
  const source = providerSource()

  assert.match(source, /analyticsRuntimeVersion/)
  assert.match(source, /analyticsRolloutVersion/)
  for (const vendorSource of vendorSources()) {
    assert.match(vendorSource, /analytics_runtime_version/)
    assert.match(vendorSource, /analytics_rollout_version/)
    assert.match(vendorSource, /getEventDestinations:\s*\(eventName\)\s*=>/)
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
