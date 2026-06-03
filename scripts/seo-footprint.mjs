import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const centresText = fs.readFileSync(path.join(root, "data/centres.ts"), "utf8");
const centreSlugs = [...centresText.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]);
const serviceTagBlocks = [...centresText.matchAll(/"serviceTags": \[([\s\S]*?)\]/g)];

const tagCounts = {};
for (const block of serviceTagBlocks) {
  const tags = [...block[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  for (const tag of tags) {
    tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
  }
}

const guidesText = fs.readFileSync(path.join(root, "lib/guides.ts"), "utf8");
const guideSlugs = [...guidesText.matchAll(/slug: "([^"]+)"/g)]
  .map((m) => m[1])
  .filter((slug, i, arr) => arr.indexOf(slug) === i);

console.log(
  JSON.stringify(
    {
      centres: centreSlugs.length,
      guides: guideSlugs.length,
      serviceTagCounts: tagCounts,
      estimatedSitemapUrls:
        14 + guideSlugs.length + centreSlugs.length + "(locations + local services from build)"
    },
    null,
    2
  )
);
