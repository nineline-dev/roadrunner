import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type StorefrontEventPipelineMode = 'first_party' | 'vendor_first';
type StorefrontEventSink = 'posthog' | 'ga4' | 'rudderstack' | 'none';
type StorefrontPosthogMode = 'cloud' | 'selfhost';
interface StorefrontAnalyticsModes {
    eventPipelineMode: StorefrontEventPipelineMode;
    eventSink: StorefrontEventSink;
    posthogMode: StorefrontPosthogMode;
    rudderstackEnabled: boolean;
}
interface AnalyticsConfig {
    eventPipelineMode?: StorefrontEventPipelineMode;
    eventSink?: StorefrontEventSink;
    posthogMode?: StorefrontPosthogMode;
    posthog?: {
        apiKey: string;
        host?: string;
        projectId?: string;
    };
    ga4?: {
        measurementId: string;
    };
    rudderstack?: {
        writeKey: string;
        dataPlaneUrl: string;
    };
    debug?: boolean;
}
interface AnalyticsEvent {
    name: string;
    properties?: AnalyticsProperties;
    timestamp?: Date;
}
interface AnalyticsUser {
    id: string;
    traits?: Record<string, unknown>;
    email?: string;
    name?: string;
}
interface AnalyticsProperties {
    [key: string]: unknown;
}
interface PageProperties {
    title?: string;
    path?: string;
    url?: string;
    referrer?: string;
    search?: string;
    [key: string]: unknown;
}
interface AnalyticsClient {
    track: (event: string, properties?: AnalyticsProperties) => void;
    identify: (userId: string, traits?: Record<string, unknown>) => void;
    page: (name?: string, properties?: PageProperties) => void;
    group?: (groupId: string, traits?: Record<string, unknown>) => void;
    alias?: (userId: string, previousId: string) => void;
    reset?: () => void;
}
type StorefrontConsentState = 'granted' | 'denied' | 'essential_only' | 'accepted_override';
type CapabilityName = 'lead_gen' | 'ecommerce' | 'booking' | 'restaurant' | 'content' | 'saas' | 'hybrid';
type AnalyticsPack = 'core_engagement' | 'search_discovery' | 'content_media' | 'local_service_intent' | 'form_quality' | 'diagnostics_performance' | 'data_quality' | 'outcome_lifecycle' | 'experimentation';
type EventDestination = 'ga4' | 'posthog' | 'first_party';
type AnalyticsEventClass = 'OUTCOME' | 'QUALITY' | 'LIFECYCLE' | 'DIAGNOSTIC';
type AnalyticsComplianceProfile = 'STANDARD' | 'HIGH_PRIVACY' | 'HIPAA_LIKE';
type AnalyticsFingerprintingMode = 'OFF' | 'PSEUDONYMOUS' | 'TRUE_DEVICE';
type StorefrontGa4EventName = 'page_view' | 'view_item_list' | 'select_item' | 'view_item' | 'add_to_cart' | 'remove_from_cart' | 'view_cart' | 'begin_checkout' | 'add_payment_info' | 'purchase' | 'refund' | 'search' | 'generate_lead';
type StorefrontPosthogOnlyEventName = 'session_started' | 'session_updated' | 'anonymous_id_created' | 'cta_clicked' | 'phone_clicked' | 'email_clicked' | 'form_viewed' | 'form_started' | 'form_submit_attempted' | 'form_submitted' | 'lead_submitted' | 'newsletter_submitted' | 'landing_view' | 'video_started' | 'video_progress' | 'video_completed' | 'scroll_depth' | 'time_on_page' | 'page_engaged' | 'section_viewed' | 'outbound_link_clicked' | 'file_downloaded' | 'search_started' | 'search_submitted' | 'search_zero_results' | 'search_result_clicked' | 'filter_applied' | 'sort_changed' | 'gallery_item_viewed' | 'faq_opened' | 'testimonial_viewed' | 'resource_downloaded' | 'newsletter_subscribed' | 'directions_clicked' | 'map_opened' | 'quote_requested' | 'calendar_handoff_clicked' | 'booking_started' | 'booking_completed' | 'reservation_started' | 'reservation_completed' | 'chat_opened' | 'chat_message_sent' | 'form_field_completed' | 'form_validation_error' | 'form_validation_failed' | 'form_abandoned' | 'multi_step_form_progressed' | 'js_error' | 'api_error' | 'asset_load_failed' | 'route_transition_failed' | '404_viewed' | '500_viewed' | 'rage_click' | 'dead_click' | 'web_vitals';
type StorefrontFirstPartyEventName = 'event_dropped' | 'schema_violation' | 'event_rate_limited' | 'sdk_error' | 'vendor_delivery_failed' | 'consent_state_initialized' | 'consent_state_updated' | 'webhook_deduped' | 'identity_merged' | 'lead_qualified' | 'lead_contacted' | 'lead_booked' | 'lead_won' | 'lead_lost' | 'booking_confirmed' | 'chargeback_received' | 'feature_flag_exposure' | 'experiment_exposure' | 'experiment_converted' | 'survey_shown' | 'survey_dismissed' | 'survey_sent' | 'survey_abandoned' | 'cohort_matched';
type StorefrontEventName = StorefrontGa4EventName | StorefrontPosthogOnlyEventName | StorefrontFirstPartyEventName;
interface StorefrontBaseEventProperties {
    event_id: string;
    event_spec_version: 1;
    sent_at: string;
    site_id: string;
    customer_account_id: string;
    global_id?: string | null;
    session_id: string;
    anonymous_id: string;
    page_url: string;
    path: string;
    referrer?: string | null;
    site_capabilities: string[];
    consent_state: StorefrontConsentState;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    utm_term?: string | null;
    utm_content?: string | null;
    gclid?: string | null;
    gbraid?: string | null;
    wbraid?: string | null;
    fbclid?: string | null;
    ga_client_id?: string | null;
    ga_session_id?: string | null;
    engagement_time_msec?: number;
}
interface StorefrontItemPayload {
    item_id?: string | null;
    item_name?: string | null;
    item_variant?: string | null;
    item_brand?: string | null;
    item_category?: string | null;
    item_list_name?: string | null;
    item_list_id?: string | null;
    index?: number | null;
    price?: number | null;
    quantity?: number | null;
}
interface StorefrontEcommerceEventProperties extends StorefrontBaseEventProperties {
    shop_domain?: string | null;
    product_gid?: string | null;
    variant_gid?: string | null;
    collection_handle?: string | null;
    cart_id?: string | null;
    checkout_token?: string | null;
    transaction_id?: string | null;
    currency?: string | null;
    value?: number | null;
    discount_value?: number | null;
    coupon?: string | null;
    items?: StorefrontItemPayload[];
}
interface StorefrontLeadEventProperties extends StorefrontBaseEventProperties {
    lead_form_id?: string | null;
    lead_type?: string | null;
    submission_id?: string | null;
    cta_location?: string | null;
    cta_text?: string | null;
    phone_click_target?: string | null;
    email_click_target?: string | null;
}
interface StorefrontRuntimeEventProperties extends StorefrontBaseEventProperties {
    event_class?: AnalyticsEventClass;
    dedupe_key?: string | null;
    source_of_truth?: string | null;
    rate_limit_reason?: string | null;
    validation_errors?: string[];
    failed_event_name?: string | null;
    endpoint?: string | null;
    latency_ms?: number | null;
    section_id?: string | null;
    search_term_bucket?: string | null;
    result_count?: number | null;
    file_extension?: string | null;
    media_type?: string | null;
    progress_pct?: number | null;
    flag_key?: string | null;
    flag_variant?: string | boolean | null;
    experiment_key?: string | null;
    experiment_variant?: string | boolean | null;
    variant?: string | boolean | null;
    conversion_name?: string | null;
    '$feature_flag'?: string | null;
    '$feature_flag_response'?: string | boolean | null;
    [featureProperty: `$feature/${string}`]: string | boolean | null | undefined;
}
interface StorefrontEvent {
    name: StorefrontEventName;
    properties: StorefrontBaseEventProperties | StorefrontEcommerceEventProperties | StorefrontLeadEventProperties | StorefrontRuntimeEventProperties;
}
interface StorefrontValidationResult {
    valid: boolean;
    errors: string[];
}
interface SiteAnalyticsProfile {
    site_id: string;
    customer_account_id: string;
    capabilities: CapabilityName[];
    enabled_packs: AnalyticsPack[];
    primary_conversion: string;
    compliance_profile: AnalyticsComplianceProfile;
    replay_enabled: boolean;
    fingerprinting_mode: AnalyticsFingerprintingMode;
    sampling_config?: Record<string, unknown> | null;
    ga4_extended_events_enabled: boolean;
    quality_events_enabled: boolean;
    last_seen_event_at?: string | null;
    last_qa_event_at?: string | null;
}
interface StorefrontEventDefinition {
    pack: AnalyticsPack;
    destinations: EventDestination[];
    event_class?: AnalyticsEventClass;
    required_properties?: string[];
    required_capabilities?: CapabilityName[];
}
interface StorefrontDispatchConfig {
    profile: SiteAnalyticsProfile;
    eventPipelineMode?: StorefrontEventPipelineMode;
    eventSink?: StorefrontEventSink;
    posthogMode?: StorefrontPosthogMode;
    rudderstackEnabled?: boolean;
    firstPartyEndpoint?: string;
    firstPartyHeaders?: Record<string, string>;
    firstPartyBrowserIngestEnabled?: boolean;
    firstPartyBrowserEventAllowlist?: StorefrontEventName[] | string;
    fetchImpl?: typeof fetch;
}
interface StorefrontRuntimeConfig extends StorefrontDispatchConfig {
    consentState: StorefrontConsentState;
    gaId?: string;
    posthogKey?: string;
    posthogHost?: string;
    globalId?: string | null;
    pageCategory?: string | null;
}
interface StorefrontRuntimeHandle {
    cleanup: () => void;
    track: (name: StorefrontEventName, properties?: Record<string, unknown>) => Promise<StorefrontValidationResult>;
    identify: (distinctId: string, properties?: Record<string, unknown>) => void;
    alias: (distinctId: string, previousId: string) => void;
    trackConversion: (submissionId: string, properties?: Record<string, unknown>) => Promise<StorefrontValidationResult>;
    trackFeatureFlagExposure: (flagKey: string, flagVariant: string | boolean, properties?: Record<string, unknown>) => Promise<StorefrontValidationResult>;
    trackExperimentExposure: (experimentKey: string, experimentVariant: string | boolean, properties?: Record<string, unknown>) => Promise<StorefrontValidationResult>;
    trackExperimentConversion: (experimentKey: string, experimentVariant: string | boolean, conversionName: string, properties?: Record<string, unknown>) => Promise<StorefrontValidationResult>;
}
interface StorefrontObserverHandle {
    cleanup: () => void;
}

