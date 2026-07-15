/**
 * Flags centre website URLs that are missing or still on http:// for manual cleanup.
 * Run: node scripts/audit-centre-websites.mjs
 * Does not modify data — review before changing listings.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const centresText = fs.readFileSync(path.join(root, "data/centres.ts"), "utf8");

const centreBlocks = centresText.split(/\n  \},\n  \{/);
const centres = centreBlocks
  .map((block, i) => {
    const slug = block.match(/"slug": "([^"]+)"/)?.[1];
    const name = block.match(/"name": "([^"]+)"/)?.[1] || "";
    if (!slug) return null;
    const websiteMatch = block.match(/"website": (null|"[^"]*")/);
    const websiteRaw = websiteMatch?.[1] ?? null;
    let website = null;
    if (websiteRaw && websiteRaw !== "null") {
      website = websiteRaw.slice(1, -1);
    }
    return { slug, name, website };
  })
  .filter(Boolean);

const nullWebsites = centres.filter((c) => !c.website).map(({ slug, name }) => ({ slug, name }));
const httpWebsites = centres
  .filter((c) => c.website?.startsWith("http://"))
  .map(({ slug, name, website }) => ({ slug, name, website }));

console.log(
  JSON.stringify(
    {
      scanned: centres.length,
      nullWebsiteCount: nullWebsites.length,
      httpWebsiteCount: httpWebsites.length,
      nullWebsites,
      httpWebsitesSample: httpWebsites.slice(0, 25),
      recommendation:
        "Upgrade http:// URLs to https:// when the site supports it; verify null websites manually or leave blank rather than inventing links."
    },
    null,
    2
  )
);
