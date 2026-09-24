import { useEffect } from 'react'
import { startNativeAnalytics } from './gcsNativeAnalytics'

// Listed key by key so the build inlines only these public values, under their env names.
const env = {
  VITE_GCS_SITE_ID: import.meta.env.VITE_GCS_SITE_ID,
  VITE_GCS_CUSTOMER_ACCOUNT_ID: import.meta.env.VITE_GCS_CUSTOMER_ACCOUNT_ID,
  VITE_GCS_POSTHOG_KEY: import.meta.env.VITE_GCS_POSTHOG_KEY,
  VITE_POSTHOG_KEY: import.meta.env.VITE_POSTHOG_KEY,
  VITE_GCS_POSTHOG_HOST: import.meta.env.VITE_GCS_POSTHOG_HOST,
  VITE_POSTHOG_HOST: import.meta.env.VITE_POSTHOG_HOST,
  VITE_GA_ID: import.meta.env.VITE_GA_ID,
  VITE_GCS_GA4_MEASUREMENT_ID: import.meta.env.VITE_GCS_GA4_MEASUREMENT_ID,
  VITE_GCS_ANALYTICS_CONSENT_STATE: import.meta.env.VITE_GCS_ANALYTICS_CONSENT_STATE,
}

export default function GcsAnalyticsProvider() {
  useEffect(() => {
    startNativeAnalytics({ env, win: window, doc: document })
  }, [])

  return null
}
