# Full SEO Audit — roadrunner.media
**Date:** 2026-06-03  
**Auditor:** Claude Code SEO Suite  
**Business:** Roadrunner Media — Real Estate Photography & Videography, Phoenix AZ  
**Industry:** Local Service (Photography Studio / Real Estate Media)

---

## Overall SEO Health Score: 74 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 73 | 16.1 |
| Content Quality | 23% | 76 | 17.5 |
| On-Page SEO | 20% | 78 | 15.6 |
| Schema / Structured Data | 10% | 77 | 7.7 |
| Performance (CWV) | 10% | 60 | 6.0 |
| AI Search Readiness | 10% | 90 | 9.0 |
| Images | 5% | 50 | 2.5 |
| **Total** | | | **74.4** |

---

## Executive Summary

Roadrunner Media has a **well-structured foundation** with strong schema, good meta tags, solid social proof, and an excellent `llms.txt` for AI search readiness. The site is live on Vercel with proper HSTS and caching. However, several issues are holding it back from ranking at its potential:

**Top 5 Critical Issues:**
1. **307 Temporary Redirect** (not 301) from `roadrunner.media` → `www.roadrunner.media` — leaks link equity
2. **React SPA with no SSR/SSG** — all content rendered via JavaScript; crawlers other than Googlebot may miss it
3. **H1 contains no target keywords** — "Listings That Sell Themselves" has zero search intent alignment
4. **Portfolio images are unoptimized JPEGs** — sizes up to 909KB, no WebP, no width/height attributes (causes CLS)
5. **No FAQPage schema** — FAQ content exists but is not marked up, missing rich result opportunity

**Top 5 Quick Wins:**
1. Fix the 307 → 301 redirect in Vercel config
2. Add `telephone` and `openingHoursSpecification` to LocalBusiness schema
3. Add FAQPage schema for the 6 FAQ answers in the pricing section
4. Add `width` and `height` attributes to all portfolio `<img>` tags
5. Convert portfolio JPEGs to WebP (saves ~60% file size, faster LCP)

---

## Technical SEO

### Domain & Redirects

| Check | Status | Detail |
|---|---|---|
| HTTPS active | ✅ Pass | Vercel auto-SSL |
| HSTS header | ✅ Pass | `max-age=63072000` (2 years) |
| www redirect | ⚠️ Issue | `roadrunner.media` → 307 (Temporary), must be 301 (Permanent) |
| Canonical tag | ✅ Pass | `<link rel="canonical" href="https://www.roadrunner.media/">` |
| robots.txt | ✅ Pass | Allows all crawlers, references sitemap |
| Sitemap | ✅ Pass | `/sitemap.xml` present, 1 URL (expected for SPA) |

**307 vs 301 detail:** Vercel's `redirects` in `vercel.json` defaults to 307 (temporary). Every external link pointing at `roadrunner.media` instead of `www.roadrunner.media` loses link equity until this is fixed with `"permanent": true`.

### Security Headers

| Header | Status | Value |
|---|---|---|
| `X-Content-Type-Options` | ✅ | `nosniff` |
| `X-Frame-Options` | ✅ | `SAMEORIGIN` |
| `X-XSS-Protection` | ✅ | `1; mode=block` |
| `Referrer-Policy` | ✅ | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | ✅ | camera, mic, geolocation blocked |
| `Strict-Transport-Security` | ✅ | 63072000 |
| `Content-Security-Policy` | ⚠️ | Has `'unsafe-inline'` in `script-src` — weakens XSS protection |

**CSP concern:** `script-src 'self' 'unsafe-inline'` allows inline scripts, which is a security weakness. Since this is a React SPA, the inline scripts come from the framework. Fixing requires nonce-based CSP or switching to a stricter hash-based approach.

### Crawlability

- **Rendering:** Client-Side React SPA with `<div id="root"></div>` as only HTML body content. All sections (Portfolio, Services, Pricing, About, Testimonials, FounderCard) are JavaScript-rendered.
- **Googlebot** can render JavaScript, but there's a 2-visit delay (first HTML crawl, then JS render). Other crawlers (Bing, DuckDuckGo, Baidu, social previews) may only see the `<head>` tags.
- **Noscript fallback:** A `<noscript>` tag provides a basic H1 and paragraph — good for accessibility, not sufficient for full content indexing.
- **No server-side rendering (SSR)** or static site generation (SSG). The ideal fix is to migrate to a framework that supports SSG (Vite + static adapter, Astro, or Next.js).

