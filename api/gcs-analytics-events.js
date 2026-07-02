const MAX_BODY_BYTES = 64 * 1024
const DEFAULT_ALLOWED_ORIGINS = ['www.roadrunner.media', 'roadrunner.media']
const ALLOWED_EVENT_NAMES = new Set(['page_view', 'cta_clicked'])
const ALLOWED_EVENT_CLASSES = new Set(['DIAGNOSTIC', 'CONVERSION', 'FUNNEL', 'ENGAGEMENT', 'QUALITY'])
const POSTHOG_PII_BLOCKLIST = new Set([
  'email',
  'phone',
  'name',
  'message',
  'message_body',
  'free_text',
  'lead_message',
  'address',
  'street',
  'city',
  'zip',
  'postal_code',
  'region',
])

const json = (res, status, body) => {
  res.status(status).setHeader('content-type', 'application/json')
  res.end(JSON.stringify(body))
}

const readBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        reject(new Error('payload_too_large'))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })

const originHost = (value) => {
  try {
    return value ? new URL(value).host.toLowerCase() : ''
  } catch {
    return ''
  }
}

const allowedOrigins = () =>
  new Set([
    ...DEFAULT_ALLOWED_ORIGINS,
    ...String(process.env.GCS_ANALYTICS_ALLOWED_ORIGINS || '')
      .split(',')
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean),
  ])

const isAllowedOrigin = (req) => {
  const origin = originHost(req.headers.origin)
  const host = String(req.headers.host || '').toLowerCase()
  return Boolean(origin) && (origin === host || allowedOrigins().has(origin))
}

const isPlainObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value)

const parseBody = (body) => {
  if (isPlainObject(body)) return body
  if (typeof body !== 'string') throw new Error('invalid_json')
  const parsed = JSON.parse(body)
  if (!isPlainObject(parsed)) throw new Error('invalid_json')
  return parsed
}

const limitedString = (value, maxLength) => {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed ? trimmed.slice(0, maxLength) : undefined
}

const isRoadrunnerPageUrl = (value) => {
  if (typeof value !== 'string' || value.trim() === '') return true
  try {
    return allowedOrigins().has(new URL(value).host.toLowerCase())
  } catch {
    return false
  }
}

const sanitizePosthogProperties = (properties) =>
  Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => !POSTHOG_PII_BLOCKLIST.has(key) && value !== undefined)
  )

const buildScopedEvent = (input, identity) => {
  const eventName = limitedString(input.event_name, 80)
  if (!eventName || !ALLOWED_EVENT_NAMES.has(eventName)) {
    throw new Error('event_not_allowed')
  }

  const payload = isPlainObject(input.payload) ? input.payload : {}
  if (!isRoadrunnerPageUrl(payload.page_url)) {
    throw new Error('page_url_not_allowed')
  }

  const eventClass = limitedString(input.event_class, 40)
  const dedupeKey = limitedString(input.dedupe_key, 512) || limitedString(payload.event_id, 512)
  const scopedPayload = {
    ...payload,
    site_id: identity.siteId,
    customer_account_id: identity.customerAccountId,
  }

  if (identity.globalId) scopedPayload.global_id = identity.globalId
  else delete scopedPayload.global_id

  return {
    event_name: eventName,
    event_class: eventClass && ALLOWED_EVENT_CLASSES.has(eventClass) ? eventClass : 'DIAGNOSTIC',
    source_of_truth: 'browser',
    dedupe_key: dedupeKey,
    payload: scopedPayload,
  }
}

const buildUpstreamBody = (event) => JSON.stringify(event)

const posthogEndpoint = (host) => {
  const normalized = (host || 'https://us.posthog.com').replace(/\/+$/, '')
  return /^https:\/\//i.test(normalized) ? `${normalized}/capture/` : null
}

const sendToPosthog = async (event) => {
  const apiKey = process.env.GCS_POSTHOG_PROJECT_API_KEY
  const endpoint = posthogEndpoint(process.env.GCS_POSTHOG_HOST)
  if (!apiKey || !endpoint) return { configured: false, ok: true }

  const properties = sanitizePosthogProperties({
    ...event.payload,
    event_class: event.event_class,
    source_of_truth: event.source_of_truth,
    dedupe_key: event.dedupe_key,
    gcs_layer: 'roadrunner_proxy',
  })
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      event: event.event_name,
      distinct_id: properties.anonymous_id || properties.session_id || properties.customer_account_id,
      properties,
    }),
  })

  return { configured: true, ok: response.ok, status: response.status }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    json(res, 405, { ok: false, error: 'method_not_allowed' })
    return
  }

  if (!isAllowedOrigin(req)) {
    json(res, 403, { ok: false, error: 'origin_not_allowed' })
    return
  }

  const endpoint = process.env.GCS_ANALYTICS_INGEST_ENDPOINT
  const token = process.env.GCS_ANALYTICS_INGEST_TOKEN
  const siteId = process.env.GCS_ANALYTICS_SITE_ID
  const customerAccountId = process.env.GCS_ANALYTICS_CUSTOMER_ACCOUNT_ID

  if (!endpoint || !token || !siteId || !customerAccountId || !/^https:\/\//i.test(endpoint)) {
    json(res, 503, { ok: false, error: 'analytics_proxy_not_configured' })
    return
  }

  let event
  try {
    const rawBody = req.body || (await readBody(req))
    event = buildScopedEvent(parseBody(rawBody), {
      siteId,
      customerAccountId,
      globalId: process.env.GCS_ANALYTICS_GLOBAL_ID,
    })
  } catch (error) {
    if (error?.message === 'payload_too_large') {
      json(res, 413, { ok: false, error: 'invalid_body' })
      return
    }
    if (error?.message === 'event_not_allowed' || error?.message === 'page_url_not_allowed') {
      json(res, 400, { ok: false, error: error.message })
      return
    }
    json(res, 400, { ok: false, error: 'invalid_body' })
    return
  }

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-gcs-analytics-token': token,
      },
      body: buildUpstreamBody(event),
    })
    const posthog = await sendToPosthog(event).catch(() => ({ configured: true, ok: false, status: 0 }))
    json(res, upstream.ok ? 202 : upstream.status, {
      ok: upstream.ok,
      posthog: posthog.configured ? { ok: posthog.ok, status: posthog.status } : { configured: false },
    })
  } catch {
    json(res, 502, { ok: false, error: 'analytics_upstream_unavailable' })
  }
}
