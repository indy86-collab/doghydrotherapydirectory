import type { Guide, GuideSection } from "@/lib/guides";

/**
 * Topic-aware owner-prep blocks so guides do not share identical boilerplate.
 * Keeps practical depth for AdSense/content quality while varying by category/slug.
 */
export function getOwnerPrepSections(guide: Guide): GuideSection[] {
  const topic = guide.title.replace(/\?$/, "").toLowerCase();
  const category = guide.category.toLowerCase();

  const useSection: GuideSection = {
    heading: `How to use this ${category === "costs" ? "cost guide" : "guide"}`,
    body: buildUseBody(guide, topic, category)
  };

  const providerSection: GuideSection = {
    heading: providerHeading(category),
    body: buildProviderBody(guide, topic, category)
  };

  const questionsSection: GuideSection = {
    heading: "Questions to take to your first call",
    body: buildQuestionsBody(guide, topic, category),
    bullets: buildQuestionBullets(guide, category)
  };

  const cautionSection: GuideSection = {
    heading: cautionHeading(category),
    body: buildCautionBody(guide, topic, category)
  };

  return [useSection, providerSection, questionsSection, cautionSection];
}

function buildUseBody(guide: Guide, topic: string, category: string): string[] {
  if (category === "costs") {
    return [
      `Use this guide to understand typical UK price ranges for ${topic}, then confirm the exact fee structure with any centre you shortlist. Assessment fees, package deals, cancellation terms and insurance paperwork often matter as much as the headline session price.`,
      "Compare value carefully: a cheaper session is not automatically better for rehabilitation. Ask what is included, who leads the session, how progress is reviewed and whether reports can be shared with your vet or insurer."
    ];
  }

  if (guide.slug.includes("near-me") || guide.slug.includes("choose")) {
    return [
      `Start with your dog's current problem and travel radius, not a brand name. ${guide.keyTakeaways[0] ?? "Shortlist centres that can explain assessment, referral rules and facilities clearly."}`,
      "Use this page to build comparison criteria — facilities, qualifications, communication style and practical access — then contact centres directly before you travel."
    ];
  }

  if (category.includes("condition") || /arthritis|surgery|cruciate|ivdd|hip|elbow|patella|senior|nervous|weight/.test(guide.slug)) {
    return [
      `Read this guide as condition-focused context for ${topic}, not as a diagnosis tool. Note what has changed for your dog, what your vet has already said, and which daily activities are becoming harder.`,
      "Then shortlist providers who regularly support similar cases and can explain how they adapt sessions for pain, confidence, post-operative limits or reduced stamina."
    ];
  }

  return [
    `Start with your dog's current problem rather than a treatment label. This guide on ${topic} is meant to help you ask better questions before booking.`,
    "Write down what has changed, when it started, any vet advice you already have, and what you want your dog to manage more comfortably. Use that note when you contact a centre."
  ];
}

function providerHeading(category: string) {
  if (category === "costs") return "What a clear quote should include";
  if (category.includes("treatment") || category.includes("rehab")) return "What a careful therapy plan should explain";
  return "What good providers should explain";
}

function buildProviderBody(guide: Guide, topic: string, category: string): string[] {
  if (category === "costs") {
    return [
      "Ask for a written or clearly itemised quote covering the first assessment, follow-up sessions, any package discount, cancellation rules and whether reports for insurers are included or charged separately.",
      "A transparent centre should also explain who delivers the session, whether physiotherapy input is included, and how often the plan is reviewed so you are not buying a long package before suitability is clear."
    ];
  }

  if (guide.slug.includes("treadmill")) {
    return [
      "For underwater treadmill work, ask how water height, speed and session length are chosen, how dogs enter and exit the treadmill, and how fatigue or discomfort is monitored.",
      "A careful provider should also explain when treadmill work is preferred over free swimming, and when they would pause or refer back to your vet."
    ];
  }

  if (guide.slug.includes("physio")) {
    return [
      "For physiotherapy-led care, ask who assesses your dog, what qualifications they hold, how land exercises and any hydrotherapy fit together, and how progress is recorded for your vet.",
      "They should be comfortable explaining when hands-on treatment, home exercises or water work is most appropriate — and when a session should wait."
    ];
  }

  return [
    `A responsible provider discussing ${topic} should explain whether veterinary referral or consent is needed, who assesses your dog, how progress is recorded, and how sessions are adapted for nervous, older or post-operative dogs.`,
    "Ask about water hygiene or land-exercise safety (as relevant), how dogs enter and leave the facility, what equipment is available, and how many dogs are treated at once."
  ];
}

function buildQuestionsBody(guide: Guide, topic: string, category: string): string[] {
  if (category === "costs") {
    return [
      "Before you book, confirm the assessment fee, typical follow-up price, package options, payment timing and what happens if your dog cannot continue after the first session.",
      "If you hope to claim on insurance, ask what paperwork they can provide and whether your policy usually needs a vet referral first."
    ];
  }

  return [
    `Before booking around ${topic}, ask whether the centre offers therapeutic hydrotherapy, fitness swimming, underwater treadmill work, physiotherapy or a combination — and which option they think fits your dog.`,
    "Also ask how the first appointment is structured, whether vet notes are needed, what to bring, how long a session lasts, and what signs would make them stop or change the plan."
  ];
}

function buildQuestionBullets(guide: Guide, category: string): string[] {
  if (category === "costs") {
    return [
      "What is included in the assessment fee?",
      "How much are follow-up sessions or packages?",
      "Do you provide insurance or vet reports?",
      "What is your cancellation policy?",
      "Who delivers and reviews the plan?"
    ];
  }

  if (guide.slug.includes("treadmill")) {
    return [
      "Is treadmill or pool work more suitable here?",
      "How do you set water height and speed?",
      "Do you require vet referral or consent?",
      "How do you support nervous or weak dogs?",
      "Can you update my vet on progress?"
    ];
  }

  return [
    "Do you require vet referral or consent?",
    "Who assesses my dog and records progress?",
    "Is pool work, treadmill work or physiotherapy most relevant?",
    "How do you support nervous or older dogs?",
    "Can you communicate with my vet if needed?"
  ];
}

function cautionHeading(category: string) {
  if (category === "costs") return "Value checks before you pay";
  return "Red flags to watch for";
}

function buildCautionBody(guide: Guide, topic: string, category: string): string[] {
  if (category === "costs") {
    return [
      "Be cautious if a centre pushes a large prepaid package before assessing your dog, cannot explain what the fee includes, or makes recovery guarantees tied to buying more sessions.",
      "Pause and speak with your vet if pricing pressure is paired with vague clinical advice, or if your dog worsens after early sessions and the plan is not reviewed."
    ];
  }

  return [
    `Be cautious if a provider guarantees recovery from ${topic}, dismisses veterinary input, cannot explain safety processes, avoids qualification questions, or pushes intense exercise for a painful or recently injured dog.`,
    "Contact your vet promptly if your dog becomes more lame, unusually distressed, painful to touch, or suddenly less able to stand or move after a session."
  ];
}
