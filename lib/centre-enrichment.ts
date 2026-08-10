import type { Centre } from "@/data/centres";
import { getServiceTags, locationLabel } from "@/lib/utils";

export type CentreEditorialEnrichment = {
  editorialSummary: string;
  facilityFocus: string;
  whoItMaySuit: string;
  localSearchNote: string;
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

function getFacilityFocus(tags: string[], centre: Centre) {
  const has = (tag: string) => tags.includes(tag);

  if (has("Hydrotherapy") && has("Treadmill")) {
    return `${centre.name} is tagged for hydrotherapy and underwater treadmill work, which can suit dogs that need controlled, low-impact exercise with adjustable water support. Confirm whether sessions are pool-based, treadmill-based or a mix, and how the team chooses the right option for your dog.`;
  }

  if (has("Hydrotherapy") && has("Physiotherapy")) {
    return `${centre.name} is tagged for hydrotherapy alongside physiotherapy, which owners often look for when a dog needs both water-based sessions and land-based rehab input. Ask who leads the assessment and how pool or treadmill work fits the wider plan.`;
  }

  if (has("Hydrotherapy")) {
    return `${centre.name} is tagged for dog hydrotherapy in ${centre.city}. Owners usually compare warm-water pool sessions for arthritis support, post-surgery rehab, fitness and confidence building — confirm the centre's typical caseload and referral rules before booking.`;
  }

  if (has("Treadmill")) {
    return `${centre.name} is tagged for underwater treadmill sessions. Treadmill work can help with controlled walking, post-op rehab and graded exercise when free swimming is not the best starting point. Ask about water height, speed control and how sessions progress.`;
  }

  if (has("Physiotherapy")) {
    return `${centre.name} is tagged for canine physiotherapy. Owners often shortlist physio-led clinics for assessment, land exercises and rehab programmes that may sit alongside or instead of water work. Confirm qualifications and whether hydrotherapy is offered on-site or by referral.`;
  }

  if (has("Rehab")) {
    return `${centre.name} is tagged for rehabilitation services in ${centre.city}. Rehab listings are commonly researched after orthopaedic surgery, soft-tissue injury or longer-term mobility decline — ask what the first assessment covers and how progress is measured.`;
  }

  if (has("Swimming Pool")) {
    return `${centre.name} is tagged as a dog swimming facility. Some pools focus on recreational fitness and confidence; others support more structured sessions. Clarify whether the offer is therapeutic hydrotherapy, supervised swimming or both before you travel.`;
  }

  if (has("Mobility")) {
    return `${centre.name} is tagged for mobility support. Owners typically look for practical help with stiffness, conditioning and confidence around movement — ask how sessions are adapted for senior, large or anxious dogs.`;
  }

  return `${centre.name} is listed under ${centre.category.toLowerCase()} in ${locationLabel(centre)}. Use the service tags and contact details on this page to confirm what is currently offered before travelling.`;
}

function getWhoItMaySuit(tags: string[], centre: Centre) {
  const themes: string[] = [];
  if (tags.includes("Hydrotherapy") || tags.includes("Rehab")) {
    themes.push("post-surgery recovery", "arthritis or joint stiffness", "strength and conditioning plans");
  }
  if (tags.includes("Treadmill")) {
    themes.push("controlled walking when free swimming is unsuitable");
  }
  if (tags.includes("Swimming Pool")) {
    themes.push("fitness swimming and water confidence");
  }
  if (tags.includes("Physiotherapy")) {
    themes.push("vet-led physiotherapy programmes");
  }
  if (tags.includes("Mobility")) {
    themes.push("older dogs needing gentler movement support");
  }

  const unique = Array.from(new Set(themes)).slice(0, 4);
  if (!unique.length) {
    return `Owners researching ${centre.category.toLowerCase()} options around ${centre.city} should still confirm suitability with their vet and the centre, especially if the dog is in pain, recovering from surgery or new to water.`;
  }

  const list =
    unique.length === 1
      ? unique[0]
      : `${unique.slice(0, -1).join(", ")} and ${unique[unique.length - 1]}`;

  return `Based on the public tags for this listing, owners often compare ${centre.name} when researching ${list}. That is a research starting point only — suitability always depends on veterinary advice and the centre's own assessment.`;
}

function getLocalSearchNote(centre: Centre, tags: string[]) {
  const primary =
    tags.includes("Hydrotherapy")
      ? "dog hydrotherapy"
      : tags.includes("Physiotherapy")
        ? "canine physiotherapy"
        : tags.includes("Swimming Pool")
          ? "dog swimming"
          : "canine rehab";

  return `If you are searching for ${primary} near ${centre.city}, compare travel time, parking, referral requirements and whether the team can accommodate your dog's size, mobility and confidence. Nearby owners may also check other listings in ${centre.region}.`;
}

export function getCentrePrimaryServiceLabel(tags: string[]) {
  const priority: Array<[string, string]> = [
    ["Hydrotherapy", "Dog Hydrotherapy"],
    ["Physiotherapy", "Dog Physiotherapy"],
    ["Rehab", "Canine Rehab"],
    ["Treadmill", "Underwater Treadmill"],
    ["Swimming Pool", "Dog Swimming"],
    ["Mobility", "Dog Mobility"]
  ];

  for (const [tag, label] of priority) {
    if (tags.includes(tag)) return label;
  }

  return "Dog Therapy";
}

export function getCentreSeoTitle(centre: Centre) {
  const label = getCentrePrimaryServiceLabel(getServiceTags(centre));
  return `${centre.name} — ${label} in ${centre.city}`;
}

export function getCentreSeoDescription(centre: Centre) {
  const tags = getServiceTags(centre);
  const services = formatTags(tags);
  const ratingBit =
    centre.rating && centre.reviewCount
      ? ` Rated ${centre.rating.toFixed(centre.rating % 1 === 0 ? 0 : 1)} from ${centre.reviewCount} Google reviews.`
      : "";

  return `${centre.name} in ${locationLabel(centre)} — public listing for ${services}.${ratingBit} Check address, contact details and booking questions before treatment.`;
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
    facilityFocus: getFacilityFocus(tags, centre),
    whoItMaySuit: getWhoItMaySuit(tags, centre),
    localSearchNote: getLocalSearchNote(centre, tags),
    whatToConfirm,
    ownerQuestions
  };
}
