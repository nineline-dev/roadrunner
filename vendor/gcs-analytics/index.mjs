// src/posthog.tsx
import { createContext, useContext, useEffect, useState } from "react";
import posthog from "posthog-js";
import { jsx } from "react/jsx-runtime";
var PostHogContext = createContext(null);
function PostHogProvider({
  children,
  config
}) {
  const [client] = useState(() => {
    posthog.init(config.apiKey, {
      api_host: config.host || "https://app.posthog.com",
      ...config.options
    });
    return {
      track: (event, properties) => {
        posthog.capture(event, properties);
      },
      identify: (userId, traits) => {
        posthog.identify(userId, traits);
      },
      page: (name, properties) => {
        posthog.capture("$pageview", {
          $current_url: window.location.href,
          $page_name: name,
          ...properties
        });
      },
      group: (groupId, traits) => {
        posthog.group("company", groupId, traits);
      },
      alias: (userId, previousId) => {
        posthog.alias(userId, previousId);
      },
      reset: () => {
        posthog.reset();
      }
    };
  });
  useEffect(() => {
    return () => {
      posthog.opt_out_capturing();
    };
  }, []);
  return /* @__PURE__ */ jsx(PostHogContext.Provider, { value: client, children });
}
function usePostHog() {
  const context = useContext(PostHogContext);
  if (!context) {
    throw new Error("usePostHog must be used within PostHogProvider");
  }
  return context;
}

