import { centres, type Centre } from "@/data/centres";
import { slugify, titleCase } from "@/lib/utils";

export type LocalService = {
  slug: string;
  label: string;
  shortLabel: string;
  titlePrefix: string;
  searchTerms: string[];
  guideHref: string;
};

export const localServices: LocalService[] = [
  {
    slug: "dog-hydrotherapy",
    label: "dog hydrotherapy",
    shortLabel: "Hydrotherapy",
    titlePrefix: "Dog Hydrotherapy",
    searchTerms: ["Hydrotherapy", "Treadmill"],
    guideHref: "/guides/what-is-dog-hydrotherapy"
  },
  {
    slug: "canine-physiotherapy",
    label: "canine physiotherapy",
    shortLabel: "Physiotherapy",
    titlePrefix: "Canine Physiotherapy",
    searchTerms: ["Physiotherapy"],
    guideHref: "/guides/dog-physiotherapy-explained"
  },
  {
    slug: "dog-rehabilitation",
    label: "dog rehabilitation",
    shortLabel: "Rehab",
    titlePrefix: "Dog Rehabilitation",
    searchTerms: ["Rehab"],
    guideHref: "/guides/dog-hydrotherapy-after-surgery"
  },
  {
    slug: "dog-swimming-pools",
    label: "dog swimming pools",
    shortLabel: "Swimming pools",
    titlePrefix: "Dog Swimming Pools",
    searchTerms: ["Swimming Pool"],
    guideHref: "/guides/dog-swimming-vs-hydrotherapy"
  }
];

const excludedIndexableLocationSlugs = new Set(["england", "scotland", "wales", "northern-ireland", "ireland"]);

export function getCentresWithCoordinates(centreList: Centre[] = centres) {
  return centreList.filter((centre) => typeof centre.latitude === "number" && typeof centre.longitude === "number");
}

export function matchesManualLocationSearch(centre: Centre, query: string) {
  const normalised = query.trim().toLowerCase();
  if (!normalised) return true;

  return [centre.name, centre.city, centre.region, centre.postcode, centre.address]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .includes(normalised);
}

export function searchCentresByLocationText(centreList: Centre[], query: string) {
  return centreList.filter((centre) => matchesManualLocationSearch(centre, query));
}

export function serviceMatchesCentre(centre: Centre, service: LocalService) {
  const haystack = centre.serviceTags.join(" ").toLowerCase();

  return service.searchTerms.some((term) => haystack.includes(term.toLowerCase()));
}

function centreMatchesLocalServiceLocation(centre: Centre, locationSlug: string) {
  const locationTerm = locationSlug.replace(/-/g, " ");
  const citySlug = slugify(centre.city);
  const regionSlugs = centre.region
    .split(";")
    .map((value) => slugify(value.trim()))
    .filter(Boolean);

  return citySlug === locationSlug || regionSlugs.includes(locationSlug) || centre.postcode.toLowerCase().startsWith(locationTerm);
}

export function getLocalServiceBySlug(serviceSlug: string) {
  return localServices.find((service) => service.slug === serviceSlug);
}

export function getCentresForLocalService(locationSlug: string, serviceSlug: string) {
  const service = getLocalServiceBySlug(serviceSlug);
  if (!service) return [];

  return centres.filter((centre) => {
    return centreMatchesLocalServiceLocation(centre, locationSlug) && serviceMatchesCentre(centre, service);
  });
}

export function getValidLocalServicePages(minListings = 2) {
  const candidates = new Map<string, { locationSlug: string; locationName: string; serviceSlug: string; service: LocalService; count: number }>();

  for (const centre of centres) {
    const locationNames = [centre.city, centre.region]
      .flatMap((value) => value.split(";"))
      .map((value) => value.trim())
      .filter(Boolean);

    for (const locationName of locationNames) {
      const locationSlug = slugify(locationName);
      if (excludedIndexableLocationSlugs.has(locationSlug)) continue;
      for (const service of localServices) {
        if (!serviceMatchesCentre(centre, service)) continue;
        const key = `${locationSlug}/${service.slug}`;
        const existing = candidates.get(key);
        candidates.set(key, {
          locationSlug,
          locationName: titleCase(locationName),
          serviceSlug: service.slug,
          service,
          count: (existing?.count ?? 0) + 1
        });
      }
    }
  }

  return Array.from(candidates.values())
    .filter((page) => page.count >= minListings)
    .sort((a, b) => b.count - a.count || a.locationName.localeCompare(b.locationName));
}

export function getNearbyRelatedLocations(currentLocationSlug: string, serviceSlug: string, limit = 6) {
  return getValidLocalServicePages()
    .filter((page) => page.locationSlug !== currentLocationSlug && page.serviceSlug === serviceSlug)
    .slice(0, limit);
}
