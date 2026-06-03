/** Public brand name (UI, schema, emails). */
export const SITE_BRAND_NAME = "HyperDog Therapy";

/** Primary domain without protocol (for display). */
export const SITE_DOMAIN_LABEL = "dogtherapycentres.co.uk";

/**
 * Canonical origin for the live site (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL on Vercel if the primary domain changes.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? `https://www.${SITE_DOMAIN_LABEL}`;
  return raw.replace(/\/+$/, "");
}
