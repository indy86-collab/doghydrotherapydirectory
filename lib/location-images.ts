const exactLocationImages: Record<string, string> = {
  london: "/images/location-london.jpg",
  manchester: "/images/location-manchester.jpg",
  birmingham: "/images/location-birmingham.jpg",
  leicester: "/images/location-leicester.jpg",
  surrey: "/images/location-surrey.jpg",
  kent: "/images/location-kent.jpg",
  bristol: "/images/location-bristol.jpg"
};

const locationImagePool = [
  "/images/location-london.jpg",
  "/images/location-manchester.jpg",
  "/images/location-birmingham.jpg",
  "/images/location-leicester.jpg",
  "/images/location-surrey.jpg",
  "/images/location-kent.jpg",
  "/images/location-bristol.jpg"
];

function stableIndex(value: string) {
  return value.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % locationImagePool.length;
}

export function getLocationImage(slug: string) {
  return exactLocationImages[slug] ?? locationImagePool[stableIndex(slug)];
}
