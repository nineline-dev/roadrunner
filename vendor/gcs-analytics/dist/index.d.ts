import React from 'react';

type SiteAnalyticsExperimentDefinition = {
    key: string;
    variants: string[];
    allocation: number;
};
type SiteAnalyticsExperimentGroupType = "customer_account" | "global_entity";
type SiteAnalyticsExperimentExposureInput = {
    experiment_key: string;
    experiment_variant: string;
    assignment_id: string;
    variant_key?: string;
    assignment_reason?: string;
    exposure_event_id?: string;
    distinct_id?: string;
    group_type?: string;
    group_key?: string;
};
declare const isAllowedExperimentGroupType: (groupType: string) => groupType is SiteAnalyticsExperimentGroupType;
declare const buildExperimentGroupAssignment: (input: {
    group_type?: string;
    group_key?: string;
}) => {
    group_type: SiteAnalyticsExperimentGroupType;
    group_key: string;
} | null;
declare const assignExperimentVariant: (experiment: SiteAnalyticsExperimentDefinition, entityKey: string) => string | null;
declare const buildExperimentAssignmentId: (experimentKeyInput: string, assignmentKeyInput: string) => string | null;
declare const buildExperimentExposureEvent: (input: SiteAnalyticsExperimentExposureInput) => {
    eventName: "experiment_exposure";
    properties: {
        experiment_key: string;
        experiment_variant: string;
        variant_key: string;
        assignment_id: string;
        assignment_reason: string;
        exposure_event_id: string;
        event_id: string;
        distinct_id: string;
        group_type: SiteAnalyticsExperimentGroupType;
        group_key: string;
        experiment_context: string;
    };
};

type AdvancedPosthogModule = "replay" | "heatmaps" | "surveys" | "deadClicks" | "rageClicks" | "exceptions" | "webVitals" | "browserLogs";
type AdvancedPosthogModuleProfile = "off" | "canary" | "production";
type AdvancedPosthogModuleConsentState = "unknown" | "granted" | "denied" | "essential_only" | "accepted_override";
type AdvancedPosthogModuleState = Record<AdvancedPosthogModule, boolean>;
declare const ADVANCED_POSTHOG_MODULES: AdvancedPosthogModule[];
declare const disabledAdvancedPosthogModules: () => AdvancedPosthogModuleState;
declare const resolveAdvancedPosthogModules: (input: {
    approved: boolean;
    consentState: AdvancedPosthogModuleConsentState;
    profile?: AdvancedPosthogModuleProfile;
    requested?: AdvancedPosthogModule[];
}) => AdvancedPosthogModuleState;

type SiteAnalyticsPersistedQueueItem = {
    eventId: string;
    payload: unknown;
    attempts: number;
    nextAttemptAt: number;
    createdAt: number;
};
type SiteAnalyticsPersistedQueueInput = Omit<SiteAnalyticsPersistedQueueItem, 'createdAt'> & {
    createdAt?: number;
};
type SiteAnalyticsPersistentQueue = {
    enqueue(item: SiteAnalyticsPersistedQueueInput): Promise<void>;
    peek(limit: number, now?: number): Promise<SiteAnalyticsPersistedQueueItem[]>;
    markSent(eventIds: string[]): Promise<void>;
    markFailed(eventIds: string[], nextAttemptAt: number): Promise<void>;
    purge(predicate?: (item: SiteAnalyticsPersistedQueueItem) => boolean): Promise<void>;
    size(): Promise<number>;
};
type SiteAnalyticsPersistentQueueStorage = Map<string, string> | Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
type SiteAnalyticsPersistentQueueMetricReason = 'persistent_queue_overflow' | 'stale_retention_expired';
type SiteAnalyticsPersistentQueueMetric = {
    reason: SiteAnalyticsPersistentQueueMetricReason;
    count: number;
    key: string;
    at: number;
    oldestCreatedAt?: number;
    newestCreatedAt?: number;
};
type SiteAnalyticsPersistentQueueConfig = {
    key?: string;
    storage?: SiteAnalyticsPersistentQueueStorage | null;
    maxItems?: number;
    retentionMs?: number;
    now?: () => number;
    onMetric?: (metric: SiteAnalyticsPersistentQueueMetric) => void;
};
declare const createSiteAnalyticsPersistentQueue: (config?: SiteAnalyticsPersistentQueueConfig) => SiteAnalyticsPersistentQueue;

type SiteAnalyticsNetworkState = {
    online: boolean;
    effectiveType?: string;
    saveData?: boolean;
    rtt?: number;
    downlink?: number;
};
type SiteAnalyticsFlushPolicy = {
    shouldAttemptNetwork: boolean;
    flushOnOnline: boolean;
    flushIntervalMs: number;
    maxBatchSize: number;
    backoffMs: number[];
};
declare const resolveSiteAnalyticsNetworkState: (source?: Partial<SiteAnalyticsNetworkState> | null) => SiteAnalyticsNetworkState;
declare const resolveSiteAnalyticsFlushPolicy: (state: Partial<SiteAnalyticsNetworkState> | null | undefined) => SiteAnalyticsFlushPolicy;

type FirstPartyAnalyticsRequest = {
    event_name: string;
    event_class?: string;
    source_of_truth?: string;
    dedupe_key?: string | null;
    payload: Record<string, unknown>;
};
type FirstPartyDeliveryRejectReason = 'QUEUE_FULL' | 'PAYLOAD_TOO_LARGE';
type FirstPartyDeliveryEnqueueResult = {
    accepted: true;
} | {
    accepted: false;
    reason: FirstPartyDeliveryRejectReason;
};
type FirstPartyDeliveryFlushResult = {
    sentCount: number;
    failedCount: number;
    droppedCount: number;
    usedBeacon: boolean;
};
type FirstPartyDeliveryMetricReason = 'batch_succeeded' | 'beacon_failed' | 'beacon_succeeded' | 'consent_scope_purged' | 'payload_too_large' | 'persistent_enqueue_failed' | 'persisted_payload_invalid' | 'queue_overflow' | 'replay_succeeded' | 'send_failed';
type FirstPartyDeliveryMetric = {
    reason: FirstPartyDeliveryMetricReason;
    count: number;
    at: number;
    eventIds?: string[];
};
type FetchResponse = Pick<Response, 'ok' | 'status'>;
type FetchLike = (url: string, init: RequestInit) => Promise<FetchResponse>;
type BeaconLike = (url: string, body: Blob | string) => boolean;
type FirstPartyDeliveryQueueConfig = {
    endpoint: string;
    headers?: Record<string, string>;
    fetchImpl?: FetchLike;
    beaconImpl?: BeaconLike;
    maxBatchSize?: number;
    maxQueueSize?: number;
    maxPayloadBytes?: number;
    maxAttempts?: number;
    retryDelayMs?: number;
    backoffMs?: number[];
    networkState?: SiteAnalyticsNetworkState | (() => SiteAnalyticsNetworkState);
    persistentQueue?: SiteAnalyticsPersistentQueue | null;
    now?: () => number;
    onMetric?: (metric: FirstPartyDeliveryMetric) => void;
};
declare const buildFirstPartyBatchEnvelope: (events: FirstPartyAnalyticsRequest[]) => {
    events: {
        event_name: string;
        event_class?: string;
        source_of_truth?: string;
        dedupe_key?: string | null;
        payload: Record<string, unknown>;
    }[];
};
declare const createFirstPartyDeliveryQueue: (config: FirstPartyDeliveryQueueConfig) => {
    enqueue: (event: FirstPartyAnalyticsRequest) => FirstPartyDeliveryEnqueueResult;
    flush: () => Promise<FirstPartyDeliveryFlushResult>;
    flushWithBeacon: () => FirstPartyDeliveryFlushResult;
    purgeForConsentReset: ({ customerAccountId, siteId }?: {
        customerAccountId?: string;
        siteId?: string;
    }) => void;
    size: () => number;
};