// src/ga4.tsx
import { createContext as createContext2, useContext as useContext2, useState as useState2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var GA4Context = createContext2(null);
function GA4Provider({
  children,
  config
}) {
  const [client] = useState2(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args) {
        window.dataLayer?.push(args);
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
  return /* @__PURE__ */ jsx2(GA4Context.Provider, { value: client, children });
}
function useGA4() {
  const context = useContext2(GA4Context);
  if (!context) {
    throw new Error("useGA4 must be used within GA4Provider");
  }
  return context;
}

// src/rudderstack.tsx
import { createContext as createContext3, useContext as useContext3, useEffect as useEffect2, useState as useState3 } from "react";
import { RudderAnalytics } from "@rudderstack/analytics-js";
import { jsx as jsx3 } from "react/jsx-runtime";
var RudderStackContext = createContext3(null);
var asRudderObject = (value) => value;
function RudderStackProvider({
  children,
  config
}) {
  const [client] = useState3(() => {
    const rudderanalytics = new RudderAnalytics();
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
  useEffect2(() => {
    return () => {
    };
  }, []);
  return /* @__PURE__ */ jsx3(RudderStackContext.Provider, { value: client, children });
}
function useRudderStack() {
  const context = useContext3(RudderStackContext);
  if (!context) {
    throw new Error("useRudderStack must be used within RudderStackProvider");
  }
  return context;
}

// src/unified.tsx
import React4, { createContext as createContext4, useContext as useContext4 } from "react";
import posthog2 from "posthog-js";
import { jsx as jsx4 } from "react/jsx-runtime";
var getRudder = () => typeof window === "undefined" ? void 0 : window.rudderanalytics;
var asRudderObject2 = (value) => value;
var analytics = {
  track: (event, properties) => {
    posthog2?.capture(event, properties);
    window.gtag?.("event", event, properties);
    const rudder = getRudder();
    rudder?.track(event, asRudderObject2(properties));
  },
  identify: (userId, traits) => {
    posthog2?.identify(userId, traits);
    window.gtag?.("set", "user_properties", {
      user_id: userId,
      ...traits
    });
    const rudder = getRudder();
    rudder?.identify(userId, asRudderObject2(traits));
  },
  page: (name, properties) => {
    posthog2?.capture("$pageview", {
      $current_url: window.location.href,
      $page_name: name,
      ...properties
    });
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
    posthog2?.group("company", groupId, traits);
    const rudder = getRudder();
    rudder?.group(groupId, asRudderObject2(traits));
  },
  alias: (userId, previousId) => {
    posthog2?.alias(userId, previousId);
    const rudder = getRudder();
    rudder?.alias(userId, { previousId });
  },
  reset: () => {
    posthog2?.reset();
    window.gtag?.("set", "user_properties", {
      user_id: null
    });
    const rudder = getRudder();
    rudder?.reset();
  }
};
var UnifiedAnalyticsContext = createContext4(analytics);
var ensureRudderStack = (rudderstack, debug) => {
  const rudder = window.rudderanalytics = window.rudderanalytics || [];
  if (!rudder.methods) {
    rudder.methods = ["load", "page", "track", "identify", "alias", "group", "ready", "reset", "getAnonymousId", "setAnonymousId"];
    rudder.factory = (method) => function(...args) {
      args.unshift(method);
      rudder.push(args);
      return rudder;
    };
    rudder.methods.forEach((method) => {
      rudder[method] = rudder[method] || rudder.factory(method);
    });
  }
  if (!document.getElementById("gcs-rudderstack-runtime")) {
    const script = document.createElement("script");
    script.id = "gcs-rudderstack-runtime";
    script.async = true;
    script.src = "https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";
    document.head.appendChild(script);
  }
  rudder.load(rudderstack.writeKey, rudderstack.dataPlaneUrl);
  if (debug) rudder.ready(() => console.log("[Analytics] RudderStack initialized"));
};
function UnifiedAnalyticsProvider({
  children,
  config
}) {
  React4.useEffect(() => {
    if (config.posthog) {
      posthog2.init(config.posthog.apiKey, {
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
      window.gtag = function gtag(...args) {
        window.dataLayer?.push(args);
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
      ensureRudderStack(config.rudderstack, config.debug);
    }
  }, [config]);
  return /* @__PURE__ */ jsx4(UnifiedAnalyticsContext.Provider, { value: analytics, children });
}
function useAnalytics() {
  return useContext4(UnifiedAnalyticsContext);
}

// src/storefrontDispatcher.ts
import posthog4 from "posthog-js";

// src/storefrontRegistry.ts
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
    "diagnostics_performance"
  ],
  hybrid: [
    "core_engagement",
    "search_discovery",
    "content_media",
    "local_service_intent",
    "form_quality",
    "diagnostics_performance"
  ]
};
var STOREFRONT_EVENT_DEFINITIONS = {
  page_view: { pack: "core_engagement", destinations: ["ga4", "posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["page_url"] },
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
  purchase: { pack: "core_engagement", destinations: ["ga4", "posthog"], event_class: "OUTCOME", required_capabilities: ["ecommerce"], required_properties: ["transaction_id", "currency"] },
  refund: { pack: "core_engagement", destinations: ["ga4", "posthog"], event_class: "OUTCOME", required_capabilities: ["ecommerce"], required_properties: ["transaction_id", "currency"] },
  search: { pack: "search_discovery", destinations: ["ga4", "posthog"] },
  generate_lead: { pack: "form_quality", destinations: ["ga4", "posthog"], event_class: "OUTCOME", required_properties: ["submission_id"] },
  cta_clicked: { pack: "local_service_intent", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "restaurant", "hybrid"] },
  phone_clicked: { pack: "local_service_intent", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "restaurant", "hybrid"] },
  email_clicked: { pack: "local_service_intent", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "restaurant", "hybrid"] },
  form_viewed: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  form_started: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  form_submit_attempted: { pack: "form_quality", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_capabilities: ["lead_gen", "booking", "hybrid"] },
  form_submitted: { pack: "form_quality", destinations: ["posthog"], required_capabilities: ["lead_gen", "booking", "hybrid"] },
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
  js_error: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  api_error: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  asset_load_failed: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  route_transition_failed: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  "404_viewed": { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  "500_viewed": { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  rage_click: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  dead_click: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
  web_vitals: { pack: "diagnostics_performance", destinations: ["posthog"], event_class: "DIAGNOSTIC" },
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
  feature_flag_exposure: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["flag_key", "flag_variant"] },
  experiment_exposure: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["experiment_key", "experiment_variant"] },
  experiment_converted: { pack: "experimentation", destinations: ["posthog"], event_class: "OUTCOME", required_properties: ["experiment_key", "experiment_variant", "conversion_name"] },
  survey_shown: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  survey_dismissed: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  survey_sent: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  survey_abandoned: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["survey_key"] },
  cohort_matched: { pack: "experimentation", destinations: ["posthog", "first_party"], event_class: "DIAGNOSTIC", required_properties: ["cohort_key"] }
};
var getStorefrontEventDefinition = (name) => STOREFRONT_EVENT_DEFINITIONS[name];
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
  packs.add("outcome_lifecycle");
  return Array.from(packs);
};
var isEventEnabledForProfile = (profile, eventName) => {
  const definition = getStorefrontEventDefinition(eventName);
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

// src/storefront.ts
import posthog3 from "posthog-js";

// src/storefrontModes.ts
var STOREFRONT_EVENT_SPEC_VERSION = 1;
var STOREFRONT_REQUIRED_BASE_KEYS = [
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
var DEFAULT_STOREFRONT_ANALYTICS_MODES = {
  eventPipelineMode: "first_party",
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
var resolveStorefrontAnalyticsModes = (input = {}) => ({
  eventPipelineMode: asPipelineMode(input.eventPipelineMode ?? input.EVENT_PIPELINE_MODE) ?? DEFAULT_STOREFRONT_ANALYTICS_MODES.eventPipelineMode,
  eventSink: asEventSink(input.eventSink ?? input.EVENT_SINK) ?? DEFAULT_STOREFRONT_ANALYTICS_MODES.eventSink,
  posthogMode: asPosthogMode(input.posthogMode ?? input.POSTHOG_MODE) ?? DEFAULT_STOREFRONT_ANALYTICS_MODES.posthogMode,
  rudderstackEnabled: input.rudderstackEnabled === true
});
var applyStorefrontEventSink = (destinations, sink) => {
  if (!sink) return destinations;
  if (sink === "none" || sink === "rudderstack") {
    return destinations.filter((destination) => destination === "first_party");
  }
  return destinations.filter((destination) => destination === "first_party" || destination === sink);
};

// src/storefront.ts
var REQUIRED_BASE_KEYS = STOREFRONT_REQUIRED_BASE_KEYS;
var POSTHOG_PII_BLOCKLIST = /* @__PURE__ */ new Set([
  "email",
  "phone",
  "name",
  "message",
  "message_body",
  "free_text",
  "lead_message",
  "address",
  "street",
  "city",
  "zip",
  "postal_code",
  "region"
]);
var isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
var hasValue = (value) => value !== null && value !== void 0 && !(typeof value === "string" && value.trim().length === 0);
var toPosthogEventName = (name) => name === "page_view" ? "$pageview" : name;
var shouldSendToGa4 = (name) => (getStorefrontEventDefinition(name)?.destinations ?? []).includes("ga4");
var sanitizePosthogProperties = (properties) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    if (POSTHOG_PII_BLOCKLIST.has(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = value;
  }
  return sanitized;
};
var getStorefrontEventDestinations = (name) => ({
  posthog: (getStorefrontEventDefinition(name)?.destinations ?? []).includes("posthog"),
  ga4: shouldSendToGa4(name),
  firstPartyOnly: (() => {
    const destinations = getStorefrontEventDefinition(name)?.destinations ?? [];
    return destinations.length === 1 && destinations[0] === "first_party";
  })()
});
var validateStorefrontEvent = (event) => {
  const errors = [];
  const props = event.properties;
  const definition = getStorefrontEventDefinition(event.name);
  if (!definition) {
    return {
      valid: false,
      errors: [`Unknown storefront event: ${event.name}`]
    };
  }
  for (const key of REQUIRED_BASE_KEYS) {
    const value = props[key];
    if (!hasValue(value)) {
      errors.push(`Missing required property: ${key}`);
    }
  }
  if (props.event_spec_version !== STOREFRONT_EVENT_SPEC_VERSION) {
    errors.push("event_spec_version must be " + STOREFRONT_EVENT_SPEC_VERSION);
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
var trackStorefrontEvent = (event) => {
  const validation = validateStorefrontEvent(event);
  if (!validation.valid) {
    throw new Error(`Invalid storefront analytics event: ${validation.errors.join("; ")}`);
  }
  const properties = sanitizePosthogProperties(event.properties);
  posthog3.capture(toPosthogEventName(event.name), properties);
  if (typeof window !== "undefined" && window.gtag && shouldSendToGa4(event.name)) {
    window.gtag("event", event.name, properties);
  }
};
var identifyStorefrontPerson = (distinctId, properties) => {
  posthog3.identify(distinctId, properties);
};
var registerStorefrontContext = (properties) => {
  posthog3.register(properties);
};
var setStorefrontReplay = (enabled) => {
  if (enabled) {
    posthog3.startSessionRecording();
    return;
  }
  posthog3.stopSessionRecording();
};

// src/storefrontDispatcher.ts
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
var POSTHOG_EXPOSURE_EVENT_NAMES = /* @__PURE__ */ new Set([
  "feature_flag_exposure",
  "experiment_exposure"
]);
var toPosthogEventName2 = (name) => {
  if (name === "page_view") return "$pageview";
  if (POSTHOG_EXPOSURE_EVENT_NAMES.has(name)) return "$feature_flag_called";
  return name;
};
var sanitizePosthogProperties2 = (properties) => {
  const blocklist = /* @__PURE__ */ new Set([
    "email",
    "phone",
    "name",
    "message",
    "message_body",
    "free_text",
    "lead_message",
    "address",
    "street",
    "city",
    "zip",
    "postal_code",
    "region"
  ]);
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    if (blocklist.has(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = value;
  }
  return sanitized;
};
var withPosthogGroups = (properties) => {
  const customerAccountId = typeof properties.customer_account_id === "string" ? properties.customer_account_id.trim() : "";
  if (!customerAccountId) return properties;
  return {
    "$groups": {
      customer_account: customerAccountId
    },
    ...properties
  };
};
var sanitizeGa4Properties = (properties) => {
  const blocklist = /* @__PURE__ */ new Set([
    "email",
    "phone",
    "name",
    "message",
    "message_body",
    "free_text",
    "lead_message",
    "address",
    "street",
    "city",
    "zip",
    "postal_code",
    "region"
  ]);
  const sanitized = {};
  for (const [key, value] of Object.entries(properties)) {
    if (blocklist.has(key)) continue;
    if (value === void 0) continue;
    sanitized[key] = value;
  }
  return sanitized;
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
  const definition = getStorefrontEventDefinition(eventName);
  if (!definition) return false;
  const rate = resolveSampleRate(profile, eventName, definition.pack);
  if (rate >= 1) return true;
  if (rate <= 0) return false;
  return Math.random() <= rate;
};
var getEventDestinations = (profile, eventName, eventSink) => {
  const definition = getStorefrontEventDefinition(eventName);
  if (!definition) return [];
  const allowed = definition.destinations.filter((destination) => {
    if (destination === "ga4" && !profile.ga4_extended_events_enabled && !LEGACY_GA4_EVENT_NAMES.has(eventName)) {
      return false;
    }
    if (destination === "first_party" && !profile.quality_events_enabled && definition.pack === "data_quality") {
      return false;
    }
    return true;
  });
  return applyStorefrontEventSink(allowed, eventSink);
};
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
var firstPartyBrowserIngestEnabled = (config) => config.firstPartyBrowserIngestEnabled === true || config.firstPartyBrowserIngestEnabled === "true";
var firstPartyBrowserEventAllowed = (config, eventName) => {
  if (!firstPartyBrowserIngestEnabled(config)) return false;
  const configured = config.firstPartyBrowserEventAllowlist;
  if (Array.isArray(configured) && configured.length) {
    return configured.includes(eventName);
  }
  if (typeof configured === "string" && configured.trim()) {
    return configured.split(",").map((value) => value.trim()).filter(Boolean).includes(eventName);
  }
  return false;
};
var sendToFirstParty = async (config, event) => {
  const endpoint = resolveFirstPartyEndpoint(config);
  if (!endpoint) return;
  const fetchImpl = config.fetchImpl ?? (typeof fetch !== "undefined" ? fetch.bind(globalThis) : void 0);
  if (!fetchImpl) return;
  const definition = getStorefrontEventDefinition(event.name);
  if (!definition) return;
  const properties = event.properties;
  await fetchImpl(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...config.firstPartyHeaders ?? {}
    },
    body: JSON.stringify({
      event_name: event.name,
      event_class: definition.event_class ?? "DIAGNOSTIC",
      source_of_truth: properties.source_of_truth ?? "browser",
      dedupe_key: properties.dedupe_key ?? properties.event_id,
      payload: event.properties
    })
  }).catch((error) => {
    console.warn("First-party analytics dispatch failed", { event: event.name, error: String(error) });
  });
};
var reportSchemaViolation = async (config, event, errors, eventSink) => {
  if (event.name === "schema_violation") return;
  if (!getEventDestinations(config.profile, "schema_violation", eventSink).includes("first_party")) return;
  if (!firstPartyBrowserEventAllowed(config, "schema_violation")) return;
  const properties = event.properties;
  await sendToFirstParty(config, {
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
var createStorefrontDispatcher = (config) => {
  const modes = resolveStorefrontAnalyticsModes(config);
  const eventSink = config.eventSink ? modes.eventSink : void 0;
  const dispatch = async (event) => {
    const validation = validateStorefrontEvent(event);
    if (!validation.valid) {
      await reportSchemaViolation(config, event, validation.errors, eventSink);
      return validation;
    }
    if (!isEventEnabledForProfile(config.profile, event.name)) {
      return { valid: false, errors: ["Event disabled by capability/profile"] };
    }
    if (!shouldSampleEvent(config.profile, event.name)) {
      return { valid: true, errors: [] };
    }
    const properties = event.properties;
    const destinations = getEventDestinations(config.profile, event.name, eventSink);
    if (modes.eventPipelineMode === "first_party" && destinations.includes("first_party") && firstPartyBrowserEventAllowed(config, event.name)) {
      await sendToFirstParty(config, event);
    }
    if (destinations.includes("posthog")) {
      posthog4.capture(toPosthogEventName2(event.name), sanitizePosthogProperties2({
        ...POSTHOG_EXPOSURE_EVENT_NAMES.has(event.name) ? { gcs_event_name: event.name } : {},
        ...withPosthogGroups(properties)
      }));
    }
    if (destinations.includes("ga4") && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event.name, sanitizeGa4Properties(properties));
    }
    if (modes.eventPipelineMode === "vendor_first" && destinations.includes("first_party") && firstPartyBrowserEventAllowed(config, event.name)) {
      await sendToFirstParty(config, event);
    }
    return validation;
  };
  return {
    dispatch,
    getEnabledPacks: () => getEnabledPacksForProfile(config.profile),
    getEventDestinations: (eventName) => getEventDestinations(config.profile, eventName, eventSink),
    isEventEnabled: (eventName) => isEventEnabledForProfile(config.profile, eventName),
    shouldSample: (eventName) => shouldSampleEvent(config.profile, eventName)
  };
};

// src/storefrontRuntime.ts
import posthog6 from "posthog-js";

// src/storefrontObservers.ts
import posthog5 from "posthog-js";
var noopHandle = {
  cleanup: () => void 0
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
    cleanup: () => window.removeEventListener("scroll", onScroll)
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
      if (url.host !== currentHost && dispatcher.isEventEnabled("outbound_link_clicked")) {
        void dispatcher.dispatch(buildEvent(baseEventFactory, "outbound_link_clicked", {
          endpoint: url.origin
        }));
      }
      const match = url.pathname.match(/\.([a-zA-Z0-9]{1,8})$/);
      if (match && dispatcher.isEventEnabled("file_downloaded")) {
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
var attachVideoObserver = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof document === "undefined") return noopHandle;
  const listeners = [];
  const videos = Array.from(document.querySelectorAll("video"));
  for (const video of videos) {
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
      if (progress > 0 && progress % 25 === 0) {
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
  baseEventFactory
}) => {
  if (typeof document === "undefined") return noopHandle;
  const started = /* @__PURE__ */ new WeakSet();
  const viewed = /* @__PURE__ */ new WeakSet();
  const dispatchFormEvent = (form, eventName, extra = {}) => {
    void dispatcher.dispatch(buildEvent(baseEventFactory, eventName, {
      lead_form_id: form.id || form.getAttribute("name"),
      ...extra
    }));
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
    const target = event.target instanceof HTMLElement ? event.target.closest("form") : null;
    if (!(target instanceof HTMLFormElement) || started.has(target)) return;
    markViewed(target);
    started.add(target);
    dispatchFormEvent(target, "form_started");
  };
  const onSubmit = (event) => {
    const target = event.target instanceof HTMLFormElement ? event.target : null;
    if (!target) return;
    markViewed(target);
    if (dispatcher.isEventEnabled("form_submit_attempted")) {
      dispatchFormEvent(target, "form_submit_attempted");
    }
    dispatchFormEvent(target, "form_submitted");
  };
  const onInvalid = (event) => {
    const target = event.target instanceof HTMLElement ? event.target.closest("form") : null;
    if (!(target instanceof HTMLFormElement)) return;
    markViewed(target);
    if (dispatcher.isEventEnabled("form_validation_error")) {
      dispatchFormEvent(target, "form_validation_error");
    }
    if (dispatcher.isEventEnabled("form_validation_failed")) {
      dispatchFormEvent(target, "form_validation_failed");
    }
  };
  document.addEventListener("focusin", onFocusIn, true);
  document.addEventListener("submit", onSubmit, true);
  document.addEventListener("invalid", onInvalid, true);
  return {
    cleanup: () => {
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("submit", onSubmit, true);
      document.removeEventListener("invalid", onInvalid, true);
    }
  };
};
var attachErrorObservers = ({
  dispatcher,
  baseEventFactory
}) => {
  if (typeof window === "undefined") return noopHandle;
  const onError = (event) => {
    if (!dispatcher.isEventEnabled("js_error")) return;
    posthog5.captureException?.(event.error ?? new Error(event.message));
    void dispatcher.dispatch(buildEvent(baseEventFactory, "js_error", {
      endpoint: event.filename || null,
      validation_errors: [event.message]
    }));
  };
  const onUnhandled = (event) => {
    if (!dispatcher.isEventEnabled("sdk_error")) return;
    posthog5.captureException?.(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
    void dispatcher.dispatch(buildEvent(baseEventFactory, "sdk_error", {
      validation_errors: [String(event.reason)]
    }));
  };
  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onUnhandled);
  return {
    cleanup: () => {
      window.removeEventListener("error", onError);
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
            media_type: type,
            latency_ms: Math.round(entry.duration || entry.startTime || 0)
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
        validation_errors: [reason]
      }));
    }
  };
};

// src/storefrontRuntime.ts
var SESSION_KEY = "gcs_session_id";
var ANONYMOUS_KEY = "gcs_anonymous_id";
var ANONYMOUS_COOKIE = "gcs_anonymous_id";
var RUNTIME_STARTED_AT = Date.now();
var noopValidation = { valid: true, errors: [] };
var canUseBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
var randomIdFallbackCounter = 0;
var randomId = () => {
  try {
    const globalCrypto = typeof globalThis !== "undefined" ? globalThis.crypto : void 0;
    if (globalCrypto && typeof globalCrypto.randomUUID === "function") {
      return globalCrypto.randomUUID();
    }
    if (globalCrypto && typeof globalCrypto.getRandomValues === "function") {
      const bytes = new Uint8Array(16);
      globalCrypto.getRandomValues(bytes);
      bytes[6] = bytes[6] & 15 | 64;
      bytes[8] = bytes[8] & 63 | 128;
      const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
      return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10, 16).join("")}`;
    }
  } catch {
  }
  randomIdFallbackCounter = (randomIdFallbackCounter + 1) % Number.MAX_SAFE_INTEGER;
  return `id-${Date.now()}-${randomIdFallbackCounter}`;
};
var readCookie = (name) => {
  if (!canUseBrowser()) return null;
  const match = document.cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
};
var readGaClientId = () => {
  const value = readCookie("_ga");
  if (!value) return null;
  const parts = value.split(".").filter(Boolean);
  return parts.length >= 2 ? parts.slice(-2).join(".") : value;
};
var readGaSessionId = () => {
  if (!canUseBrowser()) return null;
  const cookie = document.cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith("_ga_") && !part.startsWith("_ga="));
  if (!cookie) return null;
  const value = decodeURIComponent(cookie.split("=").slice(1).join("="));
  const match = value.match(/(?:^|[.$])s([0-9]+)/);
  return match?.[1] ?? null;
};
var buildGa4ConsentState = (state) => {
  const granted = state === "granted" || state === "accepted_override";
  const value = granted ? "granted" : "denied";
  return {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value
  };
};
var writeCookie = (name, value) => {
  if (!canUseBrowser()) return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = name + "=" + encodeURIComponent(value) + "; Path=/; Max-Age=" + 60 * 60 * 24 * 180 + "; SameSite=Lax" + secure;
};
var getSessionState = () => {
  if (!canUseBrowser()) return { id: randomId(), created: true };
  const existing = window.sessionStorage.getItem(SESSION_KEY);
  if (existing) return { id: existing, created: false };
  const id = randomId();
  window.sessionStorage.setItem(SESSION_KEY, id);
  return { id, created: true };
};
var getSessionId = () => {
  return getSessionState().id;
};
var getAnonymousState = (config) => {
  if (!canUseBrowser()) return { id: randomId(), created: true };
  if (config.profile.fingerprinting_mode === "OFF") {
    return { id: getSessionId(), created: false };
  }
  const existing = readCookie(ANONYMOUS_COOKIE) ?? window.localStorage.getItem(ANONYMOUS_KEY);
  if (existing) return { id: existing, created: false };
  const id = randomId();
  writeCookie(ANONYMOUS_COOKIE, id);
  window.localStorage.setItem(ANONYMOUS_KEY, id);
  return { id, created: true };
};
var getAnonymousId = (config) => {
  return getAnonymousState(config).id;
};
var readQueryProperties = () => {
  if (!canUseBrowser()) return {};
  const params = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gbraid",
    "wbraid",
    "fbclid"
  ];
  return Object.fromEntries(keys.map((key) => [key, params.get(key)]));
};
var readPageCategory = () => {
  if (!canUseBrowser()) return null;
  return document.querySelector('meta[name="page-category"]')?.getAttribute("content") ?? document.body?.dataset.pageCategory ?? null;
};
var analyticsAllowed = (config) => config.consentState === "granted" || config.consentState === "accepted_override";
var buildBaseProperties = (config) => ({
  event_id: randomId(),
  event_spec_version: STOREFRONT_EVENT_SPEC_VERSION,
  sent_at: (/* @__PURE__ */ new Date()).toISOString(),
  site_id: config.profile.site_id,
  customer_account_id: config.profile.customer_account_id,
  global_id: config.globalId ?? null,
  session_id: getSessionId(),
  anonymous_id: getAnonymousId(config),
  page_url: canUseBrowser() ? window.location.href : "",
  path: canUseBrowser() ? window.location.pathname : "",
  referrer: canUseBrowser() ? document.referrer || null : null,
  site_capabilities: config.profile.capabilities,
  consent_state: config.consentState,
  ga_client_id: readGaClientId(),
  ga_session_id: readGaSessionId(),
  engagement_time_msec: Math.max(1, Date.now() - RUNTIME_STARTED_AT),
  page_category: config.pageCategory ?? readPageCategory(),
  ...readQueryProperties()
});
var buildEvent2 = (config, name, properties = {}) => ({
  name,
  properties: {
    ...buildBaseProperties(config),
    ...properties
  }
});
var buildFeatureFlagExposureProperties = (flagKey, flagVariant, properties = {}) => ({
  ...properties,
  flag_key: flagKey,
  flag_variant: flagVariant,
  variant: flagVariant,
  "$feature_flag": flagKey,
  "$feature_flag_response": flagVariant,
  ["$feature/" + flagKey]: flagVariant
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
var mountGa4 = (gaId) => {
  if (!canUseBrowser() || !gaId || document.getElementById("gcs-ga4-runtime"))
    return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args) {
    window.dataLayer?.push(args);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });
  const script = document.createElement("script");
  script.id = "gcs-ga4-runtime";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId);
  document.head.appendChild(script);
  window.gtag("js", /* @__PURE__ */ new Date());
  window.gtag("config", gaId, { send_page_view: false });
};
var mountPosthog = (config) => {
  const modes = resolveStorefrontAnalyticsModes(config);
  if (modes.eventSink !== "posthog" || !config.posthogKey) return;
  const posthogOptions = {
    api_host: config.posthogHost || "https://us.posthog.com",
    defaults: "2025-11-30",
    person_profiles: "identified_only",
    cookieless_mode: "on_reject",
    capture_pageview: false,
    disable_session_recording: !config.profile.replay_enabled,
    disable_surveys: true,
    enable_heatmaps: config.profile.replay_enabled,
    capture_dead_clicks: config.profile.replay_enabled,
    rageclick: config.profile.replay_enabled,
    external_scripts_inject_target: "head",
    request_batching: false,
    advanced_feature_flags_dedup_per_session: true
  };
  posthog6.init(config.posthogKey, posthogOptions);
  posthog6.opt_in_capturing();
  posthog6.register({
    site_id: config.profile.site_id,
    customer_account_id: config.profile.customer_account_id,
    global_id: config.globalId ?? void 0,
    site_capabilities: config.profile.capabilities
  });
  posthog6.group("customer_account", config.profile.customer_account_id, {
    site_id: config.profile.site_id,
    global_id: config.globalId ?? void 0
  });
  if (config.profile.replay_enabled) posthog6.startSessionRecording();
};
var mountStorefrontAnalytics = (config) => {
  if (!canUseBrowser() || !analyticsAllowed(config) || !config.profile.site_id || !config.profile.customer_account_id) {
    try {
      posthog6.opt_out_capturing();
    } catch {
    }
    return {
      cleanup: () => void 0,
      track: async () => noopValidation,
      identify: () => void 0,
      alias: () => void 0,
      trackConversion: async () => noopValidation,
      trackFeatureFlagExposure: async () => noopValidation,
      trackExperimentExposure: async () => noopValidation,
      trackExperimentConversion: async () => noopValidation
    };
  }
  const modes = resolveStorefrontAnalyticsModes(config);
  if (config.gaId && modes.eventSink !== "none" && modes.eventSink !== "rudderstack") {
    mountGa4(config.gaId);
    window.gtag?.("consent", "update", buildGa4ConsentState(config.consentState));
  }
  mountPosthog(config);
  const dispatcher = createStorefrontDispatcher(config);
  const baseEventFactory = () => ({ properties: buildBaseProperties(config) });
  const sessionState = getSessionState();
  const anonymousState = getAnonymousState(config);
  const handles = [
    attachScrollObserver({ dispatcher, baseEventFactory }),
    attachTimeOnPageObserver({ dispatcher, baseEventFactory }),
    attachOutboundAndDownloadObserver({ dispatcher, baseEventFactory }),
    attachVideoObserver({ dispatcher, baseEventFactory }),
    attachSearchObserver({ dispatcher, baseEventFactory }),
    attachFormLifecycleObserver({ dispatcher, baseEventFactory }),
    attachErrorObservers({ dispatcher, baseEventFactory }),
    attachWebVitalsObserver({ dispatcher, baseEventFactory }),
    attachDataTrackObserver({ dispatcher, baseEventFactory }),
    attachVisibilityObserver({ dispatcher, baseEventFactory })
  ];
  void dispatcher.dispatch(
    buildEvent2(config, sessionState.created ? "session_started" : "session_updated", {
      event_id: `session:${sessionState.id}:${Date.now()}`,
      session_id: sessionState.id,
      anonymous_id: anonymousState.id
    })
  );
  if (anonymousState.created) {
    void dispatcher.dispatch(
      buildEvent2(config, "anonymous_id_created", {
        event_id: `anonymous:${anonymousState.id}`,
        session_id: sessionState.id,
        anonymous_id: anonymousState.id
      })
    );
  }
  void dispatcher.dispatch(buildEvent2(config, "page_view"));
  const handle = {
    cleanup: () => {
      handles.forEach((observer) => observer.cleanup());
      if (window.gcsAnalytics === handle) delete window.gcsAnalytics;
    },
    track: (name, properties = {}) => dispatcher.dispatch(buildEvent2(config, name, properties)),
    identify: (distinctId, properties = {}) => posthog6.identify(distinctId, properties),
    alias: (distinctId, previousId) => posthog6.alias(distinctId, previousId),
    trackConversion: (submissionId, properties = {}) => dispatcher.dispatch(
      buildEvent2(config, "generate_lead", {
        submission_id: submissionId,
        ...properties
      })
    ),
    trackFeatureFlagExposure: (flagKey, flagVariant, properties = {}) => dispatcher.dispatch(
      buildEvent2(
        config,
        "feature_flag_exposure",
        buildFeatureFlagExposureProperties(flagKey, flagVariant, properties)
      )
    ),
    trackExperimentExposure: (experimentKey, experimentVariant, properties = {}) => dispatcher.dispatch(
      buildEvent2(
        config,
        "experiment_exposure",
        buildExperimentProperties(experimentKey, experimentVariant, properties)
      )
    ),
    trackExperimentConversion: (experimentKey, experimentVariant, conversionName, properties = {}) => dispatcher.dispatch(
      buildEvent2(config, "experiment_converted", {
        ...buildExperimentProperties(experimentKey, experimentVariant, properties),
        conversion_name: conversionName
      })
    )
  };
  window.gcsAnalytics = handle;
  return handle;
};

// src/embeds/posthog.tsx
import { useEffect as useEffect3, useRef } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function PostHogDashboard({
  projectId,
  dashboardId,
  apiKey,
  host = "https://app.posthog.com",
  filters,
  className,
  style
}) {
  const iframeRef = useRef(null);
  useEffect3(() => {
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
  return /* @__PURE__ */ jsx5(
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
import { useEffect as useEffect4, useState as useState4 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function SupersetDashboard({
  supersetUrl,
  dashboardId,
  filters,
  guestToken,
  className,
  style
}) {
  const [embedUrl, setEmbedUrl] = useState4("");
  useEffect4(() => {
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
    return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
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
export {
  DEFAULT_FIRST_PARTY_ANALYTICS_ENDPOINT,
  DEFAULT_PACKS_BY_CAPABILITY,
  DEFAULT_STOREFRONT_ANALYTICS_MODES,
  GA4Provider,
  PostHogDashboard,
  PostHogProvider,
  RudderStackProvider,
  STOREFRONT_EVENT_DEFINITIONS,
  STOREFRONT_EVENT_SPEC_VERSION,
  STOREFRONT_REQUIRED_BASE_KEYS,
  SupersetDashboard,
  UnifiedAnalyticsProvider,
  analytics,
  applyStorefrontEventSink,
  attachErrorObservers,
  attachFormLifecycleObserver,
  attachOutboundAndDownloadObserver,
  attachScrollObserver,
  attachSearchObserver,
  attachTimeOnPageObserver,
  attachVideoObserver,
  attachWebVitalsObserver,
  createRouteTransitionTracker,
  createStorefrontDispatcher,
  getEnabledPacksForProfile,
  getStorefrontEventDefinition,
  getStorefrontEventDestinations,
  identifyStorefrontPerson,
  isEventEnabledForProfile,
  mountStorefrontAnalytics,
  registerStorefrontContext,
  resolveStorefrontAnalyticsModes,
  setStorefrontReplay,
  trackStorefrontEvent,
  useAnalytics,
  useGA4,
  usePostHog,
  useRudderStack,
  validateStorefrontEvent
};
