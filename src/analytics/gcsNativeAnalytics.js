// Roadrunner adapter for the canonical GCS native analytics runtime.
//
// public/gcs-analytics-native.js is byte-identical to the GCS build of
// packages/analytics/standalone/gcs-analytics-native.js (sha256 d834ad5d...). It mounts
// itself from window.__GCS_ANALYTICS_CONFIG__, sends PostHog's own $pageview and GA4's own
// page_view, tags every event with the six scope keys below, and reads the site's live
// product switches from /api/analytics/site-config. Keep this file to site configuration.

export const NATIVE_RUNTIME_ID = 'gcs-analytics-runtime'
export const NATIVE_RUNTIME_SRC = '/gcs-analytics-native.js'
// Marker for bundle and page checks; the runtime does not attach it to events.
export const NATIVE_RUNTIME_VERSION = 'gcs-analytics-native@d834ad5d'

// Production events only: previews, localhost and every other host load nothing.
// One Vercel project serves this build and roadrunner.media is a project-level 308 redirect
// to www, so a visit runs this code on www. Both hosts carry the same site id: the operator's
// VITE_GCS_SITE_ID, which is the registry row for www.roadrunner.media (identity authority,
// 2026-09-24). The registry's separate apex row is left alone and never receives events.
export const PRODUCTION_HOSTS = ['roadrunner.media', 'www.roadrunner.media']

// Registry business of the published www.roadrunner.media site (identity authority, 2026-09-24).
// The site id itself comes from VITE_GCS_SITE_ID so the operator controls it per environment.
export const ROADRUNNER_BUSINESS_ID = '1bee7396-4dfd-44b1-8728-69a6f6ba4629'
export const SITE_STAGE = 'managed_prod'
export const ENVIRONMENT = 'production'
export const LIVE_CONFIG_URL = 'https://api.9line.dev/api/analytics/site-config'
export const DEFAULT_POSTHOG_HOST = '/_gcs/e'

const GRANT_STATES = ['granted', 'accepted_override']

const clean = (value) => (typeof value === 'string' ? value.trim() : '')

// Roadrunner profile as served today (capabilities, packs, GA4 extended and quality on), with
// replay OFF (Josh, 2026-09-24). Replay is OFF in the build and is not env-controlled: only an
// audited profile change served by the live endpoint can enable it. The native runtime acts
// on site_id, customer_account_id and replay_enabled; the other fields are the profile carried
// as data (it sends no pack or quality events).
export const buildRoadrunnerProfile = (siteId, customerAccountId) => ({
  site_id: siteId,
  customer_account_id: customerAccountId,
  capabilities: ['lead_gen', 'content'],
  enabled_packs: [
    'core_engagement',
    'local_service_intent',
    'form_quality',
    'diagnostics_performance',
    'content_media',
    'search_discovery',
    'data_quality',
  ],
  primary_conversion: 'lead_submitted',
  compliance_profile: 'STANDARD',
  replay_enabled: false,
  fingerprinting_mode: 'PSEUDONYMOUS',
  sampling_config: {
    default_rate: 1,
    by_event: { web_vitals: 0.1, scroll_depth: 0.25, time_on_page: 0.25 },
  },
  ga4_extended_events_enabled: true,
  quality_events_enabled: true,
})

// Returns null when the build has no site or customer id (e.g. a preview without the env).
export const buildNativeAnalyticsConfig = (env) => {
  const siteId = clean(env.VITE_GCS_SITE_ID)
  const customerAccountId = clean(env.VITE_GCS_CUSTOMER_ACCOUNT_ID)
  if (!siteId || !customerAccountId) return null
  const posthogKey = clean(env.VITE_GCS_POSTHOG_KEY) || clean(env.VITE_POSTHOG_KEY)
  const ga4MeasurementId = clean(env.VITE_GA_ID) || clean(env.VITE_GCS_GA4_MEASUREMENT_ID)

  // No consentState and no posthogPageviewStrategy: the native SDK keeps a visitor's saved
  // choice without an explicit opt-in, and PostHog captures its own $pageview.
  return {
    profile: buildRoadrunnerProfile(siteId, customerAccountId),
    businessId: ROADRUNNER_BUSINESS_ID,
    pageId: siteId,
    siteStage: SITE_STAGE,
    environment: ENVIRONMENT,
    analyticsConfigUrl: LIVE_CONFIG_URL,
    analyticsRuntimeVersion: NATIVE_RUNTIME_VERSION,
    ...(ga4MeasurementId ? { ga4MeasurementId } : {}),
    ...(posthogKey ? { posthogKey } : {}),
    posthogHost: clean(env.VITE_GCS_POSTHOG_HOST) || clean(env.VITE_POSTHOG_HOST) || DEFAULT_POSTHOG_HOST,
  }
}

// Unset or a grant keeps today's collection policy; any other operator value is a denial.
export const operatorDeniesAnalytics = (value) => {
  const state = clean(value).toLowerCase()
  return state !== '' && !GRANT_STATES.includes(state)
}

export const hasSavedAnalyticsDenial = ({ win, doc, posthogKey, ga4MeasurementId }) => {
  try {
    const cookies = doc.cookie.split(';').map((entry) => entry.trim())
    const hasSavedValue = (key, deniedValues) => [
      win.localStorage.getItem(key),
      ...cookies
        .filter((entry) => entry.startsWith(`${key}=`))
        .map((entry) => decodeURIComponent(entry.slice(key.length + 1))),
    ].some((value) => deniedValues.includes(value?.trim().toLowerCase()))

    // Check both stores before the SDK loads, including native opt-outs from an earlier page.
    return Boolean(
      hasSavedValue('gcs_consent_analytics', ['denied', 'essential_only']) ||
      hasSavedValue('cookie_consent', ['no']) ||
      (posthogKey && hasSavedValue(`__ph_opt_in_out_${posthogKey}`, ['0'])) ||
      win.posthog?.has_opted_out_capturing?.() === true ||
      (ga4MeasurementId && win[`ga-disable-${ga4MeasurementId}`] === true)
    )
  } catch {
    // An unreadable store may contain a saved denial.
    return true
  }
}

// Configures and loads the native runtime once per document. Returns true when it loaded.
export const startNativeAnalytics = ({ env, win, doc }) => {
  if (!PRODUCTION_HOSTS.includes(win.location?.hostname)) return false
  if (doc.getElementById(NATIVE_RUNTIME_ID)) return false
  if (operatorDeniesAnalytics(env.VITE_GCS_ANALYTICS_CONSENT_STATE)) return false
  const config = buildNativeAnalyticsConfig(env)
  if (!config) return false
  if (hasSavedAnalyticsDenial({ win, doc, ...config })) return false

  win.__GCS_ANALYTICS_CONFIG__ = config
  const runtime = doc.createElement('script')
  runtime.id = NATIVE_RUNTIME_ID
  runtime.src = NATIVE_RUNTIME_SRC
  runtime.async = true
  doc.head.appendChild(runtime)
  return true
}
