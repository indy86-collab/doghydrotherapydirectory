import type { Centre } from "@/data/centres";

export type CentreWithDistance = Centre & {
  distanceMiles?: number;
};

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

export function calculateDistanceMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusMiles * c;
}

export function sortCentresByDistance(userLat: number, userLng: number, centreList: Centre[]) {
  return centreList
    .map((centre): CentreWithDistance => {
      if (typeof centre.latitude !== "number" || typeof centre.longitude !== "number") {
        return centre;
      }

      return {
        ...centre,
        distanceMiles: calculateDistanceMiles(userLat, userLng, centre.latitude, centre.longitude)
      };
    })
    .sort((a, b) => {
      if (typeof a.distanceMiles !== "number" && typeof b.distanceMiles !== "number") return 0;
      if (typeof a.distanceMiles !== "number") return 1;
      if (typeof b.distanceMiles !== "number") return -1;
      return a.distanceMiles - b.distanceMiles;
    });
}

export function filterCentresByRadius(centreList: CentreWithDistance[], radiusMiles: number) {
  return centreList.filter((centre) => typeof centre.distanceMiles !== "number" || centre.distanceMiles <= radiusMiles);
}