type SiteAnalyticsEventPipelineMode = 'first_party' | 'vendor_first';
type SiteAnalyticsEventSink = 'posthog' | 'ga4' | 'rudderstack' | 'none';
type SiteAnalyticsPosthogMode = 'cloud' | 'selfhost';
interface SiteAnalyticsModes {
    eventPipelineMode: SiteAnalyticsEventPipelineMode;
    eventSink: SiteAnalyticsEventSink;
    posthogMode: SiteAnalyticsPosthogMode;
    rudderstackEnabled: boolean;
}
interface AnalyticsConfig {
    eventPipelineMode?: SiteAnalyticsEventPipelineMode;
    eventSink?: SiteAnalyticsEventSink;
    posthogMode?: SiteAnalyticsPosthogMode;
    posthog?: {
        apiKey: string;
        host?: string;
        projectId?: string;
        pageviewStrategy?: SiteAnalyticsPosthogPageviewStrategy;
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
type SiteAnalyticsConsentState = 'unknown' | 'granted' | 'denied' | 'essential_only' | 'accepted_override';
type CapabilityName = 'lead_gen' | 'ecommerce' | 'booking' | 'restaurant' | 'content' | 'saas' | 'hybrid';
type AnalyticsPack = 'core_engagement' | 'search_discovery' | 'content_media' | 'local_service_intent' | 'form_quality' | 'diagnostics_performance' | 'data_quality' | 'email_attribution' | 'outcome_lifecycle' | 'desktop_shell' | 'experimentation';
type EventDestination = 'ga4' | 'posthog' | 'first_party';
type AnalyticsEventClass = 'OUTCOME' | 'QUALITY' | 'LIFECYCLE' | 'DIAGNOSTIC';
type AnalyticsComplianceProfile = 'STANDARD' | 'HIGH_PRIVACY' | 'HIPAA_LIKE';
type AnalyticsFingerprintingMode = 'OFF' | 'PSEUDONYMOUS' | 'TRUE_DEVICE';
type SiteAnalyticsGa4EventName = 'page_view' | 'view_item_list' | 'select_item' | 'view_item' | 'add_to_cart' | 'remove_from_cart' | 'view_cart' | 'begin_checkout' | 'add_payment_info' | 'purchase' | 'refund' | 'search' | 'generate_lead';
type SiteAnalyticsPosthogOnlyEventName = 'session_started' | 'session_updated' | 'anonymous_id_created' | 'cta_clicked' | 'phone_clicked' | 'email_clicked' | 'form_viewed' | 'form_started' | 'form_submit_attempted' | 'form_submitted' | 'lead_submitted' | 'newsletter_submitted' | 'checkout_contact_info_submitted' | 'checkout_address_info_submitted' | 'checkout_shipping_info_submitted' | 'checkout_completed' | 'landing_view' | 'video_started' | 'video_progress' | 'video_completed' | 'scroll_depth' | 'time_on_page' | 'page_engaged' | 'section_viewed' | 'outbound_link_clicked' | 'file_downloaded' | 'search_started' | 'search_submitted' | 'search_zero_results' | 'search_result_clicked' | 'filter_applied' | 'sort_changed' | 'gallery_item_viewed' | 'faq_opened' | 'testimonial_viewed' | 'resource_downloaded' | 'newsletter_subscribed' | 'directions_clicked' | 'map_opened' | 'quote_requested' | 'calendar_handoff_clicked' | 'booking_started' | 'booking_completed' | 'reservation_started' | 'reservation_completed' | 'chat_opened' | 'chat_message_sent' | 'form_field_completed' | 'form_validation_error' | 'form_validation_failed' | 'form_abandoned' | 'multi_step_form_progressed' | 'copy_performed' | 'active_time_tick' | 'site_surface_viewed' | 'desktop_window_opened' | 'desktop_window_focused' | 'desktop_window_minimized' | 'desktop_window_closed' | 'desktop_window_moved' | 'desktop_window_resized' | 'desktop_window_maximized' | 'desktop_window_restored' | 'desktop_app_launched' | 'js_error' | 'api_error' | 'asset_load_failed' | 'route_transition_failed' | '404_viewed' | '500_viewed' | 'rage_click' | 'dead_click' | 'web_vitals';
type SiteAnalyticsFirstPartyEventName = 'email_landing_attributed' | 'event_dropped' | 'schema_violation' | 'event_rate_limited' | 'sdk_error' | 'vendor_delivery_failed' | 'consent_state_initialized' | 'consent_state_updated' | 'webhook_deduped' | 'identity_merged' | 'lead_qualified' | 'lead_contacted' | 'lead_booked' | 'lead_won' | 'lead_lost' | 'booking_confirmed' | 'chargeback_received' | 'email_experiment_exposed' | 'feature_flag_exposure' | 'experiment_exposure' | 'experiment_converted' | 'survey_shown' | 'survey_dismissed' | 'survey_sent' | 'survey_abandoned' | 'cohort_matched';
type SiteAnalyticsEventName = SiteAnalyticsGa4EventName | SiteAnalyticsPosthogOnlyEventName | SiteAnalyticsFirstPartyEventName;
interface SiteAnalyticsBaseEventProperties {
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
    consent_state: SiteAnalyticsConsentState;
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
interface SiteAnalyticsItemPayload {
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
interface SiteAnalyticsEcommerceEventProperties extends SiteAnalyticsBaseEventProperties {
    shop_domain?: string | null;
    product_gid?: string | null;
    variant_gid?: string | null;
    collection_handle?: string | null;
    cart_id?: string | null;
    checkout_token?: string | null;
    shopify_event_name?: string | null;
    shopify_event_id?: string | null;
    shopify_client_id?: string | null;
    shopify_event_timestamp?: string | null;
    transaction_id?: string | null;
    order_id?: string | null;
    currency?: string | null;
    value?: number | null;
    discount_value?: number | null;
    coupon?: string | null;
    payment_type?: string | null;
    shipping_tier?: string | null;
    observed_checkout_completed?: boolean | null;
    items?: SiteAnalyticsItemPayload[];
}
interface SiteAnalyticsLeadEventProperties extends SiteAnalyticsBaseEventProperties {
    lead_form_id?: string | null;
    lead_type?: string | null;
    submission_id?: string | null;
    cta_location?: string | null;
    cta_text?: string | null;
    phone_click_target?: string | null;
    email_click_target?: string | null;
}
interface SiteAnalyticsRuntimeEventProperties extends SiteAnalyticsBaseEventProperties {
    event_class?: AnalyticsEventClass;
    dedupe_key?: string | null;
    source_of_truth?: string | null;
    rate_limit_reason?: string | null;
    validation_errors?: string[];
    failed_event_name?: string | null;
    endpoint?: string | null;
    http_method?: string | null;
    http_status?: number | null;
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
    survey_key?: string | null;
    cohort_key?: string | null;
    form_field_id?: string | null;
    form_field_type?: string | null;
    form_field_position?: number | null;
    form_field_count?: number | null;
    completed_field_count?: number | null;
    interaction_count?: number | null;
    surface?: '9line_landing' | 'generated_site' | 'client_portal' | 'admin_portal';
    experience?: '9line' | 'boring';
    viewport_mode?: 'desktop' | 'mobile' | 'compact';
    is_touch_device?: boolean;
    window_id?: string;
    window_key?: string;
    window_path?: string;
    window_count?: number;
    window_index?: number;
    window_width?: number;
    window_height?: number;
    window_x?: number;
    window_y?: number;
    interaction_source?: 'desktop_shell' | 'mobile_router' | 'keyboard' | 'pointer' | 'programmatic';
    advanced_capability_state?: SiteAnalyticsAdvancedCapabilityState | null;
    '$feature_flag'?: string | null;
    '$feature_flag_response'?: string | boolean | null;
    [featureProperty: `$feature/${string}`]: string | boolean | null | undefined;
}
interface SiteAnalyticsEvent {
    name: SiteAnalyticsEventName;
    properties: SiteAnalyticsBaseEventProperties | SiteAnalyticsEcommerceEventProperties | SiteAnalyticsLeadEventProperties | SiteAnalyticsRuntimeEventProperties;
    internal?: {
        acceptedSubmitConfirmation?: true;
    };
}
interface SiteAnalyticsValidationResult {
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
interface SiteAnalyticsEventDefinition {
    pack: AnalyticsPack;
    destinations: EventDestination[];
    event_class?: AnalyticsEventClass;
    required_properties?: string[];
    required_capabilities?: CapabilityName[];
}
interface SiteAnalyticsDispatchConfig {
    profile: SiteAnalyticsProfile;
    consentState?: SiteAnalyticsConsentState;
    eventPipelineMode?: SiteAnalyticsEventPipelineMode;
    eventSink?: SiteAnalyticsEventSink;
    posthogMode?: SiteAnalyticsPosthogMode;
    posthogKey?: string;
    posthogHost?: string;
    ga4MeasurementId?: string;
    ga4DirectCollectEnabled?: boolean;
    ga4DirectCollectEventAllowlist?: SiteAnalyticsEventName[];
    posthogNativeCapture?: SiteAnalyticsPosthogNativeCaptureConfig;
    posthogPageviewStrategy?: SiteAnalyticsPosthogPageviewStrategy;
    rudderstackEnabled?: boolean;
    firstPartyEndpoint?: string;
    firstPartyBrowserIngestEnabled?: boolean;
    firstPartyBrowserEventAllowlist?: SiteAnalyticsEventName[];
    firstPartyHeaders?: Record<string, string>;
    firstPartyFlushMode?: 'immediate' | 'manual';
    firstPartyMaxBatchSize?: number;
    firstPartyMaxQueueSize?: number;
    firstPartyMaxPayloadBytes?: number;
    firstPartyMaxAttempts?: number;
    firstPartyRetryDelayMs?: number;
    firstPartyBackoffMs?: number[];
    firstPartyPersistentQueue?: SiteAnalyticsPersistentQueue | null;
    firstPartyPersistentQueueStorage?: SiteAnalyticsPersistentQueueStorage | null;
    firstPartyPersistentQueueKey?: string;
    firstPartyPersistentQueueEnabled?: boolean;
    firstPartyNetworkState?: SiteAnalyticsNetworkState | (() => SiteAnalyticsNetworkState);
    firstPartyBeaconImpl?: (url: string, body: Blob | string) => boolean;
    firstPartyNow?: () => number;
    firstPartyDeliveryMetricSink?: (metric: FirstPartyDeliveryMetric) => void;
    firstPartyPersistentQueueMetricSink?: (metric: SiteAnalyticsPersistentQueueMetric) => void;
    proofModeSendInstantly?: boolean;
    fetchImpl?: typeof fetch;
}
interface SiteAnalyticsExperimentGovernance {
    owner?: string;
    hypothesis?: string;
    audience?: string;
    exposure_event?: string;
    conversion_metric?: string;
    rollback?: string;
    duration?: string;
    data_quality_checks?: string[];
    group_scoped?: boolean;
}
interface SiteAnalyticsFeatureFlagEvaluationOptions {
    defaultVariant?: string | boolean | null;
    exposureName?: string;
    expose?: boolean;
    visible?: boolean;
    scope?: 'visitor' | 'session' | 'group';
    properties?: Record<string, unknown>;
}
type SiteAnalyticsAdvancedCapabilityState = 'disabled' | 'configured' | 'enabled';
interface SiteAnalyticsAdvancedCapabilityGate {
    state?: SiteAnalyticsAdvancedCapabilityState;
    approved?: boolean;
    testMode?: boolean;
    owner?: string;
    reason?: string;
    samplingRate?: number | null;
    retentionDays?: number | null;
    maskAllText?: boolean;
    maskTextSelector?: string | null;
    blockSelector?: string | null;
}
interface SiteAnalyticsAdvancedCapabilitiesConfig {
    replay?: SiteAnalyticsAdvancedCapabilityGate;
    heatmaps?: SiteAnalyticsAdvancedCapabilityGate;
    clickDiagnostics?: SiteAnalyticsAdvancedCapabilityGate;
    surveys?: SiteAnalyticsAdvancedCapabilityGate;
    cohorts?: SiteAnalyticsAdvancedCapabilityGate;
    exceptions?: SiteAnalyticsAdvancedCapabilityGate;
    webVitals?: SiteAnalyticsAdvancedCapabilityGate;
    browserLogs?: SiteAnalyticsAdvancedCapabilityGate;
}
interface SiteAnalyticsRuntimeCaptureConfig {
    apiErrors?: boolean;
    formFields?: boolean;
    formAbandonment?: boolean;
}
interface SiteAnalyticsPosthogNativeCaptureConfig {
    autocapture?: boolean | Record<string, unknown>;
    pageview?: boolean | 'history_change';
    pageleave?: boolean | 'if_capture_pageview';
}
type SiteAnalyticsPosthogPageviewStrategy = 'native' | 'canonical_fallback' | 'off';
interface SiteAnalyticsRuntimeConfig extends SiteAnalyticsDispatchConfig {
    consentState: SiteAnalyticsConsentState;
    previousConsentState?: SiteAnalyticsConsentState | null;
    sessionTimeoutMs?: number | null;
    featureFlags?: Record<string, string | boolean | null | undefined>;
    featureFlagTimeoutMs?: number | null;
    groupScopedExperimentsEnabled?: boolean;
    experimentGovernance?: Record<string, SiteAnalyticsExperimentGovernance | undefined>;
    advancedCapabilities?: SiteAnalyticsAdvancedCapabilitiesConfig;
    runtimeCapture?: SiteAnalyticsRuntimeCaptureConfig;
    gaId?: string;
    posthogKey?: string;
    posthogHost?: string;
    posthogUiHost?: string;
    posthogPageviewStrategy?: SiteAnalyticsPosthogPageviewStrategy;
    posthogOptOutUseragentFilter?: boolean;
    posthogDisableCompression?: boolean;
    globalId?: string | null;
    environment?: string | null;
    trafficClass?: string | null;
    templateId?: string | null;
    templateVersion?: string | null;
    pageRole?: string | null;
    businessVertical?: string | null;
    deploymentId?: string | null;
    analyticsRuntimeVersion?: string | null;
    analyticsRolloutVersion?: string | null;
    analyticsAssetSha?: string | null;
    analyticsDeploymentId?: string | null;
    analytics_runtime_version?: string | null;
    analytics_rollout_version?: string | null;
    analytics_asset_sha?: string | null;
    analytics_deployment_id?: string | null;
    posthogCaptureCopiedText?: boolean;
    pageCategory?: string | null;
    governedContextEnabled?: boolean;
    highEntropyFingerprintingEnabled?: boolean;
    gpsEnabled?: boolean;
    industry?: string | null;
}
interface SiteAnalyticsRuntimeHandle {
    posthogNativeCapture?: Required<SiteAnalyticsPosthogNativeCaptureConfig>;
    posthogPageviewStrategy?: SiteAnalyticsPosthogPageviewStrategy;
    advancedPosthogModules?: AdvancedPosthogModuleState;
    getEventDestinations?: (name: SiteAnalyticsEventName) => EventDestination[];
    cleanup: () => void;
    track: (name: SiteAnalyticsEventName, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult>;
    trackWebVital: (metric: {
        name?: string;
        value?: number;
        rating?: string;
        id?: string;
        delta?: number;
    }) => Promise<SiteAnalyticsValidationResult>;
    identify: (distinctId: string, properties?: Record<string, unknown>) => void;
    alias: (distinctId: string, previousId: string) => void;
    reset: () => void;
    updateConsentState: (state: SiteAnalyticsConsentState, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult>;
    resetExposureDedupe: (key?: string) => void;
    evaluateFeatureFlag: (flagKey: string, options?: SiteAnalyticsFeatureFlagEvaluationOptions) => Promise<string | boolean | null>;
    trackConversion: (submissionId: string, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult>;
    trackFeatureFlagExposure: (flagKey: string, flagVariant: string | boolean, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult>;
    trackExperimentExposure: (experimentKey: string, experimentVariant: string | boolean, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult>;
    evaluateExperiment: (definition: SiteAnalyticsExperimentDefinition, entityKey: string, properties?: Record<string, unknown>) => Promise<string | null>;
    trackExperimentConversion: (experimentKey: string, experimentVariant: string | boolean, conversionName: string, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult>;
}
interface SiteAnalyticsObserverHandle {
    cleanup: () => void;
}

interface PostHogConfig {
    apiKey: string;
    host?: string;
    options?: Record<string, unknown>;
    pageviewStrategy?: SiteAnalyticsPosthogPageviewStrategy;
}
declare function PostHogProvider({ children, config }: {
    children: React.ReactNode;
    config: PostHogConfig;
}): React.JSX.Element;
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
}): React.JSX.Element;
declare function useGA4(): AnalyticsClient;

interface RudderStackConfig {
    writeKey: string;
    dataPlaneUrl: string;
    options?: Record<string, unknown>;
}
declare function RudderStackProvider({ children, config }: {
    children: React.ReactNode;
    config: RudderStackConfig;
}): React.JSX.Element;
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
}): React.JSX.Element;
declare function useAnalytics(): AnalyticsClient;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
declare const DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT = "/api/analytics/events";
declare const createSiteAnalyticsDispatcher: (config: SiteAnalyticsDispatchConfig) => {
    dispatch: (event: SiteAnalyticsEvent) => Promise<SiteAnalyticsValidationResult>;
    getEnabledPacks: () => AnalyticsPack[];
    getEventDestinations: (eventName: SiteAnalyticsEventName) => EventDestination[];
    isEventEnabled: (eventName: SiteAnalyticsEventName) => boolean;
    shouldSample: (eventName: SiteAnalyticsEventName) => boolean;
    flushFirstParty: () => Promise<FirstPartyDeliveryFlushResult>;
    flushFirstPartyWithBeacon: () => FirstPartyDeliveryFlushResult;
    purgeFirstPartyForConsentReset: (scope?: {
        customerAccountId?: string;
        siteId?: string;
    }) => void | undefined;
};

declare const DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS: readonly ["device_type", "browser_family", "browser_version", "os_family", "os_version", "screen_width", "screen_height", "viewport_width", "viewport_height", "device_pixel_ratio", "language", "locale_country", "timezone", "local_hour"];
declare const GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS: readonly ["connection_effective_type", "connection_save_data", "connection_rtt", "connection_downlink", "device_memory_gb", "hardware_concurrency", "ua_ch_platform", "ua_ch_platform_version", "ua_ch_architecture", "ua_ch_bitness", "ua_ch_model", "ua_ch_mobile", "country_code", "region_code", "city", "client_ip", "ip_subnet", "collection_policy", "industry", "device_fingerprint", "canvas_fingerprint", "webgl_fingerprint", "audio_fingerprint", "font_fingerprint", "plugin_fingerprint"];
declare const NON_COLLECTABLE_BROWSER_DEVICE_FIELDS: Set<string>;
type SiteAnalyticsDefaultContextField = (typeof DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS)[number];
type SiteAnalyticsGovernedContextField = (typeof GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS)[number];
type SiteAnalyticsContextField = SiteAnalyticsDefaultContextField | SiteAnalyticsGovernedContextField;
type SiteAnalyticsBrowserContext = Partial<Record<SiteAnalyticsContextField, string | number | boolean>>;
type UserAgentDataLike = {
    mobile?: boolean;
    platform?: string;
    getHighEntropyValues?: (hints: string[]) => Promise<Record<string, unknown>>;
};
type NavigatorLike = {
    language?: string;
    userAgent?: string;
    hardwareConcurrency?: number;
    deviceMemory?: number;
    plugins?: ArrayLike<{
        name: string;
    }>;
    connection?: {
        effectiveType?: string;
        saveData?: boolean;
        rtt?: number;
        downlink?: number;
    };
    userAgentData?: UserAgentDataLike;
};
type ScreenLike = {
    width?: number;
    height?: number;
};
type WindowLike = {
    innerWidth?: number;
    innerHeight?: number;
    devicePixelRatio?: number;
};
type SiteAnalyticsContextInput = {
    governedContextEnabled?: boolean;
    highEntropyFingerprintingEnabled?: boolean;
    navigator?: NavigatorLike;
    screen?: ScreenLike;
    window?: WindowLike;
    date?: Date;
    timezone?: string;
    clientIp?: string;
    forwardedFor?: string;
    countryCode?: string;
    regionCode?: string;
    city?: string;
    industry?: string | null;
};
declare const buildSiteAnalyticsContextSync: (input?: SiteAnalyticsContextInput) => SiteAnalyticsBrowserContext;
declare const buildSiteAnalyticsContext: (input?: SiteAnalyticsContextInput) => Promise<SiteAnalyticsBrowserContext>;

/** Regulated industry detection and data-collection policy enforcement */
declare const REGULATED_INDUSTRIES: Set<string>;
declare const normalizeIndustry: (industry?: string | null) => string;
declare const isRegulatedIndustry: (industry?: string | null) => boolean;
declare const anonymizeIpToSubnet: (ip: string) => string;
declare const hashIpForCountedIdentifiers: (ip: string, salt: string) => Promise<string>;
type SiteAnalyticsCollectionPolicy = 'standard' | 'restricted';
declare const resolveCollectionPolicy: (input: {
    industry?: string | null;
    highEntropyFingerprintingEnabled?: boolean;
}) => SiteAnalyticsCollectionPolicy;
declare const restrictContextForPolicy: <T extends Record<string, unknown>>(context: T, policy: SiteAnalyticsCollectionPolicy) => T;
declare const shouldCollectExactIp: (policy: SiteAnalyticsCollectionPolicy) => boolean;
declare const shouldCollectHighEntropyFingerprinting: (policy: SiteAnalyticsCollectionPolicy) => boolean;

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
        gcsAnalytics?: SiteAnalyticsRuntimeHandle;
    }
}
declare const DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS = 15000;
declare const mountSiteAnalytics: (config: SiteAnalyticsRuntimeConfig) => SiteAnalyticsRuntimeHandle;

type SiteAnalyticsEntityContextInput = {
    global_id?: string | null;
    site_id?: string | null;
    customer_account_id?: string | null;
    industry?: string | null;
    subindustry?: string | null;
};
type SiteAnalyticsEntityContext = {
    global_id: string | null;
    site_id: string | null;
    customer_account_id: string | null;
    industry_key: string | null;
    posthog_groups: {
        global_entity?: string;
        customer_account?: string;
    };
};
type SiteAnalyticsIdentityResetInput = {
    previousCustomerAccountId?: string | null;
    nextCustomerAccountId?: string | null;
    previousSiteId?: string | null;
    nextSiteId?: string | null;
    action: "login" | "logout" | "account_switch" | "consent_downgrade" | "noop";
};
declare const resolveSiteAnalyticsEntityContext: (input: SiteAnalyticsEntityContextInput) => SiteAnalyticsEntityContext;
declare const buildSiteAnalyticsIdentityResetDecision: (input: SiteAnalyticsIdentityResetInput) => {
    resetRequired: boolean;
};

type PosthogNativeOptionsInput = {
    advancedModules: AdvancedPosthogModuleState;
};
declare const shouldCaptureNativeBehaviorEvent: (eventName: string) => boolean;
declare const sanitizePosthogNativeProperties: (properties: Record<string, unknown>) => Record<string, unknown>;
declare const sanitizePosthogNativeBeforeSendEvent: (event: unknown) => unknown;
declare const buildPosthogNativeOptions: (input: PosthogNativeOptionsInput) => {
    autocapture: {
        element_allowlist: string[];
        capture_copied_text: boolean;
    };
    capture_pageview: boolean;
    capture_pageleave: boolean;
    disable_surveys: boolean;
    enable_heatmaps: boolean;
    capture_dead_clicks: boolean;
    rageclick: boolean;
    capture_exceptions: boolean;
    capture_performance: boolean | {
        network_timing: boolean;
        web_vitals: boolean;
    };
    logs: {
        captureConsoleLogs: boolean;
    } | undefined;
    before_send: (event: unknown) => unknown;
};

declare const POSTHOG_GROUP_TYPES: readonly ["global_entity", "customer_account"];
type PosthogGroupType = (typeof POSTHOG_GROUP_TYPES)[number];
type ProviderBasePropertiesInput = {
    global_id?: string | null;
    site_id?: string | null;
    customer_account_id?: string | null;
    industry_key?: string | null;
    campaign_key?: string | null;
    gcs_layer: "posthog_native" | "gcs_canonical";
};
type ProviderBaseProperties = {
    global_id?: string;
    site_id?: string;
    customer_account_id?: string;
    industry_key?: string;
    campaign_key?: string;
    gcs_layer: "posthog_native" | "gcs_canonical";
};
declare const buildProviderBaseProperties: (input: ProviderBasePropertiesInput) => ProviderBaseProperties;
declare const buildPosthogGroups: (properties: ProviderBaseProperties) => Partial<Record<"customer_account" | "global_entity", string>>;
declare const SITE_ANALYTICS_PROVIDER_SCOPE_KEYS: readonly ["event_id", "event_spec_version", "runtime_version", "analytics_runtime_version", "analytics_rollout_version", "analytics_asset_sha", "analytics_deployment_id", "sent_at", "site_id", "customer_account_id", "global_id", "environment", "traffic_class", "entity_id", "submission_id", "marketing_contact_submission_id", "site_audit_request_id", "campaign_id", "campaign_key", "campaign_recipient_id", "message_id", "template_key", "template_id", "template_version", "page_role", "business_vertical", "deployment_id", "topic_key", "session_id", "anonymous_id", "page_url", "page_url_clean", "path", "path_clean", "referrer", "referrer_clean", "landing_page_path", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "fbclid", "first_touch_source", "first_touch_medium", "first_touch_campaign", "first_touch_referrer", "email_hash", "phone_hash", "name_hash", "contact_hash", "device_type", "browser_name", "browser_family", "browser_version_major", "browser_version", "os_name", "os_family", "os_version", "screen_width", "screen_height", "viewport_width", "viewport_height", "device_pixel_ratio", "language", "locale_country", "timezone", "local_hour", "connection_effective_type", "connection_save_data", "connection_rtt", "connection_downlink", "device_memory_gb", "hardware_concurrency", "ua_ch_platform", "ua_ch_platform_version", "ua_ch_architecture", "ua_ch_bitness", "ua_ch_model", "ua_ch_mobile", "field_id", "field_hash", "field_type", "field_required", "field_index", "completion_count", "dwell_bucket", "visibility_ratio_bucket", "first_viewed_at", "copy_count", "source_component", "field_class", "active_time_bucket", "endpoint_path", "endpoint_family"];
declare const buildSiteAnalyticsProviderProperties: (input: Record<string, unknown>) => Record<string, unknown>;

interface PosthogCaptureMetadataContext {
    siteId?: string | null;
    customerAccountId?: string | null;
    globalId?: string | null;
    templateId?: string | null;
    templateVersion?: string | null;
    pageRole?: string | null;
    businessVertical?: string | null;
    deploymentId?: string | null;
}
interface PosthogCaptureMetadataResult {
    annotated: number;
}
declare const annotatePosthogCaptureMetadata: (root: Pick<Element, "querySelectorAll">, context: PosthogCaptureMetadataContext) => PosthogCaptureMetadataResult;

type TemplateAnalyticsMetadataInput = {
    event: SiteAnalyticsEventName;
    component: string;
    section?: string;
    ctaLocation?: string;
    ctaText?: string;
};
declare const assertTemplateAnalyticsMetadataSafe: (input: Partial<TemplateAnalyticsMetadataInput>) => void;
declare const buildTemplateAnalyticsMetadata: (input: TemplateAnalyticsMetadataInput) => {
    'data-track': SiteAnalyticsEventName;
    'data-track-cta-location': string | undefined;
    'data-track-cta-text': string | undefined;
    'data-ph-capture-attribute-gcs_event': SiteAnalyticsEventName;
    'data-ph-capture-attribute-gcs_component': string;
    'data-ph-capture-attribute-gcs_section': string;
    'data-ph-capture-attribute-gcs_cta_location': string | undefined;
    'data-ph-capture-attribute-gcs_cta_text': string | undefined;
};

type JsonRecord = Record<string, unknown>;
type ShopifyWebPixelEventName = 'collection_viewed' | 'product_viewed' | 'product_added_to_cart' | 'product_removed_from_cart' | 'cart_viewed' | 'checkout_started' | 'checkout_contact_info_submitted' | 'checkout_address_info_submitted' | 'checkout_shipping_info_submitted' | 'payment_info_submitted' | 'checkout_completed' | 'search_submitted';
interface ShopifyWebPixelEvent {
    id?: string | null;
    clientId?: string | null;
    name?: string | null;
    timestamp?: string | null;
    context?: JsonRecord | null;
    data?: JsonRecord | null;
}
interface ShopifyWebPixelMappedEvent {
    name: SiteAnalyticsEventName;
    properties: Record<string, unknown>;
}
interface ShopifyWebPixelMapOptions {
    shopDomain?: string | null;
}
type ShopifyWebPixelTrackFunction = (name: SiteAnalyticsEventName, properties?: Record<string, unknown>) => Promise<SiteAnalyticsValidationResult> | SiteAnalyticsValidationResult | void;
interface ShopifyWebPixelAnalyticsApi {
    subscribe: (eventName: ShopifyWebPixelEventName, handler: (event: ShopifyWebPixelEvent) => void | Promise<void>) => unknown;
}
interface ShopifyWebPixelBridgeConfig extends ShopifyWebPixelMapOptions {
    analytics: ShopifyWebPixelAnalyticsApi;
    track: ShopifyWebPixelTrackFunction;
    enabled?: boolean;
    events?: readonly ShopifyWebPixelEventName[];
}
interface ShopifyWebPixelBridgeHandle {
    subscribedCount: number;
    cleanup: () => void;
}
declare const SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES: readonly ShopifyWebPixelEventName[];
declare const mapShopifyWebPixelEvent: (event: ShopifyWebPixelEvent, options?: ShopifyWebPixelMapOptions) => ShopifyWebPixelMappedEvent | null;
declare const createShopifyWebPixelBridge: (config: ShopifyWebPixelBridgeConfig) => ShopifyWebPixelBridgeHandle;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
declare const getSiteAnalyticsEventDestinations: (name: SiteAnalyticsEventName) => {
    posthog: boolean;
    ga4: boolean;
    firstPartyOnly: boolean;
};
declare const validateSiteAnalyticsEvent: (event: SiteAnalyticsEvent) => SiteAnalyticsValidationResult;
/**
 * @deprecated Use `createSiteAnalyticsDispatcher` or `mountSiteAnalytics`.
 * This legacy helper is kept only for older callers that already initialized
 * provider SDKs; new browser paths must use the dispatcher so profile gates,
 * sampling, first-party dispatch, and GA4 sanitization stay canonical.
 */
declare const trackSiteAnalyticsEvent: (event: SiteAnalyticsEvent) => void;
declare const identifySiteAnalyticsPerson: (distinctId: string, properties: Record<string, unknown>) => void;
declare const registerSiteAnalyticsContext: (properties: Record<string, unknown>) => void;
declare const setSiteAnalyticsReplay: (enabled: boolean) => void;

declare const DEFAULT_PACKS_BY_CAPABILITY: Record<CapabilityName, AnalyticsPack[]>;
declare const SITE_ANALYTICS_EVENT_DEFINITIONS: Record<SiteAnalyticsEventName, SiteAnalyticsEventDefinition>;
declare const getSiteAnalyticsEventDefinition: (name: SiteAnalyticsEventName) => SiteAnalyticsEventDefinition;
declare const getEnabledPacksForProfile: (profile: SiteAnalyticsProfile) => AnalyticsPack[];
declare const isEventEnabledForProfile: (profile: SiteAnalyticsProfile, eventName: SiteAnalyticsEventName) => boolean;

type WebAnalyticsDataSourceLayer = "browser" | "server" | "first_party" | "posthog" | "ga4" | "search_console" | "dbt" | "customer_portal";
type WebAnalyticsPrivacyClass = "non_personal" | "pseudonymous" | "hashed_contact" | "governed_context" | "sensitive_blocked" | "aggregate";
type WebAnalyticsRequiredScope = "every_canonical_event" | "default_context" | "governed_context" | "event_taxonomy" | "event_specific" | "provider_projection" | "transform_output" | "not_collectable";
type WebAnalyticsDataPointCategory = "identity" | "session" | "page" | "attribution" | "acquisition" | "consent" | "device" | "geo" | "performance" | "event" | "engagement" | "conversion" | "synthetic" | "experiment" | "survey" | "provider" | "quality" | "transform" | "blocked";
type WebAnalyticsAcceptedMissingReason = "legacy_event_before_spec_v1" | "consent_denied_or_essential_only" | "not_applicable_to_event" | "not_available_in_browser" | "governed_collection_disabled" | "provider_not_configured" | "source_backfill_not_available" | "privacy_blocked";
type WebAnalyticsDataPoint = {
    id: string;
    label: string;
    category: WebAnalyticsDataPointCategory;
    description: string;
    privacyClass: WebAnalyticsPrivacyClass;
    requiredScope: WebAnalyticsRequiredScope;
    sourceLayers: WebAnalyticsDataSourceLayer[];
    customerVisible: boolean;
    providerVisible: boolean;
    acceptedMissingReasons: WebAnalyticsAcceptedMissingReason[];
    fieldName?: string;
    eventName?: SiteAnalyticsEventName;
    dashboardUses?: string[];
};
declare const WEB_ANALYTICS_DATA_POINTS: WebAnalyticsDataPoint[];
declare const WEB_ANALYTICS_DATA_POINT_IDS: string[];
type WebAnalyticsDataPointId = (typeof WEB_ANALYTICS_DATA_POINT_IDS)[number];
declare const getWebAnalyticsDataPoint: (id: WebAnalyticsDataPointId) => WebAnalyticsDataPoint | undefined;

type SiteAnalyticsEmissionStatus = 'auto-runtime' | 'template-data-track' | 'runtime-api' | 'server-workflow' | 'server-provider' | 'activation-gated' | 'integration-required' | 'intentionally-not-auto';
interface SiteAnalyticsEmissionCoverage {
    status: SiteAnalyticsEmissionStatus;
    emitter: string;
    closeout: string;
}
interface SiteAnalyticsSiteSpecificLiveOverride {
    site: string;
    surface: string;
    proofStatus: 'site-specific-live';
    events: readonly SiteAnalyticsEventName[];
    closeout: string;
}
declare const SITE_ANALYTICS_EVENT_EMISSION_STATUSES: readonly SiteAnalyticsEmissionStatus[];
declare const SITE_ANALYTICS_SITE_SPECIFIC_LIVE_OVERRIDES: readonly SiteAnalyticsSiteSpecificLiveOverride[];
declare const SITE_ANALYTICS_EVENT_EMISSION_COVERAGE: {
    page_view: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    session_started: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    session_updated: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    anonymous_id_created: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    view_item_list: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    select_item: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    view_item: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    add_to_cart: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    remove_from_cart: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    view_cart: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    begin_checkout: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    add_payment_info: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    checkout_contact_info_submitted: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    checkout_address_info_submitted: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    checkout_shipping_info_submitted: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    checkout_completed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    purchase: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    refund: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    search: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    generate_lead: {
        status: "server-provider";
        emitter: string;
        closeout: string;
    };
    cta_clicked: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    phone_clicked: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    email_clicked: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    email_landing_attributed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_viewed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_started: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_submit_attempted: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_submitted: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    lead_submitted: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    newsletter_submitted: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    landing_view: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    video_started: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    video_progress: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    video_completed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    scroll_depth: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    time_on_page: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    page_engaged: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    section_viewed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    outbound_link_clicked: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    file_downloaded: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    search_started: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    search_submitted: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    search_zero_results: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    search_result_clicked: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    filter_applied: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    sort_changed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    gallery_item_viewed: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    faq_opened: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    testimonial_viewed: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    resource_downloaded: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    newsletter_subscribed: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    directions_clicked: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    map_opened: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    quote_requested: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    calendar_handoff_clicked: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    booking_started: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    booking_completed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    reservation_started: {
        status: "template-data-track";
        emitter: string;
        closeout: string;
    };
    reservation_completed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    chat_opened: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    chat_message_sent: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    form_field_completed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_validation_error: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_validation_failed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    form_abandoned: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    multi_step_form_progressed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    copy_performed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    active_time_tick: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    site_surface_viewed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_opened: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_focused: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_minimized: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_closed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_moved: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_resized: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_maximized: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_window_restored: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    desktop_app_launched: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    js_error: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    api_error: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    asset_load_failed: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    route_transition_failed: {
        status: "runtime-api";
        emitter: string;
        closeout: string;
    };
    '404_viewed': {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    '500_viewed': {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    rage_click: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
    dead_click: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
    web_vitals: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    event_dropped: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    schema_violation: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    event_rate_limited: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    sdk_error: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    vendor_delivery_failed: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    consent_state_initialized: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    consent_state_updated: {
        status: "auto-runtime";
        emitter: string;
        closeout: string;
    };
    webhook_deduped: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    identity_merged: {
        status: "server-workflow";
        emitter: string;
        closeout: string;
    };
    lead_qualified: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    lead_contacted: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    lead_booked: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    lead_won: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    lead_lost: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    booking_confirmed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    chargeback_received: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    email_experiment_exposed: {
        status: "integration-required";
        emitter: string;
        closeout: string;
    };
    feature_flag_exposure: {
        status: "runtime-api";
        emitter: string;
        closeout: string;
    };
    experiment_exposure: {
        status: "runtime-api";
        emitter: string;
        closeout: string;
    };
    experiment_converted: {
        status: "runtime-api";
        emitter: string;
        closeout: string;
    };
    survey_shown: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
    survey_dismissed: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
    survey_sent: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
    survey_abandoned: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
    cohort_matched: {
        status: "activation-gated";
        emitter: string;
        closeout: string;
    };
};

declare const SITE_ANALYTICS_EVENT_SPEC_VERSION: 1;
declare const SITE_ANALYTICS_REQUIRED_BASE_KEYS: readonly ["event_id", "event_spec_version", "sent_at", "site_id", "customer_account_id", "session_id", "anonymous_id", "page_url", "path", "site_capabilities", "consent_state"];
declare const DEFAULT_SITE_ANALYTICS_MODES: SiteAnalyticsModes;
declare const resolveSiteAnalyticsModes: (input?: Partial<SiteAnalyticsDispatchConfig> & {
    EVENT_PIPELINE_MODE?: string;
    EVENT_SINK?: string;
    POSTHOG_MODE?: string;
}) => SiteAnalyticsModes;
declare const applySiteAnalyticsEventSink: (destinations: EventDestination[], sink?: SiteAnalyticsEventSink) => EventDestination[];

type Ga4ConsentModeState = {
    ad_storage: 'granted' | 'denied';
    analytics_storage: 'granted' | 'denied';
    ad_user_data: 'granted' | 'denied';
    ad_personalization: 'granted' | 'denied';
};
type SiteAnalyticsConsentUpdate = {
    previousConsentState: SiteAnalyticsConsentState;
    nextConsentState: SiteAnalyticsConsentState;
    vendorConsentGranted: boolean;
    resetIdentity: boolean;
    posthogAction: 'opt_in' | 'opt_out';
    ga4ConsentMode: Ga4ConsentModeState;
};
declare const normalizeSiteAnalyticsConsentState: (value: unknown) => SiteAnalyticsConsentState;
declare const isSiteAnalyticsVendorConsentGranted: (state: unknown) => boolean;
declare const buildGa4ConsentModeState: (state: unknown) => Ga4ConsentModeState;
declare const shouldResetSiteAnalyticsIdentityOnConsentTransition: (previous: unknown, next: unknown) => boolean;
declare const buildSiteAnalyticsConsentUpdate: (previous: unknown, next: unknown) => SiteAnalyticsConsentUpdate;

declare const ATTRIBUTION_STORAGE_VERSION: 1;
declare const ATTRIBUTION_STORAGE_KEY = "gcs_site_analytics_attribution_v1";
declare const DEFAULT_ATTRIBUTION_TTL_MS: number;
declare const ATTRIBUTION_KEYS: readonly ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid", "li_fat_id", "twclid", "rdt_cid", "_fbp", "_fbc", "referrer", "referring_domain", "campaign_id", "campaign_recipient_id", "email_contact_id", "email_click_id", "template_key", "template_version", "topic_key", "experiment_key", "experiment_variant"];
type SiteAnalyticsAttributionKey = typeof ATTRIBUTION_KEYS[number];
type SiteAnalyticsAttributionValues = Partial<Record<SiteAnalyticsAttributionKey, string>>;
type SiteAnalyticsAttributionSnapshot = {
    version: typeof ATTRIBUTION_STORAGE_VERSION;
    first: SiteAnalyticsAttributionValues;
    latest: SiteAnalyticsAttributionValues;
    createdAtMs: number;
    updatedAtMs: number;
    expiresAtMs: number;
};
type SiteAnalyticsAttributionResolution = {
    snapshot: SiteAnalyticsAttributionSnapshot | null;
    properties: Record<string, string | number>;
};
type SiteAnalyticsAttributionInput = {
    consentState?: SiteAnalyticsConsentState | null;
    url: string;
    referrer?: string | null;
    nowMs?: number;
    ttlMs?: number;
    existingSnapshot?: SiteAnalyticsAttributionSnapshot | null;
};
declare const isSafeEmailExperimentIdentifier: (value: unknown) => value is string;
declare const resolveSiteAnalyticsAttributionSnapshot: (input: SiteAnalyticsAttributionInput) => SiteAnalyticsAttributionResolution;

type Dispatcher = ReturnType<typeof createSiteAnalyticsDispatcher>;
type ObserverOptions = {
    dispatcher: Dispatcher;
    baseEventFactory: () => Omit<SiteAnalyticsEvent, 'name' | 'properties'> & {
        properties: Record<string, unknown>;
    };
};
type WebVitalMetric = {
    name?: string;
    value?: number;
    rating?: string;
    id?: string;
    delta?: number;
    entries?: unknown[];
};
type LightweightTrack = (name: string, properties: Record<string, unknown>) => void | Promise<unknown>;
type LightweightDocument = {
    visibilityState?: string;
    querySelectorAll?: (selector: string) => unknown[];
    addEventListener?: (name: string, listener: EventListener, options?: unknown) => void;
    removeEventListener?: (name: string, listener: EventListener, options?: unknown) => void;
};
type LightweightWindow = {
    location?: {
        href?: string;
        origin?: string;
    };
    fetch?: typeof fetch;
    XMLHttpRequest?: typeof XMLHttpRequest;
    addEventListener?: (name: string, listener: EventListener, options?: unknown) => void;
    removeEventListener?: (name: string, listener: EventListener, options?: unknown) => void;
};
declare const attachSiteAnalyticsObservers: ({ document: doc, track, consent }: {
    document?: LightweightDocument;
    track: LightweightTrack;
    consent?: Record<string, unknown>;
}) => () => void;
declare const installApiErrorObserver: ({ window: windowLike, track }: {
    window?: LightweightWindow;
    track: LightweightTrack;
}) => {
    fetch: typeof fetch;
    xhr: (url: string, method?: string) => Promise<void>;
    detach: () => void;
};
declare const buildWebVitalsProperties: (metric: WebVitalMetric) => Record<string, unknown>;
declare const attachScrollObserver: ({ dispatcher, baseEventFactory, thresholds }: ObserverOptions & {
    thresholds?: number[];
}) => SiteAnalyticsObserverHandle;
declare const attachTimeOnPageObserver: ({ dispatcher, baseEventFactory, intervalMs }: ObserverOptions & {
    intervalMs?: number;
}) => SiteAnalyticsObserverHandle;
declare const attachActiveTimeObserver: ({ dispatcher, baseEventFactory, intervalMs }: ObserverOptions & {
    intervalMs?: number;
}) => SiteAnalyticsObserverHandle;
declare const attachOutboundAndDownloadObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => SiteAnalyticsObserverHandle;
declare const attachCopyObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => SiteAnalyticsObserverHandle;
declare const attachSectionVisibilityObserver: ({ dispatcher, baseEventFactory, threshold }: ObserverOptions & {
    threshold?: number;
}) => SiteAnalyticsObserverHandle;
declare const attachVideoObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => SiteAnalyticsObserverHandle;
declare const attachSearchObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => SiteAnalyticsObserverHandle;
declare const attachFormLifecycleObserver: ({ dispatcher, baseEventFactory, fieldLifecycle, abandonment }: ObserverOptions & {
    fieldLifecycle?: boolean;
    abandonment?: boolean;
}) => SiteAnalyticsObserverHandle;
declare const attachApiErrorObserver: ({ dispatcher, baseEventFactory, enabled }: ObserverOptions & {
    enabled?: boolean;
}) => SiteAnalyticsObserverHandle;
declare const attachErrorObservers: ({ dispatcher, baseEventFactory }: ObserverOptions) => SiteAnalyticsObserverHandle;
declare const attachWebVitalsObserver: ({ dispatcher, baseEventFactory }: ObserverOptions) => SiteAnalyticsObserverHandle;
declare const createWebVitalsReporter: ({ dispatcher, baseEventFactory }: ObserverOptions) => (metric: WebVitalMetric) => Promise<SiteAnalyticsValidationResult>;
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
declare function PostHogDashboard({ projectId, dashboardId, apiKey, host, filters, className, style }: PostHogDashboardProps): React.JSX.Element;

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
declare function SupersetDashboard({ supersetUrl, dashboardId, filters, guestToken, className, style }: SupersetDashboardProps): React.JSX.Element;

export { ADVANCED_POSTHOG_MODULES, ATTRIBUTION_KEYS, ATTRIBUTION_STORAGE_KEY, ATTRIBUTION_STORAGE_VERSION, type AdvancedPosthogModule, type AdvancedPosthogModuleConsentState, type AdvancedPosthogModuleProfile, type AdvancedPosthogModuleState, type AnalyticsComplianceProfile, type AnalyticsConfig, type AnalyticsEvent, type AnalyticsEventClass, type AnalyticsFingerprintingMode, type AnalyticsPack, type AnalyticsProperties, type AnalyticsUser, type CapabilityName, DEFAULT_ATTRIBUTION_TTL_MS, DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT, DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS, DEFAULT_PACKS_BY_CAPABILITY, DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS, DEFAULT_SITE_ANALYTICS_MODES, type EventDestination, type FirstPartyAnalyticsRequest, type FirstPartyDeliveryEnqueueResult, type FirstPartyDeliveryFlushResult, type FirstPartyDeliveryMetric, type FirstPartyDeliveryMetricReason, type FirstPartyDeliveryQueueConfig, type FirstPartyDeliveryRejectReason, GA4Provider, GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS, NON_COLLECTABLE_BROWSER_DEVICE_FIELDS, POSTHOG_GROUP_TYPES, PostHogDashboard, PostHogProvider, type PosthogCaptureMetadataContext, type PosthogCaptureMetadataResult, type PosthogGroupType, type PosthogNativeOptionsInput, type ProviderBaseProperties, type ProviderBasePropertiesInput, REGULATED_INDUSTRIES, RudderStackProvider, SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES, SITE_ANALYTICS_EVENT_DEFINITIONS, SITE_ANALYTICS_EVENT_EMISSION_COVERAGE, SITE_ANALYTICS_EVENT_EMISSION_STATUSES, SITE_ANALYTICS_EVENT_SPEC_VERSION, SITE_ANALYTICS_PROVIDER_SCOPE_KEYS, SITE_ANALYTICS_REQUIRED_BASE_KEYS, SITE_ANALYTICS_SITE_SPECIFIC_LIVE_OVERRIDES, type ShopifyWebPixelAnalyticsApi, type ShopifyWebPixelBridgeConfig, type ShopifyWebPixelBridgeHandle, type ShopifyWebPixelEvent, type ShopifyWebPixelEventName, type ShopifyWebPixelMapOptions, type ShopifyWebPixelMappedEvent, type ShopifyWebPixelTrackFunction, type SiteAnalyticsAdvancedCapabilitiesConfig, type SiteAnalyticsAdvancedCapabilityGate, type SiteAnalyticsAdvancedCapabilityState, type SiteAnalyticsAttributionInput, type SiteAnalyticsAttributionKey, type SiteAnalyticsAttributionResolution, type SiteAnalyticsAttributionSnapshot, type SiteAnalyticsAttributionValues, type SiteAnalyticsBaseEventProperties, type SiteAnalyticsBrowserContext, type SiteAnalyticsCollectionPolicy, type SiteAnalyticsConsentState, type SiteAnalyticsContextField, type SiteAnalyticsContextInput, type SiteAnalyticsDefaultContextField, type SiteAnalyticsDispatchConfig, type SiteAnalyticsEcommerceEventProperties, type SiteAnalyticsEmissionCoverage, type SiteAnalyticsEmissionStatus, type SiteAnalyticsEntityContext, type SiteAnalyticsEntityContextInput, type SiteAnalyticsEvent, type SiteAnalyticsEventDefinition, type SiteAnalyticsEventName, type SiteAnalyticsEventPipelineMode, type SiteAnalyticsEventSink, type SiteAnalyticsExperimentDefinition, type SiteAnalyticsExperimentExposureInput, type SiteAnalyticsExperimentGovernance, type SiteAnalyticsExperimentGroupType, type SiteAnalyticsFeatureFlagEvaluationOptions, type SiteAnalyticsFirstPartyEventName, type SiteAnalyticsFlushPolicy, type SiteAnalyticsGa4EventName, type SiteAnalyticsGovernedContextField, type SiteAnalyticsIdentityResetInput, type SiteAnalyticsItemPayload, type SiteAnalyticsLeadEventProperties, type SiteAnalyticsModes, type SiteAnalyticsNetworkState, type SiteAnalyticsObserverHandle, type SiteAnalyticsPersistedQueueInput, type SiteAnalyticsPersistedQueueItem, type SiteAnalyticsPersistentQueue, type SiteAnalyticsPersistentQueueConfig, type SiteAnalyticsPersistentQueueMetric, type SiteAnalyticsPersistentQueueMetricReason, type SiteAnalyticsPersistentQueueStorage, type SiteAnalyticsPosthogMode, type SiteAnalyticsPosthogNativeCaptureConfig, type SiteAnalyticsPosthogOnlyEventName, type SiteAnalyticsPosthogPageviewStrategy, type SiteAnalyticsProfile, type SiteAnalyticsRuntimeCaptureConfig, type SiteAnalyticsRuntimeConfig, type SiteAnalyticsRuntimeEventProperties, type SiteAnalyticsRuntimeHandle, type SiteAnalyticsSiteSpecificLiveOverride, type SiteAnalyticsValidationResult, SupersetDashboard, type TemplateAnalyticsMetadataInput, UnifiedAnalyticsProvider, WEB_ANALYTICS_DATA_POINTS, WEB_ANALYTICS_DATA_POINT_IDS, type WebAnalyticsAcceptedMissingReason, type WebAnalyticsDataPoint, type WebAnalyticsDataPointCategory, type WebAnalyticsDataPointId, type WebAnalyticsDataSourceLayer, type WebAnalyticsPrivacyClass, type WebAnalyticsRequiredScope, analytics, annotatePosthogCaptureMetadata, anonymizeIpToSubnet, applySiteAnalyticsEventSink, assertTemplateAnalyticsMetadataSafe, assignExperimentVariant, attachActiveTimeObserver, attachApiErrorObserver, attachCopyObserver, attachErrorObservers, attachFormLifecycleObserver, attachOutboundAndDownloadObserver, attachScrollObserver, attachSearchObserver, attachSectionVisibilityObserver, attachSiteAnalyticsObservers, attachTimeOnPageObserver, attachVideoObserver, attachWebVitalsObserver, buildExperimentAssignmentId, buildExperimentExposureEvent, buildExperimentGroupAssignment, buildFirstPartyBatchEnvelope, buildGa4ConsentModeState, buildPosthogGroups, buildPosthogNativeOptions, buildProviderBaseProperties, buildSiteAnalyticsConsentUpdate, buildSiteAnalyticsContext, buildSiteAnalyticsContextSync, buildSiteAnalyticsIdentityResetDecision, buildSiteAnalyticsProviderProperties, buildTemplateAnalyticsMetadata, buildWebVitalsProperties, createFirstPartyDeliveryQueue, createRouteTransitionTracker, createShopifyWebPixelBridge, createSiteAnalyticsDispatcher, createSiteAnalyticsPersistentQueue, createWebVitalsReporter, disabledAdvancedPosthogModules, getEnabledPacksForProfile, getSiteAnalyticsEventDefinition, getSiteAnalyticsEventDestinations, getWebAnalyticsDataPoint, hashIpForCountedIdentifiers, identifySiteAnalyticsPerson, installApiErrorObserver, isAllowedExperimentGroupType, isEventEnabledForProfile, isRegulatedIndustry, isSafeEmailExperimentIdentifier, isSiteAnalyticsVendorConsentGranted, mapShopifyWebPixelEvent, mountSiteAnalytics, normalizeIndustry, normalizeSiteAnalyticsConsentState, registerSiteAnalyticsContext, resolveAdvancedPosthogModules, resolveCollectionPolicy, resolveSiteAnalyticsAttributionSnapshot, resolveSiteAnalyticsEntityContext, resolveSiteAnalyticsFlushPolicy, resolveSiteAnalyticsModes, resolveSiteAnalyticsNetworkState, restrictContextForPolicy, sanitizePosthogNativeBeforeSendEvent, sanitizePosthogNativeProperties, setSiteAnalyticsReplay, shouldCaptureNativeBehaviorEvent, shouldCollectExactIp, shouldCollectHighEntropyFingerprinting, shouldResetSiteAnalyticsIdentityOnConsentTransition, trackSiteAnalyticsEvent, useAnalytics, useGA4, usePostHog, useRudderStack, validateSiteAnalyticsEvent };
