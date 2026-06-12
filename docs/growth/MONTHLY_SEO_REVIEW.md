# Monthly SEO & AEO review

Repeat on the first week of each month. Compare to your [GSC baseline](./GSC_BASELINE.md).

## 1. Search Console (28-day window)

- [ ] Indexed pages: _____ (change vs last month: _____)
- [ ] Impressions: _____ | Clicks: _____ | CTR: _____ | Avg position: _____
- [ ] New queries ranking in top 20? List: ___________
- [ ] Pages with impressions but position > 15 (title/meta test candidates): ___________

## 2. Landing pages (Vercel / Cloudflare)

- [ ] Top 5 landing paths: ___________
- [ ] Mobile vs desktop split: ___________
- [ ] Referrers (organic / direct / social): ___________

## 3. Indexable footprint

Run locally:

```bash
npm run build
node scripts/seo-footprint.mjs
```

- [ ] Centre count: _____
- [ ] Indexable location pages: _____
- [ ] Indexable local service pages: _____

## 4. Actions this month (pick 3)

Follow [CONTENT_PRIORITIES.md](./CONTENT_PRIORITIES.md) — listings before new articles.

- [ ] Outreach: email _____ centres ([CENTRE_OUTREACH.md](./CENTRE_OUTREACH.md))
- [ ] Import: add _____ new listings ([LISTINGS_EXPANSION.md](./LISTINGS_EXPANSION.md)); run `node scripts/audit-service-tags.mjs`
- [ ] Content: refresh top GSC pages **or** add guide only for a query gap ([GSC_BASELINE.md](./GSC_BASELINE.md))
- [ ] Internal links: link top GSC page to _____ related guides/centres
- [ ] Fix: correct listing data for _____

## 5. Targets (optional)

| Metric | Last month | This month | Goal (90d) |
|--------|------------|------------|------------|
| Daily sessions | | | 40–80 |
| Non-brand impressions | | | 3–5× baseline |
| Referring domains | | | +15–25 |
