import { useEffect } from 'react'
import { mountSiteAnalytics } from '@gcs/analytics'

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

export default function GcsAnalyticsProvider() {
  useEffect(() => {
    const siteId = env.VITE_GCS_SITE_ID
    const customerAccountId = env.VITE_GCS_CUSTOMER_ACCOUNT_ID
    const endpoint = firstPartyEndpoint(env.VITE_ANALYTICS_INGEST_ENDPOINT)

    if (!siteId || !customerAccountId || !endpoint) {
      return undefined
    }

    const handle = mountSiteAnalytics({
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
      gaId: env.VITE_GA_ID || env.VITE_GCS_GA4_MEASUREMENT_ID,
      ga4MeasurementId: env.VITE_GA_ID || env.VITE_GCS_GA4_MEASUREMENT_ID,
      globalId: env.VITE_GCS_GLOBAL_ID || undefined,
      firstPartyEndpoint: endpoint,
      firstPartyBrowserIngestEnabled: readBool(env.VITE_GCS_FIRST_PARTY_BROWSER_INGEST_ENABLED, true),
      firstPartyBrowserEventAllowlist: readList(env.VITE_GCS_FIRST_PARTY_BROWSER_EVENT_ALLOWLIST, [
        'page_view',
        'cta_clicked',
        'email_clicked',
      ]),
      eventPipelineMode: env.VITE_EVENT_PIPELINE_MODE || 'first_party',
      eventSink: env.VITE_EVENT_SINK || 'ga4',
      posthogMode: env.VITE_POSTHOG_MODE || 'cloud',
      posthogKey: env.VITE_GCS_POSTHOG_KEY || env.VITE_POSTHOG_KEY || undefined,
      posthogHost: env.VITE_GCS_POSTHOG_HOST || env.VITE_POSTHOG_HOST || '/_gcs/e',
      posthogUiHost: env.VITE_GCS_POSTHOG_UI_HOST || undefined,
      posthogNativeCapture: { autocapture: false, pageview: false, pageleave: false },
      posthogPageviewStrategy: 'off',
      ga4DirectCollectEnabled: readBool(env.VITE_GCS_GA4_DIRECT_COLLECT_ENABLED, true),
      ga4DirectCollectEventAllowlist: readList(env.VITE_GCS_GA4_DIRECT_COLLECT_EVENT_ALLOWLIST, ['page_view']),
      analyticsRuntimeVersion: env.VITE_GCS_ANALYTICS_RUNTIME_VERSION || 'site-analytics-runtime-v1',
      analyticsRolloutVersion:
        env.VITE_GCS_ANALYTICS_ROLLOUT_VERSION || 'analytics-fleet-20260702-roadrunner',
      analyticsAssetSha: env.VITE_GCS_ANALYTICS_ASSET_SHA || undefined,
      analyticsDeploymentId: env.VITE_GCS_ANALYTICS_DEPLOYMENT_ID || undefined,
      templateId: env.VITE_GCS_TEMPLATE_ID || 'roadrunner-media-vite',
      templateVersion: env.VITE_GCS_TEMPLATE_VERSION || 'roadrunner-media-vite-20260702',
      pageRole: 'home',
      businessVertical: 'real_estate_media',
      deploymentId: env.VITE_GCS_ANALYTICS_DEPLOYMENT_ID || undefined,
    })

    return () => handle.cleanup()
  }, [])

  return null
}
