const unsupportedMedicalClaimPatterns = [
  /\bcure[sd]?\b/i,
  /\bmiracle\b/i,
  /\bguarantee[sd]?\b/i,
  /\bguaranteed recovery\b/i,
  /\bwill recover\b/i,
  /\bvet(?:erinary)?[-\s]?approved\b/i
];

export function isDisplaySafeReview(text: string) {
  return !unsupportedMedicalClaimPatterns.some((pattern) => pattern.test(text));
}
