import { centres, type Centre } from "@/data/centres";
import { getSiteUrl } from "@/lib/site";

export const requestedLocations = [
  "London",
  "Manchester",
  "Birmingham",
  "Leicester",
  "Surrey",
  "Kent",
  "Bristol"
];

export const serviceOptions = [
  "Hydrotherapy",
  "Physiotherapy",
  "Rehab",
  "Swimming Pool",
  "Treadmill",
  "Mobility"
];

const broadLocationSlugs = new Set(["england", "scotland", "wales", "northern-ireland", "ireland"]);

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function titleCase(value: string) {
  return value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function isBroadOrCompoundLocationName(value: string) {
  const slug = slugify(value);
  return broadLocationSlugs.has(slug) || value.includes(";") || slug.split("-").some((part) => broadLocationSlugs.has(part));
}

export function getCentreBySlug(slug: string) {
  return centres.find((centre) => centre.slug === slug);
}

export function getFeaturedCentres(limit = 4) {
  return [...centres]
    .sort((a, b) => {
      const ratingDiff = (b.rating ?? 0) - (a.rating ?? 0);
      if (ratingDiff !== 0) return ratingDiff;
      return (b.reviewCount ?? 0) - (a.reviewCount ?? 0);
    })
    .slice(0, limit);
}

export function getServiceTags(centre: Centre) {
  return centre.serviceTags.length ? centre.serviceTags : [centre.category];
}

export function getLocations() {
  const found = new Map<string, number>();
  for (const centre of centres) {
    for (const value of [centre.city, centre.region]) {
      if (!value) continue;
      found.set(value, (found.get(value) ?? 0) + 1);
    }
  }

  const requested = requestedLocations.map((name) => ({
    name,
    slug: slugify(name),
    count: getCentresByLocation(slugify(name)).length
  }));

  const dynamic = Array.from(found.entries())
    .filter(([name]) => !requestedLocations.some((loc) => loc.toLowerCase() === name.toLowerCase()))
    .filter(([name]) => !isBroadOrCompoundLocationName(name))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([name, count]) => ({ name, slug: slugify(name), count }));

  return [...requested, ...dynamic];
}

export function getCentresByLocation(locationSlug: string) {
  const locationTerm = locationSlug.replace(/-/g, " ");
  return centres.filter((centre) => {
    const citySlug = slugify(centre.city);
    const regionSlugs = centre.region
      .split(";")
      .map((value) => slugify(value.trim()))
      .filter((value) => value && !broadLocationSlugs.has(value));

    return citySlug === locationSlug || regionSlugs.includes(locationSlug) || centre.postcode.toLowerCase().startsWith(locationTerm);
  });
}

export function formatRating(centre: Centre) {
  if (!centre.rating) return "New";
  return centre.rating.toFixed(centre.rating % 1 === 0 ? 0 : 1);
}

export function locationLabel(centre: Centre) {
  const parts = [centre.city, centre.region && centre.region !== centre.city ? centre.region : ""]
    .filter(Boolean)
    .slice(0, 2);
  return parts.join(", ") || centre.postcode || "United Kingdom";
}

export function buildLocalBusinessJsonLd(centre: Centre) {
  const profileUrl = `${getSiteUrl()}/centres/${centre.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": profileUrl,
    name: centre.name,
    image: centre.image ?? undefined,
    telephone: centre.phone ?? undefined,
    url: centre.website ?? profileUrl,
    sameAs: centre.googleMapsUrl ? [centre.googleMapsUrl] : undefined,
    address: centre.address,
    aggregateRating: centre.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: centre.rating,
          reviewCount: centre.reviewCount ?? undefined
        }
      : undefined,
    geo:
      centre.latitude && centre.longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: centre.latitude,
            longitude: centre.longitude
          }
        : undefined
  };
}
