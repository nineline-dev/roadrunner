import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const providerSource = () => fs.readFileSync('src/analytics/GcsAnalyticsProvider.jsx', 'utf8')
const vendorSources = () => [
  fs.readFileSync('vendor/gcs-analytics/index.js', 'utf8'),
  fs.readFileSync('vendor/gcs-analytics/index.mjs', 'utf8'),
]

test('Roadrunner analytics provider does not force a PostHog-only event sink', () => {
  const source = providerSource()
  const envExample = fs.readFileSync('.env.example', 'utf8')

  assert.doesNotMatch(source, /eventSink:\s*env\.VITE_EVENT_SINK\s*\|\|\s*['"]posthog['"]/)
  assert.doesNotMatch(source, /eventSink:\s*env\.VITE_EVENT_SINK/)
  assert.doesNotMatch(envExample, /^VITE_EVENT_SINK=/m)
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
