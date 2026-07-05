"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ADVANCED_POSTHOG_MODULES: () => ADVANCED_POSTHOG_MODULES,
  ATTRIBUTION_KEYS: () => ATTRIBUTION_KEYS,
  ATTRIBUTION_STORAGE_KEY: () => ATTRIBUTION_STORAGE_KEY,
  ATTRIBUTION_STORAGE_VERSION: () => ATTRIBUTION_STORAGE_VERSION,
  DEFAULT_ATTRIBUTION_TTL_MS: () => DEFAULT_ATTRIBUTION_TTL_MS,
  DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT: () => DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT,
  DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS: () => DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS,
  DEFAULT_PACKS_BY_CAPABILITY: () => DEFAULT_PACKS_BY_CAPABILITY,
  DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS: () => DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS,
  DEFAULT_SITE_ANALYTICS_MODES: () => DEFAULT_SITE_ANALYTICS_MODES,
  GA4Provider: () => GA4Provider,
  GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS: () => GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS,
  NON_COLLECTABLE_BROWSER_DEVICE_FIELDS: () => NON_COLLECTABLE_BROWSER_DEVICE_FIELDS,
  POSTHOG_GROUP_TYPES: () => POSTHOG_GROUP_TYPES,
  PostHogDashboard: () => PostHogDashboard,
  PostHogProvider: () => PostHogProvider,
  REGULATED_INDUSTRIES: () => REGULATED_INDUSTRIES,
  RudderStackProvider: () => RudderStackProvider,
  SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES: () => SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES,
  SITE_ANALYTICS_EVENT_DEFINITIONS: () => SITE_ANALYTICS_EVENT_DEFINITIONS,
  SITE_ANALYTICS_EVENT_EMISSION_COVERAGE: () => SITE_ANALYTICS_EVENT_EMISSION_COVERAGE,
  SITE_ANALYTICS_EVENT_EMISSION_STATUSES: () => SITE_ANALYTICS_EVENT_EMISSION_STATUSES,
  SITE_ANALYTICS_EVENT_SPEC_VERSION: () => SITE_ANALYTICS_EVENT_SPEC_VERSION,
  SITE_ANALYTICS_PROVIDER_SCOPE_KEYS: () => SITE_ANALYTICS_PROVIDER_SCOPE_KEYS,
  SITE_ANALYTICS_REQUIRED_BASE_KEYS: () => SITE_ANALYTICS_REQUIRED_BASE_KEYS,
  SITE_ANALYTICS_SITE_SPECIFIC_LIVE_OVERRIDES: () => SITE_ANALYTICS_SITE_SPECIFIC_LIVE_OVERRIDES,
  SupersetDashboard: () => SupersetDashboard,
  UnifiedAnalyticsProvider: () => UnifiedAnalyticsProvider,
  WEB_ANALYTICS_DATA_POINTS: () => WEB_ANALYTICS_DATA_POINTS,
  WEB_ANALYTICS_DATA_POINT_IDS: () => WEB_ANALYTICS_DATA_POINT_IDS,
  analytics: () => analytics,
  annotatePosthogCaptureMetadata: () => annotatePosthogCaptureMetadata,
  anonymizeIpToSubnet: () => anonymizeIpToSubnet,
  applySiteAnalyticsEventSink: () => applySiteAnalyticsEventSink,
  assertTemplateAnalyticsMetadataSafe: () => assertTemplateAnalyticsMetadataSafe,
  assignExperimentVariant: () => assignExperimentVariant,
  attachActiveTimeObserver: () => attachActiveTimeObserver,
  attachApiErrorObserver: () => attachApiErrorObserver,
  attachCopyObserver: () => attachCopyObserver,
  attachErrorObservers: () => attachErrorObservers,
  attachFormLifecycleObserver: () => attachFormLifecycleObserver,
  attachOutboundAndDownloadObserver: () => attachOutboundAndDownloadObserver,
  attachScrollObserver: () => attachScrollObserver,
  attachSearchObserver: () => attachSearchObserver,
  attachSectionVisibilityObserver: () => attachSectionVisibilityObserver,
  attachSiteAnalyticsObservers: () => attachSiteAnalyticsObservers,
  attachTimeOnPageObserver: () => attachTimeOnPageObserver,
  attachVideoObserver: () => attachVideoObserver,
  attachWebVitalsObserver: () => attachWebVitalsObserver,
  buildExperimentAssignmentId: () => buildExperimentAssignmentId,
  buildExperimentExposureEvent: () => buildExperimentExposureEvent,
  buildExperimentGroupAssignment: () => buildExperimentGroupAssignment,
  buildFirstPartyBatchEnvelope: () => buildFirstPartyBatchEnvelope,
  buildGa4ConsentModeState: () => buildGa4ConsentModeState,
  buildPosthogGroups: () => buildPosthogGroups,
  buildPosthogNativeOptions: () => buildPosthogNativeOptions,
  buildProviderBaseProperties: () => buildProviderBaseProperties,
  buildSiteAnalyticsConsentUpdate: () => buildSiteAnalyticsConsentUpdate,
  buildSiteAnalyticsContext: () => buildSiteAnalyticsContext,
  buildSiteAnalyticsContextSync: () => buildSiteAnalyticsContextSync,
  buildSiteAnalyticsIdentityResetDecision: () => buildSiteAnalyticsIdentityResetDecision,
  buildSiteAnalyticsProviderProperties: () => buildSiteAnalyticsProviderProperties,
  buildTemplateAnalyticsMetadata: () => buildTemplateAnalyticsMetadata,
  buildWebVitalsProperties: () => buildWebVitalsProperties,
  createFirstPartyDeliveryQueue: () => createFirstPartyDeliveryQueue,
  createRouteTransitionTracker: () => createRouteTransitionTracker,
  createShopifyWebPixelBridge: () => createShopifyWebPixelBridge,
  createSiteAnalyticsDispatcher: () => createSiteAnalyticsDispatcher,
  createSiteAnalyticsPersistentQueue: () => createSiteAnalyticsPersistentQueue,
  createWebVitalsReporter: () => createWebVitalsReporter,
  disabledAdvancedPosthogModules: () => disabledAdvancedPosthogModules,
  getEnabledPacksForProfile: () => getEnabledPacksForProfile,
  getSiteAnalyticsEventDefinition: () => getSiteAnalyticsEventDefinition,
  getSiteAnalyticsEventDestinations: () => getSiteAnalyticsEventDestinations,
  getWebAnalyticsDataPoint: () => getWebAnalyticsDataPoint,
  hashIpForCountedIdentifiers: () => hashIpForCountedIdentifiers,
  identifySiteAnalyticsPerson: () => identifySiteAnalyticsPerson,
  installApiErrorObserver: () => installApiErrorObserver,
  isAllowedExperimentGroupType: () => isAllowedExperimentGroupType,
  isEventEnabledForProfile: () => isEventEnabledForProfile,
  isRegulatedIndustry: () => isRegulatedIndustry,
  isSafeEmailExperimentIdentifier: () => isSafeEmailExperimentIdentifier,
  isSiteAnalyticsVendorConsentGranted: () => isSiteAnalyticsVendorConsentGranted,
  mapShopifyWebPixelEvent: () => mapShopifyWebPixelEvent,
  mountSiteAnalytics: () => mountSiteAnalytics,
  normalizeIndustry: () => normalizeIndustry,
  normalizeSiteAnalyticsConsentState: () => normalizeSiteAnalyticsConsentState,
  registerSiteAnalyticsContext: () => registerSiteAnalyticsContext,
  resolveAdvancedPosthogModules: () => resolveAdvancedPosthogModules,
  resolveCollectionPolicy: () => resolveCollectionPolicy,
  resolveSiteAnalyticsAttributionSnapshot: () => resolveSiteAnalyticsAttributionSnapshot,
  resolveSiteAnalyticsEntityContext: () => resolveSiteAnalyticsEntityContext,
  resolveSiteAnalyticsFlushPolicy: () => resolveSiteAnalyticsFlushPolicy,
  resolveSiteAnalyticsModes: () => resolveSiteAnalyticsModes,
  resolveSiteAnalyticsNetworkState: () => resolveSiteAnalyticsNetworkState,
  restrictContextForPolicy: () => restrictContextForPolicy,
  sanitizePosthogNativeBeforeSendEvent: () => sanitizePosthogNativeBeforeSendEvent,
  sanitizePosthogNativeProperties: () => sanitizePosthogNativeProperties,
  setSiteAnalyticsReplay: () => setSiteAnalyticsReplay,
  shouldCaptureNativeBehaviorEvent: () => shouldCaptureNativeBehaviorEvent,
  shouldCollectExactIp: () => shouldCollectExactIp,
  shouldCollectHighEntropyFingerprinting: () => shouldCollectHighEntropyFingerprinting,
  shouldResetSiteAnalyticsIdentityOnConsentTransition: () => shouldResetSiteAnalyticsIdentityOnConsentTransition,
  trackSiteAnalyticsEvent: () => trackSiteAnalyticsEvent,
  useAnalytics: () => useAnalytics,
  useGA4: () => useGA4,
  usePostHog: () => usePostHog,
  useRudderStack: () => useRudderStack,
  validateSiteAnalyticsEvent: () => validateSiteAnalyticsEvent
});
module.exports = __toCommonJS(index_exports);

