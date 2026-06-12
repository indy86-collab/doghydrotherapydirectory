# Google Search Console baseline checklist

Complete this once, then reuse [MONTHLY_SEO_REVIEW.md](./MONTHLY_SEO_REVIEW.md) each month.

## Setup (one-time)

1. Add property: `https://www.dogtherapycentres.co.uk` (URL-prefix or Domain property).
2. Verify ownership (DNS TXT or HTML tag on Vercel).
3. Submit sitemap: `https://www.dogtherapycentres.co.uk/sitemap.xml`
4. Confirm `NEXT_PUBLIC_SITE_URL` in Vercel matches the primary domain (no trailing slash).

## Baseline export (fill in after 7–14 days of data)

| Metric | Value | Date recorded |
|--------|-------|---------------|
| Indexed pages | | |
| Not indexed (total) | | |
| Crawled – currently not indexed | | |
| Total impressions (28 days) | | |
| Total clicks (28 days) | | |
| Average CTR | | |
| Average position | | |

### Top 20 queries (paste from Performance → Search results)

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| 1 | | | | |
| … | | | | |

### Top 20 pages

| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| / | | | | |
| … | | | | |

### Brand vs non-brand split

Count queries containing: `hyperdog`, `dog therapy centres`, `dogtherapycentres` → **brand**.

Everything else → **non-brand**.

| Segment | Clicks (28d) | Impressions (28d) |
|---------|--------------|-------------------|
| Brand | | |
| Non-brand | | |

## Decision rules

- **Low impressions** → focus on listings + indexable local pages ([LISTINGS_EXPANSION.md](./LISTINGS_EXPANSION.md)). Do **not** add new guides yet.
- **High impressions, low CTR** → improve titles/meta on top pages ([CONTENT_PRIORITIES.md](./CONTENT_PRIORITIES.md)).
- **Indexed << sitemap URLs** → inspect URL Inspection for canonical/noindex issues.

## When to add guides (not a separate blog)

Use this **after** you have 7+ days of Performance data:

| GSC signal | Action |
|------------|--------|
| Query has impressions, no matching `/guides/*` or centre/location page | Add **one** guide in [`lib/guides.ts`](../../lib/guides.ts) targeting that intent |
| Query has impressions, page exists, CTR under ~2% | Refresh title/description + `dateModified` in [`lib/guide-dates.ts`](../../lib/guide-dates.ts) first |
| Overall impressions very low | Prioritize listings import — see [LISTINGS_EXPANSION.md](./LISTINGS_EXPANSION.md) |
| Tempted to post weekly generic articles | **Do not** — expand `/guides` only (2–4/month max) |

Record query → page decisions here:

| Query (from GSC) | Impressions | Existing page? | Action taken |
|------------------|-------------|----------------|--------------|
| | | | |

## Sitemap reference

Rough URL count: static pages + guides + centre profiles + indexable `/locations/*` + local service pages. Regenerate after bulk imports.
