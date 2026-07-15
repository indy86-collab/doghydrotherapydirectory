# Listings expansion (200–300+ centres)

Each new verified centre adds one indexable `/centres/[slug]` URL and can unlock `/locations/{city}` and `/locations/{city}/{service}` when counts reach two matching listings.

**Snapshot (2026-07-15):** ~126 active centres. Priority city×service gaps remain large (London rehab/pools, Manchester, Birmingham, Leicester, Surrey, Kent, Bristol often at 0–1 matching tagged listings). Treadmill tags: only ~5. Import + accurate tagging unlocks more indexable local URLs faster than new guides.

## Weekly cadence

1. Run `npm run seo:service-tags` — note priority city gaps.
2. Run `npm run seo:websites` — fix null / stale `http://` website fields when verified.
3. Import or manually add 5–15 verified UK/Ireland therapy centres (prefer priority cities).
4. Re-tag centres so `serviceTags` use only: `Hydrotherapy`, `Physiotherapy`, `Rehab`, `Swimming Pool`, `Treadmill`, `Mobility`.
5. Run `npm run seo:footprint`, `node scripts/site-quality-audit.mjs`, `npm run build`.
6. Deploy; request indexing for new location pages in Search Console if needed.

## Import workflow

1. Export listings CSV from your source (same columns as existing import).
2. Fetch Google reviews (optional): `python scripts/fetch-google-reviews.py`
3. Run import:

```bash
python scripts/import-centres.py --csv /path/to/listings.csv
```

4. Review excluded non-UK rows in script output.
5. Run quality checks:

```bash
node scripts/site-quality-audit.mjs
node scripts/seo-footprint.mjs
npm run seo:service-tags
npm run seo:websites
npm run build
```

6. Deploy; resubmit sitemap in Search Console.

## Service tags (critical for local pages)

Tags drive indexable local service pages. Ensure each centre has accurate `serviceTags`:

- `Hydrotherapy`, `Physiotherapy`, `Rehab`, `Swimming Pool`, `Treadmill`, `Mobility`

Audit coverage:

```bash
npm run seo:footprint
npm run seo:service-tags
```

The service-tags audit shows which **London, Manchester, Birmingham**, etc. city+service URLs still need more listings before they can index.

### Noisy Google categories (manual review)

Some imported rows still carry non-therapy Google types (`Dog trainer`, `Kennel`, `Animal rescue service`, `Veterinarian`, `Gym`, etc.). Prefer replacing those with real therapy tags or removing the listing if it is not a hydrotherapy/physio/rehab/swimming provider. Do not delete in bulk without checking each profile.

## Priority cities (fill to ≥2 tagged centres per service)

| City | Goal |
|------|------|
| London | Unlock hydrotherapy, physio, rehab, pools |
| Manchester | Unlock all four local service pages |
| Birmingham | Unlock all four local service pages |
| Bristol | Unlock hydrotherapy + related |
| Kent / Surrey / Leicester | County/city hubs + service combos |

After a city×service reaches ≥2 matching listings, add unique intro copy in [`lib/local-page-copy.ts`](../../lib/local-page-copy.ts) so the page is not thin template text.

## Targets

| Milestone | Listings | Notes |
|-----------|----------|-------|
| Current (Jul 2026) | ~126 | Sparse metros; few indexable local service URLs |
| Next | 150+ | +25 focus on London / Manchester / Birmingham |
| Month 4 | 200–300 | Priority cities above + Treadmill coverage |

## List-your-centre funnel

- Link from every centre profile footer (“Is this your centre?”).
- Monthly outreach: [CENTRE_OUTREACH.md](./CENTRE_OUTREACH.md)
- Respond to submissions within 48h when possible.

## Data quality

- Remove or fix stale phone/website/address before publishing (`npm run seo:websites`).
- Keep North America records in `excludedNonUkRecords`, not active `centres`.
