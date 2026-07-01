import assert from 'node:assert/strict'
import { EventEmitter } from 'node:events'
import test from 'node:test'
import handler from '../api/gcs-analytics-events.js'

const makeRes = () => {
  const res = {
    headers: {},
    body: '',
    statusCode: 200,
    setHeader(key, value) {
      this.headers[key.toLowerCase()] = value
      return this
    },
    status(code) {
      this.statusCode = code
      return this
    },
    end(value = '') {
      this.body = value
      return this
    },
  }
  return res
}

const withEnv = async (env, fn) => {
  const previous = {}
  for (const key of Object.keys(env)) {
    previous[key] = process.env[key]
    process.env[key] = env[key]
  }
  try {
    await fn()
  } finally {
    for (const key of Object.keys(env)) {
      if (previous[key] === undefined) delete process.env[key]
      else process.env[key] = previous[key]
    }
  }
}

test('forwards analytics body with server-side ingest token only', async () => {
  await withEnv(
    {
      GCS_ANALYTICS_INGEST_ENDPOINT: 'https://api.example.test/api/analytics/events',
      GCS_ANALYTICS_INGEST_TOKEN: 'server-only-token',
      GCS_ANALYTICS_SITE_ID: 'server-site-id',
      GCS_ANALYTICS_CUSTOMER_ACCOUNT_ID: 'server-customer-id',
      GCS_ANALYTICS_GLOBAL_ID: 'server-global-id',
      GCS_POSTHOG_HOST: 'https://posthog.example.test',
      GCS_POSTHOG_PROJECT_API_KEY: 'posthog-project-key',
    },
    async () => {
      const calls = []
      const previousFetch = globalThis.fetch
      globalThis.fetch = async (...args) => {
        calls.push(args)
        return { ok: true, status: 202 }
      }
      try {
        const req = new EventEmitter()
        req.method = 'POST'
        req.headers = { host: 'www.roadrunner.media', origin: 'https://www.roadrunner.media' }
        req.body = {
          event_name: 'page_view',
          event_class: 'DIAGNOSTIC',
          source_of_truth: 'attacker',
          unexpected: 'drop-me',
          payload: {
            event_id: 'event-1',
            page_url: 'https://www.roadrunner.media/?proof=1',
            site_id: 'attacker-site-id',
            customer_account_id: 'attacker-customer-id',
            global_id: 'attacker-global-id',
            email: 'drop@example.test',
          },
        }
        const res = makeRes()
        await handler(req, res)

        assert.equal(res.statusCode, 202)
        assert.equal(calls.length, 2)
        assert.equal(calls[0][0], 'https://api.example.test/api/analytics/events')
        assert.equal(calls[0][1].headers['x-gcs-analytics-token'], 'server-only-token')
        const forwarded = JSON.parse(calls[0][1].body)
        assert.equal(forwarded.event_name, 'page_view')
        assert.equal(forwarded.source_of_truth, 'browser')
        assert.equal(forwarded.payload.site_id, 'server-site-id')
        assert.equal(forwarded.payload.customer_account_id, 'server-customer-id')
        assert.equal(forwarded.payload.global_id, 'server-global-id')
        assert.equal(forwarded.unexpected, undefined)
        assert.equal(calls[1][0], 'https://posthog.example.test/capture/')
        const posthog = JSON.parse(calls[1][1].body)
        assert.equal(posthog.api_key, 'posthog-project-key')
        assert.equal(posthog.event, 'page_view')
        assert.equal(posthog.properties.site_id, 'server-site-id')
        assert.equal(posthog.properties.customer_account_id, 'server-customer-id')
        assert.equal(posthog.properties.global_id, 'server-global-id')
        assert.equal(posthog.properties.email, undefined)
      } finally {
        globalThis.fetch = previousFetch
      }
    }
  )
})

test('rejects cross-origin browser writes', async () => {
  const req = new EventEmitter()
  req.method = 'POST'
  req.headers = { host: 'www.roadrunner.media', origin: 'https://attacker.example' }
  req.body = { events: [] }
  const res = makeRes()

  await handler(req, res)

  assert.equal(res.statusCode, 403)
  assert.match(res.body, /origin_not_allowed/)
})

test('rejects writes without browser origin', async () => {
  const req = new EventEmitter()
  req.method = 'POST'
  req.headers = { host: 'www.roadrunner.media' }
  req.body = { event_name: 'page_view', payload: {} }
  const res = makeRes()

  await handler(req, res)

  assert.equal(res.statusCode, 403)
  assert.match(res.body, /origin_not_allowed/)
})

test('rejects unsupported events before proxying with server token', async () => {
  await withEnv(
    {
      GCS_ANALYTICS_INGEST_ENDPOINT: 'https://api.example.test/api/analytics/events',
      GCS_ANALYTICS_INGEST_TOKEN: 'server-only-token',
      GCS_ANALYTICS_SITE_ID: 'server-site-id',
      GCS_ANALYTICS_CUSTOMER_ACCOUNT_ID: 'server-customer-id',
    },
    async () => {
      const previousFetch = globalThis.fetch
      globalThis.fetch = async () => {
        throw new Error('fetch should not run')
      }
      try {
        const req = new EventEmitter()
        req.method = 'POST'
        req.headers = { host: 'www.roadrunner.media', origin: 'https://www.roadrunner.media' }
        req.body = { event_name: 'purchase', payload: { page_url: 'https://www.roadrunner.media/' } }
        const res = makeRes()

        await handler(req, res)

        assert.equal(res.statusCode, 400)
        assert.match(res.body, /event_not_allowed/)
      } finally {
        globalThis.fetch = previousFetch
      }
    }
  )
})