interface PostHogConfig {
    apiKey: string;
    host?: string;
    options?: Record<string, unknown>;
}
declare function PostHogProvider({ children, config }: {
    children: React.ReactNode;
    config: PostHogConfig;
}): react_jsx_runtime.JSX.Element;
declare function usePostHog(): AnalyticsClient;

interface GA4Config {
    measurementId: string;
    debug?: boolean;
}
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}
declare function GA4Provider({ children, config }: {
    children: React.ReactNode;
    config: GA4Config;
}): react_jsx_runtime.JSX.Element;
declare function useGA4(): AnalyticsClient;

interface RudderStackConfig {
    writeKey: string;
    dataPlaneUrl: string;
    options?: Record<string, unknown>;
}
declare function RudderStackProvider({ children, config }: {
    children: React.ReactNode;
    config: RudderStackConfig;
}): react_jsx_runtime.JSX.Element;
declare function useRudderStack(): AnalyticsClient;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
/**
 * Unified analytics API that broadcasts to all configured providers
 */
declare const analytics: AnalyticsClient;
/**
 * Provider that initializes all configured analytics services
 */
declare function UnifiedAnalyticsProvider({ children, config }: {
    children: React.ReactNode;
    config: AnalyticsConfig;
}): react_jsx_runtime.JSX.Element;
declare function useAnalytics(): AnalyticsClient;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
declare const DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT = "/api/analytics/events";
declare const createStorefrontDispatcher: (config: StorefrontDispatchConfig) => {
    dispatch: (event: StorefrontEvent) => Promise<StorefrontValidationResult>;
    getEnabledPacks: () => AnalyticsPack[];
    getEventDestinations: (eventName: StorefrontEventName) => EventDestination[];
    isEventEnabled: (eventName: StorefrontEventName) => boolean;
    shouldSample: (eventName: StorefrontEventName) => boolean;
};

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
        gcsAnalytics?: StorefrontRuntimeHandle;
    }
}
declare const mountStorefrontAnalytics: (config: StorefrontRuntimeConfig) => StorefrontRuntimeHandle;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
declare const getStorefrontEventDestinations: (name: StorefrontEventName) => {
    posthog: boolean;
    ga4: boolean;
    firstPartyOnly: boolean;
};
declare const validateStorefrontEvent: (event: StorefrontEvent) => StorefrontValidationResult;
/**
 * @deprecated Use `createStorefrontDispatcher` or `mountStorefrontAnalytics`.
 * This legacy helper is kept only for older callers that already initialized
 * provider SDKs; new browser paths must use the dispatcher so profile gates,
 * sampling, first-party dispatch, and GA4 sanitization stay canonical.
 */
