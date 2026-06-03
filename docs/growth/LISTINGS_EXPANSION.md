# Listings expansion (200–300+ centres)

Each new verified centre adds one indexable `/centres/[slug]` URL and can unlock `/locations/{city}` and `/locations/{city}/{service}` when counts reach two matching listings.

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
npm run build
```

6. Deploy; resubmit sitemap in Search Console.

## Service tags (critical for local pages)

Tags drive indexable local service pages. Ensure each centre has accurate `serviceTags`:

- `Hydrotherapy`, `Physiotherapy`, `Rehab`, `Swimming Pool`, `Treadmill`, `Mobility`

Audit coverage:

```bash
node scripts/seo-footprint.mjs
```

## Targets

| Milestone | Listings | Notes |
|-----------|----------|-------|
| Current | ~100 | Baseline |
| Month 2 | 150+ | +50 via import + submissions |
| Month 4 | 200+ | Priority cities: London, Manchester, Birmingham, Bristol, Kent, Surrey, Leicester |

## List-your-centre funnel

- Link from every centre profile footer (“Is this your centre?”).
- Monthly outreach: [CENTRE_OUTREACH.md](./CENTRE_OUTREACH.md)
- Respond to submissions within 48h when possible.

## Data quality

- Remove or fix stale phone/website/address before publishing.
- Keep North America records in `excludedNonUkRecords`, not active `centres`.
