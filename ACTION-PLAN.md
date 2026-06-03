# SEO Action Plan — roadrunner.media
**Date:** 2026-06-03 | **Priority:** Critical → High → Medium → Low

---

## CRITICAL — Fix Immediately

### 1. Fix 307 → 301 Redirect
**File:** `vercel.json`  
**Impact:** Link equity bleeds every time a link hits `roadrunner.media` instead of `www.roadrunner.media`

Add a `redirects` entry:
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "https://www.roadrunner.media/$1",
      "permanent": true
    }
  ]
}
```
Note: This redirect applies to the bare domain. Alternatively, set the preferred domain to `roadrunner.media` (no www) in Vercel dashboard and remove the www canonical. Picking one canonical and 301-redirecting the other is what matters.

---

### 2. Fix H1 to Include Target Keywords
**File:** `src/components/Hero.jsx`  
**Impact:** Currently "Listings That Sell Themselves" — zero keyword match for "real estate photographer phoenix"

**Option A (minimal change):** Promote the eyebrow text semantically
```jsx
// Change the eyebrow <p> to render as an h2 visually styled, or add h1 after it
<h1 className="...">
  Phoenix Real Estate Photography That Sells
</h1>
```

**Option B (preserve marketing headline):** Split eyebrow and H1 differently
```jsx
<p className="section-eyebrow mb-2">Phoenix, AZ · Real Estate Photography & Videography</p>
<h1 className="font-display font-bold ...">
  Listings That<br />
  <span className="text-gold">Sell Themselves</span>
</h1>
```
With Option B the eyebrow is still a `<p>`, but search engines will weight the H1 with existing keyword context from meta + schema. Option A is safer for SEO.

---

### 3. Add FAQPage Schema
**File:** `index.html` (add a 4th `<script type="application/ld+json">` block)  
**Impact:** Rich result eligibility for FAQ accordions in SERPs — free real estate

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does real estate photography cost in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roadrunner Media offers real estate photography packages starting at $250 for the Essential package (25–35 HDR photos, drone aerials, virtual staging, 2D floor plan, and marketing materials). The Standard package is $350 and the Premium package is $549. All packages include no upfront payment to schedule and 24-hour delivery."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a real estate photography package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Roadrunner Media photography package includes HDR interior and exterior photos, drone aerial photography (FAA-licensed), virtual staging, a 2D floor plan, and a complimentary property website. Higher-tier packages add twilight sessions, social media edits, and video tours."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will I receive my listing photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All photo packages include guaranteed 24-hour delivery via the Aryeo platform. Standard packages deliver within 12–18 hours. Twilight and luxury packages deliver within 24–72 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve in the Phoenix metro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roadrunner Media serves the entire Phoenix metro area including Phoenix, Scottsdale, Tempe, Chandler, Gilbert, Mesa, Glendale, Peoria, and the greater Maricopa County Valley. There is no travel fee within the Phoenix metro."
      }
    },
    {
      "@type": "Question",
      "name": "Is a drone pilot license required for real estate aerial photography in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Commercial drone photography in Arizona requires an FAA Part 107 Remote Pilot Certificate. Roadrunner Media's founder Colin holds an active FAA Part 107 certification. All aerial shoots are fully compliant and insured."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between the photography packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Keep It Simple package ($250) covers properties up to ~2,500 sq ft with 23–35 HDR photos, drone, floor plan, and property website. The Social Engagement package ($450) adds a 30–60 sec video reel. The Deluxe package ($650) adds a full MLS video. The Premier ($800) and Luxury/AirBNB ($1,000) packages add twilight and premium video. All include 24-hour delivery."
      }
    }
  ]
}
```

---

## HIGH — Fix Within 1 Week

### 4. Add telephone + openingHours to LocalBusiness Schema
**File:** `index.html`  
**Impact:** Google Knowledge Panel completeness, map pack eligibility

Add to the `LocalBusiness` schema object:
```json
"telephone": "+1-XXX-XXX-XXXX",
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "20:00"
  }
]
```
If there's no fixed phone number, even a Google Voice number improves local pack signals.

