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

- **Low impressions** → focus on listings + indexable local pages ([LISTINGS_EXPANSION.md](./LISTINGS_EXPANSION.md)).
- **High impressions, low CTR** → improve titles/meta on top pages.
- **Indexed << sitemap URLs** → inspect URL Inspection for canonical/noindex issues.

## Sitemap reference

Rough URL count: static pages + guides + centre profiles + indexable `/locations/*` + local service pages. Regenerate after bulk imports.
