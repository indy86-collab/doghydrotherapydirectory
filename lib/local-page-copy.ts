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
    "Around Romsey and Hampshire, owners often compare hydrotherapy, physiotherapy and swimming options for active dogs and post-injury rehab. Ask about vet consent and how sessions are tailored.",
  kilmarnock:
    "Around Kilmarnock and Ayrshire, owners often travel for specialist canine hydrotherapy or rehab when local options are limited. Compare referral paperwork, session length and how progress is shared with your vet.",
  northampton:
    "In Northampton and nearby towns, hydrotherapy searches often follow cruciate repair, arthritis flares or weight-management plans. Shortlist pool versus treadmill centres and ask how nervous dogs are introduced to water.",
  andover:
    "Around Andover and north Hampshire, owners commonly compare hydrotherapy and physiotherapy for mobility support. Check parking, lifting help and whether the centre can adapt sessions for senior or post-operative dogs.",
  cardiff:
    "In Cardiff and South Wales, owners often balance specialist rehab centres with closer swimming or treadmill sessions for ongoing maintenance. Confirm veterinary consent rules before the first visit.",
  essex:
    "Across Essex, travel time between towns can vary widely, so compare hydrotherapy pools, treadmills and physio-led clinics by both service fit and journey length. Ask about first-assessment fees and insurance paperwork.",
  glasgow:
    "Around Glasgow, owners frequently research hydrotherapy after orthopaedic surgery or for long-term joint support. Confirm whether sessions are therapeutic or recreational, and how the team monitors fatigue and comfort.",
  edinburgh:
    "In Edinburgh and the Lothians, specialist canine rehab may mean a longer trip for the right facility. Check referral requirements, water hygiene practices and whether reports can go to your vet.",
  liverpool:
    "Around Liverpool and Merseyside, owners often compare hydrotherapy for arthritis, fitness swimming and post-injury rehab. Ask whether pool work or an underwater treadmill is more suitable for your dog.",
  leeds:
    "In Leeds and West Yorkshire, hydrotherapy is commonly considered alongside vet-led treatment for mobility and recovery. Shortlist centres by service tags, then confirm suitability and appointment availability directly.",
  sheffield:
    "Around Sheffield, owners researching canine rehab often weigh travel time against specialist facilities. Compare physiotherapy input, pool access and how sessions are adapted for large or anxious dogs.",
  dover:
    "In Dover and East Kent, hydrotherapy centres are often used for post-surgery rehab, arthritis support and fitness swimming. Confirm vet consent, parking and whether sessions are pool-based or treadmill-led.",
  ashford:
    "Around Ashford and the Kent Weald, owners commonly travel for combined hydrotherapy and physiotherapy. Ask how progress is measured and whether reports can be shared with your vet.",
  "herne-bay":
    "In Herne Bay and coastal Kent, rehab clinics may combine hydrotherapy with land-based physiotherapy. Check referral rules and whether an underwater treadmill is available for your dog.",
  chertsey:
    "Around Chertsey and north Surrey, owners often compare hydrotherapy and physiotherapy under one roof. Confirm appointment length, treadmill versus pool work and insurance paperwork before booking.",
  stockport:
    "In Stockport and Greater Manchester, hydrotherapy pools can support rehab and large-breed fitness swimming. Compare travel time, ramp access and first-assessment requirements.",
  bury:
    "Around Bury, owners frequently shortlist warm-pool hydrotherapy for joint support and conditioning. Ask about referral forms, session privacy and how nervous dogs are introduced to water.",
  markfield:
    "Near Markfield and Leicestershire, hydrotherapy centres can serve a wide Midlands travel area. Confirm whether sessions are therapeutic or recreational and what vet paperwork is needed."
};

export function getLocationIntroCopy(locationSlug: string, locationName: string): string {
  const specific = locationIntroCopy[locationSlug];
  if (specific) return specific;

  return `Around ${locationName}, compare hydrotherapy, physiotherapy, rehabilitation and dog swimming listings by service type, travel time and vet referral requirements before you book.`;
}