### 5. Add Google Business Profile to Schema sameAs
**File:** `index.html`  
**Impact:** Connects on-site schema to Google's entity graph

```json
"sameAs": [
  "https://www.instagram.com/roadrunnermediaphx",
  "https://www.facebook.com/roadrunnermediaphx",
  "https://g.page/ROADRUNNER-MEDIA-GBP-SLUG"  // ← add GBP URL
]
```
If no GBP exists yet, create one at business.google.com first.

### 6. Convert Portfolio Images to WebP
**Files:** `public/images/*.jpg` (all 28 portfolio photos)  
**Impact:** ~35% reduction in image size → faster LCP and lower bandwidth cost

```bash
# Install cwebp or use ImageMagick
for f in public/images/*.jpg; do
  cwebp -q 82 "$f" -o "${f%.jpg}.webp"
done
```

Then update `Portfolio.jsx` to use `<picture>` elements:
```jsx
<picture>
  <source srcSet={item.src.replace('.jpg', '.webp')} type="image/webp" />
  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
</picture>
```

### 7. Add width/height to Portfolio Images (Fix CLS)
**File:** `src/components/Portfolio.jsx`  
**Impact:** Eliminates CLS from the masonry grid loading

In the masonry layout, add aspect-ratio CSS or explicit dimensions. Since the masonry layout (`columns-*`) requires images to be at natural size, the simplest fix is to add `aspect-ratio` containers:
```jsx
<div className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer">
  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
    <img
      src={...}
      alt={item.alt}
      width={800}
      height={600}
      loading={item.id <= 3 ? 'eager' : 'lazy'}
      decoding="async"
      className="w-full h-full object-cover"
    />
  </div>
```

---

## MEDIUM — Fix Within 1 Month

### 8. Add Headshots + Logo Services to hasOfferCatalog Schema
**File:** `index.html`  
**Impact:** Richer schema representation of all services

Add to `hasOfferCatalog.itemListElement`:
```json
{
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Agent Headshots",
    "description": "Professional headshot sessions with 10–25 edited photos, outfit changes, multiple locations, and LinkedIn/social crops."
  },
  "priceSpecification": {
    "@type": "PriceSpecification",
    "priceCurrency": "USD",
    "minPrice": "199",
    "maxPrice": "349"
  }
},
{
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Logo & Brand Design",
    "description": "Custom logo concepts, full brand guides, business card design, email signature kits, and complete brand strategy."
  },
  "priceSpecification": {
    "@type": "PriceSpecification",
    "priceCurrency": "USD",
    "minPrice": "299",
    "maxPrice": "999"
  }
}
```

### 9. Improve About Section — Expand Content
**File:** `src/components/About.jsx`  
**Impact:** Thin content risk, E-E-A-T improvement

Add a 4th paragraph covering:
- Specific neighborhoods/property types served
- Process description (what happens day-of-shoot)
- Aryeo platform mention (instant delivery)

Example addition:
```jsx
<p>
  Whether it's a starter condo in Tempe, a luxury estate in Paradise Valley, or an
  AirBnB near Old Town Scottsdale, every shoot follows the same process: professional
  equipment setup, meticulous HDR bracketing, and same-day editing delivered through
  your Aryeo media portal — ready for MLS upload within 24 hours.
</p>
```

### 10. Tighten Content-Security-Policy (Remove unsafe-inline)
**File:** `vercel.json`  
**Impact:** Security improvement; some browsers show CSP warnings

React 18+ with Vite can use `nonce`-based CSP instead of `unsafe-inline`. This is a build pipeline change but improves best-practices scores in Lighthouse.

Current: `script-src 'self' 'unsafe-inline'`  
Target: Generate a per-request nonce (requires server middleware or edge function)

This is complex for a pure SPA — consider keeping `unsafe-inline` unless you add SSR.

### 11. Add .well-known/security.txt
**File:** `public/.well-known/security.txt`  
**Impact:** Security signal, completeness

