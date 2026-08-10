/**
 * One-shot listing curation:
 * - remove non-therapy noise (trainers, rescues, kennels, pure vets, gyms)
 * - upgrade http:// websites to https://
 * - retag/fix known bad rows
 * - add verified priority-city centres from public NARCH/source pages
 *
 * Run: node scripts/curate-centres.mjs
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const filePath = path.join(root, "data/centres.ts");
const text = fs.readFileSync(filePath, "utf8");

const REMOVE_SLUGS = new Set([
  "the-moores-orthopaedic-clinic-specialist-vets",
  "cani-fit",
  "camddwr-canine-ltd",
  "circ-hiit",
  "animal-wellbeing-centre-dog-training-services-in-london-notting-hill-w10",
  "performance-k9-dog-training-ltd",
  "northern-ireland-veterinary-specialists",
  "dogs-trust-ballymena-rehoming-centre",
  "second-nature-k9",
  "corran-kennels",
  "american-standard-k9-dog-training-ireland-belfast",
  "gmc-k9-academy",
  "k9-search-and-rescue-ni",
  "dog-trails-ni",
  "the-barn-animal-rescue-newtownards",
  "crosskennan-lane-animal-sanctuary",
  "benvardin-animal-rescue-kennels",
  "assistance-dogs-northern-ireland-adni",
  "mid-antrim-animal-sanctuary",
  "animal-psychology-clinic"
]);

const ALLOWED_TAGS = new Set([
  "Hydrotherapy",
  "Physiotherapy",
  "Rehab",
  "Swimming Pool",
  "Treadmill",
  "Mobility"
]);

const PATCHES = {
  "paddling-pups": {
    category: "Swimming facility",
    serviceTags: ["Swimming Pool", "Mobility"],
    reviewKeywords: ["dog swimming", "dog care"]
  },
  "waves-canine-hydrotherapy": {
    category: "Hydrotherapy center",
    address: "Unit 1 Tridax Business Park, Honeywood Parkway, Whitfield, Dover CT16 3QX, United Kingdom",
    city: "Dover",
    region: "Kent",
    postcode: "CT16 3QX",
    phone: "+44 1304 790229",
    website: "https://wavescaninehydrotherapy.co.uk/",
    serviceTags: ["Hydrotherapy", "Swimming Pool", "Rehab"]
  },
  "swim-4-paws": {
    website: "https://swim4paws.co.uk/",
    serviceTags: ["Swimming Pool", "Mobility"]
  },
  "greyfriars-rehabilitation-and-hydrotherapy-centre": {
    category: "Rehabilitation center",
    region: "Surrey",
    website: "https://www.greyfriarsrehab.co.uk/",
    serviceTags: ["Hydrotherapy", "Physiotherapy", "Rehab"]
  }
};

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inferTags(centre) {
  const hay = `${centre.name} ${centre.category} ${(centre.serviceTags || []).join(" ")} ${(centre.reviewKeywords || []).join(" ")}`.toLowerCase();
  const tags = [];
  const checks = [
    ["Hydrotherapy", ["hydro"]],
    ["Physiotherapy", ["physio"]],
    ["Rehab", ["rehab", "rehabilitation"]],
    ["Swimming Pool", ["swim", "pool", "aquatic"]],
    ["Treadmill", ["treadmill"]],
    ["Mobility", ["mobility", "arthritis", "senior", "conditioning"]]
  ];
  for (const [label, needles] of checks) {
    if (needles.some((n) => hay.includes(n))) tags.push(label);
  }
  return tags.slice(0, 4);
}

function upgradeWebsite(website) {
  if (!website) return null;
  if (website.startsWith("http://")) return `https://${website.slice("http://".length)}`;
  return website;
}

function makeCentre(partial) {
  const slug = partial.slug || slugify(partial.name);
  return {
    id: partial.id || crypto.randomUUID(),
    googlePlaceId: partial.googlePlaceId || `manual-${slug}`,
    googleMapsUrl: partial.googleMapsUrl || null,
    name: partial.name,
    slug,
    category: partial.category || "Canine therapy centre",
    address: partial.address,
    city: partial.city,
    region: partial.region,
    postcode: partial.postcode,
    phone: partial.phone || null,
    website: partial.website || null,
    rating: partial.rating ?? null,
    reviewCount: partial.reviewCount ?? null,
    latitude: partial.latitude ?? null,
    longitude: partial.longitude ?? null,
    image: partial.image || null,
    serviceTags: partial.serviceTags || [],
    reviewKeywords: partial.reviewKeywords || [],
    reviews: partial.reviews || []
  };
}

const NEW_CENTRES = [
  makeCentre({
    name: "Hydrotherapy at Battersea",
    slug: "hydrotherapy-at-battersea",
    category: "Hydrotherapy center",
    address: "Battersea Dogs & Cats Home, 4 Battersea Park Road, London SW8 4AA, United Kingdom",
    city: "London",
    region: "Greater London",
    postcode: "SW8 4AA",
    phone: "+44 20 7627 9250",
    website: "https://www.battersea.org.uk/what-we-do/caring-for-our-animals/hydrotherapy",
    serviceTags: ["Hydrotherapy", "Treadmill", "Rehab", "Swimming Pool"],
    reviewKeywords: ["hydrotherapy pool", "underwater treadmill", "rehabilitation"],
    latitude: 51.4778,
    longitude: -0.1445
  }),
  makeCentre({
    name: "Trafford Park Canine Hydrotherapy",
    slug: "trafford-park-canine-hydrotherapy",
    category: "Hydrotherapy center",
    address: "Unit 18, The Bridgewater Centre, Robson Avenue, Trafford Park, Manchester M41 7TE, United Kingdom",
    city: "Manchester",
    region: "Greater Manchester",
    postcode: "M41 7TE",
    phone: "+44 7720 843205",
    website: "https://tpcaninehydrotherapy.com/",
    serviceTags: ["Hydrotherapy", "Treadmill", "Rehab", "Swimming Pool"],
    reviewKeywords: ["hydrotherapy", "underwater treadmill", "rehabilitation"],
    latitude: 53.4685,
    longitude: -2.3482
  }),
  makeCentre({
    name: "High Lane Hydrotherapy",
    slug: "high-lane-hydrotherapy",
    category: "Hydrotherapy center",
    address: "Unit 10 Lomber Hey Farm, Andrew Lane, High Lane, Stockport SK6 8HY, United Kingdom",
    city: "Stockport",
    region: "Greater Manchester",
    postcode: "SK6 8HY",
    phone: "+44 7965 384650",
    website: "https://www.highlanehydro.co.uk/",
    serviceTags: ["Hydrotherapy", "Swimming Pool", "Rehab"],
    reviewKeywords: ["hydrotherapy pool", "large breeds", "rehabilitation"],
    latitude: 53.3635,
    longitude: -2.0675
  }),
  makeCentre({
    name: "Aqua Dogs Bury",
    slug: "aqua-dogs-bury",
    category: "Hydrotherapy center",
    address: "Unit 19 Bolholt Industrial Estate, Walshaw, Bury BL8 1PL, United Kingdom",
    city: "Bury",
    region: "Greater Manchester",
    postcode: "BL8 1PL",
    phone: "+44 7968 971281",
    website: "https://aquadogsbury.co.uk/",
    serviceTags: ["Hydrotherapy", "Swimming Pool", "Rehab"],
    reviewKeywords: ["dog hydrotherapy", "warm pool"],
    latitude: 53.6012,
    longitude: -2.3355
  }),
  makeCentre({
    name: "Wet Paws Hydrotherapy",
    slug: "wet-paws-hydrotherapy",
    category: "Hydrotherapy center",
    address: "North Barn, Perry Mill Farm, Birmingham Road, Hopwood, Birmingham B48 7AJ, United Kingdom",
    city: "Birmingham",
    region: "West Midlands",
    postcode: "B48 7AJ",
    phone: "+44 7377 115472",
    website: "https://www.wetpawshydrotherapy.co.uk/",
    serviceTags: ["Hydrotherapy", "Swimming Pool", "Rehab"],
    reviewKeywords: ["dog hydrotherapy", "warm pool"],
    latitude: 52.3668,
    longitude: -1.9005
  }),
  makeCentre({
    name: "Horner Pet Wellness & Rehab Centre",
    slug: "horner-pet-wellness-rehab-centre",
    category: "Rehabilitation center",
    address: "Unit 5 Morrisons Supermarket, Coventry Road, Sheldon, Birmingham B26 3PD, United Kingdom",
    city: "Birmingham",
    region: "West Midlands",
    postcode: "B26 3PD",
    phone: "+44 121 270 5800",
    website: "https://www.hornercentre.com/",
    serviceTags: ["Hydrotherapy", "Physiotherapy", "Rehab", "Treadmill"],
    reviewKeywords: ["veterinary physiotherapy", "underwater treadmill", "rehab"],
    latitude: 52.4565,
    longitude: -1.7802
  }),
  makeCentre({
    name: "Bristol Canine Hydrotherapy Centre",
    slug: "bristol-canine-hydrotherapy-centre",
    category: "Hydrotherapy center",
    address: "Unit 2 WBP, Tower Lane, Warmley, Bristol BS30 8FS, United Kingdom",
    city: "Bristol",
    region: "Bristol",
    postcode: "BS30 8FS",
    phone: "+44 7917 733850",
    website: "https://tdgrooming.co.uk/bristol-canine-hydrotherapy/",
    serviceTags: ["Hydrotherapy", "Swimming Pool", "Rehab"],
    reviewKeywords: ["canine hydrotherapy", "warm pool", "rehabilitation"],
    latitude: 51.4528,
    longitude: -2.4755
  }),
  makeCentre({
    name: "Snowy's Canine Therapy Centre",
    slug: "snowys-canine-therapy-centre",
    category: "Hydrotherapy center",
    address: "The Stables, Tilden Chapel Lane, Smarden, Ashford TN27 8QN, United Kingdom",
    city: "Ashford",
    region: "Kent",
    postcode: "TN27 8QN",
    phone: "+44 1233 434068",
    website: "https://snowyscaninetherapycentre.co.uk/",
    serviceTags: ["Hydrotherapy", "Physiotherapy", "Rehab", "Swimming Pool"],
    reviewKeywords: ["hydrotherapy", "canine therapy", "rehabilitation"],
    latitude: 51.1485,
    longitude: 0.6862
  }),
  makeCentre({
    name: "Ease In Motion Canine Rehabilitation and Hydrotherapy",
    slug: "ease-in-motion-canine-rehabilitation",
    category: "Rehabilitation center",
    address: "Broadway Vets, 1 The Broadway, Herne Bay CT6 8SR, United Kingdom",
    city: "Herne Bay",
    region: "Kent",
    postcode: "CT6 8SR",
    phone: "+44 7854 085263",
    website: "https://www.easeinmotion.co.uk/",
    serviceTags: ["Hydrotherapy", "Physiotherapy", "Rehab", "Treadmill"],
    reviewKeywords: ["canine rehabilitation", "hydrotherapy", "physiotherapy"],
    latitude: 51.3708,
    longitude: 1.1271
  }),
  makeCentre({
    name: "Company of Animals Pet Centre",
    slug: "company-of-animals-pet-centre",
    category: "Rehabilitation center",
    address: "Ruxbury Farm, St Ann's Hill Road, Chertsey KT16 9NL, United Kingdom",
    city: "Chertsey",
    region: "Surrey",
    postcode: "KT16 9NL",
    phone: "+44 1932 574300",
    website: "https://companyofanimals.com/uk/pet-centre/hydrotherapy-and-physiotherapy/appointments-pricing/",
    serviceTags: ["Hydrotherapy", "Physiotherapy", "Rehab", "Treadmill"],
    reviewKeywords: ["hydrotherapy", "physiotherapy", "underwater treadmill"],
    latitude: 51.3915,
    longitude: -0.5208
  }),
  makeCentre({
    name: "Tomlinsons Canine Hydrotherapy Centre",
    slug: "tomlinsons-canine-hydrotherapy-centre",
    category: "Hydrotherapy center",
    address: "Upper Grange Farm, Ratby Lane, Markfield, Leicester LE67 9RJ, United Kingdom",
    city: "Markfield",
    region: "Leicestershire",
    postcode: "LE67 9RJ",
    phone: "+44 1530 242525",
    website: "https://www.tomlinsonskennels.com/",
    serviceTags: ["Hydrotherapy", "Swimming Pool", "Rehab"],
    reviewKeywords: ["hydrotherapy centre", "dog swimming"],
    latitude: 52.6878,
    longitude: -1.2805
  })
];

const marker = "export const centres: Centre[] = ";
const start = text.indexOf(marker);
if (start < 0) throw new Error("centres export not found");
const arrayStart = text.indexOf("= [", start);
if (arrayStart < 0) throw new Error("centres array start not found");
const openIndex = arrayStart + 2; // points at '['
let depth = 0;
let arrayEnd = -1;
for (let i = openIndex; i < text.length; i++) {
  const ch = text[i];
  if (ch === "[") depth++;
  if (ch === "]") {
    depth--;
    if (depth === 0) {
      arrayEnd = i + 1;
      break;
    }
  }
}
if (arrayEnd < 0) throw new Error("could not find centres array end");

const centres = JSON.parse(text.slice(openIndex, arrayEnd));
if (!Array.isArray(centres) || centres.length < 50) {
  throw new Error(`Refusing to continue: parsed only ${centres?.length ?? 0} centres`);
}
const before = centres.length;

const kept = [];
const removed = [];
for (const centre of centres) {
  if (REMOVE_SLUGS.has(centre.slug)) {
    removed.push(centre.slug);
    continue;
  }

  const patch = PATCHES[centre.slug];
  if (patch) Object.assign(centre, patch);

  centre.website = upgradeWebsite(centre.website);

  // Drop noisy Google-type tags; keep or infer therapy tags
  const cleaned = (centre.serviceTags || []).filter((tag) => ALLOWED_TAGS.has(tag));
  centre.serviceTags = cleaned.length ? cleaned : inferTags(centre);
  if (!centre.serviceTags.length) {
    // Still not therapy-like after cleanup — remove
    removed.push(centre.slug);
    continue;
  }

  // Normalise odd multi-nation regions when city is clearly Scottish/NI/Welsh
  if (centre.region?.includes(";")) {
    const parts = centre.region.split(";").map((p) => p.trim()).filter(Boolean);
    const nonBroad = parts.filter((p) => !["England", "Scotland", "Wales", "Northern Ireland", "Ireland"].includes(p));
    if (nonBroad.length) centre.region = nonBroad[0];
    else if (parts.includes("Northern Ireland")) centre.region = "Northern Ireland";
    else if (parts.includes("Scotland")) centre.region = "Scotland";
    else if (parts.includes("Wales")) centre.region = "Wales";
    else centre.region = parts[0];
  }

  kept.push(centre);
}

const existing = new Set(kept.map((c) => c.slug));
const added = [];
for (const centre of NEW_CENTRES) {
  if (existing.has(centre.slug)) continue;
  kept.push(centre);
  added.push(centre.slug);
  existing.add(centre.slug);
}

kept.sort((a, b) => a.name.localeCompare(b.name));

const headerEnd = text.indexOf(marker);
const header = text.slice(0, headerEnd);
const next = `${header}${marker}${JSON.stringify(kept, null, 2)};\n`;
fs.writeFileSync(filePath, next, "utf8");

console.log(
  JSON.stringify(
    {
      before,
      after: kept.length,
      removedCount: removed.length,
      removed,
      addedCount: added.length,
      added,
      httpUpgradedEstimate: "all remaining http:// websites upgraded to https://"
    },
    null,
    2
  )
);
