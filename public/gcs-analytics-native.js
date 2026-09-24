"use strict";
var GcsAnalyticsNativeRuntime = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/siteAnalyticsRuntime.ts
  var siteAnalyticsRuntime_exports = {};
  __export(siteAnalyticsRuntime_exports, {
    mountSiteAnalytics: () => mountSiteAnalytics
  });

  // ../../node_modules/.pnpm/posthog-js@1.422.5_@types+react@19.2.16_react@19.2.7/node_modules/posthog-js/dist/module.js
  var t = "undefined" != typeof window ? window : void 0;
  var i = "undefined" != typeof globalThis ? globalThis : t;
  var e = null == i ? void 0 : i.navigator;
  var r = null == i ? void 0 : i.document;
  var s = null == i ? void 0 : i.location;
  var n = null == i ? void 0 : i.fetch;
  var o = null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest() ? i.XMLHttpRequest : void 0;
  var a = null == i ? void 0 : i.AbortController;
  var l = null == i ? void 0 : i.CompressionStream;
  var h = null == e ? void 0 : e.userAgent;
  function u() {
    return !(!t || false === t.navigator.onLine);
  }
  var d = "undefined" != typeof globalThis ? globalThis : t;
  d && "undefined" == typeof self && (d.self = d), d && "undefined" == typeof File && (d.File = function() {
  });
  var v = null != t ? t : {};
  var c = { DEBUG: false, LIB_VERSION: "0.7.0", LIB_NAME: "browser-common" };
  function f(t2, i2, e2, r2, s2, n2, o2) {
    try {
      var a2 = t2[n2](o2), l2 = a2.value;
    } catch (t3) {
      return void e2(t3);
    }
    a2.done ? i2(l2) : Promise.resolve(l2).then(r2, s2);
  }
  function p(t2) {
    return function() {
      var i2 = this, e2 = arguments;
      return new Promise((function(r2, s2) {
        var n2 = t2.apply(i2, e2);
        function o2(t3) {
          f(n2, r2, s2, o2, a2, "next", t3);
        }
        function a2(t3) {
          f(n2, r2, s2, o2, a2, "throw", t3);
        }
        o2(void 0);
      }));
    };
  }
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(t2) {
      for (var i2 = 1; arguments.length > i2; i2++) {
        var e2 = arguments[i2];
        for (var r2 in e2) ({}).hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
      }
      return t2;
    }, _.apply(null, arguments);
  }
  function g(t2, i2) {
    if (null == t2) return {};
    var e2 = {};
    for (var r2 in t2) if ({}.hasOwnProperty.call(t2, r2)) {
      if (-1 !== i2.indexOf(r2)) continue;
      e2[r2] = t2[r2];
    }
    return e2;
  }
  var m = (t2) => {
    if ("string" != typeof t2) return t2;
    try {
      return JSON.parse(t2);
    } catch (i2) {
      return t2;
    }
  };
  function y(t2) {
    return "string" == typeof t2 || t2;
  }
  function b(t2) {
    return "string" == typeof t2 ? t2 : void 0;
  }
  var w = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"];
  var x = (function(t2) {
    return t2.AnonymousId = "anonymous_id", t2.DistinctId = "distinct_id", t2.Props = "props", t2.EnablePersonProcessing = "enable_person_processing", t2.PersonMode = "person_mode", t2.FeatureFlagDetails = "feature_flag_details", t2.FeatureFlags = "feature_flags", t2.FeatureFlagPayloads = "feature_flag_payloads", t2.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", t2.BootstrapFeatureFlags = "bootstrap_feature_flags", t2.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", t2.OverrideFeatureFlags = "override_feature_flags", t2.Queue = "queue", t2.AiQueue = "ai_queue", t2.AiCaptureQueue = "ai_capture_queue", t2.LogsQueue = "logs_queue", t2.OptedOut = "opted_out", t2.SessionId = "session_id", t2.SessionStartTimestamp = "session_start_timestamp", t2.SessionLastTimestamp = "session_timestamp", t2.PersonProperties = "person_properties", t2.GroupProperties = "group_properties", t2.InstalledAppBuild = "installed_app_build", t2.InstalledAppVersion = "installed_app_version", t2.SessionReplay = "session_replay", t2.PushRegistered = "push_registered", t2.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", t2.SurveyLastSeenDate = "survey_last_seen_date", t2.SurveysSeen = "surveys_seen", t2.Surveys = "surveys", t2.RemoteConfig = "remote_config", t2.FlagsEndpointWasHit = "flags_endpoint_was_hit", t2.DeviceId = "device_id", t2;
  })({});
  var E = (function(t2) {
    return t2.GZipJS = "gzip-js", t2.Base64 = "base64", t2;
  })({});
  var S = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
  var k = ["token"];
  var T = 20;
  var P = 1e3;
  var R = 1e4;
  var C = "[Circular]";
  var O = "[Truncated]";
  var I = "[Unserializable]";
  var A = "[Function]";
  function F(t2) {
    for (var i2 = "", e2 = 0; t2.length > e2; e2++) {
      var r2 = t2.charCodeAt(e2);
      if (55296 > r2 || r2 > 56319) i2 += 56320 > r2 || r2 > 57343 ? t2[e2] : "\uFFFD";
      else {
        var s2 = t2.charCodeAt(e2 + 1);
        56320 > s2 || s2 > 57343 ? i2 += "\uFFFD" : (i2 += t2[e2] + t2[e2 + 1], e2++);
      }
    }
    return i2;
  }
  var M = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"];
  var D = function(t2, i2) {
    if (void 0 === i2 && (i2 = []), !t2) return false;
    var e2 = t2.toLowerCase();
    return M.concat(i2).some(((t3) => {
      var i3 = t3.toLowerCase();
      return -1 !== e2.indexOf(i3);
    }));
  };
  function N(t2, i2) {
    return -1 !== t2.indexOf(i2);
  }
  var L = function(t2) {
    return t2.trim();
  };
  var U = function(t2) {
    return t2.replace(/^\$/, "");
  };
  function j(t2) {
    var i2, e2 = [];
    return null !== (i2 = JSON.stringify(t2, (function(t3, i3) {
      if ("bigint" == typeof i3) return i3.toString();
      if ("function" != typeof i3 && "symbol" != typeof i3) {
        if (i3 instanceof Error) return { name: i3.name, message: i3.message, stack: i3.stack };
        if (i3 && "object" == typeof i3) {
          for (; e2.length > 0 && e2[e2.length - 1] !== this; ) e2.pop();
          if (e2.includes(i3)) return "[Circular]";
          e2.push(i3);
        }
        return i3;
      }
    }))) && void 0 !== i2 ? i2 : "null";
  }
  var B = Object.prototype;
  var z = B.hasOwnProperty;
  var q = B.toString;
  var H = Array.isArray || function(t2) {
    return "[object Array]" === q.call(t2);
  };
  var V = (t2) => "function" == typeof t2;
  var W = (t2) => t2 === Object(t2) && !H(t2);
  var G = (t2) => {
    if (W(t2)) {
      for (var i2 in t2) if (z.call(t2, i2)) return false;
      return true;
    }
    return false;
  };
  var K = (t2) => void 0 === t2;
  var J = (t2) => "[object String]" == q.call(t2);
  var Y = (t2) => J(t2) && 0 === t2.trim().length;
  var Q = (t2) => null === t2;
  var X = (t2) => K(t2) || Q(t2);
  var Z = (t2) => "[object Number]" == q.call(t2) && t2 == t2;
  var tt = (t2) => Z(t2) && t2 > 0;
  var it = (t2) => "[object Boolean]" === q.call(t2);
  var et = (t2) => t2 instanceof FormData;
  var rt = (t2) => N(S, t2);
  var st = (t2) => N(k, t2);
  function nt(t2) {
    return null === t2 || "object" != typeof t2;
  }
  function ot(t2, i2) {
    return {}.toString.call(t2) === "[object " + i2 + "]";
  }
  function at(t2) {
    switch ({}.toString.call(t2)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object DOMError]":
      case "[object WebAssembly.Exception]":
        return true;
      default:
        return ht(t2, Error);
    }
  }
  function lt(t2) {
    return "undefined" != typeof Event && ht(t2, Event);
  }
  function ht(t2, i2) {
    try {
      return t2 instanceof i2;
    } catch (t3) {
      return false;
    }
  }
  var ut = [true, "true", 1, "1", "yes"];
  var dt = (t2) => N(ut, t2);
  var vt = [false, "false", 0, "0", "no"];
  function ct(t2, i2, e2, r2, s2) {
    return i2 > e2 && (r2.warn("min cannot be greater than max."), i2 = e2), Z(t2) ? t2 > e2 ? (r2.warn(" cannot be  greater than max: " + e2 + ". Using max value instead."), e2) : i2 > t2 ? (r2.warn(" cannot be less than min: " + i2 + ". Using min value instead."), i2) : t2 : (r2.warn(" must be a number. using max or fallback. max: " + e2 + ", fallback: " + s2), ct(s2 || e2, i2, e2, r2));
  }
  var ft = class {
    constructor(t2) {
      this.k = {}, this.S = t2.S, this.C = ct(t2.bucketSize, 0, 100, t2.I), this.R = ct(t2.refillRate, 0, this.C, t2.I), this.A = ct(t2.refillInterval, 0, 864e5, t2.I);
    }
    O(t2, i2) {
      var e2 = Math.floor((i2 - t2.lastAccess) / this.A);
      e2 > 0 && (t2.tokens = Math.min(t2.tokens + e2 * this.R, this.C), t2.lastAccess = t2.lastAccess + e2 * this.A);
    }
    consumeRateLimit(t2) {
      var i2, e2 = Date.now(), r2 = String(t2), s2 = this.k[r2];
      return s2 ? this.O(s2, e2) : this.k[r2] = s2 = { tokens: this.C, lastAccess: e2 }, 0 === s2.tokens || (s2.tokens--, 0 === s2.tokens && (null == (i2 = this.S) || i2.call(this, t2)), 0 === s2.tokens);
    }
    stop() {
      this.k = {};
    }
  };
  var pt = "Mobile";
  var _t = "iOS";
  var gt = "Android";
  var mt = "Tablet";
  var yt = gt + " " + mt;
  var bt = "iPad";
  var wt = "Apple";
  var xt = wt + " Watch";
  var Et = "Safari";
  var St = "BlackBerry";
  var kt = "Samsung";
  var Tt = kt + "Browser";
  var $t = kt + " Internet";
  var Pt = "Chrome";
  var Rt = Pt + " OS";
  var Ct = Pt + " " + _t;
  var Ot = "Internet Explorer";
  var It = Ot + " " + pt;
  var At = "Opera";
  var Ft = At + " Mini";
  var Mt = "Edge";
  var Dt = "Microsoft " + Mt;
  var Nt = "Firefox";
  var Lt = Nt + " " + _t;
  var Ut = "Nintendo";
  var jt = "PlayStation";
  var Bt = "Xbox";
  var zt = gt + " " + pt;
  var qt = pt + " " + Et;
  var Ht = "Windows";
  var Vt = Ht + " Phone";
  var Wt = "Nokia";
  var Gt = "Ouya";
  var Kt = "Generic";
  var Jt = Kt + " " + pt.toLowerCase();
  var Yt = Kt + " " + mt.toLowerCase();
  var Qt = "Konqueror";
  var Xt = "Oculus Browser";
  var Zt = "Vivaldi";
  var ti = "Yandex";
  var ii = "Whale";
  var ei = "DuckDuckGo";
  var ri = "Pale Moon";
  var si = "Waterfox";
  var ni = "Brave";
  var oi = "Google Search App";
  var ai = "(\\d+(\\.\\d+)?)";
  var li = new RegExp("Version/" + ai);
  var hi = new RegExp(Bt, "i");
  var ui = new RegExp(jt + " \\w+", "i");
  var di = new RegExp(Ut + " \\w+", "i");
  var vi = new RegExp(St + "|PlayBook|BB10", "i");
  var ci = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" };
  var fi = function(t2, i2, e2, r2) {
    i2 = i2 || "";
    var s2 = (function(t3) {
      return null != t3 && t3.brave ? ni : null;
    })(e2);
    return s2 || (null != r2 && r2.detectGoogleSearchApp && N(t2, "GSA/") ? oi : N(t2, " OPR/") && N(t2, "Mini") ? Ft : N(t2, " OPR/") ? At : vi.test(t2) ? St : N(t2, "IE" + pt) || N(t2, "WPDesktop") ? It : N(t2, "OculusBrowser") ? Xt : N(t2, Tt) ? $t : N(t2, Mt) || N(t2, "Edg/") ? Dt : N(t2, Zt + "/") ? Zt : N(t2, "YaBrowser/") ? ti : N(t2, ii + "/") ? ii : N(t2, ei + "/") || N(t2, "Ddg/") ? ei : N(t2, "FBIOS") ? "Facebook " + pt : N(t2, "UCWEB") || N(t2, "UCBrowser") ? "UC Browser" : N(t2, "CriOS") ? Ct : N(t2, "CrMo") || N(t2, Pt) ? Pt : N(t2, gt) && N(t2, Et) ? zt : N(t2, "FxiOS") ? Lt : N(t2.toLowerCase(), Qt.toLowerCase()) ? Qt : N(t2, ni + "/") ? ni : ((t3, i3) => i3 && N(i3, wt) || (function(t4) {
      return N(t4, Et) && !N(t4, Pt) && !N(t4, gt);
    })(t3))(t2, i2) ? N(t2, pt) ? qt : Et : N(t2, "PaleMoon/") ? ri : N(t2, si + "/") ? si : N(t2, Nt) ? Nt : N(t2, "MSIE") || N(t2, "Trident/") ? Ot : N(t2, "Gecko") ? Nt : "");
  };
  var pi = { [It]: [new RegExp("rv:" + ai)], [Dt]: [new RegExp(Mt + "?\\/" + ai)], [Pt]: [new RegExp("(" + Pt + "|CrMo)\\/" + ai)], [Ct]: [new RegExp("CriOS\\/" + ai)], "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + ai)], [Et]: [li], [qt]: [li], [At]: [new RegExp("(Opera|OPR)\\/" + ai)], [Nt]: [new RegExp(Nt + "\\/" + ai)], [Lt]: [new RegExp("FxiOS\\/" + ai)], [Qt]: [new RegExp("Konqueror[:/]?" + ai, "i")], [St]: [new RegExp(St + " " + ai), li], [zt]: [new RegExp("android\\s" + ai, "i")], [$t]: [new RegExp(Tt + "\\/" + ai)], [Xt]: [new RegExp("OculusBrowser\\/" + ai)], [Zt]: [new RegExp(Zt + "\\/" + ai)], [ti]: [new RegExp("YaBrowser\\/" + ai)], [ii]: [new RegExp(ii + "\\/" + ai)], [ni]: [new RegExp(ni + "\\/" + ai)], [ei]: [new RegExp("(DuckDuckGo|Ddg)\\/" + ai)], [ri]: [new RegExp("PaleMoon\\/" + ai)], [si]: [new RegExp(si + "\\/" + ai)], [oi]: [new RegExp("GSA\\/" + ai)], [Ot]: [new RegExp("(rv:|MSIE )" + ai)], Mozilla: [new RegExp("rv:" + ai)] };
  var _i = function(t2, i2, e2, r2) {
    var s2 = fi(t2, i2, e2, r2), n2 = pi[s2];
    if (K(n2)) return null;
    for (var o2 = 0; n2.length > o2; o2++) {
      var a2 = t2.match(n2[o2]);
      if (a2) return parseFloat(a2[a2.length - 2]);
    }
    return null;
  };
  var gi = [[new RegExp(Bt + "; " + Bt + " (.*?)[);]", "i"), (t2) => [Bt, t2 && t2[1] || ""]], [new RegExp(Ut, "i"), [Ut, ""]], [new RegExp(jt, "i"), [jt, ""]], [vi, [St, ""]], [new RegExp(Ht, "i"), (t2, i2) => {
    if (/Phone/.test(i2) || /WPDesktop/.test(i2)) return [Vt, ""];
    if (new RegExp(pt).test(i2) && !/IEMobile\b/.test(i2)) return [Ht + " " + pt, ""];
    var e2 = /Windows NT ([0-9.]+)/i.exec(i2);
    if (e2 && e2[1]) {
      var r2 = ci[e2[1]] || "";
      return /arm/i.test(i2) && (r2 = "RT"), [Ht, r2];
    }
    return [Ht, ""];
  }], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (t2) => t2 && t2[3] ? [_t, [t2[3], t2[4], t2[5] || "0"].join(".")] : [_t, ""]], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (t2) => {
    var i2 = "";
    return t2 && t2.length >= 3 && (i2 = K(t2[2]) ? t2[3] : t2[2]), ["watchOS", i2];
  }], [new RegExp("(" + gt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + gt + ")", "i"), (t2) => t2 && t2[2] ? [gt, [t2[2], t2[3], t2[4] || "0"].join(".")] : [gt, ""]], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (t2) => {
    var i2 = ["Mac OS X", ""];
    return t2 && t2[1] && (i2[1] = [t2[1], t2[2], t2[3] || "0"].join(".")), i2;
  }], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [Rt, ""]], [/Linux|debian/i, ["Linux", ""]]];
  var mi = function(t2) {
    return di.test(t2) ? Ut : ui.test(t2) ? jt : hi.test(t2) ? Bt : new RegExp(Gt, "i").test(t2) ? Gt : new RegExp("(" + Vt + "|WPDesktop)", "i").test(t2) ? Vt : /iPad/.test(t2) ? bt : /iPod/.test(t2) ? "iPod Touch" : /iPhone/.test(t2) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t2) ? xt : vi.test(t2) ? St : /(kobo)\s(ereader|touch)/i.test(t2) ? "Kobo" : new RegExp(Wt, "i").test(t2) ? Wt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t2) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t2) ? "Kindle Fire" : /(Android|ZTE)/i.test(t2) ? new RegExp(pt).test(t2) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t2) || /pixel[\daxl ]{1,6}/i.test(t2) && !/pixel c/i.test(t2) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t2) || /lmy47v/i.test(t2) && !/QTAQZ3/i.test(t2) ? gt : yt : new RegExp("(pda|" + pt + ")", "i").test(t2) ? Jt : new RegExp(mt, "i").test(t2) && !new RegExp(mt + " pc", "i").test(t2) ? Yt : "";
  };
  var yi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function bi(t2, i2) {
    return "string" == typeof (e2 = t2) && yi.test(e2) ? t2 : i2();
    var e2;
  }
  function wi(t2, i2) {
    var e2 = new Error(i2);
    try {
      Object.defineProperty(e2, "name", { value: t2, writable: true, enumerable: true, configurable: true });
    } catch (t3) {
    }
    return e2;
  }
  function xi(t2) {
    return t2 ? t2.split("#")[0] : t2;
  }
  function Ei(t2, i2) {
    var e2 = setTimeout(t2, i2);
    return (null == e2 ? void 0 : e2.unref) && (null == e2 || e2.unref()), e2;
  }
  function Si(t2, i2, e2) {
    return ki.apply(this, arguments);
  }
  function ki() {
    return (ki = p((function* (t2, i2, e2) {
      var r2;
      try {
        return yield Promise.race([t2, new Promise(((t3, s2) => {
          r2 = Ei((() => {
            try {
              null == e2 || e2(), t3();
            } catch (t4) {
              s2(t4);
            }
          }), i2);
        }))]);
      } finally {
        clearTimeout(r2);
      }
    }))).apply(this, arguments);
  }
  var Ti;
  var $i = "NativeGzipValidationError";
  var Pi = (t2) => t2.length >= 2 && 31 === t2[0] && 139 === t2[1];
  var Ri = (t2, i2) => t2 === E.GZipJS || i2 === E.GZipJS || "gzip" === i2;
  var Ci = (t2) => !(!t2 || "object" != typeof t2) && "NotReadableError" === ("name" in t2 ? String(t2.name) : "");
  var Oi = (t2) => {
    throw wi($i, "Native gzip produced invalid output: " + t2);
  };
  var Ii = (function() {
    var t2 = p((function* (t3, i2) {
      18 > t3.size && Oi("too-short");
      var e2 = new Uint8Array(yield t3.slice(0, 10).arrayBuffer());
      Pi(e2) && 8 === e2[2] || Oi("invalid-header");
      var r2 = new DataView(yield t3.slice(t3.size - 8).arrayBuffer());
      r2.getUint32(0, true) !== ((t4) => {
        for (var i3 = (() => {
          if (Ti) return Ti;
          Ti = [];
          for (var t5 = 0; 256 > t5; t5++) {
            for (var i4 = t5, e4 = 0; 8 > e4; e4++) i4 = 1 & i4 ? 3988292384 ^ i4 >>> 1 : i4 >>> 1;
            Ti[t5] = i4 >>> 0;
          }
          return Ti;
        })(), e3 = 4294967295, r3 = 0; t4.length > r3; r3++) e3 = i3[255 & (e3 ^ t4[r3])] ^ e3 >>> 8;
        return (4294967295 ^ e3) >>> 0;
      })(i2) && Oi("invalid-crc");
      var s2 = i2.length >>> 0;
      r2.getUint32(4, true) !== s2 && Oi("invalid-size");
    }));
    return function(i2, e2) {
      return t2.apply(this, arguments);
    };
  })();
  function Ai() {
    return Ai = p((function* (t2, i2, e2) {
      void 0 === i2 && (i2 = true);
      try {
        var r2 = new TextEncoder().encode(t2), s2 = new globalThis.CompressionStream("gzip"), n2 = s2.writable.getWriter(), o2 = n2.write(r2).then((() => n2.close())).catch((function() {
          var t3 = p((function* (t4) {
            try {
              yield n2.abort(t4);
            } catch (t5) {
            }
            throw t4;
          }));
          return function(i3) {
            return t3.apply(this, arguments);
          };
        })()), a2 = new Response(s2.readable).blob(), l2 = (yield Promise.all([a2, o2]))[0];
        return yield Ii(l2, r2), l2;
      } catch (t3) {
        if (null != e2 && e2.rethrow) throw t3;
        return i2 && console.error("Failed to gzip compress data", t3), null;
      }
    })), Ai.apply(this, arguments);
  }
  var Fi = { trace: { text: "TRACE", number: 1 }, debug: { text: "DEBUG", number: 5 }, info: { text: "INFO", number: 9 }, warn: { text: "WARN", number: 13 }, error: { text: "ERROR", number: 17 }, fatal: { text: "FATAL", number: 21 } };
  var Mi = Fi.info;
  var Di = 9223372036854776e3;
  var Ni = {}.propertyIsEnumerable;
  function Li(t2, i2) {
    try {
      return Bi(t2, i2, { ancestors: /* @__PURE__ */ new WeakSet(), remainingNodes: R }, 0);
    } catch (t3) {
      return [];
    }
  }
  function Ui(t2, i2, e2, r2) {
    if (0 >= e2.remainingNodes) return { stringValue: O };
    if (e2.remainingNodes--, it(t2)) return { boolValue: t2 };
    if ("number" == typeof t2) {
      if (!Number.isFinite(t2)) return { stringValue: String(t2) };
      if (Number.isInteger(t2)) {
        if (Number.isSafeInteger(t2)) return { intValue: String(t2) };
        if ("undefined" == typeof BigInt) return { stringValue: String(t2) };
        var s2 = BigInt(t2).toString();
        return t2 >= Di || -Di > t2 ? (null == i2 || i2.debug("Attribute " + s2 + " is outside the int64 range; encoding it as a string"), { stringValue: s2 }) : { intValue: s2 };
      }
      return { doubleValue: t2 };
    }
    if ("string" == typeof t2) return { stringValue: F(t2) };
    if ("function" == typeof t2) return { stringValue: A };
    if ("symbol" == typeof t2) return { stringValue: String(t2) };
    if ("object" == typeof t2 && null !== t2) {
      if (e2.ancestors.has(t2)) return { stringValue: C };
      if (r2 >= T) return { stringValue: O };
      if (t2 instanceof Date) {
        var n2 = t2.getTime(), o2 = Number.isFinite(n2) ? t2.toISOString() : String(t2);
        return { stringValue: "string" == typeof o2 ? F(o2) : String(o2) };
      }
      e2.ancestors.add(t2);
      try {
        try {
          var a2 = t2.toJSON;
          if ("function" == typeof a2) return Ui(a2.call(t2), i2, e2, r2 + 1);
        } catch (t3) {
        }
        return H(t2) ? { arrayValue: { values: ji(t2, i2, e2, r2 + 1) } } : { kvlistValue: { values: Bi(t2, i2, e2, r2 + 1) } };
      } finally {
        e2.ancestors.delete(t2);
      }
    }
    return { stringValue: F(String(t2)) };
  }
  function ji(t2, i2, e2, r2) {
    for (var s2 = [], n2 = Math.min(t2.length, P), o2 = 0; n2 > o2 && e2.remainingNodes > 0; o2++) try {
      var a2 = o2 in t2 ? t2[o2] : void 0;
      if (X(a2)) continue;
      s2.push(Ui(a2, i2, e2, r2));
    } catch (t3) {
      s2.push({ stringValue: I });
    }
    return t2.length > o2 && s2.push({ stringValue: O }), s2;
  }
  function Bi(t2, i2, e2, r2) {
    var s2 = [];
    for (var n2 in t2) if (Ni.call(t2, n2)) {
      if (s2.length >= P || 0 >= e2.remainingNodes) {
        null == i2 || i2.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
        break;
      }
      try {
        var o2 = t2[n2];
        if (Q(o2) || K(o2)) continue;
        s2.push({ key: F(n2), value: Ui(o2, i2, e2, r2) });
      } catch (t3) {
        s2.push({ key: F(n2), value: { stringValue: I } });
      }
    }
    return s2;
  }
  function zi(t2) {
    try {
      return F(String(t2));
    } catch (t3) {
      return I;
    }
  }
  function qi(t2, i2, e2, r2) {
    var s2, n2 = Fi[t2.level || "info"] || Mi, o2 = n2.text, a2 = n2.number, l2 = (void 0 === (s2 = Z(r2) ? r2 : void 0) && (s2 = Date.now()), String(s2) + "000000"), h2 = {};
    i2.distinctId && (h2.posthogDistinctId = i2.distinctId), i2.sessionId && (h2.sessionId = i2.sessionId), i2.windowId && (h2["window.id"] = i2.windowId), X(i2.sessionStartTimestamp) || (h2.sessionStartTimestamp = String(i2.sessionStartTimestamp)), X(i2.lastActivityTimestamp) || (h2.lastActivityTimestamp = String(i2.lastActivityTimestamp)), i2.currentUrl && (h2["url.full"] = i2.currentUrl), i2.screenName && (h2["screen.name"] = i2.screenName), i2.appState && (h2["app.state"] = i2.appState), i2.activeFeatureFlags && i2.activeFeatureFlags.length > 0 && (h2.feature_flags = i2.activeFeatureFlags);
    var u2 = _({}, h2), d2 = t2.attributes;
    if (d2) {
      var v2 = [];
      try {
        v2 = Object.keys(d2);
      } catch (t3) {
        v2 = [];
      }
      for (var c2 of v2) {
        var f2 = void 0;
        try {
          f2 = d2[c2];
        } catch (t3) {
          f2 = I;
        }
        Object.defineProperty(u2, c2, { value: f2, enumerable: true, writable: true, configurable: true });
      }
    }
    var p2 = { timeUnixNano: l2, observedTimeUnixNano: l2, severityNumber: a2, severityText: o2, body: { stringValue: zi(t2.body) }, attributes: Li(u2, e2) };
    return t2.trace_id && (p2.traceId = t2.trace_id), t2.span_id && (p2.spanId = t2.span_id), K(t2.trace_flags) || (p2.flags = t2.trace_flags), p2;
  }
  function Hi(t2, i2, e2) {
    return _({}, t2.resourceAttributes, { "service.name": t2.serviceName || "unknown_service" }, t2.environment && { "deployment.environment": t2.environment }, t2.serviceVersion && { "service.version": t2.serviceVersion }, { "telemetry.sdk.name": i2, "telemetry.sdk.version": e2 });
  }
  function Vi(t2, i2, e2, r2) {
    return { resourceLogs: [{ resource: { attributes: Li(i2) }, scopeLogs: [{ scope: { name: e2, version: r2 }, logRecords: t2 }] }] };
  }
  var Wi = class {
    constructor(t2, i2, e2, r2, s2, n2, o2) {
      var a2;
      void 0 === n2 && (n2 = () => Promise.resolve()), this._instance = t2, this.vn = i2, this.I = e2, this.Pn = r2, this.An = s2, this.Fn = n2, this.On = o2, this.Ln = null, this.Dn = 0, this.$n = 0, this.Nn = 0, this.qn = 0, this.jn = 0, this.Bn = false, this.Hn = i2.maxBufferSize, this.zn = Math.max(null !== (a2 = i2.maxQueueSize) && void 0 !== a2 ? a2 : i2.maxBufferSize, i2.maxBufferSize), this.Un = i2.flushIntervalMs, this.Wn = i2.maxBatchRecordsPerPost, this.Vn = i2.rateCapWindowMs, this.Gn = i2.maxLogsPerInterval;
    }
    clearQueue() {
      this.$n++, this._instance.setPersistedProperty(x.LogsQueue, []);
    }
    reset() {
      this.Zn(), this.qn = 0, this.jn = 0, this.Bn = false, this.Nn = 0, this.Wn = this.vn.maxBatchRecordsPerPost;
    }
    onReconnect() {
      this.Nn = 0, this.Qn();
    }
    captureLog(t2, i2) {
      var e2;
      if (!this._instance.isDisabled && !this._instance.optedOut && null != t2 && t2.body) {
        var r2 = this.Jn(t2);
        if (null !== r2) if (r2.body) {
          if (this.Kn()) {
            var s2 = { record: qi(r2, null !== (e2 = null == i2 ? void 0 : i2.context) && void 0 !== e2 ? e2 : this.Pn(), this.I, null == i2 ? void 0 : i2.occurredAtMs) };
            this.An((() => this.Yn(s2)));
          }
        } else this.I.info("Log was rejected in beforeSend function");
      }
    }
    Jn(t2) {
      var i2 = this.vn.beforeSend;
      if (!i2) return t2;
      var e2 = H(i2) ? i2 : [i2], r2 = t2;
      for (var s2 of e2) try {
        var n2 = s2(r2);
        if (!n2) return this.I.info("Log was rejected in beforeSend function"), null;
        r2 = n2;
      } catch (t3) {
        return this.I.error("Error in beforeSend function for log:", t3), null;
      }
      return r2;
    }
    Kn() {
      if (void 0 === this.Gn) return true;
      var t2 = Date.now(), i2 = t2 - this.qn;
      return this.Vn > i2 && i2 >= 0 || (this.qn = t2, this.jn = 0, this.Bn = false), this.Gn > this.jn ? (this.jn++, true) : (this.Bn || (this.I.warn("captureLog dropping logs: exceeded " + this.Gn + " logs per " + this.Vn + "ms"), this.Bn = true), false);
    }
    flush() {
      var t2 = this;
      return p((function* () {
        if (!t2._instance.isDisabled) return t2.Ln || (t2.Ln = t2.Xn().finally((() => {
          t2.Ln = null;
        }))), t2.Ln;
      }))();
    }
    Xn() {
      var t2 = this;
      return p((function* () {
        var i2;
        t2.Zn();
        var e2 = null !== (i2 = t2._instance.getPersistedProperty(x.LogsQueue)) && void 0 !== i2 ? i2 : [];
        if (0 !== e2.length) for (var r2 = e2.length, s2 = 0; e2.length > 0 && r2 > s2; ) {
          var n2, o2, a2 = t2.$n;
          t2.Dn = 0;
          var l2 = Math.min(e2.length, t2.Wn), h2 = e2.slice(0, l2), u2 = Vi(h2.map(((t3) => t3.record)), t2.ts(), null !== (n2 = t2.On) && void 0 !== n2 ? n2 : t2._instance.getLibraryId(), t2._instance.getLibraryVersion()), d2 = yield t2._instance.es(u2);
          if (t2.$n !== a2) return;
          if ("too-large" === d2.kind && h2.length > 1) t2.Wn = Math.max(1, Math.floor(h2.length / 2)), t2.I.warn("Received 413 when sending logs batch of size " + h2.length + ", reducing batch size to " + t2.Wn);
          else {
            if ("retry-later" === d2.kind) throw d2.error;
            if ("too-large" === d2.kind ? t2.I.warn("Dropping a single log record after 413 with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === d2.kind && t2.vn.maxBatchRecordsPerPost > t2.Wn && (t2.Wn = Math.min(t2.vn.maxBatchRecordsPerPost, t2.Wn + 1)), yield t2.rs(h2.length), e2 = null !== (o2 = t2._instance.getPersistedProperty(x.LogsQueue)) && void 0 !== o2 ? o2 : [], s2 += h2.length, "fatal" === d2.kind) throw d2.error;
          }
        }
      }))();
    }
    rs(t2) {
      var i2 = this;
      return p((function* () {
        var e2, r2 = Math.max(0, t2 - i2.Dn), s2 = null !== (e2 = i2._instance.getPersistedProperty(x.LogsQueue)) && void 0 !== e2 ? e2 : [];
        i2._instance.setPersistedProperty(x.LogsQueue, s2.slice(r2)), yield i2.Fn();
      }))();
    }
    ts() {
      return Hi(this.vn, this._instance.getLibraryId(), this._instance.getLibraryVersion());
    }
    Yn(t2) {
      var i2;
      if (!this._instance.optedOut) {
        var e2 = null !== (i2 = this._instance.getPersistedProperty(x.LogsQueue)) && void 0 !== i2 ? i2 : [];
        this.zn > e2.length || (e2.shift(), this.Dn++, this.I.info("Logs queue is full, dropping oldest record.")), e2.push(t2), this._instance.setPersistedProperty(x.LogsQueue, e2), this.Hn > e2.length ? this.ns() : this.Qn();
      }
    }
    ns(t2) {
      void 0 === t2 && (t2 = this.Un), this.ss || (this.ss = Ei((() => {
        this.ss = void 0, this.Qn();
      }), t2));
    }
    os() {
      var t2 = Math.min(Math.max(0, this.Nn - 1), 6);
      return this.Un * Math.pow(2, t2);
    }
    ls() {
      var t2 = this._instance.getPersistedProperty(x.LogsQueue);
      return !!t2 && t2.length > 0;
    }
    shutdown(t2) {
      var i2 = this;
      return p((function* () {
        i2.Zn();
        var e2 = i2.flush().catch((() => {
        }));
        void 0 !== t2 ? yield Si(e2, t2) : yield e2;
      }))();
    }
    flushWithTimeout(t2) {
      var i2 = this;
      return p((function* () {
        var e2 = i2.flush();
        yield Si(e2, t2, (() => {
          e2.catch((() => {
          }));
        }));
      }))();
    }
    Qn() {
      this.flush().then((() => {
        this.Nn = 0;
      }), ((t2) => {
        this.Nn++, this.I.error("PostHog logs flush failed:", t2);
      })).finally((() => {
        !this._instance.isDisabled && this.ls() && this.ns(this.os());
      }));
    }
    Zn() {
      this.ss && (clearTimeout(this.ss), this.ss = void 0);
    }
  };
  var Gi = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];
  function Ki(t2) {
    return String(t2) + "000000";
  }
  function Ji(t2, i2, e2, r2) {
    var s2 = "";
    return r2 && (s2 = Object.keys(r2).sort().map(((t3) => JSON.stringify(t3) + ":" + JSON.stringify(r2[t3]))).join(",")), t2 + "\0" + i2 + "\0" + (null != e2 ? e2 : "") + "\0" + s2;
  }
  var Yi = class {
    constructor(t2, i2, e2) {
      this._instance = t2, this.vn = i2, this.I = e2, this.us = /* @__PURE__ */ new Map(), this.Ln = null, this.hs = false, this.ds = /* @__PURE__ */ new Map(), this.vs = /* @__PURE__ */ new Set(), this.cs = 0;
    }
    count(t2, i2, e2) {
      void 0 === i2 && (i2 = 1), this.fs({ name: t2, type: "count", value: i2, unit: null == e2 ? void 0 : e2.unit, attributes: null == e2 ? void 0 : e2.attributes });
    }
    gauge(t2, i2, e2) {
      this.fs({ name: t2, type: "gauge", value: i2, unit: null == e2 ? void 0 : e2.unit, attributes: null == e2 ? void 0 : e2.attributes });
    }
    histogram(t2, i2, e2) {
      this.fs({ name: t2, type: "histogram", value: i2, unit: null == e2 ? void 0 : e2.unit, attributes: null == e2 ? void 0 : e2.attributes });
    }
    flush() {
      var t2 = this, i2 = this.Ln, e2 = (function() {
        var e3 = p((function* () {
          i2 && (yield i2.catch((() => {
          }))), yield t2.ps();
        }));
        return function() {
          return e3.apply(this, arguments);
        };
      })(), r2 = e2().finally((() => {
        this.Ln === r2 && (this.Ln = null);
      }));
      return this.Ln = r2, r2;
    }
    drainWindow() {
      if (0 === this.us.size) return null;
      var t2 = this.us;
      return this.us = /* @__PURE__ */ new Map(), this.hs = false, this.ds = /* @__PURE__ */ new Map(), this.vs = /* @__PURE__ */ new Set(), this.gs(t2);
    }
    reset() {
      this.cs++, this.Zn(), this.us = /* @__PURE__ */ new Map(), this.Ln = null, this.hs = false, this.ds = /* @__PURE__ */ new Map(), this.vs = /* @__PURE__ */ new Set();
    }
    fs(t2) {
      if (!this._instance.isDisabled && !this._instance.optedOut) {
        var i2 = this.Jn(t2);
        if (null !== i2) if (i2.name && "string" == typeof i2.name) if ("number" == typeof i2.value && Number.isFinite(i2.value)) if ("count" === i2.type && 0 > i2.value) this.I.warn("Dropping count '" + i2.name + "': counters are monotonic, value must be >= 0");
        else {
          var e2, r2;
          try {
            e2 = i2.attributes ? _({}, i2.attributes) : void 0, r2 = Ji(i2.type, i2.name, i2.unit, e2);
          } catch (t3) {
            return void this.I.warn("Dropping metric '" + i2.name + "': attributes could not be serialized", t3);
          }
          var s2 = this.us.get(r2);
          if (!s2) {
            if (!this.ys()) return;
            s2 = { name: i2.name, type: i2.type, unit: i2.unit, attributes: e2, windowStartMs: Date.now() }, this.us.set(r2, s2);
          }
          var n2 = this.ds.get(i2.name);
          void 0 === n2 ? this.ds.set(i2.name, i2.type) : n2 === i2.type || this.vs.has(i2.name) || (this.vs.add(i2.name), this.I.warn("Metric name '" + i2.name + "' is already used as a " + n2 + "; recording it as a " + i2.type + " too will blend both series in charts. Use a distinct name.")), this.bs(s2, i2.value), this.ns();
        }
        else this.I.warn("Dropping metric '" + i2.name + "': value must be a finite number");
        else this.I.warn("Dropping metric with empty name");
      }
    }
    ys() {
      return this.vn.maxSeriesPerFlush > this.us.size || (this.hs || (this.hs = true, this.I.warn("Metric series cap reached (" + this.vn.maxSeriesPerFlush + " per flush window); dropping new series until the next flush. Reduce attribute cardinality.")), false);
    }
    bs(t2, i2) {
      var e2;
      switch (t2.type) {
        case "count":
          t2.total = (null !== (e2 = t2.total) && void 0 !== e2 ? e2 : 0) + i2;
          break;
        case "gauge":
          t2.last = i2;
          break;
        case "histogram":
          t2.hist || (t2.hist = { count: 0, sum: 0, min: i2, max: i2, bucketCounts: new Array(Gi.length + 1).fill(0) });
          var r2 = t2.hist;
          r2.count += 1, r2.sum += i2, r2.min = Math.min(r2.min, i2), r2.max = Math.max(r2.max, i2), r2.bucketCounts[(function(t3, i3) {
            for (var e3 = 0; i3.length > e3; e3++) if (i3[e3] >= t3) return e3;
            return i3.length;
          })(i2, Gi)] += 1;
      }
    }
    Jn(t2) {
      var i2 = this.vn.beforeSend;
      if (!i2) return t2;
      var e2 = H(i2) ? i2 : [i2], r2 = t2;
      for (var s2 of e2) try {
        var n2 = s2(r2);
        if (!n2) return this.I.info("Metric was rejected in beforeSend function"), null;
        r2 = n2;
      } catch (t3) {
        return this.I.error("Error in beforeSend function for metric:", t3), null;
      }
      return r2;
    }
    ns() {
      this.ss || (this.ss = Ei((() => {
        this.ss = void 0, this.flush().catch(((t2) => {
          this.I.error("Metrics flush failed:", t2);
        }));
      }), this.vn.flushIntervalMs));
    }
    Zn() {
      this.ss && (clearTimeout(this.ss), this.ss = void 0);
    }
    ps() {
      var t2 = this;
      return p((function* () {
        if (0 !== t2.us.size) {
          var i2 = t2.us;
          t2.us = /* @__PURE__ */ new Map(), t2.hs = false, t2.ds = /* @__PURE__ */ new Map(), t2.vs = /* @__PURE__ */ new Set();
          var e2 = t2.cs, r2 = yield t2._instance._s(t2.gs(i2));
          if (e2 === t2.cs) switch (r2.kind) {
            case "ok":
              return;
            case "retry-later":
              return t2.ws(i2), void t2.ns();
            case "too-large":
              return void t2.I.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void t2.I.error("Failed to send metrics batch:", r2.error);
          }
        }
      }))();
    }
    gs(t2) {
      return i2 = this.ks(t2), e2 = (function(t3, i3, e3) {
        return _({}, t3.resourceAttributes, { "service.name": t3.serviceName || "unknown_service" }, t3.environment && { "deployment.environment": t3.environment }, t3.serviceVersion && { "service.version": t3.serviceVersion }, { "telemetry.sdk.name": i3, "telemetry.sdk.version": e3 });
      })(this.vn, this._instance.getLibraryId(), this._instance.getLibraryVersion()), r2 = this._instance.getLibraryId(), s2 = this._instance.getLibraryVersion(), { resourceMetrics: [{ resource: { attributes: Li(e2) }, scopeMetrics: [{ scope: { name: r2, version: s2 }, metrics: i2 }] }] };
      var i2, e2, r2, s2;
    }
    ks(t2) {
      var i2 = Ki(Date.now()), e2 = /* @__PURE__ */ new Map();
      for (var r2 of t2.values()) {
        var s2, n2 = Ji(r2.type, r2.name, r2.unit, void 0), o2 = e2.get(n2);
        o2 || (o2 = _({ name: r2.name }, r2.unit && { unit: r2.unit }), "count" === r2.type ? o2.sum = { aggregationTemporality: 1, isMonotonic: true, dataPoints: [] } : "gauge" === r2.type ? o2.gauge = { dataPoints: [] } : o2.histogram = { aggregationTemporality: 1, dataPoints: [] }, e2.set(n2, o2));
        var a2 = Li(null !== (s2 = r2.attributes) && void 0 !== s2 ? s2 : {}, this.I), l2 = Ki(r2.windowStartMs);
        if ("count" === r2.type) {
          var h2, u2 = { attributes: a2, startTimeUnixNano: l2, timeUnixNano: i2, asDouble: null !== (h2 = r2.total) && void 0 !== h2 ? h2 : 0 };
          o2.sum.dataPoints.push(u2);
        } else if ("gauge" === r2.type) {
          var d2, v2 = { attributes: a2, timeUnixNano: i2, asDouble: null !== (d2 = r2.last) && void 0 !== d2 ? d2 : 0 };
          o2.gauge.dataPoints.push(v2);
        } else r2.hist && o2.histogram.dataPoints.push({ attributes: a2, startTimeUnixNano: l2, timeUnixNano: i2, count: r2.hist.count, sum: r2.hist.sum, min: r2.hist.min, max: r2.hist.max, bucketCounts: r2.hist.bucketCounts, explicitBounds: Gi });
      }
      return Array.from(e2.values());
    }
    ws(t2) {
      var i2, e2;
      for (var r2 of t2) {
        var s2 = r2[0], n2 = r2[1], o2 = this.us.get(s2);
        if (o2) switch (o2.windowStartMs = Math.min(o2.windowStartMs, n2.windowStartMs), o2.type) {
          case "count":
            o2.total = (null !== (i2 = o2.total) && void 0 !== i2 ? i2 : 0) + (null !== (e2 = n2.total) && void 0 !== e2 ? e2 : 0);
            break;
          case "gauge":
            break;
          case "histogram":
            if (n2.hist) if (o2.hist) {
              o2.hist.count += n2.hist.count, o2.hist.sum += n2.hist.sum, o2.hist.min = Math.min(o2.hist.min, n2.hist.min), o2.hist.max = Math.max(o2.hist.max, n2.hist.max);
              for (var a2 = 0; o2.hist.bucketCounts.length > a2; a2++) o2.hist.bucketCounts[a2] += n2.hist.bucketCounts[a2];
            } else o2.hist = n2.hist;
        }
        else this.ys() && this.us.set(s2, n2);
      }
    }
  };
  var Qi;
  var Xi;
  var Zi;
  function te(t2) {
    var i2 = globalThis._posthogChunkIds;
    if (i2) {
      var e2 = Object.keys(i2);
      return Zi && e2.length === Xi || (Xi = e2.length, Zi = e2.reduce(((e3, r2) => {
        Qi || (Qi = {});
        var s2 = Qi[r2];
        if (s2) e3[s2[0]] = s2[1];
        else for (var n2 = t2(r2), o2 = n2.length - 1; o2 >= 0; o2--) {
          var a2 = n2[o2], l2 = null == a2 ? void 0 : a2.filename, h2 = i2[r2];
          if (l2 && h2) {
            e3[l2] = h2, Qi[r2] = [l2, h2];
            break;
          }
        }
        return e3;
      }), {})), Zi;
    }
  }
  var ie = class {
    constructor(t2, i2, e2) {
      void 0 === e2 && (e2 = []), this.coercers = t2, this.stackParser = i2, this.modifiers = e2;
    }
    buildFromUnknown(t2, i2) {
      void 0 === i2 && (i2 = {});
      var e2 = i2 && i2.mechanism || { handled: true, type: "generic" }, r2 = this.buildCoercingContext(e2, i2, 0).apply(t2), s2 = this.buildParsingContext(i2), n2 = this.parseStacktrace(r2, s2);
      return { $exception_list: this.convertToExceptionList(n2, e2), $exception_level: "error" };
    }
    modifyFrames(t2) {
      var i2 = this;
      return p((function* () {
        for (var e2 of t2) e2.stacktrace && e2.stacktrace.frames && H(e2.stacktrace.frames) && (e2.stacktrace.frames = yield i2.applyModifiers(e2.stacktrace.frames));
        return t2;
      }))();
    }
    coerceFallback(t2) {
      var i2;
      return { type: "Error", value: "Unknown error", stack: null == (i2 = t2.syntheticException) ? void 0 : i2.stack, synthetic: true };
    }
    parseStacktrace(t2, i2) {
      var e2, r2;
      return null != t2.cause && (e2 = this.parseStacktrace(t2.cause, i2)), "" != t2.stack && null != t2.stack && (r2 = this.applyChunkIds(this.stackParser(t2.stack, t2.synthetic ? i2.skipFirstLines : 0), i2.chunkIdMap)), _({}, t2, { cause: e2, stack: r2 });
    }
    applyChunkIds(t2, i2) {
      return t2.map(((t3) => (t3.filename && i2 && (t3.chunk_id = i2[t3.filename]), t3)));
    }
    applyCoercers(t2, i2) {
      for (var e2 of this.coercers) if (e2.match(t2)) return e2.coerce(t2, i2);
      return this.coerceFallback(i2);
    }
    applyModifiers(t2) {
      var i2 = this;
      return p((function* () {
        var e2 = t2;
        for (var r2 of i2.modifiers) e2 = yield r2(e2);
        return e2;
      }))();
    }
    convertToExceptionList(t2, i2) {
      var e2, r2, s2, n2 = { type: t2.type, value: t2.value, mechanism: { type: null !== (e2 = i2.type) && void 0 !== e2 ? e2 : "generic", handled: null === (r2 = i2.handled) || void 0 === r2 || r2, synthetic: null !== (s2 = t2.synthetic) && void 0 !== s2 && s2 } };
      t2.stack && (n2.stacktrace = { type: "raw", frames: t2.stack });
      var o2 = [n2];
      return null != t2.cause && o2.push(...this.convertToExceptionList(t2.cause, _({}, i2, { handled: true }))), o2;
    }
    buildParsingContext(t2) {
      var i2;
      return { chunkIdMap: te(this.stackParser), skipFirstLines: null !== (i2 = t2.skipFirstLines) && void 0 !== i2 ? i2 : 1 };
    }
    buildCoercingContext(t2, i2, e2) {
      void 0 === e2 && (e2 = 0);
      var r2 = (e3, r3) => {
        if (4 >= r3) {
          var s2 = this.buildCoercingContext(t2, i2, r3);
          return this.applyCoercers(e3, s2);
        }
      };
      return _({}, i2, { syntheticException: 0 == e2 ? i2.syntheticException : void 0, mechanism: t2, apply: (t3) => r2(t3, e2), next: (t3) => r2(t3, e2 + 1) });
    }
  };
  var ee = "?";
  function re(t2, i2, e2, r2, s2) {
    var n2 = { platform: t2, filename: i2, function: "<anonymous>" === e2 ? ee : e2, in_app: !(null != i2 && i2.startsWith("webkit-masked-url://")) && "<anonymous>" !== i2 };
    return K(r2) || (n2.lineno = r2), K(s2) || (n2.colno = s2), n2;
  }
  var se = (t2, i2) => {
    var e2 = -1 !== t2.indexOf("safari-extension"), r2 = -1 !== t2.indexOf("safari-web-extension");
    return e2 || r2 ? [-1 !== t2.indexOf("@") ? t2.split("@")[0] : ee, e2 ? "safari-extension:" + i2 : "safari-web-extension:" + i2] : [t2, i2];
  };
  var ne = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
  var oe = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var ae = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var le = (t2, i2) => {
    var e2 = ne.exec(t2);
    if (e2) return re(i2, e2[1], ee, +e2[2], +e2[3]);
    var r2 = oe.exec(t2);
    if (r2) {
      if (r2[2] && 0 === r2[2].indexOf("eval")) {
        var s2 = ae.exec(r2[2]);
        s2 && (r2[2] = s2[1], r2[3] = s2[2], r2[4] = s2[3]);
      }
      var n2 = se(r2[1] || ee, r2[2]);
      return re(i2, n2[1], n2[0], r2[3] ? +r2[3] : void 0, r2[4] ? +r2[4] : void 0);
    }
  };
  var he = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  var ue = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var de = (t2, i2) => {
    var e2 = he.exec(t2);
    if (e2) {
      if (e2[3] && e2[3].indexOf(" > eval") > -1) {
        var r2 = ue.exec(e2[3]);
        r2 && (e2[1] = e2[1] || "eval", e2[3] = r2[1], e2[4] = r2[2], e2[5] = "");
      }
      var s2 = e2[3], n2 = e2[1] || ee, o2 = se(n2, s2);
      return re(i2, s2 = o2[1], n2 = o2[0], e2[4] ? +e2[4] : void 0, e2[5] ? +e2[5] : void 0);
    }
  };
  var ve = /\(error: (.*)\)/;
  var ce = class {
    match(t2) {
      return this.isDOMException(t2) || this.isDOMError(t2);
    }
    coerce(t2, i2) {
      var e2 = J(t2.stack);
      return { type: this.getType(t2), value: this.getValue(t2), stack: e2 ? t2.stack : void 0, cause: t2.cause ? i2.next(t2.cause) : void 0, synthetic: false };
    }
    getType(t2) {
      return this.isDOMError(t2) ? "DOMError" : "DOMException";
    }
    getValue(t2) {
      var i2 = t2.name || (this.isDOMError(t2) ? "DOMError" : "DOMException");
      return t2.message ? i2 + ": " + t2.message : i2;
    }
    isDOMException(t2) {
      return ot(t2, "DOMException");
    }
    isDOMError(t2) {
      return ot(t2, "DOMError");
    }
  };
  var fe = class {
    match(t2) {
      return at(t2);
    }
    coerce(t2, i2) {
      var e2, r2 = this.getStack(t2), s2 = void 0 === r2;
      return { type: this.getType(t2), value: this.getMessage(t2, i2), stack: null != r2 ? r2 : null == (e2 = i2.syntheticException) ? void 0 : e2.stack, cause: t2.cause ? i2.next(t2.cause) : void 0, synthetic: s2 };
    }
    getType(t2) {
      return t2.name || t2.constructor.name;
    }
    getMessage(t2, i2) {
      var e2 = t2.message;
      return String(e2.error && "string" == typeof e2.error.message ? e2.error.message : e2);
    }
    getStack(t2) {
      return t2.stacktrace || t2.stack || void 0;
    }
  };
  var pe = class {
    constructor() {
    }
    match(t2) {
      return !!ot(t2, "ErrorEvent") && (null != t2.error || this.$i(t2));
    }
    coerce(t2, i2) {
      var e2;
      if (null != t2.error) return i2.apply(t2.error);
      var r2 = i2.apply(t2.message);
      return _({}, r2, { stack: null !== (e2 = this.Ui(t2)) && void 0 !== e2 ? e2 : r2.stack, synthetic: true });
    }
    $i(t2) {
      return J(t2.message) && t2.message.length > 0;
    }
    Ui(t2) {
      var i2, e2, r2 = t2, s2 = null !== (i2 = r2.lineno) && void 0 !== i2 ? i2 : 0, n2 = null !== (e2 = r2.colno) && void 0 !== e2 ? e2 : 0;
      if (J(r2.filename) && 0 !== r2.filename.length && 0 !== s2) return "Error\n    at " + r2.filename + ":" + s2 + ":" + n2;
    }
  };
  var _e = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  var ge = class {
    match(t2) {
      return "string" == typeof t2;
    }
    coerce(t2, i2) {
      var e2, r2 = this.getInfos(t2), s2 = r2[0], n2 = r2[1];
      return { type: null != s2 ? s2 : "Error", value: null != n2 ? n2 : t2, stack: null == (e2 = i2.syntheticException) ? void 0 : e2.stack, synthetic: true };
    }
    getInfos(t2) {
      var i2 = "Error", e2 = t2, r2 = t2.match(_e);
      return r2 && (i2 = r2[1], e2 = r2[2]), [i2, e2];
    }
  };
  var me = ["fatal", "error", "warning", "log", "info", "debug"];
  function ye(t2, i2) {
    void 0 === i2 && (i2 = 40);
    var e2 = Object.keys(t2);
    if (e2.sort(), !e2.length) return "[object has no keys]";
    for (var r2 = e2.length; r2 > 0; r2--) {
      var s2 = e2.slice(0, r2).join(", ");
      if (i2 >= s2.length) return r2 === e2.length ? s2 : s2.length > i2 ? s2.slice(0, i2) + "..." : s2;
    }
    return "";
  }
  var be = class {
    match(t2) {
      return "object" == typeof t2 && null !== t2;
    }
    coerce(t2, i2) {
      var e2, r2, s2 = this.getErrorPropertyFromObject(t2);
      return s2 ? i2.apply(s2) : { type: this.getType(t2), value: this.getValue(t2), stack: null !== (e2 = this.getStack(t2)) && void 0 !== e2 ? e2 : null == (r2 = i2.syntheticException) ? void 0 : r2.stack, level: this.isSeverityLevel(t2.level) ? t2.level : "error", synthetic: true };
    }
    getType(t2) {
      if (lt(t2)) return t2.constructor.name;
      var i2 = "name" in t2 ? t2.name : void 0;
      return J(i2) && !Y(i2) ? i2 : "Error";
    }
    getValue(t2) {
      if ("name" in t2 && "string" == typeof t2.name) {
        var i2 = "'" + t2.name + "' captured as exception";
        return "message" in t2 && "string" == typeof t2.message && (i2 += " with message: '" + t2.message + "'"), i2;
      }
      if ("message" in t2 && "string" == typeof t2.message) return t2.message;
      var e2 = this.getObjectClassName(t2);
      return (e2 && "Object" !== e2 ? "'" + e2 + "'" : "Object") + " captured as exception with keys: " + ye(t2);
    }
    isSeverityLevel(t2) {
      return J(t2) && !Y(t2) && me.indexOf(t2) >= 0;
    }
    getStack(t2) {
      try {
        return J(t2.stacktrace) && t2.stacktrace.length > 0 ? t2.stacktrace : J(t2.stack) && t2.stack.length > 0 ? t2.stack : void 0;
      } catch (t3) {
        return;
      }
    }
    getErrorPropertyFromObject(t2) {
      for (var i2 in t2) if ({}.hasOwnProperty.call(t2, i2)) {
        var e2 = t2[i2];
        if (at(e2)) return e2;
      }
    }
    getObjectClassName(t2) {
      try {
        var i2 = Object.getPrototypeOf(t2);
        return i2 ? i2.constructor.name : void 0;
      } catch (t3) {
        return;
      }
    }
  };
  var we = class {
    match(t2) {
      return lt(t2);
    }
    coerce(t2, i2) {
      var e2, r2 = t2.constructor.name;
      return { type: r2, value: r2 + " captured as exception with keys: " + ye(t2), stack: null == (e2 = i2.syntheticException) ? void 0 : e2.stack, synthetic: true };
    }
  };
  var xe = class {
    match(t2) {
      return nt(t2);
    }
    coerce(t2, i2) {
      var e2;
      return { type: "Error", value: "Primitive value captured as exception: " + String(t2), stack: null == (e2 = i2.syntheticException) ? void 0 : e2.stack, synthetic: true };
    }
  };
  var Ee = class {
    match(t2) {
      return ot(t2, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(t2);
    }
    isCustomEventWrappingRejection(t2) {
      if (!lt(t2)) return false;
      try {
        var i2 = t2.detail;
        return null != i2 && "object" == typeof i2 && "reason" in i2;
      } catch (t3) {
        return false;
      }
    }
    coerce(t2, i2) {
      var e2, r2 = this.getUnhandledRejectionReason(t2);
      return nt(r2) ? { type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(r2), stack: null == (e2 = i2.syntheticException) ? void 0 : e2.stack, synthetic: true } : i2.apply(r2);
    }
    getUnhandledRejectionReason(t2) {
      try {
        if ("reason" in t2) return t2.reason;
        if ("detail" in t2 && null != t2.detail && "object" == typeof t2.detail && "reason" in t2.detail) return t2.detail.reason;
      } catch (t3) {
      }
      return t2;
    }
  };
  var Se = "$message";
  var ke = "$timestamp";
  var Te = /* @__PURE__ */ new Set([Se, ke]);
  var $e = { enabled: true, max_bytes: 32768 };
  function Pe(t2) {
    var i2;
    return t2 ? { enabled: null !== (i2 = t2.enabled) && void 0 !== i2 ? i2 : $e.enabled, max_bytes: Ce(t2.max_bytes, $e.max_bytes) } : _({}, $e);
  }
  var Re = class {
    constructor(t2) {
      this.Ss = [], this.xs = 0, this.vn = Pe(t2);
    }
    setConfig(t2) {
      this.vn = Pe(t2), this.Cs();
    }
    add(t2) {
      var i2 = (function(t3) {
        var i3;
        try {
          i3 = j(t3);
        } catch (t4) {
          return;
        }
        try {
          var e3 = JSON.parse(i3);
          if (!W(e3)) return;
          var r2 = e3, s2 = r2[Se], n2 = r2[ke];
          if (!J(s2) || 0 === s2.trim().length) return;
          if (!J(n2) && !Z(n2)) return;
          return { step: r2, json: i3 };
        } catch (t4) {
          return;
        }
      })(t2);
      if (i2) {
        var e2 = (function(t3) {
          if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(t3).length;
          for (var i3 = encodeURIComponent(t3), e3 = 0, r2 = 0; i3.length > r2; r2++) "%" === i3[r2] ? (e3 += 1, r2 += 2) : e3 += 1;
          return e3;
        })(i2.json);
        e2 > this.vn.max_bytes || (this.Ss.push({ step: i2.step, bytes: e2 }), this.xs += e2, this.Cs());
      }
    }
    getAttachable() {
      return this.Ss.map(((t2) => t2.step));
    }
    clear() {
      this.Ss = [], this.xs = 0;
    }
    size() {
      return this.Ss.length;
    }
    Cs() {
      for (; this.xs > this.vn.max_bytes && this.Ss.length > 0; ) {
        var t2 = this.Ss.shift();
        t2 && (this.xs -= t2.bytes);
      }
    }
  };
  function Ce(t2, i2) {
    if (!Z(t2) || t2 === 1 / 0 || t2 === -1 / 0) return i2;
    var e2 = Math.floor(t2);
    return 0 > e2 ? i2 : e2;
  }
  var Oe = function(i2, e2) {
    var r2 = (void 0 === e2 ? {} : e2).debugEnabled, s2 = { P(e3) {
      if (t && (c.DEBUG || t.POSTHOG_DEBUG || r2) && !K(t.console) && t.console) {
        for (var s3 = ("__rrweb_original__" in t.console[e3]) ? t.console[e3].__rrweb_original__ : t.console[e3], n2 = arguments.length, o2 = new Array(n2 > 1 ? n2 - 1 : 0), a2 = 1; n2 > a2; a2++) o2[a2 - 1] = arguments[a2];
        s3(i2, ...o2);
      }
    }, debug() {
      for (var t2 = arguments.length, i3 = new Array(t2), e3 = 0; t2 > e3; e3++) i3[e3] = arguments[e3];
      s2.P("debug", ...i3);
    }, info() {
      for (var t2 = arguments.length, i3 = new Array(t2), e3 = 0; t2 > e3; e3++) i3[e3] = arguments[e3];
      s2.P("log", ...i3);
    }, warn() {
      for (var t2 = arguments.length, i3 = new Array(t2), e3 = 0; t2 > e3; e3++) i3[e3] = arguments[e3];
      s2.P("warn", ...i3);
    }, error() {
      for (var t2 = arguments.length, i3 = new Array(t2), e3 = 0; t2 > e3; e3++) i3[e3] = arguments[e3];
      s2.P("error", ...i3);
    }, critical() {
      for (var t2 = arguments.length, e3 = new Array(t2), r3 = 0; t2 > r3; r3++) e3[r3] = arguments[r3];
      console.error(i2, ...e3);
    }, uninitializedWarning(t2) {
      s2.error("You must initialize PostHog before calling " + t2);
    }, createLogger: (t2, e3) => Oe(i2 + " " + t2, e3) };
    return s2;
  };
  var Ie = Oe("[PostHog.js]");
  var Ae = Ie.createLogger;
  var Fe = Ae("[ExternalScriptsLoader]");
  var Me = (t2) => {
    var i2 = null == r ? void 0 : r.querySelectorAll("script");
    if (i2) {
      for (var e2 = 0; i2.length > e2; e2++) if (i2[e2].src === t2 || i2[e2].getAttribute("src") === t2) return i2[e2];
    }
  };
  var De = (t2, i2, e2) => {
    if (t2.config.disable_external_dependency_loading) return Fe.warn(i2 + " was requested but loading of external scripts is disabled."), e2("Loading of external scripts is disabled");
    var s2 = Me(i2);
    if (s2) {
      if (s2.__posthog_loading_callback_fired) return e2();
      var n2 = s2.__posthog_loading_error;
      return n2 ? e2(n2) : (s2.addEventListener("load", ((t3) => {
        s2.__posthog_loading_callback_fired = true, e2(void 0, t3);
      })), void s2.addEventListener("error", ((t3) => {
        s2.__posthog_loading_error = t3, e2(t3);
      })));
    }
    var o2 = () => {
      if (!r) return e2("document not found");
      if (Me(i2)) return De(t2, i2, e2);
      var s3 = r.createElement("script");
      if (s3.type = "text/javascript", s3.crossOrigin = "anonymous", s3.src = i2, s3.onload = (t3) => {
        s3.__posthog_loading_callback_fired = true, e2(void 0, t3);
      }, s3.onerror = (t3) => {
        s3.__posthog_loading_error = t3, e2(t3);
      }, t2.config.prepare_external_dependency_script && (s3 = t2.config.prepare_external_dependency_script(s3)), !s3) return e2("prepare_external_dependency_script returned null");
      if ("head" === t2.config.external_scripts_inject_target) r.head.appendChild(s3);
      else {
        var n3, o3 = r.querySelectorAll("body > script");
        o3.length > 0 ? null == (n3 = o3[0].parentNode) || n3.insertBefore(s3, o3[0]) : r.body.appendChild(s3);
      }
    };
    null != r && r.body ? o2() : null == r || r.addEventListener("DOMContentLoaded", o2);
  };
  var Ne = {};
  var Le = (t2, i2) => {
    var e2 = "/static/" + i2 + ".js?v=" + t2.version;
    if ("toolbar" === i2) {
      var r2 = 3e5;
      e2 = e2 + "&t=" + Math.floor(Date.now() / r2) * r2;
    }
    return t2.requestRouter.endpointFor("assets", e2);
  };
  v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (t2, i2, e2) => {
    if ("remote-config" !== i2) {
      var r2 = t2.config.strict_script_versioning;
      if (r2) {
        var s2 = t2.requestRouter.endpointFor("assets", "/static/" + t2.version + "/" + i2 + ".js"), n2 = Ne[s2];
        if ("fallback" === r2 && n2) {
          if (Me(n2)) return void De(t2, n2, e2);
          delete Ne[s2];
        }
        De(t2, s2, "fallback" === r2 ? (r3, n3) => {
          if (r3) if ("string" == typeof r3) e2(r3);
          else {
            var o3, a2 = Le(t2, i2);
            Ne[s2] = a2;
            var l2 = Me(s2);
            null == l2 || null == (o3 = l2.parentNode) || o3.removeChild(l2), De(t2, a2, e2);
          }
          else e2(void 0, n3);
        } : e2);
      } else De(t2, Le(t2, i2), e2);
    } else {
      var o2 = t2.requestRouter.endpointFor("assets", "/array/" + t2.config.token + "/config.js");
      De(t2, o2, e2);
    }
  }, v.__PosthogExtensions__.loadSiteApp = (t2, i2, e2) => {
    var r2 = t2.requestRouter.endpointFor("api", i2);
    De(t2, r2, e2);
  };
  c.DEBUG = false, c.LIB_VERSION = "1.422.5", c.LIB_NAME = "web";
  var Ue = "$people_distinct_id";
  var je = "distinct_id";
  var Be = "$device_id";
  var ze = "$device_model";
  var qe = "__alias";
  var He = "__timers";
  var Ve = "$autocapture_disabled_server_side";
  var We = "$heatmaps_enabled_server_side";
  var Ge = "$exception_capture_enabled_server_side";
  var Ke = "$error_tracking_suppression_rules";
  var Je = "$error_tracking_capture_extension_exceptions";
  var Ye = "$web_vitals_enabled_server_side";
  var Qe = "$dead_clicks_enabled_server_side";
  var Xe = "$product_tours_enabled_server_side";
  var Ze = "$logs_capture_enabled_server_side";
  var tr = "$web_vitals_allowed_metrics";
  var ir = "$session_recording_remote_config";
  var er = "$replay_sample_rate";
  var rr = "$replay_override_sampling";
  var sr = "$replay_override_linked_flag";
  var nr = "$replay_override_url_trigger";
  var or = "$replay_override_event_trigger";
  var ar = "$sesid";
  var lr = "$session_is_sampled";
  var hr = "$enabled_feature_flags";
  var ur = "$active_feature_flags";
  var dr = "$early_access_features";
  var vr = "$feature_flag_details";
  var cr = "$feature_flag_payloads";
  var fr = "$feature_flag_request_id";
  var pr = "$minimal_flag_called_events";
  var _r = "$override_feature_flags";
  var gr = "$override_feature_flag_payloads";
  var mr = "$stored_person_properties";
  var yr = "$stored_group_properties";
  var br = "$groups";
  var wr = "$surveys";
  var xr = "$surveys_loaded_at";
  var Er = "$surveys_activated";
  var Sr = "$surveys_activated_session";
  var kr = "$surveys_activated_timestamps";
  var Tr = "ph_product_tours";
  var $r = "$flag_call_reported";
  var Pr = "$flag_call_reported_session_id";
  var Rr = "$feature_flag_errors";
  var Cr = "$feature_flag_evaluated_at";
  var Or = "$user_state";
  var Ir = "$client_session_props";
  var Ar = "$capture_rate_limit";
  var Fr = "$initial_campaign_params";
  var Mr = "$initial_referrer_info";
  var Dr = "$initial_person_info";
  var Nr = "$epp";
  var Lr = "$posthog_cookieless";
  var Ur = "$cookieless_mode";
  var jr = "$sdk_debug_extensions_init_method";
  var Br = "$sdk_debug_extensions_init_time_ms";
  var zr = "$sdk_debug_recording_script_not_loaded";
  var qr = "PostHog loadExternalDependency extension not found.";
  var Hr = "on_reject";
  var Vr = "always";
  var Wr = "anonymous";
  var Gr = "identified";
  var Kr = "identified_only";
  var Jr = "visibilitychange";
  var Yr = "beforeunload";
  var Qr = "$pageview";
  var Xr = "$pageleave";
  var Zr = "$identify";
  var ts = "$groupidentify";
  function is(t2, i2) {
    H(t2) && t2.forEach(i2);
  }
  function es(t2, i2) {
    if (!X(t2)) if (H(t2)) t2.forEach(i2);
    else if (et(t2)) t2.forEach(((t3, e3) => i2(t3, e3)));
    else for (var e2 in t2) z.call(t2, e2) && i2(t2[e2], e2);
  }
  var rs = function(t2) {
    for (var i2 = arguments.length, e2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; i2 > r2; r2++) e2[r2 - 1] = arguments[r2];
    for (var s2 of e2) for (var n2 in s2) void 0 !== s2[n2] && (t2[n2] = s2[n2]);
    return t2;
  };
  function ss(t2) {
    for (var i2 = Object.keys(t2), e2 = i2.length, r2 = new Array(e2); e2--; ) r2[e2] = [i2[e2], t2[i2[e2]]];
    return r2;
  }
  var ns = function(t2) {
    try {
      return t2();
    } catch (t3) {
      return;
    }
  };
  var os = function(t2) {
    return function() {
      try {
        for (var i2 = arguments.length, e2 = new Array(i2), r2 = 0; i2 > r2; r2++) e2[r2] = arguments[r2];
        return t2.apply(this, e2);
      } catch (t3) {
        Ie.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Ie.critical(t3);
      }
    };
  };
  var as = function(t2) {
    var i2 = {};
    return es(t2, (function(t3, e2) {
      (J(t3) && t3.length > 0 || Z(t3)) && (i2[e2] = t3);
    })), i2;
  };
  var ls = ["herokuapp.com", "vercel.app", "netlify.app"];
  function hs(t2) {
    var i2 = null == t2 ? void 0 : t2.hostname;
    if (!J(i2)) return false;
    var e2 = i2.split(".").slice(-2).join(".");
    for (var r2 of ls) if (e2 === r2) return false;
    return true;
  }
  function us(t2, i2, e2, r2) {
    var s2 = null != r2 ? r2 : {}, n2 = s2.capture, o2 = s2.passive;
    null == t2 || t2.addEventListener(i2, e2, { capture: void 0 !== n2 && n2, passive: void 0 === o2 || o2 });
  }
  function ds(t2) {
    return "ph_toolbar_internal" === t2.name;
  }
  var vs = (t2) => {
    if (r) {
      try {
        for (var i2 = t2 + "=", e2 = r.cookie.split(";").filter(((t3) => t3.length)), s2 = 0; e2.length > s2; s2++) {
          for (var n2 = e2[s2]; " " == n2.charAt(0); ) n2 = n2.substring(1, n2.length);
          if (0 === n2.indexOf(i2)) return decodeURIComponent(n2.substring(i2.length, n2.length));
        }
      } catch (t3) {
      }
      return null;
    }
  };
  Math.trunc || (Math.trunc = function(t2) {
    return 0 > t2 ? Math.ceil(t2) : Math.floor(t2);
  }), Number.isInteger || (Number.isInteger = function(t2) {
    return Z(t2) && isFinite(t2) && Math.floor(t2) === t2;
  });
  var cs = class _cs {
    constructor(t2) {
      if (this.bytes = t2, 16 !== t2.length) throw new TypeError("not 128-bit length");
    }
    static fromFieldsV7(t2, i2, e2, r2) {
      if (!Number.isInteger(t2) || !Number.isInteger(i2) || !Number.isInteger(e2) || !Number.isInteger(r2) || 0 > t2 || 0 > i2 || 0 > e2 || 0 > r2 || t2 > 281474976710655 || i2 > 4095 || e2 > 1073741823 || r2 > 4294967295) throw new RangeError("invalid field value");
      var s2 = new Uint8Array(16);
      return s2[0] = t2 / Math.pow(2, 40), s2[1] = t2 / Math.pow(2, 32), s2[2] = t2 / Math.pow(2, 24), s2[3] = t2 / Math.pow(2, 16), s2[4] = t2 / 256, s2[5] = t2, s2[6] = 112 | i2 >>> 8, s2[7] = i2, s2[8] = 128 | e2 >>> 24, s2[9] = e2 >>> 16, s2[10] = e2 >>> 8, s2[11] = e2, s2[12] = r2 >>> 24, s2[13] = r2 >>> 16, s2[14] = r2 >>> 8, s2[15] = r2, new _cs(s2);
    }
    toString() {
      for (var t2 = "", i2 = 0; this.bytes.length > i2; i2++) t2 = t2 + (this.bytes[i2] >>> 4).toString(16) + (15 & this.bytes[i2]).toString(16), 3 !== i2 && 5 !== i2 && 7 !== i2 && 9 !== i2 || (t2 += "-");
      if (36 !== t2.length) throw new Error("Invalid UUIDv7 was generated");
      return t2;
    }
    clone() {
      return new _cs(this.bytes.slice(0));
    }
    equals(t2) {
      return 0 === this.compareTo(t2);
    }
    compareTo(t2) {
      for (var i2 = 0; 16 > i2; i2++) {
        var e2 = this.bytes[i2] - t2.bytes[i2];
        if (0 !== e2) return Math.sign(e2);
      }
      return 0;
    }
  };
  var fs = class {
    generate() {
      var t2 = this.generateOrAbort();
      if (!K(t2)) return t2;
      this.Gr = 0;
      var i2 = this.generateOrAbort();
      if (K(i2)) throw new Error("Could not generate UUID after timestamp reset");
      return i2;
    }
    generateOrAbort() {
      var t2 = Date.now();
      if (t2 > this.Gr) this.Gr = t2, this.Qr();
      else {
        if (this.Gr >= t2 + 1e4) return;
        this.Jr++, this.Jr > 4398046511103 && (this.Gr++, this.Qr());
      }
      return cs.fromFieldsV7(this.Gr, Math.trunc(this.Jr / Math.pow(2, 30)), this.Jr & Math.pow(2, 30) - 1, this.Yr.nextUint32());
    }
    Qr() {
      this.Jr = 1024 * this.Yr.nextUint32() + (1023 & this.Yr.nextUint32());
    }
    constructor() {
      this.Gr = 0, this.Jr = 0, this.Yr = new gs();
    }
  };
  var ps;
  var _s = (t2) => {
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for (var i2 = 0; t2.length > i2; i2++) t2[i2] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return t2;
  };
  t && !K(t.crypto) && crypto.getRandomValues && (_s = (t2) => crypto.getRandomValues(t2));
  var gs = class {
    nextUint32() {
      return this.At.length > this.Kr || (_s(this.At), this.Kr = 0), this.At[this.Kr++];
    }
    constructor() {
      this.At = new Uint32Array(8), this.Kr = 1 / 0;
    }
  };
  var ms = () => ys().toString();
  var ys = () => (ps || (ps = new fs())).generate();
  var bs = "";
  var ws = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
  var xs = { Xr: () => !!r, ii(t2) {
    Ie.error("cookieStore error: " + t2);
  }, ti: vs, ni(t2) {
    var i2;
    try {
      i2 = JSON.parse(xs.ti(t2)) || {};
    } catch (t3) {
    }
    return i2;
  }, ei(t2, i2, e2, s2, n2) {
    if (!r) return false;
    try {
      var o2 = "", a2 = "", l2 = (function(t3, i3) {
        if (i3) {
          var e3 = (function(t4, i4) {
            if (void 0 === i4 && (i4 = r), bs) return bs;
            if (!i4) return "";
            if (["localhost", "127.0.0.1"].includes(t4)) return "";
            for (var e4 = t4.split("."), s4 = Math.min(e4.length, 8), n3 = "dmn_chk_" + ms(); !bs && s4--; ) {
              var o3 = e4.slice(s4).join("."), a3 = n3 + "=1;domain=." + o3 + ";path=/";
              i4.cookie = a3 + ";max-age=3", i4.cookie.includes(n3) && (i4.cookie = a3 + ";max-age=0", bs = o3);
            }
            return bs;
          })(t3);
          if (!e3) {
            var s3 = ((t4) => {
              var i4 = t4.match(ws);
              return i4 ? i4[0] : "";
            })(t3);
            s3 !== e3 && Ie.info("Warning: cookie subdomain discovery mismatch", s3, e3), e3 = s3;
          }
          return e3 ? "; domain=." + e3 : "";
        }
        return "";
      })(r.location.hostname, s2);
      if (e2) {
        var h2 = /* @__PURE__ */ new Date();
        h2.setTime(h2.getTime() + 864e5 * e2), o2 = "; expires=" + h2.toUTCString();
      }
      n2 && (a2 = "; secure");
      var u2 = t2 + "=" + encodeURIComponent(JSON.stringify(i2)) + o2 + "; SameSite=Lax; path=/" + l2 + a2;
      return u2.length > 3686.4 && Ie.warn("cookieStore warning: large cookie, len=" + u2.length), r.cookie = u2, true;
    } catch (t3) {
      return false;
    }
  }, ri(t2, i2) {
    if (null != r && r.cookie) try {
      xs.ei(t2, "", -1, i2);
    } catch (t3) {
      return;
    }
  } };
  var Es = null;
  var Ss = { Xr() {
    if (!Q(Es)) return Es;
    var i2 = true;
    if (K(t)) i2 = false;
    else try {
      var e2 = "__mplssupport__";
      Ss.ei(e2, "xyz"), '"xyz"' !== Ss.ti(e2) && (i2 = false), Ss.ri(e2);
    } catch (t2) {
      i2 = false;
    }
    return i2 || Ie.error("localStorage unsupported; falling back to cookie store"), Es = i2, i2;
  }, ii(t2) {
    Ie.error("localStorage error: " + t2);
  }, ti(i2) {
    try {
      return null == t ? void 0 : t.localStorage.getItem(i2);
    } catch (t2) {
      Ss.ii(t2);
    }
    return null;
  }, ni(t2) {
    try {
      return JSON.parse(Ss.ti(t2)) || {};
    } catch (t3) {
    }
    return null;
  }, ei(i2, e2) {
    try {
      return null == t || t.localStorage.setItem(i2, JSON.stringify(e2)), true;
    } catch (t2) {
      Ss.ii(t2);
    }
    return false;
  }, ri(i2) {
    try {
      null == t || t.localStorage.removeItem(i2);
    } catch (t2) {
      Ss.ii(t2);
    }
  } };
  var ks = [mr, ur, hr, vr, cr, fr, Cr, Rr, $r];
  var Ts = [Be, je, ar, lr, Nr, Dr, Or];
  var $s = (t2) => t2 + "_cpm";
  var Ps = ["__proto__", "constructor", "prototype"];
  var Rs = (t2) => {
    if (!W(t2)) return {};
    var i2 = {};
    return Object.keys(t2).forEach(((e2) => {
      -1 === Ps.indexOf(e2) && (i2[e2] = t2[e2]);
    })), i2;
  };
  var Cs = function(t2, i2) {
    void 0 === i2 && (i2 = []);
    var e2 = {};
    return [...Ts, ...i2].forEach(((i3) => {
      var r2 = t2[i3];
      K(r2) || Q(r2) || "" === r2 || (e2[i3] = r2);
    })), e2;
  };
  var Os = (t2) => {
    for (var i2 = 5381, e2 = 2166136261, r2 = 0; t2.length > r2; r2++) {
      var s2 = t2.charCodeAt(r2);
      i2 = 33 * i2 ^ s2, e2 = Math.imul(e2 ^ s2, 16777619);
    }
    return t2.length.toString(36) + "." + (i2 >>> 0).toString(36) + "." + (e2 >>> 0).toString(36);
  };
  var Is = (t2, i2) => ({ p: i2, f: Os(JSON.stringify(t2)) });
  var As = (t2, i2) => {
    if (!i2) return { properties: [], isValid: false };
    try {
      var e2 = xs.ni($s(t2)), r2 = (null == e2 ? void 0 : e2.f) === Os(i2) && H(e2.p);
      return { properties: r2 ? e2.p : [], isValid: r2 };
    } catch (t3) {
      return { properties: [], isValid: false };
    }
  };
  var Fs = (t2, i2) => i2 + "|" + (xs.ti($s(t2)) || "");
  var Ms = {};
  var Ds = { Xr: () => true, ii(t2) {
    Ie.error("memoryStorage error: " + t2);
  }, ti: (t2) => Ms[t2] || null, ni: (t2) => Ms[t2] || null, ei: (t2, i2) => (Ms[t2] = i2, true), ri(t2) {
    delete Ms[t2];
  } };
  var Ns = null;
  var Ls = { Xr() {
    if (!Q(Ns)) return Ns;
    if (Ns = true, K(t)) Ns = false;
    else try {
      var i2 = "__support__";
      Ls.ei(i2, "xyz"), '"xyz"' !== Ls.ti(i2) && (Ns = false), Ls.ri(i2);
    } catch (t2) {
      Ns = false;
    }
    return Ns;
  }, ii(t2) {
    Ie.error("sessionStorage error: ", t2);
  }, ti(i2) {
    try {
      return null == t ? void 0 : t.sessionStorage.getItem(i2);
    } catch (t2) {
      Ls.ii(t2);
    }
    return null;
  }, ni(t2) {
    try {
      return JSON.parse(Ls.ti(t2)) || null;
    } catch (t3) {
    }
    return null;
  }, ei(i2, e2) {
    try {
      return null == t || t.sessionStorage.setItem(i2, JSON.stringify(e2)), true;
    } catch (t2) {
      Ls.ii(t2);
    }
    return false;
  }, ri(i2) {
    try {
      null == t || t.sessionStorage.removeItem(i2);
    } catch (t2) {
      Ls.ii(t2);
    }
  } };
  var Us = class {
    constructor(t2) {
      this._instance = t2;
    }
    get vn() {
      return this._instance.config;
    }
    get consent() {
      return this.Hs() ? 0 : this.zs;
    }
    isOptedOut() {
      return this.vn.cookieless_mode === Vr || this.isRejected() || -1 === this.consent && this.vn.cookieless_mode === Hr;
    }
    isOptedIn() {
      return !this.isOptedOut();
    }
    isExplicitlyOptedOut() {
      return 0 === this.consent;
    }
    isRejected() {
      return 0 === this.consent || -1 === this.consent && this.vn.opt_out_capturing_by_default;
    }
    optInOut(t2) {
      this.Us.ei(this.Ws, t2 ? 1 : 0, this.vn.cookie_expiration, this.vn.cross_subdomain_cookie, this.vn.secure_cookie);
    }
    reset() {
      this.Us.ri(this.Ws, this.vn.cross_subdomain_cookie);
    }
    get Ws() {
      var t2 = this._instance.config, i2 = t2.token, e2 = t2.opt_out_capturing_cookie_prefix;
      return t2.consent_persistence_name || (e2 ? e2 + i2 : "__ph_opt_in_out_" + i2);
    }
    get zs() {
      var t2 = this.Us.ti(this.Ws);
      return dt(t2) ? 1 : N(vt, t2) ? 0 : -1;
    }
    get Us() {
      var t2 = this.vn.opt_out_capturing_persistence_type, i2 = "localStorage" === t2 ? Ss : xs;
      if (!this.Vs || this.Vs !== i2) {
        this.Vs = i2;
        var e2 = "localStorage" === t2 ? xs : Ss;
        e2.ti(this.Ws) && (this.Vs.ti(this.Ws) || this.optInOut(dt(e2.ti(this.Ws))), e2.ri(this.Ws, this.vn.cross_subdomain_cookie));
      }
      return this.Vs;
    }
    Hs() {
      return !!this.vn.respect_dnt && [null == e ? void 0 : e.doNotTrack, null == e ? void 0 : e.msDoNotTrack, v.doNotTrack].some(((t2) => dt(t2)));
    }
  };
  function js(t2, i2) {
    var e2, r2 = null == t2 || null == (e2 = t2.config) ? void 0 : e2.get_current_url;
    if (!V(r2)) return i2;
    try {
      var s2 = r2(i2);
      return J(s2) && s2 ? s2 : i2;
    } catch (t3) {
      return Ie.error("Error in get_current_url, falling back to window.location.href", t3), i2;
    }
  }
  var Bs = "__POSTHOG_TOOLBAR__";
  var zs = 1;
  var qs = 3;
  var Hs = 11;
  function Vs(t2) {
    return t2 instanceof Element && (t2.id === Bs || !(null == t2.closest || !t2.closest(".toolbar-global-fade-container")));
  }
  function Ws(t2) {
    return !!t2 && t2.nodeType === zs;
  }
  function Gs(t2, i2) {
    return !!t2 && !!t2.tagName && t2.tagName.toLowerCase() === i2.toLowerCase();
  }
  function Ks(t2) {
    return !!t2 && t2.nodeType === qs;
  }
  function Js(t2) {
    return !!t2 && t2.nodeType === Hs && Ws(t2.host);
  }
  var Ys = 1e3;
  function Qs(t2) {
    return t2 ? L(t2).split(/\s+/) : [];
  }
  function Xs(i2, e2) {
    var r2 = (function(i3) {
      var e3, r3 = null == t || null == (e3 = t.location) ? void 0 : e3.href;
      return K(r3) ? void 0 : js(i3, r3);
    })(e2);
    return !!(r2 && i2 && i2.some(((t2) => r2.match(t2))));
  }
  function Zs(t2) {
    var i2 = "";
    switch (typeof t2.className) {
      case "string":
        i2 = t2.className;
        break;
      case "object":
        i2 = (t2.className && "baseVal" in t2.className ? t2.className.baseVal : null) || t2.getAttribute("class") || "";
        break;
      default:
        i2 = "";
    }
    return Qs(i2);
  }
  function tn(t2) {
    return X(t2) ? null : L(t2).split(/(\s+)/).filter(((t3) => kn(t3))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
  }
  function en(t2) {
    var i2 = "";
    return _n(t2) && !gn(t2) && t2.childNodes && t2.childNodes.length && es(t2.childNodes, (function(t3) {
      var e2;
      Ks(t3) && t3.textContent && (i2 += null !== (e2 = tn(t3.textContent)) && void 0 !== e2 ? e2 : "");
    })), L(i2);
  }
  function rn(t2) {
    var i2;
    return K(t2.target) ? t2.srcElement || null : null != (i2 = t2.target) && i2.shadowRoot ? t2.composedPath()[0] || null : t2.target || null;
  }
  var sn = ["a", "button", "form", "input", "select", "textarea", "label"];
  function nn(t2, i2) {
    if (K(i2)) return true;
    var e2, r2 = function(t3) {
      if (i2.some(((i3) => (function(t4, i4) {
        var e3 = t4.matches || t4.matchesSelector || t4.msMatchesSelector || t4.mozMatchesSelector || t4.webkitMatchesSelector || t4.oMatchesSelector;
        try {
          return !!e3 && e3.call(t4, i4);
        } catch (t5) {
          return false;
        }
      })(t3, i3)))) return { v: true };
    };
    for (var s2 of t2) if (e2 = r2(s2)) return e2.v;
    return false;
  }
  function on(t2) {
    var i2 = t2.parentNode;
    return !(!i2 || !Ws(i2)) && i2;
  }
  var an = [".ph-no-autocapture", "[data-ph-no-autocapture]"];
  var ln = ["next", "previous", "prev", ">", "<"];
  var hn = [...ln, "+", "-", "\u2212", "\u2013"];
  var un = (t2, i2) => /[a-z0-9]/i.test(i2) ? t2.includes(i2) : t2 === i2;
  var dn = [".ph-no-rageclick", ".ph-no-capture"];
  var vn = ["", "text", "search", "email", "password", "url", "tel", "number"];
  function cn(i2, e2) {
    if (!t || fn(i2)) return false;
    var r2, s2, n2, o2, a2;
    if (it(e2) ? (r2 = !!e2 && dn, s2 = void 0, n2 = false) : (r2 = null !== (o2 = null == e2 ? void 0 : e2.css_selector_ignorelist) && void 0 !== o2 ? o2 : dn, s2 = null == e2 ? void 0 : e2.content_ignorelist, n2 = null !== (a2 = null == e2 ? void 0 : e2.ignore_text_selection) && void 0 !== a2 && a2), false === r2) return false;
    if (n2 && (function(t2) {
      return !(!t2 || !Ws(t2)) && (!!Gs(t2, "textarea") || (Gs(t2, "input") ? N(vn, (t2.getAttribute("type") || "").toLowerCase()) : (function(t3) {
        if (t3.isContentEditable) return true;
        var i3 = null == t3.getAttribute ? void 0 : t3.getAttribute("contenteditable");
        return "true" === i3 || "" === i3;
      })(t2)));
    })(i2)) return false;
    var l2 = pn(i2, false).targetElementList;
    return !(function(t2, i3) {
      if (false === t2 || K(t2)) return false;
      var e3;
      if (true === t2) e3 = ln;
      else {
        if (!H(t2)) return false;
        if (t2.length > 10) return Ie.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."), false;
        e3 = t2.map(((t3) => t3.toLowerCase()));
      }
      return i3.some(((t3) => {
        var i4 = t3.safeText, r3 = t3.ariaLabel;
        return e3.some(((t4) => un(i4, t4) || un(r3, t4)));
      }));
    })(s2, l2.map(((t2) => {
      var i3;
      return { safeText: en(t2).toLowerCase(), ariaLabel: (null == (i3 = t2.getAttribute("aria-label")) ? void 0 : i3.toLowerCase().trim()) || "" };
    }))) && !nn(l2, r2);
  }
  var fn = (t2) => !t2 || Gs(t2, "html") || !Ws(t2);
  var pn = (i2, e2) => {
    if (!t || fn(i2)) return { parentIsUsefulElement: false, targetElementList: [] };
    for (var r2 = false, s2 = [i2], n2 = i2; n2.parentNode && !Gs(n2, "body"); ) if (Js(n2.parentNode)) s2.push(n2.parentNode.host), n2 = n2.parentNode.host;
    else {
      var o2 = on(n2);
      if (!o2) break;
      if (e2 || sn.indexOf(o2.tagName.toLowerCase()) > -1) r2 = true;
      else try {
        var a2 = t.getComputedStyle(o2);
        a2 && "pointer" === a2.getPropertyValue("cursor") && (r2 = true);
      } catch (t2) {
      }
      s2.push(o2), n2 = o2;
    }
    return { parentIsUsefulElement: r2, targetElementList: s2 };
  };
  function _n(t2) {
    for (var i2 = /* @__PURE__ */ new Set(), e2 = 0, r2 = t2; r2.parentNode && !Gs(r2, "body"); r2 = r2.parentNode) {
      if (e2++ >= Ys || i2.has(r2)) return false;
      i2.add(r2);
      var s2 = Zs(r2);
      if (N(s2, "ph-sensitive") || N(s2, "ph-no-capture")) return false;
    }
    if (N(Zs(t2), "ph-include")) return true;
    var n2 = t2.type || "";
    if (J(n2)) switch (n2.toLowerCase()) {
      case "hidden":
      case "password":
        return false;
    }
    var o2 = t2.name || t2.id || "";
    return !J(o2) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(o2.replace(/[^a-zA-Z0-9]/g, ""));
  }
  function gn(t2) {
    return !!(Gs(t2, "input") && !["button", "checkbox", "submit", "reset"].includes(t2.type) || Gs(t2, "select") || Gs(t2, "textarea") || "true" === t2.getAttribute("contenteditable"));
  }
  var mn = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$");
  var yn = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g;
  var bn = [16, 15, 14, 13];
  var wn = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$");
  var xn = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g");
  var En = /[0-9A-Za-z_]/;
  function Sn(t2) {
    for (var i2 = 0, e2 = false, r2 = t2.length - 1; r2 >= 0; r2--) {
      var s2 = t2.charCodeAt(r2) - 48;
      e2 && (s2 *= 2) > 9 && (s2 -= 9), i2 += s2, e2 = !e2;
    }
    return i2 % 10 == 0;
  }
  function kn(t2, i2) {
    if (void 0 === i2 && (i2 = true), X(t2)) return false;
    if (J(t2)) {
      t2 = L(t2);
      var e2 = i2 ? mn.test((t2 || "").replace(/[- ]/g, "")) : (function(t3) {
        var i3;
        for (yn.lastIndex = 0; i3 = yn.exec(t3); ) {
          var e3 = i3[2];
          if (e3) for (var r3 = e3.replace(/[- ]/g, ""), s2 = 0; r3.length > s2; s2++) for (var n2 of bn) {
            var o2 = s2 + n2;
            if (r3.length >= o2) {
              var a2 = r3.slice(s2, o2);
              if (mn.test(a2) && Sn(a2)) return true;
            }
          }
        }
        return false;
      })(t2);
      if (e2) return false;
      var r2 = i2 ? wn.test(t2) : (function(t3) {
        var i3;
        for (xn.lastIndex = 0; i3 = xn.exec(t3); ) {
          var e3 = i3[1], r3 = i3[3];
          if (!(e3 && r3 && En.test(e3) && En.test(r3))) return true;
        }
        return false;
      })(t2);
      if (r2) return false;
    }
    return true;
  }
  function Tn(t2) {
    var i2 = en(t2);
    return kn(i2 = (i2 + " " + $n(t2)).trim()) ? i2 : "";
  }
  function $n(t2) {
    var i2 = "";
    return t2 && t2.childNodes && t2.childNodes.length && es(t2.childNodes, (function(t3) {
      var e2;
      if (t3 && "span" === (null == (e2 = t3.tagName) ? void 0 : e2.toLowerCase())) try {
        var r2 = en(t3);
        i2 = (i2 + " " + r2).trim(), t3.childNodes && t3.childNodes.length && (i2 = (i2 + " " + $n(t3)).trim());
      } catch (t4) {
        Ie.error("[AutoCapture]", t4);
      }
    })), i2;
  }
  function Pn(t2) {
    return t2.replace(/"|\\"/g, '\\"');
  }
  function Rn(t2) {
    var i2 = t2.attr__class;
    if (i2) return H(i2) ? i2 : Qs(i2);
  }
  var Cn = Ae("[Dead Clicks]");
  var On = () => true;
  var In = (t2) => {
    var i2, e2 = !(null == (i2 = t2.instance.persistence) || !i2.get_property(Qe)), r2 = t2.instance.config.capture_dead_clicks;
    return it(r2) ? r2 : !!W(r2) || e2;
  };
  var An = class {
    get lazyLoadedDeadClicksAutocapture() {
      return this.Gs;
    }
    constructor(t2, i2, e2) {
      this.instance = t2, this.isEnabled = i2, this.onCapture = e2, this.startIfEnabledOrStop();
    }
    onRemoteConfig(t2) {
      if (t2.ok) {
        var i2 = t2.config;
        "captureDeadClicks" in i2 && (this.instance.persistence && this.instance.persistence.register({ [Qe]: i2.captureDeadClicks }), this.startIfEnabledOrStop());
      }
    }
    startIfEnabledOrStop() {
      this.isEnabled(this) ? this.Zs((() => {
        this.Qs();
      })) : this.stop();
    }
    Zs(t2) {
      var i2, e2;
      null != (i2 = v.__PosthogExtensions__) && i2.initDeadClicksAutocapture ? t2() : null == (e2 = v.__PosthogExtensions__) || null == e2.loadExternalDependency || e2.loadExternalDependency(this.instance, "dead-clicks-autocapture", ((i3) => {
        i3 ? Cn.error("failed to load script", i3) : t2();
      }));
    }
    Qs() {
      var t2;
      if (r) {
        if (!this.Gs && null != (t2 = v.__PosthogExtensions__) && t2.initDeadClicksAutocapture) {
          var i2 = W(this.instance.config.capture_dead_clicks) ? _({}, this.instance.config.capture_dead_clicks) : {};
          i2.__onCapture = this.onCapture, this.onCapture && (i2.capture_dead_swipes = false), this.Gs = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, i2), this.Gs.start(r), Cn.info("starting...");
        }
      } else Cn.error("`document` not found. Cannot start.");
    }
    stop() {
      this.Gs && (this.Gs.stop(), this.Gs = void 0, Cn.info("stopping..."));
    }
  };
  var Fn = Ae("[SegmentIntegration]");
  var Mn = "posthog-js";
  function Dn(t2, i2) {
    var e2 = void 0 === i2 ? {} : i2, r2 = e2.organization, s2 = e2.projectId, n2 = e2.prefix, o2 = e2.severityAllowList, a2 = void 0 === o2 ? ["error"] : o2, l2 = e2.sendExceptionsToPostHog, h2 = void 0 === l2 || l2;
    return (i3) => {
      var e3, o3, l3, u2, d2;
      if ("*" !== a2 && !a2.includes(i3.level) || !t2.__loaded) return i3;
      i3.tags || (i3.tags = {});
      var v2 = t2.requestRouter.endpointFor("ui", "/project/" + t2.config.token + "/person/" + t2.get_distinct_id());
      i3.tags["PostHog Person URL"] = v2, t2.sessionRecordingStarted() && (i3.tags["PostHog Recording URL"] = t2.get_session_replay_url({ withTimestamp: true }));
      var c2, f2 = (null == (e3 = i3.exception) ? void 0 : e3.values) || [], p2 = f2.map(((t3) => _({}, t3, { stacktrace: t3.stacktrace ? _({}, t3.stacktrace, { type: "raw", frames: (t3.stacktrace.frames || []).map(((t4) => _({}, t4, { platform: "web:javascript" }))) }) : void 0 }))), g2 = { $exception_message: (null == (o3 = f2[0]) ? void 0 : o3.value) || i3.message, $exception_type: null == (l3 = f2[0]) ? void 0 : l3.type, $exception_level: i3.level, $exception_list: p2, $sentry_event_id: i3.event_id, $sentry_exception: i3.exception, $sentry_exception_message: (null == (u2 = f2[0]) ? void 0 : u2.value) || i3.message, $sentry_exception_type: null == (d2 = f2[0]) ? void 0 : d2.type, $sentry_tags: i3.tags };
      return r2 && s2 && (g2.$sentry_url = (n2 || "https://sentry.io/organizations/") + r2 + "/issues/?project=" + s2 + "&query=" + i3.event_id), h2 && (null == (c2 = t2.exceptions) || c2.sendExceptionEvent(g2)), i3;
    };
  }
  var Nn = class {
    constructor(t2, i2, e2, r2, s2, n2) {
      this.name = Mn, this.setupOnce = function(o2) {
        o2(Dn(t2, { organization: i2, projectId: e2, prefix: r2, severityAllowList: s2, sendExceptionsToPostHog: null == n2 || n2 }));
      };
    }
  };
  var Ln = class {
    constructor(t2) {
      this.Js = (t3, i2, e2) => {
        e2 && (e2.noSessionId || e2.activityTimeout || e2.sessionPastMaximumLength || e2.crossTabAdoption) && (Ie.info("[PageViewManager] Session rotated, clearing pageview state", { sessionId: t3, changeReason: e2 }), this.Ks = void 0, this._instance.scrollManager.resetContext());
      }, this._instance = t2, this.Ys();
    }
    Ys() {
      var t2;
      this.Xs = null == (t2 = this._instance.sessionManager) ? void 0 : t2.onSessionId(this.Js);
    }
    destroy() {
      var t2;
      null == (t2 = this.Xs) || t2.call(this), this.Xs = void 0;
    }
    doPageView(i2, e2) {
      var r2, s2 = this.ta(i2, e2);
      return this.Ks = { pathname: null !== (r2 = null == t ? void 0 : t.location.pathname) && void 0 !== r2 ? r2 : "", pageViewId: e2, timestamp: i2 }, this._instance.scrollManager.resetContext(), s2;
    }
    doPageLeave(t2) {
      var i2;
      return this.ta(t2, null == (i2 = this.Ks) ? void 0 : i2.pageViewId);
    }
    doEvent() {
      var t2;
      return { $pageview_id: null == (t2 = this.Ks) ? void 0 : t2.pageViewId };
    }
    ta(t2, i2) {
      var e2 = this.Ks;
      if (!e2) return { $pageview_id: i2 };
      var r2 = { $pageview_id: i2, $prev_pageview_id: e2.pageViewId }, s2 = this._instance.scrollManager.getContext();
      if (s2 && !this._instance.config.disable_scroll_properties) {
        var n2 = s2.maxScrollHeight, o2 = s2.lastScrollY, a2 = s2.maxScrollY, l2 = s2.maxContentHeight, h2 = s2.lastContentY, u2 = s2.maxContentY;
        if (!(K(n2) || K(o2) || K(a2) || K(l2) || K(h2) || K(u2))) {
          n2 = Math.ceil(n2), o2 = Math.ceil(o2), a2 = Math.ceil(a2), l2 = Math.ceil(l2), h2 = Math.ceil(h2), u2 = Math.ceil(u2);
          var d2 = n2 > 1 ? ct(o2 / n2, 0, 1, Ie) : 1, v2 = n2 > 1 ? ct(a2 / n2, 0, 1, Ie) : 1, c2 = l2 > 1 ? ct(h2 / l2, 0, 1, Ie) : 1, f2 = l2 > 1 ? ct(u2 / l2, 0, 1, Ie) : 1;
          r2 = rs(r2, { $prev_pageview_last_scroll: o2, $prev_pageview_last_scroll_percentage: d2, $prev_pageview_max_scroll: a2, $prev_pageview_max_scroll_percentage: v2, $prev_pageview_last_content: h2, $prev_pageview_last_content_percentage: c2, $prev_pageview_max_content: u2, $prev_pageview_max_content_percentage: f2 });
        }
      }
      return e2.pathname && (r2.$prev_pageview_pathname = e2.pathname), e2.timestamp && (r2.$prev_pageview_duration = (t2.getTime() - e2.timestamp.getTime()) / 1e3), r2;
    }
  };
  var Un = ["flags", "surveys"];
  var jn = { [Ue]: { exposure: "hidden" }, [qe]: { exposure: "hidden" }, __cmpns: { exposure: "hidden" }, [He]: { exposure: "hidden" }, [Ve]: { exposure: "event" }, [We]: { exposure: "hidden" }, [Ze]: { exposure: "hidden" }, [Ge]: { exposure: "event" }, [Ke]: { exposure: "hidden" }, [Je]: { exposure: "event" }, [Ye]: { exposure: "event" }, [Qe]: { exposure: "event" }, [Xe]: { exposure: "hidden" }, [tr]: { exposure: "event" }, [ir]: { exposure: "hidden" }, $session_recording_enabled_server_side: { exposure: "hidden" }, [ar]: { exposure: "hidden" }, [lr]: { exposure: "event" }, [er]: { exposure: "event", shouldSkipFromEventProperties: (t2) => Q(t2) }, $session_past_minimum_duration: { exposure: "event" }, $session_recording_url_trigger_activated_session: { exposure: "event" }, $session_recording_event_trigger_activated_session: { exposure: "event" }, $debug_first_full_snapshot_timestamp: { exposure: "event" }, $sess_rec_flush_size: { exposure: "hidden" }, [hr]: { exposure: "hidden", storageGroup: "flags" }, [ur]: { exposure: "hidden", storageGroup: "flags" }, [dr]: { exposure: "hidden" }, [vr]: { exposure: "hidden", storageGroup: "flags" }, [cr]: { exposure: "hidden", storageGroup: "flags" }, [fr]: { exposure: "hidden", storageGroup: "flags", volatile: true }, [pr]: { exposure: "hidden", storageGroup: "flags" }, [_r]: { exposure: "hidden" }, [gr]: { exposure: "hidden" }, [mr]: { exposure: "hidden" }, [yr]: { exposure: "hidden" }, [wr]: { exposure: "hidden", storageGroup: "surveys" }, [xr]: { exposure: "hidden", storageGroup: "surveys", volatile: true }, [Er]: { exposure: "event" }, [Sr]: { exposure: "hidden" }, [kr]: { exposure: "hidden" }, [Tr]: { exposure: "hidden" }, $product_tours_activated: { exposure: "hidden" }, $product_tours_activated_session: { exposure: "hidden" }, $conversations_widget_session_id: { exposure: "event" }, $conversations_ticket_id: { exposure: "event" }, $conversations_widget_state: { exposure: "event" }, $conversations_user_traits: { exposure: "event" }, [$r]: { exposure: "hidden" }, [Pr]: { exposure: "hidden" }, [br]: { exposure: "event" }, [Rr]: { exposure: "hidden" }, [Cr]: { exposure: "hidden", storageGroup: "flags", volatile: true }, [Or]: { exposure: "hidden" }, [Ir]: { exposure: "hidden" }, [Ar]: { exposure: "hidden" }, [Fr]: { exposure: "hidden" }, [Mr]: { exposure: "hidden" }, [Dr]: { exposure: "hidden" }, [Nr]: { exposure: "hidden" }, [rr]: { exposure: "event" }, [sr]: { exposure: "event" }, [nr]: { exposure: "event" }, [or]: { exposure: "event" }, [jr]: { exposure: "event" }, [Br]: { exposure: "event" }, [zr]: { exposure: "event" }, $sdk_debug_replay_event_trigger_status: { exposure: "event" }, $sdk_debug_replay_linked_flag_trigger_status: { exposure: "event" }, $sdk_debug_replay_matched_recording_trigger_groups: { exposure: "event" }, $sdk_debug_replay_pending_trigger_conditions: { exposure: "event" }, $sdk_debug_replay_remote_trigger_matching_config: { exposure: "event" }, $sdk_debug_replay_trigger_groups_count: { exposure: "event" }, $sdk_debug_replay_url_trigger_status: { exposure: "event" }, $session_recording_start_reason: { exposure: "event" } };
  var Bn = [["$posthog_sr_group_event_trigger_", { exposure: "hidden" }], ["$posthog_sr_group_url_trigger_", { exposure: "hidden" }], ["$posthog_sr_group_sampling_", { exposure: "hidden" }]];
  var zn = (t2) => {
    var i2 = jn[t2];
    if (i2) return i2;
    for (var e2 of Bn) {
      var r2 = e2[1];
      if (0 === t2.indexOf(e2[0])) return r2;
    }
  };
  var qn = (t2, i2) => {
    try {
      return JSON.stringify(t2, ((t3, i3) => "bigint" == typeof i3 ? i3.toString() : i3), i2);
    } catch (i3) {
      return j(t2);
    }
  };
  var Hn = (t2) => {
    var i2 = null == r ? void 0 : r.createElement("a");
    return K(i2) ? null : (i2.href = t2, i2);
  };
  var Vn = function(t2, i2) {
    for (var e2, r2 = ((t2.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), s2 = 0; r2.length > s2; s2++) {
      var n2 = r2[s2].split("=");
      if (n2[0] === i2) {
        e2 = n2;
        break;
      }
    }
    if (!H(e2) || 2 > e2.length) return "";
    var o2 = e2[1];
    try {
      o2 = decodeURIComponent(o2);
    } catch (t3) {
      Ie.error("Skipping decoding for malformed query param: " + o2);
    }
    return o2.replace(/\+/g, " ");
  };
  var Wn = function(t2, i2, e2) {
    if (!t2 || !i2 || !i2.length) return t2;
    for (var r2 = t2.split("#"), s2 = r2[1], n2 = (r2[0] || "").split("?"), o2 = n2[1], a2 = n2[0], l2 = (o2 || "").split("&"), h2 = [], u2 = 0; l2.length > u2; u2++) {
      var d2 = l2[u2].split("=");
      H(d2) && (i2.includes(d2[0]) ? h2.push(d2[0] + "=" + e2) : h2.push(l2[u2]));
    }
    var v2 = a2;
    return null != o2 && (v2 += "?" + h2.join("&")), null != s2 && (v2 += "#" + s2), v2;
  };
  var Gn = function(t2, i2) {
    var e2 = t2.match(new RegExp(i2 + "=([^&]*)"));
    return e2 ? e2[1] : null;
  };
  var Kn = (t2, i2) => t2 >= i2 && u();
  var Jn = (t2, i2, e2, r2) => {
    if (0 === t2) {
      if (u()) {
        var s2 = i2 + 1;
        return s2 === e2 && r2(), s2;
      }
      return i2;
    }
    return 0;
  };
  var Yn = "https?://(.*)";
  var Qn = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx"];
  var Xn = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...Qn];
  var Zn = "<masked>";
  var to = ["li_fat_id"];
  function io(t2, i2, e2) {
    if (!r) return {};
    var s2, n2 = i2 ? [...Qn, ...e2 || []] : [], o2 = eo(Wn(r.URL, n2, Zn), t2), a2 = (s2 = {}, es(to, (function(t3) {
      var i3 = vs(t3);
      s2[t3] = i3 || null;
    })), s2);
    return rs(a2, o2);
  }
  function eo(t2, i2) {
    var e2 = Xn.concat(i2 || []), r2 = {};
    return es(e2, (function(i3) {
      var e3 = Vn(t2, i3);
      r2[i3] = e3 || null;
    })), r2;
  }
  function ro(t2) {
    var i2 = (function(t3) {
      return t3 ? 0 === t3.search(Yn + "google.([^/?]*)") ? "google" : 0 === t3.search(Yn + "bing.com") ? "bing" : 0 === t3.search(Yn + "yahoo.com") ? "yahoo" : 0 === t3.search(Yn + "duckduckgo.com") ? "duckduckgo" : null : null;
    })(t2), e2 = "yahoo" != i2 ? "q" : "p", s2 = {};
    if (!Q(i2)) {
      s2.$search_engine = i2;
      var n2 = r ? Vn(r.referrer, e2) : "";
      n2.length && (s2.ph_keyword = n2);
    }
    return s2;
  }
  function so() {
    return navigator.language || navigator.userLanguage;
  }
  var no = "$direct";
  function oo() {
    return (null == r ? void 0 : r.referrer) || no;
  }
  function ao(t2, i2, e2) {
    void 0 === e2 && (e2 = false);
    var r2 = t2 ? [...Qn, ...i2 || []] : [], n2 = e2 ? xi(null == s ? void 0 : s.href) : null == s ? void 0 : s.href, o2 = null == n2 ? void 0 : n2.substring(0, 1e3);
    return { r: oo().substring(0, 1e3), u: o2 ? Wn(o2, r2, Zn) : void 0 };
  }
  function lo(t2, i2) {
    var e2;
    void 0 === i2 && (i2 = false);
    var r2 = t2.r, s2 = t2.u, n2 = i2 ? xi(s2) : s2, o2 = { $referrer: r2, $referring_domain: null == r2 ? void 0 : r2 == no ? no : null == (e2 = Hn(r2)) ? void 0 : e2.host };
    if (n2) {
      o2.$current_url = n2;
      var a2 = Hn(n2);
      o2.$host = null == a2 ? void 0 : a2.host, o2.$pathname = null == a2 ? void 0 : a2.pathname;
      var l2 = eo(n2);
      rs(o2, l2);
    }
    if (r2) {
      var h2 = ro(r2);
      rs(o2, h2);
    }
    return o2;
  }
  function ho() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (t2) {
      return;
    }
  }
  function uo() {
    try {
      return (/* @__PURE__ */ new Date()).getTimezoneOffset();
    } catch (t2) {
      return;
    }
  }
  var vo = { flags: Cr, surveys: xr };
  var co = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
  var fo = (t2) => t2 + "_cookie_identity_change_pending";
  var po = "main";
  var _o = (t2, i2) => {
    es(t2, ((e2, r2) => {
      var s2 = zn(r2);
      s2 && "event" !== s2.exposure || {}.hasOwnProperty.call(i2, r2) || delete t2[r2];
    }));
  };
  var go = class {
    constructor(i2, e2, r2) {
      if (void 0 === r2 && (r2 = true), this.ea = {}, this.ia = false, this.ra = false, this.na = false, this.sa = false, this.vn = i2, this.aa = r2, this.props = {}, this.oa = void 0, this.la = ((t2) => {
        var i3 = "";
        return t2.token && (i3 = t2.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t2.persistence_name ? "ph_" + t2.persistence_name : "ph_" + i3 + "_posthog";
      })(i2), this.Us = this.ua(i2), this.ra = this.ha(i2), this.load(), i2.debug && Ie.info("Persistence loaded", i2.persistence, _({}, this.props)), this.update_config(i2, i2, e2), this.save(), t) {
        var s2 = () => this.flush();
        us(t, "beforeunload", s2, { capture: false }), us(t, "pagehide", s2, { capture: false });
      }
    }
    da() {
      var t2, i2 = null == (t2 = this.vn) ? void 0 : t2.persistence_save_debounce_ms;
      return Z(i2) && i2 > 0 ? i2 : 0;
    }
    va(t2) {
      if (this.vn.cookieWinsOnConflict && "localstorage+cookie" === this.vn.persistence.toLowerCase()) if (t2) try {
        var i2 = Cs(t2, this.vn.cookie_persisted_properties || []), e2 = Is(i2, this.vn.cookie_persisted_properties || []), r2 = JSON.stringify(i2) + "|" + JSON.stringify(e2), s2 = xs.ti(this.la) || void 0;
        s2 && Fs(this.la, s2) === r2 && (this.ca = r2, this.fa = s2);
      } catch (t3) {
      }
      else try {
        var n2 = xs.ti(this.la) || void 0;
        this.ca = n2 ? Fs(this.la, n2) : void 0, this.fa = n2;
      } catch (t3) {
      }
    }
    syncCookieProperties() {
      return this.pa(this.vn);
    }
    pa(t2, i2) {
      if (void 0 === i2 && (i2 = false), this.ga && !i2 || this.sa || !t2.cookieWinsOnConflict || "localstorage+cookie" !== t2.persistence.toLowerCase()) return false;
      var e2;
      try {
        e2 = xs.ti(this.la) || void 0;
      } catch (t3) {
      }
      if (!e2 || e2 === this.fa) return false;
      var r2, s2 = Fs(this.la, e2);
      try {
        r2 = Rs(JSON.parse(e2));
      } catch (t3) {
        return false;
      }
      if ((xs.ti(this.la) || void 0) !== e2) return false;
      this.ca = s2, this.fa = e2;
      var n2 = As(this.la, e2), o2 = [...Ts, ...n2.properties], a2 = {};
      if (Object.keys(r2).forEach(((t3) => {
        var i3 = r2[t3];
        (K(i3) || Q(i3) || "" === i3 || t3 === Or && i3 !== Wr && i3 !== Gr) && (a2[t3] = true, delete r2[t3]);
      })), G(r2)) return false;
      var l2 = je in r2 || r2[Or] === Wr || r2[Or] === Gr, h2 = this.props[je], u2 = this.props[Or], d2 = rs({}, this.props);
      [...Ts, ...t2.cookie_persisted_properties || []].forEach(((t3) => {
        if (-1 !== o2.indexOf(t3) && !(t3 in r2) && !a2[t3] && (l2 || t3 !== je && t3 !== Or)) {
          var i3 = d2[t3];
          !n2.isValid && -1 !== Ts.indexOf(t3) && (false === i3 || 0 === i3) || delete d2[t3];
        }
      })), this.props = rs(d2, r2), !l2 || Or in r2 || Or in this.props || this.ma(Or, Wr);
      var v2 = this.props[je], c2 = this.props[Or];
      return !l2 || v2 === h2 && c2 === u2 || (this.na = true, Ls.ei(fo(this.la), true), this.ya(mr), this.ya(ur), this.ya(hr), this.ya(vr), this.ya(cr), this.ya(fr), this.ya(Cr), this.ya(Rr), this.ya($r), c2 === Wr && (u2 === Gr || r2[Or] === Wr || !K(h2) && v2 !== h2) && (_o(this.props, r2), this.ya(yr)), c2 === Gr ? this.props.$user_id = v2 : delete this.props.$user_id, this.ya(qe)), true;
    }
    consumeCookieIdentityChange() {
      var t2 = fo(this.la), i2 = this.na || !!Ls.ti(t2);
      return this.na = false, i2 && Ls.ri(t2), i2;
    }
    ba(t2) {
      return void 0 === t2 && (t2 = false), !(this.sa || this.ga && !t2 || !this.vn.cookieWinsOnConflict || "localstorage+cookie" !== this.vn.persistence.toLowerCase() || (this.sa = true, 0));
    }
    _a() {
      this.sa && (K(this.wa) || (clearTimeout(this.wa), this.wa = void 0), delete this.ea[po], this.ka(true));
    }
    Sa(t2) {
      if (void 0 === t2 && (t2 = true), this.sa) try {
        t2 ? this._a() : K(this.wa) || (clearTimeout(this.wa), this.wa = void 0);
      } finally {
        this.sa = false;
      }
    }
    isDisabled() {
      return !!this.ga;
    }
    ua(i2) {
      -1 === co.indexOf(i2.persistence.toLowerCase()) && (Ie.critical("Unknown persistence type " + i2.persistence + "; falling back to localStorage+cookie"), i2.persistence = "localStorage+cookie");
      var e2, r2 = (function(i3, e3) {
        void 0 === i3 && (i3 = []), void 0 === e3 && (e3 = false);
        var r3 = [...Ts, ...i3];
        return _({}, Ss, { ni(t2) {
          try {
            var i4, s3 = {};
            try {
              i4 = xs.ti(t2) || void 0, s3 = i4 ? Rs(JSON.parse(i4)) : {};
            } catch (t3) {
            }
            var n3, o2 = JSON.parse(Ss.ti(t2) || "{}");
            if (e3) {
              var a2 = As(t2, i4), l2 = [...Ts, ...a2.properties], h2 = {};
              Object.keys(s3).forEach(((t3) => {
                var i5 = s3[t3];
                Q(i5) || "" === i5 || t3 === Or && i5 !== Wr && i5 !== Gr || (h2[t3] = i5);
              }));
              var u2 = je in h2 || h2[Or] === Wr || h2[Or] === Gr;
              if (Object.keys(h2).length > 0) {
                var d2, v2 = o2[je], c2 = null !== (d2 = o2[Or]) && void 0 !== d2 ? d2 : Wr;
                r3.forEach(((t3) => {
                  if (-1 !== l2.indexOf(t3) && !(t3 in s3) && (u2 || t3 !== je && t3 !== Or)) {
                    var i5 = o2[t3];
                    !a2.isValid && -1 !== Ts.indexOf(t3) && (false === i5 || 0 === i5) || delete o2[t3];
                  }
                })), !u2 || Or in s3 || Or in o2 || (o2[Or] = Wr), !u2 || (je in h2 ? h2[je] : o2[je]) === v2 && (Or in h2 ? h2[Or] : o2[Or]) === c2 || (ks.forEach(((t3) => delete o2[t3])), h2[Or] === Gr && je in h2 ? o2.$user_id = h2[je] : delete o2.$user_id, h2[Or] !== Gr && (delete o2[br], delete o2[yr]), delete o2.__alias);
              }
              n3 = rs(o2, h2);
            } else n3 = rs(s3, o2);
            return Ss.ei(t2, n3), n3;
          } catch (t3) {
          }
          return null;
        }, ei(t2, r4, s3, n3, o2, a2) {
          var l2 = Ss.ei(t2, r4, void 0, void 0, a2);
          try {
            var h2 = Cs(r4, i3);
            if (Object.keys(h2).length) {
              if (e3) {
                var u2 = $s(t2), d2 = Is(h2, i3);
                if (xs.ei(u2, d2, s3, n3, o2, a2), xs.ti(u2) !== JSON.stringify(d2)) {
                  xs.ri(u2, n3);
                  var v2 = Cs(r4);
                  return xs.ei(t2, v2, s3, n3, o2, a2), l2;
                }
              }
              xs.ei(t2, h2, s3, n3, o2, a2);
            }
          } catch (t3) {
            Ss.ii(t3);
          }
          return l2;
        }, ri(i4, e4) {
          try {
            null == t || t.localStorage.removeItem(i4), xs.ri(i4, e4), xs.ri($s(i4), e4);
          } catch (t2) {
            Ss.ii(t2);
          }
        } });
      })(i2.cookie_persisted_properties || [], i2.cookieWinsOnConflict), s2 = false, n2 = i2.persistence.toLowerCase();
      return "localstorage" === n2 && Ss.Xr() ? (e2 = Ss, s2 = true) : "localstorage+cookie" === n2 && r2.Xr() ? (e2 = r2, s2 = true) : "sessionstorage" === n2 && Ls.Xr() ? e2 = Ls : "memory" === n2 ? e2 = Ds : "cookie" === n2 ? e2 = xs : r2.Xr() ? (e2 = r2, s2 = true) : e2 = xs, this.ia = s2, e2;
    }
    xa(t2) {
      return this.la + "__" + t2;
    }
    ha(t2) {
      return this.ia && !!t2.split_storage;
    }
    properties() {
      var t2 = {};
      return es(this.props, ((i2, e2) => {
        var r2 = zn(e2);
        if (!r2 || "event" === r2.exposure) {
          if (null != r2 && null != r2.shouldSkipFromEventProperties && r2.shouldSkipFromEventProperties(i2)) return;
          t2[e2] = i2;
        }
      })), t2;
    }
    load(t2) {
      if (void 0 === t2 && (t2 = false), !this.ga || t2) {
        var i2 = this.vn.cookieWinsOnConflict && "localstorage+cookie" === this.vn.persistence.toLowerCase(), e2 = i2 ? Ss.ni(this.la) : null, r2 = {};
        if (i2) try {
          es(r2 = Rs(xs.ni(this.la)), ((t3, i3) => {
            (K(t3) || Q(t3) || "" === t3) && delete r2[i3];
          }));
        } catch (t3) {
        }
        var s2 = this.Us.ni(this.la);
        if (s2 && (this.props = rs({}, s2)), this.ra && this.Ca(), i2 && s2) {
          var n2, o2, a2 = null == e2 ? void 0 : e2[je], l2 = null !== (n2 = null == e2 ? void 0 : e2[Or]) && void 0 !== n2 ? n2 : Wr, h2 = s2[je], u2 = null !== (o2 = s2[Or]) && void 0 !== o2 ? o2 : Wr;
          if (h2 !== a2 || u2 !== l2) {
            this.na = true, Ls.ei(fo(this.la), true);
            var d2 = rs({}, this.props);
            ks.forEach(((t3) => delete d2[t3])), u2 === Wr && (l2 === Gr || r2[Or] === Wr || !K(a2) && h2 !== a2) && (_o(d2, r2), delete d2[yr]), this.props = d2;
            var v2 = /* @__PURE__ */ new Set();
            ks.forEach(((t3) => {
              var i3, e3 = null == (i3 = zn(t3)) ? void 0 : i3.storageGroup;
              e3 && v2.add(e3);
            })), v2.forEach(((t3) => {
              var i3 = {};
              es(this.props, ((e3, r3) => {
                var s3;
                (null == (s3 = zn(r3)) ? void 0 : s3.storageGroup) === t3 && (i3[r3] = e3);
              })), G(i3) ? (Ss.ri(this.xa(t3)), this.ea[t3] = {}) : Ss.ei(this.xa(t3), i3) && (this.ea[t3] = { persisted: true, fingerprint: this.Ta(i3, t3) });
            }));
          }
        }
        Ls.ti(fo(this.la)) && (this.na = true);
      }
    }
    Ca() {
      for (var t2 of Un) {
        var i2 = Ss.ni(this.xa(t2));
        if (i2 && !G(i2)) {
          var e2 = this.Ma(t2);
          e2.persisted = true, this.Ea(t2) || (e2.fingerprint = this.Ta(i2, t2)), this.Ia(t2, i2) || rs(this.props, i2);
        }
      }
    }
    Ea(t2) {
      return Object.keys(this.props).some(((i2) => {
        var e2;
        return (null == (e2 = zn(i2)) ? void 0 : e2.storageGroup) === t2;
      }));
    }
    Ia(t2, i2) {
      var e2 = vo[t2];
      if (!e2) return false;
      var r2 = i2[e2], s2 = this.props[e2];
      return Z(r2) && Z(s2) && s2 > r2;
    }
    refreshKey(t2) {
      var i2;
      if (!this.ga) {
        var e2 = this.ra ? null == (i2 = zn(t2)) ? void 0 : i2.storageGroup : void 0, r2 = e2 ? Ss.ni(this.xa(e2)) : this.Us.ni(this.la);
        if (r2 && t2 in r2) this.ma(t2, r2[t2]);
        else {
          if (e2) {
            var s2 = this.Us.ni(this.la);
            if (s2 && t2 in s2) return void this.ma(t2, s2[t2]);
          }
          this.ya(t2);
        }
      }
    }
    save() {
      if (!this.ga) {
        var t2 = this.da();
        t2 > 0 ? K(this.wa) && (this.wa = setTimeout((() => {
          this.wa = void 0, this.ka();
        }), t2)) : this.ka();
      }
    }
    flush() {
      K(this.wa) || (clearTimeout(this.wa), this.wa = void 0, this.ka());
    }
    ka(t2) {
      void 0 === t2 && (t2 = false), this.ga || this.sa && !t2 || (t2 || this.syncCookieProperties(), this.ra ? this.Ra() : this.Pa(this.Us, this.la, this.props, po) && this.va(this.props));
    }
    Ra() {
      var t2 = this.Aa(), i2 = t2.main, e2 = t2.groups;
      for (var r2 of (this.Pa(this.Us, this.la, i2, po) && this.va(i2), Un)) {
        var s2, n2 = e2[r2];
        (!G(n2) || null != (s2 = this.ea[r2]) && s2.persisted) && this.Pa(Ss, this.xa(r2), n2, r2);
      }
    }
    Aa() {
      var t2 = {}, i2 = { flags: {}, surveys: {} };
      return es(this.props, ((e2, r2) => {
        var s2, n2 = null == (s2 = zn(r2)) ? void 0 : s2.storageGroup;
        n2 ? i2[n2][r2] = e2 : t2[r2] = e2;
      })), { main: t2, groups: i2 };
    }
    Ta(t2, i2) {
      if (i2 === po) return JSON.stringify(t2) + "|" + this.Fa + "|" + this.Oa + "|" + this.La;
      var e2 = {};
      return es(t2, ((t3, i3) => {
        var r2;
        e2[i3] = null != (r2 = zn(i3)) && r2.volatile ? "__volatile__" : t3;
      })), JSON.stringify(e2);
    }
    Pa(t2, i2, e2, r2) {
      var s2, n2 = this.Ma(r2);
      if (r2 !== po && !n2.dirty && !K(n2.fingerprint)) return false;
      try {
        if ((s2 = this.Ta(e2, r2)) === n2.fingerprint) return n2.dirty = false, false;
      } catch (t3) {
        s2 = void 0;
      }
      return t2.ei(i2, e2, this.Fa, this.Oa, this.La, this.vn.debug) ? (n2.dirty = false, r2 !== po && (n2.persisted = true), K(s2) || (n2.fingerprint = s2), true) : (this.vn.debug && Ie.warn('failed to persist storage entry "' + i2 + '"; will retry on next save'), false);
    }
    remove(t2) {
      var i2 = (void 0 === t2 ? {} : t2).keepGroupEntries, e2 = void 0 !== i2 && i2;
      if (K(this.wa) || (clearTimeout(this.wa), this.wa = void 0), this.Us.ri(this.la, false), this.Us.ri(this.la, true), !e2 && this.aa) for (var r2 of Un) Ss.ri(this.xa(r2));
      e2 ? delete this.ea[po] : this.ea = {}, this.ca = void 0, this.fa = void 0;
    }
    clear() {
      this.remove(), this.props = {};
    }
    register_once(t2, i2, e2) {
      if (W(t2)) {
        this.syncCookieProperties(), K(i2) && (i2 = "None"), this.Fa = K(e2) ? this.Da : e2;
        var r2 = false;
        if (es(t2, ((t3, e3) => {
          this.props.hasOwnProperty(e3) && this.props[e3] !== i2 || (this.ma(e3, t3), r2 = true);
        })), r2) return this.save(), true;
      }
      return false;
    }
    register(t2, i2) {
      if (W(t2)) {
        this.syncCookieProperties(), this.Fa = K(i2) ? this.Da : i2;
        var e2 = false;
        if (es(t2, ((i3, r2) => {
          t2.hasOwnProperty(r2) && (this.props[r2] !== i3 || W(i3) || H(i3)) && (this.ma(r2, i3), e2 = true);
        })), e2) return this.save(), true;
      }
      return false;
    }
    unregister(t2) {
      this.syncCookieProperties();
      var i2 = "string" == typeof t2 ? [t2] : t2, e2 = false;
      for (var r2 of i2) r2 in this.props && (this.ya(r2), e2 = true);
      e2 && this.save();
    }
    update_campaign_params() {
      var t2 = null == r ? void 0 : r.URL;
      if (t2 !== this.oa) {
        var i2 = io(this.vn.custom_campaign_params, this.vn.mask_personal_data_properties, this.vn.custom_personal_data_properties);
        G(as(i2)) || this.register(i2), this.oa = t2;
      }
    }
    update_search_keyword() {
      var t2;
      this.register((t2 = null == r ? void 0 : r.referrer) ? ro(t2) : {});
    }
    update_referrer_info() {
      var t2;
      this.register_once({ $referrer: oo(), $referring_domain: null != r && r.referrer && (null == (t2 = Hn(r.referrer)) ? void 0 : t2.host) || no }, void 0);
    }
    set_initial_person_info() {
      this.props[Fr] || this.props[Mr] || this.register_once({ [Dr]: ao(this.vn.mask_personal_data_properties, this.vn.custom_personal_data_properties, this.vn.disable_capture_url_hashes) }, void 0);
    }
    get_initial_props() {
      var t2 = {};
      es([Mr, Fr], ((i3) => {
        var e3 = this.props[i3];
        e3 && es(e3, (function(i4, e4) {
          t2["$initial_" + U(e4)] = i4;
        }));
      }));
      var i2 = this.props[Dr];
      if (i2) {
        var e2 = (function(t3, i3) {
          void 0 === i3 && (i3 = false);
          var e3 = lo(t3, i3), r2 = {};
          return es(e3, (function(t4, i4) {
            r2["$initial_" + U(i4)] = t4;
          })), r2;
        })(i2, this.vn.disable_capture_url_hashes);
        rs(t2, e2);
      }
      return t2;
    }
    safe_merge(t2) {
      return es(this.props, (function(i2, e2) {
        e2 in t2 || (t2[e2] = i2);
      })), t2;
    }
    update_config(t2, i2, e2) {
      var r2 = t2.persistence !== i2.persistence, s2 = !((t3, i3) => {
        if (t3.length !== i3.length) return false;
        var e3 = [...t3].sort(), r3 = [...i3].sort();
        return e3.every(((t4, i4) => t4 === r3[i4]));
      })(t2.cookie_persisted_properties || [], i2.cookie_persisted_properties || []), n2 = r2 || s2, o2 = t2.cookieWinsOnConflict !== i2.cookieWinsOnConflict, a2 = t2.disable_persistence || !!e2, l2 = !!this.ga && !a2;
      a2 || this.pa(i2, l2), this.vn = t2, !a2 && (r2 || s2 || o2) && (this.ca = void 0, this.fa = void 0, this.pa(_({}, t2, { cookie_persisted_properties: i2.cookie_persisted_properties }), l2));
      var h2 = n2 || o2 ? this.ua(t2) : this.Us, u2 = this.ha(t2), d2 = n2 || u2 !== this.ra, v2 = !a2 && (d2 || t2.cross_subdomain_cookie !== this.Oa || t2.secure_cookie !== this.La) && this.ba(l2);
      try {
        if (this.Da = this.Fa = t2.cookie_expiration, this.set_disabled(a2), this.set_cross_subdomain(t2.cross_subdomain_cookie), this.set_secure(t2.secure_cookie), d2) {
          var c2 = this.props;
          this.clear(), this.Us = h2, this.ra = u2, this.props = c2, this.save();
        } else o2 && (this.Us = h2, a2 || (delete this.ea[po], this.ka()));
      } finally {
        v2 && this.Sa();
      }
    }
    set_disabled(t2) {
      this.ga = t2, this.ga ? this.remove() : this.save();
    }
    set_cross_subdomain(t2) {
      t2 !== this.Oa && (this.Oa = t2, this.remove({ keepGroupEntries: true }), this.save());
    }
    set_secure(t2) {
      t2 !== this.La && (this.La = t2, this.remove({ keepGroupEntries: true }), this.save());
    }
    set_event_timer(t2, i2) {
      var e2 = this.props[He] || {};
      e2[t2] = i2, this.ma(He, e2), this.save();
    }
    remove_event_timer(t2) {
      var i2 = this.props[He] || {}, e2 = i2[t2];
      return K(e2) || (delete i2[t2], this.ma(He, i2), this.save()), e2;
    }
    get_property(t2) {
      return this.props[t2];
    }
    set_property(t2, i2) {
      this.ma(t2, i2), this.save();
    }
    ma(t2, i2) {
      var e2;
      this.props[t2] = i2, null != (e2 = zn(t2)) && e2.volatile || this.$a(t2);
    }
    ya(t2) {
      delete this.props[t2], this.$a(t2);
    }
    $a(t2) {
      var i2, e2 = null == (i2 = zn(t2)) ? void 0 : i2.storageGroup;
      e2 && (this.Ma(e2).dirty = true);
    }
    Ma(t2) {
      return this.ea[t2] || (this.ea[t2] = {});
    }
  };
  function mo(t2) {
    var i2 = true;
    return { dispose() {
      if (i2) {
        i2 = false;
        var e2 = t2();
        e2 && V(e2.then) && e2.then(void 0, (() => {
        }));
      }
    } };
  }
  var yo = { GZipJS: "gzip-js", Base64: "base64" };
  var bo = { Activation: "events", Cancellation: "cancelEvents" };
  var So = { Popover: "popover", API: "api", Widget: "widget", ExternalSurvey: "external_survey" };
  var Po = { SHOWN: "survey shown", DISMISSED: "survey dismissed", SENT: "survey sent", ABANDONED: "survey abandoned" };
  var Ro = { SURVEY_ID: "$survey_id", SURVEY_NAME: "$survey_name", SURVEY_RESPONSE: "$survey_response", SURVEY_ITERATION: "$survey_iteration", SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date", SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed", SURVEY_SUBMISSION_ID: "$survey_submission_id", SURVEY_QUESTIONS: "$survey_questions", SURVEY_COMPLETED: "$survey_completed", PRODUCT_TOUR_ID: "$product_tour_id", SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date", SURVEY_LANGUAGE: "$survey_language" };
  var Co = { Popover: "popover", Inline: "inline" };
  var Io = { SHOWN: "product tour shown", DISMISSED: "product tour dismissed", COMPLETED: "product tour completed", STEP_SHOWN: "product tour step shown", STEP_COMPLETED: "product tour step completed", BUTTON_CLICKED: "product tour button clicked", STEP_SELECTOR_FAILED: "product tour step selector failed", BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed", BANNER_ACTION_CLICKED: "product tour banner action clicked" };
  var Ao = { TOUR_ID: "$product_tour_id", TOUR_NAME: "$product_tour_name", TOUR_ITERATION: "$product_tour_iteration", TOUR_RENDER_REASON: "$product_tour_render_reason", TOUR_STEP_ID: "$product_tour_step_id", TOUR_STEP_ORDER: "$product_tour_step_order", TOUR_STEP_TYPE: "$product_tour_step_type", TOUR_DISMISS_REASON: "$product_tour_dismiss_reason", TOUR_BUTTON_TEXT: "$product_tour_button_text", TOUR_BUTTON_ACTION: "$product_tour_button_action", TOUR_BUTTON_LINK: "$product_tour_button_link", TOUR_BUTTON_TOUR_ID: "$product_tour_button_tour_id", TOUR_STEPS_COUNT: "$product_tour_steps_count", TOUR_STEP_SELECTOR: "$product_tour_step_selector", TOUR_STEP_SELECTOR_FOUND: "$product_tour_step_selector_found", TOUR_STEP_ELEMENT_TAG: "$product_tour_step_element_tag", TOUR_STEP_ELEMENT_ID: "$product_tour_step_element_id", TOUR_STEP_ELEMENT_CLASSES: "$product_tour_step_element_classes", TOUR_STEP_ELEMENT_TEXT: "$product_tour_step_element_text", TOUR_ERROR: "$product_tour_error", TOUR_MATCHES_COUNT: "$product_tour_matches_count", TOUR_FAILURE_PHASE: "$product_tour_failure_phase", TOUR_WAITED_FOR_ELEMENT: "$product_tour_waited_for_element", TOUR_WAIT_DURATION_MS: "$product_tour_wait_duration_ms", TOUR_BANNER_SELECTOR: "$product_tour_banner_selector", TOUR_LINKED_SURVEY_ID: "$product_tour_linked_survey_id", USE_MANUAL_SELECTOR: "$use_manual_selector", INFERENCE_DATA_PRESENT: "$inference_data_present", TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date", TOUR_TYPE: "$product_tour_type" };
  var Fo = Ae("[RateLimiter]");
  var Mo = class {
    constructor(t2) {
      this.serverLimits = {}, this.lastEventRateLimited = false, this.checkForLimiting = (t3) => {
        var i2 = t3.text;
        if (i2 && i2.length) try {
          (JSON.parse(i2).quota_limited || []).forEach(((t4) => {
            Fo.info((t4 || "events") + " is quota limited."), this.serverLimits[t4] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
          }));
        } catch (t4) {
          return void Fo.warn('could not rate limit - continuing. Error: "' + (null == t4 ? void 0 : t4.message) + '"', { text: i2 });
        }
      }, this.instance = t2, this.lastEventRateLimited = this.clientRateLimitContext(true).isRateLimited;
    }
    get captureEventsPerSecond() {
      var t2;
      return (null == (t2 = this.instance.config.rate_limiting) ? void 0 : t2.events_per_second) || 10;
    }
    get captureEventsBurstLimit() {
      var t2;
      return Math.max((null == (t2 = this.instance.config.rate_limiting) ? void 0 : t2.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
    }
    clientRateLimitContext(t2) {
      var i2, e2, r2;
      void 0 === t2 && (t2 = false);
      var s2 = this.captureEventsBurstLimit, n2 = this.captureEventsPerSecond, o2 = (/* @__PURE__ */ new Date()).getTime(), a2 = null !== (i2 = null == (e2 = this.instance.persistence) ? void 0 : e2.get_property(Ar)) && void 0 !== i2 ? i2 : { tokens: s2, last: o2 };
      a2.tokens += (o2 - a2.last) / 1e3 * n2, a2.last = o2, a2.tokens > s2 && (a2.tokens = s2);
      var l2 = 1 > a2.tokens;
      if (l2 || t2 || (a2.tokens = Math.max(0, a2.tokens - 1)), l2 && !t2) {
        var h2 = (Z(a2.dropped) ? a2.dropped : 0) + 1;
        a2.dropped = h2, !this.lastEventRateLimited && this.Na(h2) && (a2.dropped = 0);
      }
      return this.lastEventRateLimited = l2, null == (r2 = this.instance.persistence) || r2.set_property(Ar, a2), { isRateLimited: l2, remainingTokens: a2.tokens };
    }
    qa(t2) {
      var i2 = this.instance.config.property_denylist;
      return !H(i2) || !i2.includes(t2);
    }
    ja() {
      var t2;
      if (this.qa("$current_url") && this.qa("$pathname") && null != s && s.pathname) return "" + (null !== (t2 = s.origin) && void 0 !== t2 ? t2 : "") + s.pathname;
    }
    Na(t2) {
      var i2, e2, r2 = this.captureEventsBurstLimit, s2 = this.captureEventsPerSecond, n2 = this.ja(), o2 = this.qa("$session_id") ? null == (i2 = (e2 = this.instance).get_session_id) ? void 0 : i2.call(e2) : void 0, a2 = [t2 + " event(s) dropped since the last warning", n2 ? "triggered on " + n2 : void 0, o2 ? "session " + o2 : void 0].filter(Boolean).join(", ");
      return !!this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited: " + a2 + ". Config is set to " + s2 + " events per second and " + r2 + " events burst limit." }, { skip_client_rate_limiting: true });
    }
    isServerRateLimited(t2) {
      var i2 = this.serverLimits[t2 || "events"] || false;
      return false !== i2 && (/* @__PURE__ */ new Date()).getTime() < i2;
    }
  };
  var Do = Ae("[RemoteConfig]");
  var No = class {
    constructor(t2) {
      this._instance = t2;
    }
    get remoteConfig() {
      var t2;
      return null == (t2 = v._POSTHOG_REMOTE_CONFIG) || null == (t2 = t2[this._instance.config.token]) ? void 0 : t2.config;
    }
    Ba(t2) {
      var i2, e2;
      null != (i2 = v.__PosthogExtensions__) && i2.loadExternalDependency ? null == (e2 = v.__PosthogExtensions__) || null == e2.loadExternalDependency || e2.loadExternalDependency(this._instance, "remote-config", (() => t2(this.remoteConfig))) : t2();
    }
    Ha(t2) {
      this._instance._send_request({ method: "GET", url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"), callback: t2 });
    }
    load() {
      try {
        if (this.remoteConfig) return Do.info("Using preloaded remote config", this.remoteConfig), void this.za(this.remoteConfig);
        if (this._instance.Ua()) return void Do.warn("Remote config is disabled. Falling back to local config.");
        this.Ba(((t2) => {
          if (!t2) return Do.info("No config found after loading remote JS config. Falling back to JSON."), void this.Ha(((t3) => {
            this.za(t3.json, t3);
          }));
          this.za(t2);
        }));
      } catch (t2) {
        Do.error("Error loading remote config", t2), this.za();
      }
    }
    za(t2, i2) {
      !t2 && i2 && (0 === i2.statusCode ? i2.error || Do.warn("Failed to fetch remote config from PostHog.") : Do.error("Failed to fetch remote config from PostHog."));
      try {
        this._instance.za(t2 ? { ok: true, config: t2 } : { ok: false });
      } catch (t3) {
        Do.error("Error applying remote config", t3);
      }
      if (false !== (null == t2 ? void 0 : t2.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
        var e2;
        null == (e2 = this._instance.featureFlags) || e2.ensureFlagsLoaded();
      } catch (t3) {
        Do.error("Error loading feature flags", t3);
      }
    }
  };
  var Uo = Uint8Array;
  var jo = Uint16Array;
  var Bo = Uint32Array;
  var zo = new Uo([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var qo = new Uo([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var Ho = new Uo([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var Vo = function(t2, i2) {
    for (var e2 = new jo(31), r2 = 0; 31 > r2; ++r2) e2[r2] = i2 += 1 << t2[r2 - 1];
    var s2 = new Bo(e2[30]);
    for (r2 = 1; 30 > r2; ++r2) for (var n2 = e2[r2]; e2[r2 + 1] > n2; ++n2) s2[n2] = n2 - e2[r2] << 5 | r2;
    return [e2, s2];
  };
  var Wo = Vo(zo, 2);
  var Go = Wo[1];
  Wo[0][28] = 258, Go[258] = 28;
  for (Ko = Vo(qo, 0)[1], Jo = new jo(32768), Yo = 0; 32768 > Yo; ++Yo) {
    Qo = (43690 & Yo) >>> 1 | (21845 & Yo) << 1;
    Jo[Yo] = ((65280 & (Qo = (61680 & (Qo = (52428 & Qo) >>> 2 | (13107 & Qo) << 2)) >>> 4 | (3855 & Qo) << 4)) >>> 8 | (255 & Qo) << 8) >>> 1;
  }
  var Qo;
  var Ko;
  var Jo;
  var Yo;
  var Xo = function(t2, i2, e2) {
    for (var r2 = t2.length, s2 = 0, n2 = new jo(i2); r2 > s2; ++s2) ++n2[t2[s2] - 1];
    var o2, a2 = new jo(i2);
    for (s2 = 0; i2 > s2; ++s2) a2[s2] = a2[s2 - 1] + n2[s2 - 1] << 1;
    if (e2) {
      o2 = new jo(1 << i2);
      var l2 = 15 - i2;
      for (s2 = 0; r2 > s2; ++s2) if (t2[s2]) for (var h2 = s2 << 4 | t2[s2], u2 = i2 - t2[s2], d2 = a2[t2[s2] - 1]++ << u2, v2 = d2 | (1 << u2) - 1; v2 >= d2; ++d2) o2[Jo[d2] >>> l2] = h2;
    } else for (o2 = new jo(r2), s2 = 0; r2 > s2; ++s2) o2[s2] = Jo[a2[t2[s2] - 1]++] >>> 15 - t2[s2];
    return o2;
  };
  var Zo = new Uo(288);
  for (Yo = 0; 144 > Yo; ++Yo) Zo[Yo] = 8;
  for (Yo = 144; 256 > Yo; ++Yo) Zo[Yo] = 9;
  for (Yo = 256; 280 > Yo; ++Yo) Zo[Yo] = 7;
  for (Yo = 280; 288 > Yo; ++Yo) Zo[Yo] = 8;
  var ta = new Uo(32);
  for (Yo = 0; 32 > Yo; ++Yo) ta[Yo] = 5;
  var ia = Xo(Zo, 9, 0);
  var ea = Xo(ta, 5, 0);
  var ra = function(t2) {
    return (t2 / 8 >> 0) + (7 & t2 && 1);
  };
  var sa = function(t2, i2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    var r2 = new (t2 instanceof jo ? jo : t2 instanceof Bo ? Bo : Uo)(e2 - i2);
    return r2.set(t2.subarray(i2, e2)), r2;
  };
  var na = function(t2, i2, e2) {
    var r2 = i2 / 8 >> 0;
    t2[r2] |= e2 <<= 7 & i2, t2[r2 + 1] |= e2 >>> 8;
  };
  var oa = function(t2, i2, e2) {
    var r2 = i2 / 8 >> 0;
    t2[r2] |= e2 <<= 7 & i2, t2[r2 + 1] |= e2 >>> 8, t2[r2 + 2] |= e2 >>> 16;
  };
  var aa = function(t2, i2) {
    for (var e2 = [], r2 = 0; t2.length > r2; ++r2) t2[r2] && e2.push({ s: r2, f: t2[r2] });
    var s2 = e2.length, n2 = e2.slice();
    if (!s2) return [new Uo(0), 0];
    if (1 == s2) {
      var o2 = new Uo(e2[0].s + 1);
      return o2[e2[0].s] = 1, [o2, 1];
    }
    e2.sort((function(t3, i3) {
      return t3.f - i3.f;
    })), e2.push({ s: -1, f: 25001 });
    var a2 = e2[0], l2 = e2[1], h2 = 0, u2 = 1, d2 = 2;
    for (e2[0] = { s: -1, f: a2.f + l2.f, l: a2, r: l2 }; u2 != s2 - 1; ) a2 = e2[e2[d2].f > e2[h2].f ? h2++ : d2++], l2 = e2[h2 != u2 && e2[d2].f > e2[h2].f ? h2++ : d2++], e2[u2++] = { s: -1, f: a2.f + l2.f, l: a2, r: l2 };
    var v2 = n2[0].s;
    for (r2 = 1; s2 > r2; ++r2) n2[r2].s > v2 && (v2 = n2[r2].s);
    var c2 = new jo(v2 + 1), f2 = la(e2[u2 - 1], c2, 0);
    if (f2 > i2) {
      r2 = 0;
      var p2 = 0, _2 = f2 - i2, g2 = 1 << _2;
      for (n2.sort((function(t3, i3) {
        return c2[i3.s] - c2[t3.s] || t3.f - i3.f;
      })); s2 > r2; ++r2) {
        var m2 = n2[r2].s;
        if (i2 >= c2[m2]) break;
        p2 += g2 - (1 << f2 - c2[m2]), c2[m2] = i2;
      }
      for (p2 >>>= _2; p2 > 0; ) {
        var y2 = n2[r2].s;
        i2 > c2[y2] ? p2 -= 1 << i2 - c2[y2]++ - 1 : ++r2;
      }
      for (; r2 >= 0 && p2; --r2) {
        var b2 = n2[r2].s;
        c2[b2] == i2 && (--c2[b2], ++p2);
      }
      f2 = i2;
    }
    return [new Uo(c2), f2];
  };
  var la = function(t2, i2, e2) {
    return -1 == t2.s ? Math.max(la(t2.l, i2, e2 + 1), la(t2.r, i2, e2 + 1)) : i2[t2.s] = e2;
  };
  var ha = function(t2) {
    for (var i2 = t2.length; i2 && !t2[--i2]; ) ;
    for (var e2 = new jo(++i2), r2 = 0, s2 = t2[0], n2 = 1, o2 = function(t3) {
      e2[r2++] = t3;
    }, a2 = 1; i2 >= a2; ++a2) if (t2[a2] == s2 && a2 != i2) ++n2;
    else {
      if (!s2 && n2 > 2) {
        for (; n2 > 138; n2 -= 138) o2(32754);
        n2 > 2 && (o2(n2 > 10 ? n2 - 11 << 5 | 28690 : n2 - 3 << 5 | 12305), n2 = 0);
      } else if (n2 > 3) {
        for (o2(s2), --n2; n2 > 6; n2 -= 6) o2(8304);
        n2 > 2 && (o2(n2 - 3 << 5 | 8208), n2 = 0);
      }
      for (; n2--; ) o2(s2);
      n2 = 1, s2 = t2[a2];
    }
    return [e2.subarray(0, r2), i2];
  };
  var ua = function(t2, i2) {
    for (var e2 = 0, r2 = 0; i2.length > r2; ++r2) e2 += t2[r2] * i2[r2];
    return e2;
  };
  var da = function(t2, i2, e2) {
    var r2 = e2.length, s2 = ra(i2 + 2);
    t2[s2] = 255 & r2, t2[s2 + 1] = r2 >>> 8, t2[s2 + 2] = 255 ^ t2[s2], t2[s2 + 3] = 255 ^ t2[s2 + 1];
    for (var n2 = 0; r2 > n2; ++n2) t2[s2 + n2 + 4] = e2[n2];
    return 8 * (s2 + 4 + r2);
  };
  var va = function(t2, i2, e2, r2, s2, n2, o2, a2, l2, h2, u2) {
    na(i2, u2++, e2), ++s2[256];
    for (var d2 = aa(s2, 15), v2 = d2[0], c2 = d2[1], f2 = aa(n2, 15), p2 = f2[0], _2 = f2[1], g2 = ha(v2), m2 = g2[0], y2 = g2[1], b2 = ha(p2), w2 = b2[0], x2 = b2[1], E2 = new jo(19), S2 = 0; m2.length > S2; ++S2) E2[31 & m2[S2]]++;
    for (S2 = 0; w2.length > S2; ++S2) E2[31 & w2[S2]]++;
    for (var k2 = aa(E2, 7), T2 = k2[0], P2 = k2[1], R2 = 19; R2 > 4 && !T2[Ho[R2 - 1]]; --R2) ;
    var C2, O2, I2, A2, F2 = h2 + 5 << 3, M2 = ua(s2, Zo) + ua(n2, ta) + o2, D2 = ua(s2, v2) + ua(n2, p2) + o2 + 14 + 3 * R2 + ua(E2, T2) + (2 * E2[16] + 3 * E2[17] + 7 * E2[18]);
    if (M2 >= F2 && D2 >= F2) return da(i2, u2, t2.subarray(l2, l2 + h2));
    if (na(i2, u2, 1 + (M2 > D2)), u2 += 2, M2 > D2) {
      C2 = Xo(v2, c2, 0), O2 = v2, I2 = Xo(p2, _2, 0), A2 = p2;
      var N2 = Xo(T2, P2, 0);
      for (na(i2, u2, y2 - 257), na(i2, u2 + 5, x2 - 1), na(i2, u2 + 10, R2 - 4), u2 += 14, S2 = 0; R2 > S2; ++S2) na(i2, u2 + 3 * S2, T2[Ho[S2]]);
      u2 += 3 * R2;
      for (var L2 = [m2, w2], U2 = 0; 2 > U2; ++U2) {
        var j2 = L2[U2];
        for (S2 = 0; j2.length > S2; ++S2) na(i2, u2, N2[B2 = 31 & j2[S2]]), u2 += T2[B2], B2 > 15 && (na(i2, u2, j2[S2] >>> 5 & 127), u2 += j2[S2] >>> 12);
      }
    } else C2 = ia, O2 = Zo, I2 = ea, A2 = ta;
    for (S2 = 0; a2 > S2; ++S2) if (r2[S2] > 255) {
      var B2;
      oa(i2, u2, C2[257 + (B2 = r2[S2] >>> 18 & 31)]), u2 += O2[B2 + 257], B2 > 7 && (na(i2, u2, r2[S2] >>> 23 & 31), u2 += zo[B2]);
      var z2 = 31 & r2[S2];
      oa(i2, u2, I2[z2]), u2 += A2[z2], z2 > 3 && (oa(i2, u2, r2[S2] >>> 5 & 8191), u2 += qo[z2]);
    } else oa(i2, u2, C2[r2[S2]]), u2 += O2[r2[S2]];
    return oa(i2, u2, C2[256]), u2 + O2[256];
  };
  var ca = new Bo([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var fa = (function() {
    for (var t2 = new Bo(256), i2 = 0; 256 > i2; ++i2) {
      for (var e2 = i2, r2 = 9; --r2; ) e2 = (1 & e2 && 3988292384) ^ e2 >>> 1;
      t2[i2] = e2;
    }
    return t2;
  })();
  var pa = function(t2, i2, e2) {
    for (; e2; ++i2) t2[i2] = e2, e2 >>>= 8;
  };
  function _a(t2, i2) {
    void 0 === i2 && (i2 = {});
    var e2 = /* @__PURE__ */ (function() {
      var t3 = 4294967295;
      return { p(i3) {
        for (var e3 = t3, r3 = 0; i3.length > r3; ++r3) e3 = fa[255 & e3 ^ i3[r3]] ^ e3 >>> 8;
        t3 = e3;
      }, d() {
        return 4294967295 ^ t3;
      } };
    })(), r2 = t2.length;
    e2.p(t2);
    var s2, n2, o2, a2, l2, h2 = (a2 = 10 + ((s2 = i2).filename && s2.filename.length + 1 || 0), l2 = 8, (function(t3, i3, e3, r3, s3, n3) {
      var o3 = t3.length, a3 = new Uo(r3 + o3 + 5 * (1 + Math.floor(o3 / 7e3)) + s3), l3 = a3.subarray(r3, a3.length - s3), h3 = 0;
      if (!i3 || 8 > o3) for (var u3 = 0; o3 >= u3; u3 += 65535) {
        var d2 = u3 + 65535;
        o3 > d2 ? h3 = da(l3, h3, t3.subarray(u3, d2)) : (l3[u3] = true, h3 = da(l3, h3, t3.subarray(u3, o3)));
      }
      else {
        for (var v2 = ca[i3 - 1], c2 = v2 >>> 13, f2 = 8191 & v2, p2 = (1 << e3) - 1, _2 = new jo(32768), g2 = new jo(p2 + 1), m2 = Math.ceil(e3 / 3), y2 = 2 * m2, b2 = function(i4) {
          return (t3[i4] ^ t3[i4 + 1] << m2 ^ t3[i4 + 2] << y2) & p2;
        }, w2 = new Bo(25e3), x2 = new jo(288), E2 = new jo(32), S2 = 0, k2 = 0, T2 = (u3 = 0, 0), P2 = 0, R2 = 0; o3 > u3; ++u3) {
          var C2 = b2(u3), O2 = 32767 & u3, I2 = g2[C2];
          if (_2[O2] = I2, g2[C2] = O2, u3 >= P2) {
            var A2 = o3 - u3;
            if ((S2 > 7e3 || T2 > 24576) && A2 > 423) {
              h3 = va(t3, l3, 0, w2, x2, E2, k2, T2, R2, u3 - R2, h3), T2 = S2 = k2 = 0, R2 = u3;
              for (var F2 = 0; 286 > F2; ++F2) x2[F2] = 0;
              for (F2 = 0; 30 > F2; ++F2) E2[F2] = 0;
            }
            var M2 = 2, D2 = 0, N2 = f2, L2 = O2 - I2 & 32767;
            if (A2 > 2 && C2 == b2(u3 - L2)) for (var U2 = Math.min(c2, A2) - 1, j2 = Math.min(32767, u3), B2 = Math.min(258, A2); j2 >= L2 && --N2 && O2 != I2; ) {
              if (t3[u3 + M2] == t3[u3 + M2 - L2]) {
                for (var z2 = 0; B2 > z2 && t3[u3 + z2] == t3[u3 + z2 - L2]; ++z2) ;
                if (z2 > M2) {
                  if (M2 = z2, D2 = L2, z2 > U2) break;
                  var q2 = Math.min(L2, z2 - 2), H2 = 0;
                  for (F2 = 0; q2 > F2; ++F2) {
                    var V2 = u3 - L2 + F2 + 32768 & 32767, W2 = V2 - _2[V2] + 32768 & 32767;
                    W2 > H2 && (H2 = W2, I2 = V2);
                  }
                }
              }
              L2 += (O2 = I2) - (I2 = _2[O2]) + 32768 & 32767;
            }
            if (D2) {
              w2[T2++] = 268435456 | Go[M2] << 18 | Ko[D2];
              var G2 = 31 & Go[M2], K2 = 31 & Ko[D2];
              k2 += zo[G2] + qo[K2], ++x2[257 + G2], ++E2[K2], P2 = u3 + M2, ++S2;
            } else w2[T2++] = t3[u3], ++x2[t3[u3]];
          }
        }
        h3 = va(t3, l3, true, w2, x2, E2, k2, T2, R2, u3 - R2, h3);
      }
      return sa(a3, 0, r3 + ra(h3) + s3);
    })(n2 = t2, null == (o2 = i2).level ? 6 : o2.level, null == o2.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(n2.length)))) : 12 + o2.mem, a2, l2)), u2 = h2.length;
    return (function(t3, i3) {
      var e3 = i3.filename;
      if (t3[0] = 31, t3[1] = 139, t3[2] = 8, t3[8] = 2 > i3.level ? 4 : 9 == i3.level ? 2 : 0, t3[9] = 3, 0 != i3.mtime && pa(t3, 4, Math.floor(new Date(i3.mtime || Date.now()) / 1e3)), e3) {
        t3[3] = 8;
        for (var r3 = 0; e3.length >= r3; ++r3) t3[r3 + 10] = e3.charCodeAt(r3);
      }
    })(h2, i2), pa(h2, u2 - 8, e2.d()), pa(h2, u2 - 4, r2), h2;
  }
  var ga = !!o || !!n;
  var ma = "text/plain";
  var ya = false;
  var ba = (t2, i2) => {
    var e2 = t2.split("#"), r2 = e2[1], s2 = e2[0].split("?"), n2 = s2[0], o2 = s2[1];
    if (!o2) return t2;
    var a2 = o2.split("&").filter(((t3) => t3.split("=")[0] !== i2)).join("&");
    return n2 + (a2 ? "?" + a2 : "") + (r2 ? "#" + r2 : "");
  };
  var wa = function(t2, i2, e2) {
    var r2;
    void 0 === e2 && (e2 = true);
    var s2 = t2.split("?"), n2 = s2[0], o2 = s2[1], a2 = _({}, i2), l2 = null !== (r2 = null == o2 ? void 0 : o2.split("&").map(((t3) => {
      var i3, r3 = t3.split("="), s3 = r3[0], n3 = e2 && null !== (i3 = a2[s3]) && void 0 !== i3 ? i3 : r3[1];
      return delete a2[s3], s3 + "=" + n3;
    }))) && void 0 !== r2 ? r2 : [], h2 = (function(t3, i3) {
      var e3, r3;
      void 0 === i3 && (i3 = "&");
      var s3 = [];
      return es(t3, (function(t4, i4) {
        K(t4) || K(i4) || "undefined" === i4 || (e3 = encodeURIComponent(((t5) => t5 instanceof File)(t4) ? t4.name : t4.toString()), r3 = encodeURIComponent(i4), s3[s3.length] = r3 + "=" + e3);
      })), s3.join(i3);
    })(a2);
    return h2 && l2.push(h2), l2.length > 0 ? n2 + "?" + l2.join("&") : n2;
  };
  var xa = (t2) => {
    if (t2.Wa) return t2.Wa;
    var i2 = t2.data, e2 = t2.compression;
    if (i2) {
      if (e2 === yo.GZipJS) {
        var r2 = _a((function(t3, i3) {
          var e3 = t3.length;
          if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(t3);
          for (var r3 = new Uo(t3.length + (t3.length >>> 1)), s3 = 0, n3 = function(t4) {
            r3[s3++] = t4;
          }, o3 = 0; e3 > o3; ++o3) {
            if (s3 + 5 > r3.length) {
              var a2 = new Uo(s3 + 8 + (e3 - o3 << 1));
              a2.set(r3), r3 = a2;
            }
            var l2 = t3.charCodeAt(o3);
            128 > l2 ? n3(l2) : 2048 > l2 ? (n3(192 | l2 >>> 6), n3(128 | 63 & l2)) : l2 > 55295 && 57344 > l2 ? (n3(240 | (l2 = 65536 + (1047552 & l2) | 1023 & t3.charCodeAt(++o3)) >>> 18), n3(128 | l2 >>> 12 & 63), n3(128 | l2 >>> 6 & 63), n3(128 | 63 & l2)) : (n3(224 | l2 >>> 12), n3(128 | l2 >>> 6 & 63), n3(128 | 63 & l2));
          }
          return sa(r3, 0, s3);
        })(qn(i2)), { mtime: 0 });
        return { contentType: ma, body: r2.buffer.slice(r2.byteOffset, r2.byteOffset + r2.byteLength), estimatedSize: r2.byteLength };
      }
      if (e2 === yo.Base64) {
        var s2 = (function(t3) {
          return t3 ? btoa(encodeURIComponent(t3).replace(/%([0-9A-F]{2})/g, ((t4, i3) => String.fromCharCode(parseInt(i3, 16))))) : t3;
        })(qn(i2)), n2 = ((t3) => "data=" + encodeURIComponent("string" == typeof t3 ? t3 : qn(t3)))(s2);
        return { contentType: "application/x-www-form-urlencoded", body: n2, estimatedSize: new Blob([n2]).size };
      }
      var o2 = qn(i2);
      return { contentType: "application/json", body: o2, estimatedSize: new Blob([o2]).size };
    }
  };
  var Ea = (t2) => {
    var i2, e2, r2 = () => "sendBeacon" === t2.transport ? { url: wa(t2.url, { compression: yo.Base64 }), encodedBody: xa(_({}, t2, { compression: yo.Base64, Wa: void 0 })) } : { url: ba(t2.url, "compression"), encodedBody: xa(_({}, t2, { compression: void 0, Wa: void 0 })) };
    try {
      i2 = xa(t2);
    } catch (i3) {
      if (Ri(t2.compression, Vn(t2.url, "compression"))) return Ie.error("Failed to gzip request body, sending uncompressed payload", i3), r2();
      throw i3;
    }
    return i2 && Ri(t2.compression, Vn(t2.url, "compression")) && !((e2 = i2.body) instanceof ArrayBuffer ? Pi(new Uint8Array(e2)) : ArrayBuffer.isView(e2) && Pi(new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength))) ? (ya = true, r2()) : { url: t2.url, encodedBody: i2 };
  };
  var Sa = (t2) => {
    try {
      return Ea(t2);
    } catch (i2) {
      return Ie.error(i2), void (null == t2.callback || t2.callback({ statusCode: 0, error: i2 }));
    }
  };
  var ka = (function() {
    var t2 = p((function* (t3) {
      var i2 = qn(t3.data), e2 = yield (function(t4, i3, e3) {
        return Ai.apply(this, arguments);
      })(i2, c.DEBUG, { rethrow: true });
      if (!e2) return t3;
      var r2 = yield e2.arrayBuffer();
      return _({}, t3, { Wa: { contentType: ma, body: r2, estimatedSize: r2.byteLength } });
    }));
    return function(i2) {
      return t2.apply(this, arguments);
    };
  })();
  var Ta = /Failed to fetch|NetworkError|Load failed/i;
  var $a = (t2) => "TypeError" === (null == t2 ? void 0 : t2.name) && Ta.test((null == t2 ? void 0 : t2.message) || "");
  var Pa = (t2) => {
    var i2 = Sa(t2);
    if (i2) {
      var e2 = i2.url, r2 = i2.encodedBody, s2 = null != r2 ? r2 : {}, o2 = s2.contentType, l2 = s2.body, h2 = s2.estimatedSize, u2 = new Headers();
      es(t2.headers, (function(t3, i3) {
        u2.append(i3, t3);
      })), o2 && u2.append("Content-Type", o2);
      var d2 = null, v2 = false;
      if (a) {
        var c2 = new a();
        d2 = { signal: c2.signal, timeout: setTimeout((() => {
          var i3;
          v2 = true, c2.abort(wi("AbortError", "PostHog request timed out" + ((i3 = t2.timeout) ? " after " + i3 + "ms" : "")));
        }), t2.timeout) };
      }
      var f2 = (i3) => {
        v2 && "AbortError" === (null == i3 ? void 0 : i3.name) || $a(i3) ? Ie.warn(i3) : Ie.error(i3), null == t2.callback || t2.callback({ statusCode: 0, error: i3 });
      };
      try {
        var p2;
        n(e2, _({ method: (null == t2 ? void 0 : t2.method) || "GET", headers: u2, keepalive: "POST" === t2.method && !t2.Va && 52428.8 > (h2 || 0), body: l2, signal: null == (p2 = d2) ? void 0 : p2.signal }, t2.fetchOptions)).then(((i3) => i3.text().then(((e3) => {
          var r3 = { statusCode: i3.status, text: e3 };
          if (200 === i3.status) try {
            r3.json = JSON.parse(e3);
          } catch (t3) {
            Ie.error(t3);
          }
          null == t2.callback || t2.callback(r3);
        })))).catch(f2).finally((() => d2 ? clearTimeout(d2.timeout) : null));
      } catch (t3) {
        d2 && clearTimeout(d2.timeout), f2(t3);
      }
    }
  };
  var Ra = (t2) => {
    try {
      var i2, r2 = Ea(t2), s2 = r2.url, n2 = r2.encodedBody, o2 = null != n2 ? n2 : {}, a2 = o2.body, l2 = o2.estimatedSize;
      if (!a2) return;
      var h2 = a2 instanceof Blob ? a2 : new Blob([a2], { type: o2.contentType });
      if (e.sendBeacon(s2, h2)) return;
      var u2 = H(t2.data) ? t2.data : null == (i2 = t2.data) ? void 0 : i2.batch;
      if (H(u2) && u2.length > 1 && (null != l2 ? l2 : 0) > 16384) {
        var d2 = Math.ceil(u2.length / 2), v2 = (i3) => H(t2.data) ? i3 : _({}, t2.data, { batch: i3 });
        return Ra(_({}, t2, { data: v2(u2.slice(0, d2)) })), void Ra(_({}, t2, { data: v2(u2.slice(d2)) }));
      }
      Ie.warn("Beacon of ~" + (null != l2 ? l2 : 0) + " bytes was rejected by the browser, falling back to fetch"), Pa(_({}, t2, { Va: true }));
    } catch (t3) {
      Ie.warn("Beacon send failed", t3);
    }
  };
  var Ca = (t2, i2, e2, r2) => {
    var s2 = "query" === r2 ? "POST" === i2 ? "sent_at" : "_" : void 0;
    return wa(e2 === yo.GZipJS ? ba(t2, "compression") : t2, _({}, s2 ? { [s2]: Date.now().toString() } : {}, e2 === yo.GZipJS ? {} : { compression: e2 }));
  };
  var Oa = [];
  n && Oa.push({ transport: "fetch", method: Pa }), o && Oa.push({ transport: "XHR", method(t2) {
    var i2 = Sa(t2);
    if (i2) {
      var e2 = new o(), r2 = i2.encodedBody;
      e2.open(t2.method || "GET", i2.url, true);
      var s2 = null != r2 ? r2 : {}, n2 = s2.contentType, a2 = s2.body;
      es(t2.headers, (function(t3, i3) {
        e2.setRequestHeader(i3, t3);
      })), n2 && e2.setRequestHeader("Content-Type", n2), t2.timeout && (e2.timeout = t2.timeout), e2.onreadystatechange = () => {
        if (4 === e2.readyState) {
          var i3 = { statusCode: e2.status, text: e2.responseText };
          if (200 === e2.status) try {
            i3.json = JSON.parse(e2.responseText);
          } catch (t3) {
          }
          null == t2.callback || t2.callback(i3);
        }
      }, e2.send(a2);
    }
  } }), null != e && e.sendBeacon && Oa.push({ transport: "sendBeacon", method: Ra });
  var Ia = 3e3;
  var Aa = class {
    constructor(t2, i2) {
      this.Ga = true, this.Za = [], this.Qa = ct((null == i2 ? void 0 : i2.flush_interval_ms) || Ia, 250, 5e3, Ie.createLogger("flush interval"), Ia), this.Ja = t2;
    }
    enqueue(t2) {
      this.Za.push(t2), this.Ka || this.Ya();
    }
    unload() {
      this.Xa();
      var t2 = this.Za.length > 0 ? this.eo() : {}, i2 = Object.values(t2);
      [...i2.filter(((t3) => 0 === t3.url.indexOf("/e"))), ...i2.filter(((t3) => 0 !== t3.url.indexOf("/e")))].map(((t3) => {
        this.io(_({}, t3, { transport: "sendBeacon" }));
      }));
    }
    enable() {
      this.Ga = false, this.Ya();
    }
    Ya() {
      var t2 = this;
      this.Ga || (this.Ka = setTimeout((() => {
        if (this.Xa(), this.Za.length > 0) {
          var i2 = this.eo(), e2 = function() {
            var e3 = i2[r2], s2 = (/* @__PURE__ */ new Date()).getTime();
            e3.data && H(e3.data) && es(e3.data, ((t3) => {
              t3.offset = Math.abs(t3.timestamp - s2), delete t3.timestamp;
            })), t2.io(e3);
          };
          for (var r2 in i2) e2();
        }
      }), this.Qa));
    }
    io(t2) {
      try {
        this.Ja(t2);
      } catch (t3) {
        Ie.error(t3);
      }
    }
    Xa() {
      clearTimeout(this.Ka), this.Ka = void 0;
    }
    eo() {
      var t2 = {};
      return es(this.Za, ((i2) => {
        var e2, r2 = i2, s2 = (r2 ? r2.batchKey : null) || r2.url;
        K(t2[s2]) && (t2[s2] = _({}, r2, { data: [] })), null == (e2 = t2[s2].data) || e2.push(r2.data);
      })), this.Za = [], t2;
    }
  };
  var Fa = ["retriesPerformedSoFar"];
  var Ma = class {
    constructor(i2) {
      this.ro = false, this.no = 3e3, this.Za = [], this._instance = i2, this.Za = [], this.so = true, !K(t) && "onLine" in t.navigator && (this.so = t.navigator.onLine, this.ao = () => {
        this.so = true, this.oo();
      }, this.lo = () => {
        this.so = false;
      }, us(t, "online", this.ao), us(t, "offline", this.lo));
    }
    get length() {
      return this.Za.length;
    }
    retriableRequest(t2) {
      var i2 = t2.retriesPerformedSoFar, e2 = g(t2, Fa);
      tt(i2) && (e2.url = wa(e2.url, { retry_count: i2 })), this._instance._send_request(_({}, e2, { callback: (t3) => {
        if (200 !== t3.statusCode && (400 > t3.statusCode || t3.statusCode >= 500)) {
          if ((0 === t3.statusCode ? 3 : 10) > (null != i2 ? i2 : 0)) return void this.Yn(_({ retriesPerformedSoFar: i2 }, e2));
          0 === t3.statusCode && Ie.warn("Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after " + (null != i2 ? i2 : 0) + " retries.");
        }
        null == e2.callback || e2.callback(t3);
      } }));
    }
    Yn(t2) {
      var i2 = t2.retriesPerformedSoFar || 0;
      t2.retriesPerformedSoFar = i2 + 1;
      var e2 = (function(t3) {
        var i3 = 3e3 * Math.pow(2, t3), e3 = i3 / 2, r3 = Math.min(18e5, i3), s3 = Math.random() - 0.5;
        return Math.ceil(r3 + s3 * (r3 - e3));
      })(i2), r2 = Date.now() + e2;
      this.Za.push({ retryAt: r2, requestOptions: t2 });
      var s2 = "Enqueued failed request for retry in " + e2;
      navigator.onLine || (s2 += " (Browser is offline)"), Ie.warn(s2), this.ro || (this.ro = true, this.uo());
    }
    uo() {
      if (this.ho && clearTimeout(this.ho), 0 === this.Za.length) return this.ro = false, void (this.ho = void 0);
      this.ho = setTimeout((() => {
        this.so && this.Za.length > 0 && this.oo(), this.uo();
      }), this.no);
    }
    oo() {
      var t2 = Date.now(), i2 = [], e2 = this.Za.filter(((e3) => t2 > e3.retryAt || (i2.push(e3), false)));
      if (this.Za = i2, e2.length > 0) for (var r2 of e2) this.retriableRequest(r2.requestOptions);
    }
    unload() {
      for (var i2 of (this.ho && (clearTimeout(this.ho), this.ho = void 0), this.ro = false, K(t) || (this.ao && (t.removeEventListener("online", this.ao), this.ao = void 0), this.lo && (t.removeEventListener("offline", this.lo), this.lo = void 0)), this.Za)) {
        var e2 = i2.requestOptions;
        try {
          this._instance._send_request(_({}, e2, { transport: "sendBeacon" }));
        } catch (t2) {
          Ie.error(t2);
        }
      }
      this.Za = [];
    }
  };
  var Da = class {
    constructor(t2) {
      this.do = () => {
        var t3, i2, e2, r2;
        this.vo || (this.vo = {});
        var s2 = this.scrollElement(), n2 = this.scrollY(), o2 = s2 ? Math.max(0, s2.scrollHeight - s2.clientHeight) : 0, a2 = n2 + ((null == s2 ? void 0 : s2.clientHeight) || 0), l2 = (null == s2 ? void 0 : s2.scrollHeight) || 0;
        this.vo.lastScrollY = Math.ceil(n2), this.vo.maxScrollY = Math.max(n2, null !== (t3 = this.vo.maxScrollY) && void 0 !== t3 ? t3 : 0), this.vo.maxScrollHeight = Math.max(o2, null !== (i2 = this.vo.maxScrollHeight) && void 0 !== i2 ? i2 : 0), this.vo.lastContentY = a2, this.vo.maxContentY = Math.max(a2, null !== (e2 = this.vo.maxContentY) && void 0 !== e2 ? e2 : 0), this.vo.maxContentHeight = Math.max(l2, null !== (r2 = this.vo.maxContentHeight) && void 0 !== r2 ? r2 : 0);
      }, this._instance = t2;
    }
    get co() {
      return this._instance.config.scroll_root_selector;
    }
    getContext() {
      return this.vo;
    }
    resetContext() {
      var t2 = this.vo;
      return setTimeout(this.do, 0), t2;
    }
    startMeasuringScrollPosition() {
      us(t, "scroll", this.do, { capture: true }), us(t, "scrollend", this.do, { capture: true }), us(t, "resize", this.do);
    }
    scrollElement() {
      if (!this.co) return null == t ? void 0 : t.document.documentElement;
      var i2 = H(this.co) ? this.co : [this.co];
      for (var e2 of i2) {
        var r2 = null == t ? void 0 : t.document.querySelector(e2);
        if (r2) return r2;
      }
    }
    fo(i2) {
      var e2 = "y" === i2 ? "scrollTop" : "scrollLeft";
      if (this.co) {
        var r2 = this.scrollElement();
        return r2 && r2[e2] || 0;
      }
      return t ? "y" === i2 ? t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop || 0 : t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft || 0 : 0;
    }
    scrollY() {
      return this.fo("y");
    }
    scrollX() {
      return this.fo("x");
    }
  };
  var Na = (t2) => ao(null == t2 ? void 0 : t2.config.mask_personal_data_properties, null == t2 ? void 0 : t2.config.custom_personal_data_properties, null == t2 ? void 0 : t2.config.disable_capture_url_hashes);
  var La = class {
    constructor(t2, i2, e2, r2) {
      this.xt = (t3) => {
        var i3 = this.po();
        if (!i3 || i3.sessionId !== t3) {
          var e3 = { sessionId: t3, props: this.mo(this._instance) };
          this.yo.register({ [Ir]: e3 });
        }
      }, this._instance = t2, this.bo = i2, this.yo = e2, this.mo = r2 || Na, this.bo.onSessionId(this.xt);
    }
    po() {
      return this.yo.props[Ir];
    }
    getSetOnceProps() {
      var t2, i2 = null == (t2 = this.po()) ? void 0 : t2.props;
      return i2 ? "r" in i2 ? lo(i2, this._instance.config.disable_capture_url_hashes) : { $referring_domain: i2.referringDomain, $pathname: i2.initialPathName, utm_source: i2.utm_source, utm_campaign: i2.utm_campaign, utm_medium: i2.utm_medium, utm_content: i2.utm_content, utm_term: i2.utm_term } : {};
    }
    getSessionProps() {
      var t2 = {};
      return es(as(this.getSetOnceProps()), ((i2, e2) => {
        "$current_url" === e2 && (e2 = "url"), t2["$session_entry_" + U(e2)] = i2;
      })), t2;
    }
  };
  var Ua = class {
    on(t2, i2) {
      return this._o[t2] || (this._o[t2] = []), this._o[t2].push(i2), () => {
        this._o[t2] = this._o[t2].filter(((t3) => t3 !== i2));
      };
    }
    emit(t2, i2) {
      for (var e2 of this._o[t2] || []) e2(i2);
      for (var r2 of this._o["*"] || []) r2(t2, i2);
    }
    constructor() {
      this._o = {};
    }
  };
  var ja = Ae("[SessionId]");
  var Ba = 864e5;
  var za = class {
    on(t2, i2) {
      return this.wo.on(t2, i2);
    }
    constructor(t2, i2, e2) {
      var r2;
      if (this.ko = null, this.So = null, this.xo = [], this.Co = void 0, this.To = false, this.wo = new Ua(), this.Mo = (t3, i3) => !(!tt(t3) || !tt(i3)) && Math.abs(t3 - i3) > this.sessionTimeoutMs, !t2.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
      if (t2.config.cookieless_mode === Vr) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
      this.vn = t2.config, this.yo = t2.persistence, this.Ct = void 0, this.Le = void 0, this._sessionStartTimestamp = null, this.Eo = void 0, this._sessionActivityTimestamp = null, this.Io = i2 || ms, this.Ro = e2 || ms;
      var s2 = this.vn.persistence_name || this.vn.token;
      if (this._sessionTimeoutMs = 1e3 * ct(this.vn.session_idle_timeout_seconds || 1800, 60, 36e3, ja.createLogger("session_idle_timeout_seconds"), 1800), t2.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this.Po(), this.Ao = "ph_" + s2 + "_window_id", this.Fo = "ph_" + s2 + "_primary_window_exists", this.Oo()) {
        var n2 = Ls.ni(this.Ao), o2 = Ls.ni(this.Fo);
        n2 && !o2 ? this.Ct = n2 : Ls.ri(this.Ao), Ls.ei(this.Fo, true);
      }
      null != (r2 = this.vn.bootstrap) && r2.sessionID && this.setBootstrapSessionId(this.vn.bootstrap.sessionID), this.Lo();
    }
    get sessionTimeoutMs() {
      return this._sessionTimeoutMs;
    }
    onSessionId(t2) {
      return K(this.xo) && (this.xo = []), this.xo.push(t2), this.Le && t2(this.Le, this.Ct), () => {
        this.xo = this.xo.filter(((i2) => i2 !== t2));
      };
    }
    Oo() {
      return "memory" !== this.vn.persistence && !this.yo.ga && Ls.Xr();
    }
    Do(t2) {
      t2 !== this.Ct && (this.Ct = t2, this.Oo() && Ls.ei(this.Ao, t2));
    }
    $o() {
      return this.Ct ? this.Ct : this.Oo() ? Ls.ni(this.Ao) : null;
    }
    No(t2) {
      var i2 = this.ko;
      return !Q(i2) && !Q(t2) && 5e3 > Math.abs(t2 - i2);
    }
    qo(t2, i2, e2) {
      var r2 = i2 !== this._sessionActivityTimestamp, s2 = !(t2 !== this.Le || e2 !== this._sessionStartTimestamp);
      this._sessionStartTimestamp = e2, this._sessionActivityTimestamp = i2, this.Le = t2, s2 && !r2 || s2 && this.No(i2) || (this.ko = i2, this.yo.register({ [ar]: [i2, t2, e2] }));
    }
    jo() {
      var t2, i2 = null == (t2 = this.vn) ? void 0 : t2.persistence_save_debounce_ms;
      return tt(i2) && i2 > 0;
    }
    Bo() {
      this.jo() ? this.yo.refreshKey(ar) : (this.yo.flush(), this.yo.load());
    }
    Ho() {
      var t2;
      if (!Q(this._sessionActivityTimestamp) && this._sessionActivityTimestamp !== this.ko) {
        this.Bo();
        var i2 = this.zo();
        i2[1] === this.Le && i2[2] === this._sessionStartTimestamp && (this.ko = this._sessionActivityTimestamp, this.yo.register({ [ar]: [this._sessionActivityTimestamp, null !== (t2 = this.Le) && void 0 !== t2 ? t2 : null, this._sessionStartTimestamp] }), this.yo.flush());
      }
    }
    Uo() {
      var t2 = this.zo()[0], i2 = tt(t2) ? t2 : 0, e2 = tt(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
      return Math.max(i2, e2);
    }
    Wo(t2) {
      return this.Bo(), this.Mo(t2, this.Uo());
    }
    zo() {
      var t2 = this.yo.props[ar];
      return H(t2) && 2 === t2.length && t2.push(t2[0]), t2 || [0, null, 0];
    }
    resetSessionId() {
      this.ko = null, this.Eo = void 0, clearTimeout(this.Vo), this.Vo = void 0, this.qo(null, null, null);
    }
    setBootstrapSessionId(t2, i2) {
      void 0 === i2 && (i2 = false);
      var e2 = (function(t3, i3) {
        void 0 === i3 && (i3 = (/* @__PURE__ */ new Date()).getTime());
        try {
          var e3 = ((t4) => {
            var i4 = t4.replace(/-/g, "");
            if (32 !== i4.length) throw new Error("Not a valid UUID");
            if ("7" !== i4[12]) throw new Error("Not a UUIDv7");
            return parseInt(i4.substring(0, 12), 16);
          })(t3);
          return e3 > i3 + 6e4 ? void ja.error("Bootstrap sessionID cannot be in the future") : e3;
        } catch (t4) {
          return void ja.error("Invalid sessionID in bootstrap", t4);
        }
      })(t2);
      return !K(e2) && (i2 ? this.Eo = { sessionId: t2, sessionStartTimestamp: e2 } : this.qo(t2, (/* @__PURE__ */ new Date()).getTime(), e2), true);
    }
    destroy() {
      this.To = true, this.Ho(), clearTimeout(this.Vo), this.Vo = void 0, this.Co && t && (t.removeEventListener(Yr, this.Co, { capture: false }), this.Co = void 0), this.xo = [];
    }
    Lo() {
      this.Co = () => {
        this.Ho(), this.Oo() && Ls.ri(this.Fo);
      }, us(t, Yr, this.Co, { capture: false });
    }
    checkAndGetSessionAndWindowId(t2, i2, e2) {
      if (void 0 === t2 && (t2 = false), void 0 === i2 && (i2 = null), void 0 === e2 && (e2 = false), this.vn.cookieless_mode === Vr) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
      var r2 = i2 || (/* @__PURE__ */ new Date()).getTime(), s2 = this.Le;
      if (e2) this.So = r2;
      else if (Q(this.So) || this.So > r2 || r2 - this.So >= 1e3) {
        var n2, o2;
        null == (n2 = (o2 = this.yo).syncCookieProperties) || n2.call(o2), this.So = r2;
      }
      var a2 = this.zo(), l2 = a2[1], h2 = a2[2], u2 = !K(s2) && l2 !== s2, d2 = this.Uo(), v2 = this.$o(), c2 = this.Eo, f2 = !!c2 && (c2.sessionStartTimestamp > r2 + 6e4 || r2 - c2.sessionStartTimestamp > Ba), p2 = c2 ? f2 : tt(h2) && Math.abs(r2 - h2) > Ba, _2 = false, g2 = u2, m2 = !l2 || !!c2, y2 = l2, b2 = !m2 && !t2 && this.Mo(r2, d2);
      if (b2) {
        (b2 = this.Wo(r2)) || ja.info("cross-tab refresh kept the session alive", { sessionId: l2 });
        var w2 = this.zo();
        l2 = w2[1], h2 = w2[2];
      }
      if (m2 || b2 || p2) {
        g2 = false;
        var x2 = c2 && !f2;
        l2 = x2 ? c2.sessionId : this.Io(), v2 = this.Ro(), ja.info("new session ID assigned", { sessionId: l2, windowId: v2, bootstrapped: !!x2, changeReason: { noSessionId: m2, activityTimeout: b2, sessionPastMaximumLength: p2 } }), h2 = x2 ? c2.sessionStartTimestamp : r2, this.Eo = void 0, _2 = true;
      } else v2 || (v2 = this.Ro(), _2 = true), (g2 = g2 || l2 !== y2) && (ja.info("adopted cross-tab session id", { sessionId: l2, windowId: v2 }), _2 = true);
      var E2 = tt(d2) && t2 && !p2 ? d2 : r2, S2 = tt(h2) ? h2 : (/* @__PURE__ */ new Date()).getTime();
      this.Do(v2), this.qo(l2, E2, S2), t2 || this.Po();
      var k2 = { noSessionId: m2, activityTimeout: b2, sessionPastMaximumLength: p2, crossTabAdoption: g2 };
      return _2 && this.xo.forEach(((t3) => t3(l2, v2, k2))), { sessionId: l2, windowId: v2, sessionStartTimestamp: S2, changeReason: _2 ? k2 : void 0, lastActivityTimestamp: d2 };
    }
    Po() {
      this.To || (clearTimeout(this.Vo), this.Vo = setTimeout((() => {
        if (!this.To) if (this.Wo((/* @__PURE__ */ new Date()).getTime())) {
          var t2 = this.Le;
          this.resetSessionId(), this.wo.emit("forcedIdleReset", { idleSessionId: t2 });
        } else this.Po();
      }), 1.1 * this.sessionTimeoutMs));
    }
  };
  var qa = function(t2, i2) {
    if (!t2) return false;
    var e2 = t2.userAgent;
    if (e2 && D(e2, i2)) return true;
    try {
      var r2 = null == t2 ? void 0 : t2.userAgentData;
      if (null != r2 && r2.brands && r2.brands.some(((t3) => D(null == t3 ? void 0 : t3.brand, i2)))) return true;
    } catch (t3) {
    }
    return !!t2.webdriver;
  };
  function Ha() {
    return (Ha = p((function* () {
      var t2 = null == e ? void 0 : e.userAgentData;
      if (null != t2 && t2.getHighEntropyValues) try {
        var i2 = yield t2.getHighEntropyValues(["model"]), r2 = null == i2 ? void 0 : i2.model;
        return J(r2) && r2.length > 0 ? r2 : void 0;
      } catch (t3) {
        return void Ie.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", t3);
      }
    }))).apply(this, arguments);
  }
  function Va(t2) {
    var i2;
    return !(null == (i2 = t2.conditions) || null == (i2 = i2.events) || null == (i2 = i2.values) || !i2.length);
  }
  var Wa = (t2, i2) => {
    if (!((t3) => {
      try {
        new RegExp(t3);
      } catch (t4) {
        return false;
      }
      return true;
    })(i2)) return false;
    try {
      return new RegExp(i2).test(t2);
    } catch (t3) {
      return false;
    }
  };
  var Ga = (t2) => t2.toLowerCase();
  var Ka = { exact: (t2, i2) => i2.some(((i3) => t2.some(((t3) => i3 === t3)))), is_not: (t2, i2) => i2.every(((i3) => t2.every(((t3) => i3 !== t3)))), regex: (t2, i2) => i2.some(((i3) => t2.some(((t3) => Wa(i3, t3))))), not_regex: (t2, i2) => i2.every(((i3) => t2.every(((t3) => !Wa(i3, t3))))), icontains: (t2, i2) => i2.map(Ga).some(((i3) => t2.map(Ga).some(((t3) => i3.includes(t3))))), not_icontains: (t2, i2) => i2.map(Ga).every(((i3) => t2.map(Ga).every(((t3) => !i3.includes(t3))))), gt: (t2, i2) => i2.some(((i3) => {
    var e2 = parseFloat(i3);
    return !isNaN(e2) && t2.some(((t3) => e2 > parseFloat(t3)));
  })), lt: (t2, i2) => i2.some(((i3) => {
    var e2 = parseFloat(i3);
    return !isNaN(e2) && t2.some(((t3) => e2 < parseFloat(t3)));
  })) };
  function Ja(t2, i2) {
    return !t2 || Object.entries(t2).every(((t3) => {
      var e2 = t3[1], r2 = null == i2 ? void 0 : i2[t3[0]];
      if (null == r2) return false;
      var s2 = Ka[e2.operator];
      return !!s2 && s2(e2.values, [String(r2)]);
    }));
  }
  function Ya(t2, i2, e2) {
    return qn({ distinct_id: t2, userPropertiesToSet: i2, userPropertiesToSetOnce: e2 });
  }
  var Qa = "custom";
  var Xa = "i.posthog.com";
  var Za = /^\/static\//;
  var tl = ["/s/", "/e/", "/i/"];
  var il = class {
    constructor(t2) {
      this.Go = {}, this.instance = t2;
    }
    get apiHost() {
      var t2 = this.instance.config.api_host.trim().replace(/\/$/, "");
      return "https://app.posthog.com" === t2 ? "https://us.i.posthog.com" : t2;
    }
    get flagsApiHost() {
      var t2 = this.instance.config.flags_api_host;
      return t2 ? t2.trim().replace(/\/$/, "") : this.apiHost;
    }
    get uiHost() {
      var t2, i2 = null == (t2 = this.instance.config.ui_host) ? void 0 : t2.replace(/\/$/, "");
      return i2 || (i2 = this.apiHost.replace("." + Xa, ".posthog.com")), "https://app.posthog.com" === i2 ? "https://us.posthog.com" : i2;
    }
    get region() {
      return this.Go[this.apiHost] || (this.Go[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Qa), this.Go[this.apiHost];
    }
    Zo(t2) {
      if (Za.test(t2)) {
        var i2 = this.instance.config.asset_host;
        if ("string" == typeof i2) return i2.trim().replace(/\/$/, "") || void 0;
      }
    }
    Qo(t2) {
      var i2 = Hn(t2);
      return i2 ? i2.protocol + "//" + i2.host + i2.pathname : void 0;
    }
    Jo(t2, i2, e2) {
      if ("ui" === t2) return e2;
      var r2 = e2, s2 = this.instance.config.rewriteRequestPath;
      if (s2) {
        var n2, o2 = (null == (n2 = Hn(e2)) ? void 0 : n2.href) || e2;
        r2 = s2(new URL(o2)).toString();
      }
      if (s2 && "api" === t2 && tl.some(((t3) => 0 === i2.indexOf(t3)))) {
        var a2 = this.Qo(r2);
        if (a2) {
          var l2, h2 = this.apiHost, u2 = this.Ko;
          (null == (l2 = u2) ? void 0 : l2.apiHost) === h2 && u2.rewriteRequestPath === s2 || (u2 = { apiHost: h2, rewriteRequestPath: s2, urls: /* @__PURE__ */ new Set() }, this.Ko = u2), u2.urls.add(a2);
        }
      }
      return r2;
    }
    isIngestionEndpoint(t2) {
      var i2 = this.Ko, e2 = this.Qo(t2);
      return (null == i2 ? void 0 : i2.apiHost) === this.apiHost && i2.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!e2 && i2.urls.has(e2);
    }
    endpointFor(t2, i2) {
      if (void 0 === i2 && (i2 = ""), i2 && (i2 = "/" === i2[0] ? i2 : "/" + i2), "ui" === t2) return this.Jo(t2, i2, this.uiHost + i2);
      if ("flags" === t2) return this.Jo(t2, i2, this.flagsApiHost + i2);
      if ("assets" === t2) {
        var e2 = this.Zo(i2);
        if (e2) return this.Jo(t2, i2, "" + e2 + i2);
      }
      if (this.region === Qa) return this.Jo(t2, i2, this.apiHost + i2);
      var r2 = Xa + i2;
      switch (t2) {
        case "assets":
          return this.Jo(t2, i2, "https://" + this.region + "-assets." + r2);
        case "api":
          return this.Jo(t2, i2, "https://" + this.region + "." + r2);
      }
    }
  };
  var el = Ae("[Surveys]");
  var rl = "seenSurvey_";
  var sl = (t2) => {
    try {
      var i2 = ((t3) => ((t4, i3) => "" + rl + (function(t5) {
        return t5.current_iteration && t5.current_iteration > 0 ? t5.id + "_" + t5.current_iteration : t5.id;
      })(i3))(0, t3))(t2);
      if (localStorage.getItem(i2)) return;
      localStorage.setItem(i2, "true");
    } catch (t3) {
      el.error("Failed to persist survey seen state", t3);
    }
  };
  var nl = [So.Popover, So.Widget, So.API];
  var ol = { ignoreConditions: false, ignoreDelay: false, displayType: Co.Popover };
  var al = Ae("[PostHog ExternalIntegrations]");
  var ll = { intercom: "intercom-integration", crispChat: "crisp-chat-integration" };
  var hl = class {
    constructor(t2) {
      this._instance = t2;
    }
    Zs(t2, i2) {
      var e2;
      null == (e2 = v.__PosthogExtensions__) || null == e2.loadExternalDependency || e2.loadExternalDependency(this._instance, t2, ((t3) => {
        if (t3) return al.error("failed to load script", t3);
        i2();
      }));
    }
    startIfEnabledOrStop() {
      var t2 = this, i2 = function() {
        var i3, r3, s2, n2 = e2[0], o2 = e2[1];
        !o2 || null != (i3 = v.__PosthogExtensions__) && null != (i3 = i3.integrations) && i3[n2] || t2.Zs(ll[n2], (() => {
          var i4;
          null == (i4 = v.__PosthogExtensions__) || null == (i4 = i4.integrations) || null == (i4 = i4[n2]) || i4.start(t2._instance);
        })), !o2 && null != (r3 = v.__PosthogExtensions__) && null != (r3 = r3.integrations) && r3[n2] && (null == (s2 = v.__PosthogExtensions__) || null == (s2 = s2.integrations) || null == (s2 = s2[n2]) || s2.stop());
      };
      for (var e2 of Object.entries(null !== (r2 = this._instance.config.integrations) && void 0 !== r2 ? r2 : {})) {
        var r2;
        i2();
      }
    }
  };
  var ul = class {
    constructor(t2, i2) {
      this.I = t2, this.Os = i2, this.Yo = /* @__PURE__ */ new Map(), this.Rs = false;
    }
    add(t2) {
      var i2 = this;
      return p((function* () {
        if (i2.Rs) throw new Error("Cannot add an extension to a disposed ExtensionRuntime");
        if (i2.Yo.has(t2.name)) throw new Error('Browser extension "' + t2.name + '" is already registered');
        i2.Yo.set(t2.name, t2);
        try {
          var e2 = t2.setup(i2.Os);
          e2 && (yield e2);
        } catch (e3) {
          var r2 = i2.Yo.get(t2.name) === t2;
          r2 && i2.Yo.delete(t2.name), i2.I.error('Failed to set up browser extension "' + t2.name + '"', e3), r2 && i2.Xo(t2);
        }
      }))();
    }
    getExtension(t2) {
      return this.Yo.get(t2);
    }
    dispose() {
      if (!this.Rs) {
        this.Rs = true;
        var t2 = Array.from(this.Yo.values()).reverse();
        for (var i2 of (this.Yo.clear(), t2)) this.Xo(i2);
      }
    }
    Xo(t2) {
      try {
        var i2 = null == t2.dispose ? void 0 : t2.dispose();
        i2 && V(i2.then) && i2.then(void 0, ((i3) => {
          this.I.error('Failed to dispose browser extension "' + t2.name + '"', i3);
        }));
      } catch (i3) {
        this.I.error('Failed to dispose browser extension "' + t2.name + '"', i3);
      }
    }
  };
  var dl = class {
    constructor(t2) {
      this._instance = t2;
    }
    initialize() {
    }
    get(t2) {
      var i2 = this._instance.persistence;
      if ("string" == typeof t2) return null == i2 ? void 0 : i2.get_property(t2);
      var e2 = {};
      for (var r2 of t2) {
        var s2 = null == i2 ? void 0 : i2.get_property(r2);
        K(s2) || (e2[r2] = s2);
      }
      return e2;
    }
    set(t2, i2) {
      var e2;
      null == (e2 = this._instance.persistence) || e2.register("string" == typeof t2 ? { [t2]: i2 } : t2);
    }
    remove(t2) {
      var i2;
      null == (i2 = this._instance.persistence) || i2.unregister(t2);
    }
  };
  var vl = "extensionsRemoteConfig";
  var cl = class {
    constructor(t2) {
      this.Rs = false, this.instance = t2, this.I = Ie, this.tl = t2.el, this.kv = new dl(t2), this.onEvent = (t3) => mo(this.instance.on("eventCaptured", ((i2) => {
        try {
          t3({ event: i2.event, properties: i2.properties });
        } catch (t4) {
          this.I.error("Browser extension event listener failed", t4);
        }
      }))), this.onRemoteConfig = (t3) => {
        if (this.Rs) return mo((() => {
        }));
        var i2 = (i3) => {
          try {
            t3(i3);
          } catch (t4) {
            this.I.error("Browser extension remote config listener failed", t4);
          }
        }, e2 = this.instance.il.on(vl, i2);
        return this.tl && i2(this.tl), mo(e2);
      }, this.rl = new ul(Ie.createLogger("[BrowserExtensions]"), this);
    }
    get logger() {
      return this.I;
    }
    get distinctId() {
      return this.instance.get_distinct_id();
    }
    get anonymousId() {
      var t2;
      return null !== (t2 = this.instance.get_property(Be)) && void 0 !== t2 ? t2 : this.distinctId;
    }
    get deviceId() {
      var t2 = this.instance.get_property(Be);
      return "string" == typeof t2 ? t2 : void 0;
    }
    get library() {
      return { name: c.LIB_NAME, version: c.LIB_VERSION };
    }
    get initialPersonProperties() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this.instance.persistence) ? void 0 : i2.get_initial_props()) && void 0 !== t2 ? t2 : {};
    }
    get groups() {
      return this.instance.getGroups();
    }
    get session() {
      try {
        var t2, i2, e2, r2, s2 = null == (t2 = this.instance.sessionManager) ? void 0 : t2.checkAndGetSessionAndWindowId(true);
        return { sessionId: null !== (i2 = null == s2 ? void 0 : s2.sessionId) && void 0 !== i2 ? i2 : "", windowId: null !== (e2 = null == s2 ? void 0 : s2.windowId) && void 0 !== e2 ? e2 : "", sessionStartTimestamp: null !== (r2 = null == s2 ? void 0 : s2.sessionStartTimestamp) && void 0 !== r2 ? r2 : 0 };
      } catch (t3) {
        return { sessionId: "", windowId: "", sessionStartTimestamp: 0 };
      }
    }
    get canCapture() {
      return this.instance.is_capturing();
    }
    get projectToken() {
      return this.instance.config.token;
    }
    add(t2) {
      return this.rl.add(t2);
    }
    getExtension(t2) {
      return this.rl.getExtension(t2);
    }
    capture(t2, i2, e2) {
      var r2 = this;
      return p((function* () {
        e2 ? r2.instance.capture(t2, i2, { timestamp: e2.timestamp, uuid: e2.uuid, $set: e2.set, $set_once: e2.setOnce }) : r2.instance.capture(t2, i2);
      }))();
    }
    registerDynamicEventProperties(t2) {
      return mo(this.instance.nl(t2));
    }
    handleRemoteConfig(t2) {
      this.Rs || (this.tl = t2, this.instance.il.emit(vl, t2));
    }
    sendRequest(t2, i2) {
      var e2 = this;
      return p((function* () {
        var r2;
        void 0 === i2 && (i2 = {});
        var s2 = e2.instance.requestRouter.endpointFor(null !== (r2 = i2.target) && void 0 !== r2 ? r2 : "api", t2), n2 = { method: i2.method, url: i2.query ? wa(s2, i2.query) : s2, data: i2.body, headers: i2.headers, timeout: i2.timeoutMs, fireCallbackOnDrop: true, transport: i2.transport, compression: i2.compression, compressionFallback: "flags" === i2.target && "best-available" === i2.compression ? E.Base64 : void 0, timestampMode: i2.sentAt };
        return "sendBeacon" === i2.transport ? (e2.instance._send_request(n2), { statusCode: 202 }) : new Promise(((t3) => {
          n2.callback = t3, e2.instance._send_request(n2);
        }));
      }))();
    }
    dispose() {
      this.Rs || (this.Rs = true, this.rl.dispose());
    }
  };
  var fl = {};
  var pl = 0;
  var _l = () => {
  };
  var gl = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored';
  var ml = "Surveys module not available";
  var yl = "sanitize_properties is deprecated. Use before_send instead";
  var bl = "Invalid value for property_denylist config: ";
  var wl = ["token", "distinct_id", Ur];
  var xl = "posthog";
  var El = !ga && -1 === (null == h ? void 0 : h.indexOf("MSIE")) && -1 === (null == h ? void 0 : h.indexOf("Mozilla"));
  var Sl = (t2) => {
    var i2 = {};
    return t2 && "unset" !== t2 ? ("2025-11-30" > t2 || (i2.strictMinimumDuration = true), "2026-05-30" > t2 || (i2.canvasCapture = { resolutionScale: 0.6 }), "2026-06-25" > t2 || (i2.streamNetworkBody = true), "2026-08-30" > t2 || (i2.captureJsonLd = true), i2) : i2;
  };
  var kl = (i2) => {
    var e2;
    return _({ api_host: "https://us.i.posthog.com", flags_api_host: null, ui_host: null, asset_host: null, token: "", autocapture: true, cross_subdomain_cookie: hs(null == r ? void 0 : r.location), persistence: "localStorage+cookie", persistence_name: "", cookie_persisted_properties: [], loaded: _l, save_campaign_params: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageleave: "if_capture_pageview", defaults: null != i2 ? i2 : "unset", __preview_deferred_init_extensions: false, __preview_external_dependency_versioned_paths: false, __preview_cookie_wins_on_conflict: false, debug: s && J(null == s ? void 0 : s.search) && -1 !== s.search.indexOf("__posthog_debug=true") || false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_web_experiments: true, disable_surveys: false, disable_surveys_automatic_display: false, disable_conversations: false, disable_product_tours: false, disableDeviceModel: false, disable_external_dependency_loading: false, strict_script_versioning: "fallback", enable_recording_console_log: void 0, secure_cookie: "https:" === (null == t || null == (e2 = t.location) ? void 0 : e2.protocol), ip: false, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", consent_persistence_name: null, opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_denylist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, request_batching: true, properties_string_max_length: 65535, mask_all_element_attributes: false, mask_all_text: false, mask_personal_data_properties: false, custom_personal_data_properties: [], advanced_disable_flags: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_only_evaluate_survey_feature_flags: false, advanced_feature_flags_dedup_per_session: false, advanced_enable_surveys: false, advanced_disable_toolbar_metrics: false, feature_flag_request_timeout_ms: 3e3, surveys_request_timeout_ms: 1e4, on_request_error(t2) {
      Ie.error("Bad HTTP status: " + t2.statusCode + " " + t2.text);
    }, get_device_id: (t2) => t2, capture_performance: void 0, name: "posthog", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800, person_profiles: Kr, before_send: void 0, get_current_url: void 0, request_queue_config: { flush_interval_ms: Ia }, error_tracking: {}, _onCapture: _l }, ((t2) => ({ rageclick: t2 && t2 >= "2026-05-30" ? { content_ignorelist: hn, ignore_text_selection: true } : !t2 || "2025-11-30" > t2 || { content_ignorelist: true }, capture_pageview: !t2 || "2025-05-24" > t2 || "history_change", session_recording: Sl(t2), external_scripts_inject_target: t2 && t2 >= "2026-01-30" ? "head" : "body", internal_or_test_user_hostname: t2 && t2 >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0, persistence_save_debounce_ms: t2 && t2 >= "2026-05-30" ? 250 : 0, split_storage: !(!t2 || "2026-05-30" > t2), detect_google_search_app: !(!t2 || "2026-05-30" > t2), disable_capture_url_hashes: !(!t2 || "2026-06-25" > t2), cookieWinsOnConflict: !(!t2 || "unset" === t2 || "2026-08-29" > t2) }))(i2));
  };
  var Tl = [["process_person", "person_profiles"], ["xhr_headers", "request_headers"], ["cookie_name", "persistence_name"], ["disable_cookie", "disable_persistence"], ["__preview_disable_beacon", "disable_beacon"], ["store_google", "save_campaign_params"], ["verbose", "debug"], ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]];
  var $l = (t2) => {
    var i2 = {};
    for (var e2 of Tl) {
      var r2 = e2[0], s2 = e2[1];
      K(t2[r2]) || (i2[s2] = t2[r2]);
    }
    var n2 = rs({}, i2, t2), o2 = t2.__preview_external_dependency_versioned_paths;
    return K(o2) || (K(t2.strict_script_versioning) && (n2.strict_script_versioning = !!o2), J(o2) && K(t2.asset_host) && (n2.asset_host = o2)), H(t2.property_blacklist) && (K(t2.property_denylist) ? n2.property_denylist = t2.property_blacklist : H(t2.property_denylist) ? n2.property_denylist = [...t2.property_blacklist, ...t2.property_denylist] : Ie.error(bl + t2.property_denylist)), n2;
  };
  var Pl = class {
    constructor() {
      this.__forceAllowLocalhost = false;
    }
    get sl() {
      return this.__forceAllowLocalhost;
    }
    set sl(t2) {
      Ie.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = t2;
    }
  };
  var Rl = class _Rl {
    al(t2, i2) {
      if (t2) {
        var e2 = this.Yo.indexOf(t2);
        -1 !== e2 && this.Yo.splice(e2, 1);
      }
      return this.Yo.push(i2), null == i2.initialize || i2.initialize(), i2;
    }
    ol() {
      return this.config.cookieless_mode === Vr || this.config.cookieless_mode === Hr && this.consent.isRejected();
    }
    ll() {
      if (!this.ol() && this.get_distinct_id() === Lr) {
        var t2 = this.persistence;
        if (t2) {
          this.ul() || t2.load(true);
          var i2 = this.get_distinct_id();
          if (!i2 || i2 === Lr) {
            var e2 = this.config.get_device_id(ms());
            this.register({ distinct_id: e2, $device_id: e2 }), t2.set_property(Or, Wr);
          }
          this.hl();
        }
      }
    }
    get decideEndpointWasHit() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this.featureFlags) ? void 0 : i2.hasLoadedFlags) && void 0 !== t2 && t2;
    }
    get flagsEndpointWasHit() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this.featureFlags) ? void 0 : i2.hasLoadedFlags) && void 0 !== t2 && t2;
    }
    constructor() {
      var t2;
      this.webPerformance = new Pl(), this.dl = false, this.version = c.LIB_VERSION, this.vl = /* @__PURE__ */ new Set(), this.cl = "", this.il = new Ua(), this.Yo = [], this.fl = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = kl(), this.SentryIntegration = Nn, this.sentryIntegration = (t3) => (function(t4, i3) {
        var e2 = Dn(t4, i3);
        return { name: Mn, processEvent: (t5) => e2(t5) };
      })(this, t3), this.__request_queue = [], this.__loaded = false, this.analyticsDefaultEndpoint = "/e/", this.pl = false, this.gl = null, this.ml = null, this.yl = null, this.scrollManager = new Da(this), this.pageViewManager = new Ln(this), this.rateLimiter = new Mo(this), this.requestRouter = new il(this), this.consent = new Us(this), this.externalIntegrations = new hl(this);
      var i2 = null !== (t2 = _Rl.__defaultExtensionClasses) && void 0 !== t2 ? t2 : {};
      this.featureFlags = i2.featureFlags && new i2.featureFlags(this), this.toolbar = i2.toolbar && new i2.toolbar(this), this.surveys = i2.surveys && new i2.surveys(this), this.conversations = i2.conversations && new i2.conversations(this), this.logs = i2.logs && new i2.logs(this), this.metrics = i2.metrics && new i2.metrics(this), this.experiments = i2.experiments && new i2.experiments(this), this.exceptions = i2.exceptions && new i2.exceptions(this), this.people = { set: (t3, i3, e2) => {
        var r2 = J(t3) ? { [t3]: i3 } : t3;
        this.setPersonProperties(r2), null == e2 || e2({});
      }, set_once: (t3, i3, e2) => {
        var r2 = J(t3) ? { [t3]: i3 } : t3;
        this.setPersonProperties(void 0, r2), null == e2 || e2({});
      } }, this.on("eventCaptured", ((t3) => Ie.info('send "' + (null == t3 ? void 0 : t3.event) + '"', t3)));
    }
    init(t2, i2, e2) {
      if (e2 && e2 !== xl) {
        var r2, s2 = null !== (r2 = fl[e2]) && void 0 !== r2 ? r2 : new _Rl();
        return s2._init(t2, i2, e2), fl[e2] = s2, fl[xl][e2] = s2, s2;
      }
      return this._init(t2, i2, e2);
    }
    _init(i2, e2, r2) {
      var s2, n2;
      void 0 === e2 && (e2 = {});
      var o2, a2 = J(i2) ? i2.trim() : "";
      if (!a2) return Ie.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
      if (this.__loaded) return a2 !== (null == (o2 = this.config) ? void 0 : o2.token) ? console.warn("[PostHog.js]", "You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('" + a2 + "', { ... }, 'project2')") : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
      this.__loaded = true, this.config = kl(e2.defaults), e2.debug = this.bl(e2.debug), this._l = e2, this.wl = [], e2.person_profiles ? this.ml = e2.person_profiles : e2.process_person && (this.ml = e2.process_person);
      var l2 = kl(e2.defaults), h2 = $l(e2), u2 = rs({}, l2, h2, { name: r2, token: a2 });
      W(l2.rageclick) && W(h2.rageclick) && (u2.rageclick = rs({}, l2.rageclick, h2.rageclick)), W(l2.session_recording) && W(h2.session_recording) && (u2.session_recording = rs({}, l2.session_recording, h2.session_recording)), this.set_config(u2), this.config.on_xhr_error && Ie.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = e2.disable_compression ? void 0 : yo.GZipJS;
      var d2 = this.ul();
      if (this.persistence = new go(this.config, d2), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new go(_({}, this.config, { persistence: "sessionStorage" }), d2, false), this.cl = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !d2 && Ls.Xr()) {
        var v2 = Ls.ni(this.cl);
        H(v2) && v2.forEach(((t2) => {
          J(t2) && this.vl.add(t2);
        }));
      } else Ls.ri(this.cl);
      var f2 = _({}, this.persistence.props), p2 = _({}, this.sessionPersistence.props);
      this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this.kl = new Aa(((t2) => this.Sl(t2)), this.config.request_queue_config), this.xl = new Ma(this), this.__request_queue = [];
      var g2 = this.ol();
      if (g2 || (this.sessionManager = new za(this), this.sessionPropsManager = new La(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((t2, i3, e3) => {
        (null != e3 && e3.activityTimeout || null != e3 && e3.sessionPastMaximumLength || null != e3 && e3.crossTabAdoption) && this.Cl();
      }))), this.Tl(), this.config.__preview_deferred_init_extensions ? (Ie.info("Deferring extension initialization to improve startup performance"), setTimeout((() => {
        this.Ml(g2);
      }), 0)) : (Ie.info("Initializing extensions synchronously"), this.Ml(g2)), c.DEBUG = c.DEBUG || this.config.debug, c.DEBUG && Ie.info("Starting in debug mode", { this: this, config: e2, thisC: _({}, this.config), p: f2, s: p2 }), !this.config.identity_distinct_id || null != (s2 = e2.bootstrap) && s2.distinctID || (e2.bootstrap = _({}, e2.bootstrap, { distinctID: this.config.identity_distinct_id, isIdentifiedID: true })), void 0 !== (null == (n2 = e2.bootstrap) ? void 0 : n2.distinctID)) {
        var m2 = e2.bootstrap.distinctID, y2 = this.get_distinct_id(), b2 = this.persistence.get_property(Or);
        if (e2.bootstrap.isIdentifiedID && null != y2 && y2 !== m2 && b2 === Wr) this.identify(m2);
        else if (e2.bootstrap.isIdentifiedID && null != y2 && y2 !== m2 && b2 === Gr) Ie.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
        else {
          var w2 = this.config.get_device_id(ms()), x2 = e2.bootstrap.isIdentifiedID ? w2 : m2;
          this.persistence.set_property(Or, e2.bootstrap.isIdentifiedID ? Gr : Wr), this.register({ distinct_id: m2, $device_id: x2 });
        }
      }
      if (g2) this.register_once({ distinct_id: Lr, $device_id: null }, "");
      else if (!this.get_distinct_id()) {
        var E2 = this.config.get_device_id(ms());
        this.register_once({ distinct_id: E2, $device_id: E2 }, ""), this.persistence.set_property(Or, Wr);
      }
      return us(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: false }), e2.segment ? (function(t2, i3) {
        var e3 = t2.config.segment;
        if (!e3) return i3();
        !(function(t3, i4) {
          var e4 = t3.config.segment;
          if (!e4) return i4();
          var r3 = (e5) => {
            var r4 = () => e5.anonymousId() || ms();
            t3.config.get_device_id = r4, e5.id() && (t3.register({ distinct_id: e5.id(), $device_id: r4() }), t3.persistence.set_property(Or, Gr)), i4();
          }, s3 = e4.user();
          "then" in s3 && V(s3.then) ? s3.then(r3) : r3(s3);
        })(t2, (() => {
          e3.register(((t3) => {
            "undefined" != typeof Promise && Promise.resolve || Fn.warn("This browser does not have Promise support, and can not use the segment integration");
            var i4 = (i5, e4) => {
              if (!e4) return i5;
              i5.event.userId || i5.event.anonymousId === t3.get_distinct_id() || (Fn.info("No userId set, resetting PostHog"), t3.reset()), i5.event.userId && i5.event.userId !== t3.get_distinct_id() && (Fn.info("UserId set, identifying with PostHog"), t3.identify(i5.event.userId));
              var r3 = t3.calculateEventProperties(e4, i5.event.properties);
              return i5.event.properties = Object.assign({}, r3, i5.event.properties), i5;
            };
            return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: () => true, load: () => Promise.resolve(), track: (t4) => i4(t4, t4.event.event), page: (t4) => i4(t4, Qr), identify: (t4) => i4(t4, Zr), screen: (t4) => i4(t4, "$screen") };
          })(t2)).then((() => {
            i3();
          }));
        }));
      })(this, (() => this.El())) : this.El(), V(this.config._onCapture) && this.config._onCapture !== _l && (Ie.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", ((t2) => this.config._onCapture(t2.event, t2)))), this.config.ip && Ie.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || (function() {
        return Ha.apply(this, arguments);
      })().then(((t2) => {
        t2 && this.register({ [ze]: t2 });
      })).catch(_l), this;
    }
    Il(t2) {
      var i2 = t2;
      return J(i2.name) && V(i2.setup);
    }
    Rl(t2, i2) {
      this.Il(t2) ? i2.push((() => {
        this.Pl().add(t2).catch((() => null == t2.dispose ? void 0 : t2.dispose())).catch(((i3) => {
          Ie.error('Failed to dispose browser extension "' + t2.name + '"', i3);
        }));
      })) : this.Yo.push(t2);
    }
    Tl() {
      var t2, i2, e2, r2, s2, n2, o2 = null !== (t2 = null == (i2 = this.config.__extensionClasses) ? void 0 : i2.featureFlags) && void 0 !== t2 ? t2 : null == (e2 = _Rl.__defaultExtensionClasses) ? void 0 : e2.featureFlags;
      o2 && (this.featureFlags && this.featureFlags instanceof o2 || (null == (r2 = this.Al) || r2.call(this), this.Al = void 0, this.featureFlags = new o2(this)), V(this.featureFlags.onReloading) && V(this.featureFlags.setup) ? this.Al || (this.Al = this.featureFlags.onReloading((() => {
        this.il.emit("featureFlagsReloading", true);
      })), this.Pl().add(this.featureFlags)) : null == (s2 = (n2 = this.featureFlags).initialize) || s2.call(n2));
    }
    Ml(t2) {
      var i2, e2, r2, s2, n2, o2, a2, l2 = performance.now(), h2 = _({}, _Rl.__defaultExtensionClasses, this.config.__extensionClasses), u2 = [];
      h2.exceptions && this.Yo.push(this.exceptions = null !== (i2 = this.exceptions) && void 0 !== i2 ? i2 : new h2.exceptions(this)), h2.historyAutocapture && this.Yo.push(this.historyAutocapture = new h2.historyAutocapture(this)), h2.tracingHeaders && this.Yo.push(this.tracingHeaders = new h2.tracingHeaders(this)), h2.siteApps && this.Yo.push(this.siteApps = new h2.siteApps(this)), h2.sessionRecording && !t2 && this.Yo.push(this.sessionRecording = new h2.sessionRecording(this)), this.config.disable_scroll_properties || u2.push((() => {
        this.scrollManager.startMeasuringScrollPosition();
      })), h2.autocapture && this.Rl(this.autocapture = new h2.autocapture(this), u2), h2.surveys && this.Rl(this.surveys = null !== (e2 = this.surveys) && void 0 !== e2 ? e2 : new h2.surveys(this), u2), h2.logs && this.Rl(this.logs = null !== (r2 = this.logs) && void 0 !== r2 ? r2 : new h2.logs(this), u2), h2.metrics && this.Yo.push(this.metrics = null !== (s2 = this.metrics) && void 0 !== s2 ? s2 : new h2.metrics(this)), h2.conversations && this.Yo.push(this.conversations = null !== (n2 = this.conversations) && void 0 !== n2 ? n2 : new h2.conversations(this)), h2.productTours && this.Yo.push(this.productTours = new h2.productTours(this)), h2.heatmaps && this.Yo.push(this.heatmaps = new h2.heatmaps(this)), h2.webVitalsAutocapture && this.Yo.push(this.webVitalsAutocapture = new h2.webVitalsAutocapture(this)), h2.exceptionObserver && this.Yo.push(this.exceptionObserver = new h2.exceptionObserver(this)), h2.deadClicksAutocapture && this.Yo.push(this.deadClicksAutocapture = new h2.deadClicksAutocapture(this, In)), h2.toolbar && this.Yo.push(this.toolbar = null !== (o2 = this.toolbar) && void 0 !== o2 ? o2 : new h2.toolbar(this)), h2.experiments && this.Yo.push(this.experiments = null !== (a2 = this.experiments) && void 0 !== a2 ? a2 : new h2.experiments(this)), this.Yo.forEach(((t3) => {
        t3.initialize && u2.push((() => {
          null == t3.initialize || t3.initialize();
        }));
      })), u2.push((() => {
        if (this.Fl) {
          var t3 = this.Fl;
          this.Fl = void 0, this.Yo.forEach(((i3) => null == i3.onRemoteConfig ? void 0 : i3.onRemoteConfig(t3)));
        }
      })), this.Ol(u2, l2);
    }
    Ol(t2, i2) {
      for (; t2.length > 0; ) {
        if (this.config.__preview_deferred_init_extensions && performance.now() - i2 >= 30 && t2.length > 0) return void setTimeout((() => {
          this.Ol(t2, i2);
        }), 0);
        var e2 = t2.shift();
        if (e2) try {
          e2();
        } catch (t3) {
          Ie.error("Error initializing extension:", t3);
        }
      }
      var r2 = Math.round(performance.now() - i2);
      this.register_for_session({ [jr]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous", [Br]: r2 }), this.config.__preview_deferred_init_extensions && Ie.info("PostHog extensions initialized (" + r2 + "ms)");
    }
    za(t2) {
      var i2;
      if (!r || !r.body) return Ie.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
        this.za(t2);
      }), 500);
      if (this.config.__preview_deferred_init_extensions && (this.Fl = t2), this.el = t2, this.compression = void 0, t2.ok) {
        var e2, s2 = t2.config;
        s2.supportedCompression && !this.config.disable_compression && (this.compression = N(s2.supportedCompression, yo.GZipJS) ? yo.GZipJS : N(s2.supportedCompression, yo.Base64) ? yo.Base64 : void 0), null != (e2 = s2.analytics) && e2.endpoint && (this.analyticsDefaultEndpoint = s2.analytics.endpoint);
      }
      this.set_config({ person_profiles: this.ml ? this.ml : Kr }), null == (i2 = this.Ll) || i2.handleRemoteConfig(t2), this.Yo.forEach(((i3) => null == i3.onRemoteConfig ? void 0 : i3.onRemoteConfig(t2)));
    }
    El() {
      try {
        this.config.loaded(this);
      } catch (t3) {
        Ie.critical("`loaded` function failed", t3);
      }
      if (this.Dl(), this.config.internal_or_test_user_hostname && null != s && s.hostname) {
        var t2 = s.hostname, i2 = this.config.internal_or_test_user_hostname;
        ("string" == typeof i2 ? t2 === i2 : i2.test(t2)) && this.setInternalOrTestUser();
      }
      this.config.capture_pageview && setTimeout((() => {
        (this.consent.isOptedIn() || this.ol()) && this.$l();
      }), 1), this.Nl = new No(this), this.Nl.load();
    }
    Dl() {
      var t2;
      this.is_capturing() && this.config.request_batching && (null == (t2 = this.kl) || t2.enable());
    }
    _dom_loaded() {
      this.is_capturing() && is(this.__request_queue, ((t2) => this.Sl(t2))), this.__request_queue = [], this.Dl();
    }
    _handle_unload() {
      var t2, i2, e2, r2, s2;
      null == (t2 = this.surveys) || null == t2.handlePageUnload || t2.handlePageUnload(), null == (i2 = this.metrics) || i2.flush("sendBeacon"), this.config.request_batching ? (this.ql() && this.capture(Xr), null == (e2 = this.logs) || e2.flushLogs("sendBeacon"), null == (r2 = this.kl) || r2.unload(), null == (s2 = this.xl) || s2.unload()) : this.ql() && this.capture(Xr, null, { transport: "sendBeacon" });
    }
    _send_request(t2) {
      var i2;
      this.__loaded ? El ? this.__request_queue.push(t2) : this.rateLimiter.isServerRateLimited(t2.batchKey) ? t2.fireCallbackOnDrop && (null == t2.callback || t2.callback({ statusCode: 429 })) : (t2.transport = t2.transport || this.config.api_transport, t2.headers = _({}, this.config.request_headers, t2.headers), t2.compression = "best-available" === t2.compression ? null !== (i2 = this.compression) && void 0 !== i2 ? i2 : t2.compressionFallback : t2.compression, (K(this.config.disable_beacon) ? this.config.__preview_disable_beacon : this.config.disable_beacon) && (t2.disableTransport = ["sendBeacon"]), t2.fetchOptions = t2.fetchOptions || this.config.fetch_options, ((t3) => {
        var i3, e2, r2, s2 = _({}, t3);
        s2.timeout = s2.timeout || 6e4;
        var n2, o2, a2, h2, u2, d2 = null !== (i3 = s2.transport) && void 0 !== i3 ? i3 : "fetch";
        "sendBeacon" === d2 && K(s2.compression) && s2.data && (s2.compression = yo.Base64), "POST" === s2.method && s2.data && ("capture-body" === s2.timestampMode ? s2.data = { api_key: null !== (o2 = null == (u2 = (h2 = (H(n2 = s2.data) ? n2 : [n2]).map(((t4) => _({}, t4, t4.timestamp instanceof Date && !isNaN(t4.timestamp.getTime()) ? { timestamp: t4.timestamp.toISOString() } : {}))))[0]) || null == (a2 = u2.properties) ? void 0 : a2.token) && void 0 !== o2 ? o2 : null == u2 ? void 0 : u2.token, batch: h2, sent_at: (/* @__PURE__ */ new Date()).toISOString() } : "body" === s2.timestampMode && (s2.data = (function(t4, i4) {
          return void 0 === i4 && (i4 = (/* @__PURE__ */ new Date()).toISOString()), H(t4) ? t4.map(((t5) => _({}, t5, { sent_at: i4 }))) : _({}, t4, { sent_at: i4 });
        })(s2.data))), s2.url = Ca(s2.url, s2.method, s2.compression, s2.timestampMode);
        var v2 = Oa.filter(((t4) => !s2.disableTransport || !t4.transport || !s2.disableTransport.includes(t4.transport))), c2 = null !== (e2 = null == (r2 = (function(t4, i4) {
          for (var e3 = 0; t4.length > e3; e3++) if (t4[e3].transport === d2) return t4[e3];
        })(v2)) ? void 0 : r2.method) && void 0 !== e2 ? e2 : v2[0].method;
        if (!c2) throw new Error("No available transport method");
        var f2 = (t4) => {
          try {
            c2(t4);
          } catch (t5) {
            $a(t5) ? Ie.warn(t5) : Ie.error(t5), null == s2.callback || s2.callback({ statusCode: 0, error: t5 });
          }
        };
        "sendBeacon" !== d2 && s2.data && s2.compression === yo.GZipJS && l && "undefined" != typeof Promise && !ya ? ka(s2).then(((t4) => {
          f2(t4);
        })).catch(((i4) => {
          if (Ci(i4)) return ya = true, void f2(_({}, s2, { compression: void 0, url: Ca(t3.url, t3.method, void 0, t3.timestampMode) }));
          ((t4) => {
            if (!t4 || "object" != typeof t4) return false;
            var i5 = "name" in t4 ? String(t4.name) : "";
            return Ci(t4) || i5 === $i;
          })(i4) && (ya = true), f2(s2);
        })) : c2(s2);
      })(_({}, t2, { callback: (i3) => {
        var e2, r2;
        this.rateLimiter.checkForLimiting(i3), 400 > i3.statusCode || null == (e2 = (r2 = this.config).on_request_error) || e2.call(r2, i3), null == t2.callback || t2.callback(i3);
      } }))) : t2.fireCallbackOnDrop && (null == t2.callback || t2.callback({ statusCode: 0 }));
    }
    Sl(t2) {
      this.xl ? this.xl.retriableRequest(t2) : this._send_request(t2);
    }
    _execute_array(t2) {
      pl++;
      try {
        var i2, e2 = [], r2 = [], s2 = [];
        is(t2, ((t3) => {
          if (t3) if (H(i2 = t3[0])) s2.push(t3);
          else if (V(t3)) try {
            t3.call(this);
          } catch (i3) {
            Ie.error("Error executing queued PostHog call", t3, i3);
          }
          else H(t3) && "alias" === i2 ? e2.push(t3) : H(t3) && -1 !== i2.indexOf("capture") && V(this[i2]) ? s2.push(t3) : r2.push(t3);
        }));
        var n2 = function(t3, i3) {
          is(t3, (function(t4) {
            try {
              if (H(t4[0])) {
                var e3 = i3;
                es(t4, (function(t5) {
                  e3 = e3[t5[0]].apply(e3, t5.slice(1));
                }));
              } else i3[t4[0]].apply(i3, t4.slice(1));
            } catch (i4) {
              Ie.error("Error executing queued PostHog call", t4, i4);
            }
          }));
        };
        n2(e2, this), n2(r2, this), n2(s2, this);
      } finally {
        pl--;
      }
    }
    push(t2) {
      if (pl > 0 && H(t2) && J(t2[0])) {
        var i2 = _Rl.prototype[t2[0]];
        V(i2) && i2.apply(this, t2.slice(1));
      } else this._execute_array([t2]);
    }
    capture(t2, i2, e2) {
      var r2, s2, n2, o2, a2;
      if (this.__loaded && this.persistence && this.sessionPersistence && this.kl) {
        if (this.is_capturing()) if (!K(t2) && J(t2)) {
          this.ll();
          var l2 = !this.config.opt_out_useragent_filter && this._is_bot();
          if (!l2 || this.config.__preview_capture_bot_pageviews) {
            var h2 = null != e2 && e2.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
            if (null == h2 || !h2.isRateLimited) {
              null != i2 && i2.$current_url && !J(null == i2 ? void 0 : i2.$current_url) && (Ie.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == i2 || delete i2.$current_url), "$exception" !== t2 || null != e2 && e2.jl || Ie.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
              var u2 = /* @__PURE__ */ new Date(), d2 = (null == e2 ? void 0 : e2.timestamp) || u2, v2 = bi(null == e2 ? void 0 : e2.uuid, ms), c2 = { uuid: v2, event: t2, properties: this.calculateEventProperties(t2, i2 || {}, d2, v2) };
              t2 === Qr && this.config.__preview_capture_bot_pageviews && l2 && (c2.event = "$bot_pageview", c2.properties.$browser_type = "bot"), h2 && (c2.properties.$lib_rate_limit_remaining_tokens = h2.remainingTokens);
              var f2 = "$feature_flag_called" === t2 && false === c2.properties.$feature_flag_has_experiment && true === this.get_property(pr);
              (null == e2 ? void 0 : e2.$set) && !f2 && (c2.$set = null == e2 ? void 0 : e2.$set);
              var p2 = null == e2 ? void 0 : e2.$unset;
              p2 && (c2.$unset = p2);
              var g2, m2, y2, b2 = f2 ? void 0 : this.Bl(null == e2 ? void 0 : e2.$set_once, t2 !== ts, t2 === Zr);
              if (b2 && (c2.$set_once = b2), null != e2 && e2._noTruncate || (s2 = this.config.properties_string_max_length, n2 = c2, o2 = (t3) => J(t3) ? t3.slice(0, s2) : t3, a2 = /* @__PURE__ */ new Set(), c2 = (function t3(i3, e3) {
                if (i3 !== Object(i3)) return o2 ? o2(i3) : i3;
                if (!a2.has(i3)) {
                  var r3;
                  if (a2.add(i3), H(i3)) r3 = [], is(i3, ((i4) => {
                    r3.push(t3(i4));
                  }));
                  else {
                    var s3 = {};
                    es(i3, ((i4, e4) => {
                      a2.has(i4) || (s3[e4] = t3(i4, e4));
                    })), r3 = s3;
                  }
                  return r3;
                }
              })(n2)), c2.timestamp = d2, K(null == e2 ? void 0 : e2.timestamp) || (c2.properties.$event_time_override_provided = true, c2.properties.$event_time_override_system_time = u2), f2 && (c2.properties = (function(t3, i3) {
                void 0 === i3 && (i3 = []);
                var e3 = {}, r3 = (i4) => {
                  void 0 !== t3[i4] && (e3[i4] = t3[i4]);
                };
                return w.forEach(r3), i3.forEach(r3), e3;
              })(c2.properties, wl)), t2 === Po.DISMISSED || t2 === Po.SENT) {
                var x2 = null == i2 ? void 0 : i2[Ro.SURVEY_ID], E2 = null == i2 ? void 0 : i2[Ro.SURVEY_ITERATION];
                sl({ id: x2, current_iteration: E2 }), c2.$set = _({}, c2.$set, { [(g2 = { id: x2, current_iteration: E2 }, m2 = t2 === Po.SENT ? "responded" : "dismissed", y2 = "$survey_" + m2 + "/" + g2.id, g2.current_iteration && g2.current_iteration > 0 && (y2 = "$survey_" + m2 + "/" + g2.id + "/" + g2.current_iteration), y2)]: true });
              } else t2 === Po.SHOWN && (c2.$set = _({}, c2.$set, { [Ro.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
              if (t2 === Io.SHOWN) {
                var S2 = null == i2 ? void 0 : i2[Ao.TOUR_TYPE];
                S2 && (c2.$set = _({}, c2.$set, { [Ao.TOUR_LAST_SEEN_DATE + "/" + S2]: (/* @__PURE__ */ new Date()).toISOString() }));
              }
              var k2 = _({}, c2.properties.$set, c2.$set);
              if (G(k2) || this.setPersonPropertiesForFlags(k2), !X(this.config.before_send)) {
                var T2 = this.Jn(c2);
                if (!T2) return;
                (c2 = T2).uuid = bi(c2.uuid, ms);
              }
              this.il.emit("eventCaptured", c2);
              var P2 = null !== (r2 = null == e2 ? void 0 : e2._url) && void 0 !== r2 ? r2 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), R2 = { method: "POST", url: P2, data: c2, compression: "best-available", timestampMode: "recordings" === (null == e2 ? void 0 : e2._batchKey) || /\/s\/(?:\?|$)/.test(P2) ? "body" : "capture-body", batchKey: null == e2 ? void 0 : e2._batchKey, transport: null == e2 ? void 0 : e2.transport };
              return !this.config.request_batching || e2 && (null == e2 || !e2._batchKey) || null != e2 && e2.send_instantly ? this.Sl(R2) : this.kl.enqueue(R2), c2;
            }
            Ie.critical("This capture call is ignored due to client rate limiting.");
          }
        } else Ie.error("No event name provided to posthog.capture");
      } else Ie.uninitializedWarning("posthog.capture");
    }
    _addCaptureHook(t2) {
      return this.on("eventCaptured", ((i2) => t2(i2.event, i2)));
    }
    getExtension(t2) {
      var i2;
      return null == (i2 = this.Ll) ? void 0 : i2.getExtension(t2);
    }
    Pl() {
      var t2;
      return null !== (t2 = this.Ll) && void 0 !== t2 ? t2 : this.Ll = new cl(this);
    }
    nl(t2) {
      this.fl.push(t2);
      var i2 = true;
      return () => {
        if (i2) {
          i2 = false;
          var e2 = this.fl.indexOf(t2);
          -1 !== e2 && this.fl.splice(e2, 1);
        }
      };
    }
    Hl(t2) {
      var i2, e2, r2;
      return void 0 === t2 && (t2 = true), !(null == (i2 = this.persistence) || !i2.consumeCookieIdentityChange()) && (this.yl = null, this.persistence.get_property(Or) === Wr && (null == (r2 = this.sessionPersistence) || r2.clear(), this.vl.clear(), this.zl()), null == (e2 = this.featureFlags) || e2.reset(), t2 && this.reloadFeatureFlags(), true);
    }
    calculateEventProperties(i2, e2, n2, o2, a2) {
      if (n2 = n2 || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return e2;
      this.persistence.syncCookieProperties(), this.Hl();
      var l2 = a2 ? void 0 : this.persistence.remove_event_timer(i2), u2 = _({}, e2);
      if (u2.token = this.config.token, u2.$config_defaults = this.config.defaults, this.ol() && (u2[Ur] = true), "$snapshot" === i2) {
        var d2 = _({}, this.persistence.properties(), this.sessionPersistence.properties());
        return u2.distinct_id = d2.distinct_id, (!J(u2.distinct_id) && !Z(u2.distinct_id) || Y(u2.distinct_id)) && Ie.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), u2;
      }
      var v2, f2 = (function(i3, e3, r2, n3) {
        var o3, a3, l3, u3;
        if (void 0 === n3 && (n3 = false), !h) return {};
        var d3, v3 = i3 ? [...Qn, ...e3 || []] : [], f3 = (function(t2) {
          for (var i4 = 0; gi.length > i4; i4++) {
            var e4 = gi[i4], r3 = e4[1], s2 = e4[0].exec(t2), n4 = s2 && (V(r3) ? r3(s2, t2) : r3);
            if (n4) return n4;
          }
          return ["", ""];
        })(h), p3 = f3[0], _2 = f3[1], g3 = null != (d3 = "undefined" != typeof navigator ? navigator : void 0) && d3.brave ? { brave: true } : {}, m3 = {};
        K(r2) || (m3.detectGoogleSearchApp = r2);
        var y3 = {}, b3 = null == (o3 = navigator) || null == (o3 = o3.userAgentData) ? void 0 : o3.platform, w3 = null == (a3 = navigator) ? void 0 : a3.maxTouchPoints, x3 = null == t || null == (l3 = t.screen) ? void 0 : l3.width, E3 = null == t || null == (u3 = t.screen) ? void 0 : u3.height, S3 = null == t ? void 0 : t.devicePixelRatio;
        K(b3) || (y3.userAgentDataPlatform = b3), K(w3) || (y3.maxTouchPoints = w3), K(x3) || (y3.screenWidth = x3), K(E3) || (y3.screenHeight = E3), K(S3) || (y3.devicePixelRatio = S3);
        var k3, T2, P2, R2, C2, O2, I2, A2, F2 = rs(as({ $os: p3, $os_version: _2, $browser: fi(h, navigator.vendor, g3, m3), $device: mi(h), $device_type: (T2 = h, P2 = y3, A2 = mi(T2), A2 === bt || A2 === yt || "Kobo" === A2 || "Kindle Fire" === A2 || A2 === Yt ? mt : A2 === Ut || A2 === Bt || A2 === jt || A2 === Gt ? "Console" : A2 === xt ? "Wearable" : A2 ? pt : "Android" === (null == P2 ? void 0 : P2.userAgentDataPlatform) && (null !== (R2 = null == P2 ? void 0 : P2.maxTouchPoints) && void 0 !== R2 ? R2 : 0) > 0 ? 600 > Math.min(null !== (C2 = null == P2 ? void 0 : P2.screenWidth) && void 0 !== C2 ? C2 : 0, null !== (O2 = null == P2 ? void 0 : P2.screenHeight) && void 0 !== O2 ? O2 : 0) / (null !== (I2 = null == P2 ? void 0 : P2.devicePixelRatio) && void 0 !== I2 ? I2 : 1) ? pt : mt : "Desktop"), $timezone: ho(), $timezone_offset: uo() }), { $current_url: Wn(n3 ? xi(null == s ? void 0 : s.href) : null == s ? void 0 : s.href, v3, Zn), $host: null == s ? void 0 : s.host, $pathname: null == s ? void 0 : s.pathname, $raw_user_agent: h.length > 1e3 ? h.substring(0, 997) + "..." : h, $browser_version: _i(h, navigator.vendor, g3, m3), $browser_language: so(), $browser_language_prefix: (k3 = so(), "string" == typeof k3 ? k3.split("-")[0] : void 0), $screen_height: null == t ? void 0 : t.screen.height, $screen_width: null == t ? void 0 : t.screen.width, $viewport_height: null == t ? void 0 : t.innerHeight, $viewport_width: null == t ? void 0 : t.innerWidth, $lib: c.LIB_NAME, $lib_version: c.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
        return c.SDK_DIST_CHANNEL && (F2.$sdk_dist_channel = c.SDK_DIST_CHANNEL), F2;
      })(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
      if (this.sessionManager) {
        var p2 = this.sessionManager.checkAndGetSessionAndWindowId(a2, n2.getTime(), true), g2 = p2.windowId;
        u2.$session_id = p2.sessionId, u2.$window_id = g2;
      }
      this.sessionPropsManager && rs(u2, this.sessionPropsManager.getSessionProps());
      try {
        var m2;
        this.sessionRecording && rs(u2, this.sessionRecording.sdkDebugProperties), u2.$sdk_debug_retry_queue_size = null == (m2 = this.xl) ? void 0 : m2.length;
      } catch (t2) {
        u2.$sdk_debug_error_capturing_properties = String(t2);
      }
      if (this.requestRouter.region === Qa && (u2.$lib_custom_api_host = this.config.api_host), v2 = i2 !== Qr || a2 ? i2 !== Xr || a2 ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n2) : this.pageViewManager.doPageView(n2, o2), u2 = rs(u2, v2), i2 === Qr && r && (u2.title = r.title), !K(l2)) {
        var y2 = n2.getTime() - l2;
        u2.$duration = parseFloat((y2 / 1e3).toFixed(3));
      }
      h && this.config.opt_out_useragent_filter && (u2.$browser_type = this._is_bot() ? "bot" : "browser");
      var b2 = this.persistence.properties(), w2 = this.sessionPersistence.properties();
      es(["$referrer", "$referring_domain"], ((t2) => {
        t2 in b2 && delete w2[t2];
      }));
      var x2 = {};
      if (this.fl.length > 0) for (var E2 of this.fl.slice()) try {
        rs(x2, E2());
      } catch (t2) {
        Ie.error("Failed to produce browser extension event properties", t2);
      }
      (u2 = rs({}, f2, b2, w2, _({}, x2, u2))).$is_identified = this._isIdentified(), H(this.config.property_denylist) ? es(this.config.property_denylist, (function(t2) {
        delete u2[t2];
      })) : Ie.error(bl + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
      var S2 = this.config.sanitize_properties;
      S2 && (Ie.error(yl), u2 = S2(u2, i2));
      var k2 = this.Ul();
      return u2.$process_person_profile = k2, k2 && !a2 && this.Wl("_calculate_event_properties"), u2;
    }
    Bl(t2, i2, e2) {
      var r2;
      if (void 0 === i2 && (i2 = true), void 0 === e2 && (e2 = false), !this.persistence || !this.Ul()) return t2;
      if (this.dl && !e2) return t2;
      var s2 = this.persistence.get_initial_props(), n2 = null == (r2 = this.sessionPropsManager) ? void 0 : r2.getSetOnceProps(), o2 = rs({}, s2, n2 || {}, t2 || {}), a2 = this.config.sanitize_properties;
      return a2 && (Ie.error(yl), o2 = a2(o2, "$set_once")), i2 && (this.dl = true), G(o2) ? void 0 : o2;
    }
    register(t2, i2) {
      var e2;
      null == (e2 = this.persistence) || e2.register(t2, i2);
    }
    register_once(t2, i2, e2) {
      var r2;
      null == (r2 = this.persistence) || r2.register_once(t2, i2, e2);
    }
    register_for_session(t2) {
      var i2, e2;
      null == (i2 = this.persistence) || i2.syncCookieProperties(), this.Hl(), null == (e2 = this.sessionPersistence) || e2.register(t2), Object.keys(t2).forEach(((t3) => this.vl.add(t3))), this.zl();
    }
    unregister(t2) {
      var i2;
      null == (i2 = this.persistence) || i2.unregister(t2);
    }
    unregister_for_session(t2) {
      var i2;
      null == (i2 = this.sessionPersistence) || i2.unregister(t2), this.vl.delete(t2), this.zl();
    }
    Vl(t2, i2) {
      this.register({ [t2]: i2 });
    }
    Cl() {
      this.vl.forEach(((t2) => {
        var i2;
        null == (i2 = this.sessionPersistence) || i2.unregister(t2);
      })), this.vl.clear(), this.zl();
    }
    zl() {
      var t2;
      if (this.cl) if ("memory" === this.config.persistence || null != (t2 = this.sessionPersistence) && t2.ga || !Ls.Xr()) Ls.ri(this.cl);
      else {
        var i2 = [];
        this.vl.forEach(((t3) => i2.push(t3))), i2.length > 0 ? Ls.ei(this.cl, i2) : Ls.ri(this.cl);
      }
    }
    getFeatureFlag(t2, i2) {
      var e2;
      return null == (e2 = this.featureFlags) ? void 0 : e2.getFeatureFlag(t2, i2);
    }
    getFeatureFlagPayload(t2) {
      var i2;
      return null == (i2 = this.featureFlags) ? void 0 : i2.getFeatureFlagPayload(t2);
    }
    getFeatureFlagResult(t2, i2) {
      var e2;
      return null == (e2 = this.featureFlags) ? void 0 : e2.getFeatureFlagResult(t2, i2);
    }
    getAllFeatureFlags() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this.featureFlags) ? void 0 : i2.getAllFeatureFlags()) && void 0 !== t2 ? t2 : [];
    }
    isFeatureEnabled(t2, i2) {
      var e2, r2;
      return null !== (e2 = null == (r2 = this.featureFlags) ? void 0 : r2.isFeatureEnabled(t2, i2)) && void 0 !== e2 ? e2 : null == i2 ? void 0 : i2.defaultValue;
    }
    reloadFeatureFlags() {
      var t2;
      null == (t2 = this.featureFlags) || t2.reloadFeatureFlags();
    }
    updateFlags(t2, i2, e2) {
      var r2;
      null == (r2 = this.featureFlags) || r2.updateFlags(t2, i2, e2);
    }
    updateEarlyAccessFeatureEnrollment(t2, i2, e2) {
      var r2;
      null == (r2 = this.featureFlags) || r2.updateEarlyAccessFeatureEnrollment(t2, i2, e2);
    }
    getEarlyAccessFeatures(t2, i2, e2) {
      var r2;
      return void 0 === i2 && (i2 = false), null == (r2 = this.featureFlags) ? void 0 : r2.getEarlyAccessFeatures(t2, i2, e2);
    }
    on(t2, i2) {
      return this.il.on(t2, i2);
    }
    onFeatureFlags(t2) {
      return this.featureFlags ? this.featureFlags.onFeatureFlags(t2) : (t2([], {}, { errorsLoading: true }), () => {
      });
    }
    onSurveysLoaded(t2) {
      return this.surveys ? this.surveys.onSurveysLoaded(t2) : (t2([], { isLoaded: false, error: ml }), () => {
      });
    }
    onSessionId(t2) {
      var i2, e2;
      return null !== (i2 = null == (e2 = this.sessionManager) ? void 0 : e2.onSessionId(t2)) && void 0 !== i2 ? i2 : () => {
      };
    }
    getSurveys(t2, i2) {
      void 0 === i2 && (i2 = false), this.surveys ? this.surveys.getSurveys(t2, i2) : t2([], { isLoaded: false, error: ml });
    }
    getActiveMatchingSurveys(t2, i2) {
      void 0 === i2 && (i2 = false), this.surveys ? this.surveys.getActiveMatchingSurveys(t2, i2) : t2([], { isLoaded: false, error: ml });
    }
    renderSurvey(t2, i2) {
      var e2;
      null == (e2 = this.surveys) || e2.renderSurvey(t2, i2);
    }
    displaySurvey(t2, i2) {
      var e2;
      void 0 === i2 && (i2 = ol), null == (e2 = this.surveys) || e2.displaySurvey(t2, i2);
    }
    cancelPendingSurvey(t2) {
      var i2;
      null == (i2 = this.surveys) || i2.cancelPendingSurvey(t2);
    }
    canRenderSurvey(t2) {
      var i2, e2;
      return null !== (i2 = null == (e2 = this.surveys) ? void 0 : e2.canRenderSurvey(t2)) && void 0 !== i2 ? i2 : { visible: false, disabledReason: ml };
    }
    canRenderSurveyAsync(t2, i2) {
      var e2, r2;
      return void 0 === i2 && (i2 = false), null !== (e2 = null == (r2 = this.surveys) ? void 0 : r2.canRenderSurveyAsync(t2, i2)) && void 0 !== e2 ? e2 : Promise.resolve({ visible: false, disabledReason: ml });
    }
    Gl(t2) {
      return !t2 || Y(t2) ? (Ie.critical("Unique user id has not been set in posthog.identify"), false) : t2 === Lr ? (Ie.critical('The string "' + t2 + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.'), false) : !["distinct_id", "distinctid"].includes(t2.toLowerCase()) && !["undefined", "null"].includes(t2.toLowerCase()) || (Ie.critical('The string "' + t2 + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'), false);
    }
    identify(t2, i2, e2) {
      if (!this.__loaded || !this.persistence) return Ie.uninitializedWarning("posthog.identify");
      if (Z(t2) && (t2 = t2.toString(), Ie.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), this.Gl(t2) && this.Wl("posthog.identify")) {
        this.ll();
        var r2 = this.get_distinct_id(), s2 = this.persistence.syncCookieProperties() && this.get_distinct_id() !== r2, n2 = this.Hl(false), o2 = this.persistence.ba(), a2 = false;
        try {
          var l2 = this.get_distinct_id();
          this.register({ $user_id: t2 }), this.get_property(Be) || this.register_once({ $had_persisted_distinct_id: true, $device_id: l2 }, ""), t2 !== l2 && t2 !== this.get_property(qe) && (this.unregister(qe), this.register({ distinct_id: t2 }));
          var h2, u2 = (this.persistence.get_property(Or) || Wr) === Wr, d2 = t2 !== l2, v2 = !d2 && u2;
          if (d2 && u2) this.persistence.set_property(Or, Gr), this.setPersonPropertiesForFlags({ $set: i2 || {}, $set_once: e2 || {} }, false), this.config.cookieWinsOnConflict && this.persistence._a(), this.capture(Zr, { distinct_id: t2, $anon_distinct_id: l2 }, { $set: i2 || {}, $set_once: e2 || {} }), this.yl = Ya(t2, i2, e2), null == (h2 = this.featureFlags) || h2.setAnonymousDistinctId(l2);
          else if (v2) {
            this.persistence.set_property(Or, Gr);
            var c2 = i2 || {}, f2 = e2 || {};
            this.setPersonPropertiesForFlags({ $set: c2, $set_once: f2 }, false), this.config.cookieWinsOnConflict && this.persistence._a(), this.capture("$set", { $set: c2, $set_once: f2 }), this.yl = Ya(t2, i2, e2);
          } else (i2 || e2) && this.setPersonProperties(i2, e2);
          d2 || s2 || n2 ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister($r)) : v2 && (i2 || e2) && this.reloadFeatureFlags(), a2 = true;
        } finally {
          o2 && this.persistence.Sa(a2);
        }
      }
    }
    setPersonProperties(t2, i2) {
      if ((t2 || i2) && this.Wl("posthog.setPersonProperties")) {
        var e2 = Ya(this.get_distinct_id(), t2, i2);
        this.yl !== e2 ? (this.setPersonPropertiesForFlags({ $set: t2 || {}, $set_once: i2 || {} }, true), this.capture("$set", { $set: t2 || {}, $set_once: i2 || {} }), this.yl = e2) : Ie.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
      }
    }
    unsetPersonProperties(t2) {
      var i2, e2 = (H(t2) ? t2 : [t2]).filter(((t3) => J(t3) && t3.length > 0));
      0 !== e2.length && this.Wl("posthog.unsetPersonProperties") && (null == (i2 = this.featureFlags) || i2.unsetPersonPropertiesForFlags(e2, true), this.capture("$set", { $unset: e2 }), this.yl = null);
    }
    group(t2, i2, e2) {
      var r2;
      if (t2 && i2) {
        null == (r2 = this.persistence) || r2.syncCookieProperties(), this.Hl();
        var s2 = this.getGroups(), n2 = s2[t2] !== i2;
        if (n2 && this.resetGroupPropertiesForFlags(t2), this.register({ $groups: _({}, s2, { [t2]: i2 }) }), n2 || e2) {
          var o2 = { $group_type: t2, $group_key: i2 };
          e2 && (o2.$group_set = e2), this.capture(ts, o2);
        }
        e2 && this.setGroupPropertiesForFlags({ [t2]: e2 }), n2 && !e2 && this.reloadFeatureFlags();
      } else Ie.error("posthog.group requires a group type and group key");
    }
    resetGroups() {
      this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
    setPersonPropertiesForFlags(t2, i2) {
      var e2;
      void 0 === i2 && (i2 = true), null == (e2 = this.featureFlags) || e2.setPersonPropertiesForFlags(t2, i2);
    }
    resetPersonPropertiesForFlags(t2) {
      var i2;
      void 0 === t2 && (t2 = true), null == (i2 = this.featureFlags) || i2.resetPersonPropertiesForFlags(t2);
    }
    setGroupPropertiesForFlags(t2, i2) {
      var e2;
      void 0 === i2 && (i2 = true), this.Wl("posthog.setGroupPropertiesForFlags") && (null == (e2 = this.featureFlags) || e2.setGroupPropertiesForFlags(t2, i2));
    }
    resetGroupPropertiesForFlags(t2) {
      var i2;
      null == (i2 = this.featureFlags) || i2.resetGroupPropertiesForFlags(t2);
    }
    reset(t2) {
      var i2 = it(t2) ? t2 : null == t2 ? void 0 : t2.resetDeviceID, e2 = it(t2) || null == t2 ? void 0 : t2.bootstrap;
      this.Zl(i2, false, e2);
    }
    Zl(t2, i2, e2) {
      var r2, s2, n2;
      if (void 0 === i2 && (i2 = false), Ie.info("reset"), !this.__loaded) return Ie.uninitializedWarning("posthog.reset");
      var o2 = null == e2 ? void 0 : e2.sessionID;
      this.config.bootstrap = e2 || (null == (r2 = this._l) ? void 0 : r2.bootstrap) || {}, null == (s2 = this.featureFlags) || null == s2.updateConfig || s2.updateConfig(this.config, this.Ua());
      var a2 = this.get_property(Be), l2 = this.get_property(ze), h2 = this.get_property(ir), u2 = this.is_capturing();
      this.consent.reset(), i2 || !u2 || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
      var d2 = null == (n2 = this.persistence) || null == n2.ba ? void 0 : n2.ba(), v2 = false;
      try {
        var c2, f2, p2, g2, m2, y2, b2, w2, x2, E2, S2, k2, T2;
        if (null == (c2 = this.persistence) || c2.clear(), null == (f2 = this.sessionPersistence) || f2.clear(), this.vl.clear(), this.zl(), K(h2) || null == (E2 = this.persistence) || E2.register({ [ir]: h2 }), null == (p2 = this.surveys) || p2.reset(), null == (g2 = this.featureFlags) || g2.reset(), null == (m2 = this.conversations) || m2.reset(), null == (y2 = this.logs) || y2.reset(), null == (b2 = this.metrics) || b2.reset(), null == (w2 = this.persistence) || w2.set_property(Or, Wr), null == (x2 = this.sessionManager) || x2.resetSessionId(), this.yl = null, this.config.cookieless_mode === Vr) this.register_once({ distinct_id: Lr, $device_id: null }, "");
        else {
          var P2 = this.config.get_device_id(ms());
          this.register_once({ distinct_id: P2, $device_id: t2 ? P2 : a2 }, ""), t2 || K(l2) || this.register({ [ze]: l2 });
        }
        if (this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), e2) {
          if (void 0 === e2.distinctID || this.ol() || (null == (T2 = this.persistence) || T2.set_property(Or, e2.isIdentifiedID ? Gr : Wr), this.register({ distinct_id: e2.distinctID })), null == (S2 = this.featureFlags) || S2.initialize(), !(K(o2) || null != (k2 = this.sessionManager) && k2.setBootstrapSessionId(o2, true))) {
            var R2 = _({}, e2);
            delete R2.sessionID, this.config.bootstrap = R2;
          }
        }
        delete this.config.identity_distinct_id, delete this.config.identity_hash, v2 = true;
      } finally {
        var C2;
        d2 && (null == (C2 = this.persistence) || null == C2.Sa || C2.Sa(v2));
      }
      this.reloadFeatureFlags();
    }
    shutdown(t2) {
      var i2 = this;
      return p((function* () {
        var t3, e2, r2, s2, n2;
        if (i2.__loaded) {
          i2.Pl().dispose(), null == (t3 = i2.sessionRecording) || t3.dispose(), null == (e2 = i2.logs) || e2.flushLogs("sendBeacon"), null == (r2 = i2.metrics) || r2.flush("sendBeacon"), null == (s2 = i2.kl) || s2.unload(), null == (n2 = i2.xl) || n2.unload();
          try {
            var o2;
            null == (o2 = i2.featureFlags) || o2.destroy();
          } catch (t4) {
            Ie.error("Error while destroying feature flags", t4);
          }
        } else Ie.uninitializedWarning("posthog.shutdown");
      }))();
    }
    setIdentity(t2, i2) {
      var e2;
      this.config.identity_distinct_id = t2, this.config.identity_hash = i2, this.alias(t2), null == (e2 = this.conversations) || e2.Ql();
    }
    clearIdentity() {
      var t2;
      delete this.config.identity_distinct_id, delete this.config.identity_hash, null == (t2 = this.conversations) || t2.Jl();
    }
    get_distinct_id() {
      return this.get_property("distinct_id");
    }
    getGroups() {
      return this.get_property("$groups") || {};
    }
    get_session_id() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this.sessionManager) ? void 0 : i2.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== t2 ? t2 : "";
    }
    get_session_replay_url(t2) {
      if (!this.sessionManager) return "";
      var i2 = this.sessionManager.checkAndGetSessionAndWindowId(true), e2 = i2.sessionStartTimestamp, r2 = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + i2.sessionId);
      if (null != t2 && t2.withTimestamp && e2) {
        var s2, n2 = null !== (s2 = t2.timestampLookBack) && void 0 !== s2 ? s2 : 10;
        if (!e2) return r2;
        r2 += "?t=" + Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - e2) / 1e3) - n2, 0);
      }
      return r2;
    }
    alias(t2, i2) {
      return t2 === this.get_property(Ue) ? (Ie.critical("Attempting to create alias for existing People user - aborting."), -2) : this.Wl("posthog.alias") ? (K(i2) && (i2 = this.get_distinct_id()), t2 !== i2 ? (this.Vl(qe, t2), this.capture("$create_alias", { alias: t2, distinct_id: i2 })) : (Ie.warn("alias matches current distinct_id - skipping api call."), this.identify(t2), -1)) : void 0;
    }
    set_config(t2) {
      var i2 = _({}, this.config);
      if (W(t2)) {
        var e2, r2, s2, n2, o2, a2, l2, h2, u2, d2, v2, f2;
        rs(this.config, $l(t2));
        var p2 = this.ul();
        null == (e2 = this.persistence) || e2.update_config(this.config, i2, p2), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new go(_({}, this.config, { persistence: "sessionStorage" }), p2, false);
        var g2, m2 = this.bl(this.config.debug);
        it(m2) && (this.config.debug = m2), it(this.config.debug) && (this.config.debug ? (c.DEBUG = true, Ss.Xr() && Ss.ei("ph_debug", true), Ie.info("set_config", { config: t2, oldConfig: i2, newConfig: _({}, this.config) })) : (c.DEBUG = false, Ss.Xr() && Ss.ri("ph_debug"))), null == (r2 = this.featureFlags) || null == r2.updateConfig || r2.updateConfig(this.config, this.Ua()), null == (s2 = this.exceptionObserver) || s2.onConfigChange(), null == (n2 = this.exceptions) || n2.onConfigChange(), null == (o2 = this.sessionRecording) || o2.startIfEnabledOrStop(), null == (a2 = this.tracingHeaders) || a2.startIfEnabledOrStop(), null == (l2 = this.autocapture) || l2.startIfEnabled(), null == (h2 = this.heatmaps) || h2.startIfEnabled(), ("capture_pageview" in t2 || "disable_capture_url_hashes" in t2) && (null == (g2 = this.historyAutocapture) || g2.startIfEnabledOrStop()), null == (u2 = this.exceptionObserver) || u2.startIfEnabledOrStop(), null == (d2 = this.deadClicksAutocapture) || d2.startIfEnabledOrStop(), null == (v2 = this.surveys) || v2.loadIfEnabled(), this.hl(), null == (f2 = this.externalIntegrations) || f2.startIfEnabledOrStop();
      }
    }
    _overrideSDKInfo(t2, i2) {
      c.LIB_NAME = t2, c.LIB_VERSION = i2;
    }
    startSessionRecording(t2) {
      var i2, e2, r2, s2, n2, o2 = true === t2, a2 = { sampling: o2 || !(null == t2 || !t2.sampling), linked_flag: o2 || !(null == t2 || !t2.linked_flag), url_trigger: o2 || !(null == t2 || !t2.url_trigger), event_trigger: o2 || !(null == t2 || !t2.event_trigger) };
      Object.values(a2).some(Boolean) && (null == (i2 = this.sessionManager) || i2.checkAndGetSessionAndWindowId(), a2.sampling && (null == (e2 = this.sessionRecording) || e2.overrideSampling()), a2.linked_flag && (null == (r2 = this.sessionRecording) || r2.overrideLinkedFlag()), a2.url_trigger && (null == (s2 = this.sessionRecording) || s2.overrideTrigger("url")), a2.event_trigger && (null == (n2 = this.sessionRecording) || n2.overrideTrigger("event")));
      this.set_config({ disable_session_recording: false });
    }
    stopSessionRecording() {
      this.set_config({ disable_session_recording: true });
    }
    sessionRecordingStarted() {
      var t2;
      return !(null == (t2 = this.sessionRecording) || !t2.started);
    }
    captureException(t2, i2) {
      if (this.exceptions) {
        var e2 = new Error("PostHog syntheticException"), r2 = this.exceptions.buildProperties(t2, { handled: true, syntheticException: e2 });
        return this.exceptions.sendExceptionEvent(_({}, r2, i2));
      }
    }
    addExceptionStep(t2, i2) {
      var e2;
      null == (e2 = this.exceptions) || e2.addExceptionStep(t2, i2);
    }
    captureLog(t2) {
      var i2;
      null == (i2 = this.logs) || i2.captureLog(t2);
    }
    get logger() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this.logs) ? void 0 : i2.logger) && void 0 !== t2 ? t2 : _Rl.Kl;
    }
    startExceptionAutocapture(t2) {
      this.set_config({ capture_exceptions: null == t2 || t2 });
    }
    stopExceptionAutocapture() {
      this.set_config({ capture_exceptions: false });
    }
    loadToolbar(t2) {
      var i2, e2;
      return null !== (i2 = null == (e2 = this.toolbar) ? void 0 : e2.loadToolbar(t2)) && void 0 !== i2 && i2;
    }
    get_property(t2) {
      var i2;
      return null == (i2 = this.persistence) ? void 0 : i2.props[t2];
    }
    getSessionProperty(t2) {
      var i2;
      return null == (i2 = this.sessionPersistence) ? void 0 : i2.props[t2];
    }
    toString() {
      var t2, i2 = null !== (t2 = this.config.name) && void 0 !== t2 ? t2 : xl;
      return i2 !== xl && (i2 = xl + "." + i2), i2;
    }
    _isIdentified() {
      var t2, i2;
      return (null == (t2 = this.persistence) ? void 0 : t2.get_property(Or)) === Gr || (null == (i2 = this.sessionPersistence) ? void 0 : i2.get_property(Or)) === Gr;
    }
    Ul() {
      var t2, i2;
      return !("never" === this.config.person_profiles || this.config.person_profiles === Kr && !this._isIdentified() && G(this.getGroups()) && (null == (t2 = this.persistence) || null == (t2 = t2.props) || !t2[qe]) && (null == (i2 = this.persistence) || null == (i2 = i2.props) || !i2[Nr]));
    }
    ql() {
      return true === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && !!this.config.capture_pageview;
    }
    createPersonProfile() {
      this.Ul() || this.Wl("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
    setInternalOrTestUser() {
      this.Wl("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: true });
    }
    Wl(t2) {
      return "never" === this.config.person_profiles ? (Ie.error(t2 + ' was called, but process_person is set to "never". This call will be ignored.'), false) : (this.Vl(Nr, true), true);
    }
    ul() {
      if ("always" === this.config.cookieless_mode) return true;
      var t2 = this.consent.isOptedOut();
      return this.config.disable_persistence || t2 && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== Hr);
    }
    hl() {
      var t2, i2, e2, r2, s2, n2 = this.ul();
      return this.is_capturing() || null == (e2 = this.logs) || e2.Yl(), (null == (t2 = this.persistence) ? void 0 : t2.ga) !== n2 && (null == (r2 = this.persistence) || r2.set_disabled(n2)), (null == (i2 = this.sessionPersistence) ? void 0 : i2.ga) !== n2 && (null == (s2 = this.sessionPersistence) || s2.set_disabled(n2)), n2 && (this.vl.clear(), this.zl()), n2;
    }
    opt_in_capturing(t2) {
      var i2;
      if (this.config.cookieless_mode !== Vr) {
        if (this.ol()) {
          var e2, r2, s2, n2, o2;
          this.Zl(true, true), null == (e2 = this.sessionManager) || e2.destroy(), null == (r2 = this.pageViewManager) || r2.destroy(), this.sessionManager = new za(this), this.pageViewManager = new Ln(this), this.persistence && (this.sessionPropsManager = new La(this, this.sessionManager, this.persistence));
          var a2, l2 = null !== (s2 = null == (n2 = this.config.__extensionClasses) ? void 0 : n2.sessionRecording) && void 0 !== s2 ? s2 : null == (o2 = _Rl.__defaultExtensionClasses) ? void 0 : o2.sessionRecording;
          l2 && (this.sessionRecording = this.al(this.sessionRecording, new l2(this)), this.el && (null == (a2 = this.sessionRecording) || null == a2.onRemoteConfig || a2.onRemoteConfig(this.el)));
        }
        var h2, u2;
        this.consent.optInOut(true), this.hl(), this.Dl(), null == (i2 = this.sessionRecording) || i2.startIfEnabledOrStop(), this.config.cookieless_mode == Hr && (null == (h2 = this.surveys) || h2.loadIfEnabled()), (K(null == t2 ? void 0 : t2.captureEventName) || null != t2 && t2.captureEventName) && this.capture(null !== (u2 = null == t2 ? void 0 : t2.captureEventName) && void 0 !== u2 ? u2 : "$opt_in", null == t2 ? void 0 : t2.captureProperties, { send_instantly: true }), this.config.capture_pageview && this.$l();
      } else Ie.warn(gl);
    }
    opt_out_capturing() {
      var t2, i2, e2;
      this.config.cookieless_mode !== Vr ? (this.config.cookieless_mode === Hr && this.consent.isOptedIn() && this.Zl(true, true), this.consent.optInOut(false), this.hl(), this.config.cookieless_mode === Hr && (this.register({ distinct_id: Lr, $device_id: null }), null == (t2 = this.sessionRecording) || t2.stopRecording(), this.sessionRecording = void 0, null == (i2 = this.sessionManager) || i2.destroy(), null == (e2 = this.pageViewManager) || e2.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this.$l(), this.Dl())) : Ie.warn(gl);
    }
    has_opted_in_capturing() {
      return this.consent.isOptedIn();
    }
    has_opted_out_capturing() {
      return this.consent.isOptedOut();
    }
    get_explicit_consent_status() {
      var t2 = this.consent.consent;
      return 1 === t2 ? "granted" : 0 === t2 ? "denied" : "pending";
    }
    is_capturing() {
      return this.config.cookieless_mode === Vr || (this.config.cookieless_mode === Hr ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
    }
    clear_opt_in_out_capturing() {
      this.consent.reset(), this.hl();
    }
    _is_bot() {
      return e ? qa(e, this.config.custom_blocked_useragents) : void 0;
    }
    $l() {
      r && ("visible" === r.visibilityState ? this.pl || (this.pl = true, this.capture(Qr, { title: r.title }, { send_instantly: true }), this.gl && (r.removeEventListener(Jr, this.gl), this.gl = null)) : this.gl || (this.gl = this.$l.bind(this), us(r, Jr, this.gl)));
    }
    debug(i2) {
      false === i2 ? (null == t || t.console.log("You've disabled debug mode."), this.set_config({ debug: false })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: true }));
    }
    Ua() {
      var t2 = this._l || {};
      return "advanced_disable_flags" in t2 ? !!t2.advanced_disable_flags : false !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : true === this.config.advanced_disable_decide ? (Ie.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), true) : (function(t3, i2, e2, r2, s2) {
        var n2 = i2 in t3 && !X(t3[i2]), o2 = e2 in t3 && !X(t3[e2]);
        return n2 ? t3[i2] : !!o2 && (s2 && s2.warn("Config field '" + e2 + "' is deprecated. Please use '" + i2 + "' instead. The old field will be removed in a future major version."), t3[e2]);
      })(t2, "advanced_disable_flags", "advanced_disable_decide", 0, Ie);
    }
    Jn(t2) {
      var i2;
      if (X(this.config.before_send)) return t2;
      var e2 = Object.keys(null !== (i2 = t2.properties) && void 0 !== i2 ? i2 : {}).filter(st), r2 = H(this.config.before_send) ? this.config.before_send : [this.config.before_send], s2 = t2;
      for (var n2 of r2) try {
        if (s2 = n2(s2), X(s2)) {
          var o2 = "Event '" + t2.event + "' was rejected in beforeSend function";
          return rt(t2.event) ? Ie.warn(o2 + ". This can cause unexpected behavior.") : Ie.info(o2), null;
        }
        s2.properties && !G(s2.properties) || Ie.warn("Event '" + t2.event + "' has no properties after beforeSend function, this is likely an error.");
      } catch (i3) {
        return Ie.error("Error in beforeSend function for event '" + t2.event + "':", i3), null;
      }
      for (var a2 of e2) if (s2.properties && X(s2.properties[a2])) return Ie.warn("Event '" + t2.event + "' had its '" + a2 + "' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped."), null;
      return s2;
    }
    getPageViewId() {
      var t2;
      return null == (t2 = this.pageViewManager.Ks) ? void 0 : t2.pageViewId;
    }
    captureTraceFeedback(t2, i2) {
      this.capture("$ai_feedback", { $ai_trace_id: String(t2), $ai_feedback_text: i2 });
    }
    captureTraceMetric(t2, i2, e2) {
      this.capture("$ai_metric", { $ai_trace_id: String(t2), $ai_metric_name: i2, $ai_metric_value: String(e2) });
    }
    bl(t2) {
      var i2 = it(t2) && !t2, e2 = Ss.Xr() && "true" === Ss.ti("ph_debug");
      return !i2 && (!!e2 || t2);
    }
  };
  Rl.__defaultExtensionClasses = {}, Rl.Kl = /* @__PURE__ */ (() => {
    var t2 = () => {
    };
    return { trace: t2, debug: t2, info: t2, warn: t2, error: t2, fatal: t2 };
  })(), (function(t2, i2) {
    for (var e2 = 0; i2.length > e2; e2++) t2.prototype[i2[e2]] = os(t2.prototype[i2[e2]]);
  })(Rl, ["identify"]);
  var Cl = class {
    constructor(t2) {
      this.disabled = false === t2;
      var i2 = W(t2) ? t2 : {};
      this.thresholdPx = i2.threshold_px || 30, this.timeoutMs = i2.timeout_ms || 1e3, this.clickCount = i2.click_count || 3, this.clicks = [];
    }
    isRageClick(t2, i2, e2) {
      if (this.disabled) return false;
      var r2 = this.clicks[this.clicks.length - 1];
      if (r2 && Math.abs(t2 - r2.x) + Math.abs(i2 - r2.y) < this.thresholdPx && this.timeoutMs > e2 - r2.timestamp) {
        if (this.clicks.push({ x: t2, y: i2, timestamp: e2 }), this.clicks.length === this.clickCount) return true;
      } else this.clicks = [{ x: t2, y: i2, timestamp: e2 }];
      return false;
    }
  };
  var Ol = "$copy_autocapture";
  var Il = Ae("[AutoCapture]");
  function Al(t2, i2) {
    return i2.length > t2 ? i2.slice(0, t2) + "..." : i2;
  }
  function Fl(t2) {
    if (t2.previousElementSibling) return t2.previousElementSibling;
    var i2 = t2;
    do {
      i2 = i2.previousSibling;
    } while (i2 && !Ws(i2));
    return i2;
  }
  function Ml(i2, e2) {
    var r2, s2, n2 = e2.e, o2 = e2.maskAllElementAttributes, a2 = e2.maskAllText, l2 = e2.elementAttributeIgnoreList, h2 = e2.elementsChainAsString, u2 = e2.disableCaptureUrlHashes;
    if (!Ws(i2)) return { props: {} };
    for (var d2 = [i2], v2 = /* @__PURE__ */ new Set([i2]), c2 = i2; c2.parentNode && !Gs(c2, "body") && Ys > d2.length; ) if (Js(c2.parentNode)) {
      var f2 = c2.parentNode.host;
      if (v2.has(f2)) break;
      v2.add(f2), d2.push(f2), c2 = f2;
    } else {
      if (!Ws(c2.parentNode)) break;
      if (v2.has(c2.parentNode)) break;
      v2.add(c2.parentNode), d2.push(c2.parentNode), c2 = c2.parentNode;
    }
    var p2, g2, m2 = [], y2 = {}, b2 = false, w2 = false;
    if (es(d2, ((t2) => {
      var i3 = _n(t2);
      if (Gs(t2, "a")) {
        var e3 = t2.getAttribute("href");
        b2 = !!(i3 && e3 && kn(e3)) && (u2 ? xi(e3) : e3);
      }
      N(Zs(t2), "ph-no-capture") && (w2 = true), m2.push((function(t3, i4, e4, r4, s3) {
        void 0 === s3 && (s3 = false);
        var n3 = t3.tagName.toLowerCase(), o3 = { tag_name: n3 };
        sn.indexOf(n3) > -1 && !e4 && (o3.$el_text = "a" === n3.toLowerCase() || "button" === n3.toLowerCase() ? Al(1024, Tn(t3)) : Al(1024, en(t3)));
        var a3 = Zs(t3);
        a3.length > 0 && (o3.classes = a3.filter((function(t4) {
          return "" !== t4;
        }))), es(t3.attributes, (function(e5) {
          var n4;
          if ((!gn(t3) || -1 !== ["name", "id", "class", "aria-label"].indexOf(e5.name)) && (null == r4 || !r4.includes(e5.name)) && !i4 && kn(e5.value) && (!J(n4 = e5.name) || "_ngcontent" !== n4.substring(0, 10) && "_nghost" !== n4.substring(0, 7))) {
            var a4 = e5.value;
            "class" === e5.name && (a4 = Qs(a4).join(" ")), o3["attr__" + e5.name] = Al(1024, "href" === e5.name && s3 ? xi(a4) : a4);
          }
        }));
        for (var l3 = 1, h3 = 1, u3 = t3; u3 = Fl(u3); ) l3++, u3.tagName === t3.tagName && h3++;
        return o3.nth_child = l3, o3.nth_of_type = h3, o3;
      })(t2, o2, a2, l2, u2));
      var r3 = (function(t3) {
        if (!_n(t3)) return {};
        var i4 = {};
        return es(t3.attributes, (function(t4) {
          if (t4.name && 0 === t4.name.indexOf("data-ph-capture-attribute")) {
            var e4 = t4.name.replace("data-ph-capture-attribute-", ""), r4 = t4.value;
            e4 && r4 && kn(r4) && (i4[e4] = r4);
          }
        })), i4;
      })(t2);
      rs(y2, r3);
    })), w2) return { props: {}, explicitNoCapture: w2 };
    if (a2 || (m2[0].$el_text = Gs(i2, "a") || Gs(i2, "button") ? Tn(i2) : en(i2)), b2) {
      var x2, E2;
      m2[0].attr__href = b2;
      var S2 = null == (x2 = Hn(b2)) ? void 0 : x2.host, k2 = null == t || null == (E2 = t.location) ? void 0 : E2.host;
      S2 && k2 && S2 !== k2 && (p2 = b2);
    }
    return { props: rs({ $event_type: n2.type, $ce_version: 1 }, h2 ? {} : { $elements: m2 }, { $elements_chain: (g2 = m2, (function(t2) {
      return t2.map(((t3) => {
        var i3, e3, r3 = "";
        if (t3.tag_name && (r3 += t3.tag_name), t3.attr_class) for (var s3 of (t3.attr_class.sort(), t3.attr_class)) r3 += "." + s3.replace(/"/g, "");
        var n3 = _({}, t3.text ? { text: t3.text } : {}, { "nth-child": null !== (i3 = t3.nth_child) && void 0 !== i3 ? i3 : 0, "nth-of-type": null !== (e3 = t3.nth_of_type) && void 0 !== e3 ? e3 : 0 }, t3.href ? { href: t3.href } : {}, t3.attr_id ? { attr_id: t3.attr_id } : {}, t3.attributes), o3 = {};
        return ss(n3).sort(((t4, i4) => {
          return (r4 = i4[0]) > (e4 = t4[0]) ? -1 : e4 > r4 ? 1 : 0;
          var e4, r4;
        })).forEach(((t4) => {
          var i4 = t4[1];
          return o3[Pn(t4[0].toString())] = Pn(i4.toString());
        })), (r3 += ":") + ss(o3).map(((t4) => t4[0] + '="' + t4[1] + '"')).join("");
      })).join(";");
    })((function(t2) {
      return t2.map(((t3) => {
        var i3, e3, r3 = { text: null == (i3 = t3.$el_text) ? void 0 : i3.slice(0, 400), tag_name: t3.tag_name, href: null == (e3 = t3.attr__href) ? void 0 : e3.slice(0, 2048), attr_class: Rn(t3), attr_id: t3.attr__id, nth_child: t3.nth_child, nth_of_type: t3.nth_of_type, attributes: {} };
        return ss(t3).filter(((t4) => 0 === t4[0].indexOf("attr__"))).forEach(((t4) => r3.attributes[t4[0]] = t4[1])), r3;
      }));
    })(g2))) }, null != (r2 = m2[0]) && r2.$el_text ? { $el_text: null == (s2 = m2[0]) ? void 0 : s2.$el_text } : {}, p2 && "click" === n2.type ? { $external_click_url: p2 } : {}, y2) };
  }
  var Dl = class {
    constructor(t2) {
      this.name = "autocapture", this.Ts = false, this.Ms = null, this.Es = false, this.Is = false, this.vn = { enabled: false, rageclick: false, maskAllElementAttributes: false, maskAllText: false, disableCaptureUrlHashes: false, remoteRequestsDisabled: false }, this.Rs = false, this.Ps = t2, this.Ps.refresh(this.vn), this.rageclicks = new Cl(this.vn.rageclick), this.As = null;
    }
    setup(t2) {
      this.Fs(), this.Os = t2;
      var i2 = t2.onRemoteConfig(this.onRemoteConfig.bind(this));
      this.Rs ? i2.dispose() : (this.Ls = i2, this.startIfEnabled());
    }
    dispose() {
      var t2;
      this.Rs || (this.Rs = true, this.Os = void 0, null == (t2 = this.Ls) || t2.dispose(), this.Ls = void 0, this.Ds());
    }
    $s() {
      return this.Ps.refresh(this.vn), this.vn;
    }
    Fs() {
      var t2, i2;
      return this.$s(), this.vn.url_allowlist = null == (t2 = this.vn.url_allowlist) ? void 0 : t2.map(((t3) => new RegExp(t3))), this.vn.url_ignorelist = null == (i2 = this.vn.url_ignorelist) ? void 0 : i2.map(((t3) => new RegExp(t3))), this.vn;
    }
    Ns() {
      if (this.isBrowserSupported()) {
        if (t && r) {
          var i2 = this.qs = (i3) => {
            i3 = i3 || (null == t ? void 0 : t.event);
            try {
              this.js(i3);
            } catch (t2) {
              Il.error("Failed to capture event", t2);
            }
          };
          if (us(r, "submit", i2, { capture: true }), us(r, "change", i2, { capture: true }), us(r, "click", i2, { capture: true }), this.$s().capture_copied_text) {
            var e2 = this.Bs = (i3) => {
              i3 = i3 || (null == t ? void 0 : t.event);
              try {
                this.js(i3, Ol);
              } catch (t2) {
                Il.error("Failed to capture clipboard event", t2);
              }
            };
            us(r, "copy", e2, { capture: true }), us(r, "cut", e2, { capture: true }), us(r, "paste", e2, { capture: true });
          }
        }
      } else Il.info("Disabling Automatic Event Collection because this browser is not supported");
    }
    Ds() {
      this.qs && (null == r || r.removeEventListener("submit", this.qs, true), null == r || r.removeEventListener("change", this.qs, true), null == r || r.removeEventListener("click", this.qs, true), this.qs = void 0), this.Bs && (null == r || r.removeEventListener("copy", this.Bs, true), null == r || r.removeEventListener("cut", this.Bs, true), null == r || r.removeEventListener("paste", this.Bs, true), this.Bs = void 0), this.Ts = false;
    }
    startIfEnabled() {
      !this.Rs && this.Os && this.isEnabled && !this.Ts && (this.Ns(), this.Ts = true);
    }
    onRemoteConfig(t2) {
      if (!this.Rs) if (this.Es = true, t2.ok) {
        var i2 = t2.config;
        i2.elementsChainAsString && (this.Is = i2.elementsChainAsString);
        var e2, r2 = i2.autocapture_opt_out;
        it(r2) && (null == (e2 = this.Os) || e2.kv.set(Ve, r2), this.Ms = r2), this.startIfEnabled();
      } else this.startIfEnabled();
    }
    setElementSelectors(t2) {
      this.As = t2;
    }
    getElementSelectors(t2) {
      var i2, e2 = [];
      return null == (i2 = this.As) || i2.forEach(((i3) => {
        var s2 = null == r ? void 0 : r.querySelectorAll(i3);
        null == s2 || s2.forEach(((r2) => {
          t2 === r2 && e2.push(i3);
        }));
      })), e2;
    }
    get isEnabled() {
      var t2, i2;
      if (this.Rs) return false;
      var e2 = null == (t2 = this.Os) ? void 0 : t2.kv.get(Ve), r2 = this.Ms, s2 = this.$s(), n2 = s2.remoteRequestsDisabled && !this.Es;
      if (Q(r2) && !it(e2) && !n2) return false;
      var o2 = null !== (i2 = this.Ms) && void 0 !== i2 ? i2 : !!e2;
      return !!s2.enabled && !o2;
    }
    js(i2, e2) {
      if (void 0 === e2 && (e2 = "$autocapture"), this.isEnabled) {
        var r2 = rn(i2);
        Ks(r2) && (r2 = r2.parentNode || null);
        var s2, n2 = this.Fs();
        "$autocapture" === e2 && "click" === i2.type && i2 instanceof MouseEvent && n2.rageclick && null != (s2 = this.rageclicks) && s2.isRageClick(i2.clientX, i2.clientY, i2.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && cn(r2, n2.rageclick) && this.js(i2, "$rageclick");
        var o2 = e2 === Ol, a2 = o2 ? _({}, n2, { dom_event_allowlist: void 0 }) : n2;
        if (r2 && (function(i3, e3, r3, s3, n3, o3) {
          var a3;
          if (!t || fn(i3)) return false;
          if (null != r3 && r3.url_allowlist && !Xs(r3.url_allowlist, o3)) return false;
          if (null != r3 && r3.url_ignorelist && Xs(r3.url_ignorelist, o3)) return false;
          if (null != r3 && r3.dom_event_allowlist) {
            var l3 = r3.dom_event_allowlist;
            if (l3 && !l3.some(((t2) => e3.type === t2))) return false;
          }
          var h3 = pn(i3, s3), u3 = h3.parentIsUsefulElement, d3 = h3.targetElementList;
          if (!(function(t2, i4) {
            var e4 = null == i4 ? void 0 : i4.element_allowlist;
            if (K(e4)) return true;
            var r4, s4 = function(t3) {
              if (e4.some(((i5) => t3.tagName.toLowerCase() === i5))) return { v: true };
            };
            for (var n4 of t2) if (r4 = s4(n4)) return r4.v;
            return false;
          })(d3, r3)) return false;
          if (!nn(d3, null == r3 ? void 0 : r3.css_selector_allowlist)) return false;
          if (nn(d3, null !== (a3 = null == r3 ? void 0 : r3.css_selector_ignorelist) && void 0 !== a3 ? a3 : an)) return false;
          try {
            var v3 = t.getComputedStyle(i3);
            if (v3 && "pointer" === v3.getPropertyValue("cursor") && "click" === e3.type) return true;
          } catch (t2) {
          }
          var c3 = i3.tagName.toLowerCase();
          switch (c3) {
            case "html":
              return false;
            case "form":
              return (n3 || ["submit"]).indexOf(e3.type) >= 0;
            case "input":
            case "select":
            case "textarea":
              return (n3 || ["change", "click"]).indexOf(e3.type) >= 0;
            default:
              return u3 ? (n3 || ["click"]).indexOf(e3.type) >= 0 : (n3 || ["click"]).indexOf(e3.type) >= 0 && (sn.indexOf(c3) > -1 || "true" === i3.getAttribute("contenteditable"));
          }
        })(r2, i2, a2, o2, o2 ? ["copy", "cut", "paste"] : void 0, { config: { get_current_url: n2.getCurrentUrl } })) {
          var l2, h2 = Ml(r2, { e: i2, maskAllElementAttributes: n2.maskAllElementAttributes, maskAllText: n2.maskAllText, elementAttributeIgnoreList: n2.element_attribute_ignorelist, elementsChainAsString: this.Is, disableCaptureUrlHashes: n2.disableCaptureUrlHashes }), u2 = h2.props;
          if (h2.explicitNoCapture) return false;
          var d2 = this.getElementSelectors(r2);
          if (d2 && d2.length > 0 && (u2.$element_selectors = d2), e2 === Ol) {
            var v2 = i2.type || "clipboard";
            if ("paste" !== v2) {
              var c2, f2, p2 = null == t || null == (c2 = t.getSelection()) ? void 0 : c2.toString(), g2 = tn(p2);
              if (!g2) return false;
              u2.$selected_content = g2, u2.$clipboard_text_length = null !== (f2 = null == p2 ? void 0 : p2.length) && void 0 !== f2 ? f2 : 0;
            }
            u2.$copy_type = v2;
          }
          return null == (l2 = this.Os) || l2.capture(e2, u2).catch(((t2) => Il.error("Failed to capture event", t2))), true;
        }
      }
    }
    isBrowserSupported() {
      return V(null == r ? void 0 : r.querySelectorAll);
    }
  };
  var Nl = class {
    constructor(t2) {
      this._instance = t2;
    }
    refresh(t2) {
      var i2 = this._instance.config, e2 = W(i2.autocapture) ? i2.autocapture : void 0;
      t2.enabled = !!i2.autocapture, t2.rageclick = i2.rageclick, t2.maskAllElementAttributes = i2.mask_all_element_attributes, t2.maskAllText = i2.mask_all_text, t2.disableCaptureUrlHashes = i2.disable_capture_url_hashes, t2.getCurrentUrl = i2.get_current_url, t2.remoteRequestsDisabled = this._instance.Ua(), t2.url_allowlist = null == e2 ? void 0 : e2.url_allowlist, t2.url_ignorelist = null == e2 ? void 0 : e2.url_ignorelist, t2.dom_event_allowlist = null == e2 ? void 0 : e2.dom_event_allowlist, t2.element_allowlist = null == e2 ? void 0 : e2.element_allowlist, t2.css_selector_allowlist = null == e2 ? void 0 : e2.css_selector_allowlist, t2.css_selector_ignorelist = null == e2 ? void 0 : e2.css_selector_ignorelist, t2.element_attribute_ignorelist = null == e2 ? void 0 : e2.element_attribute_ignorelist, t2.capture_copied_text = null == e2 ? void 0 : e2.capture_copied_text;
    }
  };
  var Ll = Ae("[ExceptionAutocapture]");
  var Ul = () => {
  };
  var jl = (t2) => {
    var i2;
    if (V(t2)) return null !== (i2 = t2.__posthog_layer__) && void 0 !== i2 ? i2 : t2.__rrweb_layer__;
  };
  function Bl(t2, i2, e2) {
    try {
      if (!(i2 in t2)) return Ul;
      var r2 = { next: t2[i2] }, s2 = e2((function() {
        for (var t3 = arguments.length, i3 = new Array(t3), e3 = 0; t3 > e3; e3++) i3[e3] = arguments[e3];
        return r2.next.apply(this, i3);
      }));
      return V(s2) && (s2.prototype = s2.prototype || {}, Object.defineProperties(s2, { __posthog_wrapped__: { enumerable: false, value: true }, __posthog_layer__: { enumerable: false, value: r2 } })), t2[i2] = s2, () => {
        if (t2[i2] !== s2) for (var e3 = t2[i2], n2 = jl(e3); n2; ) {
          if (n2.next === s2) return void (n2.next = r2.next);
          n2 = jl(e3 = n2.next);
        }
        else t2[i2] = r2.next;
      };
    } catch (t3) {
      return Ul;
    }
  }
  var zl = Ae("[TracingHeaders]");
  var ql = Ae("[Web Vitals]");
  var Hl = 9e5;
  var Vl = ["CLS", "FCP", "INP", "LCP"];
  var Wl = ["INP", "LCP"];
  var Gl = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"];
  var Kl = "disabled";
  var Jl = "lazy_loading";
  var Yl = "awaiting_config";
  var Ql = "missing_config";
  Ae("[SessionRecording]"), Ae("[SessionRecording]");
  var Xl = "[SessionRecording]";
  var Zl = Ae(Xl);
  var th = Ae("[Heatmaps]");
  function ih(t2) {
    return W(t2) && "clientX" in t2 && "clientY" in t2 && Z(t2.clientX) && Z(t2.clientY);
  }
  var eh = Ae("[Product Tours]");
  var rh = (t2) => {
    var i2;
    return !t2.config.disable_product_tours && !(null == (i2 = t2.persistence) || !i2.get_property(Xe));
  };
  var sh = ["$set_once", "$set"];
  var nh = Ae("[SiteApps]");
  var oh = "Error while initializing PostHog app with config id ";
  var ah = (t2, i2) => null != t2 && t2.then ? t2.then(i2) : i2(t2);
  var lh = "SDK is not enabled or survey functionality is not yet loaded";
  var hh = "Disabled. Not loading surveys.";
  var uh = class {
    constructor(t2, i2) {
      this.name = "surveys", this._surveyEventReceiver = null, this._surveyManager = null, this.Xl = false, this.tu = [], this.eu = null, this.iu = null, this.Rs = false, this.ru = /* @__PURE__ */ new Set(), this.onRemoteConfig = (t3) => {
        if (!this.Rs && !this.vn.disableSurveys) {
          if (!t3.ok) return el.warn("Remote config unavailable. Not loading surveys.");
          var i3 = t3.config.surveys;
          if (X(i3)) return el.warn("Flags not loaded yet. Not loading surveys.");
          this.nu = it(i3) ? i3 : i3.length > 0, el.info("flags response received, isSurveysEnabled: " + this.nu), this.loadIfEnabled();
        }
      }, this.Ps = t2, this.su = i2;
    }
    setup(t2) {
      if (!this.Rs) return this.au = t2, ah(t2.kv.initialize(), (() => {
        if (this.au === t2 && !this.Rs) {
          this.au = void 0, this.Os = t2;
          var i2 = t2.onRemoteConfig(this.onRemoteConfig);
          this.Rs ? i2.dispose() : (this.Ls = i2, this.loadIfEnabled());
        }
      }));
    }
    dispose() {
      var t2, i2, e2;
      this.Rs || (this.Rs = true, this.au = void 0, this.Os = void 0, null == (t2 = this.Ls) || t2.dispose(), this.Ls = void 0, null == (i2 = this._surveyEventReceiver) || i2.dispose(), this._surveyEventReceiver = null, null == (e2 = this._surveyManager) || null == e2.dispose || e2.dispose(), this._surveyManager = null, this.tu = [], this.eu = null, this.ru.forEach(((t3) => clearTimeout(t3))), this.ru.clear());
    }
    get vn() {
      return this.Ps.get();
    }
    initialize() {
      this.loadIfEnabled();
    }
    reset() {
      try {
        var t2;
        null == (t2 = this._surveyEventReceiver) || t2.reset(), localStorage.removeItem("lastSeenSurveyDate");
        for (var i2 = [], e2 = 0; e2 < localStorage.length; e2++) {
          var r2 = localStorage.key(e2);
          (null != r2 && r2.startsWith(rl) || null != r2 && r2.startsWith("inProgressSurvey_")) && i2.push(r2);
        }
        i2.forEach(((t3) => localStorage.removeItem(t3)));
      } catch (t3) {
      }
    }
    loadIfEnabled() {
      if (!this.Rs && this.Os) {
        var t2 = this.vn;
        if (!this._surveyManager) if (this.Xl) el.info("Already initializing surveys, skipping...");
        else if (t2.disableSurveys) el.info(hh);
        else if (t2.cookielessMode && this.Ps.isOptedOut()) el.info("Not loading surveys in cookieless mode without consent.");
        else {
          var i2 = this.Ps.getExtensions();
          if (i2) {
            if (!K(this.nu) || t2.advancedEnableSurveys) {
              var e2 = this.nu || t2.advancedEnableSurveys;
              this.Xl = true;
              try {
                var r2 = i2.generateSurveys;
                if (r2) return this.ou(r2, e2), void (this.Xl = false);
                var s2 = i2.loadExternalDependency;
                if (!s2) return this.lu(qr), void (this.Xl = false);
                s2(((t3) => {
                  try {
                    if (this.Rs) return;
                    var i3 = this.Ps.getExtensions();
                    t3 || null == i3 || !i3.generateSurveys ? this.lu("Could not load surveys script", t3) : this.ou(i3.generateSurveys, e2);
                  } finally {
                    this.Xl = false;
                  }
                }));
              } catch (t3) {
                throw this.Xl = false, this.lu("Error initializing surveys", t3), t3;
              }
            }
          } else el.error("PostHog Extensions not found.");
        }
      }
    }
    ou(t2, i2) {
      this.Rs || (this._surveyManager = t2(i2), this._surveyEventReceiver = this.Ps.createEventReceiver(), el.info("Surveys loaded successfully"), this.uu({ isLoaded: true }));
    }
    lu(t2, i2) {
      el.error(t2, i2), this.uu({ isLoaded: false, error: t2 });
    }
    onSurveysLoaded(t2) {
      return this.tu.push(t2), this._surveyManager && this.uu({ isLoaded: true }), () => {
        this.tu = this.tu.filter(((i2) => i2 !== t2));
      };
    }
    getSurveys(t2, i2) {
      var e2;
      void 0 === i2 && (i2 = false);
      var r2 = null !== (e2 = this.Os) && void 0 !== e2 ? e2 : this.su;
      if (r2 && !this.Rs) {
        if (this.vn.disableSurveys) return el.info(hh), t2([]);
        var s2 = r2.kv.get(wr);
        if (s2 && !i2) return t2(s2, { isLoaded: true }), void (this.hu() && this.getSurveys((() => {
        }), true));
        if (this.eu) this.eu.then(((i3) => {
          this.Rs || t2(i3.surveys, i3.context);
        })).catch(((t3) => el.error("Error in survey callback", t3)));
        else {
          var n2 = this.du("/api/surveys/", { method: "GET", query: { token: r2.projectToken }, sentAt: "query", timeoutMs: this.vn.requestTimeoutMs }).then(((t3) => {
            try {
              return this.vu(r2, t3);
            } catch (t4) {
              return el.error("Error processing surveys response", t4), this.vu(r2, { statusCode: 0, error: t4 });
            }
          }), ((t3) => this.vu(r2, { statusCode: 0, error: t3 })));
          this.eu = n2;
          var o2 = () => {
            this.eu === n2 && (this.eu = null);
          };
          n2.then(((i3) => {
            o2(), this.Rs || t2(i3.surveys, i3.context);
          }), o2).catch(((t3) => el.error("Error in survey callback", t3)));
        }
      }
    }
    du(t2, i2) {
      var e2 = this.Os;
      return e2 ? e2.sendRequest(t2, i2) : new Promise(((t3) => t3({ statusCode: 0, error: new Error(lh) })));
    }
    vu(t2, i2) {
      if (this.Rs) return { surveys: [], context: { isLoaded: false, error: lh } };
      var e2 = i2.statusCode;
      if (200 !== e2 || !i2.json) {
        var r2 = "Surveys API could not be loaded, status: " + e2;
        return 0 !== e2 ? el.error(r2) : i2.error || el.warn(r2), this.iu = Date.now(), { surveys: [], context: { isLoaded: false, error: r2 } };
      }
      this.iu = null;
      var s2, n2 = i2.json.surveys || [], o2 = n2.filter(((t3) => (function(t4) {
        return !(!t4.start_date || t4.end_date);
      })(t3) && (Va(t3) || (function(t4) {
        var i3;
        return !(null == (i3 = t4.conditions) || null == (i3 = i3.actions) || null == (i3 = i3.values) || !i3.length);
      })(t3))));
      return o2.length > 0 && (null == (s2 = this._surveyEventReceiver) || s2.register(o2)), t2.kv.set({ [wr]: n2, [xr]: Date.now() }), { surveys: n2, context: { isLoaded: true } };
    }
    hu() {
      return this.cu() && !this.eu && !this.fu();
    }
    cu() {
      var t2, i2, e2 = null == (t2 = null !== (i2 = this.Os) && void 0 !== i2 ? i2 : this.su) ? void 0 : t2.kv.get(xr);
      return Z(e2) && Date.now() - e2 > 3e5;
    }
    fu() {
      return Z(this.iu) && 3e5 > Date.now() - this.iu;
    }
    markSurveyAsSeen(t2, i2) {
      var e2, r2 = { id: t2, current_iteration: null !== (e2 = null == i2 ? void 0 : i2.iteration) && void 0 !== e2 ? e2 : null };
      sl(r2);
      try {
        localStorage.setItem("lastSeenSurveyDate", (/* @__PURE__ */ new Date()).toISOString());
      } catch (t3) {
      }
    }
    uu(t2) {
      for (var i2 of this.tu) try {
        if (!t2.isLoaded) return i2([], t2);
        this.getSurveys(i2);
      } catch (t3) {
        el.error("Error in survey callback", t3);
      }
    }
    getActiveMatchingSurveys(t2, i2) {
      if (void 0 === i2 && (i2 = false), !X(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(t2, i2);
      el.warn("init was not called");
    }
    pu(t2) {
      var i2 = null;
      return this.getSurveys(((e2) => {
        var r2;
        i2 = null !== (r2 = e2.find(((i3) => i3.id === t2))) && void 0 !== r2 ? r2 : null;
      })), i2;
    }
    gu(t2) {
      if (X(this._surveyManager)) return { eligible: false, reason: lh };
      var i2 = "string" == typeof t2 ? this.pu(t2) : t2;
      return i2 ? this._surveyManager.checkSurveyEligibility(i2) : { eligible: false, reason: "Survey not found" };
    }
    mu(t2) {
      if (X(this._surveyManager)) return { eligible: false, reason: lh };
      var i2 = "string" == typeof t2 ? this.pu(t2) : t2;
      return i2 ? this._surveyManager.checkSurveyRenderability(i2) : { eligible: false, reason: "Survey not found" };
    }
    canRenderSurvey(t2) {
      if (X(this._surveyManager)) return el.warn("init was not called"), { visible: false, disabledReason: lh };
      var i2 = this.mu(t2);
      return { visible: i2.eligible, disabledReason: i2.reason };
    }
    canRenderSurveyAsync(t2, i2) {
      return X(this._surveyManager) ? (el.warn("init was not called"), Promise.resolve({ visible: false, disabledReason: lh })) : new Promise(((e2) => {
        this.getSurveys(((i3) => {
          var r2, s2 = null !== (r2 = i3.find(((i4) => i4.id === t2))) && void 0 !== r2 ? r2 : null;
          if (s2) {
            var n2 = this.mu(s2);
            e2({ visible: n2.eligible, disabledReason: n2.reason });
          } else e2({ visible: false, disabledReason: "Survey not found" });
        }), i2);
      }));
    }
    renderSurvey(t2, i2, e2) {
      var s2;
      if (X(this._surveyManager)) el.warn("init was not called");
      else {
        var n2 = "string" == typeof t2 ? this.pu(t2) : t2;
        if (null != n2 && n2.id) if (nl.includes(n2.type)) {
          var o2 = null == r ? void 0 : r.querySelector(i2);
          if (o2) if (null != (s2 = n2.appearance) && s2.surveyPopupDelaySeconds) {
            el.info("Rendering survey " + n2.id + " with delay of " + n2.appearance.surveyPopupDelaySeconds + " seconds");
            var a2 = setTimeout((() => {
              var t3, i3;
              this.ru.delete(a2), this.Rs || (el.info("Rendering survey " + n2.id + " with delay of " + (null == (t3 = n2.appearance) ? void 0 : t3.surveyPopupDelaySeconds) + " seconds"), null == (i3 = this._surveyManager) || i3.renderSurvey(n2, o2, e2), el.info("Survey " + n2.id + " rendered"));
            }), 1e3 * n2.appearance.surveyPopupDelaySeconds);
            this.ru.add(a2);
          } else this._surveyManager.renderSurvey(n2, o2, e2);
          else el.warn("Survey element not found");
        } else el.warn("Surveys of type " + n2.type + " cannot be rendered in the app");
        else el.warn("Survey not found");
      }
    }
    displaySurvey(t2, i2) {
      var e2;
      if (X(this._surveyManager)) el.warn("init was not called");
      else {
        var r2 = this.pu(t2);
        if (r2) {
          var s2 = r2;
          if (null != (e2 = r2.appearance) && e2.surveyPopupDelaySeconds && i2.ignoreDelay && (s2 = _({}, r2, { appearance: _({}, r2.appearance, { surveyPopupDelaySeconds: 0 }) })), i2.displayType !== Co.Popover && i2.initialResponses && el.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), false === i2.ignoreConditions) {
            var n2 = this.gu(r2);
            if (!n2.eligible) return void el.warn("Survey is not eligible to be displayed: ", n2.reason);
          }
          i2.displayType !== Co.Inline ? this._surveyManager.handlePopoverSurvey(s2, i2) : this.renderSurvey(s2, i2.selector, i2.properties);
        } else el.warn("Survey not found");
      }
    }
    cancelPendingSurvey(t2) {
      X(this._surveyManager) ? el.warn("init was not called") : this._surveyManager.cancelSurvey(t2);
    }
    handlePageUnload() {
      var t2;
      null == (t2 = this._surveyManager) || null == t2.handlePageUnload || t2.handlePageUnload();
    }
  };
  function dh(t2, i2, e2) {
    if (X(t2)) return false;
    switch (e2) {
      case "exact":
        return t2 === i2;
      case "contains":
        var r2 = i2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
        return new RegExp(r2, "i").test(t2);
      case "regex":
        try {
          return new RegExp(i2).test(t2);
        } catch (t3) {
          return false;
        }
      default:
        return false;
    }
  }
  var vh = class {
    constructor(t2) {
      this.yu = /* @__PURE__ */ new Set(), this.bu = /* @__PURE__ */ new Set(), this._u = new Ua(), this.wu = (t3, i2) => this.ku(t3, i2) && this.Su(t3, i2) && this.xu(t3, i2) && this.Cu(t3, i2), this.ku = (t3, i2) => null == i2 || !i2.event || (null == t3 ? void 0 : t3.event) === (null == i2 ? void 0 : i2.event), this._instance = t2;
    }
    init() {
      var t2, i2;
      K(null == (t2 = this._instance) ? void 0 : t2._addCaptureHook) || (this.Tu = null == (i2 = this._instance) ? void 0 : i2._addCaptureHook(((t3, i3) => {
        this.on(t3, i3);
      })));
    }
    dispose() {
      var t2;
      null == (t2 = this.Tu) || t2.call(this), this.Tu = void 0, this._u = new Ua();
    }
    register(t2) {
      var i2, e2;
      if (!K(null == (i2 = this._instance) ? void 0 : i2._addCaptureHook) && (t2.forEach(((t3) => {
        var i3;
        this.yu.add(t3), null == (i3 = t3.steps) || i3.forEach(((t4) => {
          this.bu.add((null == t4 ? void 0 : t4.event) || "");
        }));
      })), null != (e2 = this._instance) && e2.autocapture)) {
        var r2 = /* @__PURE__ */ new Set();
        this.yu.forEach(((t3) => {
          var i3;
          null == (i3 = t3.steps) || i3.forEach(((t4) => {
            null != t4 && t4.selector && r2.add(t4.selector);
          }));
        })), this._instance.autocapture.setElementSelectors(r2);
      }
    }
    replace(t2) {
      this.yu.clear(), this.bu.clear(), this.register(t2);
    }
    on(t2, i2) {
      null != i2 && 0 != t2.length && (this.bu.has(t2) || this.bu.has(i2.event)) && this.yu.forEach(((t3) => {
        this.Mu(i2, t3) && this._u.emit("actionCaptured", t3.name);
      }));
    }
    Eu(t2) {
      this.onAction("actionCaptured", ((i2) => t2(i2)));
    }
    Mu(t2, i2) {
      if (null == (null == i2 ? void 0 : i2.steps)) return false;
      for (var e2 of i2.steps) if (this.wu(t2, e2)) return true;
      return false;
    }
    onAction(t2, i2) {
      return this._u.on(t2, i2);
    }
    Su(t2, i2) {
      if (null != i2 && i2.url) {
        var e2, r2 = null == t2 || null == (e2 = t2.properties) ? void 0 : e2.$current_url;
        if (!r2 || "string" != typeof r2) return false;
        if (!dh(r2, i2.url, i2.url_matching || "contains")) return false;
      }
      return true;
    }
    xu(t2, i2) {
      return !!this.Iu(t2, i2) && !!this.Ru(t2, i2) && !!this.Pu(t2, i2);
    }
    Iu(t2, i2) {
      var e2;
      if (null == i2 || !i2.href) return true;
      var r2 = this.Au(t2);
      if (r2.length > 0) return r2.some(((t3) => dh(t3.href, i2.href, i2.href_matching || "exact")));
      var s2, n2 = (null == t2 || null == (e2 = t2.properties) ? void 0 : e2.$elements_chain) || "";
      return !!n2 && dh((s2 = n2.match(/(?::|")href="(.*?)"/)) ? s2[1] : "", i2.href, i2.href_matching || "exact");
    }
    Ru(t2, i2) {
      var e2;
      if (null == i2 || !i2.text) return true;
      var r2 = this.Au(t2);
      if (r2.length > 0) return r2.some(((t3) => dh(t3.text, i2.text, i2.text_matching || "exact") || dh(t3.$el_text, i2.text, i2.text_matching || "exact")));
      var s2, n2, o2, a2 = (null == t2 || null == (e2 = t2.properties) ? void 0 : e2.$elements_chain) || "";
      return !!a2 && (s2 = (function(t3) {
        for (var i3, e3 = [], r3 = /(?::|")text="(.*?)"/g; !X(i3 = r3.exec(t3)); ) e3.includes(i3[1]) || e3.push(i3[1]);
        return e3;
      })(a2), n2 = i2.text, o2 = i2.text_matching || "exact", s2.some(((t3) => dh(t3, n2, o2))));
    }
    Pu(t2, i2) {
      var e2, r2;
      if (null == i2 || !i2.selector) return true;
      var s2 = null == t2 || null == (e2 = t2.properties) ? void 0 : e2.$element_selectors;
      if (null != s2 && s2.includes(i2.selector)) return true;
      var n2 = (null == t2 || null == (r2 = t2.properties) ? void 0 : r2.$elements_chain) || "";
      if (i2.selector_regex && n2) try {
        return new RegExp(i2.selector_regex).test(n2);
      } catch (t3) {
        return false;
      }
      return false;
    }
    Au(t2) {
      var i2;
      return null == (null == t2 || null == (i2 = t2.properties) ? void 0 : i2.$elements) ? [] : null == t2 ? void 0 : t2.properties.$elements;
    }
    Cu(t2, i2) {
      return null == i2 || !i2.properties || 0 === i2.properties.length || Ja(i2.properties.reduce(((t3, i3) => {
        var e2 = H(i3.value) ? i3.value.map(String) : null != i3.value ? [String(i3.value)] : [];
        return t3[i3.key] = { values: e2, operator: i3.operator || "exact" }, t3;
      }), {}), null == t2 ? void 0 : t2.properties);
    }
  };
  var ch = class {
    constructor(t2) {
      var i2;
      this.Fu = [], this._instance = t2, this.Ou = /* @__PURE__ */ new Map(), this.Lu = /* @__PURE__ */ new Map(), this.Du = /* @__PURE__ */ new Map(), this.$u = null == (i2 = this._instance) || null == i2.onSessionId ? void 0 : i2.onSessionId(((t3) => this.Nu(t3)));
    }
    qu(t2) {
      return false;
    }
    ju() {
      return null;
    }
    Bu(t2) {
    }
    Hu() {
    }
    zu(t2, i2) {
      return !!t2 && Ja(t2.propertyFilters, null == i2 ? void 0 : i2.properties);
    }
    Uu(t2, i2) {
      var e2 = /* @__PURE__ */ new Map();
      return t2.forEach(((t3) => {
        var r2;
        null == (r2 = t3.conditions) || null == (r2 = r2[i2]) || null == (r2 = r2.values) || r2.forEach(((i3) => {
          if (null != i3 && i3.name) {
            var r3 = e2.get(i3.name) || [];
            r3.push(t3.id), e2.set(i3.name, r3);
          }
        }));
      })), e2;
    }
    Wu(t2, i2, e2) {
      var r2 = (e2 === bo.Activation ? this.Ou : this.Lu).get(t2), s2 = [];
      return this.Vu(((t3) => {
        s2 = t3.filter(((t4) => null == r2 ? void 0 : r2.includes(t4.id)));
      })), s2.filter(((r3) => {
        var s3, n2 = null == (s3 = r3.conditions) || null == (s3 = s3[e2]) || null == (s3 = s3.values) ? void 0 : s3.find(((i3) => i3.name === t2));
        return this.zu(n2, i2);
      }));
    }
    register(t2) {
      this.Gu(t2, false);
    }
    replace(t2) {
      this.Gu(t2, true);
    }
    Gu(t2, i2) {
      var e2;
      K(null == (e2 = this._instance) ? void 0 : e2._addCaptureHook) || (this.Zu(t2, i2), this.Qu(t2, i2));
    }
    Qu(t2, i2) {
      var e2 = t2.filter(((t3) => {
        var i3;
        return null == (i3 = t3.conditions) || null == (i3 = i3.actions) || null == (i3 = i3.values) ? void 0 : i3.length;
      }));
      if (i2 && this.Du.clear(), 0 !== e2.length) {
        this.Ju || (this.Ju = new vh(this._instance), this.Ju.init(), this.Ju.Eu(((t3) => this.onAction(t3))));
        var r2 = [];
        e2.forEach(((t3) => {
          var i3;
          null == (i3 = t3.conditions) || null == (i3 = i3.actions) || i3.values.forEach(((i4) => {
            if (r2.push(i4), i4.name) {
              var e3, s3 = null !== (e3 = this.Du.get(i4.name)) && void 0 !== e3 ? e3 : [];
              s3.includes(t3.id) || s3.push(t3.id), this.Du.set(i4.name, s3);
            }
          }));
        })), i2 ? this.Ju.replace(r2) : this.Ju.register(r2);
      } else {
        var s2;
        i2 && (null == (s2 = this.Ju) || s2.replace([]));
      }
    }
    Ku(t2, i2) {
      i2.forEach(((i3, e2) => {
        var r2, s2 = null !== (r2 = t2.get(e2)) && void 0 !== r2 ? r2 : [];
        i3.forEach(((t3) => {
          s2.includes(t3) || s2.push(t3);
        })), t2.set(e2, s2);
      }));
    }
    Zu(t2, i2) {
      var e2, r2, s2 = t2.filter(((t3) => {
        var i3, e3;
        return (null == (i3 = t3.conditions) ? void 0 : i3.events) && (null == (e3 = t3.conditions) || null == (e3 = e3.events) || null == (e3 = e3.values) ? void 0 : e3.length) > 0;
      })), n2 = t2.filter(((t3) => {
        var i3, e3;
        return (null == (i3 = t3.conditions) ? void 0 : i3.cancelEvents) && (null == (e3 = t3.conditions) || null == (e3 = e3.cancelEvents) || null == (e3 = e3.values) ? void 0 : e3.length) > 0;
      })), o2 = this.Uu(t2, bo.Activation), a2 = this.Uu(t2, bo.Cancellation);
      i2 ? (this.Ou = o2, this.Lu = a2) : (this.Ku(this.Ou, o2), this.Ku(this.Lu, a2)), (0 !== s2.length || 0 !== n2.length) && (null !== (e2 = this.Tu) && void 0 !== e2 || (this.Tu = null == (r2 = this._instance) ? void 0 : r2._addCaptureHook(((t3, i3) => {
        this.onEvent(t3, i3);
      }))));
    }
    onEvent(t2, i2) {
      var e2, r2, s2 = this.Yu(), n2 = (null == i2 || null == (e2 = i2.properties) ? void 0 : e2.$survey_id) || (null == i2 || null == (r2 = i2.properties) ? void 0 : r2.$product_tour_id);
      if (n2 && this.getActivatedIds().includes(n2)) {
        var o2 = this.Xu(t2, n2);
        if ("consume" === o2) return s2.info("event consumed activated item, removing it", { event: t2, itemId: n2 }), void this.th([n2]);
        if ("persist" === o2) return s2.info("shown item promoted to persisted activation", { event: t2, itemId: n2 }), this.eh(n2), void this.ih([n2]);
      }
      if (this.Lu.has(t2)) {
        var a2 = this.Wu(t2, i2, bo.Cancellation);
        a2.length > 0 && (s2.info("cancel event matched, cancelling items", { event: t2, itemsToCancel: a2.map(((t3) => t3.id)) }), this.th(a2.map(((t3) => t3.id))), a2.forEach(((t3) => this.rh(t3.id))));
      }
      if (this.Ou.has(t2)) {
        s2.info("event name matched", { event: t2, eventPayload: i2, items: this.Ou.get(t2) });
        var l2 = this.Wu(t2, i2, bo.Activation);
        this.nh(l2.map(((t3) => t3.id)));
      }
    }
    onAction(t2) {
      this.Du.has(t2) && this.nh(this.Du.get(t2) || []);
    }
    nh(t2) {
      var i2;
      if (0 !== t2.length) {
        var e2 = !(null == (i2 = this._instance) || null == i2.get_session_id || !i2.get_session_id()), r2 = [];
        for (var s2 of t2) e2 && this.qu(s2) ? this.eh(s2) && this.sh(s2) : r2.push(s2);
        r2.length > 0 && (this.Fu = [.../* @__PURE__ */ new Set([...this.Fu, ...r2])]), this.Yu().info("updating activated items", { activatedItems: this.getActivatedIds() });
      }
    }
    eh(t2) {
      this.Fu = this.Fu.filter(((i3) => i3 !== t2));
      var i2 = this.ah();
      return !i2.includes(t2) && (this.oh([...i2, t2]), this.lh(), true);
    }
    th(t2) {
      var i2 = new Set(t2);
      this.Fu = this.Fu.filter(((t3) => !i2.has(t3)));
      var e2 = this.uh(), r2 = e2.filter(((t3) => !i2.has(t3)));
      r2.length !== e2.length && (this.oh(r2), 0 === r2.length && this.hh()), this.ih(t2);
    }
    dh() {
      var t2, i2 = this.ju();
      if (!i2) return {};
      var e2 = null == (t2 = this._instance) || null == (t2 = t2.persistence) ? void 0 : t2.props[i2];
      return e2 && "object" == typeof e2 ? e2 : {};
    }
    sh(t2) {
      if (this.ju()) {
        var i2 = this.dh();
        this.Bu(_({}, i2, { [t2]: Date.now() }));
      }
    }
    ih(t2) {
      if (this.ju()) {
        var i2 = this.dh(), e2 = {}, r2 = false;
        for (var s2 of Object.entries(i2)) {
          var n2 = s2[0], o2 = s2[1];
          t2.includes(n2) ? r2 = true : e2[n2] = o2;
        }
        r2 && (G(e2) ? this.Hu() : this.Bu(e2));
      }
    }
    fh() {
      this.ju() && this.Hu();
    }
    getActivationTimestamp(t2) {
      if (this.ah().includes(t2)) {
        var i2 = this.dh()[t2];
        return Z(i2) ? i2 : void 0;
      }
    }
    uh() {
      var t2, i2 = this.ph();
      return (null == (t2 = this._instance) || null == (t2 = t2.persistence) ? void 0 : t2.props[i2]) || [];
    }
    ah() {
      var t2, i2, e2 = this.uh();
      if (0 === e2.length) return [];
      var r2 = null == (t2 = this._instance) || null == (t2 = t2.persistence) ? void 0 : t2.props[this.gh()], s2 = null == (i2 = this._instance) || null == i2.get_session_id ? void 0 : i2.get_session_id();
      return s2 && r2 === s2 ? e2 : [];
    }
    lh() {
      var t2, i2 = null == (t2 = this._instance) || null == t2.get_session_id ? void 0 : t2.get_session_id();
      i2 && this.mh(i2);
    }
    hh() {
      this.yh();
    }
    Nu(t2) {
      var i2, e2 = null == (i2 = this._instance) || null == (i2 = i2.persistence) ? void 0 : i2.props[this.gh()];
      if (e2 && e2 !== t2) {
        var r2 = this.uh(), s2 = this.dh();
        r2.length > 0 && (this.oh([]), r2.filter(((t3) => Z(s2[t3]))).forEach(((t3) => this.rh(t3)))), this.hh(), this.fh();
      }
    }
    getActivatedIds() {
      return [.../* @__PURE__ */ new Set([...this.ah(), ...this.Fu])].filter(((t2) => !this.bh(t2)));
    }
    dispose() {
      var t2, i2, e2;
      null == (t2 = this.$u) || t2.call(this), this.$u = void 0, null == (i2 = this.Tu) || i2.call(this), this.Tu = void 0, null == (e2 = this.Ju) || e2.dispose(), this.Ju = void 0;
    }
    reset() {
      this.Fu = [], this.uh().length > 0 && this.oh([]), this.hh(), this.fh();
    }
    getEventToItemsMap() {
      return this.Ou;
    }
    _h() {
      return this.Ju;
    }
  };
  var fh = class extends ch {
    constructor(t2) {
      super(t2);
    }
    ph() {
      return Er;
    }
    gh() {
      return Sr;
    }
    ju() {
      return kr;
    }
    Bu(t2) {
      var i2;
      null == (i2 = this._instance) || null == (i2 = i2.persistence) || i2.register({ [kr]: t2 });
    }
    Hu() {
      var t2;
      null == (t2 = this._instance) || null == (t2 = t2.persistence) || t2.unregister(kr);
    }
    qu(t2) {
      var i2, e2;
      this.Vu(((i3) => {
        e2 = i3.find(((i4) => i4.id === t2));
      }));
      var r2 = null == (i2 = e2) || null == (i2 = i2.appearance) ? void 0 : i2.surveyPopupDelaySeconds;
      return Z(r2) && r2 > 0;
    }
    wh() {
      return Po.SHOWN;
    }
    Vu(t2) {
      var i2;
      null == (i2 = this._instance) || i2.getSurveys(t2);
    }
    rh(t2) {
      var i2;
      null == (i2 = this._instance) || i2.cancelPendingSurvey(t2);
    }
    Yu() {
      return el;
    }
    oh(t2) {
      var i2;
      null == (i2 = this._instance) || null == (i2 = i2.persistence) || i2.register({ [Er]: t2 });
    }
    mh(t2) {
      var i2;
      null == (i2 = this._instance) || null == (i2 = i2.persistence) || i2.register({ [Sr]: t2 });
    }
    yh() {
      var t2;
      null == (t2 = this._instance) || null == (t2 = t2.persistence) || t2.unregister(Sr);
    }
    bh() {
      return false;
    }
    Xu(t2, i2) {
      var e2;
      this.Vu(((t3) => {
        e2 = t3.find(((t4) => t4.id === i2));
      }));
      var r2 = !e2 || (function(t3) {
        var i3;
        return Va(t3) && !(null == (i3 = t3.conditions) || null == (i3 = i3.events) || !i3.repeatedActivation) || "always" === t3.schedule;
      })(e2);
      return r2 ? t2 === Po.SHOWN ? "consume" : "ignore" : t2 === Po.SHOWN ? "persist" : t2 === Po.DISMISSED || t2 === Po.SENT ? "consume" : "ignore";
    }
    getSurveys() {
      return this.getActivatedIds();
    }
    getEventToSurveys() {
      return this.getEventToItemsMap();
    }
  };
  var ph = class {
    constructor(t2) {
      this._instance = t2;
    }
    initialize() {
    }
    get(t2) {
      if ("string" == typeof t2) return this._instance.get_property(t2);
      var i2 = {};
      for (var e2 of t2) {
        var r2 = this._instance.get_property(e2);
        K(r2) || (i2[e2] = r2);
      }
      return i2;
    }
    set(t2, i2) {
      this._instance.register("string" == typeof t2 ? { [t2]: i2 } : t2);
    }
    remove(t2) {
      "string" != typeof t2 ? t2.forEach(((t3) => this._instance.unregister(t3))) : this._instance.unregister(t2);
    }
  };
  var _h = class {
    constructor(t2) {
      this._instance = t2;
    }
    get() {
      var t2 = this._instance.config;
      return { disableSurveys: t2.disable_surveys, cookielessMode: !!t2.cookieless_mode, advancedEnableSurveys: t2.advanced_enable_surveys, requestTimeoutMs: t2.surveys_request_timeout_ms };
    }
    isOptedOut() {
      return this._instance.consent.isOptedOut();
    }
    getExtensions() {
      var t2 = null == v ? void 0 : v.__PosthogExtensions__;
      if (t2) {
        var i2 = t2.generateSurveys, e2 = t2.loadExternalDependency;
        return { generateSurveys: i2 ? (t3) => i2(this._instance, t3) : void 0, loadExternalDependency: e2 ? (t3) => e2(this._instance, "surveys", t3) : void 0 };
      }
    }
    createEventReceiver() {
      return new fh(this._instance);
    }
  };
  var gh = null != t && t.location ? Gn(t.location.hash, "__posthog") || Gn(location.hash, "state") : null;
  var mh = "_postHogToolbarParams";
  var yh = Ae("[Toolbar]");
  var bh = Ae("[FeatureFlags]");
  var wh = class {
    constructor(t2, i2) {
      void 0 === i2 && (i2 = false), this.kh = false, this.update(t2, i2);
    }
    update(t2, i2) {
      this.Sh = ((t3, i3) => {
        var e2, r2, s2, n2, o2;
        return { bootstrap: { featureFlags: null == (e2 = t3.bootstrap) ? void 0 : e2.featureFlags, featureFlagPayloads: null == (r2 = t3.bootstrap) ? void 0 : r2.featureFlagPayloads }, remoteRequestsDisabled: i3, featureFlagsDisabled: !!t3.advanced_disable_feature_flags, onlyEvaluateSurveyFeatureFlags: !!t3.advanced_only_evaluate_survey_feature_flags, deduplicateCallsPerSession: !!t3.advanced_feature_flags_dedup_per_session, cacheTtlMs: t3.feature_flag_cache_ttl_ms, refreshIntervalMs: null !== (s2 = t3.remote_config_refresh_interval_ms) && void 0 !== s2 ? s2 : 3e5, requestTimeoutMs: t3.feature_flag_request_timeout_ms, compression: t3.disable_compression ? void 0 : "best-available", evaluationContexts: null !== (n2 = null !== (o2 = t3.evaluation_contexts) && void 0 !== o2 ? o2 : t3.evaluation_environments) && void 0 !== n2 ? n2 : [], flagKeys: H(t3.flag_keys) ? t3.flag_keys : void 0 };
      })(t2, i2), !t2.evaluation_environments || t2.evaluation_contexts || this.kh || (bh.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.kh = true), K(t2.flag_keys) || H(t2.flag_keys) || bh.error("Invalid flag_keys found:", t2.flag_keys, "Expected array of non-empty strings");
    }
    get() {
      return this.Sh;
    }
  };
  var xh = Ae("[FeatureFlags]");
  var Eh = Ae("[FeatureFlags]", { debugEnabled: true });
  var Sh = `" failed. Feature flags didn't load in time.`;
  var kh = "connection_error";
  var Th = (t2) => {
    for (var i2 = {}, e2 = 0; t2.length > e2; e2++) i2[t2[e2]] = true;
    return i2;
  };
  var $h = (t2) => {
    var i2 = {};
    for (var e2 of ss(t2 || {})) {
      var r2 = e2[1];
      r2 && (i2[e2[0]] = r2);
    }
    return i2;
  };
  var Ph = Ae("[Error tracking]");
  var Rh = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:"];
  var Ch = ["__firefox__", "__gCrWeb"];
  var Oh = "Refusing to render web experiment since the viewer is a likely bot";
  var Ih = { icontains: (t2, i2) => i2.toLowerCase().indexOf(t2.toLowerCase()) > -1, not_icontains: (t2, i2) => -1 === i2.toLowerCase().indexOf(t2.toLowerCase()), regex: (t2, i2) => Wa(i2, t2), not_regex: (t2, i2) => !Wa(i2, t2), exact: (t2, i2) => i2 === t2, is_not: (t2, i2) => i2 !== t2 };
  var Ah = class _Ah {
    get vn() {
      return this._instance.config;
    }
    constructor(t2) {
      var i2 = this;
      this.getWebExperimentsAndEvaluateDisplayLogic = function(t3) {
        void 0 === t3 && (t3 = false), i2.getWebExperiments(((t4) => {
          _Ah.xh("retrieved web experiments from the server"), i2.Ch = /* @__PURE__ */ new Map(), t4.forEach(((t5) => {
            if (t5.feature_flag_key) {
              var e2;
              i2.Ch && (_Ah.xh("setting flag key ", t5.feature_flag_key, " to web experiment ", t5), null == (e2 = i2.Ch) || e2.set(t5.feature_flag_key, t5));
              var r2 = i2._instance.getFeatureFlag(t5.feature_flag_key);
              J(r2) && t5.variants[r2] && i2.Th(t5.name, r2, t5.variants[r2].transforms);
            } else if (t5.variants) for (var s2 in t5.variants) {
              var n2 = t5.variants[s2];
              _Ah.Mh(n2, i2._instance) && i2.Th(t5.name, s2, n2.transforms);
            }
          }));
        }), t3);
      }, this._instance = t2, this._instance.onFeatureFlags(((t3) => {
        this.onFeatureFlags(t3);
      }));
    }
    initialize() {
    }
    onFeatureFlags(t2) {
      if (this._is_bot()) _Ah.xh(Oh);
      else if (!this.vn.disable_web_experiments) {
        if (X(this.Ch)) return this.Ch = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
        _Ah.xh("applying feature flags", t2), t2.forEach(((t3) => {
          var i2;
          if (this.Ch && null != (i2 = this.Ch) && i2.has(t3)) {
            var e2, r2 = this._instance.getFeatureFlag(t3), s2 = null == (e2 = this.Ch) ? void 0 : e2.get(t3);
            r2 && null != s2 && s2.variants[r2] && this.Th(s2.name, r2, s2.variants[r2].transforms);
          }
        }));
      }
    }
    previewWebExperiment() {
      var t2 = _Ah.getWindowLocation();
      if (null != t2 && t2.search) {
        var i2 = Vn(null == t2 ? void 0 : t2.search, "__experiment_id"), e2 = Vn(null == t2 ? void 0 : t2.search, "__experiment_variant");
        i2 && e2 && (_Ah.xh("previewing web experiments " + i2 + " && " + e2), this.getWebExperiments(((t3) => {
          this.Eh(parseInt(i2), e2, t3);
        }), false, true));
      }
    }
    loadIfEnabled() {
      this.vn.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
    }
    getWebExperiments(t2, i2, e2) {
      if (this.vn.disable_web_experiments && !e2) return t2([]);
      var r2 = this._instance.get_property("$web_experiments");
      if (r2 && !i2) return t2(r2);
      this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this.vn.token), method: "GET", timestampMode: "query", callback: (i3) => t2(200 === i3.statusCode && i3.json && i3.json.experiments || []) });
    }
    Eh(t2, i2, e2) {
      var r2 = e2.filter(((i3) => i3.id === t2));
      r2 && r2.length > 0 && (_Ah.xh("Previewing web experiment [" + r2[0].name + "] with variant [" + i2 + "]"), this.Th(r2[0].name, i2, r2[0].variants[i2].transforms));
    }
    static Mh(t2, i2) {
      return !X(t2.conditions) && _Ah.Ih(t2, i2) && _Ah.Rh(t2);
    }
    static Ih(t2, i2) {
      var e2;
      if (X(t2.conditions) || X(null == (e2 = t2.conditions) ? void 0 : e2.url)) return true;
      var r2 = _Ah.getWindowLocation();
      if (r2) {
        var s2, n2, o2, a2 = js(i2, r2.href);
        return null == (s2 = t2.conditions) || !s2.url || Ih[null !== (n2 = null == (o2 = t2.conditions) ? void 0 : o2.urlMatchType) && void 0 !== n2 ? n2 : "icontains"](t2.conditions.url, a2);
      }
      return false;
    }
    static getWindowLocation() {
      return null == t ? void 0 : t.location;
    }
    static Rh(t2) {
      var i2;
      if (X(t2.conditions) || X(null == (i2 = t2.conditions) ? void 0 : i2.utm)) return true;
      var e2 = io();
      if (e2.utm_source) {
        var r2, s2, n2, o2, a2, l2, h2, u2, d2 = null == (r2 = t2.conditions) || null == (r2 = r2.utm) || !r2.utm_campaign || (null == (s2 = t2.conditions) || null == (s2 = s2.utm) ? void 0 : s2.utm_campaign) == e2.utm_campaign, v2 = null == (n2 = t2.conditions) || null == (n2 = n2.utm) || !n2.utm_source || (null == (o2 = t2.conditions) || null == (o2 = o2.utm) ? void 0 : o2.utm_source) == e2.utm_source, c2 = null == (a2 = t2.conditions) || null == (a2 = a2.utm) || !a2.utm_medium || (null == (l2 = t2.conditions) || null == (l2 = l2.utm) ? void 0 : l2.utm_medium) == e2.utm_medium, f2 = null == (h2 = t2.conditions) || null == (h2 = h2.utm) || !h2.utm_term || (null == (u2 = t2.conditions) || null == (u2 = u2.utm) ? void 0 : u2.utm_term) == e2.utm_term;
        return d2 && c2 && f2 && v2;
      }
      return false;
    }
    static xh(t2) {
      for (var i2 = arguments.length, e2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; i2 > r2; r2++) e2[r2 - 1] = arguments[r2];
      Ie.info("[WebExperiments] " + t2, e2);
    }
    Th(t2, i2, e2) {
      this._is_bot() ? _Ah.xh(Oh) : "control" !== i2 ? e2.forEach(((e3) => {
        if (e3.selector) {
          var r2;
          _Ah.xh("applying transform of variant " + i2 + " for experiment " + t2 + " ", e3);
          var s2 = null == (r2 = document) ? void 0 : r2.querySelectorAll(e3.selector);
          null == s2 || s2.forEach(((t3) => {
            var i3 = t3;
            e3.html && (i3.innerHTML = e3.html), e3.css && i3.setAttribute("style", e3.css);
          }));
        }
      })) : _Ah.xh("Control variants leave the page unmodified.");
    }
    _is_bot() {
      return e && this._instance ? qa(e, this.vn.custom_blocked_useragents) : void 0;
    }
  };
  var Fh = Ae("[Conversations]");
  var Mh = "Conversations not available yet.";
  function Dh(t2, i2) {
    var e2, r2, s2, n2, o2, a2, l2, h2 = null !== (e2 = null == t2 ? void 0 : t2.flushIntervalMs) && void 0 !== e2 ? e2 : 3e3, u2 = null !== (r2 = null == t2 ? void 0 : t2.maxBufferSize) && void 0 !== r2 ? r2 : 100, d2 = null != i2 && i2.consoleCapture ? void 0 : null !== (s2 = null == t2 ? void 0 : t2.maxLogsPerInterval) && void 0 !== s2 ? s2 : 1e3, v2 = K(d2) ? Math.max(u2, 2048) : Math.max(u2, d2), c2 = null == t2 ? void 0 : t2.resourceAttributes;
    return { serviceName: null !== (n2 = null !== (o2 = null == c2 ? void 0 : c2["service.name"]) && void 0 !== o2 ? o2 : null == t2 ? void 0 : t2.serviceName) && void 0 !== n2 ? n2 : null == i2 ? void 0 : i2.serviceNameDefault, serviceVersion: null !== (a2 = null == c2 ? void 0 : c2["service.version"]) && void 0 !== a2 ? a2 : null == t2 ? void 0 : t2.serviceVersion, environment: null !== (l2 = null == c2 ? void 0 : c2["deployment.environment"]) && void 0 !== l2 ? l2 : null == t2 ? void 0 : t2.environment, resourceAttributes: c2, beforeSend: null == t2 ? void 0 : t2.beforeSend, flushIntervalMs: h2, maxBufferSize: u2, maxQueueSize: v2, maxBatchRecordsPerPost: 100, rateCapWindowMs: h2, maxLogsPerInterval: d2, backgroundFlushBudgetMs: 0, terminationFlushBudgetMs: 0 };
  }
  var Nh = ["debug", "log", "warn", "error", "info"];
  var Lh = "console";
  var Uh = "__posthogHandledLogsRequestError";
  var jh = (t2, i2) => {
    var e2 = t2 instanceof Error ? t2 : new Error(i2);
    return e2[Uh] = true, e2;
  };
  var Bh = (t2) => !!t2 && "object" == typeof t2 && true === t2[Uh];
  var zh = { featureFlags: class {
    constructor(t2) {
      this.name = "featureFlags", this.Ph = false, this.featureFlagEventHandlers = [], this.I = xh, this.Ah = {}, this.Fh = {}, this.Oh = [], this.Lh = false, this.Dh = false, this.$h = 0, this.Nh = false, this.qh = false, this.jh = false, this.Bh = false, this.Hh = 0, this.Ht = () => {
        var t3 = this.zh();
        this.Hh = 0, t3 && this.reloadFeatureFlags();
      }, this.Uh = () => {
        var t3, i2 = this.Wh;
        K(i2) || this.vn.remoteRequestsDisabled || !r || "hidden" === r.visibilityState || Date.now() - (null !== (t3 = this.Vh) && void 0 !== t3 ? t3 : 0) < i2 || (this.reloadFeatureFlags(), this.Gh());
      }, this.$t = () => {
        "visible" === (null == r ? void 0 : r.visibilityState) && this.Uh();
      }, "get" in t2 ? this.Ps = t2 : (this.Zh = new wh(t2.config, t2.Ua()), this.Ps = this.Zh);
    }
    updateConfig(t2, i2) {
      var e2;
      null == (e2 = this.Zh) || e2.update(t2, i2), this.Os && this.Qh();
    }
    setup(t2) {
      return this.au = t2, this.I = t2.logger.createLogger("[FeatureFlags]"), ah(t2.kv.initialize(), (() => {
        this.au === t2 && (this.au = void 0, this.Os = t2, this.Jh(t2));
      }));
    }
    Jh(i2) {
      if (this.Os === i2) return t && us(t, "online", this.Ht), this.Qh(), this.Kh = i2.registerDynamicEventProperties((() => this.Yh() ? this.Ah : this.Fh)), this.Xh(), this.initialize();
    }
    Qh() {
      var t2 = this.vn.refreshIntervalMs, i2 = !this.vn.remoteRequestsDisabled && r && !K(t2) && t2 > 0 ? t2 : void 0;
      i2 !== this.Wh && (this.td(), K(i2) || (this.Wh = i2, this.Gh(), null != r && r.addEventListener && us(r, Jr, this.$t)));
    }
    Gh() {
      K(this.Wh) || (K(this.ed) || clearInterval(this.ed), this.Vh = Date.now(), this.ed = setInterval(this.Uh, this.Wh));
    }
    td() {
      K(this.ed) || (clearInterval(this.ed), this.ed = void 0, null == r || null == r.removeEventListener || r.removeEventListener(Jr, this.$t)), this.Wh = void 0, this.Vh = void 0;
    }
    destroy() {
      this.rd();
    }
    dispose() {
      this.rd();
    }
    rd() {
      var i2;
      this.td(), this.$h++, this.qh = false, this.au = void 0, this.Os && (this.nd(), null == (i2 = this.Kh) || i2.dispose(), this.Kh = void 0, this.Oh = [], null == t || t.removeEventListener("online", this.Ht), this.Os = void 0);
    }
    get vn() {
      return this.Ps.get();
    }
    sd(t2) {
      var i2;
      return null == (i2 = this.Os) ? void 0 : i2.kv.get(t2);
    }
    ei(t2) {
      this.ad((() => {
        var i2;
        return null == (i2 = this.Os) ? void 0 : i2.kv.set(t2);
      }));
    }
    ri(t2) {
      this.ad((() => {
        var i2;
        return null == (i2 = this.Os) ? void 0 : i2.kv.remove(t2);
      }));
    }
    ad(t2) {
      try {
        t2();
      } catch (t3) {
        this.I.error("Failed to update feature flag persistence", t3);
      }
    }
    Xh() {
      var t2 = {};
      for (var i2 of [ur, cr, fr, _r]) {
        var e2 = this.sd(i2);
        K(e2) || (t2[i2] = e2);
      }
      this.Ah = t2;
      var r2 = _({}, t2), s2 = this.sd(hr);
      if (s2) for (var n2 of Object.entries(s2)) r2["$feature/" + n2[0]] = n2[1];
      this.Fh = r2;
    }
    Yh() {
      var t2 = this.vn.cacheTtlMs;
      if (!t2 || 0 >= t2) return false;
      var i2 = this.sd(Cr);
      return "number" != typeof i2 || Date.now() - i2 > t2;
    }
    od() {
      return !!this.Yh() && (this.Bh || this.Dh || (this.Bh = true, this.I.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), true);
    }
    ld() {
      var t2 = this.vn.evaluationContexts;
      return null != t2 && t2.length ? t2.filter(((t3) => {
        var i2 = t3 && "string" == typeof t3 && t3.trim().length > 0;
        return i2 || this.I.error("Invalid evaluation context found:", t3, "Expected non-empty string"), i2;
      })) : [];
    }
    ud() {
      var t2 = this.vn.flagKeys;
      if (!K(t2)) return t2.filter(((t3) => {
        var i2 = t3 && "string" == typeof t3 && t3.trim().length > 0;
        return i2 || this.I.error("Invalid flag key found:", t3, "Expected non-empty string"), i2;
      }));
    }
    initialize() {
      var t2, i2, e2 = this.vn, r2 = null !== (t2 = null == (i2 = e2.bootstrap) ? void 0 : i2.featureFlags) && void 0 !== t2 ? t2 : {};
      if (Object.keys(r2).length) {
        var s2, n2, o2 = null !== (s2 = null == (n2 = e2.bootstrap) ? void 0 : n2.featureFlagPayloads) && void 0 !== s2 ? s2 : {}, a2 = Object.keys(r2).filter(((t3) => !!r2[t3])).reduce(((t3, i3) => (t3[i3] = r2[i3] || false, t3)), {}), l2 = Object.keys(o2).filter(((t3) => a2[t3])).reduce(((t3, i3) => (t3[i3] = o2[i3], t3)), {});
        return this.hd({ featureFlags: a2, featureFlagPayloads: l2 });
      }
    }
    updateFlags(t2, i2, e2) {
      var r2, s2, n2 = null != e2 && e2.merge && null !== (r2 = this.sd(hr)) && void 0 !== r2 ? r2 : {}, o2 = null != e2 && e2.merge && null !== (s2 = this.sd(cr)) && void 0 !== s2 ? s2 : {}, a2 = _({}, n2, t2), l2 = _({}, o2, i2), h2 = {};
      for (var u2 of Object.entries(a2)) {
        var d2 = u2[0], v2 = u2[1];
        h2[d2] = { key: d2, enabled: y(v2), variant: b(v2), reason: void 0, metadata: K(null == l2 ? void 0 : l2[d2]) ? void 0 : { id: 0, version: void 0, description: void 0, payload: l2[d2] } };
      }
      this.hd({ flags: h2 });
    }
    get hasLoadedFlags() {
      return this.Lh;
    }
    getFlags() {
      return Object.keys(this.getFlagVariants());
    }
    getFlagsWithDetails() {
      var t2 = this.sd(vr), i2 = this.sd(_r), e2 = this.sd(gr);
      if (!e2 && !i2) return t2 || {};
      var r2 = rs({}, t2 || {}), s2 = [.../* @__PURE__ */ new Set([...Object.keys(e2 || {}), ...Object.keys(i2 || {})])];
      for (var n2 of s2) {
        var o2, a2, l2 = r2[n2], h2 = null == i2 ? void 0 : i2[n2], u2 = K(h2) ? null !== (o2 = null == l2 ? void 0 : l2.enabled) && void 0 !== o2 && o2 : !!h2, d2 = K(h2) ? null == l2 ? void 0 : l2.variant : "string" == typeof h2 ? h2 : void 0, v2 = null == e2 ? void 0 : e2[n2], c2 = _({}, l2, { enabled: u2, variant: u2 ? null != d2 ? d2 : null == l2 ? void 0 : l2.variant : void 0 });
        u2 !== (null == l2 ? void 0 : l2.enabled) && (c2.original_enabled = null == l2 ? void 0 : l2.enabled), d2 !== (null == l2 ? void 0 : l2.variant) && (c2.original_variant = null == l2 ? void 0 : l2.variant), v2 && (c2.metadata = _({}, null == l2 ? void 0 : l2.metadata, { payload: v2, original_payload: null == l2 || null == (a2 = l2.metadata) ? void 0 : a2.payload })), r2[n2] = c2;
      }
      return this.Ph || (this.I.warn(" Overriding feature flag details!", { flagDetails: t2, overriddenPayloads: e2, finalDetails: r2 }), this.Ph = true), r2;
    }
    getAllFeatureFlags() {
      var t2 = this.getFlagVariants(), i2 = this.getFlagPayloads();
      return Object.keys(t2).map(((e2) => {
        var r2 = t2[e2];
        return { key: e2, enabled: y(r2), variant: b(r2), payload: m(i2[e2]) };
      }));
    }
    getFlagVariants() {
      var t2 = this.sd(hr), i2 = this.sd(_r);
      if (!i2) return t2 || {};
      for (var e2 = rs({}, t2 || {}), r2 = Object.keys(i2), s2 = 0; r2.length > s2; s2++) e2[r2[s2]] = i2[r2[s2]];
      return this.Ph || (this.I.warn(" Overriding feature flags!", { enabledFlags: t2, overriddenFlags: i2, finalFlags: e2 }), this.Ph = true), e2;
    }
    getFlagPayloads() {
      var t2 = this.sd(cr), i2 = this.sd(gr);
      if (!i2) return t2 || {};
      for (var e2 = rs({}, t2 || {}), r2 = Object.keys(i2), s2 = 0; r2.length > s2; s2++) e2[r2[s2]] = i2[r2[s2]];
      return this.Ph || (this.I.warn(" Overriding feature flag payloads!", { flagPayloads: t2, overriddenPayloads: i2, finalPayloads: e2 }), this.Ph = true), e2;
    }
    reloadFeatureFlags() {
      this.Nh || this.vn.featureFlagsDisabled || this.zh() || this.dd || (this.Oh.slice().forEach(((t2) => {
        try {
          t2();
        } catch (t3) {
          this.I.error("Error while running feature flags reloading callback", t3);
        }
      })), this.dd = setTimeout((() => {
        this.vd();
      }), 5));
    }
    nd() {
      clearTimeout(this.dd), this.dd = void 0;
    }
    onReloading(t2) {
      return this.Oh.push(t2), () => {
        this.Oh = this.Oh.filter(((i2) => i2 !== t2));
      };
    }
    ensureFlagsLoaded() {
      this.Lh || this.Dh || this.dd || this.reloadFeatureFlags();
    }
    setAnonymousDistinctId(t2) {
      this.$anon_distinct_id = t2;
    }
    setReloadingPaused(t2) {
      this.Nh = t2;
    }
    resetFlagCallReported() {
      this.ri($r);
    }
    vd(t2) {
      this.nd();
      var i2 = this.Os;
      if (i2 && !this.vn.remoteRequestsDisabled && !this.zh()) if (this.Dh) this.qh = true;
      else {
        var e2 = { token: i2.projectToken, distinct_id: i2.distinctId, groups: i2.groups, $anon_distinct_id: this.$anon_distinct_id, person_properties: _({}, i2.initialPersonProperties, this.sd(mr) || {}, { $lib: i2.library.name, $lib_version: i2.library.version }), group_properties: this.sd(yr), timezone: ho() };
        K(i2.deviceId) || (e2.$device_id = i2.deviceId), (null != t2 && t2.disableFlags || this.vn.featureFlagsDisabled) && (e2.disable_flags = true);
        var r2 = this.ld();
        r2.length && (e2.evaluation_contexts = r2);
        var s2 = this.ud();
        K(s2) || (e2.flag_keys = s2);
        var n2 = this.vn.onlyEvaluateSurveyFeatureFlags, o2 = "/flags/?v=2" + (n2 ? "&only_evaluate_survey_feature_flags=true" : ""), a2 = this.$h;
        this.Dh = true;
        var l2 = () => {
          this.qh && (this.qh = false, this.vd());
        }, h2 = (t3) => {
          this.Dh = false, a2 === this.$h ? (this.ei({ [Rr]: [kh] }), this.I.error("Feature flag request failed", t3), l2()) : l2();
        };
        try {
          i2.sendRequest(o2, { target: "flags", method: "POST", body: e2, compression: this.vn.compression, sentAt: "body", timeoutMs: this.vn.requestTimeoutMs }).then(((t3) => {
            var i3, r3, s3 = null !== (i3 = t3.json) && void 0 !== i3 ? i3 : {}, o3 = 200 !== t3.statusCode;
            if (this.Dh = false, a2 === this.$h) {
              if (this.fd(t3.statusCode), o3 || this.qh || (this.$anon_distinct_id = void 0), !e2.disable_flags || this.qh) {
                this.jh = !o3;
                var h3 = [];
                t3.error ? h3.push(t3.error instanceof Error && "AbortError" === t3.error.name ? "timeout" : t3.error instanceof Error ? kh : "unknown_error") : 200 !== t3.statusCode && h3.push("api_error_" + t3.statusCode), s3.errorsWhileComputingFlags && h3.push("errors_while_computing_flags");
                var u2 = !(null == (r3 = s3.quotaLimited) || !r3.includes("feature_flags"));
                u2 && h3.push("quota_limited"), this.ei({ [Rr]: h3 }), u2 ? this.I.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : e2.disable_flags || this.hd(s3, o3, { partialResponse: n2 }), l2();
              }
            } else l2();
          })).catch(h2);
        } catch (t3) {
          h2(t3);
        }
      }
    }
    zh() {
      return Kn(this.Hh, 3);
    }
    fd(t2) {
      this.Hh = Jn(t2, this.Hh, 3, (() => this.I.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")));
    }
    getFeatureFlag(t2, i2) {
      var e2;
      if (void 0 === i2 && (i2 = {}), !i2.fresh || this.jh) if (this.Lh || this.getFlags() && this.getFlags().length > 0) {
        if (!this.od()) {
          var r2 = this.getFeatureFlagResult(t2, i2);
          return null !== (e2 = null == r2 ? void 0 : r2.variant) && void 0 !== e2 ? e2 : null == r2 ? void 0 : r2.enabled;
        }
      } else this.I.warn('getFeatureFlag for key "' + t2 + Sh);
    }
    getFeatureFlagDetails(t2) {
      return this.getFlagsWithDetails()[t2];
    }
    getFeatureFlagPayload(t2) {
      var i2 = this.getFeatureFlagResult(t2, { send_event: false });
      return null == i2 ? void 0 : i2.payload;
    }
    getFeatureFlagResult(t2, i2) {
      if (void 0 === i2 && (i2 = {}), !i2.fresh || this.jh) if (this.Lh || this.getFlags() && this.getFlags().length > 0) {
        if (!this.od()) {
          var e2, r2 = this.getFlagVariants(), s2 = t2 in r2, n2 = r2[t2], o2 = this.getFlagPayloads()[t2], a2 = String(n2), l2 = this.sd(fr) || void 0, h2 = this.sd(Cr) || void 0, u2 = this.sd($r) || {};
          if (this.vn.deduplicateCallsPerSession) {
            var d2, v2 = null == (d2 = this.Os) ? void 0 : d2.session.sessionId, c2 = this.sd(Pr);
            v2 && v2 !== c2 && (u2 = {}, e2 = v2);
          }
          if (i2.send_event || !("send_event" in i2)) if (t2 in u2 && u2[t2].includes(a2)) e2 && this.ei({ [$r]: u2, [Pr]: e2 });
          else {
            var f2, p2, g2, y2, b2, w2, x2, E2, S2, k2, T2, P2;
            H(u2[t2]) ? u2[t2].push(a2) : u2[t2] = [a2], this.ei(_({ [$r]: u2 }, e2 ? { [Pr]: e2 } : {}));
            var R2 = this.getFeatureFlagDetails(t2), C2 = [...null !== (f2 = this.sd(Rr)) && void 0 !== f2 ? f2 : []];
            K(n2) && C2.push("flag_missing");
            var O2 = { $feature_flag: t2, $feature_flag_response: n2, $feature_flag_payload: null != o2 ? o2 : null, $feature_flag_request_id: l2, $feature_flag_evaluated_at: h2, $feature_flag_bootstrapped_response: null !== (p2 = null == (g2 = this.vn.bootstrap) || null == (g2 = g2.featureFlags) ? void 0 : g2[t2]) && void 0 !== p2 ? p2 : null, $feature_flag_bootstrapped_payload: null !== (y2 = null == (b2 = this.vn.bootstrap) || null == (b2 = b2.featureFlagPayloads) ? void 0 : b2[t2]) && void 0 !== y2 ? y2 : null, $used_bootstrap_value: !this.jh };
            K(null == R2 || null == (w2 = R2.metadata) ? void 0 : w2.has_experiment) || (O2.$feature_flag_has_experiment = R2.metadata.has_experiment), K(null == R2 || null == (x2 = R2.metadata) ? void 0 : x2.version) || (O2.$feature_flag_version = R2.metadata.version);
            var I2, A2 = null !== (E2 = null == R2 || null == (S2 = R2.reason) ? void 0 : S2.description) && void 0 !== E2 ? E2 : null == R2 || null == (k2 = R2.reason) ? void 0 : k2.code;
            A2 && (O2.$feature_flag_reason = A2), null != R2 && null != (T2 = R2.metadata) && T2.id && (O2.$feature_flag_id = R2.metadata.id), K(null == R2 ? void 0 : R2.original_variant) && K(null == R2 ? void 0 : R2.original_enabled) || (O2.$feature_flag_original_response = K(R2.original_variant) ? R2.original_enabled : R2.original_variant), null != R2 && null != (P2 = R2.metadata) && P2.original_payload && (O2.$feature_flag_original_payload = null == R2 || null == (I2 = R2.metadata) ? void 0 : I2.original_payload), C2.length && (O2.$feature_flag_error = C2.join(",")), this.pd(O2);
          }
          else e2 && this.ei({ [$r]: u2, [Pr]: e2 });
          if (s2) return { key: t2, enabled: !!n2, variant: "string" == typeof n2 ? n2 : void 0, payload: m(o2) };
        }
      } else this.I.warn('getFeatureFlagResult for key "' + t2 + Sh);
    }
    pd(t2) {
      try {
        var i2;
        null == (i2 = this.Os) || i2.capture("$feature_flag_called", t2).catch(((t3) => {
          this.I.error("Failed to capture feature flag call", t3);
        }));
      } catch (t3) {
        this.I.error("Failed to capture feature flag call", t3);
      }
    }
    getRemoteConfigPayload(t2, i2) {
      this.gd(t2, i2);
    }
    gd(t2, i2) {
      var e2 = this;
      return p((function* () {
        var r2 = e2.Os;
        if (r2) {
          var s2 = { distinct_id: r2.distinctId, token: r2.projectToken, person_properties: { $lib: r2.library.name, $lib_version: r2.library.version } }, n2 = e2.ld();
          n2.length && (s2.evaluation_contexts = n2);
          var o2, a2 = e2.ud();
          K(a2) || (s2.flag_keys = a2);
          try {
            var l2, h2 = null == (l2 = (yield r2.sendRequest("/flags/?v=2", { target: "flags", method: "POST", body: s2, compression: e2.vn.compression, sentAt: "body", timeoutMs: e2.vn.requestTimeoutMs })).json) ? void 0 : l2.featureFlagPayloads;
            o2 = (null == h2 ? void 0 : h2[t2]) || void 0;
          } catch (t3) {
            return void e2.I.error("Remote config feature flag request failed", t3);
          }
          try {
            i2(o2);
          } catch (t3) {
            e2.I.error("Remote config feature flag callback failed", t3);
          }
        }
      }))();
    }
    isFeatureEnabled(t2, i2) {
      if (void 0 === i2 && (i2 = {}), i2.fresh && !this.jh) return i2.defaultValue;
      if (!(this.Lh || this.getFlags() && this.getFlags().length > 0)) return this.I.warn('isFeatureEnabled for key "' + t2 + Sh), i2.defaultValue;
      var e2 = this.getFeatureFlag(t2, i2);
      return K(e2) ? i2.defaultValue : !!e2;
    }
    addFeatureFlagsHandler(t2) {
      this.featureFlagEventHandlers.push(t2);
    }
    removeFeatureFlagsHandler(t2) {
      this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(((i2) => i2 !== t2));
    }
    receivedFeatureFlags(t2, i2, e2) {
      this.hd(t2, i2, e2);
    }
    hd(t2, i2, e2) {
      if (this.Os) {
        this.Lh = true;
        var r2 = (function(t3, i3, e3, r3, s2, n2) {
          void 0 === i3 && (i3 = {}), void 0 === e3 && (e3 = {}), void 0 === r3 && (r3 = {}), void 0 === n2 && (n2 = xh);
          var o2 = ((t4, i4) => {
            var e4 = t4.flags;
            return e4 ? _({}, t4, { featureFlags: Object.fromEntries(Object.keys(e4).map(((t5) => {
              var i5;
              return [t5, null !== (i5 = e4[t5].variant) && void 0 !== i5 ? i5 : e4[t5].enabled];
            }))), featureFlagPayloads: Object.fromEntries(Object.keys(e4).filter(((t5) => e4[t5].enabled)).filter(((t5) => {
              var i5;
              return null == (i5 = e4[t5].metadata) ? void 0 : i5.payload;
            })).map(((t5) => {
              var i5;
              return [t5, null == (i5 = e4[t5].metadata) ? void 0 : i5.payload];
            }))) }) : (t4.featureFlags && i4.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), t4);
          })(t3, n2), a2 = o2.flags, l2 = o2.featureFlags, h2 = o2.featureFlagPayloads;
          if (l2) {
            var u2 = t3.requestId, d2 = t3.evaluatedAt;
            if (H(l2)) {
              n2.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
              var v2 = {};
              if (l2) for (var c2 = 0; l2.length > c2; c2++) v2[l2[c2]] = true;
              return { [ur]: l2, [hr]: v2, [pr]: false };
            }
            var f2 = l2, p2 = h2, g2 = a2;
            if (null != s2 && s2.partialResponse) f2 = _({}, i3, f2), p2 = _({}, e3, p2), g2 = _({}, r3, g2);
            else if (t3.errorsWhileComputingFlags) if (a2) {
              var m2 = new Set(Object.keys(a2).filter(((t4) => {
                var i4;
                return !(null != (i4 = a2[t4]) && i4.failed);
              })));
              f2 = _({}, i3, Object.fromEntries(Object.entries(f2).filter(((t4) => m2.has(t4[0]))))), p2 = _({}, e3, Object.fromEntries(Object.entries(p2 || {}).filter(((t4) => m2.has(t4[0]))))), g2 = _({}, r3, Object.fromEntries(Object.entries(g2 || {}).filter(((t4) => m2.has(t4[0])))));
            } else f2 = _({}, i3, f2), p2 = _({}, e3, p2), g2 = _({}, r3, g2);
            return _({ [ur]: Object.keys($h(f2)), [hr]: f2 || {}, [cr]: p2 || {}, [vr]: g2 || {}, [pr]: true === t3.minimalFlagCalledEvents }, u2 ? { [fr]: u2 } : {}, d2 ? { [Cr]: d2 } : {});
          }
        })(t2, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), e2, this.I);
        r2 && this.ei(r2), i2 || (this.Bh = false), this.md(i2);
      }
    }
    override(t2, i2) {
      void 0 === i2 && (i2 = false), this.I.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({ flags: t2, suppressWarning: i2 });
    }
    overrideFeatureFlags(t2) {
      this.yd(t2);
    }
    yd(t2) {
      if (this.Os) {
        if (false === t2) return this.ri([_r, gr]), this.md(), void Eh.info("All overrides cleared");
        if (H(t2)) return this.ei({ [_r]: Th(t2) }), this.md(), void Eh.info("Flag overrides set", { flags: t2 });
        if (t2 && "object" == typeof t2 && ("flags" in t2 || "payloads" in t2)) {
          var i2, e2 = t2;
          this.Ph = Boolean(null !== (i2 = e2.suppressWarning) && void 0 !== i2 && i2);
          var r2 = {}, s2 = e2.flags, n2 = e2.payloads;
          return s2 && (r2[_r] = H(s2) ? Th(s2) : s2), n2 && (r2[gr] = n2), Object.keys(r2).length && this.ei(r2), false === s2 && false === n2 ? this.ri([_r, gr]) : false === s2 ? this.ri(_r) : false === n2 && this.ri(gr), this.md(), false === s2 ? Eh.info("Flag overrides cleared") : s2 && Eh.info("Flag overrides set", { flags: s2 }), void (false === n2 ? Eh.info("Payload overrides cleared") : n2 && Eh.info("Payload overrides set", { payloads: n2 }));
        }
        if (t2 && "object" == typeof t2) return this.ei({ [_r]: t2 }), this.md(), void Eh.info("Flag overrides set", { flags: t2 });
        this.I.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: t2 });
      } else this.I.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready");
    }
    onFeatureFlags(t2) {
      if (this.addFeatureFlagsHandler(t2), this.Lh) {
        var i2 = this.bd(), e2 = i2.flags, r2 = i2.flagVariants;
        try {
          t2(e2, r2);
        } catch (t3) {
          this.I.error("Error while running feature flags callback", t3);
        }
      }
      return () => this.removeFeatureFlagsHandler(t2);
    }
    updateEarlyAccessFeatureEnrollment(t2, i2, e2) {
      var r2 = (this.sd(dr) || []).find(((i3) => i3.flagKey === t2)), s2 = { ["$feature_enrollment/" + t2]: i2 }, n2 = { $feature_flag: t2, $feature_enrollment: i2, $set: s2 };
      r2 && (n2.$early_access_feature_name = r2.name), e2 && (n2.$feature_enrollment_stage = e2);
      var o2 = _({}, this.getFlagVariants(), { [t2]: i2 });
      this.ei({ [ur]: Object.keys($h(o2)), [hr]: o2, [mr]: _({}, this.sd(mr) || {}, s2) }), this.md();
      try {
        var a2;
        null == (a2 = this.Os) || a2.capture("$feature_enrollment_update", n2).catch(((t3) => {
          this.I.error("Failed to capture early access feature enrollment", t3);
        }));
      } catch (t3) {
        this.I.error("Failed to capture early access feature enrollment", t3);
      }
    }
    getEarlyAccessFeatures(t2, i2, e2) {
      void 0 === i2 && (i2 = false);
      var r2 = this.sd(dr);
      !r2 || i2 ? this._d(t2, e2) : t2(r2);
    }
    _d(t2, i2) {
      var e2 = this;
      return p((function* () {
        var r2 = e2.Os;
        if (r2) {
          var s2, n2 = i2 ? "&" + i2.map(((t3) => "stage=" + t3)).join("&") : "";
          try {
            var o2 = yield r2.sendRequest("/api/early_access_features/?token=" + r2.projectToken + n2, { target: "api", method: "GET", sentAt: "query" });
            if (!o2.json) return;
            e2.ei({ [dr]: s2 = o2.json.earlyAccessFeatures });
          } catch (t3) {
            return void e2.I.error("Early access feature request failed", t3);
          }
          try {
            t2(s2);
          } catch (t3) {
            e2.I.error("Early access feature callback failed", t3);
          }
        }
      }))();
    }
    bd() {
      var t2 = this.getFlags(), i2 = this.getFlagVariants();
      return { flags: t2.filter(((t3) => i2[t3])), flagVariants: Object.keys(i2).filter(((t3) => i2[t3])).reduce(((t3, e2) => (t3[e2] = i2[e2], t3)), {}) };
    }
    md(t2) {
      this.Xh();
      var i2 = this.bd(), e2 = i2.flags, r2 = i2.flagVariants;
      this.featureFlagEventHandlers.forEach(((i3) => {
        try {
          i3(e2, r2, { errorsLoading: t2 });
        } catch (t3) {
          this.I.error("Error while running feature flags callback", t3);
        }
      }));
    }
    setPersonPropertiesForFlags(t2, i2) {
      void 0 === i2 && (i2 = true), this.wd(t2, i2);
    }
    wd(t2, i2) {
      void 0 === i2 && (i2 = true);
      var e2 = this.sd(mr) || {}, r2 = (null == t2 ? void 0 : t2.$set) || (null != t2 && t2.$set_once ? {} : t2), s2 = null == t2 ? void 0 : t2.$set_once, n2 = {};
      if (s2) for (var o2 in s2) ({}).hasOwnProperty.call(s2, o2) && (o2 in e2 || (n2[o2] = s2[o2]));
      this.ei({ [mr]: _({}, e2, n2, r2) }), i2 && this.reloadFeatureFlags();
    }
    unsetPersonPropertiesForFlags(t2, i2) {
      void 0 === i2 && (i2 = true);
      var e2 = _({}, this.sd(mr) || {});
      t2.forEach(((t3) => {
        delete e2[t3];
      })), this.ei({ [mr]: e2 }), i2 && this.reloadFeatureFlags();
    }
    resetPersonPropertiesForFlags(t2) {
      void 0 === t2 && (t2 = true), this.ri(mr), t2 && this.reloadFeatureFlags();
    }
    setGroupPropertiesForFlags(t2, i2) {
      void 0 === i2 && (i2 = true);
      var e2 = this.sd(yr) || {}, r2 = _({}, e2);
      for (var s2 of Object.keys(t2)) r2[s2] = _({}, e2[s2], t2[s2]);
      this.ei({ [yr]: r2 }), i2 && this.reloadFeatureFlags();
    }
    resetGroupPropertiesForFlags(t2) {
      if (t2) {
        var i2 = this.sd(yr) || {};
        this.ei({ [yr]: _({}, i2, { [t2]: {} }) });
      } else this.ri(yr);
    }
    reset() {
      this.$h++, this.qh = false, this.Ah = {}, this.Fh = {}, this.Lh = false, this.Nh = false, this.jh = false, this.$anon_distinct_id = void 0, this.nd(), this.Ph = false, this.Hh = 0;
    }
  } };
  var qh = { sessionRecording: class {
    get vn() {
      return this._instance.config;
    }
    get yo() {
      return this._instance.persistence;
    }
    get started() {
      var t2;
      return !(null == (t2 = this.kd) || !t2.isStarted);
    }
    get status() {
      var t2, i2;
      return this.Sd === Yl || this.Sd === Ql ? this.Sd : null !== (t2 = null == (i2 = this.kd) ? void 0 : i2.status) && void 0 !== t2 ? t2 : this.Sd;
    }
    constructor(i2) {
      if (this._forceAllowLocalhostNetworkCapture = false, this.Sd = Kl, this.xd = void 0, this.Cd = false, this.Dt = (() => {
        var i3;
        if (null == r || !r.visibilityState || "visible" === r.visibilityState) return true;
        var e2 = null == t || null == (i3 = t.performance) || null == i3.getEntriesByType ? void 0 : i3.getEntriesByType("visibility-state");
        return !(null != e2 && e2.length) || e2.some(((t2) => "visible" === t2.name));
      })(), this.$t = () => {
        var t2;
        "visible" === (null == r ? void 0 : r.visibilityState) && (this.Dt = true, null == (t2 = this.kd) || null == t2.setDocumentWasEverVisible || t2.setDocumentWasEverVisible(true));
      }, this._instance = i2, !this._instance.sessionManager) throw Zl.error("started without valid sessionManager"), new Error(Xl + " started without valid sessionManager. This is a bug.");
      if (this.vn.cookieless_mode === Vr) throw new Error(Xl + ' cannot be used with cookieless_mode="always"');
      null != r && r.addEventListener && us(r, "visibilitychange", this.$t);
    }
    initialize() {
      this.startIfEnabledOrStop();
    }
    dispose() {
      this.Cd = true, null == r || null == r.removeEventListener || r.removeEventListener("visibilitychange", this.$t), this.stopRecording();
    }
    get Td() {
      var i2, e2 = !(null == (i2 = this._instance.get_property(ir)) || !i2.enabled), r2 = !this.vn.disable_session_recording, s2 = this.vn.disable_session_recording || this._instance.consent.isOptedOut();
      return t && e2 && r2 && !s2;
    }
    startIfEnabledOrStop(t2) {
      var i2;
      if (!(this.Cd || this.Td && null != (i2 = this.kd) && i2.isStarted)) {
        var e2 = !K(Object.assign) && !K(Array.from);
        this.Td && e2 ? (this.Md(t2), Zl.info("starting")) : (this.Sd = Kl, this.stopRecording());
      }
    }
    Md(t2) {
      var i2, e2, r2;
      this.Td && (this.Sd !== Yl && this.Sd !== Ql && (this.Sd = Jl), null != v && null != (i2 = v.__PosthogExtensions__) && null != (i2 = i2.rrweb) && i2.record && null != (e2 = v.__PosthogExtensions__) && e2.initSessionRecording ? this.Ed(t2) : null == (r2 = v.__PosthogExtensions__) || null == r2.loadExternalDependency || r2.loadExternalDependency(this._instance, this.Id, ((i3) => {
        if (i3) return this._instance.register_for_session({ [zr]: true }), Zl.error("could not load recorder", i3);
        this.Ed(t2);
      })));
    }
    stopRecording() {
      var t2, i2;
      null == (t2 = this.xd) || t2.call(this), this.xd = void 0, null == (i2 = this.kd) || i2.stop();
    }
    Rd() {
      var t2, i2;
      null == (t2 = this.xd) || t2.call(this), this.xd = void 0, null == (i2 = this.kd) || i2.discard();
    }
    Pd() {
      var t2, i2;
      null == (t2 = this.yo) || t2.unregister(lr), null == (i2 = this.yo) || i2.unregister(er);
    }
    Ad(t2, i2) {
      if (X(t2)) return null;
      var e2, r2 = Z(t2) ? t2 : parseFloat(t2);
      return "number" != typeof (e2 = r2) || !Number.isFinite(e2) || 0 > e2 || e2 > 1 ? (Zl.warn(i2 + " must be between 0 and 1. Ignoring invalid value:", t2), null) : r2;
    }
    Fd(t2) {
      if (this.yo) {
        var i2, e2, r2 = this.yo, s2 = () => {
          var i3, e3 = false === t2.sessionRecording ? void 0 : t2.sessionRecording, s3 = this.Ad(null == (i3 = this.vn.session_recording) ? void 0 : i3.sampleRate, "session_recording.sampleRate"), n2 = this.Ad(null == e3 ? void 0 : e3.sampleRate, "remote config sampleRate"), o2 = null != s3 ? s3 : n2;
          X(o2) && this.Pd();
          var a2 = null == e3 ? void 0 : e3.minimumDurationMilliseconds;
          r2.register({ [ir]: _({ cache_timestamp: Date.now(), enabled: !!e3 }, e3, { networkPayloadCapture: _({ capturePerformance: t2.capturePerformance }, null == e3 ? void 0 : e3.networkPayloadCapture), canvasRecording: { enabled: null == e3 ? void 0 : e3.recordCanvas, fps: null == e3 ? void 0 : e3.canvasFps, quality: null == e3 ? void 0 : e3.canvasQuality }, sampleRate: o2, minimumDurationMilliseconds: K(a2) ? null : a2, endpoint: null == e3 ? void 0 : e3.endpoint, triggerMatchType: null == e3 ? void 0 : e3.triggerMatchType, masking: null == e3 ? void 0 : e3.masking, urlTriggers: null == e3 ? void 0 : e3.urlTriggers, version: null == e3 ? void 0 : e3.version, triggerGroups: null == e3 ? void 0 : e3.triggerGroups }) });
        };
        s2(), null == (i2 = this.xd) || i2.call(this), this.xd = null == (e2 = this._instance.sessionManager) ? void 0 : e2.onSessionId(s2);
      }
    }
    onRemoteConfig(t2) {
      var i2 = t2.ok ? t2.config : void 0;
      return i2 && "sessionRecording" in i2 ? false === i2.sessionRecording ? (this.Fd(i2), void this.Rd()) : (this.Fd(i2), void this.startIfEnabledOrStop()) : (this.Sd === Yl && (this.Sd = Ql, Zl.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop());
    }
    log(t2, i2) {
      var e2;
      void 0 === i2 && (i2 = "log"), null != (e2 = this.kd) && e2.log ? this.kd.log(t2, i2) : Zl.warn("log called before recorder was ready");
    }
    get Id() {
      var t2, i2, e2 = null == (t2 = this._instance) || null == (t2 = t2.persistence) ? void 0 : t2.get_property(ir);
      return (null == e2 || null == (i2 = e2.scriptConfig) ? void 0 : i2.script) || "lazy-recorder";
    }
    Od() {
      var t2, i2 = this._instance.get_property(ir);
      if (!i2) return false;
      try {
        t2 = "object" == typeof i2 ? i2 : JSON.parse(i2);
      } catch (t3) {
        return Zl.warn("persisted remote config for session recording is invalid and will be ignored", t3), false;
      }
      return !X(t2.cache_timestamp) && 36e5 >= Date.now() - t2.cache_timestamp;
    }
    Ed(t2) {
      var i2, e2, r2;
      if (!this.Cd) {
        if (null == (i2 = v.__PosthogExtensions__) || !i2.initSessionRecording) return Zl.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ [zr]: true });
        var s2;
        if (this.kd || (this.kd = null == (s2 = v.__PosthogExtensions__) ? void 0 : s2.initSessionRecording(this._instance, this.Dt), this.kd._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.Od()) {
          if (this.Sd === Ql || this.Sd === Yl) return;
          return this.Sd = Yl, Zl.info("persisted remote config is stale, requesting fresh config before starting"), void new No(this._instance).load();
        }
        this.Sd = Jl, null == (e2 = (r2 = this.kd).setDocumentWasEverVisible) || e2.call(r2, this.Dt), this.kd.start(t2);
      }
    }
    onRRwebEmit(t2) {
      var i2;
      null == (i2 = this.kd) || null == i2.onRRwebEmit || i2.onRRwebEmit(t2);
    }
    overrideLinkedFlag() {
      var t2, i2;
      this.kd || null == (i2 = this.yo) || i2.register({ [sr]: true }), null == (t2 = this.kd) || t2.overrideLinkedFlag();
    }
    overrideSampling() {
      var t2, i2;
      this.kd || null == (i2 = this.yo) || i2.register({ [rr]: true }), null == (t2 = this.kd) || t2.overrideSampling();
    }
    overrideTrigger(t2) {
      var i2, e2;
      this.kd || null == (e2 = this.yo) || e2.register({ ["url" === t2 ? nr : or]: true }), null == (i2 = this.kd) || i2.overrideTrigger(t2);
    }
    get sdkDebugProperties() {
      var t2;
      return (null == (t2 = this.kd) ? void 0 : t2.sdkDebugProperties) || { $recording_status: this.status };
    }
    tryAddCustomEvent(t2, i2) {
      var e2;
      return !(null == (e2 = this.kd) || !e2.tryAddCustomEvent(t2, i2));
    }
  } };
  var Hh = { autocapture: class extends Dl {
    constructor(t2) {
      super(new Nl(t2)), this.instance = t2;
    }
  }, historyAutocapture: class {
    constructor(t2) {
      this._instance = t2, this.Ld = this.Dd();
    }
    initialize() {
      this.startIfEnabled();
    }
    get isEnabled() {
      var t2 = this.$d();
      return !!(t2.path || t2.search || this.Nd(t2));
    }
    startIfEnabled() {
      this.isEnabled && (Ie.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
    }
    startIfEnabledOrStop() {
      this.stop(), this.Ld = this.Dd(), this.startIfEnabled();
    }
    stop() {
      this.qd && this.qd(), this.qd = void 0, this.jd && this.jd(), this.jd = void 0, Ie.info("History API monitoring stopped");
    }
    monitorHistoryChanges() {
      t && t.history && (this.Bd("pushState"), this.Bd("replaceState"), this.Hd(), this.Nd() && this.zd());
    }
    Bd(i2) {
      var e2;
      if (t && (null == (e2 = t.history[i2]) || !e2.__posthog_wrapped__)) {
        var r2 = this;
        Bl(t.history, i2, ((t2) => function(e3, s2, n2) {
          t2.call(this, e3, s2, n2), r2.Ud(i2);
        }));
      }
    }
    Dd() {
      var i2 = null == t ? void 0 : t.location;
      if (null != i2 && i2.pathname) return { pathname: i2.pathname, search: i2.search, hash: i2.hash };
    }
    $d() {
      var t2 = this._instance.config.capture_pageview;
      return "history_change" === t2 ? { path: true } : W(t2) ? t2 : {};
    }
    Nd(t2) {
      return void 0 === t2 && (t2 = this.$d()), !!t2.hash && !this._instance.config.disable_capture_url_hashes;
    }
    Wd(t2) {
      var i2 = this.$d(), e2 = this.Ld;
      return !(!e2 || !(i2.path && t2.pathname !== e2.pathname || i2.search && t2.search !== e2.search || this.Nd(i2) && t2.hash !== e2.hash));
    }
    Ud(t2) {
      try {
        var i2 = this.Dd();
        if (!i2) return;
        this.Wd(i2) && this._instance.capture(Qr, { navigation_type: t2 }), this.Ld = i2;
      } catch (i3) {
        Ie.error("Error capturing " + t2 + " pageview", i3);
      }
    }
    Hd() {
      if (!this.qd) {
        var i2 = () => {
          this.Ud("popstate");
        };
        us(t, "popstate", i2), this.qd = () => {
          t && t.removeEventListener("popstate", i2);
        };
      }
    }
    zd() {
      if (!this.jd) {
        var i2 = () => {
          this.Ud("hashchange");
        };
        us(t, "hashchange", i2), this.jd = () => {
          t && t.removeEventListener("hashchange", i2);
        };
      }
    }
  }, heatmaps: class {
    get vn() {
      return this.instance.config;
    }
    constructor(t2) {
      var i2;
      this.Vd = false, this.Ts = false, this.Gd = null, this.instance = t2, this.Vd = !(null == (i2 = this.instance.persistence) || !i2.props[We]), this.rageclicks = new Cl(t2.config.rageclick);
    }
    initialize() {
      this.startIfEnabled();
    }
    get flushIntervalMilliseconds() {
      var t2 = 5e3;
      return W(this.vn.capture_heatmaps) && this.vn.capture_heatmaps.flush_interval_milliseconds && (t2 = this.vn.capture_heatmaps.flush_interval_milliseconds), t2;
    }
    get isEnabled() {
      return X(this.vn.capture_heatmaps) ? X(this.vn.enable_heatmaps) ? this.Vd : this.vn.enable_heatmaps : false !== this.vn.capture_heatmaps;
    }
    startIfEnabled() {
      if (this.isEnabled) {
        if (this.Ts) return;
        th.info("starting..."), this.Zd(), this.$t();
      } else {
        var t2;
        clearInterval(null !== (t2 = this.Gd) && void 0 !== t2 ? t2 : void 0), this.Qd(), this.getAndClearBuffer();
      }
    }
    onRemoteConfig(t2) {
      if (t2.ok) {
        var i2 = t2.config;
        if ("heatmaps" in i2) {
          var e2 = !!i2.heatmaps;
          this.instance.persistence && this.instance.persistence.register({ [We]: e2 }), this.Vd = e2, this.startIfEnabled();
        }
      }
    }
    getAndClearBuffer() {
      var t2 = this.At;
      return this.At = void 0, t2;
    }
    Jd(t2) {
      ih(t2.originalEvent) && this.Qi(t2.originalEvent, "deadclick");
    }
    $t() {
      this.Gd && clearInterval(this.Gd), this.Gd = "visible" === (null == r ? void 0 : r.visibilityState) ? setInterval(this.oo.bind(this), this.flushIntervalMilliseconds) : null;
    }
    Zd() {
      t && r && (this.Kd = this.oo.bind(this), us(t, Yr, this.Kd), this.Yd = (i2) => this.Qi(i2 || (null == t ? void 0 : t.event)), us(r, "click", this.Yd, { capture: true }), this.Xd = (i2) => this.tv(i2 || (null == t ? void 0 : t.event)), us(r, "mousemove", this.Xd, { capture: true }), this.ev = new An(this.instance, On, this.Jd.bind(this)), this.ev.startIfEnabledOrStop(), this.iv = this.$t.bind(this), us(r, Jr, this.iv), this.Ts = true);
    }
    Qd() {
      var i2;
      t && r && (this.Kd && t.removeEventListener(Yr, this.Kd), this.Yd && r.removeEventListener("click", this.Yd, { capture: true }), this.Xd && r.removeEventListener("mousemove", this.Xd, { capture: true }), this.iv && r.removeEventListener(Jr, this.iv), clearTimeout(this.rv), null == (i2 = this.ev) || i2.stop(), this.Ts = false);
    }
    nv(i2, e2) {
      var r2 = this.instance.scrollManager.scrollY(), s2 = this.instance.scrollManager.scrollX(), n2 = this.instance.scrollManager.scrollElement(), o2 = (function(i3, e3, r3) {
        for (var s3 = i3; s3 && Ws(s3) && !Gs(s3, "body"); ) {
          if (s3 === r3) return false;
          var n3 = void 0;
          try {
            var o3, a2, l2;
            n3 = null == (o3 = null !== (a2 = null == (l2 = s3.ownerDocument) ? void 0 : l2.defaultView) && void 0 !== a2 ? a2 : t) ? void 0 : o3.getComputedStyle(s3).position;
          } catch (t2) {
            return false;
          }
          if (N(e3, n3)) return true;
          s3 = on(s3);
        }
        return false;
      })(rn(i2), ["fixed", "sticky"], n2);
      return { x: i2.clientX + (o2 ? 0 : s2), y: i2.clientY + (o2 ? 0 : r2), target_fixed: o2, type: e2 };
    }
    Qi(t2, i2) {
      var e2;
      if (void 0 === i2 && (i2 = "click"), !Vs(t2.target) && ih(t2)) {
        var r2 = this.nv(t2, i2);
        null != (e2 = this.rageclicks) && e2.isRageClick(t2.clientX, t2.clientY, (/* @__PURE__ */ new Date()).getTime()) && cn(rn(t2), this.instance.config.rageclick) && this.fs(_({}, r2, { type: "rageclick" })), this.fs(r2);
      }
    }
    tv(t2) {
      !Vs(t2.target) && ih(t2) && (clearTimeout(this.rv), this.rv = setTimeout((() => {
        this.fs(this.nv(t2, "mousemove"));
      }), 500));
    }
    fs(i2) {
      if (t) {
        var e2 = this.vn.disable_capture_url_hashes ? xi(t.location.href) : t.location.href, r2 = this.vn.custom_personal_data_properties, s2 = this.vn.mask_personal_data_properties ? [...Qn, ...r2 || []] : [], n2 = Wn(e2, s2, Zn);
        this.At = this.At || {}, this.At[n2] || (this.At[n2] = []), this.At[n2].push(i2);
      }
    }
    oo() {
      this.At && !G(this.At) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
    }
  }, deadClicksAutocapture: An, webVitalsAutocapture: class {
    constructor(t2) {
      var i2;
      this.Vd = false, this.Ts = false, this.At = { navigationKey: void 0, url: void 0, metrics: [], firstMetricTimestamp: void 0 }, this.sv = () => {
        clearTimeout(this.av), this.av = void 0, 0 !== this.At.metrics.length && (this._instance.capture("$web_vitals", _({ $current_url: this.At.url }, this.At.metrics.reduce(((t3, i3) => _({}, t3, { ["$web_vitals_" + i3.name + "_event"]: _({}, i3), ["$web_vitals_" + i3.name + "_value"]: i3.value })), {}))), this.At = { navigationKey: void 0, url: void 0, metrics: [], firstMetricTimestamp: void 0 });
      }, this.ov = (t3) => {
        var i3;
        if (this.At = this.At || { navigationKey: void 0, url: void 0, metrics: [], firstMetricTimestamp: void 0 }, X(null == t3 ? void 0 : t3.name) || X(null == t3 ? void 0 : t3.value)) ql.error("Invalid metric received", t3);
        else {
          var e2 = "string" == typeof t3.navigationURL ? t3.navigationURL : void 0, r2 = this.lv(e2);
          if (!K(r2)) {
            var s2 = Z(t3.navigationId) || "string" == typeof t3.navigationId ? "navigation:" + t3.navigationId : "url:" + r2;
            if (!this.uv || this.uv > t3.value) {
              this.At.navigationKey !== s2 && (this.sv(), this.av = setTimeout(this.sv, this.flushToCaptureTimeoutMs)), K(this.At.navigationKey) && (this.At.navigationKey = s2, this.At.url = r2), this.At.firstMetricTimestamp = K(this.At.firstMetricTimestamp) ? Date.now() : this.At.firstMetricTimestamp;
              var n2 = null == (i3 = this._instance.sessionManager) ? void 0 : i3.checkAndGetSessionAndWindowId(true), o2 = _({}, t3, e2 ? { navigationURL: r2 } : {}, { $current_url: r2, timestamp: Date.now() });
              if (delete o2.entries, W(t3.attribution) && this.attributionMetrics.indexOf(t3.name) > -1) {
                var a2 = {};
                for (var l2 of Gl) {
                  var h2 = "url" === l2 && "string" == typeof t3.attribution[l2] ? this.lv(t3.attribution[l2]) : t3.attribution[l2];
                  K(h2) || (a2[l2] = h2);
                }
                o2.attribution = a2;
              } else delete o2.attribution;
              K(n2) || (o2.$session_id = n2.sessionId, o2.$window_id = n2.windowId), this.At.metrics.push(o2), this.At.metrics.length === this.allowedMetrics.length && this.sv();
            } else ql.error("Ignoring metric with value >= " + this.uv, t3);
          }
        }
      }, this.hv = () => {
        if (!this.Ts) {
          var t3, i3, e2, r2, s2 = false, n2 = v.__PosthogExtensions__, o2 = null == n2 ? void 0 : n2.postHogWebVitalsCallbacksByFlavor, a2 = (null == o2 ? void 0 : o2[this.dv]) || ("web-vitals" === this.dv && K(o2) ? null == n2 ? void 0 : n2.postHogWebVitalsCallbacks : void 0);
          if (!K(a2)) {
            var l2 = a2.withoutAttribution, h2 = this.attributionMetrics;
            s2 = !K(l2), t3 = h2.indexOf("LCP") > -1 ? a2.onLCP : (null == l2 ? void 0 : l2.onLCP) || a2.onLCP, i3 = h2.indexOf("CLS") > -1 ? a2.onCLS : (null == l2 ? void 0 : l2.onCLS) || a2.onCLS, e2 = h2.indexOf("FCP") > -1 ? a2.onFCP : (null == l2 ? void 0 : l2.onFCP) || a2.onFCP, r2 = h2.indexOf("INP") > -1 ? a2.onINP : (null == l2 ? void 0 : l2.onINP) || a2.onINP;
          }
          if (t3 && i3 && e2 && r2) {
            var u2 = { reportSoftNavs: this.useSoftNavs }, d2 = s2 && this.attributionMetrics.indexOf("INP") > -1 ? _({}, u2, { includeProcessedEventEntries: false }) : u2;
            this.allowedMetrics.indexOf("LCP") > -1 && t3(this.ov.bind(this), u2), this.allowedMetrics.indexOf("CLS") > -1 && i3(this.ov.bind(this), u2), this.allowedMetrics.indexOf("FCP") > -1 && e2(this.ov.bind(this), u2), this.allowedMetrics.indexOf("INP") > -1 && r2(this.ov.bind(this), d2), this.Ts = true;
          } else ql.error("web vitals callbacks not loaded - not starting");
        }
      }, this._instance = t2, this.Vd = !(null == (i2 = this._instance.persistence) || !i2.props[Ye]), this.startIfEnabled();
    }
    get vv() {
      return this._instance.config.capture_performance;
    }
    get allowedMetrics() {
      var t2, i2, e2 = W(this.vv) ? null == (t2 = this.vv) ? void 0 : t2.web_vitals_allowed_metrics : void 0;
      return X(e2) ? (null == (i2 = this._instance.persistence) ? void 0 : i2.props[tr]) || Vl : e2;
    }
    get flushToCaptureTimeoutMs() {
      return (W(this.vv) ? this.vv.web_vitals_delayed_flush_ms : void 0) || 5e3;
    }
    get attributionMetrics() {
      var t2 = W(this.vv) ? this.vv.web_vitals_attribution : void 0;
      return it(t2) ? t2 ? Vl : [] : H(t2) ? t2 : Wl;
    }
    get useAttribution() {
      return this.attributionMetrics.length > 0;
    }
    get useSoftNavs() {
      var t2 = W(this.vv) ? this.vv.__preview_web_vitals_soft_navs : void 0;
      return null != t2 && t2;
    }
    get uv() {
      var t2 = W(this.vv) && Z(this.vv.__web_vitals_max_value) ? this.vv.__web_vitals_max_value : Hl;
      return t2 > 0 && 6e4 >= t2 ? Hl : t2;
    }
    get isEnabled() {
      var t2 = null == s ? void 0 : s.protocol;
      if ("http:" !== t2 && "https:" !== t2) return ql.info("Web Vitals are disabled on non-http/https protocols"), false;
      var i2 = W(this.vv) ? this.vv.web_vitals : it(this.vv) ? this.vv : void 0;
      return it(i2) ? i2 : this.Vd;
    }
    startIfEnabled() {
      this.isEnabled && !this.Ts && (ql.info("enabled, starting..."), this.Zs(this.hv));
    }
    onRemoteConfig(t2) {
      if (t2.ok) {
        var i2 = t2.config;
        if ("capturePerformance" in i2) {
          var e2 = W(i2.capturePerformance) && !!i2.capturePerformance.web_vitals, r2 = W(i2.capturePerformance) ? i2.capturePerformance.web_vitals_allowed_metrics : void 0;
          this._instance.persistence && (this._instance.persistence.register({ [Ye]: e2 }), this._instance.persistence.register({ [tr]: r2 })), this.Vd = e2, this.startIfEnabled();
        }
      }
    }
    get dv() {
      return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
    }
    Zs(t2) {
      var i2 = v.__PosthogExtensions__, e2 = this.dv, r2 = null == i2 ? void 0 : i2.postHogWebVitalsCallbacksByFlavor;
      null != r2 && r2[e2] || "web-vitals" === e2 && K(r2) && null != i2 && i2.postHogWebVitalsCallbacks ? t2() : null == i2 || null == i2.loadExternalDependency || i2.loadExternalDependency(this._instance, e2, ((i3) => {
        i3 ? ql.error("failed to load script", i3) : t2();
      }));
    }
    lv(i2) {
      var e2 = i2 || (null == t ? void 0 : t.location.href);
      if (e2) {
        var r2 = this._instance.config.disable_capture_url_hashes ? xi(e2) : e2, s2 = this._instance.config.custom_personal_data_properties, n2 = this._instance.config.mask_personal_data_properties ? [...Qn, ...s2 || []] : [];
        return Wn(r2, n2, Zn);
      }
      ql.error("Could not determine current URL");
    }
  } };
  var Vh = { exceptionObserver: class {
    constructor(i2) {
      var e2;
      this.hv = () => {
        var i3;
        if (t && this.isEnabled && null != (i3 = v.__PosthogExtensions__) && i3.errorWrappingFunctions) {
          var e3 = v.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r2 = v.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, s2 = v.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
          try {
            !this.fv && this.vn.capture_unhandled_errors && (this.fv = e3(this.captureException.bind(this))), !this.pv && this.vn.capture_unhandled_rejections && (this.pv = r2(this.captureException.bind(this))), !this.gv && this.vn.capture_console_errors && (this.gv = s2(this.captureException.bind(this)));
          } catch (t2) {
            Ll.error("failed to start", t2), this.mv();
          }
        }
      }, this._instance = i2, this.yv = !(null == (e2 = this._instance.persistence) || !e2.props[Ge]), this.de = new ft(_({}, (function(t2) {
        var i3, e3, r2, s2;
        return void 0 === t2 && (t2 = {}), { refillRate: null !== (i3 = null !== (e3 = t2.exceptionRateLimiterRefillRate) && void 0 !== e3 ? e3 : t2.__exceptionRateLimiterRefillRate) && void 0 !== i3 ? i3 : 1, bucketSize: null !== (r2 = null !== (s2 = t2.exceptionRateLimiterBucketSize) && void 0 !== s2 ? s2 : t2.__exceptionRateLimiterBucketSize) && void 0 !== r2 ? r2 : 10 };
      })(this._instance.config.error_tracking), { refillInterval: 1e4, I: Ll })), this.vn = this.bv(), this.startIfEnabledOrStop();
    }
    bv() {
      var t2 = this._instance.config.capture_exceptions, i2 = { capture_unhandled_errors: false, capture_unhandled_rejections: false, capture_console_errors: false };
      return W(t2) ? i2 = _({}, i2, t2) : (K(t2) ? this.yv : t2) && (i2 = _({}, i2, { capture_unhandled_errors: true, capture_unhandled_rejections: true })), i2;
    }
    get isEnabled() {
      return this.vn.capture_console_errors || this.vn.capture_unhandled_errors || this.vn.capture_unhandled_rejections;
    }
    startIfEnabledOrStop() {
      this.isEnabled ? (Ll.info("enabled"), this.mv(), this.Zs(this.hv)) : this.mv();
    }
    Zs(t2) {
      var i2, e2;
      null != (i2 = v.__PosthogExtensions__) && i2.errorWrappingFunctions ? t2() : null == (e2 = v.__PosthogExtensions__) || null == e2.loadExternalDependency || e2.loadExternalDependency(this._instance, "exception-autocapture", ((i3) => {
        if (i3) return Ll.error("failed to load script", i3);
        t2();
      }));
    }
    mv() {
      var t2, i2, e2;
      null == (t2 = this.fv) || t2.call(this), this.fv = void 0, null == (i2 = this.pv) || i2.call(this), this.pv = void 0, null == (e2 = this.gv) || e2.call(this), this.gv = void 0;
    }
    onRemoteConfig(t2) {
      if (t2.ok) {
        var i2 = t2.config;
        "autocaptureExceptions" in i2 && (this.yv = !!i2.autocaptureExceptions || false, this._instance.persistence && this._instance.persistence.register({ [Ge]: this.yv }), this.vn = this.bv(), this.startIfEnabledOrStop());
      }
    }
    onConfigChange() {
      this.vn = this.bv();
    }
    captureException(t2) {
      var i2, e2, r2, s2 = null !== (i2 = null == t2 || null == (e2 = t2.$exception_list) || null == (e2 = e2[0]) ? void 0 : e2.type) && void 0 !== i2 ? i2 : "Exception";
      this.de.consumeRateLimit(s2) ? Ll.info("Skipping exception capture because of client rate limiting.", { exception: s2 }) : null == (r2 = this._instance.exceptions) || r2.sendExceptionEvent(t2);
    }
  }, exceptions: class {
    constructor(t2) {
      var i2, e2;
      this._v = [], this.wv = new ie([new ce(), new Ee(), new pe(), new fe(), new we(), new be(), new ge(), new xe()], (function(t3) {
        for (var i3 = arguments.length, e3 = new Array(i3 > 1 ? i3 - 1 : 0), r2 = 1; i3 > r2; r2++) e3[r2 - 1] = arguments[r2];
        return function(i4, r3) {
          void 0 === r3 && (r3 = 0);
          for (var s2 = [], n2 = i4.split("\n"), o2 = r3; n2.length > o2; o2++) {
            var a2 = n2[o2];
            if (1024 >= a2.length) {
              var l2 = ve.test(a2) ? a2.replace(ve, "$1") : a2;
              if (!l2.match(/\S*Error: /)) {
                for (var h2 of e3) {
                  var u2 = h2(l2, t3);
                  if (u2) {
                    s2.push(u2);
                    break;
                  }
                }
                if (s2.length >= 50) break;
              }
            }
          }
          return (function(t4) {
            if (!t4.length) return [];
            var i5 = Array.from(t4);
            return i5.reverse(), i5.slice(0, 50).map(((t5) => {
              return _({}, t5, { filename: t5.filename || (e4 = i5, e4[e4.length - 1] || {}).filename, function: t5.function || ee });
              var e4;
            }));
          })(s2);
        };
      })("web:javascript", le, de)), this._instance = t2, this._v = null !== (i2 = null == (e2 = this._instance.persistence) ? void 0 : e2.get_property(Ke)) && void 0 !== i2 ? i2 : [], this.Sv = Pe(this.xv()), this.Cv = new Re(this.Sv);
    }
    onConfigChange() {
      this.Sv = Pe(this.xv()), this.Cv.setConfig(this.Sv);
    }
    onRemoteConfig(t2) {
      var i2, e2, r2;
      if (t2.ok) {
        var s2 = t2.config;
        if ("errorTracking" in s2) {
          var n2 = null !== (i2 = null == (e2 = s2.errorTracking) ? void 0 : e2.suppressionRules) && void 0 !== i2 ? i2 : [], o2 = null == (r2 = s2.errorTracking) ? void 0 : r2.captureExtensionExceptions;
          this._v = n2, this._instance.persistence && this._instance.persistence.register({ [Ke]: this._v, [Je]: o2 });
        }
      }
    }
    get Tv() {
      var t2, i2 = !!this._instance.get_property(Je), e2 = this._instance.config.error_tracking.captureExtensionExceptions;
      return null !== (t2 = null != e2 ? e2 : i2) && void 0 !== t2 && t2;
    }
    buildProperties(t2, i2) {
      return this.wv.buildFromUnknown(t2, { syntheticException: null == i2 ? void 0 : i2.syntheticException, mechanism: { handled: null == i2 ? void 0 : i2.handled } });
    }
    addExceptionStep(t2, i2) {
      if (this.Sv.enabled) try {
        if (!J(t2) || 0 === t2.trim().length) return void Ph.warn("Ignoring exception step because message must be a non-empty string");
        var e2 = (function(t3) {
          if (!t3) return { sanitizedProperties: {}, droppedKeys: [] };
          var i3 = [];
          return { sanitizedProperties: Object.keys(t3).reduce(((e3, r3) => Te.has(r3) ? (i3.push(r3), e3) : (e3[r3] = t3[r3], e3)), {}), droppedKeys: i3 };
        })(this.Mv(i2)), r2 = e2.sanitizedProperties, s2 = e2.droppedKeys;
        s2.length > 0 && Ph.warn("Ignoring reserved exception step fields", { droppedKeys: s2 }), this.Cv.add(_({ [Se]: t2, [ke]: (/* @__PURE__ */ new Date()).toISOString() }, r2));
      } catch (t3) {
        Ph.error("Failed to add exception step. Ignoring breadcrumb.", t3);
      }
    }
    sendExceptionEvent(t2) {
      try {
        var i2 = t2.$exception_list;
        if (this.Ev(i2)) {
          if (this.Iv(i2)) return this.Rv("Exception dropped: matched a suppression rule"), void Ph.info("Skipping exception capture because a suppression rule matched");
          if (!this.Tv && this.Pv(i2)) return this.Rv("Exception dropped: thrown by a browser extension"), void Ph.info("Skipping exception capture because it was thrown by an extension");
          if (!this.Tv && this.Av(i2)) return this.Rv("Exception dropped: thrown by an injected browser script"), void Ph.info("Skipping exception capture because it was thrown by an injected browser script");
          if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.Fv(i2)) return this.Rv("Exception dropped: thrown by the PostHog SDK"), void Ph.info("Skipping exception capture because it was thrown by the PostHog SDK");
        }
        var e2 = this.Sv.enabled && X(t2.$exception_steps) ? this.Ov(t2) : t2, r2 = "string" == typeof (n2 = globalThis._posthogReleaseId) && n2.length > 0 ? n2 : void 0;
        r2 && (e2.$release_id = r2);
        try {
          var s2 = this._instance.capture("$exception", e2, { _noTruncate: true, _batchKey: "exceptionEvent", jl: true });
          return s2 && this.Cv.clear(), s2;
        } catch (t3) {
          return Ph.error("Failed to capture exception event. Dropping this exception.", t3), void this.Cv.clear();
        }
      } catch (t3) {
        return void Ph.error("Failed to process exception event. Ignoring this exception.", t3);
      }
      var n2;
    }
    Ov(t2) {
      try {
        var i2 = this.Cv.getAttachable();
        return 0 === i2.length ? t2 : _({}, t2, { $exception_steps: i2 });
      } catch (i3) {
        return Ph.error("Failed to read buffered exception steps. Capturing exception without steps.", i3), t2;
      }
    }
    Rv(t2) {
      this.Sv.enabled && this.Cv.add({ [Se]: t2, [ke]: (/* @__PURE__ */ new Date()).toISOString() });
    }
    Mv(t2) {
      return W(t2) ? _({}, t2) : {};
    }
    xv() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this._instance.config.error_tracking) ? void 0 : i2.exception_steps) && void 0 !== t2 ? t2 : {};
    }
    Iv(t2) {
      if (0 === t2.length) return false;
      try {
        var i2 = t2.reduce(((t3, i3) => {
          var e2 = i3.type, r2 = i3.value;
          return J(e2) && e2.length > 0 && t3.$exception_types.push(e2), J(r2) && r2.length > 0 && t3.$exception_values.push(r2), t3;
        }), { $exception_types: [], $exception_values: [] });
        return this._v.some(((t3) => {
          var e2 = t3.values.map(((t4) => {
            var e3 = Ka[t4.operator], r2 = i2[t4.key];
            if (!e3 || !r2) return false;
            var s2 = H(t4.value) ? t4.value : [t4.value];
            return s2.length > 0 && e3(s2, r2);
          }));
          return "OR" === t3.type ? e2.some(Boolean) : e2.every(Boolean);
        }));
      } catch (t3) {
        return Ph.warn("Failed to evaluate suppression rules. Capturing the exception.", t3), false;
      }
    }
    Pv(t2) {
      return t2.flatMap(((t3) => {
        var i2, e2;
        return null !== (i2 = null == (e2 = t3.stacktrace) ? void 0 : e2.frames) && void 0 !== i2 ? i2 : [];
      })).some(((t3) => {
        var i2 = t3.filename;
        return !!i2 && Rh.some(((t4) => i2.startsWith(t4)));
      }));
    }
    Av(t2) {
      return t2.some(((t3) => {
        var i2 = t3.value;
        return J(i2) && Ch.some(((t4) => i2.includes(t4)));
      }));
    }
    Fv(t2) {
      if (t2.length > 0) {
        var i2, e2, r2, s2, n2 = null !== (i2 = null == (e2 = t2[0].stacktrace) ? void 0 : e2.frames) && void 0 !== i2 ? i2 : [], o2 = n2[n2.length - 1];
        return null !== (r2 = null == o2 || null == (s2 = o2.filename) ? void 0 : s2.includes("posthog.com/static")) && void 0 !== r2 && r2;
      }
      return false;
    }
    Ev(t2) {
      return !X(t2) && H(t2);
    }
  } };
  var Wh = _({ productTours: class {
    get yo() {
      return this._instance.persistence;
    }
    constructor(t2) {
      this.Lv = null, this.Dv = null, this._instance = t2;
    }
    initialize() {
      this.loadIfEnabled();
    }
    onRemoteConfig(t2) {
      if (t2.ok) {
        var i2 = t2.config;
        if ("productTours" in i2) {
          var e2, r2;
          if (this.yo && this.yo.register({ [Xe]: !!i2.productTours }), !rh(this._instance)) return !this.Lv && X(null == (e2 = this.yo) ? void 0 : e2.props[Tr]) || eh.info("product tours disabled; stopping and clearing cached tours"), null == (r2 = this.Lv) || r2.stop(), this.Lv = null, void this.clearCache();
          this.loadIfEnabled();
        }
      }
    }
    loadIfEnabled() {
      !this.Lv && rh(this._instance) && this.Zs((() => this.$v()));
    }
    Zs(t2) {
      var i2, e2;
      null != (i2 = v.__PosthogExtensions__) && i2.generateProductTours ? t2() : null == (e2 = v.__PosthogExtensions__) || null == e2.loadExternalDependency || e2.loadExternalDependency(this._instance, "product-tours", ((i3) => {
        i3 ? eh.error("Could not load product tours script", i3) : t2();
      }));
    }
    $v() {
      var t2;
      !this.Lv && null != (t2 = v.__PosthogExtensions__) && t2.generateProductTours && (this.Lv = v.__PosthogExtensions__.generateProductTours(this._instance, true));
    }
    getProductTours(t2, i2) {
      if (void 0 === i2 && (i2 = false), !H(this.Dv) || i2) {
        var e2 = this.yo;
        if (e2) {
          var r2 = e2.props[Tr];
          if (H(r2) && !i2) return this.Dv = r2, void t2(r2, { isLoaded: true });
        }
        this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token), method: "GET", timestampMode: "query", callback: (i3) => {
          if (rh(this._instance)) {
            var r3 = i3.statusCode;
            if (200 !== r3 || !i3.json) {
              var s2 = "Product Tours API could not be loaded, status: " + r3;
              return 0 === r3 ? i3.error || eh.warn(s2) : eh.error(s2), void t2([], { isLoaded: false, error: s2 });
            }
            var n2 = H(i3.json.product_tours) ? i3.json.product_tours : [];
            this.Dv = n2, e2 && e2.register({ [Tr]: n2 }), t2(n2, { isLoaded: true });
          } else t2([], { isLoaded: true });
        } });
      } else t2(this.Dv, { isLoaded: true });
    }
    getActiveProductTours(t2) {
      X(this.Lv) ? t2([], { isLoaded: false, error: "Product tours not loaded" }) : this.Lv.getActiveProductTours(t2);
    }
    showProductTour(t2) {
      var i2;
      null == (i2 = this.Lv) || i2.showTourById(t2);
    }
    previewTour(t2) {
      this.Lv ? this.Lv.previewTour(t2) : this.Zs((() => {
        var i2;
        this.$v(), null == (i2 = this.Lv) || i2.previewTour(t2);
      }));
    }
    dismissProductTour() {
      var t2;
      null == (t2 = this.Lv) || t2.dismissTour("user_clicked_skip");
    }
    nextStep() {
      var t2;
      null == (t2 = this.Lv) || t2.nextStep();
    }
    previousStep() {
      var t2;
      null == (t2 = this.Lv) || t2.previousStep();
    }
    clearCache() {
      var t2;
      this.Dv = null, null == (t2 = this.yo) || t2.unregister(Tr);
    }
    resetTour(t2) {
      var i2;
      null == (i2 = this.Lv) || i2.resetTour(t2);
    }
    resetAllTours() {
      var t2;
      null == (t2 = this.Lv) || t2.resetAllTours();
    }
    cancelPendingTour(t2) {
      var i2;
      null == (i2 = this.Lv) || i2.cancelPendingTour(t2);
    }
  } }, zh);
  var Gh = { siteApps: class {
    constructor(t2) {
      this.Nv = 0, this._instance = t2, this.qv = [], this.apps = {};
    }
    get isEnabled() {
      return !!this._instance.config.opt_in_site_apps;
    }
    jv(t2, i2) {
      if (i2) {
        var e2 = this.globalsForEvent(i2);
        this.qv.push(e2), this.qv.length > 1e3 && (this.qv = this.qv.slice(10));
      }
    }
    get siteAppLoaders() {
      var t2;
      return null == (t2 = v._POSTHOG_REMOTE_CONFIG) || null == (t2 = t2[this._instance.config.token]) ? void 0 : t2.siteApps;
    }
    initialize() {
      if (this.isEnabled) {
        var t2 = this._instance._addCaptureHook(this.jv.bind(this));
        this.Bv = () => {
          t2(), this.qv = [], this.Bv = void 0;
        };
      }
    }
    globalsForEvent(t2) {
      var i2, e2, r2, s2, n2, o2, a2;
      if (!t2) throw new Error("Event payload is required");
      var l2 = {}, h2 = this._instance.get_property("$groups") || [], u2 = this._instance.get_property("$stored_group_properties") || {};
      for (var d2 of Object.entries(u2)) {
        var v2 = d2[0];
        l2[v2] = { id: h2[v2], type: v2, properties: d2[1] };
      }
      var c2 = t2.$set_once, f2 = t2.$set;
      return { event: _({}, g(t2, sh), { properties: _({}, t2.properties, f2 ? { $set: _({}, null !== (i2 = null == (e2 = t2.properties) ? void 0 : e2.$set) && void 0 !== i2 ? i2 : {}, f2) } : {}, c2 ? { $set_once: _({}, null !== (r2 = null == (s2 = t2.properties) ? void 0 : s2.$set_once) && void 0 !== r2 ? r2 : {}, c2) } : {}), elements_chain: null !== (n2 = null == (o2 = t2.properties) ? void 0 : o2.$elements_chain) && void 0 !== n2 ? n2 : "", distinct_id: null == (a2 = t2.properties) ? void 0 : a2.distinct_id }), person: { properties: this._instance.get_property("$stored_person_properties") }, groups: l2 };
    }
    Hv(t2) {
      var i2, e2 = null == (i2 = t2.tagName) ? void 0 : i2.toLowerCase();
      return "style" === e2 && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(t2) || (nh.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === e2 && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(t2) || (nh.error("prepare_external_dependency_script returned null"), null) : t2;
    }
    zv() {
      var t2, i2, e2, s2, n2, o2, a2, l2;
      if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {
      };
      var h2 = null == r ? void 0 : r.defaultView, u2 = null == h2 || null == (t2 = h2.Node) ? void 0 : t2.prototype;
      if (!h2 || !u2) return () => {
      };
      if (this.Nv++, this.Uv) return this.Wv();
      var d2 = [], v2 = this, c2 = /* @__PURE__ */ new WeakSet(), f2 = (t3, i3, e3) => {
        if (null != t3 && t3[i3]) {
          var r2 = t3[i3];
          t3[i3] = e3(r2), d2.push((() => {
            t3[i3] = r2;
          }));
        }
      }, p2 = (t3) => {
        if (c2.has(t3)) return t3;
        var i3 = v2.Hv(t3);
        return i3 && c2.add(i3), i3;
      }, _2 = (t3) => t3.map(((t4) => "string" == typeof t4 ? t4 : p2(t4))).filter(((t4) => !Q(t4)));
      return f2(u2, "appendChild", ((t3) => function(i3) {
        var e3 = p2(i3);
        return e3 ? t3.call(this, e3) : i3;
      })), f2(u2, "insertBefore", ((t3) => function(i3, e3) {
        var r2 = p2(i3);
        return r2 ? t3.call(this, r2, e3) : i3;
      })), f2(u2, "replaceChild", ((t3) => function(i3, e3) {
        var r2 = p2(i3);
        return r2 ? t3.call(this, r2, e3) : e3;
      })), [null == (i2 = h2.Element) ? void 0 : i2.prototype, null == (e2 = h2.Document) ? void 0 : e2.prototype, null == (s2 = h2.DocumentFragment) ? void 0 : s2.prototype].forEach(((t3) => {
        f2(t3, "append", ((t4) => function() {
          for (var i3 = arguments.length, e3 = new Array(i3), r2 = 0; i3 > r2; r2++) e3[r2] = arguments[r2];
          return t4.apply(this, _2(e3));
        })), f2(t3, "prepend", ((t4) => function() {
          for (var i3 = arguments.length, e3 = new Array(i3), r2 = 0; i3 > r2; r2++) e3[r2] = arguments[r2];
          return t4.apply(this, _2(e3));
        }));
      })), [null == (n2 = h2.Element) ? void 0 : n2.prototype, null == (o2 = h2.CharacterData) ? void 0 : o2.prototype, null == (a2 = h2.DocumentType) ? void 0 : a2.prototype].forEach(((t3) => {
        f2(t3, "before", ((t4) => function() {
          for (var i3 = arguments.length, e3 = new Array(i3), r2 = 0; i3 > r2; r2++) e3[r2] = arguments[r2];
          return t4.apply(this, _2(e3));
        })), f2(t3, "after", ((t4) => function() {
          for (var i3 = arguments.length, e3 = new Array(i3), r2 = 0; i3 > r2; r2++) e3[r2] = arguments[r2];
          return t4.apply(this, _2(e3));
        })), f2(t3, "replaceWith", ((t4) => function() {
          for (var i3 = arguments.length, e3 = new Array(i3), r2 = 0; i3 > r2; r2++) e3[r2] = arguments[r2];
          var s3 = _2(e3);
          return e3.length && !s3.length ? void 0 : t4.apply(this, s3);
        }));
      })), f2(null == (l2 = h2.Element) ? void 0 : l2.prototype, "insertAdjacentElement", ((t3) => function(i3, e3) {
        var r2 = p2(e3);
        return r2 ? t3.call(this, i3, r2) : null;
      })), this.Uv = () => {
        d2.forEach(((t3) => t3())), this.Uv = void 0;
      }, this.Wv();
    }
    Wv() {
      var t2 = false;
      return () => {
        var i2;
        t2 || (t2 = true, this.Nv--, 0 === this.Nv && (null == (i2 = this.Uv) || i2.call(this)));
      };
    }
    Vv(t2, i2) {
      void 0 === i2 && (i2 = true);
      var e2 = this.zv();
      try {
        var r2 = t2(e2);
        return i2 && e2(), r2;
      } catch (t3) {
        throw e2(), t3;
      }
    }
    setupSiteApp(t2) {
      var i2 = this.apps[t2.id], e2 = () => {
        var e3;
        !i2.errored && this.qv.length && (nh.info("Processing " + this.qv.length + " events for site app with id " + t2.id), this.qv.forEach(((t3) => this.Vv((() => null == i2.processEvent ? void 0 : i2.processEvent(t3))))), i2.processedBuffer = true), Object.values(this.apps).every(((t3) => t3.processedBuffer || t3.errored)) && (null == (e3 = this.Bv) || e3.call(this));
      }, r2 = false, s2 = (s3) => {
        i2.errored = !s3, i2.loaded = true, nh.info("Site app with id " + t2.id + " " + (s3 ? "loaded" : "errored")), r2 && e2();
      };
      try {
        var n2 = this.Vv(((i3) => t2.init({ posthog: this._instance, callback(t3) {
          i3(), s2(t3);
        } })), false).processEvent;
        n2 && (i2.processEvent = n2), r2 = true;
      } catch (i3) {
        nh.error(oh + t2.id, i3), s2(false);
      }
      if (r2 && i2.loaded) try {
        e2();
      } catch (e3) {
        nh.error("Error while processing buffered events PostHog app with config id " + t2.id, e3), i2.errored = true;
      }
    }
    Gv() {
      var t2 = this.siteAppLoaders || [];
      for (var i2 of t2) this.apps[i2.id] = { id: i2.id, loaded: false, errored: false, processedBuffer: false };
      for (var e2 of t2) this.setupSiteApp(e2);
    }
    Zv(t2) {
      var i2 = this;
      if (0 !== Object.keys(this.apps).length) {
        var e2 = this.globalsForEvent(t2), r2 = function(r3) {
          try {
            i2.Vv((() => null == r3.processEvent ? void 0 : r3.processEvent(e2)));
          } catch (i3) {
            nh.error("Error while processing event " + t2.event + " for site app " + r3.id, i3);
          }
        };
        for (var s2 of Object.values(this.apps)) r2(s2);
      }
    }
    onRemoteConfig(t2) {
      var i2, e2, r2, s2 = this;
      if (null != (i2 = this.siteAppLoaders) && i2.length) return this.isEnabled ? (this.Gv(), void this._instance.on("eventCaptured", ((t3) => this.Zv(t3)))) : void nh.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      if (null == (e2 = this.Bv) || e2.call(this), t2.ok) {
        var n2 = t2.config;
        if (null != (r2 = n2.siteApps) && r2.length) if (this.isEnabled) {
          var o2 = function() {
            var t3, i3 = a2.id, e3 = a2.url;
            v["__$$ph_site_app_" + i3] = s2._instance, null == (t3 = v.__PosthogExtensions__) || null == t3.loadSiteApp || t3.loadSiteApp(s2._instance, e3, ((t4) => {
              if (t4) return nh.error(oh + i3, t4);
            }));
          };
          for (var a2 of n2.siteApps) o2();
        } else nh.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      }
    }
  } };
  var Kh = { tracingHeaders: class {
    constructor(t2) {
      this.Qv = void 0, this.Jv = void 0, this.Kv = void 0, this.hv = () => {
        var t3, i2, e2 = this.Yv();
        e2 ? (K(this.Qv) && (this.Qv = null == (t3 = v.__PosthogExtensions__) || null == (t3 = t3.tracingHeadersPatchFns) ? void 0 : t3._patchXHR(e2, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), K(this.Jv) && (this.Jv = null == (i2 = v.__PosthogExtensions__) || null == (i2 = i2.tracingHeadersPatchFns) ? void 0 : i2._patchFetch(e2, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this.mv();
      }, this._instance = t2;
    }
    initialize() {
      this.startIfEnabledOrStop();
    }
    Zs(t2) {
      var i2, e2;
      null != (i2 = v.__PosthogExtensions__) && i2.tracingHeadersPatchFns ? t2() : null == (e2 = v.__PosthogExtensions__) || null == e2.loadExternalDependency || e2.loadExternalDependency(this._instance, "tracing-headers", ((i3) => {
        if (i3) return zl.error("failed to load script", i3);
        t2();
      }));
    }
    Xv() {
      var t2, i2;
      return null !== (t2 = null !== (i2 = this._instance.config.tracing_headers) && void 0 !== i2 ? i2 : this._instance.config.addTracingHeaders) && void 0 !== t2 ? t2 : this._instance.config.__add_tracing_headers;
    }
    Yv() {
      var t2 = this.Xv();
      return H(t2) ? (H(this.Kv) ? this.Kv.splice(0, this.Kv.length, ...t2) : this.Kv = [...t2], t2.length > 0 ? this.Kv : void 0) : (H(this.Kv) && this.Kv.splice(0), this.Kv = t2 || void 0, this.Kv);
    }
    mv() {
      var t2, i2;
      null == (t2 = this.Qv) || t2.call(this), null == (i2 = this.Jv) || i2.call(this), this.Qv = void 0, this.Jv = void 0;
    }
    startIfEnabledOrStop() {
      this.Yv() ? this.Zs(this.hv) : this.mv();
    }
  } };
  var Jh = _({ surveys: class extends uh {
    constructor(t2) {
      var i2;
      super(new _h(t2), { get projectToken() {
        return i2.config.token;
      }, kv: new ph(i2 = t2) }), this._instance = t2;
    }
    du(t2, i2) {
      var e2 = i2.query ? wa(t2, i2.query) : t2;
      return new Promise(((t3) => {
        var r2;
        this._instance._send_request({ method: i2.method, url: this._instance.requestRouter.endpointFor(null !== (r2 = i2.target) && void 0 !== r2 ? r2 : "api", e2), data: i2.body, headers: i2.headers, timeout: i2.timeoutMs, fireCallbackOnDrop: true, transport: i2.transport, compression: i2.compression, timestampMode: i2.sentAt, callback: t3 });
      }));
    }
  } }, zh);
  var Yh = { toolbar: class {
    constructor(t2) {
      this.instance = t2;
    }
    tc(t2) {
      v.ph_toolbar_state = t2;
    }
    ec() {
      var t2;
      return null !== (t2 = v.ph_toolbar_state) && void 0 !== t2 ? t2 : 0;
    }
    initialize() {
      return this.maybeLoadToolbar();
    }
    maybeLoadToolbar(i2, e2, s2) {
      if (void 0 === i2 && (i2 = void 0), void 0 === e2 && (e2 = void 0), void 0 === s2 && (s2 = void 0), ds(this.instance.config)) return false;
      if (!t || !r) return false;
      i2 = null != i2 ? i2 : t.location, s2 = null != s2 ? s2 : t.history;
      try {
        if (!e2) {
          try {
            t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
          } catch (t2) {
            return false;
          }
          e2 = null == t ? void 0 : t.localStorage;
        }
        var n2, o2 = gh || Gn(i2.hash, "__posthog") || Gn(i2.hash, "state"), a2 = o2 ? ns((() => JSON.parse(atob(decodeURIComponent(o2))))) || ns((() => JSON.parse(decodeURIComponent(o2)))) : null;
        return a2 && "ph_authorize" === a2.action ? ((n2 = a2).source = "url", n2 && Object.keys(n2).length > 0 && (a2.desiredHash ? i2.hash = a2.desiredHash : s2 ? s2.replaceState(s2.state, "", i2.pathname + i2.search) : i2.hash = "")) : ((n2 = JSON.parse(e2.getItem(mh) || "{}")).source = "localstorage", delete n2.userIntent), !(!n2.token || this.instance.config.token !== n2.token || (this.loadToolbar(n2), 0));
      } catch (t2) {
        return false;
      }
    }
    ic(t2) {
      var i2 = v.ph_load_toolbar || v.ph_load_editor;
      !X(i2) && V(i2) ? i2(t2, this.instance) : yh.warn("No toolbar load function found");
    }
    loadToolbar(i2) {
      var e2 = !(null == r || !r.getElementById(Bs));
      if (!t || e2) return false;
      var s2 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, n2 = _({ token: this.instance.config.token }, i2, { apiURL: this.instance.requestRouter.endpointFor("ui") }, s2 ? { instrument: false } : {});
      if (t.localStorage.setItem(mh, JSON.stringify(_({}, n2, { source: void 0 }))), 2 === this.ec()) this.ic(n2);
      else if (0 === this.ec()) {
        var o2;
        this.tc(1), null == (o2 = v.__PosthogExtensions__) || null == o2.loadExternalDependency || o2.loadExternalDependency(this.instance, "toolbar", ((t2) => {
          if (t2) return yh.error("[Toolbar] Failed to load", t2), void this.tc(0);
          this.tc(2), this.ic(n2);
        })), us(t, "turbolinks:load", (() => {
          this.tc(0), this.loadToolbar(n2);
        }));
      }
      return true;
    }
    rc(t2) {
      return this.loadToolbar(t2);
    }
    maybeLoadEditor(t2, i2, e2) {
      return void 0 === t2 && (t2 = void 0), void 0 === i2 && (i2 = void 0), void 0 === e2 && (e2 = void 0), this.maybeLoadToolbar(t2, i2, e2);
    }
  } };
  var Qh = _({ experiments: Ah }, zh);
  var Xh = { conversations: class {
    constructor(t2) {
      this.nc = void 0, this._conversationsManager = null, this.sc = false, this.Fe = null, this.ac = false, this._instance = t2;
    }
    initialize() {
      this.loadIfEnabled();
    }
    onRemoteConfig(t2) {
      if (!this._instance.config.disable_conversations && (this.oc = t2.ok, t2.ok)) {
        var i2 = t2.config.conversations;
        X(i2) || (it(i2) ? this.nc = i2 : (this.nc = i2.enabled, this.Fe = i2), this.loadIfEnabled());
      }
    }
    reset() {
      var t2;
      null == (t2 = this._conversationsManager) || t2.reset(), this._conversationsManager = null, this.nc = void 0, this.Fe = null, this.oc = void 0, this.ac = false;
    }
    loadIfEnabled() {
      if (!(this._conversationsManager || this.sc || this._instance.config.disable_conversations || ds(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
        var t2 = null == v ? void 0 : v.__PosthogExtensions__;
        if (t2 && !K(this.nc) && this.nc) if (this.Fe && this.Fe.token) {
          this.sc = true;
          try {
            var i2 = t2.initConversations;
            if (i2) return this.lc(i2), void (this.sc = false);
            var e2 = t2.loadExternalDependency;
            if (!e2) return void this.uc(qr);
            e2(this._instance, "conversations", ((i3) => {
              i3 || !t2.initConversations ? this.uc("Could not load conversations script", i3) : this.lc(t2.initConversations), this.sc = false;
            }));
          } catch (t3) {
            this.uc("Error initializing conversations", t3), this.sc = false;
          }
        } else Fh.error("Conversations enabled but missing token in remote config.");
      }
    }
    lc(t2) {
      if (this.Fe) try {
        this._conversationsManager = t2(this.Fe, this._instance), this.ac = false, Fh.info("Conversations loaded successfully");
      } catch (t3) {
        this.uc("Error completing conversations initialization", t3);
      }
      else Fh.error("Cannot complete initialization: remote config is null");
    }
    uc(t2, i2) {
      Fh.error(t2, i2), this._conversationsManager = null, this.sc = false, this.ac = true;
    }
    show() {
      this._conversationsManager ? this._conversationsManager.show() : Fh.warn("Conversations not loaded yet.");
    }
    hide() {
      this._conversationsManager && this._conversationsManager.hide();
    }
    isAvailable() {
      return true === this.nc && !Q(this._conversationsManager);
    }
    getUnavailableReason() {
      return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : ds(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : false === this.oc ? "remote_config_failed" : K(this.nc) ? this.oc ? "disabled_in_project" : "remote_config_pending" : this.nc ? X(this.Fe) || !this.Fe.token ? "missing_token" : null != v && v.__PosthogExtensions__ ? this.sc ? "initializing" : this.ac ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project";
    }
    isVisible() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this._conversationsManager) ? void 0 : i2.isVisible()) && void 0 !== t2 && t2;
    }
    sendMessage(t2, i2, e2) {
      var r2 = this;
      return p((function* () {
        return r2._conversationsManager ? r2._conversationsManager.sendMessage(t2, i2, e2) : (Fh.warn(Mh), null);
      }))();
    }
    getMessages(t2, i2) {
      var e2 = this;
      return p((function* () {
        return e2._conversationsManager ? e2._conversationsManager.getMessages(t2, i2) : (Fh.warn(Mh), null);
      }))();
    }
    markAsRead(t2) {
      var i2 = this;
      return p((function* () {
        return i2._conversationsManager ? i2._conversationsManager.markAsRead(t2) : (Fh.warn(Mh), null);
      }))();
    }
    getTickets(t2) {
      var i2 = this;
      return p((function* () {
        return i2._conversationsManager ? i2._conversationsManager.getTickets(t2) : (Fh.warn(Mh), null);
      }))();
    }
    requestRestoreLink(t2) {
      var i2 = this;
      return p((function* () {
        return i2._conversationsManager ? i2._conversationsManager.requestRestoreLink(t2) : (Fh.warn(Mh), null);
      }))();
    }
    restoreFromToken(t2) {
      var i2 = this;
      return p((function* () {
        return i2._conversationsManager ? i2._conversationsManager.restoreFromToken(t2) : (Fh.warn(Mh), null);
      }))();
    }
    restoreFromUrlToken() {
      var t2 = this;
      return p((function* () {
        return t2._conversationsManager ? t2._conversationsManager.restoreFromUrlToken() : (Fh.warn(Mh), null);
      }))();
    }
    getCurrentTicketId() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this._conversationsManager) ? void 0 : i2.getCurrentTicketId()) && void 0 !== t2 ? t2 : null;
    }
    getWidgetSessionId() {
      var t2, i2;
      return null !== (t2 = null == (i2 = this._conversationsManager) ? void 0 : i2.getWidgetSessionId()) && void 0 !== t2 ? t2 : null;
    }
    Ql() {
      var t2;
      null == (t2 = this._conversationsManager) || t2.setIdentity();
    }
    Jl() {
      var t2;
      null == (t2 = this._conversationsManager) || t2.clearIdentity();
    }
  } };
  var Zh = { logs: class {
    constructor(i2) {
      var e2, r2 = this;
      this.name = "logs", this.hc = false, this.dc = false, this.vc = false, this.I = Ae("[logs]"), this.cc = _({}, this.I, { error() {
        for (var t2 = arguments.length, i3 = new Array(t2), e3 = 0; t2 > e3; e3++) i3[e3] = arguments[e3];
        i3.some(Bh) || r2.I.error(...i3);
      } }), this.Za = [], this.fc = [], this.Hh = 0, this.Rs = false, this.gc = [], this.mc = [], this.yc = false, this.bc = false, this._c = () => {
        var t2, i3;
        this.Rs || (this.Hh = 0, null == (t2 = this.wc) || t2.onReconnect(), null == (i3 = this.kc) || i3.onReconnect());
      }, this._instance = i2, this._instance && null != (e2 = this._instance.config.logs) && e2.captureConsoleLogs && (this.hc = true), t && us(t, "online", this._c);
    }
    Sc(t2, i2, e2, r2) {
      var s2, n2 = Dh(null == (s2 = this._instance) || null == (s2 = s2.config) ? void 0 : s2.logs, e2);
      return [new Wi(this.xc(t2, i2), n2, this.cc, (() => this.Cc()), ((t3) => t3()), void 0, r2), n2];
    }
    Tc() {
      var t2, i2 = null == (t2 = this._instance) || null == (t2 = t2.config) ? void 0 : t2.logs;
      if (!this.wc || this.Mc !== i2) {
        var e2;
        null == (e2 = this.wc) || e2.reset(), this.Mc = i2;
        var r2 = this.Sc((() => this.Za), ((t3) => {
          this.Za = t3;
        }));
        this.wc = r2[0], this.Ec = r2[1];
      }
      return this.wc;
    }
    Ic() {
      var t2, i2 = null == (t2 = this._instance) || null == (t2 = t2.config) ? void 0 : t2.logs;
      if (!this.kc || this.Rc !== i2) {
        var e2;
        null == (e2 = this.kc) || e2.reset(), this.Rc = i2;
        var r2 = this.Sc((() => this.fc), ((t3) => {
          this.fc = t3;
        }), { serviceNameDefault: "posthog-browser-logs", consoleCapture: true }, Lh);
        this.kc = r2[0], this.Pc = r2[1];
      }
      return this.kc;
    }
    setup(t2) {
      var i2;
      if (!this.Rs) {
        this.Os = t2, null != (i2 = this._instance) && null != (i2 = i2.config) && null != (i2 = i2.logs) && i2.captureConsoleLogs && (this.hc = true), (this.hc || this.Ac() && this.Fc()) && this.Oc();
        var e2 = false, r2 = t2.onRemoteConfig(((t3) => {
          var i3;
          e2 = t3.ok && true === (null == (i3 = t3.config.logs) ? void 0 : i3.captureConsoleLogs), this.onRemoteConfig(t3);
        }));
        this.Rs ? r2.dispose() : (this.Ls = r2, e2 || this.loadIfEnabled());
      }
    }
    dispose() {
      var i2, e2, r2, s2;
      this.Rs || (this.Rs = true, this.Lc(), null == (i2 = this.Ls) || i2.dispose(), this.Ls = void 0, this.Os = void 0, this.vc = false, null == t || t.removeEventListener("online", this._c), null == (e2 = this.Dc) || e2.call(this), this.Dc = void 0, null == (r2 = this.wc) || r2.reset(), null == (s2 = this.kc) || s2.reset());
    }
    onRemoteConfig(t2) {
      var i2, e2;
      if (!this.Rs) {
        var r2 = t2.ok ? null == (i2 = t2.config.logs) ? void 0 : i2.captureConsoleLogs : void 0;
        X(r2) ? this.$c() : (null == (e2 = this._instance) || null == (e2 = e2.persistence) || e2.register({ [Ze]: !!r2 }), r2 ? (this.hc = true, this.dc || this.Oc(), this.loadIfEnabled()) : this.$c());
      }
    }
    reset() {
      var t2, i2, e2, r2;
      this.Lc(), null == (t2 = this.wc) || t2.clearQueue(), this.Za = [], null == (i2 = this.wc) || i2.reset(), null == (e2 = this.kc) || e2.clearQueue(), this.fc = [], null == (r2 = this.kc) || r2.reset(), this.Hh = 0;
    }
    captureLog(t2) {
      this.Rs || this.Tc().captureLog(t2);
    }
    captureConsoleLog(t2) {
      this.Rs || this.Ic().captureLog(t2);
    }
    captureBufferedConsoleLog(t2, i2, e2) {
      this.Rs || this.Ic().captureLog(t2, { context: i2, occurredAtMs: e2 });
    }
    Fc() {
      var t2;
      return !(null == (t2 = this._instance) || null == (t2 = t2.persistence) || null == (t2 = t2.props) || !t2[Ze]);
    }
    Ac() {
      var t2, i2;
      return null == (t2 = this._instance) || null == t2.Ua || !t2.Ua() || !(null == (i2 = v._POSTHOG_REMOTE_CONFIG) || null == (i2 = i2[this._instance.config.token]) || !i2.config);
    }
    Yl() {
      var t2;
      this.Lc(), null == (t2 = this.kc) || t2.clearQueue(), this.fc = [];
    }
    $c() {
      this.hc || this.Lc();
    }
    Oc() {
      var t2, i2 = this;
      if (!this.yc && null != v && v.console) {
        var e2 = Dh(null == (t2 = this._instance) || null == (t2 = t2.config) ? void 0 : t2.logs).maxBufferSize, r2 = function(t3) {
          var r3;
          try {
            r3 = ((t4) => {
              for (; null != (i3 = t4) && i3.__rrweb_original__; ) {
                var i3;
                t4 = t4.__rrweb_original__;
              }
              return t4;
            })(v.console[t3]);
          } catch (t4) {
            return 0;
          }
          if (!r3) return 0;
          i2.mc.push(Bl(v.console, t3, ((s3) => {
            var n2 = function() {
              for (var r4 = arguments.length, n3 = new Array(r4), o2 = 0; r4 > o2; o2++) n3[o2] = arguments[o2];
              try {
                i2.Nc(t3, n3, e2);
              } catch (t4) {
              }
              return s3.apply(v.console, n3);
            };
            return n2.__rrweb_original__ = r3, n2;
          })));
        };
        for (var s2 of Nh) r2(s2);
        this.yc = true, this.qc = setTimeout((() => {
          this.Lc();
        }), 3e4);
      }
    }
    Nc(t2, i2, e2) {
      var r2;
      if (this.yc && !this.bc && 0 !== i2.length) if (null != (r2 = this._instance) && r2.is_capturing()) {
        if (e2 > this.gc.length) {
          this.bc = true;
          try {
            this.gc.push({ level: t2, args: i2, occurredAtMs: Date.now(), context: this.Cc() });
          } finally {
            this.bc = false;
          }
        }
      } else this.Lc();
    }
    Lc() {
      if (this.gc = [], this.yc) {
        for (var t2 of (this.yc = false, this.qc && (clearTimeout(this.qc), this.qc = void 0), this.mc)) t2();
        this.mc = [];
      }
    }
    jc() {
      var t2 = this.gc;
      return this.Lc(), t2;
    }
    get logger() {
      return this.Bc || (this.Bc = { trace: (t2, i2) => this.captureLog({ body: t2, level: "trace", attributes: i2 }), debug: (t2, i2) => this.captureLog({ body: t2, level: "debug", attributes: i2 }), info: (t2, i2) => this.captureLog({ body: t2, level: "info", attributes: i2 }), warn: (t2, i2) => this.captureLog({ body: t2, level: "warn", attributes: i2 }), error: (t2, i2) => this.captureLog({ body: t2, level: "error", attributes: i2 }), fatal: (t2, i2) => this.captureLog({ body: t2, level: "fatal", attributes: i2 }) }), this.Bc;
    }
    flushLogs(t2) {
      t2 ? this.Hc(t2) : (this.wc && this.wc.flush().catch(((t3) => this.zc(t3))), this.kc && this.kc.flush().catch(((t3) => this.zc(t3))));
    }
    zc(t2) {
      Bh(t2) || this.I.error("PostHog logs flush failed:", t2);
    }
    loadIfEnabled() {
      if (!this.Rs && this.hc && !this.dc && !this.vc) {
        var t2 = null == v ? void 0 : v.__PosthogExtensions__;
        if (!t2) return this.I.error("PostHog Extensions not found."), void this.Lc();
        var i2 = t2.loadExternalDependency;
        if (!i2) return this.I.error(qr), void this.Lc();
        this.vc = true;
        try {
          i2(this._instance, "logs", ((i3) => {
            if (this.vc = false, !this.Rs && this.hc) {
              var e2 = t2.logs;
              if (i3 || null == e2 || !e2.initializeLogs) this.I.error("Could not load logs script", i3), this.Lc();
              else {
                var r2, s2, n2 = this.jc();
                this.Dc = e2.initializeLogs(null !== (r2 = this.Os) && void 0 !== r2 ? r2 : this._instance), this.dc = true, n2.length > 0 && (null == e2.replayConsoleBuffer || e2.replayConsoleBuffer(null !== (s2 = this.Os) && void 0 !== s2 ? s2 : this._instance, n2));
              }
            }
          }));
        } catch (t3) {
          throw this.vc = false, t3;
        }
      }
    }
    xc(t2, i2) {
      var e2 = this._instance;
      return { get isDisabled() {
        return false;
      }, get optedOut() {
        return !e2.is_capturing();
      }, getPersistedProperty: (i3) => i3 === x.LogsQueue ? t2() : void 0, setPersistedProperty(t3, e3) {
        var r2;
        t3 === x.LogsQueue && i2(null !== (r2 = e3) && void 0 !== r2 ? r2 : []);
      }, es: (t3) => this.es(t3), getLibraryId: () => c.LIB_NAME, getLibraryVersion: () => c.LIB_VERSION };
    }
    es(t2) {
      return new Promise(((i2) => {
        if (Kn(this.Hh, 3)) i2({ kind: "fatal", error: jh(void 0, "logs endpoint is unreachable, dropping batch") });
        else {
          var e2 = false, r2 = (t3) => {
            e2 || (e2 = true, clearTimeout(s2), i2(t3));
          }, s2 = setTimeout((() => {
            this.I.warn("Logs request timed out before receiving a response"), r2({ kind: "retry-later", error: jh(void 0, "logs request timed out") });
          }), 9e4);
          this._instance._send_request({ method: "POST", url: this.Uc(), data: t2, compression: "best-available", batchKey: "logs", fireCallbackOnDrop: true, callback: (t3) => {
            var i3 = t3.statusCode;
            if (this.Wc(i3), i3 >= 200 && 300 > i3) r2({ kind: "ok" });
            else if (413 === i3) r2({ kind: "too-large" });
            else if (0 !== i3 && 408 !== i3 && 429 !== i3 && 500 > i3) r2({ kind: "fatal", error: new Error("logs request failed with status " + i3) });
            else {
              var e3;
              0 === i3 ? (t3.error || this.I.warn("Logs request failed before receiving an HTTP response"), r2({ kind: "retry-later", error: jh(t3.error, "logs request failed before receiving an HTTP response") })) : r2({ kind: "retry-later", error: null !== (e3 = t3.error) && void 0 !== e3 ? e3 : new Error("logs request failed with status " + i3) });
            }
          } });
        }
      }));
    }
    Wc(t2) {
      (0 !== t2 || this._instance.__loaded) && (this.Hh = Jn(t2, this.Hh, 3, (() => this.I.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))));
    }
    Hc(t2) {
      this.Za.length > 0 && this.Vc(t2, this.Za, this.Ec, c.LIB_NAME, ((t3) => {
        this.Za = t3;
      })), this.fc.length > 0 && this.Vc(t2, this.fc, this.Pc, Lh, ((t3) => {
        this.fc = t3;
      }));
    }
    Vc(t2, i2, e2, r2, s2) {
      if (0 !== i2.length) {
        var n2 = i2.map(((t3) => t3.record));
        s2([]);
        var o2 = Vi(n2, Hi(e2, c.LIB_NAME, c.LIB_VERSION), r2, c.LIB_VERSION);
        this._instance._send_request({ method: "POST", url: this.Uc(), data: o2, compression: "best-available", batchKey: "logs", transport: t2 });
      }
    }
    Uc() {
      return this._instance.requestRouter.endpointFor("api", "/i/v1/logs") + "?token=" + encodeURIComponent(this._instance.config.token);
    }
    Cc() {
      var t2, i2 = {};
      if (i2.distinctId = this._instance.get_distinct_id(), this._instance.sessionManager) {
        var e2 = this._instance.sessionManager.checkAndGetSessionAndWindowId(true), r2 = e2.windowId, s2 = e2.sessionStartTimestamp, n2 = e2.lastActivityTimestamp;
        i2.sessionId = e2.sessionId, i2.windowId = r2, X(s2) || (i2.sessionStartTimestamp = s2), X(n2) || (i2.lastActivityTimestamp = n2);
      }
      if (null != v && null != (t2 = v.location) && t2.href && (i2.currentUrl = this._instance.config.disable_capture_url_hashes ? xi(v.location.href) : v.location.href), this._instance.featureFlags) {
        var o2 = this._instance.featureFlags.getFlags();
        o2 && o2.length > 0 && (i2.activeFeatureFlags = o2);
      }
      return i2;
    }
  } };
  var tu = { metrics: class {
    constructor(t2) {
      this.I = Ae("[metrics]"), this._instance = t2;
    }
    initialize() {
    }
    Tc() {
      var t2, i2, e2 = null == (t2 = this._instance) || null == (t2 = t2.config) ? void 0 : t2.metrics;
      return this.wc && this.Mc === e2 || (null == (i2 = this.wc) || i2.reset(), this.Mc = e2, this.wc = new Yi(this.xc(), (function(t3) {
        var i3, e3, r2, s2, n2, o2 = null == t3 ? void 0 : t3.resourceAttributes;
        return { serviceName: null !== (i3 = null == o2 ? void 0 : o2["service.name"]) && void 0 !== i3 ? i3 : null == t3 ? void 0 : t3.serviceName, serviceVersion: null !== (e3 = null == o2 ? void 0 : o2["service.version"]) && void 0 !== e3 ? e3 : null == t3 ? void 0 : t3.serviceVersion, environment: null !== (r2 = null == o2 ? void 0 : o2["deployment.environment"]) && void 0 !== r2 ? r2 : null == t3 ? void 0 : t3.environment, resourceAttributes: o2, beforeSend: null == t3 ? void 0 : t3.beforeSend, flushIntervalMs: null !== (s2 = null == t3 ? void 0 : t3.flushIntervalMs) && void 0 !== s2 ? s2 : 1e4, maxSeriesPerFlush: null !== (n2 = null == t3 ? void 0 : t3.maxSeriesPerFlush) && void 0 !== n2 ? n2 : 1e3 };
      })(e2), this.I)), this.wc;
    }
    count(t2, i2, e2) {
      void 0 === i2 && (i2 = 1), this.Tc().count(t2, i2, e2);
    }
    gauge(t2, i2, e2) {
      this.Tc().gauge(t2, i2, e2);
    }
    histogram(t2, i2, e2) {
      this.Tc().histogram(t2, i2, e2);
    }
    flush(t2) {
      if (!this.wc) return Promise.resolve();
      if (t2) {
        var i2 = this.wc.drainWindow();
        return i2 && this._s(i2, t2), Promise.resolve();
      }
      return this.wc.flush().catch(((t3) => this.I.error("PostHog metrics flush failed:", t3)));
    }
    reset() {
      var t2;
      null == (t2 = this.wc) || t2.reset();
    }
    xc() {
      var t2 = this._instance, i2 = this;
      return { get isDisabled() {
        return false;
      }, get optedOut() {
        return !t2.is_capturing();
      }, _s: (t3) => i2._s(t3), getLibraryId: () => c.LIB_NAME, getLibraryVersion: () => c.LIB_VERSION };
    }
    _s(t2, i2) {
      return new Promise(((e2) => {
        var r2 = false, s2 = (t3) => {
          r2 || (r2 = true, clearTimeout(n2), e2(t3));
        }, n2 = setTimeout((() => s2({ kind: "retry-later", error: new Error("metrics request timed out") })), 9e4);
        this._instance._send_request(_({ method: "POST", url: this.Gc(), data: t2, compression: "best-available", batchKey: "metrics" }, i2 && { transport: i2 }, { fireCallbackOnDrop: true, callback(t3) {
          var i3 = t3.statusCode;
          if (i3 >= 200 && 300 > i3) s2({ kind: "ok" });
          else if (413 === i3) s2({ kind: "too-large" });
          else if (0 !== i3 && 408 !== i3 && 429 !== i3 && 500 > i3) s2({ kind: "fatal", error: new Error("metrics request failed with status " + i3) });
          else {
            var e3;
            s2({ kind: "retry-later", error: null !== (e3 = t3.error) && void 0 !== e3 ? e3 : new Error("metrics request failed with status " + i3) });
          }
        } }));
      }));
    }
    Gc() {
      return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token);
    }
  } };
  var iu = _({}, zh, qh, Hh, Vh, Wh, Gh, Jh, Kh, Yh, Qh, Xh, Zh, tu);
  Rl.__defaultExtensionClasses = _({}, iu);
  var eu = (function() {
    c.SDK_DIST_CHANNEL = "npm";
    var i2 = fl[xl] = new Rl();
    return (function() {
      function i3() {
        i3.done || (i3.done = true, El = false, es(fl, (function(t2) {
          t2._dom_loaded();
        })));
      }
      null != r && r.addEventListener ? "complete" === r.readyState ? i3() : us(r, "DOMContentLoaded", i3, { capture: false }) : t && Ie.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
    })(), i2;
  })();

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
    const analyticsStorage = isSiteAnalyticsVendorConsentGranted(state) ? GA4_CONSENT_GRANTED : GA4_CONSENT_DENIED;
    return {
      ad_storage: GA4_CONSENT_DENIED,
      analytics_storage: analyticsStorage,
      ad_user_data: GA4_CONSENT_DENIED,
      ad_personalization: GA4_CONSENT_DENIED
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

  // src/siteAnalyticsProviderProperties.ts
  var SITE_ANALYTICS_PROVIDER_SCOPE_KEYS = [
    "business_id",
    "customer_account_id",
    "site_id",
    "page_id",
    "site_stage",
    "environment"
  ];
  var SITE_ANALYTICS_PROVIDER_OUTCOME_ID_KEYS = [
    "event_id",
    "submission_id",
    "click_id",
    "acceptance_run_id"
  ];
  var buildSiteAnalyticsProviderProperties = (input) => {
    const output = {};
    for (const key of [
      ...SITE_ANALYTICS_PROVIDER_SCOPE_KEYS,
      ...SITE_ANALYTICS_PROVIDER_OUTCOME_ID_KEYS,
      "template_id",
      "arm_id"
    ]) {
      const value = input[key];
      if (typeof value !== "string") continue;
      const cleaned = value.trim();
      if (cleaned) output[key] = cleaned;
    }
    return output;
  };

  // src/siteAnalyticsLiveConfig.ts
  var SITE_ANALYTICS_LIVE_CONFIG_PATH = "/api/analytics/site-config";
  var SITE_ANALYTICS_LIVE_CONFIG_TIMEOUT_MS = 3e3;
  var isBooleanNullOrAbsent = (value) => value == null || typeof value === "boolean";
  var bakedSiteAnalyticsSwitches = (config) => ({
    replayEnabled: config.profile.replay_enabled ?? void 0,
    posthogPageviewStrategy: config.posthogPageviewStrategy,
    posthogCaptureHeatmaps: config.posthogCaptureHeatmaps,
    posthogSurveysEnabled: config.posthogSurveysEnabled,
    posthogCaptureExceptions: config.posthogCaptureExceptions,
    posthogCapturePerformance: config.posthogCapturePerformance
  });
  var resolveSiteAnalyticsLiveConfigUrls = (config, href) => {
    const urls = [];
    const add = (raw) => {
      try {
        const url = new URL(raw, href);
        if (url.protocol !== "https:" && url.protocol !== "http:") return;
        if (url.protocol === "http:" && new URL(href).protocol === "https:") return;
        const value = url.toString();
        if (!urls.includes(value)) urls.push(value);
      } catch {
      }
    };
    add(SITE_ANALYTICS_LIVE_CONFIG_PATH);
    const configured = typeof config.analyticsConfigUrl === "string" ? config.analyticsConfigUrl.trim() : "";
    if (configured) add(configured);
    return urls;
  };
  var parseSiteAnalyticsLiveConfig = (payload, siteId, customerAccountId) => {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
    const record = payload;
    if (typeof record.siteId !== "string" || record.siteId !== siteId) return null;
    if (typeof record.customerAccountId !== "string" || record.customerAccountId !== customerAccountId) {
      return null;
    }
    const state = {
      replayEnabled: record.replayEnabled,
      posthogPageviewStrategy: record.posthogPageviewStrategy,
      posthogCaptureHeatmaps: record.posthogCaptureHeatmaps,
      posthogSurveysEnabled: record.posthogSurveysEnabled,
      posthogCaptureExceptions: record.posthogCaptureExceptions,
      posthogCapturePerformance: record.posthogCapturePerformance
    };
    const { posthogPageviewStrategy, ...booleanSwitches } = state;
    return Object.values(booleanSwitches).every(isBooleanNullOrAbsent) && (posthogPageviewStrategy == null || posthogPageviewStrategy === "native" || posthogPageviewStrategy === "off") ? state : null;
  };
  var SITE_ANALYTICS_LIVE_CONFIG_POLL_MS = 6e4;
  var startSiteAnalyticsLiveConfig = (config, applySwitches, deps) => {
    const siteId = config.profile.site_id;
    const customerAccountId = config.profile.customer_account_id ?? "";
    const candidates = deps.fetchImpl && siteId && customerAccountId ? resolveSiteAnalyticsLiveConfigUrls(config, deps.href) : [];
    const enabled = candidates.length > 0;
    const status = {
      status: enabled ? "unreachable" : "disabled"
    };
    let applied = bakedSiteAnalyticsSwitches(config);
    let stopped = false;
    let warned = false;
    let resolvedUrl;
    let timer;
    const setIntervalImpl = deps.setIntervalImpl ?? setInterval;
    const clearIntervalImpl = deps.clearIntervalImpl ?? clearInterval;
    const stop = () => {
      stopped = true;
      if (timer !== void 0) clearIntervalImpl(timer);
      timer = void 0;
    };
    const readFrom = async (url) => {
      const timeoutMs = deps.timeoutMs ?? SITE_ANALYTICS_LIVE_CONFIG_TIMEOUT_MS;
      const controller = typeof AbortController === "function" ? new AbortController() : void 0;
      const abortTimer = controller ? setTimeout(() => controller.abort(), timeoutMs) : void 0;
      let payload;
      try {
        const response = await deps.fetchImpl(url, {
          method: "GET",
          credentials: "omit",
          cache: "no-store",
          ...controller ? { signal: controller.signal } : {}
        });
        if (!response.ok) return { kind: "unreachable" };
        payload = await response.json();
      } catch {
        return { kind: "unreachable" };
      } finally {
        if (abortTimer !== void 0) clearTimeout(abortTimer);
      }
      const live = parseSiteAnalyticsLiveConfig(payload, siteId, customerAccountId);
      if (!live) return { kind: "invalid" };
      if (stopped) return { kind: "unreachable" };
      const next = { ...applied, ...definedLiveSwitches(live) };
      if (sameLiveSwitches(applied, next)) {
        return { kind: "applied", result: { applied: false } };
      }
      try {
        applySwitches(next);
        applied = next;
        return { kind: "applied", result: { applied: true } };
      } catch {
        return { kind: "invalid" };
      }
    };
    const readOnce = async () => {
      if (stopped || !enabled || !deps.fetchImpl || !siteId || !customerAccountId) {
        return { applied: false };
      }
      const tried = resolvedUrl ? [resolvedUrl] : candidates;
      let outcome = { kind: "unreachable" };
      for (const url of tried) {
        outcome = await readFrom(url);
        if (outcome.kind === "applied") {
          resolvedUrl = url;
          break;
        }
        if (stopped) break;
      }
      status.lastAttemptAt = Date.now();
      if (outcome.kind === "applied") {
        status.status = "applied";
        status.lastAppliedAt = status.lastAttemptAt;
        return outcome.result;
      }
      status.status = outcome.kind;
      if (outcome.kind === "unreachable" && !warned && !stopped) {
        warned = true;
        deps.onUnreachable?.(tried);
      }
      return { applied: false };
    };
    let inFlight;
    const refresh = () => {
      if (!inFlight) {
        inFlight = readOnce().finally(() => {
          inFlight = void 0;
        });
      }
      return inFlight;
    };
    const pollMs = deps.pollMs ?? SITE_ANALYTICS_LIVE_CONFIG_POLL_MS;
    if (enabled && Number.isFinite(pollMs) && pollMs > 0) {
      timer = setIntervalImpl(() => {
        if (deps.isVisible && !deps.isVisible()) return;
        void refresh();
      }, pollMs);
    }
    const first = new Promise((resolve) => {
      setTimeout(() => resolve(refresh()), 0);
    });
    return { first, refresh, stop, status };
  };
  var definedLiveSwitches = (state) => Object.fromEntries(
    Object.entries(state).filter(([, value]) => value !== void 0)
  );
  var sameLiveSwitches = (left, right) => Object.keys({ ...left, ...right }).every(
    (key) => left[key] === right[key]
  );

  // src/siteLeadSubmit.ts
  var stringValue = (value) => typeof value === "string" && value.trim() ? value.trim() : typeof value === "number" && Number.isFinite(value) ? String(value) : void 0;
  var readGtagIdentifier = (measurementId, identifier) => new Promise((resolve) => {
    const gtag = typeof window === "undefined" ? void 0 : window.gtag;
    if (!measurementId || !gtag) {
      resolve(void 0);
      return;
    }
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      resolve(stringValue(value));
    };
    const timeout = setTimeout(() => finish(void 0), 250);
    try {
      gtag("get", measurementId, identifier, finish);
    } catch {
      finish(void 0);
    }
  });
  var readPosthogIdentifiers = () => {
    try {
      return {
        distinctId: stringValue(eu.get_distinct_id()),
        sessionId: stringValue(eu.get_session_id())
      };
    } catch {
      return {};
    }
  };
  var POSTHOG_SESSION_ATTRIBUTION = [
    ["utm_source", "utmSource"],
    ["utm_medium", "utmMedium"],
    ["utm_campaign", "utmCampaign"],
    ["utm_term", "utmTerm"],
    ["utm_content", "utmContent"],
    ["gclid", "gclid"],
    ["gbraid", "gbraid"],
    ["wbraid", "wbraid"],
    ["fbclid", "fbclid"]
  ];
  var readPosthogSessionAttribution = () => {
    const attribution = {};
    for (const [sessionKey, attributionKey] of POSTHOG_SESSION_ATTRIBUTION) {
      try {
        const value = eu.getSessionProperty(sessionKey);
        if (typeof value === "string" && value.trim() && value.trim().toLowerCase() !== "<masked>") {
          attribution[attributionKey] = value.trim();
        }
      } catch {
      }
    }
    return attribution;
  };
  var shouldRetry = (status) => status === 429 || status >= 500;
  var captureFormSubmitAttempt = (input, eventId) => {
    const properties = buildSiteAnalyticsProviderProperties({
      event_id: eventId,
      business_id: input.businessId,
      customer_account_id: input.customerAccountId,
      site_id: input.siteId,
      page_id: input.pageId,
      site_stage: input.siteStage,
      environment: input.environment
    });
    if (!SITE_ANALYTICS_PROVIDER_SCOPE_KEYS.every((key) => typeof properties[key] === "string")) return;
    const gaMeasurementId = stringValue(input.gaMeasurementId);
    const gtag = typeof window === "undefined" ? void 0 : window.gtag;
    if (gaMeasurementId) {
      try {
        gtag?.("event", "form_submit_attempted", { ...properties, send_to: gaMeasurementId });
      } catch {
      }
    }
    try {
      eu.capture("form_submit_attempted", properties);
    } catch {
    }
  };
  var submitSiteLeadAttempt = async (input, pendingSubmission, endpoint, eventId, hadPendingBody) => {
    const analyticsConsent = input.analyticsConsent === true;
    const [gaClientId, gaSessionId] = analyticsConsent ? await Promise.all([
      readGtagIdentifier(input.gaMeasurementId, "client_id"),
      readGtagIdentifier(input.gaMeasurementId, "session_id")
    ]) : [void 0, void 0];
    if (pendingSubmission?.body) {
      if (input.contentFingerprint !== pendingSubmission.contentFingerprint) {
        throw new Error("Form submission could not be retried after its content changed");
      }
      if (pendingSubmission.endpoint !== endpoint) {
        throw new Error("Form submission could not be retried after its destination changed");
      }
    }
    if (analyticsConsent && !hadPendingBody) captureFormSubmitAttempt(input, eventId);
    const nativeAttribution = analyticsConsent && !hadPendingBody ? readPosthogSessionAttribution() : {};
    const posthogIdentifiers = analyticsConsent ? readPosthogIdentifiers() : {};
    const body = pendingSubmission?.body ?? JSON.stringify({
      ...nativeAttribution,
      ...input.fields,
      ...input.attribution,
      eventId,
      formType: input.formType,
      siteId: input.siteId,
      businessId: input.businessId,
      customerAccountId: input.customerAccountId,
      siteStage: input.siteStage,
      environment: input.environment,
      pageId: input.pageId,
      analyticsConsent,
      gaClientId,
      gaSessionId,
      anonymousId: posthogIdentifiers.distinctId,
      emailClickId: input.clickId,
      metadata: {
        ...input.metadata,
        collectionProfile: input.collectionProfile === "reduced" ? "reduced" : "full",
        clickId: input.clickId,
        landingEventId: input.landingEventId,
        posthogSessionId: posthogIdentifiers.sessionId
      }
    });
    if (pendingSubmission && !pendingSubmission.body) {
      pendingSubmission.body = body;
    }
    let response;
    let outcomeIsAmbiguous = hadPendingBody;
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body
        });
      } catch (error) {
        outcomeIsAmbiguous = true;
        if (attempt === 1) throw error;
        continue;
      }
      if (response.ok) {
        const accepted = await response.json().catch(() => null);
        if (response.status === 201 && accepted && typeof accepted === "object" && !Array.isArray(accepted) && typeof accepted.submissionId === "string" && accepted.submissionId.trim() && typeof accepted.idempotentReplay === "boolean" && (accepted.posthogUserId === void 0 || accepted.posthogUserId === null || typeof accepted.posthogUserId === "string") && (accepted.acceptanceToken === void 0 || typeof accepted.acceptanceToken === "string")) {
          if (pendingSubmission) {
            delete pendingSubmission.eventId;
            delete pendingSubmission.body;
            delete pendingSubmission.contentFingerprint;
            delete pendingSubmission.endpoint;
          }
          return accepted;
        }
        outcomeIsAmbiguous = true;
        if (attempt === 1) throw new Error("Form submission returned an invalid acceptance");
        continue;
      }
      if (!shouldRetry(response.status)) {
        outcomeIsAmbiguous || (outcomeIsAmbiguous = response.status === 409);
        break;
      }
      outcomeIsAmbiguous || (outcomeIsAmbiguous = response.status >= 500);
    }
    if (pendingSubmission && !outcomeIsAmbiguous) {
      delete pendingSubmission.eventId;
      delete pendingSubmission.body;
      delete pendingSubmission.contentFingerprint;
      delete pendingSubmission.endpoint;
    }
    throw new Error("Form submission failed (" + (response?.status ?? "network") + ")");
  };
  var submitSiteLead = (input) => {
    const pendingSubmission = input.pendingSubmission;
    const endpoint = input.endpoint || "/api/site-leads/submit";
    if (!pendingSubmission) {
      return submitSiteLeadAttempt(input, void 0, endpoint, crypto.randomUUID(), false);
    }
    if (!input.contentFingerprint) {
      return Promise.reject(new Error("Form submission retry identity is not configured"));
    }
    if (pendingSubmission.contentFingerprint && input.contentFingerprint !== pendingSubmission.contentFingerprint) {
      return Promise.reject(new Error("Form submission could not be retried after its content changed"));
    }
    if (pendingSubmission.endpoint && pendingSubmission.endpoint !== endpoint) {
      return Promise.reject(new Error("Form submission could not be retried after its destination changed"));
    }
    if (pendingSubmission.body && pendingSubmission.endpoint !== endpoint) {
      return Promise.reject(new Error("Form submission could not be retried after its destination changed"));
    }
    if (pendingSubmission.inFlight) return pendingSubmission.inFlight;
    const hadPendingBody = Boolean(pendingSubmission.body);
    pendingSubmission.eventId ?? (pendingSubmission.eventId = crypto.randomUUID());
    pendingSubmission.contentFingerprint ?? (pendingSubmission.contentFingerprint = input.contentFingerprint);
    pendingSubmission.endpoint ?? (pendingSubmission.endpoint = endpoint);
    const operation = submitSiteLeadAttempt(
      input,
      pendingSubmission,
      endpoint,
      pendingSubmission.eventId,
      hadPendingBody
    );
    const inFlight = operation.finally(() => {
      if (pendingSubmission.inFlight === inFlight) delete pendingSubmission.inFlight;
    });
    pendingSubmission.inFlight = inFlight;
    return inFlight;
  };

  // src/siteAnalyticsRuntime.ts
  var noopValidation = { valid: true, errors: [] };
  var canUseBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
  var resolveEnvironment = (config) => {
    if (config.environment === "production" || config.environment === "preview" || config.environment === "staging" || config.environment === "development" || config.environment === "dev_acceptance") {
      return config.environment;
    }
    return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname) ? "development" : "production";
  };
  var buildProviderScope = (config) => {
    const scope = buildSiteAnalyticsProviderProperties({
      business_id: config.businessId,
      customer_account_id: config.profile.customer_account_id,
      site_id: config.profile.site_id,
      page_id: config.pageId,
      site_stage: config.siteStage,
      environment: resolveEnvironment(config),
      acceptance_run_id: config.acceptanceRunId,
      template_id: config.templateId,
      arm_id: config.armId
    });
    return SITE_ANALYTICS_PROVIDER_SCOPE_KEYS.every((key) => typeof scope[key] === "string") ? scope : null;
  };
  var resolvePosthogUiHost = (apiHost, uiHost) => {
    if (uiHost) return uiHost;
    return apiHost.includes("eu.") ? "https://eu.posthog.com" : "https://us.posthog.com";
  };
  var buildPosthogProductConfig = (config, consentState) => {
    const enabled = consentState === void 0 || isSiteAnalyticsVendorConsentGranted(consentState);
    return {
      ...config.profile.replay_enabled === void 0 ? {} : { disable_session_recording: !enabled || config.profile.replay_enabled === false },
      ...config.posthogCaptureHeatmaps === void 0 ? {} : { capture_heatmaps: enabled && config.posthogCaptureHeatmaps },
      ...config.posthogSurveysEnabled === void 0 ? {} : { disable_surveys: !enabled || !config.posthogSurveysEnabled },
      ...config.posthogCaptureExceptions === void 0 ? {} : { capture_exceptions: enabled && config.posthogCaptureExceptions },
      ...config.posthogCapturePerformance === void 0 ? {} : { capture_performance: enabled && config.posthogCapturePerformance ? { web_vitals: true } : false }
    };
  };
  var POSTHOG_NATIVE_PRODUCT_CONFIG = {
    replayEnabled: { disable_session_recording: false },
    posthogPageviewStrategy: { capture_pageview: "history_change" },
    posthogCaptureHeatmaps: { capture_heatmaps: void 0 },
    posthogSurveysEnabled: { disable_surveys: false },
    posthogCaptureExceptions: { capture_exceptions: void 0 },
    posthogCapturePerformance: { capture_performance: void 0 }
  };
  var updateRuntimeProductPolicy = (config, switches) => {
    config.profile.replay_enabled = switches.replayEnabled ?? void 0;
    config.posthogPageviewStrategy = switches.posthogPageviewStrategy ?? void 0;
    config.posthogCaptureHeatmaps = switches.posthogCaptureHeatmaps ?? void 0;
    config.posthogSurveysEnabled = switches.posthogSurveysEnabled ?? void 0;
    config.posthogCaptureExceptions = switches.posthogCaptureExceptions ?? void 0;
    config.posthogCapturePerformance = switches.posthogCapturePerformance ?? void 0;
  };
  var buildPosthogLiveProductConfig = (config, previous, switches, consentState) => {
    updateRuntimeProductPolicy(config, switches);
    const current = bakedSiteAnalyticsSwitches(config);
    const effective = buildPosthogProductConfig(config, consentState);
    const setConfig = {};
    const apply = (key, configKey) => {
      if ((switches[key] ?? void 0) === previous[key]) return;
      Object.assign(
        setConfig,
        switches[key] === null ? POSTHOG_NATIVE_PRODUCT_CONFIG[key] : { [configKey]: effective[configKey] }
      );
    };
    apply("replayEnabled", "disable_session_recording");
    apply("posthogCaptureHeatmaps", "capture_heatmaps");
    apply("posthogSurveysEnabled", "disable_surveys");
    apply("posthogCaptureExceptions", "capture_exceptions");
    if ((switches.posthogCapturePerformance ?? void 0) !== previous.posthogCapturePerformance) {
      apply("posthogCapturePerformance", "capture_performance");
    }
    if ((switches.posthogPageviewStrategy ?? void 0) !== previous.posthogPageviewStrategy) {
      Object.assign(
        setConfig,
        switches.posthogPageviewStrategy === null ? POSTHOG_NATIVE_PRODUCT_CONFIG.posthogPageviewStrategy : { capture_pageview: current.posthogPageviewStrategy === "off" ? false : "history_change" }
      );
    }
    return setConfig;
  };
  var mountGa4 = (measurementId, scope, consentState) => {
    if (!measurementId || document.getElementById("gcs-ga4-runtime")) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer?.push(arguments);
    };
    if (consentState !== void 0) {
      window.gtag("consent", "default", buildGa4ConsentModeState(consentState));
    }
    const script = document.createElement("script");
    script.id = "gcs-ga4-runtime";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    window.gtag("js", /* @__PURE__ */ new Date());
    window.gtag("set", scope);
    window.gtag("config", measurementId, scope);
  };
  var mountPosthog = (config, scope) => {
    if (!config.posthogKey) return false;
    const apiHost = config.posthogHost || "https://us.i.posthog.com";
    const options = {
      api_host: apiHost,
      ui_host: resolvePosthogUiHost(apiHost, config.posthogUiHost),
      defaults: "2026-05-30",
      ...config.consentState !== void 0 && !isSiteAnalyticsVendorConsentGranted(config.consentState) ? { cookieless_mode: "on_reject", opt_out_capturing_by_default: true } : {},
      ...buildPosthogProductConfig(config, config.consentState),
      before_send: (event) => config.posthogCapturePerformance === false && event?.event === "$web_vitals" ? null : event,
      logs: { resourceAttributes: scope },
      ...config.posthogPageviewStrategy === "off" ? { capture_pageview: false } : {},
      // Vendor-native replay privacy only (https://posthog.com/docs/session-replay/privacy):
      // GCS sets no client-side input-masking override at all, so PostHog's own default (mask
      // all input values; page text stays visible) and the project's server-side masking config
      // (dashboard-controlled) apply untouched. The native `ph-no-capture` / `ph-mask` selectors
      // remain the supported per-element opt-out.
      opt_out_useragent_filter: config.posthogOptOutUseragentFilter === true,
      disable_compression: config.posthogDisableCompression === true || apiHost.startsWith("/"),
      loaded: (client) => {
        client.register(scope);
        if (config.consentState !== void 0) {
          if (isSiteAnalyticsVendorConsentGranted(config.consentState)) {
            client.opt_in_capturing({ captureEventName: false });
          } else {
            client.opt_out_capturing();
          }
        }
      }
    };
    eu.init(config.posthogKey, options);
    return true;
  };
  var createNoopHandle = (state) => {
    let consentState = normalizeSiteAnalyticsConsentState(
      state === void 0 ? "accepted_override" : state
    );
    return {
      cleanup: () => void 0,
      getConsentState: () => consentState,
      submitSiteLead: async () => {
        throw new Error("Site analytics runtime is not configured for lead submission");
      },
      updateConsentState: async (nextConsentState) => {
        consentState = normalizeSiteAnalyticsConsentState(nextConsentState);
        return noopValidation;
      }
    };
  };
  var mountSiteAnalytics = (config) => {
    if (!canUseBrowser() || !config.profile.site_id) return createNoopHandle(config.consentState);
    if (window.__GCS_ANALYTICS_RUNTIME__) {
      window.gcsAnalytics = window.__GCS_ANALYTICS_RUNTIME__;
      return window.__GCS_ANALYTICS_RUNTIME__;
    }
    const runtimeConfig = {
      ...config,
      profile: { ...config.profile },
      ...config.consentState === void 0 ? {} : {
        consentState: normalizeSiteAnalyticsConsentState(config.consentState)
      }
    };
    const scope = buildProviderScope(runtimeConfig);
    if (!scope) return createNoopHandle(runtimeConfig.consentState);
    let consentState = runtimeConfig.consentState ?? "accepted_override";
    mountGa4(runtimeConfig.gaId ?? runtimeConfig.ga4MeasurementId, scope, runtimeConfig.consentState);
    const posthogMounted = mountPosthog(runtimeConfig, scope);
    let liveConfigHandle;
    const handle = {
      cleanup: () => {
        if (window.gcsAnalytics === handle) delete window.gcsAnalytics;
      },
      getConsentState: () => consentState,
      submitSiteLead: (input) => submitSiteLead({
        ...input,
        siteId: scope.site_id,
        businessId: scope.business_id,
        customerAccountId: scope.customer_account_id,
        siteStage: scope.site_stage,
        environment: scope.environment,
        pageId: input.pageId ?? scope.page_id,
        collectionProfile: runtimeConfig.collectionProfile === "reduced" ? "reduced" : "full",
        analyticsConsent: isSiteAnalyticsVendorConsentGranted(consentState),
        gaMeasurementId: runtimeConfig.gaId ?? runtimeConfig.ga4MeasurementId
      }),
      updateConsentState: async (nextConsentState) => {
        const update = buildSiteAnalyticsConsentUpdate(consentState, nextConsentState);
        consentState = update.nextConsentState;
        window.gtag?.("consent", "update", update.ga4ConsentMode);
        if (posthogMounted) {
          const productConfig = buildPosthogProductConfig(runtimeConfig, update.nextConsentState);
          if (Object.keys(productConfig).length) {
            eu.set_config(productConfig);
            eu.webVitalsAutocapture?.startIfEnabled();
          }
          if (update.posthogAction === "opt_in") eu.opt_in_capturing({ captureEventName: false });
          else {
            eu.set_config({ cookieless_mode: "on_reject" });
            eu.opt_out_capturing();
          }
        }
        return noopValidation;
      }
    };
    if (posthogMounted) {
      liveConfigHandle = startSiteAnalyticsLiveConfig(
        runtimeConfig,
        (switches) => {
          const previous = bakedSiteAnalyticsSwitches(runtimeConfig);
          const productConfig = buildPosthogLiveProductConfig(runtimeConfig, previous, switches, consentState);
          if (Object.keys(productConfig).length) {
            eu.set_config(productConfig);
            eu.webVitalsAutocapture?.startIfEnabled();
          }
        },
        {
          href: window.location.href,
          fetchImpl: typeof window.fetch === "function" ? window.fetch.bind(window) : void 0,
          isVisible: () => document.visibilityState !== "hidden"
        }
      );
      handle.liveConfig = liveConfigHandle.status;
      handle.liveConfigReady = liveConfigHandle.first;
      handle.refreshLiveConfig = liveConfigHandle.refresh;
      window.addEventListener("pagehide", (event) => {
        if (!event.persisted) liveConfigHandle?.stop();
      });
    }
    window.gcsAnalytics = handle;
    window.__GCS_ANALYTICS_RUNTIME__ = handle;
    return handle;
  };
  var autoMountSiteAnalytics = () => {
    if (!canUseBrowser() || !window.__GCS_ANALYTICS_CONFIG__) return;
    const mount = () => {
      if (!window.gcsAnalytics && window.__GCS_ANALYTICS_CONFIG__) {
        mountSiteAnalytics(window.__GCS_ANALYTICS_CONFIG__);
      }
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mount, { once: true });
    } else {
      mount();
    }
  };
  autoMountSiteAnalytics();
  return __toCommonJS(siteAnalyticsRuntime_exports);
})();
