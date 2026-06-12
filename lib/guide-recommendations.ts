import { guides, type Guide } from "@/lib/guides";

/** Map service tags / categories to cornerstone guide slugs for centre pages. */
const guideSlugsByTag: Record<string, string[]> = {
  Hydrotherapy: [
    "what-is-dog-hydrotherapy",
    "how-much-does-dog-hydrotherapy-cost",
    "first-dog-hydrotherapy-session"
  ],
  Physiotherapy: ["dog-physiotherapy-explained", "how-to-choose-a-canine-hydrotherapy-centre", "vet-referral-for-dog-hydrotherapy"],
  Rehab: ["dog-hydrotherapy-after-surgery", "cruciate-ligament-rehab-dogs", "how-to-choose-a-canine-hydrotherapy-centre"],
  "Swimming Pool": ["dog-swimming-vs-hydrotherapy", "nervous-dog-hydrotherapy", "first-dog-hydrotherapy-session"],
  Treadmill: ["underwater-treadmill-for-dogs", "what-is-dog-hydrotherapy", "how-much-does-dog-hydrotherapy-cost"],
  Mobility: ["senior-dog-mobility-support", "dog-hydrotherapy-for-arthritis", "winter-dog-mobility-at-home"]
};

const defaultSlugs = [
  "what-is-dog-hydrotherapy",
  "how-to-choose-a-canine-hydrotherapy-centre",
  "how-much-does-dog-hydrotherapy-cost",
  "vet-referral-for-dog-hydrotherapy"
];

export function getRecommendedGuidesForCentre(serviceTags: string[], category: string, limit = 4): Guide[] {
  const slugOrder = new Set<string>();

  for (const tag of serviceTags) {
    for (const slug of guideSlugsByTag[tag] ?? []) slugOrder.add(slug);
  }

  const categoryLower = category.toLowerCase();
  if (categoryLower.includes("swim") || categoryLower.includes("pool")) {
    guideSlugsByTag["Swimming Pool"]?.forEach((s) => slugOrder.add(s));
  }
  if (categoryLower.includes("physio")) {
    guideSlugsByTag.Physiotherapy?.forEach((s) => slugOrder.add(s));
  }

  for (const slug of defaultSlugs) slugOrder.add(slug);

  const picked: Guide[] = [];
  for (const slug of Array.from(slugOrder)) {
    const guide = guides.find((g) => g.slug === slug);
    if (guide && !picked.some((p) => p.slug === guide.slug)) picked.push(guide);
    if (picked.length >= limit) break;
  }

  return picked;
}
