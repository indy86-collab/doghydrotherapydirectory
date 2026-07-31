export type GuideSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  imageLabel: string;
  imageSrc: string;
  readTime: string;
  category: string;
  keyTakeaways: string[];
  body: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
};

const vetDisclaimer =
  "This guide is general information only and is not a replacement for veterinary advice. Always speak to your vet before starting hydrotherapy, physiotherapy or rehabilitation.";

export const guides: Guide[] = [
  {
    slug: "what-is-dog-hydrotherapy",
    title: "Does my dog need hydrotherapy?",
    description: "Signs hydrotherapy may help, what conditions it is commonly used for, and when to speak to your vet first.",
    imageLabel: "Hydrotherapy check",
    imageSrc: "/images/guide-need-hydrotherapy.jpg",
    readTime: "6 min read",
    category: "Getting started",
    keyTakeaways: [
      "Hydrotherapy is commonly used for recovery, arthritis, mobility support and controlled fitness.",
      "A good centre should ask for veterinary referral or consent before treatment.",
      "The right plan depends on your dog's diagnosis, confidence, weight, age and pain level."
    ],
    body: [
      "Dog hydrotherapy is warm-water exercise used to help dogs move with less load through joints or recovering tissues. In the UK it is commonly considered for arthritis, post-surgery rehab, muscle loss, weight management and controlled fitness when long walks are difficult — always alongside veterinary advice.",
      "It is not only for dogs who love swimming. Many centres use life jackets, ramps, hoists, underwater treadmills and calm handling to support nervous, older or post-operative dogs. Use this guide to decide whether to ask your vet about a referral, then compare centres on HyperDog Therapy before booking."
    ],
    sections: [
      {
        heading: "Common reasons dogs are referred",
        body: [
          "Owners often start searching for dog hydrotherapy after a vet mentions arthritis, cruciate ligament injury, hip or elbow dysplasia, spinal problems, muscle loss, weight management or post-surgery rehabilitation.",
          "Hydrotherapy may also be used for controlled conditioning when a dog needs safe exercise but cannot comfortably manage long walks."
        ],
        bullets: [
          "Stiffness after rest or shorter walks",
          "Limping, weakness or muscle loss",
          "Recovery after orthopaedic surgery",
          "Arthritis or long-term joint discomfort",
          "Weight management where land exercise is difficult"
        ]
      },
      {
        heading: "When hydrotherapy may not be suitable",
        body: [
          "Hydrotherapy is not automatically right for every dog. Dogs with open wounds, unstable medical conditions, some heart or breathing concerns, infections, severe pain or uncontrolled anxiety may need a different approach or a delayed start.",
          "That is why reputable centres ask for veterinary consent and adapt each session to your dog's health and behaviour."
        ]
      },
      {
        heading: "What to ask before booking",
        body: [
          "Ask whether the centre requires vet referral, who will assess your dog, what qualifications the team hold, how water quality is managed, and how progress is recorded.",
          "A helpful centre should be able to explain whether pool work, underwater treadmill work or physiotherapy is most appropriate for your dog's goal."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I book dog hydrotherapy without a vet?",
        answer: "Many professional UK centres require veterinary referral or consent before treatment. This helps confirm hydrotherapy is appropriate and safe for your dog's condition."
      },
      {
        question: "How quickly will I see results?",
        answer: "Some owners notice confidence or comfort changes early, but strength and movement changes usually need a planned course. Your therapist should review progress regularly."
      }
    ]
  },
  {
    slug: "dog-hydrotherapy-for-arthritis",
    title: "Hydrotherapy for arthritis in dogs",
    description: "How warm water therapy can support arthritic dogs, reduce joint strain and fit into a wider mobility plan.",
    imageLabel: "Arthritis support",
    imageSrc: "/images/guide-arthritis.jpg",
    readTime: "7 min read",
    category: "Arthritis",
    keyTakeaways: [
      "Warm water exercise can help arthritic dogs move with less joint loading.",
      "Weight control, pain management and home changes are still essential.",
      "Sessions should be gentle, monitored and adjusted around flare-ups."
    ],
    body: [
      "Arthritis is one of the most common reasons owners search for canine hydrotherapy. The aim is not to cure arthritis, but to support comfort, mobility, muscle strength and confidence as part of a wider veterinary plan.",
      "Because buoyancy reduces load through joints, many dogs can perform controlled movement in water that would be uncomfortable on land."
    ],
    sections: [
      {
        heading: "How hydrotherapy may help",
        body: [
          "Warm water can encourage circulation and relaxation, while controlled movement helps maintain muscle. Stronger muscles can support unstable or painful joints more effectively.",
          "For some dogs, hydrotherapy also provides safe mental stimulation when walks have become shorter."
        ],
        bullets: [
          "Low-impact movement",
          "Muscle maintenance",
          "Gentle cardiovascular exercise",
          "Confidence for dogs who struggle on walks"
        ]
      },
      {
        heading: "Signs your dog needs a review",
        body: [
          "If your dog becomes more lame, unusually tired, reluctant to move, painful to touch or unsettled after sessions, pause and speak to your vet or therapist.",
          "Arthritis plans often need adjusting. Flare-ups, cold weather, weight changes and medication changes can all affect what is appropriate."
        ]
      },
      {
        heading: "Make the home plan work too",
        body: [
          "Hydrotherapy works best when combined with sensible daily management. Keep nails trimmed, use non-slip flooring, avoid sudden high-impact play and keep your dog lean.",
          "Ask your therapist for simple home exercises only after they have assessed your dog."
        ]
      }
    ],
    faqs: [
      {
        question: "Is hydrotherapy worth it for older dogs with arthritis?",
        answer: "It can be valuable when your vet agrees it is suitable and the sessions are gentle. Older dogs often need shorter, carefully monitored sessions."
      },
      {
        question: "Can hydrotherapy replace pain relief?",
        answer: "No. Hydrotherapy should sit alongside veterinary pain management, weight control and appropriate home care, not replace them."
      }
    ]
  },
  {
    slug: "dog-hydrotherapy-after-surgery",
    title: "Post-surgery dog rehabilitation guide",
    description: "How hydrotherapy and physiotherapy may support recovery after orthopaedic surgery, and what owners should ask.",
    imageLabel: "Post-surgery rehab",
    imageSrc: "/images/guide-post-surgery-rehab.jpg",
    readTime: "8 min read",
    category: "Surgery recovery",
    keyTakeaways: [
      "Start only when your vet or surgeon says rehabilitation is appropriate.",
      "The plan should progress gradually from comfort and range of motion to strength.",
      "Good communication between owner, vet and therapist matters."
    ],
    body: [
      "After surgery, many owners are told to restrict exercise but are unsure what comes next. Canine rehabilitation helps bridge the gap between rest and a safe return to normal movement.",
      "Hydrotherapy may be introduced after wounds have healed and your vet confirms your dog is ready. Timing depends on the surgery and your dog's progress."
    ],
    sections: [
      {
        heading: "Typical recovery goals",
        body: [
          "Early rehabilitation often focuses on comfort, controlled movement, swelling management and preventing compensatory strain. Later stages focus on rebuilding muscle, balance, stamina and confidence.",
          "Your therapist should be clear about what stage your dog is in and what signs would mean slowing down."
        ]
      },
      {
        heading: "Questions to ask the centre",
        body: [
          "Before booking, ask whether they need discharge notes, surgical details, medication information and permission from your vet. Ask how they will update you and whether they liaise with your veterinary team."
        ],
        bullets: [
          "When is it safe to start?",
          "Pool or underwater treadmill?",
          "How will progress be measured?",
          "What should we do between sessions?",
          "What warning signs should we watch for?"
        ]
      },
      {
        heading: "Do not rush the return to walks",
        body: [
          "Dogs often feel better before tissues are ready for normal activity. Avoid off-lead running, stairs, jumping into cars and slippery floors until your vet or therapist says they are appropriate.",
          "A slower, well-planned return usually beats a fast return followed by a setback."
        ]
      }
    ],
    faqs: [
      {
        question: "When can my dog start hydrotherapy after surgery?",
        answer: "Only after your vet or surgeon confirms it is safe. Wounds usually need to be healed, and timing varies by procedure."
      },
      {
        question: "Is an underwater treadmill better than a pool after surgery?",
        answer: "It depends on the surgery, gait, confidence and rehab goals. A qualified therapist can explain which option is most suitable."
      }
    ]
  },
  {
    slug: "how-much-does-dog-hydrotherapy-cost",
    title: "How much does dog hydrotherapy cost in the UK?",
    description: "Typical UK hydrotherapy session and course prices, what drives fees, insurance paperwork, and questions to ask before you book.",
    imageLabel: "Cost guide",
    imageSrc: "/images/guide-hydrotherapy-cost.jpg",
    readTime: "6 min read",
    category: "Costs",
    keyTakeaways: [
      "Costs vary by region, facility type, session length and therapist input.",
      "Ask for assessment fees, session fees, package prices and cancellation terms.",
      "Some insurance policies may contribute when treatment is vet-referred."
    ],
    body: [
      "Dog hydrotherapy in the UK typically costs roughly £30–£60 per follow-up session, with first assessments often higher because they include history, gait review and a tailored plan. Exact prices vary by region, pool vs underwater treadmill, session length and whether a physiotherapist is involved — always confirm fees with the centre.",
      "The cheapest option is not always best. For rehabilitation, quality of assessment, safety, water hygiene, handling and communication matter more than price alone. Ask for assessment fees, package deals, cancellation terms and whether invoices or reports can support an insurance claim."
    ],
    sections: [
      {
        heading: "What affects the price",
        body: [
          "Underwater treadmill sessions, pool sessions, physiotherapy input and longer appointments may be priced differently. Urban centres may also cost more due to overheads.",
          "Some centres offer block bookings, but make sure the plan is right for your dog before buying a large package."
        ],
        bullets: [
          "Initial assessment fee",
          "Pool vs underwater treadmill",
          "Therapist qualifications",
          "Session length and frequency",
          "Whether reports are sent to your vet"
        ]
      },
      {
        heading: "Insurance and referrals",
        body: [
          "Pet insurance may cover hydrotherapy or physiotherapy if it is recommended by a vet and provided by an eligible professional. Policies differ, so check before treatment starts.",
          "Keep invoices, referral forms and progress reports in case your insurer asks for evidence."
        ]
      },
      {
        heading: "Budgeting for a course",
        body: [
          "Many dogs need several sessions to build strength or confidence. Ask what the first four to six weeks may look like, what progress markers they expect, and when the plan will be reviewed."
        ]
      }
    ],
    faqs: [
      {
        question: "Is one hydrotherapy session enough?",
        answer: "One session can introduce your dog to the environment, but rehab goals usually need a course with review points."
      },
      {
        question: "Should I choose the cheapest hydrotherapy centre?",
        answer: "Price matters, but choose based on safety, veterinary communication, qualifications, cleanliness and how well the team understands your dog's needs."
      }
    ]
  },
  {
    slug: "underwater-treadmill-for-dogs",
    title: "Underwater treadmill for dogs: what to expect",
    description: "How underwater treadmills work, which dogs may benefit, and how sessions differ from swimming.",
    imageLabel: "Underwater treadmill",
    imageSrc: "/images/guide-underwater-treadmill.jpg",
    readTime: "7 min read",
    category: "Treatments",
    keyTakeaways: [
      "Underwater treadmills allow controlled walking with reduced weight-bearing.",
      "Water height, speed and duration can be adjusted for each dog.",
      "They are often useful for gait work, strength and post-surgery progression."
    ],
    body: [
      "An underwater treadmill is a clear tank with a moving belt and adjustable water level. Your dog walks while water supports some body weight and provides gentle resistance.",
      "Because the therapist can control speed, water depth and session length, treadmill work is often used when precise movement matters."
    ],
    sections: [
      {
        heading: "How it differs from swimming",
        body: [
          "Swimming is non-weight-bearing and can be excellent for fitness or confidence, but it does not reproduce a walking pattern. Treadmill work keeps the dog in a more natural gait.",
          "Some dogs use both pool and treadmill work at different stages of a plan."
        ]
      },
      {
        heading: "What happens in a session",
        body: [
          "Your dog will usually enter the tank using a ramp or door. Water is added slowly, and the belt speed starts gently. The therapist watches posture, stride length, fatigue and confidence.",
          "Sessions may be short at first. Quality of movement matters more than duration."
        ]
      },
      {
        heading: "Good questions to ask",
        body: [
          "Ask why the treadmill is recommended, how water height will be chosen, and how the team will know when to increase or reduce difficulty."
        ]
      }
    ],
    faqs: [
      {
        question: "Will my dog be scared of the underwater treadmill?",
        answer: "Some dogs are unsure at first. Good centres introduce the tank slowly, use calm handling and stop if the dog is overwhelmed."
      },
      {
        question: "Is treadmill hydrotherapy suitable for all dogs?",
        answer: "No. Suitability depends on medical history, pain, behaviour, size, skin condition and veterinary advice."
      }
    ]
  },
  {
    slug: "dog-swimming-vs-hydrotherapy",
    title: "Dog swimming vs hydrotherapy: what is the difference?",
    description: "Understand the difference between fun swims, fitness swims and clinical hydrotherapy for rehabilitation.",
    imageLabel: "Dog swimming pool",
    imageSrc: "/images/guide-dog-swimming-vs-hydrotherapy.jpg",
    readTime: "5 min read",
    category: "Treatments",
    keyTakeaways: [
      "Not every dog swimming pool is a rehabilitation service.",
      "Clinical hydrotherapy should involve assessment, goals and veterinary consent.",
      "Fun swims can be great enrichment but may not suit injured or painful dogs."
    ],
    body: [
      "Owners often search for a dog swimming pool when what they need is clinical hydrotherapy. Both involve water, but the purpose and safety checks can be very different.",
      "A fun swim may focus on confidence, enrichment or exercise. Hydrotherapy for rehab should be structured around a diagnosis, measurable goals and professional handling."
    ],
    sections: [
      {
        heading: "When a fun swim may be enough",
        body: [
          "Healthy dogs who enjoy water may benefit from supervised swimming for fitness and enrichment. It can be especially useful when owners want a safe indoor activity.",
          "Even then, dogs should be introduced gradually and monitored for fatigue."
        ]
      },
      {
        heading: "When you need hydrotherapy",
        body: [
          "Choose clinical hydrotherapy if your dog has pain, lameness, surgery, arthritis, neurological signs or a diagnosed mobility condition.",
          "The centre should ask for veterinary consent and explain how each session supports the rehab plan."
        ]
      },
      {
        heading: "Safety signs to look for",
        body: [
          "Look for clean water, controlled entry and exit, life jackets where needed, calm handling, rest breaks and records of your dog's progress."
        ]
      }
    ],
    faqs: [
      {
        question: "Can swimming make an injury worse?",
        answer: "It can if the dog is not medically ready or if the exercise is too intense. Ask your vet before swimming an injured or post-operative dog."
      },
      {
        question: "Do all hydrotherapy centres offer fun swims?",
        answer: "No. Some focus on rehabilitation only, while others offer fitness or confidence swims alongside clinical services."
      }
    ]
  },
  {
    slug: "cruciate-ligament-rehab-dogs",
    title: "Cruciate ligament rehab in dogs",
    description: "How canine physiotherapy and hydrotherapy may support dogs after CCL injury, TPLO or other knee surgery.",
    imageLabel: "Cruciate ligament rehab",
    imageSrc: "/images/guide-cruciate-ligament-rehab.jpg",
    readTime: "8 min read",
    category: "Surgery recovery",
    keyTakeaways: [
      "CCL rehab should be coordinated with your vet or surgeon.",
      "Strength, balance and controlled gait matter as much as exercise volume.",
      "Avoid sudden running, jumping and slippery floors during recovery."
    ],
    body: [
      "Cranial cruciate ligament disease is a common reason dogs are referred for rehabilitation. Some dogs are managed surgically, while others follow conservative management under veterinary guidance.",
      "Hydrotherapy and physiotherapy can help rebuild strength and movement, but timing and progression must be carefully controlled."
    ],
    sections: [
      {
        heading: "Why rehab matters",
        body: [
          "Dogs often shift weight away from the affected leg. Over time this can cause muscle loss, altered gait and extra strain elsewhere.",
          "A rehab plan can target controlled weight bearing, muscle rebuilding, balance and safe return to normal activity."
        ]
      },
      {
        heading: "Hydrotherapy options",
        body: [
          "Underwater treadmill work may help encourage a controlled walking pattern. Pool work may be used later for fitness or strength, depending on the dog.",
          "Your therapist should explain why they choose one option over another."
        ]
      },
      {
        heading: "Owner priorities at home",
        body: [
          "Use non-slip flooring, follow lead-walk restrictions, block access to stairs if advised and prevent jumping on furniture or into cars."
        ]
      }
    ],
    faqs: [
      {
        question: "Can hydrotherapy prevent cruciate surgery?",
        answer: "Only your vet can advise on treatment options. Hydrotherapy may support conservative management in some cases, but it is not a substitute for veterinary assessment."
      },
      {
        question: "When can my dog go back off lead?",
        answer: "That decision should come from your vet, surgeon or rehab professional after assessing healing, strength and movement."
      }
    ]
  },
  {
    slug: "ivdd-hydrotherapy-dogs",
    title: "Hydrotherapy for dogs with IVDD",
    description: "What owners should know about spinal disc disease, rehab timing, safety and questions for the vet.",
    imageLabel: "IVDD rehab",
    imageSrc: "/images/guide-ivdd-hydrotherapy.jpg",
    readTime: "7 min read",
    category: "Spinal rehab",
    keyTakeaways: [
      "IVDD always needs veterinary guidance before hydrotherapy.",
      "Rehab goals may include comfort, coordination, strength and confidence.",
      "Handling, support and fatigue monitoring are especially important."
    ],
    body: [
      "Intervertebral disc disease can affect pain, coordination and limb strength. Some dogs are treated surgically, while others follow strict rest and medication under veterinary care.",
      "Hydrotherapy may be part of rehabilitation for some IVDD dogs, but it must be introduced at the right time and with appropriate support."
    ],
    sections: [
      {
        heading: "Why veterinary timing matters",
        body: [
          "Starting too early or doing too much can be harmful. Your vet or specialist should confirm when controlled rehabilitation is appropriate.",
          "The centre should understand your dog's neurological status, medication and restrictions."
        ]
      },
      {
        heading: "What a cautious session looks like",
        body: [
          "Sessions may be short, highly supported and focused on controlled movement rather than fitness. The therapist should watch for fatigue, anxiety and changes in limb use."
        ]
      },
      {
        heading: "Red flags after a session",
        body: [
          "Contact your vet if your dog becomes weaker, painful, more wobbly, unable to toilet normally, unusually quiet or reluctant to move."
        ]
      }
    ],
    faqs: [
      {
        question: "Is hydrotherapy safe for IVDD?",
        answer: "It may be appropriate for some dogs, but only with veterinary approval and a therapist experienced in neurological rehabilitation."
      },
      {
        question: "Should I try water exercises at home?",
        answer: "Do not attempt home hydrotherapy for IVDD without direct veterinary or therapist instruction. Poor support or slipping can be risky."
      }
    ]
  },
  {
    slug: "hip-dysplasia-hydrotherapy-dogs",
    title: "Hydrotherapy for hip dysplasia in dogs",
    description: "How water-based exercise may support dogs with hip dysplasia, weakness or reduced hindlimb confidence.",
    imageLabel: "Hip dysplasia support",
    imageSrc: "/images/guide-hip-dysplasia-hydrotherapy.jpg",
    readTime: "6 min read",
    category: "Mobility",
    keyTakeaways: [
      "Hydrotherapy can help strengthen supporting muscles with less joint load.",
      "Young dogs and post-surgery dogs need vet-led plans.",
      "Weight management and home setup are important for long-term comfort."
    ],
    body: [
      "Hip dysplasia affects the structure and stability of the hip joint. Dogs may show stiffness, bunny-hopping, reduced jumping, hindlimb weakness or reluctance to exercise.",
      "Hydrotherapy may help build muscle and controlled movement, but it should be part of a wider plan from your vet."
    ],
    sections: [
      {
        heading: "How water exercise helps",
        body: [
          "Buoyancy reduces impact while resistance helps muscle work. This can be useful for dogs that need strength but cannot tolerate too much land exercise.",
          "The exact exercise should be adapted to age, severity, pain level and confidence."
        ]
      },
      {
        heading: "Young dogs need extra care",
        body: [
          "If your dog is still growing, speak to your vet about what activity is safe. Overdoing exercise can be counterproductive, even in water."
        ]
      },
      {
        heading: "Support between sessions",
        body: [
          "Keep your dog lean, use ramps where appropriate, avoid repeated jumping and choose controlled lead walks over sudden high-impact play."
        ]
      }
    ],
    faqs: [
      {
        question: "Can hydrotherapy cure hip dysplasia?",
        answer: "No. It cannot change joint structure, but it may support muscle, comfort and mobility as part of a management plan."
      },
      {
        question: "Is swimming or treadmill better for hip dysplasia?",
        answer: "It depends on your dog's gait, strength and goals. A therapist can decide after assessment and veterinary consent."
      }
    ]
  },
  {
    slug: "senior-dog-mobility-support",
    title: "Senior dog mobility guide",
    description: "Practical ways to support older dogs with stiffness, weakness, confidence changes and reduced stamina.",
    imageLabel: "Senior dog mobility",
    imageSrc: "/images/guide-senior-dog-mobility-guide.jpg",
    readTime: "7 min read",
    category: "Senior dogs",
    keyTakeaways: [
      "Short, consistent movement is often better than occasional long walks.",
      "Hydrotherapy, physiotherapy and massage may help when vet-approved.",
      "Small home changes can make a large difference to comfort."
    ],
    body: [
      "Older dogs often slow down gradually, so owners may miss early signs of discomfort. Stiffness, slipping, reduced stairs, shorter walks and changed posture are all worth discussing with your vet.",
      "The goal is usually comfort and quality of life rather than athletic performance."
    ],
    sections: [
      {
        heading: "Simple changes at home",
        body: [
          "Use rugs or mats on slippery floors, raise food bowls if advised, keep nails short, provide supportive bedding and consider ramps for cars or steps.",
          "Avoid sudden weekend over-exercise after quiet weekdays."
        ]
      },
      {
        heading: "Exercise for older dogs",
        body: [
          "Many senior dogs do best with shorter, regular walks and gentle strengthening. Hydrotherapy may help dogs who need controlled exercise with reduced joint loading."
        ]
      },
      {
        heading: "When to seek help",
        body: [
          "Speak to your vet if your dog struggles to rise, slips often, pants at rest, seems painful, changes behaviour or loses muscle quickly."
        ]
      }
    ],
    faqs: [
      {
        question: "Is my dog too old for hydrotherapy?",
        answer: "Age alone is not the deciding factor. Health, pain, confidence and veterinary advice matter more."
      },
      {
        question: "How often should senior dogs exercise?",
        answer: "Frequency depends on health and stamina. Many older dogs benefit from little-and-often activity rather than long intense walks."
      }
    ]
  },
  {
    slug: "how-to-choose-a-canine-hydrotherapy-centre",
    title: "How to choose a dog hydrotherapy centre in the UK",
    description: "Compare UK dog hydrotherapy centres by referral rules, qualifications, facilities, safety, reviews and cost — before you book.",
    imageLabel: "Choosing a centre",
    imageSrc: "/images/guide-choose-hydrotherapy-centre.jpg",
    readTime: "6 min read",
    category: "Choosing a centre",
    keyTakeaways: [
      "Ask about referral, qualifications, assessment, water hygiene and emergency procedures.",
      "The centre should explain goals, not just sell sessions.",
      "Your dog should be handled calmly and never rushed."
    ],
    body: [
      "Choose a dog hydrotherapy centre by checking veterinary referral or consent rules, therapist qualifications, water hygiene, calm handling, and whether they write clear goals — not distance or price alone. Shortlist two or three providers near you, then call with your dog's diagnosis and temperament before booking.",
      "You are placing your dog in a specialist environment where handling, water quality and clinical judgement all matter. Use the checklist below when comparing centres on HyperDog Therapy or in your area."
    ],
    sections: [
      {
        heading: "Professional standards to check",
        body: [
          "Ask whether the centre requires veterinary referral or consent, what qualifications therapists hold and whether they keep treatment notes.",
          "A centre should be willing to explain water testing, cleaning, safety equipment and how they respond if a dog becomes distressed."
        ],
        bullets: [
          "Veterinary consent process",
          "Qualified hydrotherapists or physiotherapists",
          "Clean water and safe entry/exit",
          "Individual plans and progress notes",
          "Clear communication with owners"
        ]
      },
      {
        heading: "Watch the handling style",
        body: [
          "Good therapy feels calm and controlled. Staff should give dogs time to adjust, use suitable flotation support and avoid forcing nervous dogs through the session."
        ]
      },
      {
        heading: "Compare more than distance",
        body: [
          "A nearby centre is convenient, but the right expertise may be worth travelling for, especially after surgery or with neurological conditions."
        ]
      }
    ],
    faqs: [
      {
        question: "What should I bring to a first hydrotherapy appointment?",
        answer: "Bring veterinary notes if requested, medication details, towels if the centre asks, and information about your dog's behaviour around water and handling."
      },
      {
        question: "Should a centre guarantee results?",
        answer: "Be cautious of guarantees. Good centres explain realistic goals, review progress and adapt the plan."
      }
    ]
  },
  {
    slug: "first-dog-hydrotherapy-session",
    title: "Your dog's first hydrotherapy session",
    description: "What happens at the first appointment, how to prepare, and how to help a nervous dog feel safer.",
    imageLabel: "First hydrotherapy session",
    imageSrc: "/images/guide-first-hydrotherapy-session.jpg",
    readTime: "5 min read",
    category: "Getting started",
    keyTakeaways: [
      "The first visit usually includes history, assessment and a gentle introduction.",
      "Do not feed your dog immediately before the appointment.",
      "Tell the centre about anxiety, pain, reactivity or handling concerns."
    ],
    body: [
      "A first hydrotherapy visit is usually slower and more careful than owners expect. The therapist needs to understand your dog's health, confidence, movement and goals before doing much in the water.",
      "For nervous dogs, a successful first session may simply mean calm entry, a short supported exercise and leaving relaxed."
    ],
    sections: [
      {
        heading: "Before you arrive",
        body: [
          "Follow the centre's feeding guidance, usually avoiding a meal close to the session. Bring any requested vet paperwork and tell the team if your dog is anxious, reactive or sensitive to touch."
        ]
      },
      {
        heading: "During the session",
        body: [
          "Your dog may be fitted with a life jacket or harness. The therapist may assess walking, posture, muscle condition and comfort before introducing the pool or treadmill.",
          "The water work may be very short at first."
        ]
      },
      {
        heading: "After the session",
        body: [
          "Many dogs are tired afterwards. Keep the rest of the day calm, follow any instructions and report unusual soreness, lameness or behaviour changes."
        ]
      }
    ],
    faqs: [
      {
        question: "What if my dog hates water?",
        answer: "Tell the centre in advance. Some dogs need confidence work first, and some may be better suited to physiotherapy or land-based rehab."
      },
      {
        question: "Can I stay with my dog?",
        answer: "Most centres allow owners to stay nearby, but policies vary depending on safety, space and the dog's behaviour."
      }
    ]
  },
  {
    slug: "vet-referral-for-dog-hydrotherapy",
    title: "Do dogs need a vet referral for hydrotherapy?",
    description: "Why many centres ask for veterinary consent, what referral forms cover, and how to prepare.",
    imageLabel: "Vet referral",
    imageSrc: "/images/guide-vet-referral-hydrotherapy.jpg",
    readTime: "5 min read",
    category: "Referrals",
    keyTakeaways: [
      "Veterinary consent helps confirm hydrotherapy is appropriate and safe.",
      "Referral forms usually cover diagnosis, medication and restrictions.",
      "Direct centre enquiries are common, but vet permission may still be needed before treatment."
    ],
    body: [
      "Many reputable hydrotherapy centres require a veterinary referral or consent form before treating a dog. This is not red tape for the sake of it; it helps protect your dog.",
      "The therapist needs to know the diagnosis, relevant medical history, medication and any restrictions before planning safe sessions."
    ],
    sections: [
      {
        heading: "What the referral form may include",
        body: [
          "Forms often ask for your dog's condition, medication, surgery dates, wound status, exercise restrictions and whether the vet considers hydrotherapy appropriate."
        ]
      },
      {
        heading: "Who contacts the vet?",
        body: [
          "Some centres ask owners to arrange consent, while others contact the practice directly. Ask the centre what they need before your first appointment."
        ]
      },
      {
        heading: "Why it helps your dog",
        body: [
          "A proper referral reduces guesswork. It helps the therapist choose safer exercises, avoid contraindications and report useful progress back to the vet."
        ]
      }
    ],
    faqs: [
      {
        question: "Can a healthy dog have hydrotherapy for fitness?",
        answer: "Some centres offer fitness swims, but many still seek veterinary permission to confirm there are no health concerns."
      },
      {
        question: "Will my vet recommend a specific centre?",
        answer: "Some vets have preferred local providers, while others leave the choice to owners. You can still compare qualifications, facilities and reviews."
      }
    ]
  },
  {
    slug: "dog-physiotherapy-explained",
    title: "Canine physiotherapy explained",
    description: "What dog physiotherapy involves, how it differs from hydrotherapy, and when it may be recommended.",
    imageLabel: "Canine physiotherapy",
    imageSrc: "/images/guide-dog-physiotherapy-explained.jpg",
    readTime: "7 min read",
    category: "Treatments",
    keyTakeaways: [
      "Physiotherapy can include assessment, manual therapy, exercises and owner education.",
      "It may be used with or without hydrotherapy.",
      "A home plan is often a key part of successful rehab."
    ],
    body: [
      "Canine physiotherapy focuses on movement, comfort, strength and function. It may involve hands-on techniques, therapeutic exercises, balance work, gait assessment and advice for daily management.",
      "Hydrotherapy is one tool that may sit alongside physiotherapy, but it is not the whole rehab picture."
    ],
    sections: [
      {
        heading: "What physiotherapists assess",
        body: [
          "A physiotherapist may look at posture, gait, muscle condition, joint range, pain responses, balance, function and how your dog moves at home."
        ]
      },
      {
        heading: "What treatment may include",
        body: [
          "Treatment could include controlled exercises, manual therapy, stretches, strengthening, balance work and owner education. Some professionals also use equipment or electrotherapies where appropriate."
        ]
      },
      {
        heading: "Why the home plan matters",
        body: [
          "A few minutes of correct exercise at home can support progress between appointments. Do only the exercises prescribed for your dog."
        ]
      }
    ],
    faqs: [
      {
        question: "Is physiotherapy only for injured dogs?",
        answer: "No. It may also support older dogs, dogs with long-term conditions and dogs needing strength or mobility work."
      },
      {
        question: "Can physiotherapy hurt my dog?",
        answer: "Exercises or handling that are inappropriate can make problems worse. Work with a qualified professional and follow your vet's advice."
      }
    ]
  },
  {
    slug: "dog-hydrotherapy-insurance-uk",
    title: "Does pet insurance cover dog hydrotherapy in the UK?",
    description: "How insurers usually treat hydrotherapy and physiotherapy, what paperwork centres provide, and questions to ask before claiming.",
    imageLabel: "Insurance and hydrotherapy",
    imageSrc: "/images/guide-hydrotherapy-cost.jpg",
    readTime: "6 min read",
    category: "Costs",
    keyTakeaways: [
      "Many policies cover hydrotherapy only when it is vet-referred and provided by an eligible professional.",
      "Keep referral forms, invoices and progress notes from the start of treatment.",
      "Policies differ widely — confirm cover, limits and excess before booking a course."
    ],
    body: [
      "Owners often ask whether pet insurance will pay for dog hydrotherapy or canine physiotherapy. There is no single UK rule: cover depends on your policy wording, whether treatment is recommended by a vet, who delivers the sessions and whether the insurer recognises that provider.",
      "This guide explains practical steps so you can compare centres and avoid surprises at claim time. It is general information only — always read your policy documents and speak with your insurer."
    ],
    sections: [
      {
        heading: "When insurers may contribute",
        body: [
          "Many policies treat hydrotherapy as complementary treatment for an insured condition, such as arthritis, cruciate injury or post-surgical rehab, when a vet has recommended it.",
          "Insurers may ask for evidence that sessions are therapeutic rather than recreational swimming. That is one reason reputable centres use referral or consent forms."
        ]
      },
      {
        heading: "Paperwork to keep",
        body: [
          "From the first appointment, keep veterinary referral or consent, itemised invoices, dates of sessions and any progress summaries the centre can share with your vet.",
          "If your insurer uses a direct-pay network, confirm the centre is acceptable before treatment starts — do not assume every hydrotherapy pool qualifies."
        ],
        bullets: [
          "Vet referral or consent letter",
          "Itemised invoices with dates",
          "Session notes or discharge summaries",
          "Your policy number and claim reference"
        ]
      },
      {
        heading: "Questions for your insurer and centre",
        body: [
          "Ask your insurer: Is hydrotherapy covered for this diagnosis? Is there a session limit or annual cap? Must the therapist hold specific qualifications?",
          "Ask the centre: Can you provide insurance-style invoices? Will you complete insurer forms? Can reports go to our vet?"
        ]
      }
    ],
    faqs: [
      {
        question: "Is recreational dog swimming usually covered?",
        answer: "Most policies focus on vet-directed treatment. Fitness or fun swims are less likely to be covered unless your policy explicitly includes them."
      },
      {
        question: "What if my claim is rejected?",
        answer: "Ask the insurer which document or wording failed. Your vet or centre may be able to clarify the treatment plan. You can still pay privately while disputing a decision through the insurer's complaints process."
      }
    ]
  },
  {
    slug: "nervous-dog-hydrotherapy",
    title: "Hydrotherapy for nervous or anxious dogs",
    description: "How centres introduce fearful dogs to water, what to tell them beforehand, and when land-based rehab may be better first.",
    imageLabel: "Nervous dog hydrotherapy",
    imageSrc: "/images/guide-first-hydrotherapy-session.jpg",
    readTime: "6 min read",
    category: "Getting started",
    keyTakeaways: [
      "A good first session for a nervous dog may be very short and focus on confidence, not exercise.",
      "Tell the centre about reactivity, handling sensitivity, noise fears and past bad experiences.",
      "Some dogs need physiotherapy or confidence work on land before pool sessions."
    ],
    body: [
      "Many owners worry their dog is too anxious for hydrotherapy. In practice, experienced centres often work with nervous rescues, post-operative dogs who dislike handling, and older dogs who have never swum.",
      "Success usually depends on a slow introduction, clear communication and realistic goals — not forcing a dog into the water on day one."
    ],
    sections: [
      {
        heading: "What to tell the centre before booking",
        body: [
          "Describe triggers: strangers, other dogs, loud dryers, slippery floors, harnesses, tail or paw handling, and any bite history.",
          "Ask whether sessions are one-to-one, how dogs enter the pool, whether you can stay nearby, and how they stop a session if stress rises."
        ]
      },
      {
        heading: "What a gentle first visit may look like",
        body: [
          "The therapist may spend most of the appointment on history, walking assessment and calm handling near the pool.",
          "Water introduction might mean standing in shallow water, supported floating with a life jacket, or a brief treadmill walk — not a full workout."
        ]
      },
      {
        heading: "When to pause or choose another route",
        body: [
          "If your dog is in acute pain, has open wounds, is medically unstable, or is extremely reactive in busy environments, ask your vet whether hydrotherapy should wait.",
          "Land-based physiotherapy, pain control and behaviour support may need to come first."
        ]
      }
    ],
    faqs: [
      {
        question: "Should I sedate my anxious dog for hydrotherapy?",
        answer: "Only if your vet prescribes medication for a specific reason. Sedation decisions are veterinary — do not use human calming products without professional advice."
      },
      {
        question: "Can I try hydrotherapy if my dog hates baths?",
        answer: "Many bath-shy dogs tolerate therapeutic pools because the environment, handling and goals are different. Tell the centre about bath fear so they can plan a slower introduction."
      }
    ]
  },
  {
    slug: "dog-weight-management-hydrotherapy",
    title: "Dog weight management and hydrotherapy",
    description: "How controlled water exercise can support overweight dogs when combined with vet-led diet and mobility planning.",
    imageLabel: "Weight and hydrotherapy",
    imageSrc: "/images/guide-need-hydrotherapy.jpg",
    readTime: "7 min read",
    category: "Conditions",
    keyTakeaways: [
      "Hydrotherapy can offer lower-impact exercise when walks are limited, but diet and vet oversight remain central.",
      "Weight loss plans should be gradual and tailored — especially for breeds prone to joint strain.",
      "Ask how the centre monitors fatigue, lameness and progress."
    ],
    body: [
      "Carrying extra weight increases load on joints and can make arthritis, cruciate problems and breathing issues harder to manage. When vets recommend more controlled activity, hydrotherapy or structured swimming may be discussed as part of a wider weight plan.",
      "Water exercise is not a substitute for measured feeding, pain control or diagnosis of underlying disease."
    ],
    sections: [
      {
        heading: "Why vets may suggest water exercise",
        body: [
          "Buoyancy can reduce load on sore joints while the dog moves in a controlled way. That may help some overweight dogs build fitness when normal walks cause lameness or overheating.",
          "The therapist should set pace, duration and frequency based on your dog's shape, breathing, heart health and mobility — not generic weight-loss targets."
        ]
      },
      {
        heading: "Combining hydrotherapy with diet changes",
        body: [
          "Most successful weight plans combine appropriate food portions, treats discipline, vet weigh-ins and realistic exercise.",
          "Ask your vet for a target rate of loss and whether hydrotherapy is safe if your dog also has heart disease, airway problems or significant arthritis."
        ]
      },
      {
        heading: "Warning signs to report",
        body: [
          "Stop and contact your vet if your dog becomes more lame, pants excessively, coughs, vomits, refuses food, or is unusually stiff after sessions.",
          "Good centres reduce session length or pause treatment when a dog is struggling — progress should be reviewed regularly."
        ]
      }
    ],
    faqs: [
      {
        question: "How many hydrotherapy sessions will my dog need to lose weight?",
        answer: "There is no fixed number. Weight change depends mainly on diet and overall activity. Hydrotherapy may support fitness but rarely drives loss on its own."
      },
      {
        question: "Is dog swimming enough for weight loss?",
        answer: "Recreational swimming can help some dogs, but overweight dogs with joint disease usually need a vet-approved plan rather than unstructured exercise alone."
      }
    ]
  },
  {
    slug: "winter-dog-mobility-at-home",
    title: "Winter mobility support for older dogs at home",
    description: "Practical home safety, exercise and comfort tips for stiff senior dogs — alongside vet care and therapy where appropriate.",
    imageLabel: "Winter mobility",
    imageSrc: "/images/guide-senior-dog-mobility-guide.jpg",
    readTime: "6 min read",
    category: "Conditions",
    keyTakeaways: [
      "Cold, ice and slippery floors often make arthritis stiffness more noticeable in winter.",
      "Short, frequent supported walks and non-slip surfaces can reduce falls at home.",
      "Hydrotherapy or physiotherapy may help some dogs when recommended by a vet."
    ],
    body: [
      "Many owners notice their older dog is slower, stiffer or less willing to go out in winter. Cooler weather, damp conditions and reduced daylight can all change routine — but sudden lameness or loss of appetite still deserves a vet check.",
      "Home changes and gentle activity can complement professional treatment; they do not replace diagnosis."
    ],
    sections: [
      {
        heading: "Make the home safer",
        body: [
          "Use rugs or runners on slippery floors, block stairs if needed, and provide a supportive bed away from draughts.",
          "Dry paws after wet walks and check nails — long nails reduce grip on hard floors."
        ],
        bullets: [
          "Non-slip routes to food, water and bed",
          "Ramps or lifted bowls if neck or back stiffness",
          "Warm, draft-free resting area",
          "Good lighting for evening movement"
        ]
      },
      {
        heading: "Exercise in colder months",
        body: [
          "Several short walks may suit stiff dogs better than one long outing. Let your dog set the pace and watch for lagging, shaking or reluctance to continue.",
          "If your vet agrees, indoor balance exercises or hydrotherapy may maintain muscle when outdoor activity drops."
        ]
      },
      {
        heading: "When to speak to your vet",
        body: [
          "Book a review if stiffness is worsening quickly, your dog yelps when moving, stops eating, or cannot stand. Winter management should adapt to pain level and diagnosis — not guesswork."
        ]
      }
    ],
    faqs: [
      {
        question: "Do dogs with arthritis feel worse in winter?",
        answer: "Some owners report more stiffness in cold or damp weather. Patterns vary between dogs; track symptoms and discuss changes with your vet."
      },
      {
        question: "Can hydrotherapy replace winter walks?",
        answer: "It may supplement activity for some dogs when vet-approved, but most still need appropriate outdoor toileting walks and mental stimulation."
      }
    ]
  },
  {
    slug: "benefits-of-dog-hydrotherapy",
    title: "Benefits of dog hydrotherapy: what it can (and cannot) do",
    description: "A clear, vet-led look at how warm-water therapy may support mobility, strength and confidence — and when it is the wrong choice for your dog.",
    imageLabel: "Benefits of hydrotherapy",
    imageSrc: "/images/service-dog-hydrotherapy.jpg",
    readTime: "9 min read",
    category: "Getting started",
    keyTakeaways: [
      "Hydrotherapy uses buoyancy and warm water to support controlled movement with less joint load than many land walks.",
      "Benefits depend on diagnosis, pain control, handler skill and a realistic plan — not on water alone.",
      "It supports management and rehab goals; it does not reverse structural disease or replace veterinary care."
    ],
    body: [
      "When people search for the benefits of dog hydrotherapy, they usually want a straight answer: will warm-water exercise help my dog move more comfortably? For many dogs with arthritis, post-surgery weakness, muscle loss or limited land exercise, the answer can be yes — when a vet agrees it is appropriate and a trained therapist adapts each session.",
      "Buoyancy reduces load through joints and recovering tissues, while water resistance encourages muscle work without the pounding of pavement. That combination is why UK centres use pools and underwater treadmills for rehabilitation and carefully paced fitness. Results still vary. A nervous, painful or medically unstable dog may need a different starting point, and some conditions are better managed on land first.",
      "Use this guide to understand realistic benefits, common myths, and the questions that separate clinical hydrotherapy from a casual swim. When you are ready to compare providers, browse centres on HyperDog Therapy and shortlist ones that ask for veterinary consent and explain goals clearly."
    ],
    sections: [
      {
        heading: "The benefits owners most often notice",
        body: [
          "Owners rarely describe hydrotherapy as dramatic overnight change. More often they report steadier rising from rest, more even weight bearing, better willingness to walk short distances, or improved confidence around movement after a planned course.",
          "Those changes matter because daily life is made of small tasks: getting into the car, navigating stairs, toileting outdoors and keeping muscle that supports painful joints. Warm water can make early practice of those movement patterns more tolerable when land exercise is limited."
        ],
        bullets: [
          "Lower-impact exercise when walks cause stiffness or lameness",
          "Support for muscle maintenance during restricted activity",
          "Controlled cardiovascular work for dogs who cannot tolerate long outings",
          "Confidence building for dogs who have become hesitant or uneven",
          "A structured review point with a therapist who watches gait and fatigue"
        ]
      },
      {
        heading: "Why warm water changes the exercise equation",
        body: [
          "On land, every step transmits force through paws, joints and the spine. In water, buoyancy offsets part of that load. Raising the water level generally increases support; lowering it increases weight bearing. Therapists use that lever carefully, especially after surgery or during flare-ups.",
          "Warmth may also encourage softer muscle tone and more willing movement in some stiff dogs. That is helpful, but warmth is not pain relief on its own. If your dog is still uncomfortable at home, ask your vet about the wider plan before adding more exercise of any kind."
        ]
      },
      {
        heading: "Pool work versus underwater treadmill benefits",
        body: [
          "Swimming is non-weight-bearing and can suit fitness, confidence or certain rehab stages, but it does not recreate a walking pattern. An underwater treadmill keeps the dog in a gait pattern while water height, belt speed and duration are adjusted.",
          "Neither option is universally better. A dog recovering from knee surgery may need precise treadmill walking; a dog rebuilding stamina after a long rest may later use pool work. The benefit comes from matching the tool to the goal, not from choosing the trendiest facility."
        ]
      },
      {
        heading: "What hydrotherapy cannot do",
        body: [
          "Hydrotherapy cannot remodel a dysplastic joint, heal a torn cruciate ligament, or replace surgery when surgery is needed. It also cannot fix pain that has not been properly investigated. If lameness is new, worsening or unexplained, start with your vet — not a swim booking.",
          "Be wary of marketing that promises transformation for every dog. A responsible centre will talk about assessment, progression and times when sessions should stop or be shortened."
        ]
      },
      {
        heading: "Who is most likely to benefit",
        body: [
          "Dogs commonly referred for hydrotherapy include those with osteoarthritis, hip or elbow dysplasia management plans, post-operative orthopaedic rehab, neurological recovery under specialist guidance, and weight-related mobility limits.",
          "Fitness clients without a diagnosis can still benefit from supervised water exercise, but they should still be honest about age, breed risks and any subtle stiffness. Recreational swimming and clinical hydrotherapy are not the same service — see our swimming versus hydrotherapy guide if you are unsure which you need."
        ]
      },
      {
        heading: "How to judge whether the benefits are worth booking",
        body: [
          "Ask what problem the sessions are meant to change in four to six weeks: stronger hindlimb drive, more symmetrical stride, safer rising, better stamina, or calmer water confidence. Vague packages with no review points are a weaker buy than a short assessed course with clear checkpoints.",
          "Also ask about cost, insurance paperwork, handling for nervous dogs and whether the team will share notes with your vet. Practical details often decide whether a plan is sustainable for your household."
        ]
      }
    ],
    faqs: [
      {
        question: "How soon might I see benefits from dog hydrotherapy?",
        answer: "Some dogs look more relaxed or confident after early sessions, but strength and gait changes usually need a planned course with reviews. Your therapist should set expectations based on your dog's diagnosis and baseline."
      },
      {
        question: "Are the benefits of hydrotherapy the same for every dog?",
        answer: "No. Age, pain level, body condition, temperament, surgical status and home management all change what is realistic. Two dogs with the same diagnosis can need different session designs."
      },
      {
        question: "Can hydrotherapy help a healthy dog stay fit?",
        answer: "Supervised fitness swimming or treadmill work can be useful enrichment and conditioning for some dogs, especially when weather or pavement limits land exercise. It should still be introduced gradually and stopped if the dog shows pain or distress."
      },
      {
        question: "Is hydrotherapy better than physiotherapy?",
        answer: "They often work together rather than compete. Physiotherapy may focus on assessment, manual techniques and land exercises; hydrotherapy is one way to load movement in water. Your vet can help you decide which to start with."
      }
    ]
  },
  {
    slug: "how-often-dog-hydrotherapy",
    title: "How often should my dog have hydrotherapy?",
    description: "Typical UK session schedules for arthritis, post-surgery rehab and fitness — plus how to know when to increase, reduce or pause.",
    imageLabel: "Hydrotherapy frequency",
    imageSrc: "/images/guide-first-hydrotherapy-session.jpg",
    readTime: "8 min read",
    category: "Getting started",
    keyTakeaways: [
      "There is no single correct frequency — plans usually start with assessment, then one or two sessions a week, then taper as goals are met.",
      "Post-surgery and neurological cases need vet-led timing; more sessions are not automatically better.",
      "Watch recovery between visits: worsening lameness, extreme fatigue or reluctance means the plan needs review."
    ],
    body: [
      "One of the first practical questions owners ask is how often their dog should attend hydrotherapy. Frequency depends on why you are booking: short-term rehabilitation after surgery looks different from long-term arthritis support or occasional fitness swims.",
      "In the UK, many therapeutic plans begin with an assessment, then roughly weekly or twice-weekly sessions for a defined block, followed by a review. That is a pattern, not a rule. Pain, wound healing, heart or breathing concerns, anxiety and your dog's response after each visit all matter more than a generic timetable.",
      "This guide helps you ask better scheduling questions before you buy a large package. Compare centres on HyperDog Therapy, then confirm the proposed frequency with both the therapist and your vet."
    ],
    sections: [
      {
        heading: "Typical patterns you may hear about",
        body: [
          "After the first assessment, centres often suggest a short course — for example four to eight sessions — rather than an open-ended weekly booking forever. That gives enough repetition to build skill and strength while forcing a progress check.",
          "Arthritis or senior mobility plans may settle into weekly or fortnightly maintenance once comfort and muscle are more stable. Fitness clients without clinical restrictions may attend less often, depending on other exercise."
        ],
        bullets: [
          "Assessment first, then a defined starter block",
          "One to two therapeutic sessions weekly is common early on",
          "Maintenance may reduce to every one to two weeks",
          "Fitness-only visits can be less frequent if land exercise is going well",
          "Reviews should change the plan — not just renew the package"
        ]
      },
      {
        heading: "After surgery: why timing beats intensity",
        body: [
          "Post-operative dogs should only start when the vet or surgeon says tissues are ready. Early rehab may involve short, highly controlled sessions rather than long swims. Increasing frequency too quickly can overload a healing limb even in water.",
          "Ask who decides progression: the surgeon's protocol, the rehab therapist, or both. Good centres would rather delay or shorten a session than chase a package schedule."
        ]
      },
      {
        heading: "Arthritis and long-term mobility support",
        body: [
          "For chronic joint disease, consistency often beats heroic bursts. A dog who attends calmly each week and recovers well may do better than a dog booked three times a week who is sore for two days after every visit.",
          "Flare-ups, cold weather, weight gain and medication changes are reasons to temporarily reduce frequency. Keep a simple diary of stiffness after rest, walk length and willingness to exercise so reviews are based on facts."
        ]
      },
      {
        heading: "Signs the schedule is too much — or too little",
        body: [
          "Too much can look like increased limping the next day, reluctance to enter the car for appointments, excessive sleepiness, irritability when touched, or loss of appetite. Report those changes promptly.",
          "Too little progress after a fair trial can mean the modality is wrong, pain control needs review, home exercise is missing, or expectations were unrealistic. Frequency is only one dial; technique and medical management are others."
        ]
      },
      {
        heading: "Building a schedule that fits real life",
        body: [
          "Travel time, work patterns, other pets and your dog's stress in the car all affect what is sustainable. A brilliant clinical plan that you cannot attend reliably is weaker than a slightly simpler plan you can keep.",
          "Ask about cancellation rules, package expiry dates and whether unused sessions can be paused if your dog has a setback. Those details protect both welfare and your budget."
        ]
      },
      {
        heading: "Questions to ask before you commit",
        body: [
          "What frequency do you recommend for this diagnosis and stage? How will we know it is time to reduce? What would make you stop sessions? Will you write goals for the first month? Can you coordinate with our vet if recovery stalls?"
        ]
      }
    ],
    faqs: [
      {
        question: "Is twice a week better than once a week?",
        answer: "Sometimes, especially early in rehab when controlled practice helps rebuild movement. It is not automatically better if your dog needs longer recovery between sessions or becomes stressed by frequent visits."
      },
      {
        question: "How long is a typical course of dog hydrotherapy?",
        answer: "Many centres review after several weeks rather than promising a fixed end date. Surgery cases follow clinical milestones; chronic conditions may move into maintenance. Ask for a review point in writing."
      },
      {
        question: "Can I take my dog swimming on other days as well?",
        answer: "Ask your therapist first. Extra recreational swimming can undo carefully dosed rehab, especially after surgery or during a flare-up."
      },
      {
        question: "Should hydrotherapy continue forever?",
        answer: "Not necessarily. Some dogs graduate to home management and land exercise; others benefit from ongoing maintenance. The decision should follow reassessment, not habit."
      }
    ]
  },
  {
    slug: "elbow-dysplasia-hydrotherapy-dogs",
    title: "Hydrotherapy for elbow dysplasia in dogs",
    description: "How water-based rehab may support dogs with elbow dysplasia, what owners should watch for, and questions to ask your vet and therapist.",
    imageLabel: "Elbow dysplasia support",
    imageSrc: "/images/guide-arthritis.jpg",
    readTime: "8 min read",
    category: "Mobility",
    keyTakeaways: [
      "Elbow dysplasia is a developmental elbow problem that often leads to osteoarthritis; hydrotherapy may support muscle and controlled movement as part of a vet-led plan.",
      "Young, growing dogs and post-operative cases need especially careful dosing — more water exercise is not always safer.",
      "Weight control, lead exercise rules and home flooring matter as much as the pool sessions."
    ],
    body: [
      "Elbow dysplasia is a common cause of front-leg lameness in dogs, especially in larger breeds. It covers several developmental problems in the elbow joint and frequently leads to secondary arthritis. Owners often notice stiffness after rest, reduced willingness to jump, an uneven front gait or shortened stride on one side.",
      "Hydrotherapy may be discussed because buoyancy can reduce load through a painful elbow while the dog still practices controlled movement. That can help maintain supporting muscle when pavement walks are limited. It is not a structural fix. Surgery, medication, weight management and activity modification may still be central, depending on your vet's findings.",
      "If you are comparing UK centres for a dog with known or suspected elbow disease, look for teams comfortable with orthopaedic rehab and clear about progression. Start with veterinary advice, then use HyperDog Therapy to shortlist providers near you."
    ],
    sections: [
      {
        heading: "How elbow problems change movement",
        body: [
          "Dogs with elbow pain often shift weight, shorten stride or avoid pushing through the affected limb. Over time, that can mean muscle loss in the front assembly and compensatory strain through the neck, shoulders or opposite limb.",
          "Rehab goals usually focus on comfort, symmetrical weight bearing, muscle support and safer daily activity — not athletic performance unless your vet clears that path."
        ]
      },
      {
        heading: "Where hydrotherapy may fit",
        body: [
          "Underwater treadmill work can be useful when the therapist wants a walking pattern with adjustable support. Pool work may help fitness later if the dog moves well and remains comfortable. Some dogs use land physiotherapy first, then water work once pain is better controlled.",
          "Session design should respect flare-ups. A dog who is suddenly more lame needs veterinary review, not a tougher swim."
        ],
        bullets: [
          "Controlled weight bearing with water support",
          "Muscle work without pavement impact",
          "Gradual stamina building when walks are capped",
          "Confidence for dogs who have become hesitant to use a limb"
        ]
      },
      {
        heading: "Special care for young and post-operative dogs",
        body: [
          "Growing dogs with elbow dysplasia need plans that protect developing joints. Ask your vet what exercise volume is acceptable and whether certain impact activities should stay off the list even if the dog seems keen in water.",
          "After elbow surgery, wound healing and surgeon protocols decide the start date. Early sessions may be short and closely spotted. Do not book recreational swimming during restricted periods unless your veterinary team explicitly agrees."
        ]
      },
      {
        heading: "Home management that supports therapy",
        body: [
          "Keep your dog lean — extra weight increases load through every step. Use non-slip flooring, control ball games that involve sudden turns, and follow lead-walking advice rather than weekend catch-up hikes.",
          "Ramps can help some dogs avoid jumping into cars. Ask before starting home exercises; the wrong drill can irritate an already sensitive joint."
        ]
      },
      {
        heading: "What to ask the centre",
        body: [
          "Have you worked with elbow dysplasia or post-elbow surgery cases? Will you use pool, treadmill or both, and why? How do you monitor front-limb fatigue? What signs should make us pause between appointments? Can notes go to our vet?"
        ]
      }
    ],
    faqs: [
      {
        question: "Can hydrotherapy fix elbow dysplasia?",
        answer: "No. It cannot correct the underlying joint development problem. It may support comfort, muscle and controlled activity as part of a broader veterinary plan."
      },
      {
        question: "Is an underwater treadmill better than swimming for elbow dysplasia?",
        answer: "Often treadmill work is chosen when gait pattern and graded weight bearing matter. Swimming may suit later fitness for some dogs. A therapist should decide after assessment and veterinary input."
      },
      {
        question: "My young dog has elbow dysplasia — is water exercise safe?",
        answer: "It can be appropriate for some dogs, but growing joints need careful dosing. Speak to your vet before starting and avoid unstructured intensive swimming."
      },
      {
        question: "How will I know sessions are helping?",
        answer: "Useful signs include more even front-limb use, easier rising, better tolerance of agreed walk lengths and less compensatory stiffness — reviewed over weeks, not after a single visit."
      }
    ]
  },
  {
    slug: "dog-hydrotherapy-qualifications-uk",
    title: "Dog hydrotherapy qualifications in the UK: what owners should check",
    description: "How to ask about training, professional memberships and centre standards so you can book with more confidence — without getting lost in acronyms.",
    imageLabel: "Qualifications checklist",
    imageSrc: "/images/guide-choose-hydrotherapy-centre.jpg",
    readTime: "8 min read",
    category: "Choosing a centre",
    keyTakeaways: [
      "Ask who will handle your dog, what training they have completed, and whether the centre requires veterinary consent.",
      "Memberships and course certificates are useful signals, but calm handling, water hygiene and clear clinical reasoning matter day to day.",
      "Physiotherapists and hydrotherapists can have different scopes — know which service you are booking."
    ],
    body: [
      "UK owners comparing dog hydrotherapy centres quickly run into abbreviations, course names and membership badges. Those details can be useful, but they are only part of safe practice. What you need is a clear answer to three questions: who assesses my dog, how do they decide the plan, and how do they keep water work safe?",
      "There is no single public licence that every pool attendant must hold in the same way a vet is registered. That is why reputable centres lean on veterinary referral or consent, documented training, treatment notes and professional communities of practice. Your job as an owner is not to memorise every pathway — it is to ask precise questions and walk away from vague answers.",
      "This guide translates the checklist into plain language so you can shortlist centres on HyperDog Therapy and ring with confidence."
    ],
    sections: [
      {
        heading: "Start with role clarity",
        body: [
          "Ask whether your appointment is with a canine hydrotherapist, a veterinary physiotherapist, or another rehab professional, and what that means for assessment and hands-on techniques. Titles are not interchangeable.",
          "If your dog has a complex surgical or neurological history, ask whether the case is appropriate for that team or needs a different referral first."
        ]
      },
      {
        heading: "Training and continuing development",
        body: [
          "Good practitioners should be able to explain their hydrotherapy or physiotherapy training without sounding evasive. Ask what practical assessment they completed, whether they keep case notes, and how they stay current with rehab approaches.",
          "Courses and memberships evolve, so treat any badge as a conversation starter rather than a final verdict. Pair credentials with how carefully they listen to your dog's history."
        ],
        bullets: [
          "Who will be in the water or at the treadmill with my dog?",
          "What training did they complete for canine hydrotherapy or rehab?",
          "Do they require veterinary consent before treatment?",
          "How is progress recorded and shared?",
          "What happens if my dog becomes distressed or more lame?"
        ]
      },
      {
        heading: "Centre standards beyond personal certificates",
        body: [
          "Even a well-trained person needs a safe environment. Ask how often water quality is tested, how dogs enter and leave, what flotation and hoist options exist, how many dogs are treated at once, and what emergency procedures are in place.",
          "Cleanliness, calm scheduling and enough staff for your dog's size and anxiety level are part of professional care, not extras."
        ]
      },
      {
        heading: "Insurance, invoices and paperwork",
        body: [
          "If you hope to claim on pet insurance, ask whether the centre's invoices and practitioner details are typically accepted by insurers for your type of policy. Rules differ, so confirm with your insurer as well.",
          "Centres used to clinical work are usually comfortable providing referral forms, itemised bills and progress summaries for your vet."
        ]
      },
      {
        heading: "Red flags when discussing qualifications",
        body: [
          "Be cautious if nobody can say who will treat your dog, if veterinary input is dismissed for an injured or post-operative case, if there are no notes, or if marketing focuses only on fun without assessment.",
          "Confidence should sound specific: your dog's condition, likely session design, risks and review points — not slogans."
        ]
      },
      {
        heading: "How this helps you choose on our directory",
        body: [
          "Use listing details as a starting point, then phone with the checklist above. Two centres a similar distance apart can differ widely in clinical focus, fitness offerings and experience with nervous or large-breed dogs.",
          "For a wider buying guide, read how to choose a canine hydrotherapy centre alongside this qualifications overview."
        ]
      }
    ],
    faqs: [
      {
        question: "Does every UK dog hydrotherapy centre require the same qualification?",
        answer: "No. Pathways and memberships vary. Focus on veterinary consent processes, who assesses your dog, practical experience with your dog's condition and how safety is managed."
      },
      {
        question: "Is a veterinary physiotherapist the same as a hydrotherapist?",
        answer: "Not necessarily. Physiotherapists may offer broader rehab assessment and land-based techniques; hydrotherapists specialise in water-based therapeutic exercise. Some centres have both. Ask what your dog will actually receive."
      },
      {
        question: "Should I only book centres with a membership logo?",
        answer: "Logos can be helpful signals, but they are not a substitute for a good assessment conversation. Verify what the membership means and still ask about water hygiene, handling and case suitability."
      },
      {
        question: "What if staff are still training?",
        answer: "Trainees can be part of a safe team when supervised appropriately. Ask who is responsible for clinical decisions and whether a qualified person leads your dog's sessions."
      }
    ]
  },
  {
    slug: "luxating-patella-hydrotherapy-dogs",
    title: "Luxating patella in dogs: rehab and hydrotherapy guide",
    description: "What a slipping kneecap means for exercise, when water therapy may help after vet advice, and how to protect the knee at home.",
    imageLabel: "Patella luxation rehab",
    imageSrc: "/images/guide-cruciate-ligament-rehab.jpg",
    readTime: "8 min read",
    category: "Surgery recovery",
    keyTakeaways: [
      "A luxating patella means the kneecap slips out of its groove; severity and surgical decisions belong with your vet.",
      "Hydrotherapy or physiotherapy may support muscle and controlled gait for some dogs before or after surgery — timing matters.",
      "Avoid sudden twisting play and slippery floors while the knee is being managed."
    ],
    body: [
      "Luxating patella — often described as a slipping or popping kneecap — is especially familiar to owners of small breeds, though larger dogs can be affected too. You might see intermittent skipping on a hind leg, a brief hop, or reluctance to jump. Some dogs seem unbothered between episodes; others develop ongoing lameness or secondary joint problems.",
      "Rehabilitation and hydrotherapy enter the conversation when vets want to build quadriceps and hip muscle, improve controlled limb use, or support recovery after corrective surgery. Water work is not automatically indicated for every grade of luxation. Jumping into a busy pool at the wrong time can be unhelpful, particularly if the dog twists, fatigues or is not yet cleared for that level of activity.",
      "This guide helps you prepare for veterinary and therapist conversations, then compare suitable centres through HyperDog Therapy."
    ],
    sections: [
      {
        heading: "Why muscle support matters around a slipping kneecap",
        body: [
          "The patella sits in a groove at the end of the femur and glides as the stifle (knee) bends. When alignment or groove depth is poor, the kneecap can luxate. Strong, balanced supporting muscles will not redesign bone, but they can help some dogs move more efficiently and cope better with daily loads.",
          "That is why rehab plans often emphasise controlled strengthening rather than random exercise. The wrong kind of activity — frantic zoomies on laminate, repeated sofa jumping — can work against the plan."
        ]
      },
      {
        heading: "When hydrotherapy may be considered",
        body: [
          "Your vet may suggest water-based exercise as part of conservative management for selected cases, or as post-operative rehab once wounds are healed and protocols allow. Underwater treadmills are frequently chosen when therapists want a straight-line walking pattern with adjustable support.",
          "Pool swimming can be useful later for fitness in some dogs, but early rehab usually prioritises quality of movement over distance or splashy enthusiasm."
        ],
        bullets: [
          "Veterinary grading and imaging guide the overall plan",
          "Pain and swelling should be addressed before hard exercise",
          "Session length often starts short and builds with comfort",
          "Progress is measured in gait and function, not just attendance"
        ]
      },
      {
        heading: "After patella surgery",
        body: [
          "Surgical techniques and aftercare instructions vary. Follow the surgeon's confinement and lead-walking rules even if your dog feels brighter than expected. Feeling better is not the same as being healed.",
          "Ask the rehab team how they will coordinate with surgical timelines, when water entry is allowed, and which home exercises — if any — are appropriate each week."
        ]
      },
      {
        heading: "Home habits that protect the knee",
        body: [
          "Use rugs on slippery floors, block unplanned stair sprinting if advised, and lift small dogs into cars rather than letting them leap. Keep nails trimmed for grip. Maintain a healthy weight so every step carries less load.",
          "If your dog skips or holds up a leg after play, pause high-impact games and contact your vet for advice rather than booking an extra intense session to compensate."
        ]
      },
      {
        heading: "Questions for your first rehab call",
        body: [
          "Do you regularly see luxating patella cases, including post-operative dogs? Will you use treadmill, pool or land exercises first? What confinement rules should we keep at home? What signs mean we should stop and call the vet? Can you share progress notes?"
        ]
      }
    ],
    faqs: [
      {
        question: "Can hydrotherapy stop a patella from luxating?",
        answer: "No water programme can promise that. Some dogs improve functionally with muscle support and activity changes; others need surgery. Your vet should advise based on grade, symptoms and lifestyle."
      },
      {
        question: "Is swimming safe if my dog's kneecap slips?",
        answer: "Only with professional guidance. Poorly controlled swimming or slippery pool surrounds can be risky. Ask your vet and therapist before any recreational swim."
      },
      {
        question: "How soon after patella surgery can rehab start?",
        answer: "Timing depends on the procedure and your surgeon's protocol. Some controlled work begins early; water entry often waits until the surgical site is ready. Never guess from internet timelines alone."
      },
      {
        question: "Should I still walk my dog between hydrotherapy sessions?",
        answer: "Usually yes, within the limits your vet or therapist set. Short, controlled lead walks on sensible surfaces are different from free running. Confirm the plan for your dog's stage of recovery."
      }
    ]
  }
];

export const guideDisclaimer = vetDisclaimer;

export const guideSlugAliases: Record<string, string> = {
  "does-my-dog-need-hydrotherapy": "what-is-dog-hydrotherapy",
  "hydrotherapy-for-arthritis": "dog-hydrotherapy-for-arthritis",
  "post-surgery-rehab-guide": "dog-hydrotherapy-after-surgery",
  "how-to-choose-dog-hydrotherapy-centre": "how-to-choose-a-canine-hydrotherapy-centre",
  "senior-dog-mobility-guide": "senior-dog-mobility-support"
};

export function getGuide(slug: string) {
  const resolvedSlug = guideSlugAliases[slug] ?? slug;
  return guides.find((guide) => guide.slug === resolvedSlug);
}

export function getGuideCanonicalSlug(slug: string) {
  return guideSlugAliases[slug] ?? slug;
}