### Caching Strategy

| Resource | Cache-Control |
|---|---|
| `/assets/*` (JS/CSS) | `max-age=31536000, immutable` ✅ |
| `/images/*` | `max-age=86400, stale-while-revalidate=604800` ✅ |
| `/videos/*` | `max-age=86400, stale-while-revalidate=604800` ✅ |
| HTML document | `must-revalidate, max-age=0` ✅ |

Cache strategy is well-configured. JS/CSS bundles are content-hashed and permanently cached.

---

## Content Quality

### E-E-A-T Assessment

| Signal | Status | Notes |
|---|---|---|
| Experience | ✅ Strong | "500+ properties photographed" quantified claim |
| Expertise | ✅ Strong | FAA Part 107 licensed, specific technical services |
| Authoritativeness | ⚠️ Moderate | No third-party mentions, no press, 5 embedded reviews |
| Trustworthiness | ⚠️ Moderate | No phone number, no physical address, no third-party review platform badge |

**Founder card** is excellent for E-E-A-T: named photographer with real photo, credentials stated, specific claim ("500+ properties"). This is the strongest trust signal on the page.

### Content Sections

| Section | Depth | SEO Value |
|---|---|---|
| Hero | Shallow | Conversion-focused; H1 lacks keywords |
| Portfolio | Rich (50 items) | All images have descriptive, geo-tagged alt text |
| Services | Medium | Good keyword coverage (HDR, drone, floor plans, virtual staging) |
| Pricing | Rich | Clear tables, FAQ mini-section, service area mentions |
| About | Shallow (3 paragraphs) | Good keyword density but brief |
| Testimonials | Good | Named reviewers, brokerage affiliations, specific outcomes |
| Founder | Good | Named expert, credentials, FAA license |

**Thin content risk:** The About section is only 3 short paragraphs. This is the most natural place to expand with a more detailed origin story, service area specifics, and process.

### No Blog / Content Marketing

There is no blog, no knowledge base, no educational content. Competitors with blog posts targeting queries like:
- *"how to stage a home for photos phoenix"*
- *"real estate drone photography laws arizona"*
- *"twilight photography tips for listings"*

...are capturing top-of-funnel organic traffic that Roadrunner Media is completely absent from.

---

## On-Page SEO

### Title Tags

| Page | Title | Length | Status |
|---|---|---|---|
| Homepage | `Roadrunner Media \| Real Estate Photography & Videography · Phoenix, AZ` | 68 chars | ✅ Good |

Title is keyword-rich, has brand, service, and geo. Pipe separators are used correctly.

### Meta Descriptions

| Page | Description | Length | Status |
|---|---|---|---|
| Homepage | `Premium Real Estate Photography & Videography in Phoenix, AZ. HDR photos, drone, virtual staging & floor plan — 24-hr delivery. From $250.` | 138 chars | ✅ Good |

Price anchor ($250) and speed anchor (24-hr delivery) are strong CTR signals.

### Heading Structure (JS-rendered)

```
H1: "Listings That Sell Themselves"           ← ⚠️ NO TARGET KEYWORDS
  H2: "Our Work"                              ← Generic
  H2: "What We Create"                        ← Generic
  H2: "Simple, Transparent Pricing"           ← OK
  H2: "Phoenix Real Estate Photography, Done Right." ← ✅ Best on page
  H2: (Testimonials section — no H2)          ← Missing
```

**H1 issue:** "Listings That Sell Themselves" is a compelling marketing headline but has zero keyword relevance. Someone searching "real estate photographer Phoenix AZ" gets no keyword match in the H1. The `<noscript>` H1 ("Roadrunner Media — Real Estate Photography & Videography, Phoenix AZ") is much better but only seen by crawlers that don't render JS.

**Fix:** Update the JS H1 to include target keywords while preserving marketing appeal. Example:
> *"Phoenix Real Estate Photography That Sells"*  
or split into eyebrow + H1:
> eyebrow: "Phoenix Real Estate Photography & Videography"  
> H1: "Listings That Sell Themselves"

(The eyebrow `<p>` already says "Phoenix Real Estate Photography & Videography" — promoting this to an H2 or wrapping it visually would help.)