```
Contact: mailto:colin@roadrunner.media
Expires: 2027-06-03T00:00:00.000Z
Preferred-Languages: en
```

### 12. Add Headshots + Logo to Services Section
**File:** `src/components/Services.jsx`  
**Impact:** Headshots and logo services are in the pricing section but missing from the editorial services list

Add two more service entries:
```js
{
  title: 'Agent Headshots',
  description: 'Professional solo and brand sessions. 10–25 edited photos, outfit changes, LinkedIn/social crops.',
  href: '#pricing',
},
{
  title: 'Logo & Brand Design',
  description: 'Custom logos, full brand guides, business cards, and email signature kits — everything to build your agent brand.',
  href: '#pricing',
},
```

---

## LOW — Backlog

### 13. Add City Landing Pages (Long-term)
**Impact:** High keyword coverage gain but requires site architecture change

Consider creating separate URL paths for each service area:
- `/scottsdale-real-estate-photography`
- `/tempe-real-estate-photography`
- `/chandler-real-estate-photography`

These pages can share most content but with city-specific copy, photos of properties in that area, and localized schema. Requires SSG or SSR to be fully crawlable.

### 14. Start a Blog / Content Hub
**Target keywords:**
- "real estate photography tips Phoenix"
- "drone photography FAA rules Arizona"
- "how to stage home for photos"
- "best time for real estate twilight photography"
- "real estate video vs photos which is better"

Each blog post = a long-tail keyword capturing a different stage of the buyer/agent journey.

### 15. Add Video Poster Images for All Portfolio Videos
**File:** `src/components/Portfolio.jsx`  
**Impact:** Several videos reference poster images that may be missing

Check that all `/images/thumb-*.jpg` files exist. Missing poster images show blank/black thumbnails which hurts portfolio visual quality.

### 16. Add Preload for Colin's Photo (FounderCard LCP candidate)
**File:** `index.html`  
The founder card image (`/images/colin-hero.png`) loads below the fold but is a large image. Add lazy loading if not already present.

In `FounderCard.jsx`:
```jsx
<img
  src="/images/colin-hero.png"
  alt="Colin, Founder of Roadrunner Media"
  loading="lazy"
  width={112}
  height={144}
  ...
/>
```

### 17. Add Twitter/X Handle to Twitter Card
**File:** `index.html`  
```html
<meta name="twitter:site" content="@roadrunnermediaphx" />
<meta name="twitter:creator" content="@roadrunnermediaphx" />
```

---

## Implementation Roadmap

```
Week 1 (Critical):
  [x] Fix 307 → 301 redirect in vercel.json
  [x] Fix H1 to include "Phoenix Real Estate Photography"
  [x] Add FAQPage schema to index.html

Week 2 (High):
  [ ] Add telephone + hours to LocalBusiness schema
  [ ] Add GBP sameAs link
  [ ] Run WebP conversion on all portfolio images
  [ ] Add width/height to Portfolio images

Month 1 (Medium):
  [ ] Expand About section copy
  [ ] Add Headshots + Logo to Services component
  [ ] Add Headshots + Logo to hasOfferCatalog schema
  [ ] Add .well-known/security.txt
  [ ] Check all video poster thumbnails exist

Quarter 2 (Low / Strategic):
  [ ] Launch blog with 4 cornerstone articles
  [ ] Build Scottsdale + Tempe + Chandler city landing pages
  [ ] Consider migrating from React SPA to Astro or Next.js for SSG
```

---

## Estimated SEO Score After Fixes

| Category | Current | After Quick Wins | After Full Plan |
|---|---|---|---|
| Technical SEO | 73 | 84 | 90 |
| Content Quality | 76 | 76 | 85 |
| On-Page SEO | 78 | 87 | 88 |
| Schema | 77 | 90 | 93 |
| Performance | 60 | 70 | 82 |
| AI Search | 90 | 92 | 92 |
| Images | 50 | 70 | 80 |
| **Total** | **74** | **81** | **88** |
