/**
 * Lists service-tag coverage and which city+service URLs could become indexable.
 * Run: node scripts/audit-service-tags.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const centresText = fs.readFileSync(path.join(root, "data/centres.ts"), "utf8");

const priorityCities = ["london", "manchester", "birmingham", "leicester", "surrey", "kent", "bristol"];
const services = [
  { slug: "dog-hydrotherapy", terms: ["hydrotherapy", "treadmill"] },
  { slug: "canine-physiotherapy", terms: ["physiotherapy"] },
  { slug: "dog-rehabilitation", terms: ["rehab"] },
  { slug: "dog-swimming-pools", terms: ["swimming pool"] }
];

const centreBlocks = centresText.split(/\n  \},\n  \{/);
const centres = centreBlocks.map((block, i) => {
  const slug = block.match(/"slug": "([^"]+)"/)?.[1];
  const city = (block.match(/"city": "([^"]+)"/)?.[1] || "").toLowerCase();
  const region = (block.match(/"region": "([^"]+)"/)?.[1] || "").toLowerCase();
  const tags = [...(block.match(/"serviceTags": \[([\s\S]*?)\]/)?.[1] || "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  return { slug: slug || `block-${i}`, city, region, tags };
});

function locationSlug(centre, citySlug) {
  const hay = `${centre.city} ${centre.region}`.toLowerCase();
  return hay.includes(citySlug.replace(/-/g, " "));
}

function matchesService(centre, service) {
  const hay = centre.tags.join(" ").toLowerCase();
  return service.terms.some((t) => hay.includes(t));
}

const tagCounts = {};
for (const c of centres) {
  for (const t of c.tags) tagCounts[t] = (tagCounts[t] ?? 0) + 1;
}

const gaps = [];
for (const city of priorityCities) {
  for (const service of services) {
    const count = centres.filter((c) => locationSlug(c, city) && matchesService(c, service)).length;
    if (count < 2) {
      gaps.push({ city, service: service.slug, count, need: 2 - count });
    }
  }
}

console.log(
  JSON.stringify(
    {
      centreCount: centres.length,
      serviceTagCounts: tagCounts,
      priorityCityGapsUnderTwoListings: gaps.sort((a, b) => b.need - a.need),
      recommendation:
        gaps.length > 0
          ? "Import or tag more centres in priority cities before adding blog-style content."
          : "Priority cities have solid coverage; use GSC to pick next guide topics."
    },
    null,
    2
  )
);