### Alt Text

All 50 portfolio images have descriptive alt text with room + property type + city/area geo-tags. This is exemplary. Videos use poster images with alt text. ✅

### Internal Linking

Navigation uses anchor links (`#portfolio`, `#services`, `#pricing`, `#about`). This is appropriate for a single-page architecture. No orphaned sections.

### External Links

- Booking → Aryeo platform (external, `noopener noreferrer`) — correct
- Social icons → Instagram, YouTube, Facebook (`noopener noreferrer`) — correct
- Footer → 9line.dev (site credit)

---

## Schema / Structured Data

### Current Implementation

| Schema Type | Status | Notes |
|---|---|---|
| `LocalBusiness` + `PhotographyStudio` | ✅ Present | Combined @type array |
| `aggregateRating` | ✅ Present | 5.0/5, 5 reviews — enables stars in SERPs |
| `review[]` | ✅ Present | 5 reviews with dates, authors, ratings |
| `hasOfferCatalog` | ✅ Present | 2 offers with price ranges |
| `areaServed` | ✅ Present | 7 cities with Wikipedia sameAs |
| `geo` + `address` | ✅ Present | Coordinates + city/state (no street address) |
| `Person` (Colin) | ✅ Present | FAA credentials, job title, image |
| `WebSite` | ✅ Present | Sitelinks search eligibility |

### Missing / Issues

| Issue | Impact |
|---|---|
| No `telephone` field | Medium — reduces Knowledge Panel completeness |
| No `openingHoursSpecification` | Medium — agents need to know availability |
| No `FAQPage` schema | High — FAQ content exists in Pricing section, rich result missed |
| `priceRange` is `$$` only | Low — `hasOfferCatalog` already has specific prices |
| Only 2 offers in catalog | Low — headshots and logo design not included |
| `streetAddress` missing from `PostalAddress` | Medium — limits map pack eligibility |
| `ratingCount: 5` is very low | Medium — Google may not display stars for < 10 reviews |

### FAQPage Schema Opportunity

The Pricing section (`Pricing.jsx`) renders 2 inline FAQ-style questions. The `llms.txt` contains 6 fully written FAQ answers covering pricing, delivery, service area, drone licensing, and package differences. These should be marked up with `FAQPage` schema in `index.html`.

---

## Performance

### Resource Inventory

| Resource | Size (on disk) | Notes |
|---|---|---|
| JS bundle | 186KB (compressed) | Single chunk, good |
| CSS bundle | ~30KB (est.) | Tailwind purged |
| Hero image (`hero.jpg`) | ~800KB | Largest LCP candidate |
| Portfolio JPEGs (28 images) | 700–909KB each | Critical issue |
| Portfolio videos (10 files) | 286MB total | Served as direct MP4 |
| Google Fonts | External | Preconnected correctly |

### Core Web Vitals (Lab Estimate)

| Metric | Estimated | Target |
|---|---|---|
| LCP (Largest Contentful Paint) | ~2.5–3.5s | < 2.5s |
| INP (Interaction to Next Paint) | ~150–250ms | < 200ms |
| CLS (Cumulative Layout Shift) | ~0.05–0.15 | < 0.1 |

LCP is the hero image (`hero.jpg`) — it has `fetchpriority="high"` and `loading="eager"` which is correct. At ~800KB it will still be slow on mobile.

**CLS risk:** Portfolio images (`<img>` tags in the masonry grid) have no `width`/`height` attributes. The browser cannot reserve space before images load, causing layout shifts.

### Image Optimization Gaps

| Issue | Impact |
|---|---|
| All portfolio images are JPEG | High — WebP saves 25–35%, AVIF saves 50% |
| Largest images ~900KB | High — critical on mobile 4G |
| No `width`/`height` on portfolio `<img>` | High — causes CLS |
| No responsive `srcset` | Medium — same full image served to all screens |
| Hero image served as JPEG | Medium — should be WebP |
| Videos served as raw MP4 | Medium — no adaptive bitrate, 286MB total |

### What's Working

- ✅ `fetchpriority="high"` on hero image
- ✅ `loading="lazy"` on non-critical portfolio images (items 4+)
- ✅ `<link rel="preload">` for hero image in `<head>`
- ✅ `preconnect` for Google Fonts origin
- ✅ Font loaded with `onload` async pattern (no render blocking)
- ✅ CSS assets cached with `immutable` for 1 year

