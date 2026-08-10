import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredPages = [
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/privacy-policy/page.tsx",
  "app/terms/page.tsx",
  "app/editorial-policy/page.tsx",
  "app/disclaimer/page.tsx"
];

const requiredGuideSlugs = [
  "what-is-dog-hydrotherapy",
  "dog-hydrotherapy-for-arthritis",
  "dog-hydrotherapy-after-surgery",
  "underwater-treadmill-for-dogs",
  "dog-swimming-vs-hydrotherapy",
  "how-much-does-dog-hydrotherapy-cost",
  "how-to-choose-a-canine-hydrotherapy-centre",
  "senior-dog-mobility-support"
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

const issues = [];

for (const page of requiredPages) {
  if (!exists(page)) issues.push(`Missing required page: ${page}`);
}

const sourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const relative = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(relative);
    if (entry.isFile() && /\.(tsx|ts|md)$/.test(entry.name)) sourceFiles.push(relative);
  }
}
walk("app");
walk("components");
walk("lib");

for (const file of sourceFiles) {
  const text = read(file);
  if (/lorem ipsum|placeholder .*page|ready for the final/i.test(text)) {
    issues.push(`Placeholder or lorem-style content found in ${file}`);
  }
}

const guidesText = read("lib/guides.ts");
const guidePageText = read("app/guides/[slug]/page.tsx");
const guideOwnerPrepText = exists("lib/guide-owner-prep.ts") ? read("lib/guide-owner-prep.ts") : "";
for (const slug of requiredGuideSlugs) {
  if (!guidesText.includes(slug)) {
    issues.push(`Required guide slug is not directly represented or aliased: ${slug}`);
  }
}

const renderedGuideSupplementWords = (`${guidePageText}\n${guideOwnerPrepText}`.match(/[A-Za-z0-9']+/g) || [])
  .filter((word) => !["className", "const", "return", "import", "from", "function", "export"].includes(word))
  .length;
const guideEntries = [...guidesText.matchAll(/slug: "([^"]+)"[\s\S]*?body: \[([\s\S]*?)\],\n    sections: \[([\s\S]*?)\],\n    faqs: \[([\s\S]*?)\]/g)];
const thinGuides = guideEntries
  .map((match) => {
    const text = `${match[2]} ${match[3]} ${match[4]}`;
    const dataWords = (text.match(/[A-Za-z0-9']+/g) || []).length;
    return { slug: match[1], estimatedRenderedWords: dataWords + renderedGuideSupplementWords };
  })
  .filter((guide) => requiredGuideSlugs.includes(guide.slug) && guide.estimatedRenderedWords < 900);
if (thinGuides.length) {
  issues.push(`Required guides estimated under 900 rendered words: ${thinGuides.map((guide) => `${guide.slug} (${guide.estimatedRenderedWords})`).join(", ")}`);
}

const titleMatches = [...guidesText.matchAll(/title: "([^"]+)"/g)].map((match) => match[1]);
const duplicateTitles = titleMatches.filter((title, index) => titleMatches.indexOf(title) !== index);
if (duplicateTitles.length) {
  issues.push(`Duplicate guide titles: ${[...new Set(duplicateTitles)].join(", ")}`);
}

const footerText = read("components/Footer.tsx");
for (const href of ["/privacy-policy", "/terms", "/editorial-policy", "/disclaimer", "/contact", "/faqs"]) {
  if (!footerText.includes(href)) issues.push(`Footer missing trust/navigation link: ${href}`);
}

const sitemapText = read("app/sitemap.ts");
for (const alias of ["does-my-dog-need-hydrotherapy", "hydrotherapy-for-arthritis", "post-surgery-rehab-guide", "senior-dog-mobility-guide", "how-to-choose-dog-hydrotherapy-centre"]) {
  if (sitemapText.includes(alias)) issues.push(`Legacy guide alias appears in sitemap source: ${alias}`);
}

const centresText = read("data/centres.ts");
const activeCentresText = centresText.split("export const centres: Centre[] = [")[1] || "";
for (const nonUkPattern of [/Canada/, /Denver, CO/, /Calgary/]) {
  if (nonUkPattern.test(activeCentresText)) issues.push(`Potential non-UK listing may appear in active centres data: ${nonUkPattern.source}`);
}

const renderedSourceText = sourceFiles
  .filter((file) => !file.startsWith("data/"))
  .map((file) => read(file))
  .join("\n");
for (const riskyClaim of [/\bguarantee[sd]?\b/i, /\bcure[sd]?\b/i, /\bmiracle worker\b/i, /\bveterinary-approved\b/i]) {
  if (riskyClaim.test(renderedSourceText) && !renderedSourceText.includes("unsupportedMedicalClaimPatterns")) {
    issues.push(`Potential unsupported medical claim in rendered source: ${riskyClaim.source}`);
  }
}

const output = {
  checkedAt: new Date().toISOString(),
  requiredPages: requiredPages.map((page) => ({ page, exists: exists(page) })),
  requiredGuideSlugs,
  guideDepthCheck: thinGuides.length ? "failed" : "passed",
  issues
};

console.log(JSON.stringify(output, null, 2));
if (issues.length) process.exitCode = 1;
