import type { Centre } from "@/data/centres";
import { getSiteUrl, SITE_BRAND_NAME, SITE_DOMAIN_LABEL } from "@/lib/site";

const DEFAULT_OG_IMAGE = "/images/hero-hydrotherapy.jpg";

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildWebPageJsonLd({ title, description, path }: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${getSiteUrl()}${path}`
  };
}

export function buildFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${getSiteUrl()}${item.path}`
    }))
  };
}

export function buildCentreItemListJsonLd(centres: Centre[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${getSiteUrl()}${path}`,
    numberOfItems: centres.length,
    itemListElement: centres.map((centre, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${getSiteUrl()}/centres/${centre.slug}`,
      name: centre.name
    }))
  };
}

export function getDefaultOgImageUrl(): string {
  return `${getSiteUrl()}${DEFAULT_OG_IMAGE}`;
}

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE_BRAND_NAME,
    url: siteUrl,
    logo: `${siteUrl}/images/hero-hydrotherapy.jpg`,
    description: `UK directory for dog hydrotherapy, canine physiotherapy and rehabilitation centres, published at ${SITE_DOMAIN_LABEL}.`
  };
}

export function buildWebSiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SITE_BRAND_NAME,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/centres?query={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
