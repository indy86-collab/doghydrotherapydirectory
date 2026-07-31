/** ISO dates for Article schema and visible freshness on guides. */
export const guideDates: Record<string, { datePublished: string; dateModified: string }> = {
  "what-is-dog-hydrotherapy": { datePublished: "2026-03-01", dateModified: "2026-07-15" },
  "dog-hydrotherapy-for-arthritis": { datePublished: "2026-03-01", dateModified: "2026-06-03" },
  "dog-hydrotherapy-after-surgery": { datePublished: "2026-03-01", dateModified: "2026-06-03" },
  "how-much-does-dog-hydrotherapy-cost": { datePublished: "2026-03-05", dateModified: "2026-07-15" },
  "underwater-treadmill-for-dogs": { datePublished: "2026-03-05", dateModified: "2026-06-03" },
  "dog-swimming-vs-hydrotherapy": { datePublished: "2026-03-05", dateModified: "2026-06-03" },
  "cruciate-ligament-rehab-dogs": { datePublished: "2026-03-10", dateModified: "2026-06-03" },
  "ivdd-hydrotherapy-dogs": { datePublished: "2026-03-10", dateModified: "2026-06-03" },
  "hip-dysplasia-hydrotherapy-dogs": { datePublished: "2026-03-10", dateModified: "2026-06-03" },
  "senior-dog-mobility-support": { datePublished: "2026-03-10", dateModified: "2026-06-03" },
  "how-to-choose-a-canine-hydrotherapy-centre": { datePublished: "2026-03-15", dateModified: "2026-07-15" },
  "first-dog-hydrotherapy-session": { datePublished: "2026-03-15", dateModified: "2026-06-03" },
  "vet-referral-for-dog-hydrotherapy": { datePublished: "2026-03-15", dateModified: "2026-06-03" },
  "dog-physiotherapy-explained": { datePublished: "2026-03-15", dateModified: "2026-06-03" },
  "dog-hydrotherapy-insurance-uk": { datePublished: "2026-06-03", dateModified: "2026-06-03" },
  "nervous-dog-hydrotherapy": { datePublished: "2026-06-03", dateModified: "2026-06-03" },
  "dog-weight-management-hydrotherapy": { datePublished: "2026-06-03", dateModified: "2026-06-03" },
  "winter-dog-mobility-at-home": { datePublished: "2026-06-03", dateModified: "2026-08-01" },
  "benefits-of-dog-hydrotherapy": { datePublished: "2026-08-01", dateModified: "2026-08-01" },
  "how-often-dog-hydrotherapy": { datePublished: "2026-08-01", dateModified: "2026-08-01" },
  "elbow-dysplasia-hydrotherapy-dogs": { datePublished: "2026-08-01", dateModified: "2026-08-01" },
  "dog-hydrotherapy-qualifications-uk": { datePublished: "2026-08-01", dateModified: "2026-08-01" },
  "luxating-patella-hydrotherapy-dogs": { datePublished: "2026-08-01", dateModified: "2026-08-01" }
};

const fallback = { datePublished: "2026-03-01", dateModified: "2026-06-03" };

export function getGuideDates(slug: string) {
  return guideDates[slug] ?? fallback;
}
