import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const issues = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function fail(message) {
  issues.push(message);
}

function checkNoDeprecatedCopy() {
  const checks = [
    {
      file: "app/page.tsx",
      patterns: [
        /Verified information/,
        /Accurate,\s*up-to-date/i,
        /trusted directory/i,
        /Expert advice/i,
        /aid recovery/i,
        /relieve pain/i
      ]
    },
    {
      file: "components/CtaBanner.tsx",
      patterns: [/Join trusted/i, /Increase your visibility/i]
    },
    {
      file: "app/list-your-centre/page.tsx",
      patterns: [/find trusted hydrotherapy/i]
    }
  ];

  for (const check of checks) {
    const text = read(check.file);
    for (const pattern of check.patterns) {
      if (pattern.test(text)) fail(`Deprecated overconfident copy in ${check.file}: ${pattern.source}`);
    }
  }
}

function checkLoginIsNotThinPage() {
  const loginPage = read("app/login/page.tsx");
  const footer = read("components/Footer.tsx");
  const sitemap = read("app/sitemap.ts");

  if (/coming soon/i.test(loginPage)) fail("Indexable coming-soon copy remains in /login.");
  if (!/redirect\("\/list-your-centre"\)/.test(loginPage)) fail("/login should redirect to /list-your-centre until a real login exists.");
  if (footer.includes("/login")) fail("Footer still links to thin /login page.");
  if (sitemap.includes("/login")) fail("Sitemap includes /login.");
}

function checkLocationMatching() {
  const utils = read("lib/utils.ts");
  const match = utils.match(/export function getCentresByLocation[\s\S]*?\n}\n/);
  const body = match?.[0] ?? "";

  if (!body) fail("Could not find getCentresByLocation implementation.");
  if (/centre\.address/.test(body)) fail("getCentresByLocation still uses address text, which can inflate local counts.");
  if (!/isBroadOrCompoundLocationName/.test(utils)) fail("Broad or compound location exclusion helper is missing.");
  if (!/broadLocationSlugs/.test(utils)) fail("Broad country/region location guard is missing.");

  const sitemap = read("app/sitemap.ts");
  for (const route of ["/locations/england", "/locations/scotland", "/locations/wales", "/locations/ireland"]) {
    if (sitemap.includes(route)) fail(`Broad location route appears directly in sitemap source: ${route}`);
  }
}

function checkReviewSafety() {
  const reviewSafety = read("lib/review-safety.ts");
  const home = read("app/page.tsx");
  const centrePage = read("app/centres/[slug]/page.tsx");
  const requiredPatterns = [
    "miracle",
    "back on",
    "avoided?",
    "paralys",
    "tumou?r",
    "spleen",
    "cancer",
    "discharged"
  ];

  for (const pattern of requiredPatterns) {
    if (!reviewSafety.includes(pattern)) fail(`Review safety filter missing medical-risk pattern: ${pattern}`);
  }

  if (!home.includes("isDisplaySafeReview(review.text)")) {
    fail("Homepage review selection must filter the full source review text before rendering snippets.");
  }

  if (!home.includes("slice(0, 257)") || !home.includes("quote: snippet(review.text)")) {
    fail("Homepage review excerpts should be shortened before rendering.");
  }

  if (!centrePage.includes("centre.reviews.filter((review) => isDisplaySafeReview(review.text))")) {
    fail("Centre detail reviews must filter displayed Google review text.");
  }
}

function checkEnrichmentAndTransparency() {
  if (!exists("lib/centre-enrichment.ts")) fail("Centre enrichment layer is missing.");

  const centrePage = read("app/centres/[slug]/page.tsx");
  const editorial = read("app/editorial-policy/page.tsx");
  const about = read("app/about/page.tsx");

  if (!centrePage.includes("getCentreEditorialEnrichment")) fail("Centre detail page does not render enrichment.");
  if (!centrePage.includes("Found an outdated phone number")) fail("Centre detail page is missing correction pathway copy.");
  if (!editorial.includes("AI-assisted listing notes")) fail("Editorial policy does not explain AI-assisted listing notes.");
  if (!about.includes("If a listing appears outdated")) fail("About page is missing correction pathway copy.");
}

function checkConsentManagedAnalytics() {
  const layout = read("app/layout.tsx");
  const consentAnalytics = read("components/ConsentManagedAnalytics.tsx");
  const cookieConsent = read("components/CookieConsent.tsx");
  const cookiesPage = read("app/cookies/page.tsx");
  const privacyPage = read("app/privacy-policy/page.tsx");

  if (layout.includes("@vercel/analytics/next")) fail("Root layout imports always-on Vercel Analytics.");
  if (layout.includes("static.cloudflareinsights.com")) fail("Root layout loads Cloudflare analytics without consent wrapper.");
  if (!layout.includes("<ConsentManagedAnalytics />")) fail("Root layout does not include consent-managed analytics.");
  if (!consentAnalytics.includes("parsed.analytics === true")) fail("ConsentManagedAnalytics does not require analytics consent.");
  if (!cookieConsent.includes("hyperdog-cookie-consent-change")) fail("Cookie consent does not notify analytics wrapper after saving.");
  if (!cookiesPage.includes("analytics scripts should not load")) fail("Cookies policy does not describe analytics consent behavior.");
  if (!privacyPage.includes("only after analytics consent is saved")) fail("Privacy policy does not describe analytics consent behavior.");
}

function checkConsentManagedAds() {
  const layout = read("app/layout.tsx");
  const ads = read("components/ConsentManagedAds.tsx");
  const cookiesPage = read("app/cookies/page.tsx");
  const privacyPage = read("app/privacy-policy/page.tsx");

  if (!exists("components/ConsentManagedAds.tsx")) fail("ConsentManagedAds component is missing.");
  if (!layout.includes("<ConsentManagedAds />")) fail("Root layout does not include consent-managed ads loader.");
  if (!ads.includes("NEXT_PUBLIC_ADSENSE_CLIENT")) fail("AdSense loader must be gated on NEXT_PUBLIC_ADSENSE_CLIENT.");
  if (!ads.includes("parsed.marketing === true")) fail("AdSense loader must require marketing consent.");
  if (ads.includes("data-ad-slot") && !ads.includes("if (!client || !enabled) return null")) {
    fail("AdSense units must not render without client env and marketing consent.");
  }
  if (!cookiesPage.includes("Advertising cookies")) fail("Cookies policy missing advertising cookies section.");
  if (!privacyPage.includes("advertising consent")) fail("Privacy policy should mention advertising consent gating.");
}

checkNoDeprecatedCopy();
checkLoginIsNotThinPage();
checkLocationMatching();
checkReviewSafety();
checkEnrichmentAndTransparency();
checkConsentManagedAnalytics();
checkConsentManagedAds();

const output = {
  checkedAt: new Date().toISOString(),
  checks: [
    "deprecated-overclaiming-copy",
    "thin-login-page",
    "strict-location-matching",
    "review-safety",
    "listing-enrichment-transparency",
    "consent-managed-analytics",
    "consent-managed-ads"
  ],
  issues
};

console.log(JSON.stringify(output, null, 2));
if (issues.length) process.exitCode = 1;
