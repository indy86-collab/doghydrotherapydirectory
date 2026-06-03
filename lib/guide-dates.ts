/** ISO dates for Article schema and visible freshness on guides. */
export const guideDates: Record<string, { datePublished: string; dateModified: string }> = {
  "what-is-dog-hydrotherapy": { datePublished: "2026-03-01", dateModified: "2026-06-01" },
  "dog-hydrotherapy-for-arthritis": { datePublished: "2026-03-01", dateModified: "2026-06-01" },
  "dog-hydrotherapy-after-surgery": { datePublished: "2026-03-01", dateModified: "2026-06-01" },
  "how-much-does-dog-hydrotherapy-cost": { datePublished: "2026-03-05", dateModified: "2026-06-01" },
  "underwater-treadmill-for-dogs": { datePublished: "2026-03-05", dateModified: "2026-06-01" },
  "dog-swimming-vs-hydrotherapy": { datePublished: "2026-03-05", dateModified: "2026-06-01" },
  "cruciate-ligament-rehab-dogs": { datePublished: "2026-03-10", dateModified: "2026-06-01" },
  "ivdd-hydrotherapy-dogs": { datePublished: "2026-03-10", dateModified: "2026-06-01" },
  "hip-dysplasia-hydrotherapy-dogs": { datePublished: "2026-03-10", dateModified: "2026-06-01" },
  "senior-dog-mobility-support": { datePublished: "2026-03-10", dateModified: "2026-06-01" },
  "how-to-choose-a-canine-hydrotherapy-centre": { datePublished: "2026-03-15", dateModified: "2026-06-01" },
  "first-dog-hydrotherapy-session": { datePublished: "2026-03-15", dateModified: "2026-06-01" },
  "vet-referral-for-dog-hydrotherapy": { datePublished: "2026-03-15", dateModified: "2026-06-01" },
  "dog-physiotherapy-explained": { datePublished: "2026-03-15", dateModified: "2026-06-01" }
};

const fallback = { datePublished: "2026-03-01", dateModified: "2026-06-01" };

export function getGuideDates(slug: string) {
  return guideDates[slug] ?? fallback;
}
