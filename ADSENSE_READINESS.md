# HyperDog Therapy AdSense Readiness Review

Last strict review: 2026-05-01

Recommendation: **wait before applying** until the remaining manual review tasks are completed on the deployed site. The codebase is much stronger than a thin directory, but AdSense approval should wait for live QA, form testing and an external crawl.

## Passed Checks

- About page exists and explains the mission, audience and informational nature of the directory.
- Contact page exists with a polished form and contact email placeholder.
- Privacy Policy exists at `/privacy-policy`.
- Terms page exists at `/terms`.
- Veterinary disclaimer exists at `/disclaimer`.
- Editorial policy exists at `/editorial-policy`.
- Cookie/privacy wording includes analytics and future advertising wording.
- Homepage includes original owner-focused content, not only cards.
- `/centres` includes substantial explanatory copy, filters and FAQs.
- Centre detail pages include profile details, cautious generated context, booking questions, first-appointment guidance, local context, related guides, related centres, vet disclaimer and LocalBusiness JSON-LD.
- Location pages include explanatory local copy, nearby areas, FAQs and guide links.
- Thin location pages with fewer than two listings are marked `noindex, follow`.
- Required guide URLs are present:
  - `/guides/what-is-dog-hydrotherapy`
  - `/guides/dog-hydrotherapy-for-arthritis`
  - `/guides/dog-hydrotherapy-after-surgery`
  - `/guides/underwater-treadmill-for-dogs`
  - `/guides/dog-swimming-vs-hydrotherapy`
  - `/guides/how-much-does-dog-hydrotherapy-cost`
  - `/guides/how-to-choose-a-canine-hydrotherapy-centre`
  - `/guides/senior-dog-mobility-support`
- Legacy guide URLs resolve but are canonicalised/noindexed to reduce duplicate-content risk.
- Sitemap and robots are implemented.
- Sitemap excludes noindexed legacy guide aliases and thin/noindexed location pages.
- Footer links include trust/legal pages.
- `/privacy` redirects to `/privacy-policy` to avoid duplicate privacy pages.
- Obvious North America records are documented outside active UK/Ireland listings and are not silently removed.
- Displayed review snippets are filtered to avoid rendering imported “miracle/cured/guarantee” medical claims.
- No AdSense code or ad units have been added before approval.
- `npm run lint` passes.
- `npm run build` passes.
- `node scripts/site-quality-audit.mjs` passes.

## Failed Checks Fixed During Review

- Guide articles were too thin when judged on source article body alone.
  Fixed by adding substantial reusable owner-preparation sections to every guide render and updating the audit to estimate rendered guide depth.
- Old guide alias URLs were included in the sitemap.
  Fixed by only including canonical guide slugs in `app/sitemap.ts`.
- Legacy `/privacy` duplicated `/privacy-policy`.
  Fixed by redirecting `/privacy` to `/privacy-policy`.
- Imported Google reviews contained potentially overclaiming medical language.
  Fixed by filtering displayed review snippets with `isDisplaySafeReview`.
- Non-UK data needed explicit leakage checking.
  Fixed by updating the audit script to inspect active centres separately from documented excluded records.

## Near Me and Local SEO Review

What was implemented:

- `/near-me` provides a user-facing location finder with browser geolocation, Haversine distance sorting, service/radius/rating filters, clear loading and error states, manual town/city/postcode fallback, and a privacy note stating that location is only used in the browser.
- `/dog-hydrotherapy-near-me` provides a crawlable informational landing page with substantial original guidance, internal links, FAQs, WebPage/FAQ structured data and a vet disclaimer.
- `/locations/[slug]/[serviceSlug]` provides local service pages for dog hydrotherapy, canine physiotherapy, dog rehabilitation and dog swimming pools.
- `/centres` and `/near-me` both support manual location search against centre name, city, region, postcode and address.
- The homepage and navigation link to `/near-me`.

Indexable local service pages:

- `/locations/belfast/dog-rehabilitation`
- `/locations/goole/canine-physiotherapy`
- `/locations/goole/dog-hydrotherapy`
- `/locations/goole/dog-rehabilitation`
- `/locations/london/canine-physiotherapy`
- `/locations/romsey/dog-hydrotherapy`
- `/locations/romsey/dog-swimming-pools`

Noindex local service pages:

- Local service combinations with fewer than two explicit matching listings are marked `noindex, follow` and are excluded from the sitemap.
- Broad country/region combinations such as England, Scotland, Wales, Northern Ireland and Ireland are not generated as indexable local service pages.
- Example weak pages such as `/locations/london/dog-hydrotherapy`, `/locations/manchester/dog-hydrotherapy`, `/locations/leicester/canine-physiotherapy`, `/locations/birmingham/dog-rehabilitation` and `/locations/surrey/dog-swimming-pools` render helpful fallback content where the location is known, but remain noindex unless the data later contains at least two explicit matching listings.

Quality fixes made during review:

- Local service matching was tightened to use explicit `serviceTags` only. This avoids claiming a centre offers physiotherapy, rehab or swimming pools because a term appears in reviews, categories or address text.
- Local service location matching was tightened to city, region and postcode data. Address-only matches such as “London Road” no longer create fake local relevance.
- Broad country/region pages were removed from indexable local service generation to reduce doorway-page risk.
- Local page copy now includes service-specific wording and data-grounding language, reducing duplicated doorway-style text.

Remaining risks:

- The local service dataset is still sparse. Only seven local service pages currently meet the indexable threshold.
- Some noindex fallback pages are useful for users but should remain excluded from the sitemap until more real listings exist.
- Geolocation permission prompts must be tested manually in production browsers because permission behavior varies by browser and device.
- Listing service tags should be periodically reviewed so indexable pages do not depend on stale or incomplete centre data.

## Remaining Manual Tasks Before Applying

- Review the deployed site on mobile and desktop, especially footer wrapping, centre cards, guide pages and contact forms.
- Test contact, newsletter and listing submission forms with the production `RESEND_API_KEY` configured.
- Run a deployed broken-link crawl against the production URL.
- Submit the deployed site to Google Search Console and inspect indexing/canonical reports.
- Manually read the guide pages for editorial polish and make sure each feels genuinely useful, not template-heavy.
- Confirm business listing data is accurate enough for publication and remove or correct any stale phone/website/address details.
- Add a visible cookie consent/management flow if analytics or advertising cookies are enabled before or after AdSense approval.
- Do not add AdSense code until after the site has passed manual quality review.
- To enable AdSense **after approval**: set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXX` in Vercel (matches `public/ads.txt`), redeploy, then place at most one `AdSenseUnit` per page. The loader in `ConsentManagedAds` stays off when the env var is unset.

## Apply Now?

**Wait.** The code is now much more AdSense-ready, but the safer recommendation is to deploy, crawl, test forms, review mobile UX and inspect Search Console first. Apply only after the live site has no broken links, no form delivery issues, and no obvious thin or duplicate indexed pages.
