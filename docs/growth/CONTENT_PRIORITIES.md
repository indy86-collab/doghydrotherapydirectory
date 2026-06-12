# Content priorities (guides, not blog)

HyperDog Therapy uses **`/guides`** as editorial SEO content. There is no separate `/blog` — that avoids split authority and duplicate maintenance.

## Priority order

1. **Listings data** — run `node scripts/audit-service-tags.mjs` and import centres ([LISTINGS_EXPANSION.md](./LISTINGS_EXPANSION.md))
2. **GSC-driven refreshes** — titles/meta + `dateModified` on pages that already get impressions
3. **New guides** — only for query gaps confirmed in [GSC_BASELINE.md](./GSC_BASELINE.md)
4. **Outreach** — [CENTRE_OUTREACH.md](./CENTRE_OUTREACH.md)

## Adding a new guide (checklist)

- [ ] Query has impressions in GSC and no strong existing page
- [ ] Add entry to [`lib/guides.ts`](../../lib/guides.ts) (900+ rendered words with standard supplement sections)
- [ ] Add dates in [`lib/guide-dates.ts`](../../lib/guide-dates.ts)
- [ ] Link from [`app/guides/page.tsx`](../../app/guides/page.tsx) quick links if cornerstone topic
- [ ] Add slug to [`public/llms.txt`](../../public/llms.txt) if high priority
- [ ] Run `node scripts/site-quality-audit.mjs` and `npm run build`

## Pages to refresh first (typical high-intent)

Until GSC data overrides, prioritize refreshing:

- `/guides/how-much-does-dog-hydrotherapy-cost`
- `/guides/how-to-choose-a-canine-hydrotherapy-centre`
- `/guides/what-is-dog-hydrotherapy`
- `/dog-hydrotherapy-near-me`
- `/centres` and top centre profiles by impressions

Update `dateModified` in [`lib/guide-dates.ts`](../../lib/guide-dates.ts) when you materially edit copy.
