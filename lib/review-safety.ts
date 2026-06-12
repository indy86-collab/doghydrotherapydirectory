const unsupportedMedicalClaimPatterns = [
  /\bcure[sd]?\b/i,
  /\bmiracle\b/i,
  /\bguarantee[sd]?\b/i,
  /\bguaranteed recovery\b/i,
  /\bwill recover\b/i,
  /\bback on (?:his|her|their|its) feet\b/i,
  /\bavoided? surgery\b/i,
  /\bskip(?:ped)? surgery\b/i,
  /\bno longer (?:lame|limping|in pain)\b/i,
  /\bparalys(?:ed|is)\b/i,
  /\bwalk(?:ed|ing)? again\b/i,
  /\bworked miracles?\b/i,
  /\bvascular tumour\b/i,
  /\btumou?r\b/i,
  /\bspleen\b/i,
  /\bcancer\b/i,
  /\bdied?\b/i,
  /\bdeath\b/i,
  /\bdischarged\b/i,
  /\b100%\b/i,
  /\bvet(?:erinary)?[-\s]?approved\b/i
];

export function isDisplaySafeReview(text: string) {
  return !unsupportedMedicalClaimPatterns.some((pattern) => pattern.test(text));
}
