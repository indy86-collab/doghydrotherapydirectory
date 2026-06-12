import type { Centre } from "@/data/centres";
import { getServiceTags, locationLabel } from "@/lib/utils";

export type CentreEditorialEnrichment = {
  editorialSummary: string;
  whatToConfirm: string[];
  ownerQuestions: string[];
};

function formatTags(tags: string[]) {
  if (tags.length === 0) return "the listed service";
  if (tags.length === 1) return tags[0].toLowerCase();

  return `${tags.slice(0, -1).join(", ").toLowerCase()} and ${tags[tags.length - 1].toLowerCase()}`;
}

function getContactSummary(centre: Centre) {
  if (centre.website && centre.phone) {
    return "The listing includes both a website and phone number, so owners can check current services before travelling.";
  }

  if (centre.website) {
    return "The listing includes a website, so owners should use it to confirm current services, appointment rules and contact options.";
  }

  if (centre.phone) {
    return "The listing includes a phone number, so owners should call before travelling to confirm current services and appointment rules.";
  }

  return "Public contact details are limited, so owners should verify the centre through its map listing or another trusted source before travelling.";
}

function getReviewSummary(centre: Centre) {
  if (centre.rating && centre.reviewCount) {
    return `Its public Google profile shows a ${centre.rating.toFixed(centre.rating % 1 === 0 ? 0 : 1)} rating from ${centre.reviewCount} reviews at the time this dataset was imported.`;
  }

  return "Public rating data is limited for this listing, so owners should rely on direct questions and their vet's guidance before booking.";
}

export function getCentreEditorialEnrichment(centre: Centre): CentreEditorialEnrichment {
  const tags = getServiceTags(centre);
  const services = formatTags(tags);
  const keywords = centre.reviewKeywords.slice(0, 3);

  const editorialSummary = [
    `${centre.name} is listed in ${locationLabel(centre)} under ${centre.category.toLowerCase()}, with directory tags for ${services}.`,
    getReviewSummary(centre),
    getContactSummary(centre),
    keywords.length
      ? `Owner review themes in the imported data include ${formatTags(keywords)}; treat these as prompts for questions rather than clinical evidence.`
      : "Review themes are limited for this listing, so ask the centre to explain its assessment process and suitability checks."
  ].join(" ");

  const whatToConfirm = [
    "Current services, appointment availability and whether the service shown here is still offered.",
    "Whether veterinary referral or consent is needed before the first session.",
    "Who assesses your dog, what qualifications are relevant and how progress is recorded.",
    "Prices, cancellation terms, insurance paperwork and any first-session requirements.",
    centre.website || centre.phone
      ? "That the website or phone details on this page are still current."
      : "The best current contact route, since this listing has limited direct contact details."
  ];

  const ownerQuestions = [
    `Is ${services} appropriate for my dog's diagnosis, age, confidence and fitness level?`,
    "Would you recommend pool work, underwater treadmill work, physiotherapy or another route?",
    "How do you introduce nervous, senior, large or post-operative dogs safely?",
    "How do you monitor water hygiene, fatigue, discomfort and session progress?",
    "Can you share notes or progress updates with my vet or insurer if needed?"
  ];

  return {
    editorialSummary,
    whatToConfirm,
    ownerQuestions
  };
}
