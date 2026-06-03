/**
 * City-specific copy for location and local service pages (SEO uniqueness).
 * Falls back to a generic paragraph when no entry exists.
 */
export const locationIntroCopy: Record<string, string> = {
  london:
    "Greater London spans many boroughs, so travel time and parking often matter as much as the centre name. Owners commonly compare hydrotherapy for post-surgery rehab, arthritis support and fitness swimming, then confirm vet referral rules before the first visit.",
  manchester:
    "Around Greater Manchester, owners often balance specialist rehab centres with closer pool or treadmill sessions for ongoing maintenance. Check whether a centre focuses on therapeutic hydrotherapy or recreational swimming before booking.",
  birmingham:
    "In the West Midlands, many dogs are referred after cruciate surgery, hip or elbow dysplasia, or weight-management plans. Shortlist centres by service type—pool, underwater treadmill or physiotherapy—and ask how progress is shared with your vet.",
  leicester:
    "Leicestershire owners frequently search when a dog is stiff after rest or recovering from injury. Compare referral requirements, appointment length and how nervous dogs are introduced to water.",
  surrey:
    "Surrey and nearby commuter areas often mean owners are willing to travel for the right facility. Confirm whether sessions are one-to-one, what drying and access support is available, and how far you are comfortable travelling for repeat appointments.",
  kent:
    "Across Kent, coastal and inland centres may offer different facilities—warm pools, treadmills or physio-led rehab. Ask about water temperature, hygiene testing and whether your dog’s diagnosis fits their usual caseload.",
  bristol:
    "Around Bristol and the South West, hydrotherapy is commonly used alongside vet-led treatment for mobility and recovery. Check parking, lifting support and whether the team can adapt sessions for senior or anxious dogs.",
  belfast:
    "In Belfast and surrounding areas, confirm whether the centre serves Northern Ireland referral pathways and which services are offered in-house versus by referral.",
  goole:
    "In the East Riding and Humber area, fewer centres can mean a wider travel radius. It can still be worth comparing specialist rehab facilities with closer swimming or treadmill sessions for maintenance.",
  romsey:
    "Around Romsey and Hampshire, owners often compare hydrotherapy, physiotherapy and swimming options for active dogs and post-injury rehab. Ask about vet consent and how sessions are tailored."
};

export function getLocationIntroCopy(locationSlug: string, locationName: string): string {
  const specific = locationIntroCopy[locationSlug];
  if (specific) return specific;

  return `Around ${locationName}, compare hydrotherapy, physiotherapy, rehabilitation and dog swimming listings by service type, travel time and vet referral requirements before you book.`;
}