declare const trackStorefrontEvent: (event: StorefrontEvent) => void;
declare const identifyStorefrontPerson: (distinctId: string, properties: Record<string, unknown>) => void;
declare const registerStorefrontContext: (properties: Record<string, unknown>) => void;
declare const setStorefrontReplay: (enabled: boolean) => void;

declare const DEFAULT_PACKS_BY_CAPABILITY: Record<CapabilityName, AnalyticsPack[]>;
declare const STOREFRONT_EVENT_DEFINITIONS: Record<StorefrontEventName, StorefrontEventDefinition>;
declare const getStorefrontEventDefinition: (name: StorefrontEventName) => StorefrontEventDefinition;
declare const getEnabledPacksForProfile: (profile: SiteAnalyticsProfile) => AnalyticsPack[];
declare const isEventEnabledForProfile: (profile: SiteAnalyticsProfile, eventName: StorefrontEventName) => boolean;

declare const STOREFRONT_EVENT_SPEC_VERSION: 1;
declare const STOREFRONT_REQUIRED_BASE_KEYS: readonly ["event_id", "event_spec_version", "sent_at", "site_id", "customer_account_id", "session_id", "anonymous_id", "page_url", "path", "site_capabilities", "consent_state"];
declare const DEFAULT_STOREFRONT_ANALYTICS_MODES: StorefrontAnalyticsModes;
declare const resolveStorefrontAnalyticsModes: (input?: Partial<StorefrontDispatchConfig> & {
    EVENT_PIPELINE_MODE?: string;
    EVENT_SINK?: string;
    POSTHOG_MODE?: string;
}) => StorefrontAnalyticsModes;
declare const applyStorefrontEventSink: (destinations: EventDestination[], sink?: StorefrontEventSink) => EventDestination[];

