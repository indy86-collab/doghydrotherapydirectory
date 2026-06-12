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
      "Dog hydrotherapy uses warm water, buoyancy and controlled movement to help dogs exercise with less load through sore joints or recovering tissues. It is often used alongside veterinary treatment, canine physiotherapy and home exercise plans.",
      "It is not only for dogs who love swimming. Many centres use life jackets, ramps, hoists, underwater treadmills and calm handling to support nervous, older or post-operative dogs."
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
    description: "UK price ranges, what affects session fees, insurance paperwork, and questions to ask before booking a course of hydrotherapy.",
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
      "Dog hydrotherapy prices vary across the UK and Ireland. A first appointment may cost more than follow-up sessions because it includes assessment, history taking and planning.",
      "The cheapest option is not always best. For rehabilitation, quality of assessment, safety, water hygiene, handling and communication are more important than price alone."
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
    description: "Compare hydrotherapy centres by referral rules, qualifications, facilities, safety, reviews and cost — before you book.",
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
      "Choosing a dog hydrotherapy centre is about trust. You are placing your dog in a specialist environment where handling, water quality and clinical judgement all matter.",
      "Use the checklist below when comparing centres near you."
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
    imageSrc: "/images/guide-senior-dog-mobility.jpg",
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