// src/posthog.tsx
var import_react = require("react");
var import_posthog_js = __toESM(require("posthog-js"));
var import_jsx_runtime = require("react/jsx-runtime");
var PostHogContext = (0, import_react.createContext)(null);
function PostHogProvider({
  children,
  config
}) {
  const [client] = (0, import_react.useState)(() => {
    import_posthog_js.default.init(config.apiKey, {
      api_host: config.host || "https://app.posthog.com",
      ...config.options
    });
    return {
      track: (event, properties) => {
        import_posthog_js.default.capture(event, properties);
      },
      identify: (userId, traits) => {
        import_posthog_js.default.identify(userId, traits);
      },
      page: (name, properties) => {
        if (config.pageviewStrategy !== "canonical_fallback") return;
        import_posthog_js.default.capture("page_view", {
          $current_url: window.location.href,
          $page_name: name,
          ...properties
        });
      },
      group: (groupId, traits) => {
        import_posthog_js.default.group("company", groupId, traits);
      },
      alias: (userId, previousId) => {
        import_posthog_js.default.alias(userId, previousId);
      },
      reset: () => {
        import_posthog_js.default.reset();
      }
    };
  });
  (0, import_react.useEffect)(() => {
    return () => {
      import_posthog_js.default.opt_out_capturing();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostHogContext.Provider, { value: client, children });
}
function usePostHog() {
  const context = (0, import_react.useContext)(PostHogContext);
  if (!context) {
    throw new Error("usePostHog must be used within PostHogProvider");
  }
  return context;
}

// src/ga4.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var GA4Context = (0, import_react2.createContext)(null);
function GA4Provider({
  children,
  config
}) {
  const [client] = (0, import_react2.useState)(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer?.push(arguments);
      };
      window.gtag("js", /* @__PURE__ */ new Date());
      window.gtag("config", config.measurementId, {
        debug_mode: config.debug
      });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`;
      document.head.appendChild(script);
    }
    return {
      track: (event, properties) => {
        if (window.gtag) {
          window.gtag("event", event, properties);
        }
      },
      identify: (userId, traits) => {
        if (window.gtag) {
          window.gtag("set", "user_properties", {
            user_id: userId,
            ...traits
          });
        }
      },
      page: (name, properties) => {
        if (window.gtag) {
          window.gtag("event", "page_view", {
            page_title: name || document.title,
            page_location: properties?.url || window.location.href,
            page_path: properties?.path || window.location.pathname,
            ...properties
          });
        }
      },
      reset: () => {
        if (window.gtag) {
          window.gtag("set", "user_properties", {
            user_id: null
          });
        }
      }
    };
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GA4Context.Provider, { value: client, children });
}
function useGA4() {
  const context = (0, import_react2.useContext)(GA4Context);
  if (!context) {
    throw new Error("useGA4 must be used within GA4Provider");
  }
  return context;
}

// src/rudderstack.tsx
var import_react3 = require("react");
var import_analytics_js = require("@rudderstack/analytics-js");
var import_jsx_runtime3 = require("react/jsx-runtime");
var RudderStackContext = (0, import_react3.createContext)(null);
var asRudderObject = (value) => value;
function RudderStackProvider({
  children,
  config
}) {
  const [client] = (0, import_react3.useState)(() => {
    const rudderanalytics = new import_analytics_js.RudderAnalytics();
    rudderanalytics.load(config.writeKey, config.dataPlaneUrl, config.options);
    return {
      track: (event, properties) => {
        rudderanalytics.track(event, asRudderObject(properties));
      },
      identify: (userId, traits) => {
        rudderanalytics.identify(userId, asRudderObject(traits));
      },
      page: (name, properties) => {
        rudderanalytics.page(name || "", asRudderObject(properties));
      },
      group: (groupId, traits) => {
        rudderanalytics.group(groupId, asRudderObject(traits));
      },
      alias: (userId, previousId) => {
        rudderanalytics.alias(userId, { previousId });
      },
      reset: () => {
        rudderanalytics.reset();
      }
    };
  });
  (0, import_react3.useEffect)(() => {
    return () => {
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RudderStackContext.Provider, { value: client, children });
}
function useRudderStack() {
  const context = (0, import_react3.useContext)(RudderStackContext);
  if (!context) {
    throw new Error("useRudderStack must be used within RudderStackProvider");
  }
  return context;
}

// src/unified.tsx
var import_react4 = __toESM(require("react"));
var import_posthog_js2 = __toESM(require("posthog-js"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var getRudder = () => typeof window === "undefined" ? void 0 : window.rudderanalytics;
var asRudderObject2 = (value) => value;
var posthogPageviewStrategy = "canonical_fallback";
var analytics = {
  track: (event, properties) => {
    import_posthog_js2.default?.capture(event, properties);
    window.gtag?.("event", event, properties);
    const rudder = getRudder();
    rudder?.track(event, asRudderObject2(properties));
  },
  identify: (userId, traits) => {
    import_posthog_js2.default?.identify(userId, traits);
    window.gtag?.("set", "user_properties", {
      user_id: userId,
      ...traits
    });
    const rudder = getRudder();
    rudder?.identify(userId, asRudderObject2(traits));
  },
  page: (name, properties) => {
    if (posthogPageviewStrategy === "canonical_fallback") {
      import_posthog_js2.default?.capture("page_view", {
        $current_url: window.location.href,
        $page_name: name,
        ...properties
      });
    }
    window.gtag?.("event", "page_view", {
      page_title: name || document.title,
      page_location: properties?.url || window.location.href,
      page_path: properties?.path || window.location.pathname,
      ...properties
    });
    const rudder = getRudder();
    rudder?.page(name || "", asRudderObject2(properties));
  },
  group: (groupId, traits) => {
    import_posthog_js2.default?.group("company", groupId, traits);
    const rudder = getRudder();
    rudder?.group(groupId, asRudderObject2(traits));
  },
  alias: (userId, previousId) => {
    import_posthog_js2.default?.alias(userId, previousId);
    const rudder = getRudder();
    rudder?.alias(userId, { previousId });
  },
  reset: () => {
    import_posthog_js2.default?.reset();
    window.gtag?.("set", "user_properties", {
      user_id: null
    });
    const rudder = getRudder();
    rudder?.reset();
  }
};
var UnifiedAnalyticsContext = (0, import_react4.createContext)(analytics);
function UnifiedAnalyticsProvider({
  children,
  config
}) {
  import_react4.default.useEffect(() => {
    posthogPageviewStrategy = config.posthog?.pageviewStrategy ?? "canonical_fallback";
    if (config.posthog) {
      import_posthog_js2.default.init(config.posthog.apiKey, {
        api_host: config.posthog.host || "https://app.posthog.com",
        loaded: () => {
          if (config.debug) {
            console.log("[Analytics] PostHog initialized");
          }
        }
      });
    }
    if (config.ga4) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.ga4.measurementId}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer?.push(arguments);
      };
      window.gtag("js", /* @__PURE__ */ new Date());
      window.gtag("config", config.ga4.measurementId, {
        debug_mode: config.debug
      });
      if (config.debug) {
        console.log("[Analytics] GA4 initialized");
      }
    }
    if (config.rudderstack) {
      const script = document.createElement("script");
      script.innerHTML = `
        !function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
        e.load("${config.rudderstack.writeKey}","${config.rudderstack.dataPlaneUrl}"),
        e.ready(function(){${config.debug ? 'console.log("[Analytics] RudderStack initialized")' : ""}})
      }();
      `;
      document.head.appendChild(script);
    }
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(UnifiedAnalyticsContext.Provider, { value: analytics, children });
}
function useAnalytics() {
  return (0, import_react4.useContext)(UnifiedAnalyticsContext);
}

// src/siteAnalyticsDispatcher.ts
var import_posthog_js4 = __toESM(require("posthog-js"));

// src/siteAnalyticsRegistry.ts
var DEFAULT_PACKS_BY_CAPABILITY = {
  lead_gen: [
    "core_engagement",
    "local_service_intent",
    "form_quality",
    "diagnostics_performance"
  ],
  ecommerce: [
    "core_engagement",
    "search_discovery",
    "content_media",
    "diagnostics_performance"
  ],
  booking: [
    "core_engagement",
    "local_service_intent",
    "form_quality",
    "diagnostics_performance"
  ],
  restaurant: [
    "core_engagement",
    "local_service_intent",
    "content_media"
  ],
  content: [
    "core_engagement",
    "content_media",
    "search_discovery"
  ],
  saas: [
    "core_engagement",
    "search_discovery",
    "experimentation",
    "diagnostics_performance",
    "desktop_shell"
  ],
  hybrid: [
    "core_engagement",
    "search_discovery",
    "content_media",
    "local_service_intent",
    "form_quality",
    "diagnostics_performance",
    "desktop_shell"
  ]
};
var SITE_ANALYTICS_EVENT_DEFINITIONS = {
  page_view: { pack: "core_engagement", destinations: ["ga4", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["page_url"] },
  session_started: { pack: "core_engagement", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["session_id", "anonymous_id"] },
  session_updated: { pack: "core_engagement", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["session_id"] },
  anonymous_id_created: { pack: "core_engagement", destinations: ["first_party"], event_class: "DIAGNOSTIC", required_properties: ["anonymous_id"] },
  view_item_list: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  select_item: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  view_item: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"], required_properties: ["product_gid"] },
  add_to_cart: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  remove_from_cart: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  view_cart: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  begin_checkout: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  add_payment_info: { pack: "core_engagement", destinations: ["ga4", "posthog"], required_capabilities: ["ecommerce"] },
  checkout_contact_info_submitted: { pack: "core_engagement", destinations: ["posthog"], required_capabilities: ["ecommerce"] },
  checkout_address_info_submitted: { pack: "core_engagement", destinations: ["posthog"], required_capabilities: ["ecommerce"] },
  checkout_shipping_info_submitted: { pack: "core_engagement", destinations: ["posthog"], required_capabilities: ["ecommerce"] },
  checkout_completed: { pack: "core_engagement", destinations: ["posthog"], required_capabilities: ["ecommerce"] },
  purchase: { pack: "core_engagement", destinations: ["ga4", "posthog"], event_class: "OUTCOME", required_capabilities: ["ecommerce"], required_properties: ["transaction_id", "currency"] },
  refund: { pack: "core_engagement", destinations: ["ga4", "posthog"], event_class: "OUTCOME", required_capabilities: ["ecommerce"], required_properties: ["transaction_id", "currency"] },
  search: { pack: "search_discovery", destinations: ["ga4", "posthog"] },
  generate_lead: { pack: "form_quality", destinations: ["ga4", "posthog"], event_class: "OUTCOME", required_properties: ["submission_id"] },
  cta_clicked: { pack: "local_service_intent", destinations: ["ga4", "posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "restaurant", "hybrid"] },
  phone_clicked: { pack: "local_service_intent", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "restaurant", "hybrid"] },
  email_clicked: { pack: "local_service_intent", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "restaurant", "hybrid"] },
  email_landing_attributed: { pack: "email_attribution", destinations: ["first_party"], event_class: "DIAGNOSTIC" },
  form_viewed: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  form_started: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  form_submit_attempted: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  form_submitted: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  lead_submitted: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "OUTCOME", required_properties: ["submission_id"] },
  newsletter_submitted: { pack: "content_media", destinations: ["posthog"] },
  landing_view: { pack: "core_engagement", destinations: ["posthog"] },
  video_started: { pack: "content_media", destinations: ["posthog"] },
  video_progress: { pack: "content_media", destinations: ["posthog"], required_properties: ["progress_pct"] },
  video_completed: { pack: "content_media", destinations: ["posthog"] },
  scroll_depth: { pack: "core_engagement", destinations: ["posthog"] },
  time_on_page: { pack: "core_engagement", destinations: ["posthog"] },
  page_engaged: { pack: "core_engagement", destinations: ["posthog"] },
  section_viewed: { pack: "core_engagement", destinations: ["posthog"], required_properties: ["section_id"] },
  outbound_link_clicked: { pack: "core_engagement", destinations: ["posthog"] },
  file_downloaded: { pack: "core_engagement", destinations: ["posthog"], required_properties: ["file_extension"] },
  search_started: { pack: "search_discovery", destinations: ["posthog"] },
  search_submitted: { pack: "search_discovery", destinations: ["posthog"] },
  search_zero_results: { pack: "search_discovery", destinations: ["posthog"] },
  search_result_clicked: { pack: "search_discovery", destinations: ["posthog"] },
  filter_applied: { pack: "search_discovery", destinations: ["posthog"] },
  sort_changed: { pack: "search_discovery", destinations: ["posthog"] },
  gallery_item_viewed: { pack: "content_media", destinations: ["posthog"] },
  faq_opened: { pack: "content_media", destinations: ["posthog"] },
  testimonial_viewed: { pack: "content_media", destinations: ["posthog"] },
  resource_downloaded: { pack: "content_media", destinations: ["posthog"] },
  newsletter_subscribed: { pack: "content_media", destinations: ["posthog"] },
  directions_clicked: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["lead_gen", "restaurant", "booking", "hybrid"] },
  map_opened: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["lead_gen", "restaurant", "booking", "hybrid"] },
  quote_requested: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["lead_gen", "hybrid"] },
  calendar_handoff_clicked: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["booking", "hybrid"] },
  booking_started: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["booking", "hybrid"] },
  booking_completed: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["booking", "hybrid"] },
  reservation_started: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["restaurant", "hybrid"] },
  reservation_completed: { pack: "local_service_intent", destinations: ["posthog"], required_capabilities: ["restaurant", "hybrid"] },
  chat_opened: { pack: "local_service_intent", destinations: ["posthog"] },
  chat_message_sent: { pack: "local_service_intent", destinations: ["posthog"] },
  form_field_completed: { pack: "form_quality", destinations: ["posthog"] },
  form_validation_error: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  form_validation_failed: { pack: "form_quality", destinations: ["posthog"] },
  form_abandoned: { pack: "form_quality", destinations: ["posthog"] },
  multi_step_form_progressed: { pack: "form_quality", destinations: ["posthog"] },
  copy_performed: { pack: "core_engagement", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  active_time_tick: { pack: "core_engagement", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  site_surface_viewed: { pack: "core_engagement", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode"] },
  desktop_window_opened: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_focused: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_minimized: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_closed: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_moved: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_resized: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_maximized: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_window_restored: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  desktop_app_launched: { pack: "desktop_shell", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["surface", "experience", "viewport_mode", "window_id", "window_path"] },
  js_error: { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  api_error: { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  asset_load_failed: { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  route_transition_failed: { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  "404_viewed": { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  "500_viewed": { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  rage_click: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  dead_click: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  web_vitals: { pack: "diagnostics_performance", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC" },
  event_dropped: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY", required_properties: ["validation_errors"] },
  schema_violation: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY", required_properties: ["validation_errors"] },
  event_rate_limited: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY", required_properties: ["rate_limit_reason"] },
  sdk_error: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY" },
  vendor_delivery_failed: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY", required_properties: ["endpoint"] },
  consent_state_initialized: { pack: "data_quality", destinations: ["first_party"], event_class: "DIAGNOSTIC", required_properties: ["consent_state"] },
  consent_state_updated: { pack: "data_quality", destinations: ["first_party"], event_class: "DIAGNOSTIC", required_properties: ["consent_state"] },
  webhook_deduped: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY" },
  identity_merged: { pack: "data_quality", destinations: ["first_party"], event_class: "QUALITY" },
  lead_qualified: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "LIFECYCLE" },
  lead_contacted: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "LIFECYCLE" },
  lead_booked: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "LIFECYCLE" },
  lead_won: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "LIFECYCLE" },
  lead_lost: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "LIFECYCLE" },
  booking_confirmed: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "OUTCOME" },
  chargeback_received: { pack: "outcome_lifecycle", destinations: ["posthog"], event_class: "OUTCOME" },
  email_experiment_exposed: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["experiment_key", "experiment_variant"] },
  feature_flag_exposure: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["flag_key", "flag_variant"] },
  experiment_exposure: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["experiment_key", "experiment_variant"] },
  experiment_converted: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "OUTCOME", required_properties: ["experiment_key", "experiment_variant", "conversion_name"] },
  survey_shown: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  survey_dismissed: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  survey_sent: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  survey_abandoned: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  cohort_matched: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["cohort_key"] }
};
var getSiteAnalyticsEventDefinition = (name) => SITE_ANALYTICS_EVENT_DEFINITIONS[name];
var getEnabledPacksForProfile = (profile) => {
  if (profile.enabled_packs.length > 0) {
    return profile.enabled_packs;
  }
  const packs = /* @__PURE__ */ new Set();
  for (const capability of profile.capabilities) {
    for (const pack of DEFAULT_PACKS_BY_CAPABILITY[capability] ?? []) {
      packs.add(pack);
    }
  }
  if (profile.quality_events_enabled) {
    packs.add("data_quality");
  }
  packs.add("email_attribution");
  packs.add("outcome_lifecycle");
  return Array.from(packs);
};
var isEventEnabledForProfile = (profile, eventName) => {
  const definition = getSiteAnalyticsEventDefinition(eventName);
  if (!definition) return false;
  const enabledPacks = getEnabledPacksForProfile(profile);
  if (!enabledPacks.includes(definition.pack)) return false;
  if (!definition.required_capabilities || definition.required_capabilities.length === 0) {
    return true;
  }
  return definition.required_capabilities.some(
    (capability) => profile.capabilities.includes(capability)
  );
};

// src/siteAnalytics.ts
var import_posthog_js3 = __toESM(require("posthog-js"));

// src/siteAnalyticsModes.ts
var SITE_ANALYTICS_EVENT_SPEC_VERSION = 1;
var SITE_ANALYTICS_REQUIRED_BASE_KEYS = [
  "event_id",
  "event_spec_version",
  "sent_at",
  "site_id",
  "customer_account_id",
  "session_id",
  "anonymous_id",
  "page_url",
  "path",
  "site_capabilities",
  "consent_state"
];
var DEFAULT_SITE_ANALYTICS_MODES = {
  eventPipelineMode: "vendor_first",
  eventSink: "posthog",
  posthogMode: "cloud",
  rudderstackEnabled: false
};
var EVENT_PIPELINE_MODES = /* @__PURE__ */ new Set(["first_party", "vendor_first"]);
var EVENT_SINKS = /* @__PURE__ */ new Set(["posthog", "ga4", "rudderstack", "none"]);
var POSTHOG_MODES = /* @__PURE__ */ new Set(["cloud", "selfhost"]);
var normalize = (value) => value?.trim().toLowerCase();
var asPipelineMode = (value) => {
  const normalized = normalize(value);
  return normalized && EVENT_PIPELINE_MODES.has(normalized) ? normalized : void 0;
};
var asEventSink = (value) => {
  const normalized = normalize(value);
  return normalized && EVENT_SINKS.has(normalized) ? normalized : void 0;
};
var asPosthogMode = (value) => {
  const normalized = normalize(value);
  return normalized && POSTHOG_MODES.has(normalized) ? normalized : void 0;
};
var resolveSiteAnalyticsModes = (input = {}) => ({
  eventPipelineMode: asPipelineMode(input.eventPipelineMode ?? input.EVENT_PIPELINE_MODE) ?? DEFAULT_SITE_ANALYTICS_MODES.eventPipelineMode,
  eventSink: asEventSink(input.eventSink ?? input.EVENT_SINK) ?? DEFAULT_SITE_ANALYTICS_MODES.eventSink,
  posthogMode: asPosthogMode(input.posthogMode ?? input.POSTHOG_MODE) ?? DEFAULT_SITE_ANALYTICS_MODES.posthogMode,
  rudderstackEnabled: input.rudderstackEnabled === true
});
var applySiteAnalyticsEventSink = (destinations, sink) => {
  if (!sink) return destinations;
  if (sink === "none" || sink === "rudderstack") {
    return destinations.filter((destination) => destination === "first_party");
  }
  return destinations.filter((destination) => destination === "first_party" || destination === sink);
};

// src/siteAnalyticsBrowserOutcomePolicy.ts
var BROWSER_FORBIDDEN_PROVIDER_OUTCOME_EVENTS = [
  "generate_lead",
  "lead_submitted"
];
var browserForbiddenProviderOutcomeEvents = new Set(
  BROWSER_FORBIDDEN_PROVIDER_OUTCOME_EVENTS
);
var isBrowserForbiddenProviderOutcomeEvent = (eventName) => browserForbiddenProviderOutcomeEvents.has(eventName);

// src/siteAnalytics.ts
var REQUIRED_BASE_KEYS = SITE_ANALYTICS_REQUIRED_BASE_KEYS;
var VENDOR_UNSAFE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "email",
  "unsafe_email",
  "phone",
  "unsafe_phone",
  "name",
  "unsafe_name",
  "exposure_name",
  "first_name",
  "last_name",
  "full_name",
  "display_name",
  "person_name",
  "message",
  "message_body",
  "free_text",
  "lead_message",
  "contact_email",
  "contact_email_address",
  "contact_phone",
  "contact_phone_number",
  "customer_address",
  "customer_email",
  "customer_email_address",
  "customer_message",
  "customer_name",
  "customer_first_name",
  "customer_last_name",
  "customer_full_name",
  "customer_phone",
  "customer_phone_number",
  "email_address",
  "phone_number",
  "mobile_phone",
  "street_address",
  "address_line_1",
  "address_line_2",
  "billing_address",
  "billing_city",
  "billing_postal_code",
  "billing_region",
  "billing_state",
  "billing_zip",
  "billing_name",
  "shipping_address",
  "shipping_city",
  "shipping_postal_code",
  "shipping_region",
  "shipping_state",
  "shipping_zip",
  "shipping_name",
  "address",
  "street",
  "city",
  "zip",
  "postal_code",
  "region",
  "state",
  "contact",
  "note",
  "notes",
  "description",
  "comment",
  "public_comment",
  "location",
  "gcs_event_name"
]);
var VENDOR_SAFE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "consent_state",
  "business_name",
  "template_name",
  "field_state",
  "account_state",
  "customer_state",
  "advanced_capability_state",
  "cta_location",
  "phone_click_target",
  "email_click_target",
  "region_id",
  "country_code",
  "email_hash",
  "phone_hash",
  "name_hash",
  "contact_hash"
]);
var normalizeVendorFieldName = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
var isVendorUnsafeFieldName = (key) => {
  const normalized = normalizeVendorFieldName(key);
  return !VENDOR_SAFE_FIELD_NAMES.has(normalized) && VENDOR_UNSAFE_FIELD_NAMES.has(normalized);
};
var isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
var hasValue = (value) => value !== null && value !== void 0 && !(typeof value === "string" && value.trim().length === 0);
var shouldSendToGa4 = (name) => (getSiteAnalyticsEventDefinition(name)?.destinations ?? []).includes("ga4");
var shouldSendToPosthog = (name) => (getSiteAnalyticsEventDefinition(name)?.destinations ?? []).includes("posthog");
var sanitizeVendorValue = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeVendorValue(item));
  }
  if (value && typeof value === "object") {
    return sanitizeVendorProperties(value);
  }
  return value;
};
var sanitizeVendorProperties = (properties) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    if (isVendorUnsafeFieldName(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = sanitizeVendorValue(value);
  }
  return sanitized;
};
var sanitizePosthogProperties = sanitizeVendorProperties;
var getSiteAnalyticsEventDestinations = (name) => ({
  posthog: (getSiteAnalyticsEventDefinition(name)?.destinations ?? []).includes("posthog"),
  ga4: shouldSendToGa4(name),
  firstPartyOnly: (() => {
    const destinations = getSiteAnalyticsEventDefinition(name)?.destinations ?? [];
    return destinations.length === 1 && destinations[0] === "first_party";
  })()
});
var validateSiteAnalyticsEvent = (event) => {
  const errors = [];
  const props = event.properties;
  const definition = getSiteAnalyticsEventDefinition(event.name);
  if (!definition) {
    return {
      valid: false,
      errors: [`Unknown site analytics event: ${event.name}`]
    };
  }
  for (const key of REQUIRED_BASE_KEYS) {
    const value = props[key];
    if (!hasValue(value)) {
      errors.push(`Missing required property: ${key}`);
    }
  }
  if (props.event_spec_version !== SITE_ANALYTICS_EVENT_SPEC_VERSION) {
    errors.push("event_spec_version must be " + SITE_ANALYTICS_EVENT_SPEC_VERSION);
  }
  if (!Array.isArray(props.site_capabilities) || props.site_capabilities.length === 0) {
    errors.push("site_capabilities must be a non-empty array");
  }
  if (event.name === "page_view" && !isNonEmptyString(props.page_url)) {
    errors.push("page_view requires page_url");
  }
  if (["view_item", "add_to_cart", "remove_from_cart"].includes(event.name)) {
    if (!hasValue(props.product_gid) && !Array.isArray(props.items)) {
      errors.push(`${event.name} requires product_gid or items[]`);
    }
  }
  if (["purchase", "refund"].includes(event.name)) {
    if (!hasValue(props.transaction_id)) {
      errors.push(`${event.name} requires transaction_id`);
    }
    if (!hasValue(props.currency)) {
      errors.push(`${event.name} requires currency`);
    }
  }
  if (["generate_lead", "lead_submitted"].includes(event.name) && !hasValue(props.submission_id)) {
    errors.push(`${event.name} requires submission_id`);
  }
  for (const property of definition.required_properties ?? []) {
    if (!hasValue(props[property])) {
      errors.push(`${event.name} requires ${property}`);
    }
  }
  return {
    valid: errors.length === 0,
    errors
  };
};
var trackSiteAnalyticsEvent = (event) => {
  const validation = validateSiteAnalyticsEvent(event);
  if (!validation.valid) {
    throw new Error(`Invalid site analytics event: ${validation.errors.join("; ")}`);
  }
  if (isBrowserForbiddenProviderOutcomeEvent(event.name)) {
    return;
  }
  const properties = sanitizePosthogProperties(event.properties);
  if (shouldSendToPosthog(event.name)) {
    import_posthog_js3.default.capture(event.name, properties);
  }
  if (typeof window !== "undefined" && window.gtag && shouldSendToGa4(event.name)) {
    window.gtag("event", event.name, properties);
  }
};
var identifySiteAnalyticsPerson = (distinctId, properties) => {
  import_posthog_js3.default.identify(distinctId, sanitizePosthogProperties(properties));
};
var registerSiteAnalyticsContext = (properties) => {
  import_posthog_js3.default.register(sanitizePosthogProperties(properties));
};
var setSiteAnalyticsReplay = (enabled) => {
  if (enabled) {
    import_posthog_js3.default.startSessionRecording();
    return;
  }
  import_posthog_js3.default.stopSessionRecording();
};

// src/siteAnalyticsConsent.ts
var CONSENT_STATES = /* @__PURE__ */ new Set([
  "unknown",
  "denied",
  "essential_only",
  "granted",
  "accepted_override"
]);
var GA4_CONSENT_GRANTED = "granted";
var GA4_CONSENT_DENIED = "denied";
var normalizeSiteAnalyticsConsentState = (value) => {
  if (typeof value !== "string") return "unknown";
  const normalized = value.trim().toLowerCase();
  return CONSENT_STATES.has(normalized) ? normalized : "unknown";
};
var isSiteAnalyticsVendorConsentGranted = (state) => {
  const normalized = normalizeSiteAnalyticsConsentState(state);
  return normalized === "granted" || normalized === "accepted_override";
};
var buildGa4ConsentModeState = (state) => {
  const value = isSiteAnalyticsVendorConsentGranted(state) ? GA4_CONSENT_GRANTED : GA4_CONSENT_DENIED;
  return {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value
  };
};
var shouldResetSiteAnalyticsIdentityOnConsentTransition = (previous, next) => isSiteAnalyticsVendorConsentGranted(previous) && !isSiteAnalyticsVendorConsentGranted(next);
var buildSiteAnalyticsConsentUpdate = (previous, next) => {
  const previousConsentState = normalizeSiteAnalyticsConsentState(previous);
  const nextConsentState = normalizeSiteAnalyticsConsentState(next);
  const vendorConsentGranted = isSiteAnalyticsVendorConsentGranted(nextConsentState);
  return {
    previousConsentState,
    nextConsentState,
    vendorConsentGranted,
    resetIdentity: shouldResetSiteAnalyticsIdentityOnConsentTransition(previousConsentState, nextConsentState),
    posthogAction: vendorConsentGranted ? "opt_in" : "opt_out",
    ga4ConsentMode: buildGa4ConsentModeState(nextConsentState)
  };
};

// src/siteAnalyticsNetworkState.ts
var DEFAULT_BACKOFF_MS = [1e3, 5e3, 3e4, 12e4];
var CONSTRAINED_EFFECTIVE_TYPES = /* @__PURE__ */ new Set(["slow-2g", "2g", "3g"]);
var resolveSiteAnalyticsNetworkState = (source) => {
  if (source) {
    return {
      online: source.online !== false,
      effectiveType: source.effectiveType,
      saveData: source.saveData === true,
      rtt: source.rtt,
      downlink: source.downlink
    };
  }
  const navigatorRef = typeof navigator !== "undefined" ? navigator : void 0;
  return {
    online: navigatorRef?.onLine !== false,
    effectiveType: navigatorRef?.connection?.effectiveType,
    saveData: navigatorRef?.connection?.saveData === true,
    rtt: navigatorRef?.connection?.rtt,
    downlink: navigatorRef?.connection?.downlink
  };
};
var resolveSiteAnalyticsFlushPolicy = (state) => {
  const resolved = resolveSiteAnalyticsNetworkState(state);
  if (!resolved.online) {
    return {
      shouldAttemptNetwork: false,
      flushOnOnline: true,
      flushIntervalMs: 3e4,
      maxBatchSize: 20,
      backoffMs: DEFAULT_BACKOFF_MS
    };
  }
  const effectiveType = resolved.effectiveType?.toLowerCase();
  const constrained = resolved.saveData === true || (effectiveType ? CONSTRAINED_EFFECTIVE_TYPES.has(effectiveType) : false) || typeof resolved.rtt === "number" && resolved.rtt >= 750 || typeof resolved.downlink === "number" && resolved.downlink > 0 && resolved.downlink <= 0.5;
  return {
    shouldAttemptNetwork: true,
    flushOnOnline: true,
    flushIntervalMs: constrained ? 3e4 : 15e3,
    maxBatchSize: constrained ? 20 : 10,
    backoffMs: DEFAULT_BACKOFF_MS
  };
};

// src/siteAnalyticsDeliveryQueue.ts
var DEFAULT_MAX_BATCH_SIZE = 10;
var DEFAULT_MAX_QUEUE_SIZE = 100;
var DEFAULT_MAX_PAYLOAD_BYTES = 64 * 1024;
var DEFAULT_MAX_ATTEMPTS = 2;
var byteLength = (value) => new TextEncoder().encode(value).length;
var buildFirstPartyBatchEnvelope = (events) => ({
  events: events.map((event) => ({ ...event }))
});
var serializeBatch = (events) => JSON.stringify(buildFirstPartyBatchEnvelope(events));
var delay = (ms) => ms > 0 ? new Promise((resolve) => setTimeout(resolve, ms)) : Promise.resolve();
var resolveFirstPartyEventId = (event) => {
  if (typeof event.dedupe_key === "string" && event.dedupe_key.trim()) return event.dedupe_key.trim();
  const payloadEventId = event.payload.event_id;
  if (typeof payloadEventId === "string" && payloadEventId.trim()) return payloadEventId.trim();
  return `${event.event_name}:${JSON.stringify(event.payload)}`;
};
var isFirstPartyAnalyticsRequest = (payload) => {
  if (!payload || typeof payload !== "object") return false;
  const record = payload;
  return typeof record.event_name === "string" && Boolean(record.payload) && typeof record.payload === "object" && !Array.isArray(record.payload);
};
var createFirstPartyDeliveryQueue = (config) => {
  const queue = [];
  const persistedEventIds = /* @__PURE__ */ new Set();
  const maxBatchSize = Math.max(1, config.maxBatchSize ?? DEFAULT_MAX_BATCH_SIZE);
  const maxQueueSize = Math.max(1, config.maxQueueSize ?? DEFAULT_MAX_QUEUE_SIZE);
  const maxPayloadBytes = Math.max(1, config.maxPayloadBytes ?? DEFAULT_MAX_PAYLOAD_BYTES);
  const maxAttempts = Math.max(1, config.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  const retryDelayMs = Math.max(0, config.retryDelayMs ?? 0);
  const backoffMs = config.backoffMs && config.backoffMs.length > 0 ? config.backoffMs : resolveSiteAnalyticsFlushPolicy(void 0).backoffMs;
  const persistentQueue = config.persistentQueue ?? null;
  const currentTime = config.now ?? (() => Date.now());
  const hasCustomHeaders = Object.keys(config.headers ?? {}).length > 0;
  const emitMetric = (reason, eventIds = [], count = eventIds.length) => {
    if (!config.onMetric || count <= 0) return;
    config.onMetric({
      reason,
      count,
      at: currentTime(),
      ...eventIds.length > 0 ? { eventIds } : {}
    });
  };
  const currentPolicy = () => {
    const configuredState = typeof config.networkState === "function" ? config.networkState() : config.networkState;
    return resolveSiteAnalyticsFlushPolicy(resolveSiteAnalyticsNetworkState(configuredState));
  };
  const isTooLarge = (events) => byteLength(serializeBatch(events)) > maxPayloadBytes;
  const enqueue = (event) => {
    const eventId = resolveFirstPartyEventId(event);
    if (queue.length >= maxQueueSize) {
      emitMetric("queue_overflow", [eventId]);
      return { accepted: false, reason: "QUEUE_FULL" };
    }
    if (isTooLarge([event])) {
      emitMetric("payload_too_large", [eventId]);
      return { accepted: false, reason: "PAYLOAD_TOO_LARGE" };
    }
    queue.push(event);
    if (persistentQueue) {
      persistedEventIds.add(eventId);
      void persistentQueue.enqueue({
        eventId,
        payload: event,
        attempts: 0,
        nextAttemptAt: 0
      }).catch(() => {
        persistedEventIds.delete(eventId);
        emitMetric("persistent_enqueue_failed", [eventId]);
      });
    }
    return { accepted: true };
  };
  const removeQueuedEventIds = (eventIds) => {
    const sent = new Set(eventIds);
    for (let index = queue.length - 1; index >= 0; index -= 1) {
      if (sent.has(resolveFirstPartyEventId(queue[index]))) queue.splice(index, 1);
    }
    for (const eventId of eventIds) persistedEventIds.delete(eventId);
  };
  const takeBatch = (includePersisted = false) => {
    const candidates = includePersisted ? queue : queue.filter((event) => !persistedEventIds.has(resolveFirstPartyEventId(event)));
    let size = Math.min(maxBatchSize, candidates.length);
    while (size > 1 && isTooLarge(candidates.slice(0, size))) size -= 1;
    return candidates.slice(0, size);
  };
  const postBatch = async (events) => {
    const fetchImpl = config.fetchImpl ?? (typeof fetch !== "undefined" ? fetch.bind(globalThis) : void 0);
    if (!fetchImpl) return false;
    const body = serializeBatch(events);
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      const response = await fetchImpl(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...config.headers ?? {}
        },
        body,
        keepalive: true
      }).catch(() => null);
      if (response?.ok) return true;
      if (attempt < maxAttempts) await delay(retryDelayMs);
    }
    return false;
  };
  const nextBackoff = (items) => {
    const attempts = Math.max(0, ...items.map((item) => item.attempts));
    return backoffMs[Math.min(attempts, backoffMs.length - 1)] ?? backoffMs[backoffMs.length - 1] ?? 12e4;
  };
  const flushPersisted = async (result) => {
    if (!persistentQueue) return false;
    const now = currentTime();
    const items = await persistentQueue.peek(currentPolicy().maxBatchSize, now);
    if (items.length === 0) return false;
    const validItems = items.filter((item) => isFirstPartyAnalyticsRequest(item.payload));
    const invalidItems = items.filter((item) => !isFirstPartyAnalyticsRequest(item.payload));
    if (invalidItems.length > 0) {
      await persistentQueue.markSent(invalidItems.map((item) => item.eventId));
      emitMetric("persisted_payload_invalid", invalidItems.map((item) => item.eventId));
      result.droppedCount += invalidItems.length;
    }
    if (validItems.length === 0) return invalidItems.length > 0;
    const events = validItems.map((item) => item.payload);
    let size = Math.min(currentPolicy().maxBatchSize, events.length);
    while (size > 1 && isTooLarge(events.slice(0, size))) size -= 1;
    const batchItems = validItems.slice(0, size);
    const batch = batchItems.map((item) => item.payload);
    if (batch.length === 0 || isTooLarge(batch)) {
      await persistentQueue.markSent([validItems[0].eventId]);
      removeQueuedEventIds([validItems[0].eventId]);
      emitMetric("payload_too_large", [validItems[0].eventId]);
      result.droppedCount += 1;
      return true;
    }
    const sent = await postBatch(batch);
    if (!sent) {
      await persistentQueue.markFailed(
        batchItems.map((item) => item.eventId),
        now + nextBackoff(batchItems)
      );
      emitMetric("send_failed", batchItems.map((item) => item.eventId));
      result.failedCount += batch.length;
      return true;
    }
    await persistentQueue.markSent(batchItems.map((item) => item.eventId));
    removeQueuedEventIds(batchItems.map((item) => item.eventId));
    emitMetric("replay_succeeded", batchItems.map((item) => item.eventId));
    result.sentCount += batch.length;
    return true;
  };
  const flush = async () => {
    const result = {
      sentCount: 0,
      failedCount: 0,
      droppedCount: 0,
      usedBeacon: false
    };
    if (!currentPolicy().shouldAttemptNetwork) return result;
    while (await flushPersisted(result)) {
      if (result.failedCount > 0) return result;
    }
    for (; ; ) {
      const batch = takeBatch();
      if (batch.length === 0) break;
      if (isTooLarge(batch)) {
        const [dropped] = batch;
        if (dropped) {
          const eventId = resolveFirstPartyEventId(dropped);
          removeQueuedEventIds([eventId]);
          emitMetric("payload_too_large", [eventId]);
        } else queue.shift();
        result.droppedCount += 1;
        continue;
      }
      const sent = await postBatch(batch);
      if (!sent) {
        emitMetric("send_failed", batch.map(resolveFirstPartyEventId));
        result.failedCount += batch.length;
        break;
      }
      removeQueuedEventIds(batch.map(resolveFirstPartyEventId));
      emitMetric("batch_succeeded", batch.map(resolveFirstPartyEventId));
      result.sentCount += batch.length;
    }
    return result;
  };
  const flushWithBeacon = () => {
    const result = {
      sentCount: 0,
      failedCount: 0,
      droppedCount: 0,
      usedBeacon: false
    };
    const beaconImpl = config.beaconImpl;
    if (!beaconImpl || hasCustomHeaders || queue.length === 0) return result;
    const batch = takeBatch(true);
    if (batch.length === 0 || isTooLarge(batch)) {
      const dropped = batch[0] ?? queue[0];
      if (dropped) {
        const eventId = resolveFirstPartyEventId(dropped);
        removeQueuedEventIds([eventId]);
        emitMetric("payload_too_large", [eventId]);
      } else queue.shift();
      result.droppedCount += 1;
      return result;
    }
    const body = serializeBatch(batch);
    const beaconBody = typeof Blob !== "undefined" ? new Blob([body], { type: "application/json" }) : body;
    if (!beaconImpl(config.endpoint, beaconBody)) {
      result.failedCount = batch.length;
      emitMetric("beacon_failed", batch.map(resolveFirstPartyEventId));
      return result;
    }
    const eventIds = batch.map(resolveFirstPartyEventId);
    removeQueuedEventIds(eventIds);
    emitMetric("beacon_succeeded", eventIds);
    result.sentCount = batch.length;
    result.usedBeacon = true;
    return result;
  };
  return {
    enqueue,
    flush,
    flushWithBeacon,
    purgeForConsentReset: ({ customerAccountId, siteId } = {}) => {
      const purgedEventIds = [];
      for (let index = queue.length - 1; index >= 0; index -= 1) {
        const payload = queue[index].payload;
        if ((!customerAccountId || payload.customer_account_id === customerAccountId) && (!siteId || payload.site_id === siteId)) {
          const eventId = resolveFirstPartyEventId(queue[index]);
          persistedEventIds.delete(eventId);
          purgedEventIds.push(eventId);
          queue.splice(index, 1);
        }
      }
      emitMetric("consent_scope_purged", purgedEventIds);
      if (persistentQueue) {
        void persistentQueue.purge((item) => {
          if (!isFirstPartyAnalyticsRequest(item.payload)) return true;
          const payload = item.payload.payload;
          return (!customerAccountId || payload.customer_account_id === customerAccountId) && (!siteId || payload.site_id === siteId);
        });
      }
    },
    size: () => queue.length
  };
};

// src/siteAnalyticsAttribution.ts
var ATTRIBUTION_STORAGE_VERSION = 1;
var ATTRIBUTION_STORAGE_KEY = "gcs_site_analytics_attribution_v1";
var DEFAULT_ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1e3;
var ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "li_fat_id",
  "twclid",
  "rdt_cid",
  "_fbp",
  "_fbc",
  "referrer",
  "referring_domain",
  "campaign_id",
  "campaign_recipient_id",
  "email_contact_id",
  "email_click_id",
  "template_key",
  "template_version",
  "topic_key",
  "experiment_key",
  "experiment_variant"
];
var clean = (value) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
};
var SAFE_EMAIL_EXPERIMENT_IDENTIFIER_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;
var UNSAFE_EMAIL_EXPERIMENT_VALUE_PATTERN = /(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\bhttps?:\/\/|(?:authorization|bearer|credential|databaseUrl|database_url|dsn|password|private|refresh|secret|token|api[_-]?key)\b)/i;
var isSafeEmailExperimentIdentifier = (value) => {
  const trimmed = clean(value);
  return Boolean(trimmed) && SAFE_EMAIL_EXPERIMENT_IDENTIFIER_PATTERN.test(trimmed) && !UNSAFE_EMAIL_EXPERIMENT_VALUE_PATTERN.test(trimmed);
};
var sanitizeEmailExperimentAttribution = (values) => {
  const sanitized = { ...values };
  const experimentKey = clean(sanitized.experiment_key);
  const experimentVariant = clean(sanitized.experiment_variant);
  delete sanitized.experiment_key;
  delete sanitized.experiment_variant;
  if (isSafeEmailExperimentIdentifier(experimentKey) && isSafeEmailExperimentIdentifier(experimentVariant)) {
    sanitized.experiment_key = experimentKey;
    sanitized.experiment_variant = experimentVariant;
  }
  return sanitized;
};
var safeUrl = (value, base = "https://example.invalid/") => {
  try {
    return new URL(value, base);
  } catch {
    return null;
  }
};
var referringDomain = (referrer) => {
  const value = clean(referrer);
  if (!value) return null;
  const url = safeUrl(value);
  return url?.hostname || null;
};
var isValidSnapshot = (value, nowMs) => Boolean(value) && value?.version === ATTRIBUTION_STORAGE_VERSION && typeof value.expiresAtMs === "number" && value.expiresAtMs > nowMs;
var readAttributionFromUrl = (urlValue, referrer) => {
  const url = safeUrl(urlValue);
  const values = {};
  if (url) {
    for (const key of ATTRIBUTION_KEYS) {
      if (key === "referrer" || key === "referring_domain") continue;
      const value = clean(url.searchParams.get(key));
      if (value) values[key] = value;
    }
  }
  const cleanReferrer = clean(referrer);
  if (cleanReferrer) values.referrer = cleanReferrer;
  const domain = referringDomain(cleanReferrer);
  if (domain) values.referring_domain = domain;
  return sanitizeEmailExperimentAttribution(values);
};
var hasAttributionValues = (values) => Object.keys(values).length > 0;
var attributionProperties = (snapshot) => {
  const properties = {
    attribution_storage_version: ATTRIBUTION_STORAGE_VERSION,
    attribution_expires_at_ms: snapshot.expiresAtMs
  };
  for (const [key, value] of Object.entries(snapshot.latest)) {
    if (value) {
      properties[key] = value;
      properties[`latest_${key}`] = value;
    }
  }
  for (const [key, value] of Object.entries(snapshot.first)) {
    if (value) properties[`first_${key}`] = value;
  }
  return properties;
};
var resolveSiteAnalyticsAttributionSnapshot = (input) => {
  if (!isSiteAnalyticsVendorConsentGranted(input.consentState)) {
    return { snapshot: null, properties: {} };
  }
  const nowMs = input.nowMs ?? Date.now();
  const ttlMs = input.ttlMs ?? DEFAULT_ATTRIBUTION_TTL_MS;
  const existing = isValidSnapshot(input.existingSnapshot, nowMs) ? {
    ...input.existingSnapshot,
    first: sanitizeEmailExperimentAttribution(input.existingSnapshot.first),
    latest: sanitizeEmailExperimentAttribution(input.existingSnapshot.latest)
  } : null;
  const current = readAttributionFromUrl(input.url, input.referrer);
  if (!existing && !hasAttributionValues(current)) {
    return { snapshot: null, properties: {} };
  }
  const first = {
    ...existing?.first ?? {}
  };
  for (const [key, value] of Object.entries(current)) {
    if (!first[key] && value) first[key] = value;
  }
  const snapshot = {
    version: ATTRIBUTION_STORAGE_VERSION,
    first,
    latest: {
      ...existing?.latest ?? {},
      ...current
    },
    createdAtMs: existing?.createdAtMs ?? nowMs,
    updatedAtMs: nowMs,
    expiresAtMs: nowMs + ttlMs
  };
  return {
    snapshot,
    properties: attributionProperties(snapshot)
  };
};

// src/siteAnalyticsProviderProperties.ts
var POSTHOG_GROUP_TYPES = [
  "global_entity",
  "customer_account"
];
var clean2 = (value) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
};
var buildProviderBaseProperties = (input) => {
  const output = { gcs_layer: input.gcs_layer };
  const globalId = clean2(input.global_id);
  const siteId = clean2(input.site_id);
  const customerAccountId = clean2(input.customer_account_id);
  const industryKey2 = clean2(input.industry_key);
  const campaignKey = clean2(input.campaign_key);
  if (globalId) output.global_id = globalId;
  if (siteId) output.site_id = siteId;
  if (customerAccountId) output.customer_account_id = customerAccountId;
  if (industryKey2) output.industry_key = industryKey2;
  if (campaignKey) output.campaign_key = campaignKey;
  return output;
};
var buildPosthogGroups = (properties) => {
  const groups = {};
  if (properties.global_id) groups.global_entity = properties.global_id;
  if (properties.customer_account_id)
    groups.customer_account = properties.customer_account_id;
  return groups;
};
var SITE_ANALYTICS_PROVIDER_SCOPE_KEYS = [
  "event_id",
  "event_spec_version",
  "runtime_version",
  "analytics_runtime_version",
  "analytics_rollout_version",
  "analytics_asset_sha",
  "analytics_deployment_id",
  "sent_at",
  "site_id",
  "customer_account_id",
  "global_id",
  "environment",
  "traffic_class",
  "entity_id",
  "submission_id",
  "marketing_contact_submission_id",
  "site_audit_request_id",
  "campaign_id",
  "campaign_key",
  "campaign_recipient_id",
  "message_id",
  "template_key",
  "template_id",
  "template_version",
  "page_role",
  "business_vertical",
  "deployment_id",
  "topic_key",
  "session_id",
  "anonymous_id",
  "page_url",
  "page_url_clean",
  "path",
  "path_clean",
  "referrer",
  "referrer_clean",
  "landing_page_path",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "first_touch_source",
  "first_touch_medium",
  "first_touch_campaign",
  "first_touch_referrer",
  "email_hash",
  "phone_hash",
  "name_hash",
  "contact_hash",
  "device_type",
  "browser_name",
  "browser_family",
  "browser_version_major",
  "browser_version",
  "os_name",
  "os_family",
  "os_version",
  "screen_width",
  "screen_height",
  "viewport_width",
  "viewport_height",
  "device_pixel_ratio",
  "language",
  "locale_country",
  "timezone",
  "local_hour",
  "connection_effective_type",
  "connection_save_data",
  "connection_rtt",
  "connection_downlink",
  "device_memory_gb",
  "hardware_concurrency",
  "ua_ch_platform",
  "ua_ch_platform_version",
  "ua_ch_architecture",
  "ua_ch_bitness",
  "ua_ch_model",
  "ua_ch_mobile",
  "field_id",
  "field_hash",
  "field_type",
  "field_required",
  "field_index",
  "completion_count",
  "dwell_bucket",
  "visibility_ratio_bucket",
  "first_viewed_at",
  "copy_count",
  "source_component",
  "field_class",
  "active_time_bucket",
  "endpoint_path",
  "endpoint_family"
];
var buildSiteAnalyticsProviderProperties = (input) => {
  const output = {};
  for (const key of SITE_ANALYTICS_PROVIDER_SCOPE_KEYS) {
    const value = input[key];
    if (value !== void 0 && value !== null && value !== "") {
      output[key] = value;
    }
  }
  return output;
};

// src/siteAnalyticsPersistentQueue.ts
var DEFAULT_PERSISTENT_QUEUE_KEY = "gcs:site-analytics:first-party-queue";
var DEFAULT_MAX_ITEMS = 500;
var DEFAULT_RETENTION_MS = 7 * 24 * 60 * 60 * 1e3;
var canUseStorage = (storage) => Boolean(storage && typeof storage === "object");
var getStorageValue = (storage, key) => {
  if (storage instanceof Map) return storage.get(key) ?? null;
  return storage.getItem(key);
};
var setStorageValue = (storage, key, value) => {
  if (storage instanceof Map) {
    storage.set(key, value);
    return;
  }
  storage.setItem(key, value);
};
var removeStorageValue = (storage, key) => {
  if (storage instanceof Map) {
    storage.delete(key);
    return;
  }
  storage.removeItem(key);
};
var resolveBrowserStorage = () => {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null;
  }
};
var parseItems = (storage, key) => {
  const raw = getStorageValue(storage, key);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item && typeof item === "object" && typeof item.eventId === "string" && item.eventId.length > 0 && "payload" in item && typeof item.attempts === "number" && typeof item.nextAttemptAt === "number" && typeof item.createdAt === "number");
  } catch {
    return [];
  }
};
var createSiteAnalyticsPersistentQueue = (config = {}) => {
  const storage = canUseStorage(config.storage) ? config.storage : resolveBrowserStorage();
  const fallback = /* @__PURE__ */ new Map();
  const resolvedStorage = storage ?? fallback;
  const key = config.key ?? DEFAULT_PERSISTENT_QUEUE_KEY;
  const maxItems = Math.max(1, config.maxItems ?? DEFAULT_MAX_ITEMS);
  const retentionMs = Math.max(1, config.retentionMs ?? DEFAULT_RETENTION_MS);
  const now = config.now ?? (() => Date.now());
  const emitMetric = (reason, items) => {
    if (!config.onMetric || items.length === 0) return;
    const createdAts = items.map((item) => item.createdAt);
    config.onMetric({
      reason,
      count: items.length,
      key,
      at: now(),
      oldestCreatedAt: Math.min(...createdAts),
      newestCreatedAt: Math.max(...createdAts)
    });
  };
  const read = () => {
    const cutoff = now() - retentionMs;
    const parsed = parseItems(resolvedStorage, key);
    const active = parsed.filter((item) => item.createdAt >= cutoff);
    const expired = parsed.filter((item) => item.createdAt < cutoff);
    emitMetric("stale_retention_expired", expired);
    return active.sort((left, right) => left.createdAt - right.createdAt);
  };
  const write = (items) => {
    const sorted = items.sort((left, right) => left.createdAt - right.createdAt);
    const overflow = sorted.length > maxItems ? sorted.slice(0, sorted.length - maxItems) : [];
    emitMetric("persistent_queue_overflow", overflow);
    const bounded = sorted.slice(-maxItems);
    if (bounded.length === 0) {
      removeStorageValue(resolvedStorage, key);
      return;
    }
    setStorageValue(resolvedStorage, key, JSON.stringify(bounded));
  };
  return {
    async enqueue(item) {
      const items = read().filter((candidate) => candidate.eventId !== item.eventId);
      items.push({
        eventId: item.eventId,
        payload: item.payload,
        attempts: item.attempts,
        nextAttemptAt: item.nextAttemptAt,
        createdAt: item.createdAt ?? now()
      });
      write(items);
    },
    async peek(limit, requestedNow = now()) {
      const boundedLimit = Math.max(0, limit);
      if (boundedLimit === 0) return [];
      const items = read();
      write(items);
      return items.filter((item) => item.nextAttemptAt <= requestedNow).slice(0, boundedLimit).map((item) => ({ ...item }));
    },
    async markSent(eventIds) {
      const sent = new Set(eventIds);
      write(read().filter((item) => !sent.has(item.eventId)));
    },
    async markFailed(eventIds, nextAttemptAt) {
      const failed = new Set(eventIds);
      write(read().map((item) => failed.has(item.eventId) ? { ...item, attempts: item.attempts + 1, nextAttemptAt } : item));
    },
    async purge(predicate) {
      if (!predicate) {
        write([]);
        return;
      }
      write(read().filter((item) => !predicate(item)));
    },
    async size() {
      const items = read();
      write(items);
      return items.length;
    }
  };
};

// src/siteAnalyticsDispatcher.ts
var LEGACY_GA4_EVENT_NAMES = /* @__PURE__ */ new Set([
  "page_view",
  "view_item_list",
  "select_item",
  "view_item",
  "add_to_cart",
  "remove_from_cart",
  "view_cart",
  "begin_checkout",
  "add_payment_info",
  "purchase",
  "refund",
  "search",
  "generate_lead"
]);
var DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT = "/api/analytics/events";
var DEFAULT_POSTHOG_PAGEVIEW_STRATEGY = "canonical_fallback";
var GA4_DIRECT_COLLECT_ENDPOINT = "https://www.google-analytics.com/g/collect";
var DEFAULT_FIRST_PARTY_BROWSER_EVENT_ALLOWLIST = [
  "email_landing_attributed",
  "event_dropped",
  "schema_violation",
  "event_rate_limited",
  "sdk_error",
  "vendor_delivery_failed",
  "api_error",
  "email_experiment_exposed"
];
var POSTHOG_EXPOSURE_EVENT_NAMES = /* @__PURE__ */ new Set([
  "email_experiment_exposed",
  "feature_flag_exposure",
  "experiment_exposure"
]);
var VENDOR_UNSAFE_FIELD_NAMES2 = /* @__PURE__ */ new Set([
  "email",
  "unsafe_email",
  "phone",
  "unsafe_phone",
  "name",
  "unsafe_name",
  "exposure_name",
  "first_name",
  "last_name",
  "full_name",
  "display_name",
  "person_name",
  "message",
  "message_body",
  "free_text",
  "lead_message",
  "contact_email",
  "contact_email_address",
  "contact_phone",
  "contact_phone_number",
  "customer_address",
  "customer_email",
  "customer_email_address",
  "customer_message",
  "customer_name",
  "customer_first_name",
  "customer_last_name",
  "customer_full_name",
  "customer_phone",
  "customer_phone_number",
  "email_address",
  "phone_number",
  "mobile_phone",
  "street_address",
  "address_line_1",
  "address_line_2",
  "billing_address",
  "billing_city",
  "billing_postal_code",
  "billing_region",
  "billing_state",
  "billing_zip",
  "billing_name",
  "shipping_address",
  "shipping_city",
  "shipping_postal_code",
  "shipping_region",
  "shipping_state",
  "shipping_zip",
  "shipping_name",
  "address",
  "street",
  "city",
  "zip",
  "postal_code",
  "region",
  "state",
  "contact",
  "note",
  "notes",
  "description",
  "comment",
  "public_comment",
  "location",
  "copied_text",
  "clipboard_text",
  "selected_content",
  "$selected_content",
  "request_body",
  "response_body",
  "gcs_event_name"
]);
var VENDOR_SAFE_FIELD_NAMES2 = /* @__PURE__ */ new Set([
  "consent_state",
  "business_name",
  "template_name",
  "field_state",
  "account_state",
  "customer_state",
  "advanced_capability_state",
  "cta_location",
  "phone_click_target",
  "email_click_target",
  "region_id",
  "country_code",
  "email_hash",
  "phone_hash",
  "name_hash",
  "contact_hash"
]);
var VENDOR_SAFE_COMMERCE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "affiliation",
  "creative_name",
  "creative_slot",
  "item_brand",
  "item_category",
  "item_category2",
  "item_category3",
  "item_category4",
  "item_category5",
  "item_list_name",
  "item_name",
  "location_id",
  "promotion_name"
]);
var normalizeVendorFieldName2 = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
var isVendorUnsafeFieldName2 = (key) => {
  const normalized = normalizeVendorFieldName2(key);
  return !VENDOR_SAFE_FIELD_NAMES2.has(normalized) && !VENDOR_SAFE_COMMERCE_FIELD_NAMES.has(normalized) && VENDOR_UNSAFE_FIELD_NAMES2.has(normalized);
};
var toPosthogCustomEventName = (name) => {
  if (POSTHOG_EXPOSURE_EVENT_NAMES.has(name)) return "$feature_flag_called";
  return name;
};
var sanitizeVendorValue2 = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeVendorValue2(item));
  }
  if (value && typeof value === "object") {
    return sanitizeVendorProperties2(value);
  }
  return value;
};
var VENDOR_URL_FIELD_NAMES = /* @__PURE__ */ new Set([
  "current_url",
  "page_url",
  "referrer",
  "$current_url"
]);
var VENDOR_EXPERIMENT_IDENTIFIER_FIELD_NAMES = /* @__PURE__ */ new Set([
  "$feature_flag",
  "$feature_flag_response",
  "experiment_key",
  "experiment_variant",
  "flag_key",
  "flag_variant",
  "variant_key"
]);
var sanitizeVendorUrlValue = (value) => {
  if (typeof value !== "string" || value.trim().length === 0) return void 0;
  try {
    const url = new URL(value, "https://example.invalid");
    if (url.protocol !== "http:" && url.protocol !== "https:") return void 0;
    return `${url.origin}${url.pathname}`;
  } catch {
    return void 0;
  }
};
var sanitizeVendorProperties2 = (properties) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    const normalizedKey = normalizeVendorFieldName2(key);
    if (VENDOR_URL_FIELD_NAMES.has(normalizedKey)) {
      const sanitizedUrl = sanitizeVendorUrlValue(value);
      if (sanitizedUrl !== void 0) sanitized[key] = sanitizedUrl;
      continue;
    }
    if (key.startsWith("$feature/")) {
      const featureKey = key.slice("$feature/".length);
      if (isSafeEmailExperimentIdentifier(featureKey) && isSafeEmailExperimentIdentifier(value)) {
        sanitized[key] = value;
      }
      continue;
    }
    if (VENDOR_EXPERIMENT_IDENTIFIER_FIELD_NAMES.has(normalizedKey)) {
      if (typeof value === "boolean") {
        sanitized[key] = value;
      } else if (isSafeEmailExperimentIdentifier(value)) {
        sanitized[key] = value;
      }
      continue;
    }
    if (isVendorUnsafeFieldName2(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = sanitizeVendorValue2(value);
  }
  return sanitized;
};
var sanitizePosthogProperties2 = sanitizeVendorProperties2;
var isPosthogNativePageviewEnabled = (config) => config.posthogNativeCapture?.pageview === true || config.posthogNativeCapture?.pageview === "history_change";
var resolvePosthogPageviewStrategy = (config) => config.posthogPageviewStrategy ?? DEFAULT_POSTHOG_PAGEVIEW_STRATEGY;
var shouldSendCanonicalPageviewToPosthog = (config) => resolvePosthogPageviewStrategy(config) === "canonical_fallback" && !isPosthogNativePageviewEnabled(config);
var withPosthogGroups = (properties) => {
  const customerAccountId = typeof properties.customer_account_id === "string" ? properties.customer_account_id.trim() : "";
  const globalId = typeof properties.global_id === "string" ? properties.global_id.trim() : "";
  const groups = {};
  if (globalId) groups.global_entity = globalId;
  if (customerAccountId) groups.customer_account = customerAccountId;
  if (Object.keys(groups).length === 0) return properties;
  return {
    "$groups": groups,
    ...properties
  };
};
var isSameOriginPosthogProxy = (host) => {
  const trimmed = host?.trim();
  return Boolean(trimmed && trimmed.startsWith("/"));
};
var resolvePosthogDistinctId = (properties) => {
  for (const key of ["posthog_user_id", "anonymous_id", "session_id", "event_id"]) {
    const value = properties[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "anonymous";
};
var trimTrailingSlashes = (value) => {
  let end = value.length;
  while (end > 0 && value[end - 1] === "/") end -= 1;
  return value.slice(0, end);
};
var capturePosthogDirect = async (config, eventName, properties) => {
  if (!config.posthogKey || !isSameOriginPosthogProxy(config.posthogHost)) return false;
  const fetchImpl = config.fetchImpl ?? (typeof fetch === "function" ? fetch : void 0);
  if (!fetchImpl) return false;
  const host = trimTrailingSlashes(config.posthogHost || "");
  const response = await fetchImpl(`${host}/capture`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: config.posthogKey,
      event: eventName,
      distinct_id: resolvePosthogDistinctId(properties),
      properties,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    })
  });
  if ("ok" in response && response.ok === false) {
    throw new Error(`PostHog direct capture failed with status ${response.status}`);
  }
  return true;
};
var sanitizeGa4Properties = sanitizeVendorProperties2;
var GA4_DIRECT_COLLECT_EVENT_PARAM_NAMES = /* @__PURE__ */ new Set([
  "event_id",
  "event_spec_version",
  "site_id",
  "customer_account_id",
  "global_id",
  "session_id",
  "anonymous_id",
  "consent_state",
  "runtime_version",
  "analytics_runtime_version",
  "analytics_rollout_version",
  "analytics_asset_sha",
  "analytics_deployment_id",
  "deployment_id",
  "template_id",
  "template_version",
  "page_role",
  "business_vertical",
  "campaign_key",
  "campaign_id",
  "message_id",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "source_of_truth",
  "gcs_layer"
]);
var cleanGa4DirectCollectString = (value) => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed ? trimmed.slice(0, 500) : null;
  }
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  return null;
};
var cleanGa4DirectCollectMeasurementId = (value) => {
  const trimmed = value?.trim();
  return trimmed && /^G-[A-Z0-9]+$/i.test(trimmed) ? trimmed : null;
};
var cleanGa4DirectCollectUrl = (value) => {
  const candidate = cleanGa4DirectCollectString(value);
  if (!candidate) return null;
  try {
    const url = new URL(candidate, typeof window !== "undefined" ? window.location.href : "https://example.invalid/");
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return `${url.origin}${url.pathname}`;
  } catch {
    return null;
  }
};
var appendGa4DirectCollectParam = (params, key, value) => {
  const cleaned = cleanGa4DirectCollectString(value);
  if (cleaned) params.set(key, cleaned);
};
var appendGa4DirectCollectUrlParam = (params, key, value) => {
  const cleaned = cleanGa4DirectCollectUrl(value);
  if (cleaned) params.set(key, cleaned);
};
var buildGa4DirectCollectUrl = (measurementId, eventName, properties) => {
  const params = new URLSearchParams();
  params.set("v", "2");
  params.set("tid", measurementId);
  params.set("en", eventName);
  appendGa4DirectCollectParam(
    params,
    "cid",
    properties.ga_client_id ?? properties.anonymous_id ?? properties.session_id ?? properties.event_id
  );
  appendGa4DirectCollectParam(params, "sid", properties.ga_session_id);
  appendGa4DirectCollectUrlParam(params, "dl", properties.page_url);
  appendGa4DirectCollectUrlParam(params, "dr", properties.referrer);
  appendGa4DirectCollectParam(params, "dt", properties.page_title);
  appendGa4DirectCollectParam(params, "seg", properties.engagement_time_msec);
  for (const key of GA4_DIRECT_COLLECT_EVENT_PARAM_NAMES) {
    appendGa4DirectCollectParam(params, `ep.${key}`, properties[key]);
  }
  return `${GA4_DIRECT_COLLECT_ENDPOINT}?${params.toString()}`;
};
var ga4DirectCollectEventAllowed = (config, eventName) => {
  if (config.ga4DirectCollectEnabled !== true) return false;
  if (!isSiteAnalyticsVendorConsentGranted(config.consentState)) return false;
  if (!cleanGa4DirectCollectMeasurementId(config.ga4MeasurementId)) return false;
  const allowlist = config.ga4DirectCollectEventAllowlist;
  return Array.isArray(allowlist) && allowlist.length > 0 && allowlist.includes(eventName);
};
var sendGa4DirectCollect = async (config, eventName, properties) => {
  const measurementId = cleanGa4DirectCollectMeasurementId(config.ga4MeasurementId);
  if (!measurementId) return false;
  const url = buildGa4DirectCollectUrl(measurementId, eventName, properties);
  try {
    const fetchImpl = config.fetchImpl ?? (typeof fetch === "function" ? fetch : void 0);
    if (fetchImpl) {
      await fetchImpl(url, {
        method: "GET",
        mode: "no-cors",
        credentials: "omit",
        keepalive: true
      });
      return true;
    }
    const beaconImpl = typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function" ? navigator.sendBeacon.bind(navigator) : void 0;
    return beaconImpl ? beaconImpl(url) : false;
  } catch {
    return false;
  }
};
var resolveSampleRate = (profile, eventName, pack) => {
  const config = profile.sampling_config;
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    return 1;
  }
  const record = config;
  const byEvent = record.by_event;
  const byPack = record.by_pack;
  const defaultRate = typeof record.default_rate === "number" ? record.default_rate : 1;
  if (byEvent && typeof byEvent === "object" && !Array.isArray(byEvent)) {
    const value = byEvent[eventName];
    if (typeof value === "number") return value;
  }
  if (byPack && typeof byPack === "object" && !Array.isArray(byPack)) {
    const value = byPack[pack];
    if (typeof value === "number") return value;
  }
  return defaultRate;
};
var shouldSampleEvent = (profile, eventName) => {
  const definition = getSiteAnalyticsEventDefinition(eventName);
  if (!definition) return false;
  const rate = resolveSampleRate(profile, eventName, definition.pack);
  if (rate >= 1) return true;
  if (rate <= 0) return false;
  return randomUnit() <= rate;
};
var getEventDestinations = (profile, eventName, eventSink) => {
  const definition = getSiteAnalyticsEventDefinition(eventName);
  if (!definition) return [];
  const allowed = definition.destinations.filter((destination) => {
    if (isBrowserForbiddenProviderOutcomeEvent(eventName) && (destination === "posthog" || destination === "ga4")) {
      return false;
    }
    if (destination === "ga4" && !profile.ga4_extended_events_enabled && !LEGACY_GA4_EVENT_NAMES.has(eventName)) {
      return false;
    }
    if (destination === "first_party" && !profile.quality_events_enabled && definition.pack === "data_quality") {
      return false;
    }
    return true;
  });
  return applySiteAnalyticsEventSink(allowed, eventSink);
};
var getConfiguredEventDestinations = (config, eventName, eventSink) => {
  const destinations = getEventDestinations(config.profile, eventName, eventSink);
  if (eventName !== "page_view") return destinations;
  const withoutManualPosthog = destinations.filter((destination) => destination !== "posthog");
  if (shouldSendCanonicalPageviewToPosthog(config) && (!eventSink || eventSink === "posthog")) {
    return [...withoutManualPosthog, "posthog"];
  }
  return withoutManualPosthog;
};
var firstPartyBrowserEventAllowed = (config, eventName, event) => {
  if (config.firstPartyBrowserIngestEnabled !== true) return false;
  const hasExplicitAllowlist = config.firstPartyBrowserEventAllowlist !== void 0;
  if (event && isBrowserAcceptedSubmitConfirmation(event)) {
    return hasExplicitAllowlist ? new Set(config.firstPartyBrowserEventAllowlist).has(eventName) : true;
  }
  const definition = getSiteAnalyticsEventDefinition(eventName);
  if (definition?.event_class === "OUTCOME" || definition?.event_class === "LIFECYCLE") {
    return false;
  }
  const allowlist = hasExplicitAllowlist ? new Set(config.firstPartyBrowserEventAllowlist) : new Set(DEFAULT_FIRST_PARTY_BROWSER_EVENT_ALLOWLIST);
  return allowlist.has(eventName);
};
var isBrowserAcceptedSubmitConfirmation = (event) => {
  const properties = event.properties;
  return event.name === "form_submitted" && event.internal?.acceptedSubmitConfirmation === true && (properties.source_of_truth === void 0 || properties.source_of_truth === "browser") && properties.submit_outcome === "accepted_response";
};
var narrowBrowserAcceptedSubmitDestinations = (event, destinations) => isBrowserAcceptedSubmitConfirmation(event) ? destinations.filter((destination) => destination === "first_party") : destinations;
var isLocalBrowserOrigin = () => {
  if (typeof window === "undefined") return false;
  return ["localhost", "127.0.0.1", "[::1]", "::1"].includes(window.location.hostname);
};
var isSafeBrowserEndpoint = (endpoint) => {
  if (typeof window === "undefined") return true;
  if (/^https:\/\//i.test(endpoint)) return true;
  if (isLocalBrowserOrigin()) return true;
  return false;
};
var resolveFirstPartyEndpoint = (config) => {
  const configured = config.firstPartyEndpoint?.trim();
  if (configured) {
    if (isSafeBrowserEndpoint(configured)) return configured;
    console.warn("First-party analytics endpoint must be HTTPS outside local development");
    return void 0;
  }
  if (config.fetchImpl || isLocalBrowserOrigin()) {
    return DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT;
  }
  return void 0;
};
var emptyFlushResult = () => ({
  sentCount: 0,
  failedCount: 0,
  droppedCount: 0,
  usedBeacon: false
});
var createFirstPartyQueue = (config) => {
  if (config.firstPartyBrowserIngestEnabled !== true) return null;
  const endpoint = resolveFirstPartyEndpoint(config);
  if (!endpoint) return null;
  const persistentQueue = config.firstPartyPersistentQueueEnabled === false ? null : config.firstPartyPersistentQueue ?? createSiteAnalyticsPersistentQueue({
    storage: config.firstPartyPersistentQueueStorage,
    key: config.firstPartyPersistentQueueKey ?? [
      "gcs:site-analytics:first-party",
      config.profile.customer_account_id,
      config.profile.site_id
    ].join(":"),
    onMetric: config.firstPartyPersistentQueueMetricSink
  });
  return createFirstPartyDeliveryQueue({
    endpoint,
    headers: config.firstPartyHeaders,
    fetchImpl: config.fetchImpl,
    beaconImpl: config.firstPartyBeaconImpl ?? (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function" ? navigator.sendBeacon.bind(navigator) : void 0),
    maxBatchSize: config.firstPartyMaxBatchSize,
    maxQueueSize: config.firstPartyMaxQueueSize,
    maxPayloadBytes: config.firstPartyMaxPayloadBytes,
    maxAttempts: config.firstPartyMaxAttempts,
    retryDelayMs: config.firstPartyRetryDelayMs,
    backoffMs: config.firstPartyBackoffMs,
    networkState: config.firstPartyNetworkState,
    persistentQueue,
    now: config.firstPartyNow,
    onMetric: config.firstPartyDeliveryMetricSink
  });
};
var toFirstPartyRequest = (event) => {
  const definition = getSiteAnalyticsEventDefinition(event.name);
  if (!definition) return null;
  const properties = event.properties;
  return {
    event_name: event.name,
    event_class: definition.event_class ?? "DIAGNOSTIC",
    source_of_truth: String(properties.source_of_truth ?? "browser"),
    dedupe_key: typeof properties.dedupe_key === "string" ? properties.dedupe_key : typeof properties.event_id === "string" ? properties.event_id : null,
    payload: event.properties
  };
};
var sendToFirstParty = async (queue, flushMode, event) => {
  if (!queue) return;
  const request = toFirstPartyRequest(event);
  if (!request) return;
  const result = queue.enqueue(request);
  if (!result.accepted) {
    console.warn("First-party analytics enqueue failed", { event: event.name, reason: result.reason });
    if (event.name !== "event_dropped") {
      const properties = event.properties;
      const diagnosticId = `event_dropped:${String(properties.event_id ?? event.name)}`;
      const diagnostic = toFirstPartyRequest({
        name: "event_dropped",
        properties: {
          event_id: diagnosticId,
          event_spec_version: properties.event_spec_version,
          sent_at: (/* @__PURE__ */ new Date()).toISOString(),
          site_id: properties.site_id,
          customer_account_id: properties.customer_account_id,
          global_id: properties.global_id,
          session_id: properties.session_id,
          anonymous_id: properties.anonymous_id,
          page_url: properties.page_url,
          path: properties.path,
          referrer: properties.referrer,
          site_capabilities: properties.site_capabilities,
          consent_state: properties.consent_state,
          dedupe_key: diagnosticId,
          failed_event_name: event.name,
          validation_errors: [`first_party_enqueue_${result.reason.toLowerCase()}`],
          rate_limit_reason: result.reason,
          source_of_truth: "browser"
        }
      });
      if (diagnostic) {
        if (result.reason === "QUEUE_FULL") await queue.flush();
        const diagnosticResult = queue.enqueue(diagnostic);
        if (diagnosticResult.accepted && flushMode !== "manual") await queue.flush();
      }
    }
    return;
  }
  if (flushMode !== "manual") {
    const flushResult = await queue.flush();
    if (flushResult.failedCount > 0 || flushResult.droppedCount > 0) {
      console.warn("First-party analytics flush incomplete", { event: event.name, ...flushResult });
    }
  }
};
var reportSchemaViolation = async (config, queue, flushMode, event, errors, eventSink) => {
  if (event.name === "schema_violation") return;
  if (!getEventDestinations(config.profile, "schema_violation", eventSink).includes("first_party")) return;
  const properties = event.properties;
  if (!firstPartyBrowserEventAllowed(config, "schema_violation")) return;
  await sendToFirstParty(queue, flushMode, {
    name: "schema_violation",
    properties: {
      ...properties,
      event_id: typeof properties.event_id === "string" ? `schema_violation:${properties.event_id}` : properties.event_id,
      dedupe_key: typeof properties.event_id === "string" ? `schema_violation:${properties.event_id}` : properties.dedupe_key,
      failed_event_name: event.name,
      validation_errors: errors,
      source_of_truth: properties.source_of_truth ?? "browser"
    }
  });
};
var createSiteAnalyticsDispatcher = (config) => {
  const modes = resolveSiteAnalyticsModes(config);
  const eventSink = config.eventSink ? modes.eventSink : void 0;
  const firstPartyQueue = createFirstPartyQueue(config);
  const firstPartyFlushMode = config.firstPartyFlushMode ?? "immediate";
  const hasExplicitConsentState = config.consentState !== void 0;
  const dispatch = async (event) => {
    const validation = validateSiteAnalyticsEvent(event);
    if (!validation.valid) {
      await reportSchemaViolation(config, firstPartyQueue, firstPartyFlushMode, event, validation.errors, eventSink);
      return validation;
    }
    const browserAcceptedSubmitConfirmation = isBrowserAcceptedSubmitConfirmation(event);
    if (!browserAcceptedSubmitConfirmation && !isEventEnabledForProfile(config.profile, event.name)) {
      return { valid: false, errors: ["Event disabled by capability/profile"] };
    }
    if (!shouldSampleEvent(config.profile, event.name)) {
      return { valid: true, errors: [] };
    }
    const properties = event.properties;
    const destinations = narrowBrowserAcceptedSubmitDestinations(
      event,
      getConfiguredEventDestinations(config, event.name, eventSink)
    );
    const vendorConsentGranted = !hasExplicitConsentState || isSiteAnalyticsVendorConsentGranted(config.consentState);
    if (modes.eventPipelineMode === "first_party" && destinations.includes("first_party") && firstPartyBrowserEventAllowed(config, event.name, event)) {
      await sendToFirstParty(firstPartyQueue, firstPartyFlushMode, event);
    }
    if (vendorConsentGranted && destinations.includes("posthog")) {
      const posthogEventName = toPosthogCustomEventName(event.name);
      const providerScope = buildSiteAnalyticsProviderProperties(properties);
      const posthogProperties = {
        ...sanitizePosthogProperties2({
          ...withPosthogGroups({
            ...properties,
            ...providerScope
          }),
          gcs_layer: "gcs_canonical"
        }),
        ...POSTHOG_EXPOSURE_EVENT_NAMES.has(event.name) ? { gcs_event_name: event.name } : {}
      };
      const usedDirectCapture = await capturePosthogDirect(config, posthogEventName, posthogProperties);
      if (!usedDirectCapture) {
        const posthogCaptureOptions = config.proofModeSendInstantly ? { send_instantly: true } : void 0;
        import_posthog_js4.default.capture(posthogEventName, posthogProperties, posthogCaptureOptions);
      }
    }
    if (vendorConsentGranted && destinations.includes("ga4")) {
      const providerScope = buildSiteAnalyticsProviderProperties(properties);
      const ga4Properties = sanitizeGa4Properties({
        ...properties,
        ...providerScope
      });
      const usedDirectCollect = ga4DirectCollectEventAllowed(config, event.name) ? await sendGa4DirectCollect(config, event.name, ga4Properties) : false;
      if (!usedDirectCollect && typeof window !== "undefined" && window.gtag) {
        window.gtag("event", event.name, ga4Properties);
      }
    }
    if (modes.eventPipelineMode === "vendor_first" && destinations.includes("first_party") && firstPartyBrowserEventAllowed(config, event.name, event)) {
      await sendToFirstParty(firstPartyQueue, firstPartyFlushMode, event);
    }
    return validation;
  };
  return {
    dispatch,
    getEnabledPacks: () => getEnabledPacksForProfile(config.profile),
    getEventDestinations: (eventName) => getConfiguredEventDestinations(config, eventName, eventSink),
    isEventEnabled: (eventName) => isEventEnabledForProfile(config.profile, eventName),
    shouldSample: (eventName) => shouldSampleEvent(config.profile, eventName),
    flushFirstParty: () => firstPartyQueue?.flush() ?? Promise.resolve(emptyFlushResult()),
    flushFirstPartyWithBeacon: () => firstPartyQueue?.flushWithBeacon() ?? emptyFlushResult(),
    purgeFirstPartyForConsentReset: (scope) => firstPartyQueue?.purgeForConsentReset(scope)
  };
};

// src/siteAnalyticsRegulation.ts
var REGULATED_INDUSTRIES = /* @__PURE__ */ new Set([
  "healthcare",
  "wellness",
  "accounting_tax",
  "financial",
  "education"
]);
var INDUSTRY_ALIASES = {
  "health": "healthcare",
  "health_care": "healthcare",
  "medical": "healthcare",
  "dental": "healthcare",
  "therapy": "healthcare",
  "mental_health": "healthcare",
  "counseling": "healthcare",
  "pharmacy": "healthcare",
  "fitness": "wellness",
  "yoga": "wellness",
  "nutrition": "wellness",
  "spa": "wellness",
  "cpa": "accounting_tax",
  "accountant": "accounting_tax",
  "tax_preparation": "accounting_tax",
  "bookkeeping": "accounting_tax",
  "banking": "financial",
  "insurance": "financial",
  "investment": "financial",
  "wealth_management": "financial",
  "school": "education",
  "university": "education",
  "college": "education",
  "tutoring": "education",
  "training": "education"
};
var normalizeIndustry = (industry) => {
  if (!industry) return "";
  const normalized = industry.trim().toLowerCase().replace(/[\s-]+/g, "_");
  return INDUSTRY_ALIASES[normalized] ?? normalized;
};
var isRegulatedIndustry = (industry) => {
  const normalized = normalizeIndustry(industry);
  return REGULATED_INDUSTRIES.has(normalized);
};
var anonymizeIpToSubnet = (ip) => {
  if (!ip || typeof ip !== "string") return "";
  const trimmed = ip.trim();
  if (!trimmed) return "";
  if (trimmed.includes(".")) {
    const parts = trimmed.split(".");
    if (parts.length < 4 && !trimmed.endsWith(".0")) {
      return trimmed;
    }
    return parts.slice(0, 3).join(".") + ".0";
  }
  if (trimmed.includes(":")) {
    const parts = trimmed.split(":");
    if (parts.length < 8 && trimmed.includes("::")) {
      return trimmed;
    }
    return parts.slice(0, 4).join(":") + "::";
  }
  return trimmed;
};
var encoder = new TextEncoder();
var bytesToBase64Url = (bytes) => {
  const bin = Array.from(bytes).map((b) => String.fromCharCode(b)).join("");
  const base64 = btoa(bin);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
var hashIpForCountedIdentifiers = async (ip, salt) => {
  if (!ip || !salt) return "";
  const data = encoder.encode(ip + "\0" + salt);
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const keyData = encoder.encode(salt);
    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", key, data);
    return bytesToBase64Url(new Uint8Array(signature));
  }
  return "";
};
var resolveCollectionPolicy = (input) => {
  if (isRegulatedIndustry(input.industry)) return "restricted";
  if (input.highEntropyFingerprintingEnabled === false) return "restricted";
  return "standard";
};
var RESTRICTED_CONTEXT_FIELDS = /* @__PURE__ */ new Set([
  "canvas_fingerprint",
  "webgl_fingerprint",
  "audio_fingerprint",
  "font_fingerprint",
  "plugin_fingerprint",
  "device_fingerprint"
]);
var restrictContextForPolicy = (context, policy) => {
  if (policy !== "restricted") return context;
  const restricted = { ...context };
  for (const key of RESTRICTED_CONTEXT_FIELDS) {
    delete restricted[key];
  }
  return restricted;
};
var shouldCollectExactIp = (policy) => policy === "standard";
var shouldCollectHighEntropyFingerprinting = (policy) => policy === "standard";

// src/siteAnalyticsContext.ts
var DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS = [
  "device_type",
  "browser_family",
  "browser_version",
  "os_family",
  "os_version",
  "screen_width",
  "screen_height",
  "viewport_width",
  "viewport_height",
  "device_pixel_ratio",
  "language",
  "locale_country",
  "timezone",
  "local_hour"
];
var GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS = [
  "connection_effective_type",
  "connection_save_data",
  "connection_rtt",
  "connection_downlink",
  "device_memory_gb",
  "hardware_concurrency",
  "ua_ch_platform",
  "ua_ch_platform_version",
  "ua_ch_architecture",
  "ua_ch_bitness",
  "ua_ch_model",
  "ua_ch_mobile",
  "country_code",
  "region_code",
  "city",
  "client_ip",
  "ip_subnet",
  "collection_policy",
  "industry",
  "device_fingerprint",
  "canvas_fingerprint",
  "webgl_fingerprint",
  "audio_fingerprint",
  "font_fingerprint",
  "plugin_fingerprint"
];
var NON_COLLECTABLE_BROWSER_DEVICE_FIELDS = /* @__PURE__ */ new Set([
  "mac_address",
  "imei",
  "installed_apps",
  "advertising_id",
  "serial_number"
]);
var cleanString = (value) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed || void 0;
};
var finiteNumber = (value) => typeof value === "number" && Number.isFinite(value) ? value : void 0;
var integerNumber = (value) => {
  const parsed = finiteNumber(value);
  return parsed === void 0 ? void 0 : Math.round(parsed);
};
var detectBrowser = (userAgent) => {
  const value = userAgent || "";
  const edge = value.match(/Edg\/([0-9.]+)/);
  if (edge) return { family: "Edge", version: edge[1]?.split(".")[0] };
  const chrome = value.match(/(?:Chrome|CriOS)\/([0-9.]+)/);
  if (chrome) return { family: "Chrome", version: chrome[1]?.split(".")[0] };
  const firefox = value.match(/(?:Firefox|FxiOS)\/([0-9.]+)/);
  if (firefox) return { family: "Firefox", version: firefox[1]?.split(".")[0] };
  const safari = value.includes("Safari") ? value.match(/Version\/([0-9.]+)/) : null;
  if (safari) return { family: "Safari", version: safari[1]?.split(".")[0] };
  return {};
};
var detectOs = (userAgent, platform) => {
  const value = [platform, userAgent].filter(Boolean).join(" ");
  if (/Android/i.test(value)) {
    const version = value.match(/Android\s+([0-9._]+)/i)?.[1]?.replace(/_/g, ".");
    return { family: "Android", version };
  }
  if (/(iPhone|iPad|iPod|iOS)/i.test(value)) {
    const version = value.match(/OS\s+([0-9_]+)/i)?.[1]?.replace(/_/g, ".");
    return { family: "iOS", version };
  }
  if (/Windows/i.test(value)) return { family: "Windows" };
  if (/Mac OS X|Macintosh|macOS/i.test(value)) {
    const version = value.match(/Mac OS X\s+([0-9_]+)/i)?.[1]?.replace(/_/g, ".");
    return { family: "macOS", version };
  }
  if (/Linux/i.test(value)) return { family: "Linux" };
  return {};
};
var detectDeviceType = (input) => {
  if (input.mobile === true) return "mobile";
  if (/Mobi|Android|iPhone|iPod/i.test(input.userAgent || "")) return "mobile";
  if (/iPad|Tablet/i.test(input.userAgent || "")) return "tablet";
  if (input.viewportWidth !== void 0 && input.viewportWidth > 0 && input.viewportWidth < 768)
    return "mobile";
  return "desktop";
};
var detectLocaleCountry = (language) => {
  const match = (language || "").match(/[-_]([A-Za-z]{2})\b/);
  return match ? match[1]?.toUpperCase() : void 0;
};
var readTimezone = (input) => {
  const configured = cleanString(input?.timezone);
  if (configured) return configured;
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
};
var readLocalHour = (date, timezone) => {
  try {
    const value = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "numeric",
      hour12: false
    }).format(date);
    const parsed = Number.parseInt(value, 10);
    if (Number.isFinite(parsed)) return parsed === 24 ? 0 : parsed;
  } catch {
  }
  return date.getHours();
};
var currentNavigator = () => {
  try {
    return typeof navigator !== "undefined" ? navigator : void 0;
  } catch {
    return void 0;
  }
};
var currentScreen = () => {
  try {
    return typeof screen !== "undefined" ? screen : void 0;
  } catch {
    return void 0;
  }
};
var currentWindow = () => {
  try {
    return typeof window !== "undefined" ? window : void 0;
  } catch {
    return void 0;
  }
};
var putDefined = (target, key, value) => {
  if (value !== void 0 && value !== null && value !== "") {
    target[key] = value;
  }
};
var canUseBrowser = () => {
  try {
    return typeof window !== "undefined" && typeof document !== "undefined";
  } catch {
    return false;
  }
};
var generateDeviceFingerprint = (input) => {
  if (!canUseBrowser()) return void 0;
  const components = [
    input.navigator?.userAgent,
    input.navigator?.language,
    input.screen?.width,
    input.screen?.height,
    input.window?.devicePixelRatio,
    input.navigator?.hardwareConcurrency,
    input.navigator?.deviceMemory,
    (/* @__PURE__ */ new Date()).getTimezoneOffset()
  ].join("|");
  let hash2 = 0;
  for (let i = 0; i < components.length; i++) {
    const char = components.charCodeAt(i);
    hash2 = (hash2 << 5) - hash2 + char;
    hash2 = hash2 & hash2;
  }
  return Math.abs(hash2).toString(16).padStart(16, "0");
};
var generateCanvasFingerprint = () => {
  if (!canUseBrowser()) return void 0;
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return void 0;
    canvas.width = 200;
    canvas.height = 50;
    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillStyle = "#f60";
    ctx.fillRect(0, 0, 200, 50);
    ctx.fillStyle = "#069";
    ctx.fillText("GCS Analytics", 2, 15);
    ctx.strokeStyle = "#069";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 50);
    ctx.stroke();
    return canvas.toDataURL().slice(-32);
  } catch {
    return void 0;
  }
};
var generateWebglFingerprint = () => {
  if (!canUseBrowser()) return void 0;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return void 0;
    const debugInfo = gl.getExtension(
      "WEBGL_debug_renderer_info"
    );
    if (!debugInfo) return void 0;
    const vendor = gl.getParameter(
      debugInfo.UNMASKED_VENDOR_WEBGL
    );
    const renderer = gl.getParameter(
      debugInfo.UNMASKED_RENDERER_WEBGL
    );
    return `${vendor}|${renderer}`;
  } catch {
    return void 0;
  }
};
var generateAudioFingerprint = () => {
  if (!canUseBrowser()) return void 0;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return void 0;
    const ctx = new AudioCtx();
    const oscillator = ctx.createOscillator();
    const analyser = ctx.createAnalyser();
    const gain = ctx.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.value = 1e4;
    gain.gain.value = 0;
    oscillator.connect(analyser);
    analyser.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(0);
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    oscillator.stop();
    ctx.close();
    const sum = data.reduce((a, b) => a + b, 0);
    return sum.toString(16);
  } catch {
    return void 0;
  }
};
var generateFontFingerprint = () => {
  if (!canUseBrowser()) return void 0;
  try {
    const testFonts = [
      "Arial",
      "Courier New",
      "Georgia",
      "Times New Roman",
      "Verdana",
      "Helvetica",
      "Trebuchet MS",
      "Palatino",
      "Garamond",
      "Bookman",
      "Comic Sans MS",
      "Impact",
      "Tahoma",
      "Calibri",
      "Cambria"
    ];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return void 0;
    const detected = [];
    for (const font of testFonts) {
      ctx.font = `72px "${font}", monospace`;
      const testWidth = ctx.measureText("mmmmmmmmmmlli").width;
      ctx.font = "72px monospace";
      const baseWidth = ctx.measureText("mmmmmmmmmmlli").width;
      if (Math.abs(testWidth - baseWidth) > 1) {
        detected.push(font);
      }
    }
    return detected.join(",");
  } catch {
    return void 0;
  }
};
var generatePluginFingerprint = (nav) => {
  if (!canUseBrowser()) return void 0;
  try {
    const plugins = nav?.plugins ?? (typeof navigator !== "undefined" ? navigator.plugins : void 0);
    if (!plugins || plugins.length === 0) return void 0;
    return Array.from(plugins).map((p) => p.name).join(",");
  } catch {
    return void 0;
  }
};
var buildSiteAnalyticsContextSync = (input = {}) => {
  const nav = input.navigator ?? currentNavigator();
  const screenSource = input.screen ?? currentScreen();
  const windowSource = input.window ?? currentWindow();
  const userAgentData = nav?.userAgentData;
  const userAgent = cleanString(nav?.userAgent);
  const viewportWidth = integerNumber(windowSource?.innerWidth);
  const browser = detectBrowser(userAgent);
  const os = detectOs(userAgent, userAgentData?.platform);
  const timezone = readTimezone(input);
  const date = input.date ?? /* @__PURE__ */ new Date();
  const context = {};
  putDefined(
    context,
    "device_type",
    detectDeviceType({
      userAgent,
      mobile: userAgentData?.mobile,
      viewportWidth
    })
  );
  putDefined(context, "browser_family", browser.family);
  putDefined(context, "browser_version", browser.version);
  putDefined(context, "os_family", os.family);
  putDefined(context, "os_version", os.version);
  putDefined(context, "screen_width", integerNumber(screenSource?.width));
  putDefined(context, "screen_height", integerNumber(screenSource?.height));
  putDefined(context, "viewport_width", viewportWidth);
  putDefined(
    context,
    "viewport_height",
    integerNumber(windowSource?.innerHeight)
  );
  putDefined(
    context,
    "device_pixel_ratio",
    finiteNumber(windowSource?.devicePixelRatio)
  );
  const language = cleanString(nav?.language);
  putDefined(context, "language", language);
  putDefined(context, "locale_country", detectLocaleCountry(language));
  putDefined(context, "timezone", timezone);
  putDefined(context, "local_hour", readLocalHour(date, timezone));
  if (input.governedContextEnabled === true) {
    const connection = nav?.connection;
    putDefined(
      context,
      "connection_effective_type",
      cleanString(connection?.effectiveType)
    );
    putDefined(
      context,
      "connection_save_data",
      typeof connection?.saveData === "boolean" ? connection.saveData : void 0
    );
    putDefined(context, "connection_rtt", integerNumber(connection?.rtt));
    putDefined(
      context,
      "connection_downlink",
      finiteNumber(connection?.downlink)
    );
    putDefined(context, "device_memory_gb", finiteNumber(nav?.deviceMemory));
    putDefined(
      context,
      "hardware_concurrency",
      integerNumber(nav?.hardwareConcurrency)
    );
    putDefined(context, "ua_ch_platform", cleanString(userAgentData?.platform));
    putDefined(
      context,
      "ua_ch_mobile",
      typeof userAgentData?.mobile === "boolean" ? userAgentData.mobile : void 0
    );
  }
  return context;
};
var buildSiteAnalyticsContext = async (input = {}) => {
  const context = buildSiteAnalyticsContextSync(input);
  if (input.governedContextEnabled !== true) return context;
  const nav = input.navigator ?? currentNavigator();
  const userAgentData = nav?.userAgentData;
  if (typeof userAgentData?.getHighEntropyValues === "function") {
    try {
      const highEntropy = await userAgentData.getHighEntropyValues([
        "platform",
        "platformVersion",
        "architecture",
        "bitness",
        "model"
      ]);
      putDefined(
        context,
        "ua_ch_platform",
        cleanString(highEntropy.platform) ?? context.ua_ch_platform
      );
      putDefined(
        context,
        "ua_ch_platform_version",
        cleanString(highEntropy.platformVersion)
      );
      putDefined(
        context,
        "ua_ch_architecture",
        cleanString(highEntropy.architecture)
      );
      putDefined(context, "ua_ch_bitness", cleanString(highEntropy.bitness));
      putDefined(context, "ua_ch_model", cleanString(highEntropy.model));
    } catch {
    }
  }
  putDefined(context, "country_code", cleanString(input.countryCode));
  putDefined(context, "region_code", cleanString(input.regionCode));
  putDefined(context, "city", cleanString(input.city));
  const policy = resolveCollectionPolicy({
    industry: input.industry,
    highEntropyFingerprintingEnabled: input.highEntropyFingerprintingEnabled
  });
  putDefined(context, "collection_policy", policy);
  putDefined(context, "industry", cleanString(input.industry) ?? void 0);
  if (policy === "standard") {
    putDefined(context, "client_ip", cleanString(input.clientIp));
  } else {
    putDefined(context, "ip_subnet", anonymizeIpToSubnet(input.clientIp || ""));
  }
  if (input.highEntropyFingerprintingEnabled !== false && policy === "standard") {
    putDefined(context, "device_fingerprint", generateDeviceFingerprint(input));
    putDefined(context, "canvas_fingerprint", generateCanvasFingerprint());
    putDefined(context, "webgl_fingerprint", generateWebglFingerprint());
    putDefined(context, "audio_fingerprint", generateAudioFingerprint());
    putDefined(context, "font_fingerprint", generateFontFingerprint());
    putDefined(context, "plugin_fingerprint", generatePluginFingerprint(nav));
  }
  return context;
};

// src/siteAnalyticsRuntime.ts
var import_posthog_js6 = __toESM(require("posthog-js"));

// src/siteAnalyticsObservers.ts
var import_posthog_js5 = __toESM(require("posthog-js"));
var noopHandle = {
  cleanup: () => void 0
};
var stableHash = (value) => {
  let hash2 = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash2 ^= value.charCodeAt(index);
    hash2 = Math.imul(hash2, 16777619);
  }
  return (hash2 >>> 0).toString(16).padStart(8, "0");
};
var SENSITIVE_ENDPOINT_SEGMENT = /(?:token|secret|session|auth|code|signature|jwt|bearer|password|passwd|reset|email|phone|user|customer|account|contact|invite|credential|key)/i;
var LONG_HEX_ENDPOINT_SEGMENT = /^[a-f0-9]{16,}$/i;
var UUID_ENDPOINT_SEGMENT = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var EMAIL_ENDPOINT_SEGMENT = /^[^/@\s]+@[^/@\s]+\.[^/@\s]+$/i;
var PHONE_ENDPOINT_SEGMENT = /^\+?[0-9][0-9().\-\s]{6,}[0-9]$/;
var NUMERIC_ID_ENDPOINT_SEGMENT = /^[0-9]{6,}$/;
var HIGH_ENTROPY_ENDPOINT_SEGMENT = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9_-]{12,}$/i;
var safeDecodeEndpointSegment = (segment) => {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
};
var shouldRedactEndpointSegment = (segment, previousSegment) => {
  const decoded = safeDecodeEndpointSegment(segment);
  const previousDecoded = previousSegment ? safeDecodeEndpointSegment(previousSegment) : "";
  return SENSITIVE_ENDPOINT_SEGMENT.test(decoded) || Boolean(previousDecoded) && SENSITIVE_ENDPOINT_SEGMENT.test(previousDecoded) || LONG_HEX_ENDPOINT_SEGMENT.test(decoded) || UUID_ENDPOINT_SEGMENT.test(decoded) || EMAIL_ENDPOINT_SEGMENT.test(decoded) || PHONE_ENDPOINT_SEGMENT.test(decoded) || NUMERIC_ID_ENDPOINT_SEGMENT.test(decoded) || HIGH_ENTROPY_ENDPOINT_SEGMENT.test(decoded);
};
var redactSensitiveEndpointPath = (path) => {
  const segments = path.split("/");
  const redacted = segments.map((segment, index) => {
    if (!segment) return segment;
    return shouldRedactEndpointSegment(segment, segments[index - 1]) ? "[redacted]" : segment;
  });
  const joined = redacted.join("/");
  return joined.startsWith("/") ? joined : `/${joined}`;
};
var normalizeEndpointPath = (value, base) => {
  try {
    const url = new URL(value, base || (typeof window !== "undefined" ? window.location.href : "https://invalid.local/"));
    return redactSensitiveEndpointPath(url.pathname || "/");
  } catch {
    return "/unknown";
  }
};
var endpointFamily = (path) => {
  const first = path.split("/").filter(Boolean)[0];
  return first || "root";
};
var fieldIdentifier = (field, index) => field.getAttribute?.("data-analytics-field-id") ?? field.dataset?.analyticsFieldId ?? field.name ?? field.id ?? `field-${index}`;
var lightweightFieldType = (field) => {
  const explicit = field.type?.trim();
  if (explicit) return explicit.toLowerCase().slice(0, 32);
  return "unknown";
};
var dwellBucket = (ms) => {
  if (ms < 1e3) return "under_1s";
  if (ms < 5e3) return "1s_5s";
  if (ms < 15e3) return "5s_15s";
  return "15s_plus";
};
var attachSiteAnalyticsObservers = ({
  document: doc = typeof document !== "undefined" ? document : void 0,
  track,
  consent
}) => {
  if (!doc?.querySelectorAll || consent?.analytics_storage === "denied") return () => void 0;
  const cleanup = [];
  const completed = /* @__PURE__ */ new Set();
  let completionCount = 0;
  const startedAt = /* @__PURE__ */ new Map();
  const fields = doc.querySelectorAll("input, textarea, select");
  fields.forEach((field, index) => {
    const id = fieldIdentifier(field, index);
    const onFocus = () => {
      if (!startedAt.has(id)) startedAt.set(id, Date.now());
    };
    const onComplete = () => {
      if (completed.has(id)) return;
      const rawValue = field.value;
      const hasValue2 = typeof rawValue === "boolean" ? rawValue : typeof rawValue === "number" ? Number.isFinite(rawValue) : typeof rawValue === "string" ? rawValue.trim().length > 0 : rawValue != null;
      if (!hasValue2) return;
      completed.add(id);
      completionCount += 1;
      const started = startedAt.get(id) ?? Date.now();
      void track("form_field_completed", {
        field_id: id,
        field_hash: stableHash(id),
        field_type: lightweightFieldType(field),
        field_required: field.required === true,
        field_index: index,
        completion_count: completionCount,
        dwell_bucket: dwellBucket(Date.now() - started)
      });
    };
    field.addEventListener?.("focus", onFocus);
    field.addEventListener?.("change", onComplete);
    field.addEventListener?.("blur", onComplete);
    cleanup.push(() => {
      field.removeEventListener?.("focus", onFocus);
      field.removeEventListener?.("change", onComplete);
      field.removeEventListener?.("blur", onComplete);
    });
  });
  return () => cleanup.forEach((listener) => listener());
};
var installApiErrorObserver = ({
  window: windowLike = typeof window !== "undefined" ? window : void 0,
  track
}) => {
  const originalFetch = windowLike?.fetch;
  const OriginalXHR = windowLike?.XMLHttpRequest;
  const xhrOpen = OriginalXHR?.prototype?.open;
  const xhrSend = OriginalXHR?.prototype?.send;
  const base = windowLike?.location?.href || "https://invalid.local/";
  const xhrMeta = /* @__PURE__ */ new WeakMap();
  const report = (input) => {
    const path = normalizeEndpointPath(input.url, base);
    void track("api_error", {
      method: input.method.toUpperCase().slice(0, 16),
      endpoint_path: path,
      endpoint_family: endpointFamily(path),
      status: input.status
    });
  };
  const wrappedFetch = (async (input, init) => {
    if (!originalFetch) throw new Error("fetch is unavailable");
    const method = init?.method ?? (typeof Request !== "undefined" && input instanceof Request ? input.method : void 0) ?? "GET";
    const url = typeof input === "string" || input instanceof URL ? String(input) : typeof Request !== "undefined" && input instanceof Request ? input.url : String(input);
    try {
      const response = await originalFetch.call(windowLike, input, init);
      if ("ok" in response && response.ok === false) {
        report({ method, url: response.url || url, status: "status" in response ? response.status : null });
      }
      return response;
    } catch (error) {
      report({ method, url, status: null });
      throw error;
    }
  });
  if (windowLike && originalFetch) windowLike.fetch = wrappedFetch;
  if (OriginalXHR && xhrOpen && xhrSend) {
    OriginalXHR.prototype.open = function open(method, url, ...rest) {
      xhrMeta.set(this, {
        method: String(method || "GET"),
        url: String(url)
      });
      return xhrOpen.call(this, method, url, ...rest);
    };
    OriginalXHR.prototype.send = function send(...args) {
      this.addEventListener("loadend", () => {
        const meta = xhrMeta.get(this);
        if (meta && this.status >= 400) {
          report({
            method: meta.method,
            url: this.responseURL || meta.url,
            status: this.status
          });
        }
      }, { once: true });
      return xhrSend.call(this, ...args);
    };
  }
  return {
    fetch: wrappedFetch,
    xhr: async (url, method = "GET") => {
      if (!OriginalXHR) throw new Error("XMLHttpRequest is unavailable");
      const xhr = new OriginalXHR();
      xhr.open(method, url);
      xhr.send();
    },
    detach: () => {
      if (windowLike && originalFetch && windowLike.fetch === wrappedFetch) windowLike.fetch = originalFetch;
      if (OriginalXHR && xhrOpen) OriginalXHR.prototype.open = xhrOpen;
      if (OriginalXHR && xhrSend) OriginalXHR.prototype.send = xhrSend;
    }
  };
};
var buildEvent = (baseFactory, name, properties = {}) => {
  const base = baseFactory();
  return {
    name,
    properties: {
      ...base.properties,
      ...properties
    }
  };
};
var DIAGNOSTIC_ERROR_CODE = {
  javascript: "javascript_error",
  rejection: "unhandled_promise_rejection",
  resource: "resource_load_failed",
  route: "route_transition_failed",
  api_http: "api_http_error",
  api_network: "api_network_error"
};
var sanitizeDiagnosticEndpoint = (value) => {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value, typeof window !== "undefined" ? window.location.href : "https://invalid.local/");
    return url.origin + redactSensitiveEndpointPath(url.pathname);
  } catch {
    return null;
  }
};
var sanitizeSectionId = (value) => {
  const id = (value ?? "").trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
  return id.slice(0, 80) || "unknown";
};
var sanitizeToken = (value, fallback = "unknown") => {
  const id = (value ?? "").trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
  return id.slice(0, 80) || fallback;
};
var safeFormFieldType = (control) => {
  if (control instanceof HTMLInputElement) return sanitizeToken(control.type || "text");
  if (control instanceof HTMLTextAreaElement) return "textarea";
  if (control instanceof HTMLSelectElement) return "select";
  return sanitizeToken(control.tagName || "field");
};
var formFieldId = (control) => sanitizeToken(
  control.getAttribute("data-analytics-field") || control.getAttribute("data-track-field") || control.name || control.id || control.getAttribute("aria-label")
);
var getTrackableFormControls = (form) => Array.from(form.elements).filter((control) => {
  if (!(control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement)) return false;
  if (control.disabled) return false;
  if (control instanceof HTMLInputElement) {
    const type = control.type.toLowerCase();
    if (["button", "file", "hidden", "image", "password", "reset", "submit"].includes(type)) return false;
  }
  return true;
});
var isFormControlComplete = (control) => {
  if (control instanceof HTMLInputElement) {
    const type = control.type.toLowerCase();
    if (type === "checkbox" || type === "radio") return control.checked;
  }
  if (control instanceof HTMLSelectElement && control.multiple) {
    return control.selectedOptions.length > 0;
  }
  return String(control.value ?? "").trim().length > 0;
};
var formContextProperties = (form, control) => {
  const controls = getTrackableFormControls(form);
  const index = control ? controls.indexOf(control) : -1;
  return {
    lead_form_id: form.id || form.getAttribute("name"),
    form_field_id: control ? formFieldId(control) : void 0,
    form_field_type: control ? safeFormFieldType(control) : void 0,
    form_field_position: index >= 0 ? index + 1 : void 0,
    form_field_count: controls.length
  };
};
var buildWebVitalsProperties = (metric) => ({
  media_type: String(metric.name ?? "web_vital").toLowerCase().slice(0, 64),
  latency_ms: Math.round(Number(metric.value ?? metric.delta ?? 0)),
  rating: typeof metric.rating === "string" ? metric.rating.slice(0, 32) : void 0,
  ...typeof metric.id === "string" ? { event_id: metric.id.slice(0, 120) } : {}
});
var attachScrollObserver = ({
  dispatcher,
  baseEventFactory,
  thresholds = [25, 50, 75, 100]
}) => {
  if (typeof window === "undefined" || !dispatcher.isEventEnabled("scroll_depth")) return noopHandle;
  const seen = /* @__PURE__ */ new Set();
  const onScroll = () => {
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const pct = Math.min(100, Math.round(window.scrollY / maxScroll * 100));
    for (const threshold of thresholds) {
      if (pct >= threshold && !seen.has(threshold)) {
        seen.add(threshold);
        void dispatcher.dispatch(buildEvent(baseEventFactory, "scroll_depth", { progress_pct: threshold }));
      }
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return {
    cleanup: () => {
      if (typeof window !== "undefined") window.removeEventListener("scroll", onScroll);
    }
  };
};
var attachTimeOnPageObserver = ({
  dispatcher,
  baseEventFactory,
  intervalMs = 15e3
}) => {
  if (typeof window === "undefined" || !dispatcher.isEventEnabled("time_on_page")) return noopHandle;
  const startedAt = Date.now();
  const id = window.setInterval(() => {
    void dispatcher.dispatch(buildEvent(baseEventFactory, "time_on_page", {
      latency_ms: Date.now() - startedAt
    }));
  }, intervalMs);
  return {
    cleanup: () => window.clearInterval(id)
  };
};
var activeTimeBucket = (elapsedMs) => {
  if (elapsedMs < 3e4) return "under_30s";
  if (elapsedMs < 12e4) return "30s_2m";
  if (elapsedMs < 3e5) return "2m_5m";
  return "5m_plus";
};
var attachActiveTimeObserver = ({
  dispatcher,
  baseEventFactory,
  intervalMs = 3e4
}) => {
  if (typeof window === "undefined" || typeof document === "undefined" || !dispatcher.isEventEnabled("active_time_tick")) {
    return noopHandle;
  }
  let activeMs = 0;
  const id = window.setInterval(() => {
    if (document.visibilityState === "hidden") return;
    activeMs += intervalMs;
    void dispatcher.dispatch(buildEvent(baseEventFactory, "active_time_tick", {
      active_time_bucket: activeTimeBucket(activeMs),
      engagement_time_msec: activeMs
    }));
  }, intervalMs);
  return {
    cleanup: () => window.clearInterval(id)
  };
};
var attachOutboundAndDownloadObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined") return noopHandle;
  const onClick = (event) => {
    const target = event.target instanceof Element ? event.target.closest("a") : null;
    if (!(target instanceof HTMLAnchorElement)) return;
    const href = target.href;
    if (!href) return;
    try {
      const url = new URL(href, window.location.href);
      const currentHost = window.location.host;
      if ((url.protocol === "http:" || url.protocol === "https:") && url.host !== currentHost && dispatcher.isEventEnabled("outbound_link_clicked")) {
        void dispatcher.dispatch(buildEvent(baseEventFactory, "outbound_link_clicked", {
          endpoint: url.origin
        }));
      }
      if (url.protocol === "tel:" && dispatcher.isEventEnabled("phone_clicked")) {
        void dispatcher.dispatch(buildEvent(baseEventFactory, "phone_clicked", {
          phone_click_target: "tel"
        }));
      }
      if (url.protocol === "mailto:" && dispatcher.isEventEnabled("email_clicked")) {
        void dispatcher.dispatch(buildEvent(baseEventFactory, "email_clicked", {
          email_click_target: "mailto"
        }));
      }
      const match = url.pathname.match(/\.([a-zA-Z0-9]{1,8})$/);
      if ((url.protocol === "http:" || url.protocol === "https:") && match && dispatcher.isEventEnabled("file_downloaded")) {
        void dispatcher.dispatch(buildEvent(baseEventFactory, "file_downloaded", {
          file_extension: match[1].toLowerCase()
        }));
      }
    } catch {
    }
  };
  document.addEventListener("click", onClick, true);
  return {
    cleanup: () => document.removeEventListener("click", onClick, true)
  };
};
var sourceComponent = (element) => {
  if (!element) return "unknown";
  const candidate = element.closest("[data-analytics-component], [data-track-component], section, form");
  if (!(candidate instanceof HTMLElement)) return sanitizeToken(element.tagName || "element");
  return sanitizeToken(
    candidate.dataset.analyticsComponent || candidate.dataset.trackComponent || candidate.id || candidate.tagName || "component"
  );
};
var copiedFieldClass = (element) => {
  if (!element) return void 0;
  const field = element.closest("input, textarea, select");
  if (!(field instanceof HTMLElement)) return void 0;
  return sanitizeToken(
    field.getAttribute("data-analytics-field-class") || field.getAttribute("type") || field.tagName || "field"
  );
};
var clipboardTextLengthBucket = (length) => {
  if (length <= 0) return "empty";
  if (length < 20) return "1_19";
  if (length < 100) return "20_99";
  if (length < 500) return "100_499";
  return "500_plus";
};
var attachCopyObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined" || !dispatcher.isEventEnabled("copy_performed")) return noopHandle;
  let copyCount = 0;
  const onCopy = (event) => {
    copyCount += 1;
    const target = event.target instanceof Element ? event.target : null;
    const clipboardText = event.clipboardData?.getData("text") ?? "";
    void dispatcher.dispatch(buildEvent(baseEventFactory, "copy_performed", {
      copy_count: copyCount,
      source_component: sourceComponent(target),
      field_class: copiedFieldClass(target),
      clipboard_text_present: clipboardText.length > 0,
      clipboard_text_length_bucket: clipboardTextLengthBucket(clipboardText.length)
    }));
  };
  document.addEventListener("copy", onCopy, true);
  return {
    cleanup: () => document.removeEventListener("copy", onCopy, true)
  };
};
var toTrackPropertyName = (name) => name.replace(/^data-track-/, "").replace(/-/g, "_");
var attachDataTrackObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined") return noopHandle;
  const onClick = (event) => {
    const target = event.target instanceof Element ? event.target.closest("[data-track]") : null;
    if (!(target instanceof HTMLElement)) return;
    const eventName = target.dataset.track;
    if (!eventName) return;
    const properties = {};
    for (const attribute of Array.from(target.attributes)) {
      if (!attribute.name.startsWith("data-track-")) continue;
      properties[toTrackPropertyName(attribute.name)] = attribute.value;
    }
    if (!properties.cta_text && target.textContent) {
      properties.cta_text = target.textContent.trim().slice(0, 120);
    }
    void dispatcher.dispatch(buildEvent(baseEventFactory, eventName, properties));
  };
  document.addEventListener("click", onClick, true);
  return {
    cleanup: () => document.removeEventListener("click", onClick, true)
  };
};
var attachVisibilityObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined" || !dispatcher.isEventEnabled("page_engaged")) {
    return noopHandle;
  }
  const startedAt = Date.now();
  const onVisibilityChange = () => {
    if (document.visibilityState !== "hidden") return;
    void dispatcher.dispatch(buildEvent(baseEventFactory, "page_engaged", {
      latency_ms: Date.now() - startedAt,
      media_type: "visibility_hidden"
    }));
  };
  document.addEventListener("visibilitychange", onVisibilityChange);
  return {
    cleanup: () => document.removeEventListener("visibilitychange", onVisibilityChange)
  };
};
var attachSectionVisibilityObserver = ({
  dispatcher,
  baseEventFactory,
  threshold = 0.5
}) => {
  if (typeof document === "undefined" || typeof IntersectionObserver === "undefined" || !dispatcher.isEventEnabled("section_viewed")) {
    return noopHandle;
  }
  const sections = Array.from(document.querySelectorAll("[data-analytics-section], [data-section-id], section[id]"));
  if (sections.length === 0) return noopHandle;
  const seen = /* @__PURE__ */ new WeakSet();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < threshold || seen.has(entry.target)) continue;
      seen.add(entry.target);
      const element = entry.target;
      const sectionId = sanitizeSectionId(
        element.dataset.analyticsSection || element.dataset.sectionId || element.id
      );
      void dispatcher.dispatch(buildEvent(baseEventFactory, "section_viewed", { section_id: sectionId }));
      observer.unobserve(entry.target);
    }
  }, { threshold });
  for (const section of sections) observer.observe(section);
  return {
    cleanup: () => observer.disconnect()
  };
};
var attachVideoObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined") return noopHandle;
  const listeners = [];
  const videos = Array.from(document.querySelectorAll("video"));
  for (const video of videos) {
    const seenProgressMilestones = /* @__PURE__ */ new Set();
    const onPlay = () => {
      void dispatcher.dispatch(buildEvent(baseEventFactory, "video_started", {
        media_type: "video"
      }));
    };
    const onEnded = () => {
      void dispatcher.dispatch(buildEvent(baseEventFactory, "video_completed", {
        media_type: "video"
      }));
    };
    const onTimeUpdate = () => {
      if (!video.duration) return;
      const progress = Math.round(video.currentTime / video.duration * 100);
      if (progress > 0 && progress % 25 === 0 && !seenProgressMilestones.has(progress)) {
        seenProgressMilestones.add(progress);
        void dispatcher.dispatch(buildEvent(baseEventFactory, "video_progress", {
          media_type: "video",
          progress_pct: progress
        }));
      }
    };
    video.addEventListener("play", onPlay);
    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", onTimeUpdate);
    listeners.push(() => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", onTimeUpdate);
    });
  }
  return {
    cleanup: () => listeners.forEach((listener) => listener())
  };
};
var attachSearchObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined" || !dispatcher.isEventEnabled("search_submitted")) return noopHandle;
  const onSubmit = (event) => {
    const target = event.target instanceof HTMLFormElement ? event.target : null;
    if (!target) return;
    const searchInput = target.querySelector('input[type="search"], input[name="q"], input[name="query"]');
    if (!(searchInput instanceof HTMLInputElement)) return;
    const query = searchInput.value.trim();
    if (!query) return;
    void dispatcher.dispatch(buildEvent(baseEventFactory, "search_submitted", {
      search_term_bucket: query.slice(0, 32).toLowerCase()
    }));
  };
  document.addEventListener("submit", onSubmit, true);
  return {
    cleanup: () => document.removeEventListener("submit", onSubmit, true)
  };
};
var attachFormLifecycleObserver = ({
  dispatcher,
  baseEventFactory,
  fieldLifecycle = true,
  abandonment = true
}) => {
  if (typeof document === "undefined") return noopHandle;
  const started = /* @__PURE__ */ new WeakSet();
  const viewed = /* @__PURE__ */ new WeakSet();
  const submitted = /* @__PURE__ */ new WeakSet();
  const abandoned = /* @__PURE__ */ new WeakSet();
  const completedFields = /* @__PURE__ */ new WeakMap();
  const touchedFields = /* @__PURE__ */ new WeakMap();
  const formStartedAt = /* @__PURE__ */ new WeakMap();
  const lastFocusedField = /* @__PURE__ */ new WeakMap();
  const fieldSet = (map, form) => {
    let set = map.get(form);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      map.set(form, set);
    }
    return set;
  };
  const collectFormInventory = (form) => {
    const controls = getTrackableFormControls(form);
    const fieldIds = controls.map((control) => formFieldId(control));
    const fieldTypes = controls.map((control) => safeFormFieldType(control));
    const completedFieldCount = controls.filter(isFormControlComplete).length;
    return {
      form_field_ids: fieldIds,
      form_field_types: fieldTypes,
      form_field_count: controls.length,
      completed_field_count: completedFieldCount,
      empty_field_count: Math.max(controls.length - completedFieldCount, 0)
    };
  };
  const dispatchFormEvent = (form, eventName, extra = {}) => {
    void dispatcher.dispatch(buildEvent(baseEventFactory, eventName, {
      lead_form_id: form.id || form.getAttribute("name"),
      ...extra
    }));
  };
  const markStarted = (form) => {
    if (started.has(form)) return;
    markViewed(form);
    started.add(form);
    formStartedAt.set(form, Date.now());
    if (dispatcher.isEventEnabled("form_started")) {
      dispatchFormEvent(form, "form_started");
    }
  };
  const maybeCompleteField = (control) => {
    if (!fieldLifecycle || !dispatcher.isEventEnabled("form_field_completed")) return;
    const form = control.closest("form");
    if (!(form instanceof HTMLFormElement)) return;
    markStarted(form);
    const fieldId = formFieldId(control);
    fieldSet(touchedFields, form).add(fieldId);
    lastFocusedField.set(form, control);
    if (!isFormControlComplete(control)) return;
    const completed = fieldSet(completedFields, form);
    if (completed.has(fieldId)) return;
    completed.add(fieldId);
    dispatchFormEvent(form, "form_field_completed", {
      ...formContextProperties(form, control),
      completed_field_count: completed.size,
      interaction_count: fieldSet(touchedFields, form).size
    });
  };
  const dispatchAbandonedForm = (form) => {
    if (!abandonment || submitted.has(form) || abandoned.has(form) || !started.has(form) || !dispatcher.isEventEnabled("form_abandoned")) {
      return;
    }
    const touched = fieldSet(touchedFields, form);
    if (touched.size === 0) return;
    abandoned.add(form);
    const lastFocused = lastFocusedField.get(form);
    dispatchFormEvent(form, "form_abandoned", {
      ...formContextProperties(form, lastFocused),
      latency_ms: Date.now() - (formStartedAt.get(form) ?? Date.now()),
      completed_field_count: fieldSet(completedFields, form).size,
      interaction_count: touched.size
    });
  };
  const markViewed = (form) => {
    if (viewed.has(form)) return;
    viewed.add(form);
    if (dispatcher.isEventEnabled("form_viewed")) {
      dispatchFormEvent(form, "form_viewed");
    }
  };
  for (const form of Array.from(document.querySelectorAll("form"))) {
    if (form instanceof HTMLFormElement) markViewed(form);
  }
  const onFocusIn = (event) => {
    const control = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement ? event.target : null;
    const target = control?.closest("form") ?? (event.target instanceof HTMLElement ? event.target.closest("form") : null);
    if (!(target instanceof HTMLFormElement)) return;
    if (control) {
      const fieldId = formFieldId(control);
      fieldSet(touchedFields, target).add(fieldId);
      lastFocusedField.set(target, control);
    }
    markStarted(target);
  };
  const onFieldChange = (event) => {
    const control = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement ? event.target : null;
    if (!control) return;
    maybeCompleteField(control);
  };
  const onSubmit = (event) => {
    const target = event.target instanceof HTMLFormElement ? event.target : null;
    if (!target) return;
    markViewed(target);
    markStarted(target);
    submitted.add(target);
    if (dispatcher.isEventEnabled("form_submit_attempted")) {
      dispatchFormEvent(target, "form_submit_attempted", collectFormInventory(target));
    }
    dispatchFormEvent(target, "form_submitted");
  };
  const onInvalid = (event) => {
    const target = event.target instanceof HTMLElement ? event.target.closest("form") : null;
    if (!(target instanceof HTMLFormElement)) return;
    markViewed(target);
    markStarted(target);
    if (dispatcher.isEventEnabled("form_validation_error")) {
      dispatchFormEvent(target, "form_validation_error");
    }
    if (dispatcher.isEventEnabled("form_validation_failed")) {
      dispatchFormEvent(target, "form_validation_failed");
    }
  };
  const onPageExit = () => {
    for (const form of Array.from(document.querySelectorAll("form"))) {
      if (form instanceof HTMLFormElement) dispatchAbandonedForm(form);
    }
  };
  const onHidden = () => {
    if (document.visibilityState === "hidden") onPageExit();
  };
  document.addEventListener("focusin", onFocusIn, true);
  document.addEventListener("change", onFieldChange, true);
  document.addEventListener("blur", onFieldChange, true);
  document.addEventListener("submit", onSubmit, true);
  document.addEventListener("invalid", onInvalid, true);
  window.addEventListener("pagehide", onPageExit);
  document.addEventListener("visibilitychange", onHidden);
  return {
    cleanup: () => {
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("change", onFieldChange, true);
      document.removeEventListener("blur", onFieldChange, true);
      document.removeEventListener("submit", onSubmit, true);
      document.removeEventListener("invalid", onInvalid, true);
      window.removeEventListener("pagehide", onPageExit);
      document.removeEventListener("visibilitychange", onHidden);
    }
  };
};
var resolveFetchEndpoint = (input) => {
  if (typeof input === "string") return sanitizeDiagnosticEndpoint(input);
  if (input instanceof URL) return sanitizeDiagnosticEndpoint(input.toString());
  if (typeof Request !== "undefined" && input instanceof Request) {
    return sanitizeDiagnosticEndpoint(input.url);
  }
  return null;
};
var resolveFetchMethod = (input, init) => {
  const candidate = init?.method || (typeof Request !== "undefined" && input instanceof Request ? input.method : void 0) || "GET";
  return candidate.toUpperCase().slice(0, 16);
};
var isHostnameOrSubdomain = (hostname, domain) => {
  const normalized = hostname.toLowerCase();
  return normalized === domain || normalized.endsWith("." + domain);
};
var isKnownAnalyticsHostname = (hostname) => isHostnameOrSubdomain(hostname, "posthog.com") || isHostnameOrSubdomain(hostname, "googletagmanager.com") || isHostnameOrSubdomain(hostname, "google-analytics.com");
var shouldIgnoreApiEndpoint = (endpoint) => {
  if (!endpoint) return true;
  try {
    const url = new URL(endpoint, typeof window !== "undefined" ? window.location.href : "https://invalid.local/");
    return url.pathname.startsWith("/_gcs/e") || url.pathname === "/api/analytics/events" || url.pathname.endsWith("/api/analytics/events") || isKnownAnalyticsHostname(url.hostname);
  } catch {
    return true;
  }
};
var attachApiErrorObserver = ({
  dispatcher,
  baseEventFactory,
  enabled = true
}) => {
  if (typeof window === "undefined" || !enabled || !dispatcher.isEventEnabled("api_error")) return noopHandle;
  const originalFetch = typeof window.fetch === "function" ? window.fetch : void 0;
  const OriginalXHR = window.XMLHttpRequest;
  const xhrOpen = OriginalXHR?.prototype?.open;
  const xhrSend = OriginalXHR?.prototype?.send;
  const xhrMeta = /* @__PURE__ */ new WeakMap();
  const dispatchApiError = (endpoint, method, startedAt, status, code) => {
    if (shouldIgnoreApiEndpoint(endpoint)) return;
    void dispatcher.dispatch(buildEvent(baseEventFactory, "api_error", {
      endpoint,
      http_method: method,
      http_status: status,
      latency_ms: Date.now() - startedAt,
      validation_errors: [code]
    }));
  };
  let wrappedFetch;
  if (originalFetch) {
    wrappedFetch = (async (input, init) => {
      const startedAt = Date.now();
      const endpoint = resolveFetchEndpoint(input);
      const method = resolveFetchMethod(input, init);
      try {
        const response = await originalFetch.call(window, input, init);
        if (!response.ok) {
          dispatchApiError(endpoint, method, startedAt, response.status, DIAGNOSTIC_ERROR_CODE.api_http);
        }
        return response;
      } catch (error) {
        dispatchApiError(endpoint, method, startedAt, null, DIAGNOSTIC_ERROR_CODE.api_network);
        throw error;
      }
    });
    window.fetch = wrappedFetch;
  }
  if (OriginalXHR && xhrOpen && xhrSend) {
    OriginalXHR.prototype.open = function open(method, url, ...rest) {
      xhrMeta.set(this, {
        endpoint: sanitizeDiagnosticEndpoint(String(url)),
        method: String(method || "GET").toUpperCase().slice(0, 16),
        startedAt: Date.now()
      });
      return xhrOpen.call(this, method, url, ...rest);
    };
    OriginalXHR.prototype.send = function send(...args) {
      const meta = xhrMeta.get(this);
      if (meta) {
        meta.startedAt = Date.now();
        this.addEventListener("loadend", () => {
          if (this.status >= 400) {
            dispatchApiError(meta.endpoint, meta.method, meta.startedAt, this.status, DIAGNOSTIC_ERROR_CODE.api_http);
          }
        }, { once: true });
        this.addEventListener("error", () => {
          dispatchApiError(meta.endpoint, meta.method, meta.startedAt, null, DIAGNOSTIC_ERROR_CODE.api_network);
        }, { once: true });
      }
      return xhrSend.call(this, ...args);
    };
  }
  return {
    cleanup: () => {
      if (originalFetch && wrappedFetch && window.fetch === wrappedFetch) window.fetch = originalFetch;
      if (OriginalXHR && xhrOpen) OriginalXHR.prototype.open = xhrOpen;
      if (OriginalXHR && xhrSend) OriginalXHR.prototype.send = xhrSend;
    }
  };
};
var attachErrorObservers = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof window === "undefined") return noopHandle;
  const onError = (event) => {
    const target = event.target;
    if (target && target !== window && typeof Element !== "undefined" && target instanceof Element) {
      if (!dispatcher.isEventEnabled("asset_load_failed")) return;
      const element = target;
      const endpoint = sanitizeDiagnosticEndpoint(
        element.getAttribute("src") || element.getAttribute("href")
      );
      void dispatcher.dispatch(buildEvent(baseEventFactory, "asset_load_failed", {
        endpoint,
        media_type: element.tagName.toLowerCase(),
        validation_errors: [DIAGNOSTIC_ERROR_CODE.resource]
      }));
      return;
    }
    if (!dispatcher.isEventEnabled("js_error")) return;
    import_posthog_js5.default.captureException?.(event.error ?? new Error(event.message));
    void dispatcher.dispatch(buildEvent(baseEventFactory, "js_error", {
      endpoint: sanitizeDiagnosticEndpoint(event.filename),
      validation_errors: [DIAGNOSTIC_ERROR_CODE.javascript]
    }));
  };
  const onUnhandled = (event) => {
    if (!dispatcher.isEventEnabled("sdk_error")) return;
    import_posthog_js5.default.captureException?.(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
    void dispatcher.dispatch(buildEvent(baseEventFactory, "sdk_error", {
      validation_errors: [DIAGNOSTIC_ERROR_CODE.rejection]
    }));
  };
  window.addEventListener("error", onError, true);
  window.addEventListener("unhandledrejection", onUnhandled);
  return {
    cleanup: () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onUnhandled);
    }
  };
};
var attachWebVitalsObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof PerformanceObserver === "undefined" || !dispatcher.isEventEnabled("web_vitals")) {
    return noopHandle;
  }
  const observers = [];
  const createObserver = (type) => {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          void dispatcher.dispatch(buildEvent(baseEventFactory, "web_vitals", {
            ...buildWebVitalsProperties({
              name: type,
              value: entry.duration || entry.startTime || 0
            })
          }));
        }
      });
      observer.observe({ type, buffered: true });
      observers.push(observer);
    } catch {
    }
  };
  createObserver("largest-contentful-paint");
  createObserver("layout-shift");
  createObserver("event");
  return {
    cleanup: () => observers.forEach((observer) => observer.disconnect())
  };
};
var createWebVitalsReporter = ({
  dispatcher,
  baseEventFactory
}) => (metric) => {
  if (!dispatcher.isEventEnabled("web_vitals")) return Promise.resolve({ valid: true, errors: [] });
  return dispatcher.dispatch(buildEvent(baseEventFactory, "web_vitals", buildWebVitalsProperties(metric)));
};
var createRouteTransitionTracker = ({
  dispatcher,
  baseEventFactory
}) => {
  let startedAt = null;
  return {
    start: () => {
      startedAt = Date.now();
    },
    complete: () => {
      if (!dispatcher.isEventEnabled("page_engaged")) {
        startedAt = null;
        return;
      }
      const latency = startedAt ? Date.now() - startedAt : null;
      startedAt = null;
      void dispatcher.dispatch(buildEvent(baseEventFactory, "page_engaged", {
        latency_ms: latency
      }));
    },
    fail: (reason) => {
      if (!dispatcher.isEventEnabled("route_transition_failed")) {
        startedAt = null;
        return;
      }
      const latency = startedAt ? Date.now() - startedAt : null;
      startedAt = null;
      void dispatcher.dispatch(buildEvent(baseEventFactory, "route_transition_failed", {
        latency_ms: latency,
        validation_errors: [DIAGNOSTIC_ERROR_CODE.route],
        endpoint: sanitizeDiagnosticEndpoint(reason)
      }));
    }
  };
};

// src/siteAnalyticsPosthogMetadata.ts
var metadataName = (name) => `data-ph-capture-attribute-${name}`;
var clean3 = (value) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
};
var setSafe = (element, name, value) => {
  const cleaned = clean3(value);
  if (!cleaned) return;
  element.setAttribute(metadataName(name), cleaned);
};
var trackAttributeName = (name) => "gcs_" + name.replace(/^data-track-/, "").replace(/-/g, "_");
var annotatePosthogCaptureMetadata = (root, context) => {
  const selector = [
    "[data-track]",
    "a[href]",
    "button",
    "form",
    "section"
  ].join(",");
  let annotated = 0;
  const elements = Array.from(root.querySelectorAll(selector));
  for (const element of elements) {
    setSafe(element, "gcs_site_id", context.siteId);
    setSafe(element, "gcs_customer_account_id", context.customerAccountId);
    setSafe(element, "gcs_global_id", context.globalId);
    setSafe(element, "gcs_template_id", context.templateId);
    setSafe(element, "gcs_template_version", context.templateVersion);
    setSafe(element, "gcs_page_role", context.pageRole);
    setSafe(element, "gcs_business_vertical", context.businessVertical);
    setSafe(element, "gcs_deployment_id", context.deploymentId);
    const dataTrack = element.getAttribute("data-track");
    if (dataTrack) setSafe(element, "gcs_event", dataTrack);
    for (const attribute of Array.from(element.attributes)) {
      if (!attribute.name.startsWith("data-track-")) continue;
      if (attribute.name === "data-track-smoke-marker") continue;
      setSafe(element, trackAttributeName(attribute.name), attribute.value);
    }
    annotated += 1;
  }
  return { annotated };
};

// src/siteAnalyticsPosthogNative.ts
var POSTHOG_NATIVE_UNSAFE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "email",
  "unsafe_email",
  "phone",
  "unsafe_phone",
  "name",
  "unsafe_name",
  "first_name",
  "last_name",
  "full_name",
  "display_name",
  "person_name",
  "message",
  "message_body",
  "free_text",
  "lead_message",
  "contact_email",
  "contact_email_address",
  "contact_phone",
  "contact_phone_number",
  "customer_address",
  "customer_email",
  "customer_email_address",
  "customer_message",
  "customer_name",
  "customer_first_name",
  "customer_last_name",
  "customer_full_name",
  "customer_phone",
  "customer_phone_number",
  "email_address",
  "phone_number",
  "mobile_phone",
  "street_address",
  "address_line_1",
  "address_line_2",
  "billing_address",
  "billing_city",
  "billing_postal_code",
  "billing_region",
  "billing_state",
  "billing_zip",
  "billing_name",
  "shipping_address",
  "shipping_city",
  "shipping_postal_code",
  "shipping_region",
  "shipping_state",
  "shipping_zip",
  "shipping_name",
  "address",
  "street",
  "city",
  "zip",
  "postal_code",
  "region",
  "state",
  "contact",
  "note",
  "notes",
  "description",
  "comment",
  "public_comment",
  "location",
  "$selected_content",
  "selected_content",
  "copied_text",
  "clipboard_text",
  "gcs_event_name"
]);
var POSTHOG_NATIVE_SAFE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "consent_state",
  "business_name",
  "template_name",
  "field_state",
  "account_state",
  "customer_state",
  "advanced_capability_state",
  "cta_location",
  "phone_click_target",
  "email_click_target",
  "region_id",
  "country_code",
  "email_hash",
  "phone_hash",
  "name_hash",
  "contact_hash"
]);
var POSTHOG_NATIVE_BEHAVIOR_EVENTS = /* @__PURE__ */ new Set([
  "$autocapture",
  "$copy_autocapture",
  "$pageview",
  "$pageleave",
  "$dead_click",
  "$rageclick",
  "$exception",
  "$web_vitals",
  "$feature_flag_called",
  "$heatmaps_data",
  "$$heatmap"
]);
var POSTHOG_NATIVE_AUTOCAPTURE_ELEMENT_ALLOWLIST = [
  "button",
  "form",
  "input",
  "select",
  "textarea",
  "label"
];
var shouldCaptureNativeBehaviorEvent = (eventName) => POSTHOG_NATIVE_BEHAVIOR_EVENTS.has(eventName);
var normalizeNativeFieldName = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
var isNativeUnsafeFieldName = (key) => {
  const normalized = normalizeNativeFieldName(key);
  return !POSTHOG_NATIVE_SAFE_FIELD_NAMES.has(normalized) && POSTHOG_NATIVE_UNSAFE_FIELD_NAMES.has(normalized);
};
var sanitizeNativeValue = (value) => {
  if (Array.isArray(value)) return value.map((item) => sanitizeNativeValue(item));
  if (value instanceof Date) return value;
  if (value && Object.prototype.toString.call(value) === "[object Object]") {
    return sanitizePosthogNativeProperties(value);
  }
  return value;
};
var sanitizePosthogNativeProperties = (properties) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    if (isNativeUnsafeFieldName(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = sanitizeNativeValue(value);
  }
  return sanitized;
};
var sanitizePosthogNativeBeforeSendEvent = (event) => {
  if (!event || typeof event !== "object") return event;
  const record = event;
  return {
    ...sanitizePosthogNativeProperties(record),
    properties: sanitizePosthogNativeProperties(
      record.properties && typeof record.properties === "object" ? record.properties : {}
    )
  };
};
var buildPosthogNativeOptions = (input) => ({
  autocapture: {
    element_allowlist: POSTHOG_NATIVE_AUTOCAPTURE_ELEMENT_ALLOWLIST,
    capture_copied_text: false
  },
  capture_pageview: false,
  capture_pageleave: false,
  disable_surveys: !input.advancedModules.surveys,
  enable_heatmaps: input.advancedModules.heatmaps,
  capture_dead_clicks: input.advancedModules.deadClicks,
  rageclick: input.advancedModules.rageClicks,
  capture_exceptions: input.advancedModules.exceptions,
  capture_performance: input.advancedModules.webVitals ? {
    network_timing: false,
    web_vitals: true
  } : false,
  logs: input.advancedModules.browserLogs ? {
    captureConsoleLogs: true
  } : void 0,
  before_send: (event) => sanitizePosthogNativeBeforeSendEvent(event)
});

// src/siteAnalyticsExperiments.ts
var ALLOWED_EXPERIMENT_GROUP_TYPES = /* @__PURE__ */ new Set([
  "customer_account",
  "global_entity"
]);
var hash = (value) => {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = result * 31 + value.charCodeAt(index) >>> 0;
  }
  return result;
};
var clean4 = (value) => {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};
var cleanOptional = (value) => typeof value === "string" ? clean4(value) : null;
var omitUndefined = (value) => Object.fromEntries(
  Object.entries(value).filter(([, entry]) => entry !== void 0)
);
var isAllowedExperimentGroupType = (groupType) => ALLOWED_EXPERIMENT_GROUP_TYPES.has(groupType);
var buildExperimentGroupAssignment = (input) => {
  const groupType = cleanOptional(input.group_type);
  const groupKey = cleanOptional(input.group_key);
  if (!groupType || !groupKey || !isAllowedExperimentGroupType(groupType)) return null;
  return {
    group_type: groupType,
    group_key: groupKey
  };
};
var assignExperimentVariant = (experiment, entityKey) => {
  const experimentKey = clean4(experiment.key);
  const assignmentKey = clean4(entityKey);
  if (!experimentKey || !assignmentKey || experiment.variants.length === 0) return null;
  const variants = experiment.variants.map((variant) => clean4(variant)).filter((variant) => Boolean(variant));
  if (variants.length === 0) return null;
  const allocation = Number.isFinite(experiment.allocation) ? experiment.allocation : 0;
  if (allocation <= 0) return null;
  const boundedAllocation = Math.min(allocation, 1);
  const bucket = hash(`${experimentKey}:${assignmentKey}`) / 4294967295;
  if (bucket > boundedAllocation) return null;
  return variants[hash(`${experimentKey}:${assignmentKey}:variant`) % variants.length] ?? null;
};
var buildExperimentAssignmentId = (experimentKeyInput, assignmentKeyInput) => {
  const experimentKey = clean4(experimentKeyInput);
  const assignmentKey = clean4(assignmentKeyInput);
  if (!experimentKey || !assignmentKey) return null;
  const opaqueKey = hash(`${experimentKey}:${assignmentKey}:assignment`).toString(36);
  return `${experimentKey}:assign:${opaqueKey}`;
};
var buildExperimentExposureEvent = (input) => {
  const variantKey = cleanOptional(input.variant_key) ?? input.experiment_variant;
  const assignmentReason = cleanOptional(input.assignment_reason) ?? "allocation_hash";
  const exposureEventId = cleanOptional(input.exposure_event_id) ?? `${input.assignment_id}:exposure:${hash(`${input.experiment_key}:${variantKey}:${input.assignment_id}`).toString(36)}`;
  const groupAssignment = buildExperimentGroupAssignment(input);
  return {
    eventName: "experiment_exposure",
    properties: omitUndefined({
      experiment_key: input.experiment_key,
      experiment_variant: input.experiment_variant,
      variant_key: variantKey,
      assignment_id: input.assignment_id,
      assignment_reason: assignmentReason,
      exposure_event_id: exposureEventId,
      event_id: exposureEventId,
      distinct_id: cleanOptional(input.distinct_id) ?? void 0,
      group_type: groupAssignment?.group_type,
      group_key: groupAssignment?.group_key,
      experiment_context: `${input.experiment_key}:${variantKey}`
    })
  };
};

// src/siteAnalyticsAdvancedModules.ts
var ADVANCED_POSTHOG_MODULES = [
  "replay",
  "heatmaps",
  "surveys",
  "deadClicks",
  "rageClicks",
  "exceptions",
  "webVitals",
  "browserLogs"
];
var EMPTY_STATE = {
  replay: false,
  heatmaps: false,
  surveys: false,
  deadClicks: false,
  rageClicks: false,
  exceptions: false,
  webVitals: false,
  browserLogs: false
};
var disabledAdvancedPosthogModules = () => ({
  ...EMPTY_STATE
});
var resolveAdvancedPosthogModules = (input) => {
  const profileAllowsCapture = input.profile === "canary" || input.profile === "production";
  if (!input.approved || input.consentState !== "granted" || !profileAllowsCapture) {
    return disabledAdvancedPosthogModules();
  }
  const requested = new Set(input.requested ?? []);
  return {
    replay: requested.has("replay"),
    heatmaps: requested.has("heatmaps"),
    surveys: requested.has("surveys"),
    deadClicks: requested.has("deadClicks"),
    rageClicks: requested.has("rageClicks"),
    exceptions: requested.has("exceptions"),
    webVitals: requested.has("webVitals"),
    browserLogs: requested.has("browserLogs")
  };
};

// src/siteAnalyticsIdentity.ts
var clean5 = (value) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
};
var industryKey = (industry, subindustry) => {
  const primary = clean5(industry);
  const secondary = clean5(subindustry);
  if (!primary && !secondary) return null;
  return [primary, secondary].filter(Boolean).join(":");
};
var resolveSiteAnalyticsEntityContext = (input) => {
  const globalId = clean5(input.global_id);
  const customerAccountId = clean5(input.customer_account_id);
  const groups = {};
  if (globalId) groups.global_entity = globalId;
  if (customerAccountId) groups.customer_account = customerAccountId;
  return {
    global_id: globalId,
    site_id: clean5(input.site_id),
    customer_account_id: customerAccountId,
    industry_key: industryKey(input.industry, input.subindustry),
    posthog_groups: groups
  };
};
var buildSiteAnalyticsIdentityResetDecision = (input) => {
  const previousCustomerAccountId = clean5(input.previousCustomerAccountId);
  const nextCustomerAccountId = clean5(input.nextCustomerAccountId);
  const previousSiteId = clean5(input.previousSiteId);
  const nextSiteId = clean5(input.nextSiteId);
  const resetRequired = input.action === "logout" || input.action === "consent_downgrade" || input.action === "account_switch" && (previousCustomerAccountId !== nextCustomerAccountId || previousSiteId !== nextSiteId);
  return { resetRequired };
};

// src/siteAnalyticsRuntime.ts
var SESSION_KEY = "gcs_session_id";
var SESSION_LAST_SEEN_KEY = "gcs_session_last_seen_at";
var ANONYMOUS_KEY = "gcs_anonymous_id";
var ANONYMOUS_COOKIE = "gcs_anonymous_id";
var IDENTITY_SCOPE_KEY = "gcs_site_analytics_identity_scope";
var EXPOSURE_DEDUPE_PREFIX = "gcs_site_analytics_exposure:";
var LANDING_PAGE_PATH_KEY = "gcs_site_analytics_landing_page_path";
var DEFAULT_SESSION_TIMEOUT_MS = 30 * 60 * 1e3;
var DEFAULT_FEATURE_FLAG_TIMEOUT_MS = 250;
var DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS = 15e3;
var RUNTIME_STARTED_AT = Date.now();
var SITE_ANALYTICS_RUNTIME_VERSION = "site-analytics-runtime-v1";
var DEFAULT_POSTHOG_NATIVE_CAPTURE = {
  autocapture: true,
  pageview: false,
  pageleave: false
};
var DEFAULT_RUNTIME_CAPTURE = {
  apiErrors: true,
  formFields: true,
  formAbandonment: true
};
var DEFAULT_POSTHOG_PAGEVIEW_STRATEGY2 = "canonical_fallback";
var noopValidation = { valid: true, errors: [] };
var canUseBrowser2 = () => typeof window !== "undefined" && typeof document !== "undefined";
var readDocumentCookie = () => {
  if (!canUseBrowser2()) return "";
  try {
    return document.cookie || "";
  } catch {
    return "";
  }
};
var writeDocumentCookie = (value) => {
  if (!canUseBrowser2()) return;
  try {
    document.cookie = value;
  } catch {
  }
};
var getBrowserStorage = (kind) => {
  if (!canUseBrowser2()) return null;
  try {
    return window[kind] ?? null;
  } catch {
    return null;
  }
};
var readStorageItem = (kind, key) => {
  try {
    return getBrowserStorage(kind)?.getItem(key) ?? null;
  } catch {
    return null;
  }
};
var writeStorageItem = (kind, key, value) => {
  try {
    getBrowserStorage(kind)?.setItem(key, value);
  } catch {
  }
};
var removeStorageItem = (kind, key) => {
  try {
    getBrowserStorage(kind)?.removeItem(key);
  } catch {
  }
};
var getCryptoRandomValues = (bytes) => {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
      crypto.getRandomValues(bytes);
      return true;
    }
  } catch {
  }
  return false;
};
var randomUnit = () => {
  const bytes = new Uint32Array(1);
  return getCryptoRandomValues(bytes) ? bytes[0] / 4294967296 : 1;
};
var randomIdCounter = 0;
var randomId = () => {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
  } catch {
  }
  const bytes = new Uint8Array(16);
  if (getCryptoRandomValues(bytes)) {
    bytes[6] = bytes[6] & 15 | 64;
    bytes[8] = bytes[8] & 63 | 128;
    return [...bytes].map((value) => value.toString(16).padStart(2, "0")).join("");
  }
  randomIdCounter = (randomIdCounter + 1) % Number.MAX_SAFE_INTEGER;
  return String(Date.now()) + "-" + randomIdCounter.toString(16);
};
var readCookie = (name) => {
  if (!canUseBrowser2()) return null;
  const match = readDocumentCookie().split(";").map((part) => part.trim()).find((part) => part.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
};
var readGaClientId = () => {
  const value = readCookie("_ga");
  if (!value) return null;
  const parts = value.split(".").filter(Boolean);
  return parts.length >= 2 ? parts.slice(-2).join(".") : value;
};
var readGaSessionId = () => {
  if (!canUseBrowser2()) return null;
  const cookie = readDocumentCookie().split(";").map((part) => part.trim()).find((part) => part.startsWith("_ga_") && !part.startsWith("_ga="));
  if (!cookie) return null;
  const value = decodeURIComponent(cookie.split("=").slice(1).join("="));
  const match = value.match(/(?:^|[.$])s([0-9]+)/);
  return match?.[1] ?? null;
};
var buildGa4ConsentState = buildGa4ConsentModeState;
var writeCookie = (name, value) => {
  if (!canUseBrowser2()) return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  writeDocumentCookie(
    name + "=" + encodeURIComponent(value) + "; Path=/; Max-Age=" + 60 * 60 * 24 * 180 + "; SameSite=Lax" + secure
  );
};
var expireCookie = (name) => {
  if (!canUseBrowser2()) return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  writeDocumentCookie(
    name + "=; Path=/; Max-Age=0; SameSite=Lax" + secure
  );
};
var resetSiteAnalyticsIdentityPersistence = () => {
  if (!canUseBrowser2()) return;
  removeStorageItem("localStorage", ANONYMOUS_KEY);
  removeStorageItem("localStorage", ATTRIBUTION_STORAGE_KEY);
  removeStorageItem("localStorage", IDENTITY_SCOPE_KEY);
  removeStorageItem("sessionStorage", SESSION_KEY);
  removeStorageItem("sessionStorage", SESSION_LAST_SEEN_KEY);
  clearExposureDedupe();
  expireCookie(ANONYMOUS_COOKIE);
  try {
    import_posthog_js6.default.stopSessionRecording();
  } catch {
  }
  try {
    import_posthog_js6.default.reset(true);
  } catch {
  }
  try {
    import_posthog_js6.default.opt_out_capturing();
  } catch {
  }
};
var clearExposureDedupe = (key) => {
  if (!canUseBrowser2()) return;
  if (key) {
    removeStorageItem("sessionStorage", EXPOSURE_DEDUPE_PREFIX + key);
    return;
  }
  const sessionStorage = getBrowserStorage("sessionStorage");
  if (!sessionStorage) return;
  const keys = [];
  for (let index = 0; index < sessionStorage.length; index += 1) {
    const storageKey = sessionStorage.key(index);
    if (storageKey?.startsWith(EXPOSURE_DEDUPE_PREFIX)) keys.push(storageKey);
  }
  for (const storageKey of keys) removeStorageItem("sessionStorage", storageKey);
};
var hasSeenExposure = (key) => canUseBrowser2() ? readStorageItem("sessionStorage", EXPOSURE_DEDUPE_PREFIX + key) === "1" : false;
var markExposureSeen = (key) => {
  if (canUseBrowser2()) writeStorageItem("sessionStorage", EXPOSURE_DEDUPE_PREFIX + key, "1");
};
var resolveSessionTimeoutMs = (config) => {
  const value = config?.sessionTimeoutMs;
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : DEFAULT_SESSION_TIMEOUT_MS;
};
var getSessionState = (config) => {
  if (!canUseBrowser2()) return { id: randomId(), created: true };
  const now = Date.now();
  const existing = readStorageItem("sessionStorage", SESSION_KEY);
  const lastSeen = Number(readStorageItem("sessionStorage", SESSION_LAST_SEEN_KEY));
  const expired = existing && Number.isFinite(lastSeen) ? now - lastSeen > resolveSessionTimeoutMs(config) : false;
  if (existing && !expired) {
    writeStorageItem("sessionStorage", SESSION_LAST_SEEN_KEY, String(now));
    return { id: existing, created: false };
  }
  const id = randomId();
  writeStorageItem("sessionStorage", SESSION_KEY, id);
  writeStorageItem("sessionStorage", SESSION_LAST_SEEN_KEY, String(now));
  return { id, created: true };
};
var getSessionId = (config) => {
  return getSessionState(config).id;
};
var getIdentityScopeKey = (config) => [
  config.profile.customer_account_id,
  config.profile.site_id,
  config.globalId ?? ""
].join("|");
var hasSiteAnalyticsIdentityScopeChanged = (config) => {
  if (!canUseBrowser2()) return false;
  const next = getIdentityScopeKey(config);
  const previous = readStorageItem("localStorage", IDENTITY_SCOPE_KEY);
  return Boolean(previous && previous !== next);
};
var persistSiteAnalyticsIdentityScope = (config) => {
  if (!canUseBrowser2()) return;
  writeStorageItem("localStorage", IDENTITY_SCOPE_KEY, getIdentityScopeKey(config));
};
var getAnonymousState = (config) => {
  if (!canUseBrowser2()) return { id: randomId(), created: true };
  if (config.profile.fingerprinting_mode === "OFF" || !isSiteAnalyticsVendorConsentGranted(config.consentState)) {
    return { id: getSessionId(config), created: false };
  }
  const existing = readCookie(ANONYMOUS_COOKIE) ?? readStorageItem("localStorage", ANONYMOUS_KEY);
  if (existing) return { id: existing, created: false };
  const id = randomId();
  writeCookie(ANONYMOUS_COOKIE, id);
  writeStorageItem("localStorage", ANONYMOUS_KEY, id);
  return { id, created: true };
};
var getAnonymousId = (config) => {
  return getAnonymousState(config).id;
};
var readStoredAttributionSnapshot = () => {
  const raw = readStorageItem("localStorage", ATTRIBUTION_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};
var writeStoredAttributionSnapshot = (snapshot) => {
  if (!snapshot) {
    removeStorageItem("localStorage", ATTRIBUTION_STORAGE_KEY);
    return;
  }
  writeStorageItem("localStorage", ATTRIBUTION_STORAGE_KEY, JSON.stringify(snapshot));
};
var readAttributionProperties = (config) => {
  if (!canUseBrowser2()) return {};
  const result = resolveSiteAnalyticsAttributionSnapshot({
    consentState: config.consentState,
    url: window.location.href,
    referrer: document.referrer || null,
    nowMs: typeof config.firstPartyNow === "function" ? config.firstPartyNow() : Date.now(),
    existingSnapshot: readStoredAttributionSnapshot()
  });
  writeStoredAttributionSnapshot(result.snapshot);
  return result.properties;
};
var normalizeQueryKey = (key) => key.toLowerCase().replace(/[^a-z0-9]/g, "");
var PRE_CUSTOMER_SCOPE_QUERY_KEYS = new Set([
  "tenant_id",
  "tenantId",
  "customer_account_id",
  "customerAccountId",
  "customer_id",
  "customerId",
  "site_id",
  "siteId",
  "generated_site_id",
  "generatedSiteId",
  "generated_site",
  "generatedSite"
].map(normalizeQueryKey));
var scrubPreCustomerScopeParams = (value) => {
  if (!value) return null;
  try {
    const url = new URL(value, window.location.href);
    for (const key of Array.from(url.searchParams.keys())) {
      if (PRE_CUSTOMER_SCOPE_QUERY_KEYS.has(normalizeQueryKey(key))) {
        url.searchParams.delete(key);
      }
    }
    return url.toString();
  } catch {
    return value;
  }
};
var firstQueryValue = (params, ...keys) => {
  for (const key of keys) {
    const value = params.get(key)?.trim();
    if (value) return value;
  }
  return null;
};
var emailExperimentFeatureProperties = (source) => {
  const experimentKey = typeof source.experiment_key === "string" && source.experiment_key.trim() ? source.experiment_key.trim() : typeof source.latest_experiment_key === "string" && source.latest_experiment_key.trim() ? source.latest_experiment_key.trim() : null;
  const experimentVariant = typeof source.experiment_variant === "string" && source.experiment_variant.trim() ? source.experiment_variant.trim() : typeof source.latest_experiment_variant === "string" && source.latest_experiment_variant.trim() ? source.latest_experiment_variant.trim() : null;
  if (!isSafeEmailExperimentIdentifier(experimentKey) || !isSafeEmailExperimentIdentifier(experimentVariant)) {
    return {};
  }
  const properties = {
    experiment_key: experimentKey,
    experiment_variant: experimentVariant,
    variant_key: experimentVariant,
    flag_key: experimentKey,
    flag_variant: experimentVariant,
    "$feature_flag": experimentKey,
    "$feature_flag_response": experimentVariant
  };
  properties["$feature/" + experimentKey] = experimentVariant;
  return properties;
};
var buildEmailLandingAttributionProperties = (config) => {
  if (!canUseBrowser2()) return null;
  const params = new URLSearchParams(window.location.search);
  const campaignId = firstQueryValue(params, "campaign_id", "gcs_campaign_id");
  const campaignRecipientId = firstQueryValue(params, "campaign_recipient_id", "gcs_campaign_recipient_id");
  const emailContactId = firstQueryValue(params, "email_contact_id", "gcs_email_contact_id");
  const emailClickId = firstQueryValue(params, "email_click_id", "gcs_email_click_id");
  const experimentKey = firstQueryValue(params, "experiment_key", "gcs_experiment_key");
  const experimentVariant = firstQueryValue(params, "experiment_variant", "gcs_experiment_variant");
  if (!campaignId && !campaignRecipientId && !emailContactId && !emailClickId) {
    return null;
  }
  const landingIdentity = emailClickId ?? campaignRecipientId ?? emailContactId ?? campaignId;
  const sessionId = getSessionId(config);
  return {
    ...readAttributionProperties(config),
    event_id: `email_landing:${landingIdentity}:${sessionId}`,
    page_url: scrubPreCustomerScopeParams(window.location.href),
    referrer: scrubPreCustomerScopeParams(document.referrer || null),
    campaign_id: campaignId,
    campaign_recipient_id: campaignRecipientId,
    email_contact_id: emailContactId,
    email_click_id: emailClickId,
    lead_id: firstQueryValue(params, "lead_id", "gcs_lead_id"),
    entity_id: firstQueryValue(params, "entity_id", "global_id", "gcs_entity_id", "gcs_global_id"),
    site_audit_request_id: firstQueryValue(params, "site_audit_request_id", "gcs_site_audit_request_id"),
    marketing_contact_submission_id: firstQueryValue(params, "marketing_contact_submission_id", "gcs_marketing_contact_submission_id"),
    template_key: firstQueryValue(params, "template_key", "gcs_template_key"),
    template_version: firstQueryValue(params, "template_version", "gcs_template_version"),
    topic_key: firstQueryValue(params, "topic_key", "gcs_topic_key"),
    ...emailExperimentFeatureProperties({
      experiment_key: experimentKey,
      experiment_variant: experimentVariant
    }),
    message_id: firstQueryValue(params, "message_id", "gcs_message_id"),
    attribution_source: "resend"
  };
};
var readPageCategory = () => {
  if (!canUseBrowser2()) return null;
  return document.querySelector('meta[name="page-category"]')?.getAttribute("content") ?? document.body?.dataset.pageCategory ?? null;
};
var cleanString2 = (value) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
};
var firstCleanString = (...values) => {
  for (const value of values) {
    const cleaned = cleanString2(typeof value === "string" ? value : value == null ? null : String(value));
    if (cleaned) return cleaned;
  }
  return null;
};
var cleanRuntimeDimension = (value, fallback) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : fallback;
};
var isLongOpaquePathSegment = (segment) => {
  const decoded = (() => {
    try {
      return decodeURIComponent(segment);
    } catch {
      return segment;
    }
  })();
  return decoded.length > 80 && /^[A-Za-z0-9._~%+-]+$/.test(decoded);
};
var cleanPathname = (value) => {
  const pathname = cleanString2(value) ?? "/";
  const normalized = pathname.startsWith("/") ? pathname : "/" + pathname;
  return normalized.split("/").map((segment) => isLongOpaquePathSegment(segment) ? ":opaque" : segment).join("/") || "/";
};
var cleanUrlWithoutQuery = (value) => {
  const candidate = cleanString2(value);
  if (!candidate) return void 0;
  try {
    const url = new URL(candidate, canUseBrowser2() ? window.location.href : "https://example.invalid/");
    if (url.protocol !== "http:" && url.protocol !== "https:") return void 0;
    return `${url.origin}${cleanPathname(url.pathname)}`;
  } catch {
    return void 0;
  }
};
var resolveRuntimeEnvironment = (config) => cleanRuntimeDimension(
  config.environment,
  canUseBrowser2() && ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname) ? "development" : "production"
);
var resolveTrafficClass = (config) => cleanRuntimeDimension(config.trafficClass, "external");
var getLandingPagePath = () => {
  if (!canUseBrowser2()) return void 0;
  const currentPath = cleanPathname(window.location.pathname);
  const existing = readStorageItem("sessionStorage", LANDING_PAGE_PATH_KEY);
  if (existing) return existing;
  writeStorageItem("sessionStorage", LANDING_PAGE_PATH_KEY, currentPath);
  return currentPath;
};
var buildAttributionAliases = (attributionProperties2) => ({
  first_touch_source: attributionProperties2.first_utm_source,
  first_touch_medium: attributionProperties2.first_utm_medium,
  first_touch_campaign: attributionProperties2.first_utm_campaign,
  first_touch_referrer: cleanUrlWithoutQuery(typeof attributionProperties2.first_referrer === "string" ? attributionProperties2.first_referrer : null)
});
var campaignKeyFromAttribution = (attributionProperties2) => firstCleanString(
  attributionProperties2.campaign_key,
  attributionProperties2.utm_campaign,
  attributionProperties2.latest_utm_campaign,
  attributionProperties2.first_utm_campaign,
  attributionProperties2.campaign_id
);
var buildContextAliases = (context) => ({
  browser_name: context.browser_family,
  browser_version_major: context.browser_version,
  os_name: context.os_family
});
var withoutUndefined = (input) => Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== void 0 && entry[1] !== null && entry[1] !== ""));
var buildRolloutVersionProperties = (config) => withoutUndefined({
  analytics_runtime_version: firstCleanString(
    config.analyticsRuntimeVersion,
    config.analytics_runtime_version,
    SITE_ANALYTICS_RUNTIME_VERSION
  ),
  analytics_rollout_version: firstCleanString(config.analyticsRolloutVersion, config.analytics_rollout_version),
  analytics_asset_sha: firstCleanString(config.analyticsAssetSha, config.analytics_asset_sha),
  analytics_deployment_id: firstCleanString(
    config.analyticsDeploymentId,
    config.analytics_deployment_id,
    config.deploymentId
  )
});
var buildRuntimeContextProperties = (config, browserContext, attributionProperties2) => withoutUndefined({
  event_spec_version: SITE_ANALYTICS_EVENT_SPEC_VERSION,
  runtime_version: SITE_ANALYTICS_RUNTIME_VERSION,
  environment: resolveRuntimeEnvironment(config),
  traffic_class: resolveTrafficClass(config),
  consent_state: config.consentState,
  landing_page_path: getLandingPagePath(),
  template_id: cleanString2(config.templateId),
  template_version: cleanString2(config.templateVersion),
  page_role: cleanString2(config.pageRole),
  business_vertical: cleanString2(config.businessVertical),
  deployment_id: cleanString2(config.deploymentId),
  campaign_key: campaignKeyFromAttribution(attributionProperties2),
  ...buildRolloutVersionProperties(config),
  ...buildContextAliases(browserContext),
  ...buildAttributionAliases(attributionProperties2)
});
var analyticsAllowed = (config) => isSiteAnalyticsVendorConsentGranted(config.consentState);
var resolvePosthogNativeCapture = (config) => ({
  autocapture: config.posthogNativeCapture?.autocapture ?? DEFAULT_POSTHOG_NATIVE_CAPTURE.autocapture,
  pageview: false,
  pageleave: false
});
var resolveRuntimeCapture = (config) => ({
  apiErrors: config.runtimeCapture?.apiErrors ?? DEFAULT_RUNTIME_CAPTURE.apiErrors,
  formFields: config.runtimeCapture?.formFields ?? DEFAULT_RUNTIME_CAPTURE.formFields,
  formAbandonment: config.runtimeCapture?.formAbandonment ?? DEFAULT_RUNTIME_CAPTURE.formAbandonment
});
var resolvePosthogAutocaptureConfig = (config) => {
  const nativeCapture = resolvePosthogNativeCapture(config);
  if (nativeCapture.autocapture === false) return false;
  const base = typeof nativeCapture.autocapture === "object" && nativeCapture.autocapture !== null ? nativeCapture.autocapture : {};
  const configuredElementAllowlist = Array.isArray(base.element_allowlist) ? base.element_allowlist.filter((element) => element !== "a") : void 0;
  return {
    ...base,
    element_allowlist: configuredElementAllowlist && configuredElementAllowlist.length > 0 ? configuredElementAllowlist : ["button", "form", "input", "select", "textarea", "label"],
    capture_copied_text: config.posthogCaptureCopiedText === true
  };
};
var resolvePosthogPageviewStrategy2 = (config) => config.posthogPageviewStrategy ?? DEFAULT_POSTHOG_PAGEVIEW_STRATEGY2;
var buildBrowserContextProperties = (config) => buildSiteAnalyticsContextSync({
  governedContextEnabled: config.governedContextEnabled !== false,
  highEntropyFingerprintingEnabled: config.highEntropyFingerprintingEnabled !== false
});
var resolveRuntimeEntityContext = (config) => {
  const context = resolveSiteAnalyticsEntityContext({
    global_id: config.globalId,
    site_id: config.profile.site_id,
    customer_account_id: config.profile.customer_account_id
  });
  return {
    ...context,
    site_id: context.site_id ?? config.profile.site_id,
    customer_account_id: context.customer_account_id ?? config.profile.customer_account_id
  };
};
var buildPosthogMetadataContext = (config) => Object.fromEntries(
  [
    ["template_id", cleanString2(config.templateId)],
    ["template_version", cleanString2(config.templateVersion)],
    ["page_role", cleanString2(config.pageRole)],
    ["business_vertical", cleanString2(config.businessVertical)],
    ["deployment_id", cleanString2(config.deploymentId)]
  ].filter((entry) => entry[1] !== null)
);
var buildPosthogRegistrationContext = (config) => {
  const context = resolveRuntimeEntityContext(config);
  const attributionProperties2 = readAttributionProperties(config);
  const browserContext = buildBrowserContextProperties(config);
  return withoutUndefined({
    site_id: context.site_id,
    customer_account_id: context.customer_account_id,
    global_id: context.global_id ?? void 0,
    session_id: getSessionId(config),
    anonymous_id: getAnonymousId(config),
    site_capabilities: config.profile.capabilities,
    ...browserContext,
    ...buildRuntimeContextProperties(config, browserContext, attributionProperties2),
    ...buildPosthogMetadataContext(config)
  });
};
var buildPosthogCustomerAccountGroupContext = (config) => {
  const context = resolveRuntimeEntityContext(config);
  return withoutUndefined({
    site_id: context.site_id,
    global_id: context.global_id ?? void 0
  });
};
var buildPosthogGlobalEntityGroupContext = (config) => {
  const context = resolveRuntimeEntityContext(config);
  return withoutUndefined({
    site_id: context.site_id,
    customer_account_id: context.customer_account_id,
    site_capabilities: config.profile.capabilities
  });
};
var buildPosthogNativeContext = (config) => {
  const context = resolveRuntimeEntityContext(config);
  const attributionProperties2 = readAttributionProperties(config);
  const browserContext = buildBrowserContextProperties(config);
  const pageUrl = canUseBrowser2() ? window.location.href : "";
  const path = canUseBrowser2() ? window.location.pathname : "";
  const referrer = canUseBrowser2() ? document.referrer || null : null;
  const providerProperties = buildProviderBaseProperties({
    global_id: context.global_id,
    site_id: context.site_id,
    customer_account_id: context.customer_account_id,
    industry_key: context.industry_key,
    campaign_key: campaignKeyFromAttribution(attributionProperties2),
    gcs_layer: "posthog_native"
  });
  return {
    ...buildPosthogRegistrationContext(config),
    ...providerProperties,
    session_id: getSessionId(config),
    anonymous_id: getAnonymousId(config),
    page_url_clean: cleanUrlWithoutQuery(pageUrl),
    path_clean: cleanPathname(path),
    referrer_clean: cleanUrlWithoutQuery(referrer),
    ...browserContext,
    ...buildRuntimeContextProperties(config, browserContext, attributionProperties2),
    "$groups": buildPosthogGroups(providerProperties)
  };
};
var registerPosthogContext = (config, client = import_posthog_js6.default) => {
  const context = resolveRuntimeEntityContext(config);
  client.register(buildPosthogRegistrationContext(config));
  if (context.global_id) {
    client.group("global_entity", context.global_id, buildPosthogGlobalEntityGroupContext(config));
  }
  if (context.customer_account_id) {
    client.group("customer_account", context.customer_account_id, buildPosthogCustomerAccountGroupContext(config));
  }
  client.opt_in_capturing({ captureEventName: false });
};
var buildBaseProperties = (config) => {
  const context = resolveRuntimeEntityContext(config);
  const attributionProperties2 = readAttributionProperties(config);
  const browserContext = buildBrowserContextProperties(config);
  const pageUrl = canUseBrowser2() ? window.location.href : "";
  const path = canUseBrowser2() ? window.location.pathname : "";
  const referrer = canUseBrowser2() ? document.referrer || null : null;
  return {
    event_id: randomId(),
    event_spec_version: SITE_ANALYTICS_EVENT_SPEC_VERSION,
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    site_id: context.site_id,
    customer_account_id: context.customer_account_id,
    global_id: context.global_id,
    session_id: getSessionId(config),
    anonymous_id: getAnonymousId(config),
    page_url: pageUrl,
    path,
    referrer,
    page_url_clean: cleanUrlWithoutQuery(pageUrl),
    path_clean: cleanPathname(path),
    referrer_clean: cleanUrlWithoutQuery(referrer),
    site_capabilities: config.profile.capabilities,
    consent_state: config.consentState,
    ga_client_id: readGaClientId(),
    ga_session_id: readGaSessionId(),
    engagement_time_msec: Math.max(1, Date.now() - RUNTIME_STARTED_AT),
    page_category: config.pageCategory ?? readPageCategory(),
    ...browserContext,
    ...buildRuntimeContextProperties(config, browserContext, attributionProperties2),
    ...attributionProperties2,
    ...emailExperimentFeatureProperties(attributionProperties2)
  };
};
var buildEvent2 = (config, name, properties = {}) => ({
  name,
  properties: {
    ...buildBaseProperties(config),
    ...properties
  }
});
var buildFeatureFlagExposureProperties = (flagKey, flagVariant, exposureName, properties = {}) => ({
  ...properties,
  flag_key: flagKey,
  flag_variant: String(flagVariant ?? "control"),
  exposure_name: exposureName ?? flagKey,
  gcs_layer: "gcs_canonical",
  variant: String(flagVariant ?? "control"),
  "$feature_flag": flagKey,
  "$feature_flag_response": String(flagVariant ?? "control"),
  ["$feature/" + flagKey]: String(flagVariant ?? "control")
});
var buildExperimentProperties = (experimentKey, experimentVariant, properties = {}) => ({
  ...properties,
  experiment_key: experimentKey,
  experiment_variant: experimentVariant,
  flag_key: experimentKey,
  flag_variant: experimentVariant,
  variant: experimentVariant,
  "$feature_flag": experimentKey,
  "$feature_flag_response": experimentVariant,
  ["$feature/" + experimentKey]: experimentVariant
});
var buildExperimentGovernanceProperties = (config, experimentKey) => {
  const governance = config.experimentGovernance?.[experimentKey];
  if (!governance) return {};
  return {
    experiment_owner: governance.owner,
    experiment_hypothesis: governance.hypothesis,
    experiment_audience: governance.audience,
    experiment_exposure_event: governance.exposure_event,
    experiment_conversion_metric: governance.conversion_metric,
    experiment_rollback: governance.rollback,
    experiment_duration: governance.duration,
    experiment_data_quality_checks: governance.data_quality_checks,
    experiment_group_scoped: governance.group_scoped
  };
};
var exposureDedupeKey = (sessionId, key, variant) => `${sessionId}:${key}:${String(variant)}`;
var withTimeout = async (promise, timeoutMs, fallback) => {
  let timeoutId;
  const timeout = new Promise((resolve) => {
    timeoutId = setTimeout(() => resolve(fallback), timeoutMs);
  });
  try {
    return await Promise.race([promise, timeout]);
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
};
var isExperimentationEnabled = (config) => resolveSiteAnalyticsModes(config).eventSink !== "none" || config.profile.enabled_packs.includes("experimentation") || config.profile.capabilities.includes("saas");
var ADVANCED_CAPABILITY_KEYS = [
  "replay",
  "heatmaps",
  "clickDiagnostics",
  "surveys",
  "cohorts",
  "exceptions",
  "webVitals",
  "browserLogs"
];
var getAdvancedGate = (config, key) => config.advancedCapabilities?.[key];
var getAdvancedCapabilityState = (config, key) => {
  const gate = getAdvancedGate(config, key);
  if (gate) return gate.state ?? "configured";
  return "disabled";
};
var isAdvancedGateApproved = (gate) => gate?.approved === true || gate?.testMode === true;
var isAdvancedCapabilityEnabled = (config, key) => {
  const gate = getAdvancedGate(config, key);
  if (gate) return getAdvancedCapabilityState(config, key) === "enabled" && isAdvancedGateApproved(gate);
  return false;
};
var advancedCapabilityEventProperties = (config, key) => {
  const gate = getAdvancedGate(config, key);
  return {
    advanced_capability_state: getAdvancedCapabilityState(config, key),
    advanced_capability_owner: gate?.owner,
    advanced_capability_reason: gate?.reason,
    advanced_capability_test_mode: gate?.testMode === true
  };
};
var hasConfiguredAdvancedGate = (config) => ADVANCED_CAPABILITY_KEYS.some((key) => Boolean(getAdvancedGate(config, key)));
var requestedAdvancedPosthogModules = (config) => {
  const requested = [];
  if (isAdvancedCapabilityEnabled(config, "replay")) requested.push("replay");
  if (isAdvancedCapabilityEnabled(config, "heatmaps")) requested.push("heatmaps");
  if (isAdvancedCapabilityEnabled(config, "surveys")) requested.push("surveys");
  if (isAdvancedCapabilityEnabled(config, "clickDiagnostics")) requested.push("deadClicks", "rageClicks");
  if (isAdvancedCapabilityEnabled(config, "exceptions")) requested.push("exceptions");
  if (isAdvancedCapabilityEnabled(config, "webVitals")) requested.push("webVitals");
  if (isAdvancedCapabilityEnabled(config, "browserLogs")) requested.push("browserLogs");
  return requested;
};
var resolveRuntimeAdvancedPosthogModules = (config) => {
  const requested = requestedAdvancedPosthogModules(config);
  return resolveAdvancedPosthogModules({
    approved: requested.length > 0,
    consentState: config.consentState,
    profile: hasConfiguredAdvancedGate(config) ? "canary" : "off",
    requested
  });
};
var shouldBlockAdvancedEvent = (config, name) => {
  const advancedModules = resolveRuntimeAdvancedPosthogModules(config);
  if (name === "rage_click" && !advancedModules.rageClicks) {
    return true;
  }
  if (name === "dead_click" && !advancedModules.deadClicks) {
    return true;
  }
  if (name.startsWith("survey_") && !advancedModules.surveys) {
    return true;
  }
  if (name === "cohort_matched") {
    return !isAdvancedCapabilityEnabled(config, "cohorts") || !isSiteAnalyticsVendorConsentGranted(config.consentState) || !config.globalId;
  }
  return false;
};
var IDENTITY_UNSAFE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "email",
  "unsafe_email",
  "phone",
  "unsafe_phone",
  "name",
  "unsafe_name",
  "exposure_name",
  "first_name",
  "last_name",
  "full_name",
  "display_name",
  "person_name",
  "message",
  "message_body",
  "free_text",
  "lead_message",
  "contact_email",
  "contact_email_address",
  "contact_phone",
  "contact_phone_number",
  "customer_address",
  "customer_email",
  "customer_email_address",
  "customer_message",
  "customer_name",
  "customer_first_name",
  "customer_last_name",
  "customer_full_name",
  "customer_phone",
  "customer_phone_number",
  "email_address",
  "phone_number",
  "mobile_phone",
  "street_address",
  "address_line_1",
  "address_line_2",
  "billing_address",
  "billing_city",
  "billing_postal_code",
  "billing_region",
  "billing_state",
  "billing_zip",
  "billing_name",
  "shipping_address",
  "shipping_city",
  "shipping_postal_code",
  "shipping_region",
  "shipping_state",
  "shipping_zip",
  "shipping_name",
  "address",
  "street",
  "city",
  "zip",
  "postal_code",
  "region",
  "state",
  "contact",
  "note",
  "notes",
  "description",
  "comment",
  "public_comment",
  "location",
  "$selected_content",
  "selected_content",
  "copied_text",
  "clipboard_text",
  "gcs_event_name"
]);
var IDENTITY_SAFE_FIELD_NAMES = /* @__PURE__ */ new Set([
  "consent_state",
  "business_name",
  "template_name",
  "field_state",
  "account_state",
  "customer_state",
  "advanced_capability_state",
  "cta_location",
  "phone_click_target",
  "email_click_target",
  "region_id",
  "country_code",
  "email_hash",
  "phone_hash",
  "name_hash",
  "contact_hash"
]);
var normalizeIdentityFieldName = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
var isIdentityUnsafeFieldName = (key) => {
  const normalized = normalizeIdentityFieldName(key);
  return !IDENTITY_SAFE_FIELD_NAMES.has(normalized) && IDENTITY_UNSAFE_FIELD_NAMES.has(normalized);
};
var RUNTIME_VENDOR_URL_FIELD_NAMES = /* @__PURE__ */ new Set([
  "$current_url",
  "$referrer",
  "current_url",
  "page_url",
  "referrer"
]);
var sanitizeRuntimeVendorUrlValue = (value) => {
  if (typeof value !== "string" || value.trim().length === 0) return void 0;
  try {
    const url = new URL(value, canUseBrowser2() ? window.location.href : "https://example.invalid/");
    if (url.protocol !== "http:" && url.protocol !== "https:") return void 0;
    return `${url.origin}${url.pathname}`;
  } catch {
    return void 0;
  }
};
var sanitizeIdentityValue = (value) => {
  if (Array.isArray(value)) return value.map((item) => sanitizeIdentityValue(item));
  if (value instanceof Date) return value;
  if (value && Object.prototype.toString.call(value) === "[object Object]") {
    return sanitizeIdentityPropertiesObject(value);
  }
  return value;
};
var sanitizeIdentityPropertiesObject = (properties) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    const normalizedKey = normalizeIdentityFieldName(key);
    if (RUNTIME_VENDOR_URL_FIELD_NAMES.has(normalizedKey)) {
      const sanitizedUrl = sanitizeRuntimeVendorUrlValue(value);
      if (sanitizedUrl !== void 0) sanitized[key] = sanitizedUrl;
      continue;
    }
    if (isIdentityUnsafeFieldName(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = sanitizeIdentityValue(value);
  }
  return sanitized;
};
var sanitizeIdentityProperties = (config, properties) => {
  const context = resolveRuntimeEntityContext(config);
  return sanitizeIdentityPropertiesObject({
    ...properties,
    site_id: context.site_id,
    customer_account_id: context.customer_account_id,
    global_id: context.global_id ?? void 0
  });
};
var sanitizeRuntimePosthogBeforeSendEvent = (event, config) => {
  if (!event || typeof event !== "object") return event;
  const record = event;
  const sanitized = {
    ...sanitizeIdentityPropertiesObject(record),
    properties: sanitizeIdentityPropertiesObject(
      record.properties && typeof record.properties === "object" ? record.properties : {}
    )
  };
  const eventName = typeof sanitized.event === "string" ? sanitized.event : "";
  if (!shouldCaptureNativeBehaviorEvent(eventName)) return sanitized;
  const nativeContext = buildPosthogNativeContext(config);
  return {
    ...sanitized,
    properties: {
      ...sanitized.properties,
      ...nativeContext,
      "$groups": nativeContext.$groups
    }
  };
};
var resolvePosthogUiHost = (apiHost, uiHost) => {
  if (uiHost) return uiHost;
  if (apiHost && /^https?:\/\//.test(apiHost)) {
    let hostname = "";
    try {
      hostname = new URL(apiHost).hostname.toLowerCase();
    } catch {
    }
    if (!isHostnameOrSubdomain(hostname, "posthog.com")) return apiHost;
    if (hostname === "eu.posthog.com" || hostname.startsWith("eu.")) return "https://eu.posthog.com";
  }
  return "https://us.posthog.com";
};
var shouldDisablePosthogCompression = (apiHost, config) => {
  if (config.posthogDisableCompression === true) return true;
  return apiHost.startsWith("/");
};
var mountGa4 = (gaId, globalParams) => {
  if (!canUseBrowser2() || !gaId || document.getElementById("gcs-ga4-runtime"))
    return;
  window.dataLayer = window.dataLayer || [];
  const hasExistingConsentCommand = window.dataLayer.some((entry) => {
    if (Array.isArray(entry)) return entry[0] === "consent";
    if (entry && typeof entry === "object" && 0 in entry) {
      return entry[0] === "consent";
    }
    return false;
  });
  window.gtag = window.gtag || function gtag() {
    window.dataLayer?.push(arguments);
  };
  if (!hasExistingConsentCommand) {
    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500
    });
  }
  const script = document.createElement("script");
  script.id = "gcs-ga4-runtime";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId);
  document.head.appendChild(script);
  window.gtag("js", /* @__PURE__ */ new Date());
  if (globalParams && Object.keys(globalParams).length > 0) {
    window.gtag("set", globalParams);
  }
  window.gtag("config", gaId, {
    send_page_view: false,
    ...globalParams ?? {}
  });
};
var mountPosthog = (config) => {
  const modes = resolveSiteAnalyticsModes(config);
  if (modes.eventSink !== "posthog" || !config.posthogKey) return;
  const replayGate = getAdvancedGate(config, "replay") ?? getAdvancedGate(config, "heatmaps");
  const advancedModules = resolveRuntimeAdvancedPosthogModules(config);
  const replayEnabled = advancedModules.replay;
  const surveysEnabled = advancedModules.surveys;
  const heatmapsEnabled = advancedModules.heatmaps;
  const clickDiagnosticsEnabled = advancedModules.deadClicks && advancedModules.rageClicks;
  const exceptionsEnabled = advancedModules.exceptions;
  const nativeCapture = resolvePosthogNativeCapture(config);
  const sanitizePosthogBeforeSendEvent = (event) => sanitizeRuntimePosthogBeforeSendEvent(event, config);
  const nativeOptions = buildPosthogNativeOptions({
    advancedModules
  });
  const apiHost = config.posthogHost || "https://us.i.posthog.com";
  const posthogOptions = {
    api_host: apiHost,
    ui_host: resolvePosthogUiHost(apiHost, config.posthogUiHost),
    defaults: "2025-11-30",
    person_profiles: "identified_only",
    cookieless_mode: "on_reject",
    ...nativeOptions,
    autocapture: resolvePosthogAutocaptureConfig(config),
    capture_pageview: nativeCapture.pageview,
    capture_pageleave: nativeCapture.pageleave,
    capture_exceptions: exceptionsEnabled ? {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false
    } : false,
    disable_session_recording: !replayEnabled,
    disable_surveys: !surveysEnabled,
    enable_heatmaps: heatmapsEnabled,
    capture_dead_clicks: clickDiagnosticsEnabled,
    rageclick: clickDiagnosticsEnabled,
    request_batching: true,
    opt_out_useragent_filter: config.posthogOptOutUseragentFilter === true,
    disable_compression: shouldDisablePosthogCompression(apiHost, config),
    mask_all_text: replayGate?.maskAllText === true,
    mask_text_selector: replayGate?.maskTextSelector || void 0,
    block_selector: replayGate?.blockSelector || void 0,
    external_scripts_inject_target: "head",
    before_send: (event) => sanitizePosthogBeforeSendEvent(event)
  };
  import_posthog_js6.default.init(config.posthogKey, posthogOptions);
  registerPosthogContext(config);
  if (typeof document !== "undefined") {
    annotatePosthogCaptureMetadata(document, {
      siteId: config.profile.site_id,
      customerAccountId: config.profile.customer_account_id,
      globalId: config.globalId,
      templateId: config.templateId,
      templateVersion: config.templateVersion,
      pageRole: config.pageRole,
      businessVertical: config.businessVertical,
      deploymentId: config.deploymentId
    });
  }
  if (replayEnabled) import_posthog_js6.default.startSessionRecording();
};
var optOutPosthog = () => {
  try {
    import_posthog_js6.default.stopSessionRecording();
  } catch {
  }
  try {
    import_posthog_js6.default.opt_out_capturing();
  } catch {
  }
};
var createNoopHandle = () => ({
  advancedPosthogModules: disabledAdvancedPosthogModules(),
  cleanup: () => void 0,
  track: async () => noopValidation,
  trackWebVital: async () => noopValidation,
  identify: () => void 0,
  alias: () => void 0,
  reset: () => void 0,
  updateConsentState: async () => noopValidation,
  resetExposureDedupe: () => void 0,
  evaluateFeatureFlag: async (_flagKey, options) => options?.defaultVariant ?? null,
  trackConversion: async () => noopValidation,
  trackFeatureFlagExposure: async () => noopValidation,
  trackExperimentExposure: async () => noopValidation,
  evaluateExperiment: async () => null,
  trackExperimentConversion: async () => noopValidation
});
var mountSiteAnalytics = (config) => {
  if (!canUseBrowser2() || !config.profile.site_id || !config.profile.customer_account_id) {
    optOutPosthog();
    return createNoopHandle();
  }
  const nativePosthogCapture = resolvePosthogNativeCapture(config);
  const posthogPageviewStrategy2 = resolvePosthogPageviewStrategy2(config);
  const runtimeConfig = {
    ...config,
    ga4MeasurementId: config.ga4MeasurementId ?? config.gaId,
    posthogNativeCapture: nativePosthogCapture,
    posthogPageviewStrategy: posthogPageviewStrategy2,
    consentState: normalizeSiteAnalyticsConsentState(config.consentState),
    firstPartyNetworkState: config.firstPartyNetworkState ?? (() => resolveSiteAnalyticsNetworkState()),
    previousConsentState: config.previousConsentState == null ? null : normalizeSiteAnalyticsConsentState(config.previousConsentState)
  };
  const vendorConsentGranted = analyticsAllowed(runtimeConfig);
  const resetForConsentDowngrade = shouldResetSiteAnalyticsIdentityOnConsentTransition(
    runtimeConfig.previousConsentState,
    runtimeConfig.consentState
  );
  const resetForScopeChange = hasSiteAnalyticsIdentityScopeChanged(runtimeConfig);
  if (resetForConsentDowngrade || resetForScopeChange) {
    resetSiteAnalyticsIdentityPersistence();
  }
  persistSiteAnalyticsIdentityScope(runtimeConfig);
  const modes = resolveSiteAnalyticsModes(config);
  if (config.gaId && modes.eventSink !== "none" && modes.eventSink !== "rudderstack") {
    if (vendorConsentGranted) {
      const identityContext = resolveRuntimeEntityContext(runtimeConfig);
      mountGa4(config.gaId, withoutUndefined({
        site_id: identityContext.site_id,
        customer_account_id: identityContext.customer_account_id,
        global_id: identityContext.global_id ?? void 0
      }));
    }
    window.gtag?.("consent", "update", buildGa4ConsentState(runtimeConfig.consentState));
  }
  if (vendorConsentGranted) mountPosthog(runtimeConfig);
  else if (!resetForConsentDowngrade) optOutPosthog();
  const dispatcher = createSiteAnalyticsDispatcher(runtimeConfig);
  const firstPartyResetScope = {
    customerAccountId: runtimeConfig.profile.customer_account_id,
    siteId: runtimeConfig.profile.site_id
  };
  if (resetForConsentDowngrade || resetForScopeChange || !vendorConsentGranted) {
    dispatcher.purgeFirstPartyForConsentReset(firstPartyResetScope);
  }
  const baseEventFactory = () => ({ properties: buildBaseProperties(runtimeConfig) });
  const updateConsentState = (state, properties = {}) => {
    const decision = buildSiteAnalyticsConsentUpdate(runtimeConfig.consentState, state);
    const previousConsentState = runtimeConfig.consentState;
    runtimeConfig.previousConsentState = previousConsentState;
    runtimeConfig.consentState = decision.nextConsentState;
    window.gtag?.("consent", "update", decision.ga4ConsentMode);
    if (decision.resetIdentity) {
      dispatcher.purgeFirstPartyForConsentReset(firstPartyResetScope);
      resetSiteAnalyticsIdentityPersistence();
    }
    if (decision.vendorConsentGranted) {
      mountPosthog(runtimeConfig);
    } else {
      optOutPosthog();
    }
    return dispatcher.dispatch(buildEvent2(runtimeConfig, "consent_state_updated", {
      previous_consent_state: previousConsentState,
      ...properties
    }));
  };
  const resolveFirstPartyRuntimeNetworkState = () => {
    const configured = typeof runtimeConfig.firstPartyNetworkState === "function" ? runtimeConfig.firstPartyNetworkState() : runtimeConfig.firstPartyNetworkState;
    return resolveSiteAnalyticsNetworkState(configured);
  };
  const shouldAttemptFirstPartyFlush = () => resolveSiteAnalyticsFlushPolicy(resolveFirstPartyRuntimeNetworkState()).shouldAttemptNetwork;
  const flushFirstPartyOnExit = () => {
    dispatcher.flushFirstPartyWithBeacon();
    void dispatcher.flushFirstParty();
  };
  const flushFirstPartyOnInterval = () => {
    if (shouldAttemptFirstPartyFlush()) void dispatcher.flushFirstParty();
  };
  const flushFirstPartyOnHidden = () => {
    if (document.visibilityState === "hidden" && shouldAttemptFirstPartyFlush()) void dispatcher.flushFirstParty();
  };
  const flushFirstPartyOnOnline = () => {
    void dispatcher.flushFirstParty();
  };
  const firstPartyFlushIntervalMs = resolveSiteAnalyticsFlushPolicy(resolveFirstPartyRuntimeNetworkState()).flushIntervalMs || DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS;
  const firstPartyFlushTimer = window.setInterval(flushFirstPartyOnInterval, firstPartyFlushIntervalMs);
  const firstPartyFlushHandle = {
    cleanup: () => {
      window.clearInterval(firstPartyFlushTimer);
      window.removeEventListener("pagehide", flushFirstPartyOnExit);
      window.removeEventListener("online", flushFirstPartyOnOnline);
      document.removeEventListener("visibilitychange", flushFirstPartyOnHidden);
    }
  };
  window.addEventListener("pagehide", flushFirstPartyOnExit);
  window.addEventListener("online", flushFirstPartyOnOnline);
  document.addEventListener("visibilitychange", flushFirstPartyOnHidden);
  if (!vendorConsentGranted) {
    const handle2 = {
      posthogNativeCapture: nativePosthogCapture,
      posthogPageviewStrategy: posthogPageviewStrategy2,
      advancedPosthogModules: disabledAdvancedPosthogModules(),
      cleanup: () => {
        firstPartyFlushHandle.cleanup();
        if (window.gcsAnalytics === handle2) delete window.gcsAnalytics;
      },
      track: (name, properties = {}) => {
        if (name !== "consent_state_initialized" && name !== "consent_state_updated") {
          return Promise.resolve(noopValidation);
        }
        return dispatcher.dispatch(buildEvent2(runtimeConfig, name, properties));
      },
      trackWebVital: async () => noopValidation,
      identify: () => void 0,
      alias: () => void 0,
      reset: () => {
        dispatcher.purgeFirstPartyForConsentReset(firstPartyResetScope);
        resetSiteAnalyticsIdentityPersistence();
      },
      updateConsentState,
      resetExposureDedupe: (key) => clearExposureDedupe(key),
      evaluateFeatureFlag: async (_flagKey, options) => options?.defaultVariant ?? null,
      trackConversion: async () => noopValidation,
      trackFeatureFlagExposure: async () => noopValidation,
      trackExperimentExposure: async () => noopValidation,
      evaluateExperiment: async () => null,
      trackExperimentConversion: async () => noopValidation
    };
    window.gcsAnalytics = handle2;
    return handle2;
  }
  const sessionState = getSessionState(runtimeConfig);
  const anonymousState = getAnonymousState(runtimeConfig);
  const reportWebVital = createWebVitalsReporter({ dispatcher, baseEventFactory });
  const advancedPosthogModules = resolveRuntimeAdvancedPosthogModules(runtimeConfig);
  const runtimeCapture = resolveRuntimeCapture(runtimeConfig);
  const dispatchRuntimeEvent = (name, properties = {}) => {
    if (!isSiteAnalyticsVendorConsentGranted(runtimeConfig.consentState) && name !== "consent_state_initialized" && name !== "consent_state_updated") {
      return Promise.resolve(noopValidation);
    }
    if (shouldBlockAdvancedEvent(runtimeConfig, name)) return Promise.resolve(noopValidation);
    const advancedProperties = name.startsWith("survey_") ? advancedCapabilityEventProperties(runtimeConfig, "surveys") : name === "cohort_matched" ? advancedCapabilityEventProperties(runtimeConfig, "cohorts") : name === "rage_click" || name === "dead_click" ? advancedCapabilityEventProperties(runtimeConfig, "clickDiagnostics") : {};
    return dispatcher.dispatch(buildEvent2(runtimeConfig, name, {
      ...advancedProperties,
      ...properties
    }));
  };
  const trackDedupedFeatureFlagExposure = (flagKey, flagVariant, properties = {}) => {
    const dedupeKey = exposureDedupeKey(getSessionId(runtimeConfig), flagKey, flagVariant);
    if (hasSeenExposure(dedupeKey)) return Promise.resolve(noopValidation);
    markExposureSeen(dedupeKey);
    const { exposure_name: exposureName, ...customProperties } = properties;
    return dispatcher.dispatch(
      buildEvent2(
        runtimeConfig,
        "feature_flag_exposure",
        buildFeatureFlagExposureProperties(flagKey, flagVariant, typeof exposureName === "string" ? exposureName : void 0, {
          ...buildExperimentGovernanceProperties(runtimeConfig, flagKey),
          exposure_dedupe_key: dedupeKey,
          ...customProperties
        })
      )
    );
  };
  const trackDedupedExperimentExposure = (experimentKey, experimentVariant, properties = {}) => {
    const dedupeKey = exposureDedupeKey(getSessionId(runtimeConfig), experimentKey, experimentVariant);
    if (hasSeenExposure(dedupeKey)) return Promise.resolve(noopValidation);
    markExposureSeen(dedupeKey);
    return dispatcher.dispatch(
      buildEvent2(
        runtimeConfig,
        "experiment_exposure",
        buildExperimentProperties(experimentKey, experimentVariant, {
          ...buildExperimentGovernanceProperties(runtimeConfig, experimentKey),
          exposure_dedupe_key: dedupeKey,
          ...properties
        })
      )
    );
  };
  const evaluateFeatureFlag = async (flagKey, options = {}) => {
    const fallback = options.defaultVariant ?? null;
    if (!flagKey || !isExperimentationEnabled(runtimeConfig)) return fallback;
    if (options.scope === "group" && !runtimeConfig.groupScopedExperimentsEnabled) return fallback;
    const configured = runtimeConfig.featureFlags?.[flagKey];
    const posthogClient = import_posthog_js6.default;
    const canEvaluate = configured !== void 0 || typeof posthogClient.getFeatureFlag === "function";
    if (!canEvaluate) return fallback;
    const evaluation = configured !== void 0 ? { variant: configured ?? fallback, assigned: configured != null } : await withTimeout(
      Promise.resolve(posthogClient.getFeatureFlag?.(flagKey) ?? fallback).then((variant) => ({ variant: variant ?? fallback, assigned: variant != null })),
      runtimeConfig.featureFlagTimeoutMs ?? DEFAULT_FEATURE_FLAG_TIMEOUT_MS,
      { variant: fallback, assigned: false }
    );
    if (evaluation.assigned && evaluation.variant != null && options.expose !== false && options.visible !== false) {
      void trackDedupedFeatureFlagExposure(flagKey, evaluation.variant, {
        exposure_name: options.exposureName,
        ...options.properties ?? {}
      });
    }
    return evaluation.variant;
  };
  const evaluateExperiment = async (definition, entityKey, properties = {}) => {
    if (!isExperimentationEnabled(runtimeConfig)) return null;
    const experimentKey = definition.key.trim();
    const assignmentKey = entityKey.trim();
    if (!experimentKey || !assignmentKey) return null;
    const variant = assignExperimentVariant({ ...definition, key: experimentKey }, assignmentKey);
    if (!variant) return null;
    const assignmentId = buildExperimentAssignmentId(experimentKey, assignmentKey);
    if (!assignmentId) return null;
    const exposure = buildExperimentExposureEvent({
      experiment_key: experimentKey,
      experiment_variant: variant,
      assignment_id: assignmentId
    });
    void trackDedupedExperimentExposure(experimentKey, variant, {
      ...properties,
      ...exposure.properties
    });
    return variant;
  };
  const handles = [
    attachScrollObserver({ dispatcher, baseEventFactory }),
    attachTimeOnPageObserver({ dispatcher, baseEventFactory }),
    attachActiveTimeObserver({ dispatcher, baseEventFactory }),
    attachOutboundAndDownloadObserver({ dispatcher, baseEventFactory }),
    attachCopyObserver({ dispatcher, baseEventFactory }),
    attachVideoObserver({ dispatcher, baseEventFactory }),
    attachSearchObserver({ dispatcher, baseEventFactory }),
    attachFormLifecycleObserver({
      dispatcher,
      baseEventFactory,
      fieldLifecycle: runtimeCapture.formFields,
      abandonment: runtimeCapture.formAbandonment
    }),
    attachErrorObservers({ dispatcher, baseEventFactory }),
    attachApiErrorObserver({
      dispatcher,
      baseEventFactory,
      enabled: runtimeCapture.apiErrors
    }),
    attachWebVitalsObserver({ dispatcher, baseEventFactory }),
    attachDataTrackObserver({ dispatcher, baseEventFactory }),
    attachVisibilityObserver({ dispatcher, baseEventFactory }),
    attachSectionVisibilityObserver({ dispatcher, baseEventFactory }),
    firstPartyFlushHandle
  ];
  const statusCode = document.body?.dataset?.analyticsStatusCode || document.body?.dataset?.statusCode;
  if (statusCode === "404" || statusCode === "500") {
    void dispatcher.dispatch(buildEvent2(runtimeConfig, statusCode === "404" ? "404_viewed" : "500_viewed", {
      endpoint: window.location.pathname
    }));
  }
  void dispatcher.dispatch(
    buildEvent2(runtimeConfig, sessionState.created ? "session_started" : "session_updated", {
      event_id: `session:${sessionState.id}:${Date.now()}`,
      session_id: sessionState.id,
      anonymous_id: anonymousState.id
    })
  );
  if (anonymousState.created) {
    void dispatcher.dispatch(
      buildEvent2(runtimeConfig, "anonymous_id_created", {
        event_id: `anonymous:${anonymousState.id}`,
        session_id: sessionState.id,
        anonymous_id: anonymousState.id
      })
    );
  }
  void dispatcher.dispatch(buildEvent2(runtimeConfig, "page_view"));
  const emailLandingAttribution = buildEmailLandingAttributionProperties(runtimeConfig);
  if (emailLandingAttribution) {
    void dispatcher.dispatch(buildEvent2(runtimeConfig, "email_landing_attributed", emailLandingAttribution));
  }
  const handle = {
    posthogNativeCapture: nativePosthogCapture,
    posthogPageviewStrategy: posthogPageviewStrategy2,
    advancedPosthogModules,
    getEventDestinations: (name) => dispatcher.getEventDestinations(name),
    cleanup: () => {
      handles.forEach((observer) => observer.cleanup());
      if (window.gcsAnalytics === handle) delete window.gcsAnalytics;
    },
    track: (name, properties = {}) => dispatchRuntimeEvent(name, properties),
    trackWebVital: (metric) => reportWebVital(metric),
    identify: (distinctId, properties = {}) => {
      const identityContext = resolveRuntimeEntityContext(runtimeConfig);
      import_posthog_js6.default.identify(distinctId, sanitizeIdentityProperties(runtimeConfig, properties));
      if (identityContext.global_id) {
        import_posthog_js6.default.group("global_entity", identityContext.global_id, buildPosthogGlobalEntityGroupContext(runtimeConfig));
      }
      if (identityContext.customer_account_id) {
        import_posthog_js6.default.group("customer_account", identityContext.customer_account_id, buildPosthogCustomerAccountGroupContext(runtimeConfig));
      }
    },
    alias: (distinctId, previousId) => import_posthog_js6.default.alias(distinctId, previousId),
    reset: () => {
      dispatcher.purgeFirstPartyForConsentReset(firstPartyResetScope);
      resetSiteAnalyticsIdentityPersistence();
    },
    updateConsentState,
    resetExposureDedupe: (key) => clearExposureDedupe(key),
    evaluateFeatureFlag,
    trackConversion: (submissionId, properties = {}) => dispatcher.dispatch(
      {
        ...buildEvent2(runtimeConfig, "form_submitted", {
          ...properties,
          submission_id: submissionId,
          submit_outcome: "accepted_response",
          source_of_truth: "browser"
        }),
        internal: { acceptedSubmitConfirmation: true }
      }
    ),
    trackFeatureFlagExposure: (flagKey, flagVariant, properties = {}) => trackDedupedFeatureFlagExposure(flagKey, flagVariant, properties),
    trackExperimentExposure: (experimentKey, experimentVariant, properties = {}) => trackDedupedExperimentExposure(experimentKey, experimentVariant, properties),
    evaluateExperiment,
    trackExperimentConversion: (experimentKey, experimentVariant, conversionName, properties = {}) => dispatcher.dispatch(
      buildEvent2(runtimeConfig, "experiment_converted", {
        ...buildExperimentProperties(experimentKey, experimentVariant, {
          ...buildExperimentGovernanceProperties(runtimeConfig, experimentKey),
          ...properties
        }),
        conversion_name: conversionName
      })
    )
  };
  window.gcsAnalytics = handle;
  return handle;
};

// src/siteAnalyticsTemplateMetadata.ts
var unsafeValuePattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\+?\d[\d\s().-]{8,}\d|{{[^}]*}}/i;
var safe = (value) => {
  if (unsafeValuePattern.test(value)) {
    throw new Error("UNSAFE_TEMPLATE_ANALYTICS_METADATA");
  }
  return value;
};
var assertTemplateAnalyticsMetadataSafe = (input) => {
  for (const value of Object.values(input)) {
    if (typeof value === "string") safe(value);
  }
};
var buildTemplateAnalyticsMetadata = (input) => {
  assertTemplateAnalyticsMetadataSafe(input);
  return {
    "data-track": input.event,
    "data-track-cta-location": input.ctaLocation,
    "data-track-cta-text": input.ctaText,
    "data-ph-capture-attribute-gcs_event": input.event,
    "data-ph-capture-attribute-gcs_component": input.component,
    "data-ph-capture-attribute-gcs_section": input.section ?? input.component,
    "data-ph-capture-attribute-gcs_cta_location": input.ctaLocation,
    "data-ph-capture-attribute-gcs_cta_text": input.ctaText
  };
};

// src/siteAnalyticsShopifyWebPixel.ts
var SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES = [
  "collection_viewed",
  "product_viewed",
  "product_added_to_cart",
  "product_removed_from_cart",
  "cart_viewed",
  "checkout_started",
  "checkout_contact_info_submitted",
  "checkout_address_info_submitted",
  "checkout_shipping_info_submitted",
  "payment_info_submitted",
  "checkout_completed",
  "search_submitted"
];
var SHOPIFY_TO_SITE_ANALYTICS_EVENT = {
  collection_viewed: "view_item_list",
  product_viewed: "view_item",
  product_added_to_cart: "add_to_cart",
  product_removed_from_cart: "remove_from_cart",
  cart_viewed: "view_cart",
  checkout_started: "begin_checkout",
  checkout_contact_info_submitted: "checkout_contact_info_submitted",
  checkout_address_info_submitted: "checkout_address_info_submitted",
  checkout_shipping_info_submitted: "checkout_shipping_info_submitted",
  payment_info_submitted: "add_payment_info",
  checkout_completed: "checkout_completed",
  search_submitted: "search"
};
var toRecord = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : null;
var cleanString3 = (value) => {
  if (typeof value !== "string" && typeof value !== "number" && typeof value !== "bigint") return null;
  const trimmed = String(value).trim();
  return trimmed.length > 0 ? trimmed : null;
};
var numberFrom = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  const record = toRecord(value);
  if (record) return numberFrom(record.amount);
  return null;
};
var priceCurrency = (value) => {
  const record = toRecord(value);
  return cleanString3(record?.currencyCode ?? record?.currency_code ?? record?.currency);
};
var eventData = (event) => toRecord(event.data) ?? {};
var nestedRecord = (record, keys) => {
  for (const key of keys) {
    const value = toRecord(record[key]);
    if (value) return value;
  }
  return null;
};
var contextDocument = (event) => nestedRecord(toRecord(event.context) ?? {}, ["document"]) ?? {};
var contextLocation = (event) => nestedRecord(contextDocument(event), ["location"]) ?? {};
var getCheckout = (event) => nestedRecord(eventData(event), ["checkout"]) ?? {};
var getCart = (event) => nestedRecord(eventData(event), ["cart"]) ?? {};
var getCartLine = (event) => nestedRecord(eventData(event), ["cartLine", "cart_line"]) ?? {};
var getProductVariant = (event) => nestedRecord(eventData(event), ["productVariant", "product_variant", "variant"]) ?? nestedRecord(getCartLine(event), ["merchandise", "variant"]) ?? nestedRecord(eventData(event), ["merchandise"]) ?? {};
var getProduct = (variant, fallback = {}) => nestedRecord(variant, ["product"]) ?? nestedRecord(fallback, ["product"]) ?? nestedRecord(eventData({ data: fallback }), ["product"]) ?? {};
var itemFromVariant = (variant, fallback = {}, index) => {
  const product = getProduct(variant, fallback);
  const fallbackCost = toRecord(fallback.cost) ?? {};
  const price = numberFrom(variant.price ?? fallback.price ?? fallbackCost.totalAmount);
  const quantity = numberFrom(fallback.quantity) ?? 1;
  return {
    item_id: cleanString3(product.id) ?? cleanString3(variant.productId) ?? cleanString3(variant.id) ?? cleanString3(fallback.product_id),
    item_name: cleanString3(product.title) ?? cleanString3(fallback.title) ?? cleanString3(variant.title),
    item_variant: cleanString3(variant.id) ?? cleanString3(fallback.variant_id) ?? cleanString3(variant.sku),
    item_brand: cleanString3(product.vendor),
    item_category: cleanString3(product.type),
    index: typeof index === "number" ? index : void 0,
    price,
    quantity
  };
};
var checkoutItems = (checkout) => {
  const lineItems = Array.isArray(checkout.lineItems) ? checkout.lineItems : Array.isArray(checkout.line_items) ? checkout.line_items : [];
  return lineItems.flatMap((lineItem, index) => {
    const line = toRecord(lineItem);
    if (!line) return [];
    const variant = nestedRecord(line, ["variant", "merchandise"]) ?? {};
    return [itemFromVariant(variant, line, index)];
  });
};
var cartItems = (cart) => {
  const lines = Array.isArray(cart.lines) ? cart.lines : Array.isArray(cart.cartLines) ? cart.cartLines : [];
  return lines.flatMap((lineItem, index) => {
    const line = toRecord(lineItem);
    if (!line) return [];
    const variant = nestedRecord(line, ["merchandise", "variant"]) ?? {};
    return [itemFromVariant(variant, line, index)];
  });
};
var firstTransactionGateway = (checkout) => {
  const transactions = Array.isArray(checkout.transactions) ? checkout.transactions : [];
  for (const transaction of transactions) {
    const record = toRecord(transaction);
    const gateway = cleanString3(record?.gateway ?? record?.paymentGateway ?? record?.payment_gateway);
    if (gateway) return gateway;
  }
  return null;
};
var checkoutValue = (checkout) => numberFrom(checkout.totalPrice ?? checkout.total_price ?? checkout.subtotalPrice ?? checkout.subtotal_price);
var checkoutCurrency = (checkout) => cleanString3(checkout.currencyCode ?? checkout.currency_code) ?? priceCurrency(checkout.totalPrice) ?? priceCurrency(checkout.total_price);
var orderId = (checkout) => {
  const order = nestedRecord(checkout, ["order"]);
  return cleanString3(order?.id ?? checkout.orderId ?? checkout.order_id);
};
var searchTermBucket = (event) => {
  const data = eventData(event);
  const searchResult = toRecord(data.searchResult) ?? {};
  const query = cleanString3(searchResult.query) ?? cleanString3(searchResult.searchTerm) ?? cleanString3(data.query) ?? cleanString3(data.searchTerm) ?? cleanString3(data.term);
  return query ? query.slice(0, 32).toLowerCase() : null;
};
var baseShopifyProperties = (event, options) => {
  const location = contextLocation(event);
  const documentContext = contextDocument(event);
  return {
    source_of_truth: "shopify_web_pixel",
    shopify_event_name: cleanString3(event.name),
    shopify_event_id: cleanString3(event.id),
    shopify_client_id: cleanString3(event.clientId),
    shopify_event_timestamp: cleanString3(event.timestamp),
    shop_domain: cleanString3(options.shopDomain),
    page_url: cleanString3(location.href),
    path: cleanString3(location.pathname),
    referrer: cleanString3(documentContext.referrer)
  };
};
var mapShopifyWebPixelEvent = (event, options = {}) => {
  const eventName = cleanString3(event.name);
  if (!eventName || !Object.prototype.hasOwnProperty.call(SHOPIFY_TO_SITE_ANALYTICS_EVENT, eventName)) return null;
  const name = SHOPIFY_TO_SITE_ANALYTICS_EVENT[eventName];
  const properties = baseShopifyProperties(event, options);
  const checkout = getCheckout(event);
  const cart = getCart(event);
  if (eventName.startsWith("checkout_") || eventName === "payment_info_submitted") {
    Object.assign(properties, {
      checkout_token: cleanString3(checkout.token ?? checkout.checkoutToken ?? checkout.checkout_token),
      cart_id: cleanString3(checkout.cartId ?? checkout.cart_id),
      currency: checkoutCurrency(checkout),
      value: checkoutValue(checkout),
      items: checkoutItems(checkout)
    });
  }
  if (eventName === "payment_info_submitted") {
    properties.payment_type = firstTransactionGateway(checkout);
  }
  if (eventName === "checkout_shipping_info_submitted") {
    const shippingLine = toRecord(checkout.shippingLine) ?? {};
    const snakeShippingLine = toRecord(checkout.shipping_line) ?? {};
    const delivery = toRecord(checkout.delivery) ?? {};
    const selectedDeliveryOption = toRecord(delivery.selectedDeliveryOption) ?? {};
    properties.shipping_tier = cleanString3(shippingLine.title) ?? cleanString3(snakeShippingLine.title) ?? cleanString3(selectedDeliveryOption.title);
  }
  if (eventName === "checkout_completed") {
    properties.observed_checkout_completed = true;
    properties.order_id = orderId(checkout);
    delete properties.transaction_id;
  }
  if (eventName === "cart_viewed") {
    Object.assign(properties, {
      cart_id: cleanString3(cart.id ?? cart.token),
      currency: cleanString3(cart.currencyCode) ?? priceCurrency((toRecord(cart.cost) ?? {}).totalAmount),
      value: numberFrom((toRecord(cart.cost) ?? {}).totalAmount ?? cart.totalAmount ?? cart.total_price),
      items: cartItems(cart)
    });
  }
  if (eventName === "product_added_to_cart" || eventName === "product_removed_from_cart") {
    const line = getCartLine(event);
    const variant = getProductVariant(event);
    properties.cart_id = cleanString3(getCart(event).id ?? getCart(event).token);
    properties.items = [itemFromVariant(variant, line)];
  }
  if (eventName === "product_viewed") {
    properties.items = [itemFromVariant(getProductVariant(event), eventData(event))];
    const [item] = properties.items;
    properties.product_gid = item?.item_id;
    properties.variant_gid = item?.item_variant;
  }
  if (eventName === "collection_viewed") {
    const collection = nestedRecord(eventData(event), ["collection"]) ?? {};
    properties.collection_handle = cleanString3(collection.handle);
    properties.item_list_name = cleanString3(collection.title) ?? cleanString3(collection.handle);
    properties.items = cartItems({ lines: eventData(event).products });
  }
  if (eventName === "search_submitted") {
    properties.search_term_bucket = searchTermBucket(event);
  }
  return { name, properties };
};
var createShopifyWebPixelBridge = (config) => {
  if (config.enabled === false) {
    return { subscribedCount: 0, cleanup: () => void 0 };
  }
  const events = config.events ?? SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES;
  const subscriptions = [];
  for (const eventName of events) {
    const subscription = config.analytics.subscribe(eventName, async (event) => {
      const mapped = mapShopifyWebPixelEvent(event, config);
      if (!mapped) return;
      await config.track(mapped.name, mapped.properties);
    });
    subscriptions.push(subscription);
  }
  return {
    subscribedCount: events.length,
    cleanup: () => {
      for (const subscription of subscriptions) {
        if (typeof subscription === "function") {
          try {
            subscription();
          } catch {
          }
        }
      }
    }
  };
};

// src/webAnalyticsDataPoints.ts
var providerScopeKeys = new Set(SITE_ANALYTICS_PROVIDER_SCOPE_KEYS);
var requiredBaseKeys = new Set(SITE_ANALYTICS_REQUIRED_BASE_KEYS);
var defaultContextFields = new Set(DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS);
var governedContextFields = new Set(GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS);
var titleize = (value) => value.split("_").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
var classifyBaseField = (fieldName) => {
  if (["event_id", "event_spec_version", "runtime_version", "sent_at", "environment", "traffic_class"].includes(fieldName)) {
    return "quality";
  }
  if (["site_id", "customer_account_id", "global_id"].includes(fieldName)) {
    return "identity";
  }
  if (["session_id", "anonymous_id"].includes(fieldName)) {
    return "session";
  }
  if (["page_url", "path", "referrer", "page_url_clean", "path_clean", "referrer_clean", "landing_page_path"].includes(fieldName)) {
    return "page";
  }
  if (fieldName === "consent_state") {
    return "consent";
  }
  return "provider";
};
var classifyProviderField = (fieldName) => {
  if (fieldName.endsWith("_hash")) return "identity";
  if (fieldName.startsWith("utm_") || fieldName.startsWith("first_touch_") || ["gclid", "gbraid", "wbraid", "fbclid"].includes(fieldName)) {
    return "acquisition";
  }
  if (fieldName.includes("campaign") || fieldName.includes("template") || fieldName.includes("message")) {
    return "acquisition";
  }
  if (fieldName.includes("field") || fieldName.includes("form") || fieldName.includes("submission")) {
    return "conversion";
  }
  if (fieldName.includes("endpoint")) return "performance";
  return classifyBaseField(fieldName);
};
var classifyContextField = (fieldName) => {
  if (fieldName.startsWith("browser_") || fieldName.startsWith("os_") || fieldName.startsWith("screen_") || fieldName.startsWith("viewport_") || fieldName.startsWith("ua_ch_") || fieldName.startsWith("connection_") || [
    "device_type",
    "device_pixel_ratio",
    "device_memory_gb",
    "hardware_concurrency"
  ].includes(fieldName)) {
    return "device";
  }
  if (["country_code", "region_code", "city", "locale_country"].includes(fieldName)) {
    return "geo";
  }
  if (fieldName.includes("fingerprint")) return "blocked";
  return "provider";
};
var classifyContextPrivacy = (fieldName) => {
  if (fieldName.includes("fingerprint")) return "governed_context";
  if (["client_ip", "ip_subnet", "city", "ua_ch_model"].includes(fieldName)) {
    return "governed_context";
  }
  return "non_personal";
};
var providerVisible = (fieldName) => providerScopeKeys.has(fieldName);
var serverOnlyEventNames = /* @__PURE__ */ new Set([
  ...BROWSER_FORBIDDEN_PROVIDER_OUTCOME_EVENTS,
  "lead_qualified",
  "lead_contacted",
  "lead_booked",
  "lead_won",
  "lead_lost",
  "booking_confirmed",
  "chargeback_received"
]);
var classifyEventDataPoint = (eventName, pack, eventClass) => {
  if (eventClass === "OUTCOME") return "conversion";
  if (eventClass === "QUALITY" || pack === "data_quality") return "synthetic";
  if (pack === "experimentation") {
    return eventName.startsWith("survey_") ? "survey" : "experiment";
  }
  if (pack === "email_attribution") return "acquisition";
  return "engagement";
};
var sourceLayersForEvent = (eventName, destinations) => [
  ...serverOnlyEventNames.has(eventName) ? ["server"] : ["browser"],
  ...destinations.includes("first_party") ? ["first_party"] : [],
  ...destinations.includes("posthog") ? ["posthog"] : [],
  ...destinations.includes("ga4") ? ["ga4"] : [],
  "dbt"
];
var baseFieldDataPoints = SITE_ANALYTICS_REQUIRED_BASE_KEYS.map((fieldName) => ({
  id: `field.${fieldName}`,
  label: titleize(fieldName),
  category: classifyBaseField(fieldName),
  description: `Canonical required field emitted on every site analytics event: ${fieldName}.`,
  privacyClass: ["session_id", "anonymous_id"].includes(fieldName) ? "pseudonymous" : "non_personal",
  requiredScope: "every_canonical_event",
  sourceLayers: ["browser", "server", "first_party", "posthog", "dbt"],
  customerVisible: fieldName !== "anonymous_id",
  providerVisible: providerVisible(fieldName),
  acceptedMissingReasons: ["legacy_event_before_spec_v1"],
  fieldName
}));
var defaultContextDataPoints = DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS.map((fieldName) => ({
  id: `context.${fieldName}`,
  label: titleize(fieldName),
  category: classifyContextField(fieldName),
  description: `Default low-entropy browser context field collected for device and experience breakdowns: ${fieldName}.`,
  privacyClass: classifyContextPrivacy(fieldName),
  requiredScope: "default_context",
  sourceLayers: ["browser", "first_party", "posthog", "dbt", "customer_portal"],
  customerVisible: true,
  providerVisible: providerVisible(fieldName),
  acceptedMissingReasons: ["not_available_in_browser", "legacy_event_before_spec_v1"],
  fieldName
}));
var governedContextDataPoints = GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS.map((fieldName) => ({
  id: `context.${fieldName}`,
  label: titleize(fieldName),
  category: classifyContextField(fieldName),
  description: `Governed context field collected only when the compliance profile and collection policy allow it: ${fieldName}.`,
  privacyClass: classifyContextPrivacy(fieldName),
  requiredScope: "governed_context",
  sourceLayers: ["browser", "server", "first_party", "posthog", "dbt"],
  customerVisible: !["client_ip", "device_fingerprint", "canvas_fingerprint", "webgl_fingerprint", "audio_fingerprint", "font_fingerprint", "plugin_fingerprint"].includes(fieldName),
  providerVisible: providerVisible(fieldName),
  acceptedMissingReasons: [
    "governed_collection_disabled",
    "consent_denied_or_essential_only",
    "not_available_in_browser",
    "legacy_event_before_spec_v1"
  ],
  fieldName
}));
var providerProjectionDataPoints = SITE_ANALYTICS_PROVIDER_SCOPE_KEYS.filter(
  (fieldName) => !requiredBaseKeys.has(fieldName) && !defaultContextFields.has(fieldName) && !governedContextFields.has(fieldName)
).map((fieldName) => ({
  id: `provider.${fieldName}`,
  label: titleize(fieldName),
  category: classifyProviderField(fieldName),
  description: `Provider-safe projected field allowed on PostHog or GA4 properties: ${fieldName}.`,
  privacyClass: fieldName.endsWith("_hash") ? "hashed_contact" : "non_personal",
  requiredScope: "provider_projection",
  sourceLayers: ["browser", "server", "posthog", "ga4", "dbt"],
  customerVisible: !fieldName.endsWith("_hash"),
  providerVisible: true,
  acceptedMissingReasons: ["not_applicable_to_event", "provider_not_configured", "legacy_event_before_spec_v1"],
  fieldName
}));
var eventTaxonomyDataPoints = Object.keys(SITE_ANALYTICS_EVENT_DEFINITIONS).map((eventName) => {
  const definition = SITE_ANALYTICS_EVENT_DEFINITIONS[eventName];
  const destinations = definition.destinations ?? [];
  const eventClass = definition.event_class ?? "DIAGNOSTIC";
  const pack = definition.pack ?? "core_engagement";
  return {
    id: `event.${eventName}`,
    label: titleize(eventName),
    category: classifyEventDataPoint(eventName, pack, eventClass),
    description: `Canonical analytics event in the ${pack} pack.`,
    privacyClass: "non_personal",
    requiredScope: "event_taxonomy",
    sourceLayers: sourceLayersForEvent(eventName, destinations),
    customerVisible: eventClass !== "QUALITY",
    providerVisible: destinations.some((destination) => destination === "posthog" || destination === "ga4"),
    acceptedMissingReasons: ["not_applicable_to_event", "source_backfill_not_available"],
    eventName,
    dashboardUses: eventClass === "OUTCOME" ? ["conversions", "funnels", "customer outcomes"] : ["behavior"]
  };
});
var blockedDataPoints = Array.from(NON_COLLECTABLE_BROWSER_DEVICE_FIELDS).map((fieldName) => ({
  id: `blocked.${fieldName}`,
  label: titleize(fieldName),
  category: "blocked",
  description: `Browser identifier intentionally excluded from analytics collection: ${fieldName}.`,
  privacyClass: "sensitive_blocked",
  requiredScope: "not_collectable",
  sourceLayers: ["browser"],
  customerVisible: false,
  providerVisible: false,
  acceptedMissingReasons: ["privacy_blocked"],
  fieldName
}));
var transformDataPoints = [
  {
    id: "transform.site_day_visitors",
    label: "Site Day Visitors",
    category: "transform",
    description: "Daily unique visitor count at the site-day grain.",
    privacyClass: "aggregate",
    requiredScope: "transform_output",
    sourceLayers: ["posthog", "ga4", "dbt", "customer_portal"],
    customerVisible: true,
    providerVisible: false,
    acceptedMissingReasons: ["source_backfill_not_available"],
    dashboardUses: ["traffic", "period comparison"]
  },
  {
    id: "transform.site_day_sessions",
    label: "Site Day Sessions",
    category: "transform",
    description: "Daily session count at the site-day grain.",
    privacyClass: "aggregate",
    requiredScope: "transform_output",
    sourceLayers: ["posthog", "ga4", "dbt", "customer_portal"],
    customerVisible: true,
    providerVisible: false,
    acceptedMissingReasons: ["source_backfill_not_available"],
    dashboardUses: ["traffic", "engagement"]
  },
  {
    id: "transform.site_day_page_views",
    label: "Site Day Page Views",
    category: "transform",
    description: "Daily page-view count at the site-day grain.",
    privacyClass: "aggregate",
    requiredScope: "transform_output",
    sourceLayers: ["posthog", "ga4", "dbt", "customer_portal"],
    customerVisible: true,
    providerVisible: false,
    acceptedMissingReasons: ["source_backfill_not_available"],
    dashboardUses: ["traffic"]
  },
  {
    id: "transform.site_day_leads",
    label: "Site Day Leads",
    category: "transform",
    description: "Daily lead count from accepted canonical lead events.",
    privacyClass: "aggregate",
    requiredScope: "transform_output",
    sourceLayers: ["posthog", "ga4", "dbt", "customer_portal"],
    customerVisible: true,
    providerVisible: false,
    acceptedMissingReasons: ["source_backfill_not_available"],
    dashboardUses: ["conversions", "funnels", "customer outcomes"]
  },
  {
    id: "transform.mobile_desktop_breakdown",
    label: "Mobile Desktop Breakdown",
    category: "transform",
    description: "Device-class rollup for mobile, tablet, and desktop analytics views.",
    privacyClass: "aggregate",
    requiredScope: "transform_output",
    sourceLayers: ["posthog", "dbt", "customer_portal"],
    customerVisible: true,
    providerVisible: false,
    acceptedMissingReasons: ["source_backfill_not_available"],
    dashboardUses: ["device mix", "experience quality"]
  },
  {
    id: "transform.search_console_daily",
    label: "Search Console Daily",
    category: "acquisition",
    description: "Daily organic search clicks, impressions, average position, and CTR.",
    privacyClass: "aggregate",
    requiredScope: "transform_output",
    sourceLayers: ["search_console", "dbt", "customer_portal"],
    customerVisible: true,
    providerVisible: false,
    acceptedMissingReasons: ["provider_not_configured", "source_backfill_not_available"],
    dashboardUses: ["organic search", "acquisition"]
  }
];
var WEB_ANALYTICS_DATA_POINTS = [
  ...baseFieldDataPoints,
  ...defaultContextDataPoints,
  ...governedContextDataPoints,
  ...providerProjectionDataPoints,
  ...eventTaxonomyDataPoints,
  ...blockedDataPoints,
  ...transformDataPoints
];
var WEB_ANALYTICS_DATA_POINT_IDS = WEB_ANALYTICS_DATA_POINTS.map(
  (dataPoint) => dataPoint.id
);
var getWebAnalyticsDataPoint = (id) => WEB_ANALYTICS_DATA_POINTS.find((dataPoint) => dataPoint.id === id);

// src/siteAnalyticsEmissionCoverage.ts
var SITE_ANALYTICS_EVENT_EMISSION_STATUSES = [
  "auto-runtime",
  "template-data-track",
  "runtime-api",
  "server-workflow",
  "server-provider",
  "activation-gated",
  "integration-required",
  "intentionally-not-auto"
];
var SITE_ANALYTICS_SITE_SPECIFIC_LIVE_OVERRIDES = [
  {
    site: "fifteenk.9line.dev",
    surface: "storefront search/cart/product UI",
    proofStatus: "site-specific-live",
    events: [
      "view_item_list",
      "select_item",
      "view_item",
      "add_to_cart",
      "remove_from_cart",
      "view_cart",
      "begin_checkout",
      "search",
      "search_started",
      "search_submitted",
      "search_zero_results",
      "search_result_clicked",
      "filter_applied",
      "sort_changed"
    ],
    closeout: "Fifteenk has deployed storefront surfaces and live provider smoke for these events; future proof refreshes must include UI surfaceProof and this does not make generated-site ecommerce/search globally live."
  },
  {
    site: "tim.staging.9line.dev",
    surface: "restored AquaDome product-list/select storefront",
    proofStatus: "site-specific-live",
    events: [
      "view_item_list",
      "select_item"
    ],
    closeout: "AquaDome has live provider proof for restored product-list/select events only; future proof refreshes must include UI surfaceProof, and cart, checkout, purchase, and payment events remain unproven until those controls exist on the GCS-instrumented deployment."
  },
  {
    site: "myaquadome.com",
    surface: "production AquaDome Shopify product-list/product/cart UI",
    proofStatus: "site-specific-live",
    events: [
      "view_item_list",
      "select_item",
      "view_item",
      "add_to_cart",
      "remove_from_cart",
      "view_cart",
      "begin_checkout"
    ],
    closeout: "AquaDome production has live browser and provider proof for real Shopify product-list, product-detail, add-to-cart, open-cart, remove-cart-item, and begin-checkout controls. Purchase, refund, add_payment_info, search, sort, and filter remain unproven until those real provider or UI surfaces are exercised."
  }
];
var SITE_ANALYTICS_EVENT_EMISSION_COVERAGE = {
  page_view: {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics",
    closeout: "Mounted generated sites emit this on load when the profile enables core engagement."
  },
  session_started: {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics",
    closeout: "Runtime session bootstrap emits this with session and anonymous identifiers."
  },
  session_updated: {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics",
    closeout: "Runtime session refresh emits this after the active session is extended."
  },
  anonymous_id_created: {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics",
    closeout: "Runtime identity bootstrap emits this when a generated site creates a new anonymous id."
  },
  view_item_list: {
    status: "integration-required",
    emitter: "commerce/product-list component",
    closeout: "Requires real product-list payloads; generic DOM inference would create weak ecommerce data."
  },
  select_item: {
    status: "integration-required",
    emitter: "commerce/product-list component",
    closeout: "Requires product id/list context from ecommerce widgets."
  },
  view_item: {
    status: "integration-required",
    emitter: "commerce/product-detail component",
    closeout: "Requires product_gid and item metadata from a product detail surface."
  },
  add_to_cart: {
    status: "integration-required",
    emitter: "cart component",
    closeout: "Requires cart state and item payloads; do not infer from generic CTA text."
  },
  remove_from_cart: {
    status: "integration-required",
    emitter: "cart component",
    closeout: "Requires cart state and item payloads."
  },
  view_cart: {
    status: "integration-required",
    emitter: "cart component",
    closeout: "Requires a real cart surface."
  },
  begin_checkout: {
    status: "integration-required",
    emitter: "checkout component",
    closeout: "Requires a real checkout handoff and ecommerce context."
  },
  add_payment_info: {
    status: "integration-required",
    emitter: "checkout component",
    closeout: "Requires checkout/payment-step integration. Shopify stores can emit this from the Shopify Web Pixel payment_info_submitted event once the pixel is installed and provider proof passes."
  },
  checkout_contact_info_submitted: {
    status: "integration-required",
    emitter: "Shopify Web Pixel bridge",
    closeout: "Requires a Shopify Custom Pixel or App Pixel subscription to checkout_contact_info_submitted; records observed checkout progress only and must not include raw email or phone."
  },
  checkout_address_info_submitted: {
    status: "integration-required",
    emitter: "Shopify Web Pixel bridge",
    closeout: "Requires a Shopify Custom Pixel or App Pixel subscription to checkout_address_info_submitted; records observed checkout progress only and must not include raw address fields."
  },
  checkout_shipping_info_submitted: {
    status: "integration-required",
    emitter: "Shopify Web Pixel bridge",
    closeout: "Requires a Shopify Custom Pixel or App Pixel subscription to checkout_shipping_info_submitted; records observed checkout progress and selected shipping tier where available."
  },
  checkout_completed: {
    status: "integration-required",
    emitter: "Shopify Web Pixel bridge",
    closeout: "Requires a Shopify Custom Pixel or App Pixel subscription to checkout_completed; this is observed web analytics and does not replace signed Shopify order/payment webhooks for trusted purchase revenue."
  },
  purchase: {
    status: "server-workflow",
    emitter: "service-command Shopify webhook recorder",
    closeout: "Server records paid Shopify orders with transaction and currency context."
  },
  refund: {
    status: "server-workflow",
    emitter: "service-command Shopify webhook recorder",
    closeout: "Server records Shopify refund webhooks with transaction and currency context."
  },
  search: {
    status: "integration-required",
    emitter: "search UI integration",
    closeout: "Generic search submissions use search_submitted; this GA4 search event needs query semantics."
  },
  generate_lead: {
    status: "server-provider",
    emitter: "service-command accepted lead fanout",
    closeout: "Accepted leads fan out to provider destinations as GA4 generate_lead; browser runtime calls cannot create accepted-lead provider rows."
  },
  cta_clicked: {
    status: "template-data-track",
    emitter: "generated template data-track attributes",
    closeout: "Business-intent generated-template CTAs are annotated; routine navigation stays untracked to avoid event noise."
  },
  phone_clicked: {
    status: "auto-runtime",
    emitter: "attachOutboundAndDownloadObserver",
    closeout: "Runtime click observer emits this from tel: links."
  },
  email_clicked: {
    status: "auto-runtime",
    emitter: "attachOutboundAndDownloadObserver",
    closeout: "Runtime click observer emits this from mailto: links."
  },
  email_landing_attributed: {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics Resend landing attribution dispatch",
    closeout: "Runtime emits one scrubbed first-party attribution event when a landing URL carries Resend campaign/contact/click IDs."
  },
  form_viewed: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime observes generated forms once they enter the mounted document."
  },
  form_started: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits on first form interaction."
  },
  form_submit_attempted: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits before form submit handling and preserves allowed first-party form fields."
  },
  form_submitted: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits after the browser submit event; generated-site helpers also emit this as browser-sourced diagnostic telemetry with submit_outcome=accepted_response after an accepted response. Server lead acceptance records lead_submitted separately."
  },
  lead_submitted: {
    status: "server-workflow",
    emitter: "service-command accepted lead recorder",
    closeout: "Server records accepted leads after submission persistence and scopes vendor fanout."
  },
  newsletter_submitted: {
    status: "integration-required",
    emitter: "newsletter form integration",
    closeout: "Requires a real newsletter submission surface and submission result."
  },
  landing_view: {
    status: "template-data-track",
    emitter: "landing-page template annotation",
    closeout: "Supported through data-track on landing-specific templates; generic pages use page_view."
  },
  video_started: {
    status: "auto-runtime",
    emitter: "attachVideoObserver",
    closeout: "Runtime observes video play events."
  },
  video_progress: {
    status: "auto-runtime",
    emitter: "attachVideoObserver",
    closeout: "Runtime emits bounded progress milestones for observed videos."
  },
  video_completed: {
    status: "auto-runtime",
    emitter: "attachVideoObserver",
    closeout: "Runtime observes video ended events."
  },
  scroll_depth: {
    status: "auto-runtime",
    emitter: "attachScrollObserver",
    closeout: "Runtime emits configured scroll thresholds."
  },
  time_on_page: {
    status: "auto-runtime",
    emitter: "attachTimeOnPageObserver",
    closeout: "Runtime emits bounded page time intervals while visible."
  },
  page_engaged: {
    status: "auto-runtime",
    emitter: "attachVisibilityObserver",
    closeout: "Runtime emits engagement when the page is hidden or a wired route transition completes."
  },
  section_viewed: {
    status: "auto-runtime",
    emitter: "attachSectionVisibilityObserver",
    closeout: "Runtime emits visible sections with stable section ids."
  },
  outbound_link_clicked: {
    status: "auto-runtime",
    emitter: "attachOutboundAndDownloadObserver",
    closeout: "Runtime emits external anchor clicks."
  },
  file_downloaded: {
    status: "auto-runtime",
    emitter: "attachOutboundAndDownloadObserver",
    closeout: "Runtime emits common file-extension downloads."
  },
  search_started: {
    status: "integration-required",
    emitter: "search UI integration",
    closeout: "Requires explicit search UI focus/open semantics; generic submit observer cannot infer start intent safely."
  },
  search_submitted: {
    status: "auto-runtime",
    emitter: "attachSearchObserver",
    closeout: "Runtime emits form submissions with search semantics."
  },
  search_zero_results: {
    status: "integration-required",
    emitter: "search results integration",
    closeout: "Requires result-count knowledge from the search backend/UI."
  },
  search_result_clicked: {
    status: "integration-required",
    emitter: "search results integration",
    closeout: "Requires result id/rank context from a search results component."
  },
  filter_applied: {
    status: "integration-required",
    emitter: "filter UI integration",
    closeout: "Requires filter-name/value context from listing widgets."
  },
  sort_changed: {
    status: "integration-required",
    emitter: "sort UI integration",
    closeout: "Requires sort option context from listing widgets."
  },
  gallery_item_viewed: {
    status: "template-data-track",
    emitter: "gallery component data-track attributes",
    closeout: "Supported through data-track where gallery components exist; no generic image observer is mounted."
  },
  faq_opened: {
    status: "template-data-track",
    emitter: "FAQ component data-track attributes",
    closeout: "Supported through data-track on FAQ toggles."
  },
  testimonial_viewed: {
    status: "template-data-track",
    emitter: "testimonial component data-track attributes",
    closeout: "Supported through data-track or section visibility on testimonial components."
  },
  resource_downloaded: {
    status: "template-data-track",
    emitter: "resource component data-track attributes",
    closeout: "Supported through data-track for gated/owned resources; generic file downloads remain file_downloaded."
  },
  newsletter_subscribed: {
    status: "template-data-track",
    emitter: "newsletter component data-track attributes",
    closeout: "Supported through data-track once newsletter widgets are present."
  },
  directions_clicked: {
    status: "template-data-track",
    emitter: "local template data-track attributes",
    closeout: "Use on map/directions CTAs where a directions URL or contact directions CTA exists."
  },
  map_opened: {
    status: "template-data-track",
    emitter: "map component data-track attributes",
    closeout: "Use on embedded map open controls where a map surface exists."
  },
  quote_requested: {
    status: "template-data-track",
    emitter: "lead-gen template data-track attributes",
    closeout: "Use on quote CTAs; final accepted submissions are recorded as lead_submitted."
  },
  calendar_handoff_clicked: {
    status: "template-data-track",
    emitter: "booking template data-track attributes",
    closeout: "Use on calendar/scheduler handoff links where configured."
  },
  booking_started: {
    status: "template-data-track",
    emitter: "booking template data-track attributes",
    closeout: "CTA-only template support; completion still requires a real booking provider or trusted server workflow."
  },
  booking_completed: {
    status: "integration-required",
    emitter: "booking provider/server integration",
    closeout: "Requires confirmation from a booking provider or backend workflow."
  },
  reservation_started: {
    status: "template-data-track",
    emitter: "restaurant template data-track attributes",
    closeout: "CTA-only template support in restaurant templates; completion still requires a reservation provider or trusted server workflow."
  },
  reservation_completed: {
    status: "integration-required",
    emitter: "reservation provider/server integration",
    closeout: "Requires reservation confirmation from provider or backend workflow."
  },
  chat_opened: {
    status: "integration-required",
    emitter: "chat widget integration",
    closeout: "Requires a chat widget with open events."
  },
  chat_message_sent: {
    status: "integration-required",
    emitter: "chat widget integration",
    closeout: "Requires chat-message lifecycle from the widget/provider."
  },
  form_field_completed: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits one value-free field-completion signal per completed form field; disable with NEXT_PUBLIC_ANALYTICS_FORM_FIELDS_ENABLED=false when cost/noise needs it."
  },
  form_validation_error: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits browser validation diagnostics for invalid fields."
  },
  form_validation_failed: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits aggregate failed-validation state."
  },
  form_abandoned: {
    status: "auto-runtime",
    emitter: "attachFormLifecycleObserver",
    closeout: "Runtime emits value-free abandonment on page exit/hidden for started forms that were not submitted; disable with NEXT_PUBLIC_ANALYTICS_FORM_ABANDONMENT_ENABLED=false."
  },
  multi_step_form_progressed: {
    status: "integration-required",
    emitter: "multi-step form component",
    closeout: "Requires a multi-step form component with step semantics."
  },
  copy_performed: {
    status: "auto-runtime",
    emitter: "attachSiteAnalyticsObservers",
    closeout: "Runtime helper emits copy counts and source metadata only; copied text remains out of scope."
  },
  active_time_tick: {
    status: "auto-runtime",
    emitter: "attachSiteAnalyticsObservers",
    closeout: "Runtime helper emits visible-tab active-time buckets only; pointer paths and raw interaction streams remain out of scope."
  },
  site_surface_viewed: {
    status: "integration-required",
    emitter: "landing/generated surface adapter",
    closeout: "The landing/generated surface adapter must explicitly emit this when integrated; it is not a global auto-runtime event until surface wiring, browser proof, and provider proof pass."
  },
  desktop_window_opened: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_focused: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_minimized: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_closed: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_moved: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_resized: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_maximized: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_window_restored: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  desktop_app_launched: {
    status: "integration-required",
    emitter: "9line landing desktop-shell adapter",
    closeout: "The 9line landing adapter must explicitly emit this event; it is not live until the landing repo wiring, browser proof, and provider proof pass."
  },
  js_error: {
    status: "auto-runtime",
    emitter: "attachErrorObservers",
    closeout: "Runtime emits sanitized JavaScript error diagnostics."
  },
  api_error: {
    status: "auto-runtime",
    emitter: "attachApiErrorObserver",
    closeout: "Runtime wraps fetch/XMLHttpRequest to emit sanitized 4xx/5xx/network failures while excluding analytics/vendor endpoints; disable with NEXT_PUBLIC_ANALYTICS_API_ERRORS_ENABLED=false."
  },
  asset_load_failed: {
    status: "auto-runtime",
    emitter: "attachErrorObservers",
    closeout: "Runtime emits sanitized resource load failures."
  },
  route_transition_failed: {
    status: "runtime-api",
    emitter: "createRouteTransitionTracker",
    closeout: "Runtime exposes a route tracker; app/router integration must wire it before this is live."
  },
  "404_viewed": {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics",
    closeout: "Runtime emits when mounted on a not-found route."
  },
  "500_viewed": {
    status: "auto-runtime",
    emitter: "mountSiteAnalytics",
    closeout: "Runtime emits when mounted on an error route."
  },
  rage_click: {
    status: "activation-gated",
    emitter: "advanced PostHog click diagnostics",
    closeout: "Disabled by default until privacy/product approval enables click diagnostics; native PostHog rows remain vendor behavior telemetry, not first-party truth."
  },
  dead_click: {
    status: "activation-gated",
    emitter: "advanced PostHog click diagnostics",
    closeout: "Disabled by default until privacy/product approval enables click diagnostics; native PostHog rows remain vendor behavior telemetry, not first-party truth."
  },
  web_vitals: {
    status: "auto-runtime",
    emitter: "attachWebVitalsObserver",
    closeout: "Runtime emits best-effort browser performance metrics and framework-supplied web vitals when provided; native PostHog web-vitals capture stays advanced-gated."
  },
  event_dropped: {
    status: "auto-runtime",
    emitter: "createSiteAnalyticsDispatcher",
    closeout: "Dispatcher emits first-party diagnostics when sampling, profile gates, or delivery constraints drop an event."
  },
  schema_violation: {
    status: "auto-runtime",
    emitter: "createSiteAnalyticsDispatcher and service-command ingest",
    closeout: "Dispatcher/ingest paths record validation failures without trusting client-supplied event class."
  },
  event_rate_limited: {
    status: "server-workflow",
    emitter: "service-command analytics rate limiter",
    closeout: "Server-side rate-limit handling owns this; browser code should not self-report trusted throttling."
  },
  sdk_error: {
    status: "auto-runtime",
    emitter: "attachErrorObservers",
    closeout: "Runtime emits bounded SDK/unhandled promise diagnostics."
  },
  vendor_delivery_failed: {
    status: "server-workflow",
    emitter: "service-command delivery ledger",
    closeout: "Server records failed vendor delivery attempts and replay diagnostics."
  },
  consent_state_initialized: {
    status: "auto-runtime",
    emitter: "generated analytics component consent bridge",
    closeout: "Generated sites emit initial consent state, including essential-only modes."
  },
  consent_state_updated: {
    status: "auto-runtime",
    emitter: "generated analytics component consent bridge",
    closeout: "Generated sites emit consent changes, including denied to granted transitions."
  },
  webhook_deduped: {
    status: "server-workflow",
    emitter: "service-command webhook handlers",
    closeout: "Server webhook dedupe paths own this first-party data-quality event."
  },
  identity_merged: {
    status: "server-workflow",
    emitter: "identity resolution workflow",
    closeout: "Requires backend identity merge workflow; browser identity only creates anonymous ids."
  },
  lead_qualified: {
    status: "integration-required",
    emitter: "CRM/sales lifecycle integration",
    closeout: "Registry/schema mappings exist, but no connected CRM or sales-pipeline state workflow is proven."
  },
  lead_contacted: {
    status: "integration-required",
    emitter: "CRM/sales lifecycle integration",
    closeout: "Registry/schema mappings exist, but no connected CRM or sales-pipeline contact workflow is proven."
  },
  lead_booked: {
    status: "integration-required",
    emitter: "CRM/booking lifecycle integration",
    closeout: "Registry/schema mappings exist, but no connected CRM booking state or booking provider workflow is proven."
  },
  lead_won: {
    status: "integration-required",
    emitter: "CRM/sales lifecycle integration",
    closeout: "Registry/schema mappings exist, but no connected CRM or sales-pipeline won workflow is proven."
  },
  lead_lost: {
    status: "integration-required",
    emitter: "CRM/sales lifecycle integration",
    closeout: "Registry/schema mappings exist, but no connected CRM or sales-pipeline lost workflow is proven."
  },
  booking_confirmed: {
    status: "integration-required",
    emitter: "booking provider/server integration",
    closeout: "Registry/schema mappings exist, but no confirmed booking provider or trusted backend completion path is proven."
  },
  chargeback_received: {
    status: "integration-required",
    emitter: "payments/provider workflow",
    closeout: "Requires a trusted Stripe dispute/chargeback webhook or finance workflow; current Stripe payment-intent success handling does not prove chargebacks."
  },
  email_experiment_exposed: {
    status: "integration-required",
    emitter: "Resend campaign recipient assignment + first-party analytics ingest",
    closeout: "Requires one exposure per assigned email recipient with PostHog-compatible $feature/<experiment-key> properties before winner promotion is claimed."
  },
  feature_flag_exposure: {
    status: "runtime-api",
    emitter: "SiteAnalyticsRuntimeHandle.evaluateFeatureFlag",
    closeout: "Runtime emits once per session/flag evaluation and respects advanced governance gates."
  },
  experiment_exposure: {
    status: "runtime-api",
    emitter: "SiteAnalyticsRuntimeHandle.trackExperimentExposure",
    closeout: "Runtime API records explicit experiment exposure with variant context."
  },
  experiment_converted: {
    status: "runtime-api",
    emitter: "SiteAnalyticsRuntimeHandle.trackExperimentConversion",
    closeout: "Runtime API records explicit conversion context; server-side outcome policy still governs trusted lifecycle records."
  },
  survey_shown: {
    status: "activation-gated",
    emitter: "PostHog survey capability",
    closeout: "Disabled by default until surveys are approved for the site profile."
  },
  survey_dismissed: {
    status: "activation-gated",
    emitter: "PostHog survey capability",
    closeout: "Disabled by default until surveys are approved for the site profile."
  },
  survey_sent: {
    status: "activation-gated",
    emitter: "PostHog survey capability",
    closeout: "Disabled by default until surveys are approved for the site profile."
  },
  survey_abandoned: {
    status: "activation-gated",
    emitter: "PostHog survey capability",
    closeout: "Disabled by default until surveys are approved for the site profile."
  },
  cohort_matched: {
    status: "activation-gated",
    emitter: "PostHog cohort capability",
    closeout: "Disabled by default until cohort targeting is approved for the site profile."
  }
};

// src/embeds/posthog.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function PostHogDashboard({
  projectId,
  dashboardId,
  apiKey,
  host = "https://app.posthog.com",
  filters,
  className,
  style
}) {
  const iframeRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (filters && iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.addEventListener("load", () => {
        iframe.contentWindow?.postMessage(
          {
            type: "posthog:dashboard:filters",
            filters
          },
          host
        );
      });
    }
  }, [filters, host]);
  const embedUrl = new URL(`${host}/embedded/${projectId}/dashboard/${dashboardId}`);
  if (apiKey) {
    embedUrl.searchParams.set("api_key", apiKey);
  }
  if (filters) {
    embedUrl.searchParams.set("filters", JSON.stringify(filters));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "iframe",
    {
      ref: iframeRef,
      src: embedUrl.toString(),
      className,
      style: {
        width: "100%",
        height: "600px",
        border: "none",
        ...style
      },
      title: "PostHog Dashboard",
      sandbox: "allow-scripts allow-same-origin"
    }
  );
}

// src/embeds/superset.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function SupersetDashboard({
  supersetUrl,
  dashboardId,
  filters,
  guestToken,
  className,
  style
}) {
  const [embedUrl, setEmbedUrl] = (0, import_react6.useState)("");
  (0, import_react6.useEffect)(() => {
    async function getGuestToken() {
      if (guestToken) {
        buildEmbedUrl(guestToken);
        return;
      }
      try {
        const response = await fetch(`${supersetUrl}/api/v1/security/guest_token/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            resources: [
              {
                type: "dashboard",
                id: dashboardId
              }
            ],
            rls: [],
            // Row-level security rules
            user: {
              username: "guest",
              first_name: "Guest",
              last_name: "User"
            }
          })
        });
        const data = await response.json();
        buildEmbedUrl(data.token);
      } catch (error) {
        console.error("Failed to get Superset guest token:", error);
      }
    }
    function buildEmbedUrl(token) {
      const url = new URL(`${supersetUrl}/superset/dashboard/${dashboardId}/`);
      url.searchParams.set("standalone", "3");
      url.searchParams.set("guest_token", token);
      if (filters) {
        const nativeFilters = JSON.stringify(filters);
        url.searchParams.set("native_filters", nativeFilters);
      }
      setEmbedUrl(url.toString());
    }
    getGuestToken();
  }, [supersetUrl, dashboardId, filters, guestToken]);
  if (!embedUrl) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        className,
        style: {
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style
        },
        children: "Loading dashboard..."
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "iframe",
    {
      src: embedUrl,
      className,
      style: {
        width: "100%",
        height: "600px",
        border: "none",
        ...style
      },
      title: "Superset Dashboard",
      sandbox: "allow-scripts allow-same-origin allow-forms"
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ADVANCED_POSTHOG_MODULES,
  ATTRIBUTION_KEYS,
  ATTRIBUTION_STORAGE_KEY,
  ATTRIBUTION_STORAGE_VERSION,
  DEFAULT_ATTRIBUTION_TTL_MS,
  DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT,
  DEFAULT_FIRST_PARTY_FLUSH_INTERVAL_MS,
  DEFAULT_PACKS_BY_CAPABILITY,
  DEFAULT_SITE_ANALYTICS_CONTEXT_FIELDS,
  DEFAULT_SITE_ANALYTICS_MODES,
  GA4Provider,
  GOVERNED_SITE_ANALYTICS_CONTEXT_FIELDS,
  NON_COLLECTABLE_BROWSER_DEVICE_FIELDS,
  POSTHOG_GROUP_TYPES,
  PostHogDashboard,
  PostHogProvider,
  REGULATED_INDUSTRIES,
  RudderStackProvider,
  SHOPIFY_WEB_PIXEL_DEFAULT_EVENT_NAMES,
  SITE_ANALYTICS_EVENT_DEFINITIONS,
  SITE_ANALYTICS_EVENT_EMISSION_COVERAGE,
  SITE_ANALYTICS_EVENT_EMISSION_STATUSES,
  SITE_ANALYTICS_EVENT_SPEC_VERSION,
  SITE_ANALYTICS_PROVIDER_SCOPE_KEYS,
  SITE_ANALYTICS_REQUIRED_BASE_KEYS,
  SITE_ANALYTICS_SITE_SPECIFIC_LIVE_OVERRIDES,
  SupersetDashboard,
  UnifiedAnalyticsProvider,
  WEB_ANALYTICS_DATA_POINTS,
  WEB_ANALYTICS_DATA_POINT_IDS,
  analytics,
  annotatePosthogCaptureMetadata,
  anonymizeIpToSubnet,
  applySiteAnalyticsEventSink,
  assertTemplateAnalyticsMetadataSafe,
  assignExperimentVariant,
  attachActiveTimeObserver,
  attachApiErrorObserver,
  attachCopyObserver,
  attachErrorObservers,
  attachFormLifecycleObserver,
  attachOutboundAndDownloadObserver,
  attachScrollObserver,
  attachSearchObserver,
  attachSectionVisibilityObserver,
  attachSiteAnalyticsObservers,
  attachTimeOnPageObserver,
  attachVideoObserver,
  attachWebVitalsObserver,
  buildExperimentAssignmentId,
  buildExperimentExposureEvent,
  buildExperimentGroupAssignment,
  buildFirstPartyBatchEnvelope,
  buildGa4ConsentModeState,
  buildPosthogGroups,
  buildPosthogNativeOptions,
  buildProviderBaseProperties,
  buildSiteAnalyticsConsentUpdate,
  buildSiteAnalyticsContext,
  buildSiteAnalyticsContextSync,
  buildSiteAnalyticsIdentityResetDecision,
  buildSiteAnalyticsProviderProperties,
  buildTemplateAnalyticsMetadata,
  buildWebVitalsProperties,
  createFirstPartyDeliveryQueue,
  createRouteTransitionTracker,
  createShopifyWebPixelBridge,
  createSiteAnalyticsDispatcher,
  createSiteAnalyticsPersistentQueue,
  createWebVitalsReporter,
  disabledAdvancedPosthogModules,
  getEnabledPacksForProfile,
  getSiteAnalyticsEventDefinition,
  getSiteAnalyticsEventDestinations,
  getWebAnalyticsDataPoint,
  hashIpForCountedIdentifiers,
  identifySiteAnalyticsPerson,
  installApiErrorObserver,
  isAllowedExperimentGroupType,
  isEventEnabledForProfile,
  isRegulatedIndustry,
  isSafeEmailExperimentIdentifier,
  isSiteAnalyticsVendorConsentGranted,
  mapShopifyWebPixelEvent,
  mountSiteAnalytics,
  normalizeIndustry,
  normalizeSiteAnalyticsConsentState,
  registerSiteAnalyticsContext,
  resolveAdvancedPosthogModules,
  resolveCollectionPolicy,
  resolveSiteAnalyticsAttributionSnapshot,
  resolveSiteAnalyticsEntityContext,
  resolveSiteAnalyticsFlushPolicy,
  resolveSiteAnalyticsModes,
  resolveSiteAnalyticsNetworkState,
  restrictContextForPolicy,
  sanitizePosthogNativeBeforeSendEvent,
  sanitizePosthogNativeProperties,
  setSiteAnalyticsReplay,
  shouldCaptureNativeBehaviorEvent,
  shouldCollectExactIp,
  shouldCollectHighEntropyFingerprinting,
  shouldResetSiteAnalyticsIdentityOnConsentTransition,
  trackSiteAnalyticsEvent,
  useAnalytics,
  useGA4,
  usePostHog,
  useRudderStack,
  validateSiteAnalyticsEvent
});
