// Retired first-party analytics endpoint.
//
// The site now loads the canonical GCS native runtime, which has no first-party browser lane.
// This function used to forward legacy events (including a custom `page_view`, `cta_clicked`
// and `email_clicked`) to the GCS ingest, with the ingest token, and to PostHog under the
// configured site id. It is kept so the route stays explicit, and it answers 410 Gone without
// reading the request, reading env, or forwarding anything, so a stale tab still running an old
// bundle cannot add legacy events to the site's reports.
export default function handler(_req, res) {
  res.status(410).setHeader('content-type', 'application/json')
  res.end(JSON.stringify({ ok: false, error: 'gone' }))
}