---

## Images

| Item | Status |
|---|---|
| Hero image alt text | ✅ Descriptive |
| All 50 portfolio images have alt text | ✅ Geo-tagged, descriptive |
| Colin founder photo alt text | ✅ Good |
| WebP format | ❌ None — all JPEG |
| AVIF format | ❌ None |
| Responsive `srcset` | ❌ Not implemented |
| `width`/`height` attributes on portfolio imgs | ❌ Missing — CLS risk |
| Image CDN optimization | ⚠️ Vercel serves as-is; no `<Image>` optimization used |

The alt text quality is excellent. The optimization gap is entirely in format and size, not descriptiveness.

---

## AI Search Readiness

| Signal | Status | Notes |
|---|---|---|
| `llms.txt` | ✅ Excellent | Comprehensive, detailed, well-structured |
| `robots.txt` AI crawler rules | ✅ Allow all | No AI crawler blocks |
| FAQ content | ✅ 6 questions with full answers | Highly citable |
| Price transparency | ✅ Full pricing table visible in source | |
| Named expert | ✅ Colin, FAA Part 107 | Specific credentials |
| Service area specificity | ✅ 7 cities named | |
| Structured data | ✅ LocalBusiness + reviews | |
| Passage retrieval readiness | ✅ FAQ answers are self-contained | |
| Citation license in llms.txt | ✅ Explicitly allows AI use | |

The `llms.txt` is **best-in-class** for a local service business. It includes pricing, service area, credentials, testimonials, FAQ, and explicit citation permission. This dramatically increases the probability of appearing in ChatGPT, Perplexity, and Google AI Overviews for queries like *"real estate photographer phoenix az cost"*.

---

## Local SEO

| Signal | Status | Notes |
|---|---|---|
| Business name in title | ✅ | |
| City/State in title + meta | ✅ | Phoenix, AZ |
| LocalBusiness schema | ✅ | |
| GeoCoordinates | ✅ | |
| areaServed cities | ✅ | 7 cities |
| Street address | ❌ | Only city/state — limits map pack eligibility |
| Phone number | ❌ | Contact via email or Aryeo only |
| Business hours | ❌ | Not specified anywhere |
| Google Business Profile | ❌ | No GBP listing linked in schema `sameAs` |
| Review platform integration | ❌ | Only embedded reviews (no Google/Yelp badge) |
| NAP consistency | ⚠️ | No phone = incomplete NAP (Name, Address, Phone) |

**Map pack eligibility is limited** without a street address and phone number in the LocalBusiness schema. For a service-area business (SAB) like Roadrunner, using a home-base address is optional, but adding a phone number and GBP link is critical.

---

## Sitemap Quality

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.roadrunner.media/</loc>
    <lastmod>2026-05-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Single URL is correct for a one-page SPA. `lastmod` is recent (2026-05-18). No improvements needed here unless additional pages are added in the future.

---

## Competitive Gaps

Based on the business type (local real estate photographer in Phoenix):

| Gap | Impact |
|---|---|
| No city landing pages (Scottsdale, Tempe, Mesa, Chandler…) | High — competitors can rank for each city separately |
| No blog / content hub | High — zero long-tail keyword coverage |
| No case study pages | Medium — "3 days sold, 15% over ask" buried in testimonials |
| No dedicated services pages (photography, video, drone, headshots) | Medium — all content in a single scrollable section |
| External booking (Aryeo) | Low — users leave the domain to book |

---

## Summary Scorecard

```
Overall SEO Health: 74/100 — GOOD (with fixable gaps)

✅ STRENGTHS                    ⚠️/❌ WEAKNESSES
─────────────────────────────   ─────────────────────────────────────
Title & meta description        H1 lacks target keywords
Rich schema (LocalBusiness)     307 redirect (not 301)
5 embedded reviews w/ schema    No phone / street address
Excellent llms.txt              Images: no WebP, no width/height
Alt text on all images          React SPA: no SSR (JS crawl risk)
Hero image preloaded correctly  No FAQPage schema
Good security headers           No blog or content hub
Strong E-E-A-T signals          No Google Business Profile linked
24-hr delivery differentiator   ratingCount only 5 (≤ star threshold)
Comprehensive FAQ content       CSP has unsafe-inline
```
