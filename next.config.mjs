/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com"
      }
    ]
  },
  async redirects() {
    // Broad nation URLs are intentionally not location landing pages (too thin).
    // 301 old GSC 404s and similar nation slugs to the locations hub.
    const nationSlugs = ["england", "scotland", "wales", "northern-ireland", "ireland"];
    return nationSlugs.map((slug) => ({
      source: `/locations/${slug}`,
      destination: "/locations",
      permanent: true
    }));
  }
};

export default nextConfig;