type Dispatcher = ReturnType<typeof createStorefrontDispatcher>;
type ObserverOptions = {
    dispatcher: Dispatcher;
    baseEventFactory: () => Omit<StorefrontEvent, 'name' | 'properties'> & {
        properties: Record<string, unknown>;
    };
};
declare const attachScrollObserver: ({ dispatcher, baseEventFactory, thresholds }: ObserverOptions & {
    thresholds?: number[];
}) => StorefrontObserverHandle;
declare const attachTimeOnPageObserver: ({ dispatcher, baseEventFactory, intervalMs }: ObserverOptions & {
    intervalMs?: number;
}) => StorefrontObserverHandle;
declare const attachOutboundAndDownloadObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => StorefrontObserverHandle;
declare const attachVideoObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => StorefrontObserverHandle;
declare const attachSearchObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => StorefrontObserverHandle;
declare const attachFormLifecycleObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => StorefrontObserverHandle;
declare const attachErrorObservers: ({ dispatcher, baseEventFactory }: ObserverOptions) => StorefrontObserverHandle;
declare const attachWebVitalsObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => StorefrontObserverHandle;
declare const createRouteTransitionTracker: ({ dispatcher, baseEventFactory }: ObserverOptions) => {
    start: () => void;
    complete: () => void;
    fail: (reason: string) => void;
};

