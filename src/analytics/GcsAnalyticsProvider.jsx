import { useEffect } from 'react'
import { mountStorefrontAnalytics } from '@gcs/analytics'

const env = import.meta.env

const readList = (value, fallback = []) =>
  (value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .concat(fallback)
    .filter((item, index, all) => all.indexOf(item) === index)

const readBool = (value, fallback = false) => {
  if (value === undefined || value === null || value === '') return fallback
  return String(value).toLowerCase() === 'true'
}

const firstPartyEndpoint = (value) => {
  const configured = value || '/api/gcs-analytics-events'
  if (configured.startsWith('/') && typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${configured}`
  }
  return configured
}

const readStoredId = (key) => {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

const writeStoredId = (key, value) => {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage can be disabled; the fallback still works with an in-memory id.
  }
}

const fallbackId = () => {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID()
  if (window.crypto?.getRandomValues) {
    const bytes = window.crypto.getRandomValues(new Uint8Array(16))
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
  }
  return `ga4-${Date.now()}-${Math.floor(window.performance?.now?.() || 0)}`
}

const ga4ClientId = () => {
  const key = 'gcs_ga4_client_id'
  const stored = readStoredId(key)
  if (stored) return stored
  const next = fallbackId()
  writeStoredId(key, next)
  return next
}

const hasGa4CollectResource = () => {
  if (!window.performance?.getEntriesByType) return false
  return window.performance.getEntriesByType('resource').some((entry) =>
    /(?:google-analytics\.com|analytics\.google\.com)\/g\/collect/.test(entry.name)
  )
}

const addGa4Param = (params, key, value) => {
  if (value === undefined || value === null || value === '') return
  params.set(key, String(value).slice(0, 100))
}

const sendGa4PageViewFallback = ({ measurementId, siteId, customerAccountId, globalId }) => {
  if (!measurementId || typeof window === 'undefined' || hasGa4CollectResource()) return

  const query = new URLSearchParams(window.location.search)
  const params = new URLSearchParams({
    v: '2',
    tid: measurementId,
    cid: ga4ClientId(),
    ul: window.navigator.language || 'en-us',
    sr: `${window.screen.width}x${window.screen.height}`,
    en: 'page_view',
    dl: window.location.href,
    dt: document.title || '',
    _p: String(Date.now()),
  })

  addGa4Param(params, 'ep.campaign_key', query.get('utm_campaign'))
  addGa4Param(params, 'ep.utm_source', query.get('utm_source'))
  addGa4Param(params, 'ep.utm_medium', query.get('utm_medium'))
  addGa4Param(params, 'ep.utm_campaign', query.get('utm_campaign'))
  addGa4Param(params, 'ep.site_id', siteId)
  addGa4Param(params, 'ep.customer_account_id', customerAccountId)
  addGa4Param(params, 'ep.global_id', globalId)
  addGa4Param(params, 'ep.gcs_ga4_fallback', 'direct_collect')

  const url = `https://www.google-analytics.com/g/collect?${params.toString()}`
  if (window.navigator.sendBeacon) {
    window.navigator.sendBeacon(url)
    return
  }
  void fetch(url, { mode: 'no-cors', keepalive: true }).catch(() => undefined)
}

export default function GcsAnalyticsProvider() {
  useEffect(() => {
    const siteId = env.VITE_GCS_SITE_ID
    const customerAccountId = env.VITE_GCS_CUSTOMER_ACCOUNT_ID
    const endpoint = firstPartyEndpoint(env.VITE_ANALYTICS_INGEST_ENDPOINT)

    if (!siteId || !customerAccountId || !endpoint) {
      return undefined
    }

    const handle = mountStorefrontAnalytics({
      profile: {
        site_id: siteId,
        customer_account_id: customerAccountId,
        capabilities: readList(env.VITE_GCS_SITE_CAPABILITIES, ['lead_gen', 'content']),
        enabled_packs: readList(env.VITE_GCS_ENABLED_PACKS, [
          'core_engagement',
          'local_service_intent',
          'form_quality',
          'diagnostics_performance',
          'content_media',
          'search_discovery',
          'data_quality',
        ]),
        primary_conversion: env.VITE_GCS_PRIMARY_CONVERSION || 'lead_submitted',
        compliance_profile: env.VITE_GCS_COMPLIANCE_PROFILE || 'STANDARD',
        replay_enabled: readBool(env.VITE_GCS_REPLAY_ENABLED),
        fingerprinting_mode: env.VITE_GCS_FINGERPRINTING_MODE || 'PSEUDONYMOUS',
        sampling_config: {
          default_rate: 1,
          by_event: {
            scroll_depth: 0.25,
            time_on_page: 0.25,
            web_vitals: 0.1,
          },
        },
        ga4_extended_events_enabled: readBool(env.VITE_GCS_GA4_EXTENDED_EVENTS_ENABLED, true),
        quality_events_enabled: readBool(env.VITE_GCS_QUALITY_EVENTS_ENABLED, true),
      },
      consentState: env.VITE_GCS_ANALYTICS_CONSENT_STATE || 'accepted_override',
      gaId: env.VITE_GA_ID,
      globalId: env.VITE_GCS_GLOBAL_ID || undefined,
      firstPartyEndpoint: endpoint,
      firstPartyBrowserIngestEnabled: readBool(env.VITE_GCS_FIRST_PARTY_BROWSER_INGEST_ENABLED, true),
      firstPartyBrowserEventAllowlist: readList(env.VITE_GCS_FIRST_PARTY_BROWSER_EVENT_ALLOWLIST, [
        'page_view',
        'cta_clicked',
      ]),
      eventPipelineMode: env.VITE_EVENT_PIPELINE_MODE || 'first_party',
      eventSink: 'ga4',
      analyticsRuntimeVersion: env.VITE_GCS_ANALYTICS_RUNTIME_VERSION || 'site-analytics-runtime-v1',
      analyticsRolloutVersion:
        env.VITE_GCS_ANALYTICS_ROLLOUT_VERSION || 'roadrunner-proxy-fanout-20260702',
      analyticsAssetSha: env.VITE_GCS_ANALYTICS_ASSET_SHA || undefined,
      analyticsDeploymentId: env.VITE_GCS_ANALYTICS_DEPLOYMENT_ID || undefined,
    })
    const ga4FallbackTimer = window.setTimeout(() => {
      sendGa4PageViewFallback({
        measurementId: env.VITE_GA_ID,
        siteId,
        customerAccountId,
        globalId: env.VITE_GCS_GLOBAL_ID || undefined,
      })
    }, 3500)

    return () => {
      window.clearTimeout(ga4FallbackTimer)
      handle.cleanup()
    }
  }, [])

  return null
}
