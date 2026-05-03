/**
 * Canonical origin for the live site (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL on Vercel if the primary domain changes.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dogtherapycentres.co.uk";
  return raw.replace(/\/+$/, "");
}