interface PostHogDashboardProps {
    projectId: string;
    dashboardId: string;
    apiKey?: string;
    host?: string;
    filters?: Record<string, unknown>;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Embedded PostHog dashboard component
 */
declare function PostHogDashboard({ projectId, dashboardId, apiKey, host, filters, className, style }: PostHogDashboardProps): react_jsx_runtime.JSX.Element;

interface SupersetDashboardProps {
    supersetUrl: string;
    dashboardId: string;
    filters?: Record<string, unknown>;
    guestToken?: string;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Embedded Apache Superset dashboard component
 */
declare function SupersetDashboard({ supersetUrl, dashboardId, filters, guestToken, className, style }: SupersetDashboardProps): react_jsx_runtime.JSX.Element;

export { type AnalyticsComplianceProfile, type AnalyticsConfig, type AnalyticsEvent, type AnalyticsEventClass, type AnalyticsFingerprintingMode, type AnalyticsPack, type AnalyticsProperties, type AnalyticsUser, type CapabilityName, DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT, DEFAULT_PACKS_BY_CAPABILITY, DEFAULT_STOREFRONT_ANALYTICS_MODES, type EventDestination, GA4Provider, PostHogDashboard, PostHogProvider, RudderStackProvider, STOREFRONT_EVENT_DEFINITIONS, STOREFRONT_EVENT_SPEC_VERSION, STOREFRONT_REQUIRED_BASE_KEYS, type SiteAnalyticsProfile, type StorefrontAnalyticsModes, type StorefrontBaseEventProperties, type StorefrontConsentState, type StorefrontDispatchConfig, type StorefrontEcommerceEventProperties, type StorefrontEvent, type StorefrontEventDefinition, type StorefrontEventName, type StorefrontEventPipelineMode, type StorefrontEventSink, type StorefrontFirstPartyEventName, type StorefrontGa4EventName, type StorefrontItemPayload, type StorefrontLeadEventProperties, type StorefrontObserverHandle, type StorefrontPosthogMode, type StorefrontPosthogOnlyEventName, type StorefrontRuntimeConfig, type StorefrontRuntimeEventProperties, type StorefrontRuntimeHandle, type StorefrontValidationResult, SupersetDashboard, UnifiedAnalyticsProvider, analytics, applyStorefrontEventSink, attachErrorObservers, attachFormLifecycleObserver, attachOutboundAndDownloadObserver, attachScrollObserver, attachSearchObserver, attachTimeOnPageObserver, attachVideoObserver, attachWebVitalsObserver, createRouteTransitionTracker, createStorefrontDispatcher, getEnabledPacksForProfile, getStorefrontEventDefinition, getStorefrontEventDestinations, identifyStorefrontPerson, isEventEnabledForProfile, mountStorefrontAnalytics, registerStorefrontContext, resolveStorefrontAnalyticsModes, setStorefrontReplay, trackStorefrontEvent, useAnalytics, useGA4, usePostHog, useRudderStack, validateStorefrontEvent };
