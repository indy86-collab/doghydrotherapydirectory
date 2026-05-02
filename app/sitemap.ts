import type { MetadataRoute } from "next";
import { centres } from "@/data/centres";
import { guides } from "@/lib/guides";
import { getValidLocalServicePages } from "@/lib/centres";
import { getCentresByLocation, getLocations } from "@/lib/utils";

const baseUrl = "https://hyperdogtherapy.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/centres",
    "/near-me",
    "/dog-hydrotherapy-near-me",
    "/locations",
    "/guides",
    "/faqs",
    "/list-your-centre",
    "/privacy-policy",
    "/terms",
    "/editorial-policy",
    "/disclaimer",
    "/cookies"
  ];

  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);

  const centreRoutes = centres.map((centre) => `/centres/${centre.slug}`);
  const locationRoutes = getLocations()
    .filter((location) => getCentresByLocation(location.slug).length >= 2)
    .map((location) => `/locations/${location.slug}`);
  const localServiceRoutes = getValidLocalServicePages().map((page) => `/locations/${page.locationSlug}/${page.serviceSlug}`);

  return [...staticRoutes, ...guideRoutes, ...centreRoutes, ...locationRoutes, ...localServiceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/centres" || route === "/guides" ? 0.9 : 0.7
  }));
}
