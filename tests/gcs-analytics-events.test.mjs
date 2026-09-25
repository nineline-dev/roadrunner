import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/gcs-analytics-events.js'

const originalEnv = process.env
const originalFetch = globalThis.fetch

// Any property read on the request fails the test: the retired endpoint must not look at it.
const req = (request) => new Proxy(request, {
  get(_target, key) {
    assert.fail(`the retired endpoint must not read the request (${String(key)})`)
  },
})

const res = () => ({
  statusCode: 200,
  headers: {},
  body: '',
  status(code) {
    this.statusCode = code
    return this
  },
  setHeader(name, value) {
    this.headers[name.toLowerCase()] = value
    return this
  },
  end(body = '') {
    this.body = body
    return this
  },
})

// Every value the old function forwarded with, so a regression would have what it needs.
// Reads are recorded while the handler runs; the retired endpoint must make none.
const legacyEnv = {
  GCS_ANALYTICS_INGEST_ENDPOINT: 'https://api.9line.dev/api/analytics/events',
  GCS_ANALYTICS_INGEST_TOKEN: 'token_test',
  GCS_ANALYTICS_SITE_ID: 'roadrunner_site_test',
  GCS_ANALYTICS_CUSTOMER_ACCOUNT_ID: 'customer_test',
  GCS_ANALYTICS_GLOBAL_ID: 'roadrunner-media-production',
  GCS_ANALYTICS_CANONICAL_ORIGIN: 'https://www.roadrunner.media',
  GCS_ANALYTICS_ALLOWED_ORIGINS: 'https://www.roadrunner.media',
  GCS_POSTHOG_PROJECT_API_KEY: 'phc_test',
  GCS_POSTHOG_HOST: 'https://us.i.posthog.com',
}

test.afterEach(() => {
  process.env = originalEnv
  globalThis.fetch = originalFetch
})

const page = 'https://www.roadrunner.media/'
const legacyRequests = [
  ['legacy page_view', { method: 'POST', body: { event_name: 'page_view', payload: { page_url: page, event_id: 'page-event' } } }],
  ['legacy cta_clicked', {
    method: 'POST',
    body: { event_name: 'cta_clicked', event_class: 'CONVERSION', payload: { page_url: page, cta_location: 'hero' } },
  }],
  ['legacy email_clicked', { method: 'POST', body: { event_name: 'email_clicked', payload: { page_url: page } } }],
  ['legacy batch envelope', {
    method: 'POST',
    body: { events: [
      { event_name: 'page_view', payload: { page_url: page } },
      { event_name: 'cta_clicked', payload: { page_url: page } },
      { event_name: 'email_clicked', payload: { page_url: page } },
    ] },
  }],
  ['raw string body', { method: 'POST', body: JSON.stringify({ event_name: 'page_view', payload: {} }) }],
  ['unapproved origin', { method: 'POST', headers: { origin: 'https://example.invalid' }, body: { event_name: 'page_view' } }],
  ['preflight', { method: 'OPTIONS' }],
  ['GET', { method: 'GET' }],
  ['PUT', { method: 'PUT', body: { event_name: 'page_view' } }],
  ['DELETE', { method: 'DELETE' }],
]

for (const [name, request] of legacyRequests) {
  test(`retired endpoint answers 410 and forwards nothing: ${name}`, async () => {
    let fetchCalls = 0
    globalThis.fetch = async () => {
      fetchCalls++
      throw new Error('the retired endpoint must not forward to the GCS ingest or PostHog')
    }
    const envReads = []
    process.env = new Proxy({ ...originalEnv, ...legacyEnv }, {
      get(target, key) {
        if (typeof key === 'string' && key in legacyEnv) envReads.push(key)
        return target[key]
      },
    })

    const response = res()
    try {
      await handler(req({ headers: { origin: 'https://www.roadrunner.media', host: 'www.roadrunner.media' }, ...request }), response)
    } finally {
      process.env = originalEnv
    }

    assert.equal(response.statusCode, 410)
    assert.equal(response.headers['content-type'], 'application/json')
    assert.deepEqual(JSON.parse(response.body), { ok: false, error: 'gone' })
    assert.equal(fetchCalls, 0)
    assert.deepEqual(envReads, [])
  })
}
