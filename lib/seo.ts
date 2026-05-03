import type { Centre } from "@/data/centres";
import { getSiteUrl } from "@/lib/site";

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
