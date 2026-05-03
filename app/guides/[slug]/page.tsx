import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CheckCircle2, Clock, HelpCircle } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { GuideCard } from "@/components/GuideCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getGuide, getGuideCanonicalSlug, guideDisclaimer, guideSlugAliases, guides } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ownerPrepSections = [
  {
    heading: "How to use this guide",
    body: [
      "Start with your dog's current problem rather than a treatment name. A dog who is stiff after rest, recovering from surgery, gaining weight because walks are limited, or becoming less confident on slippery floors may need different support even if several options sound similar online. Write down what has changed, when it started, what your vet has already said and what you want your dog to be able to do more comfortably.",
      "Use the guide to build a shortlist of questions, not to self-diagnose. Hydrotherapy, physiotherapy, swimming and treadmill work can all be useful in the right context, but the safest plan depends on health history, pain levels, wounds, medication, behaviour around water and the provider's assessment. If a centre gives a clear explanation of what they can and cannot help with, that is usually a better sign than vague promises."
    ]
  },
  {
    heading: "What good providers should explain",
    body: [
      "A responsible provider should explain whether veterinary referral or consent is needed, who will assess your dog, what qualifications or professional memberships are relevant, how progress is recorded and how they adapt sessions for nervous, older or post-operative dogs. They should also be comfortable saying when a session should be delayed, shortened or referred back to a vet.",
      "Ask how water quality is tested, how dogs enter and leave the pool or treadmill, what safety equipment is available and how many dogs are treated at once. If your dog is anxious, reactive, heavy, weak, newly rescued or recovering from surgery, ask how the team handles those situations before you arrive."
    ]
  },
  {
    heading: "Questions to take to your first call",
    body: [
      "Before booking, ask whether the centre offers therapeutic hydrotherapy, fitness swimming, underwater treadmill work, physiotherapy or a combination. Ask how the first appointment is structured, whether they need vet notes, what you should bring, how long a session lasts and what signs would make them stop or change the plan.",
      "It is also sensible to ask about prices, cancellation terms, insurance paperwork, parking, accessibility and drying facilities. These details are practical, but they matter when you are managing a dog who is sore, tired, nervous or difficult to lift."
    ],
    bullets: [
      "Do you require vet referral or consent?",
      "Who assesses my dog and records progress?",
      "Is pool work, treadmill work or physiotherapy most relevant?",
      "How do you support nervous or older dogs?",
      "Can you communicate with my vet if needed?"
    ]
  },
  {
    heading: "Red flags to watch for",
    body: [
      "Be cautious if a provider guarantees recovery, dismisses the need for veterinary input, cannot explain their safety process, avoids questions about qualifications or encourages intense exercise for a dog who is painful or recently injured. Therapy should be measured and adaptable, not a one-size-fits-all workout.",
      "You should also pause if your dog becomes more lame, unusually tired, distressed, painful to touch or reluctant to move after a session. Some tiredness can happen after new activity, but worsening pain or function should be discussed with your vet or therapist promptly."
    ]
  }
];

export function generateStaticParams() {
  return [...guides.map((guide) => guide.slug), ...Object.keys(guideSlugAliases)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const canonicalSlug = getGuideCanonicalSlug(slug);
  const isAlias = canonicalSlug !== slug;
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${canonicalSlug}`
    },
    robots: isAlias ? { index: false, follow: true } : undefined,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      images: [guide.imageSrc]
    }
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const canonicalSlug = getGuideCanonicalSlug(slug);
  const relatedGuides = guides
    .filter((item) => item.slug !== guide.slug && item.category === guide.category)
    .concat(guides.filter((item) => item.slug !== guide.slug && item.category !== guide.category))
    .slice(0, 3);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: guide.imageSrc,
    mainEntityOfPage: `${getSiteUrl()}/guides/${canonicalSlug}`,
    publisher: {
      "@type": "Organization",
      name: "HyperDog Therapy"
    }
  };

  return (
    <main className="bg-mist">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <article className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <Link href="/guides" className="mb-5 inline-flex min-h-10 items-center gap-2 text-sm font-black text-ocean">
          <ArrowLeft size={16} /> Back to guides
        </Link>
        <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent sm:bg-gradient-to-r" />
            <div className="h-[26rem] sm:h-[28rem]">
            <div className="relative h-full">
              {guide.imageSrc ? (
                <Image src={guide.imageSrc} alt={guide.imageLabel} fill priority sizes="(max-width: 768px) 100vw, 1152px" className="object-cover" />
              ) : (
                <ImagePlaceholder label={guide.imageLabel} variant="hero" className="rounded-none" />
              )}
            </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-teal backdrop-blur">
                  {guide.category} | {guide.readTime}
                </p>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{guide.title}</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-50 sm:text-lg sm:leading-8">{guide.description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[17rem_1fr]">
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <section className="rounded-2xl bg-cyan-50 p-5 ring-1 ring-sky-100">
                <h2 className="flex items-center gap-2 text-lg font-black text-navy">
                  <CheckCircle2 size={20} className="text-leaf" /> Key takeaways
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {guide.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl bg-white p-5 ring-1 ring-sky-100">
                <h2 className="flex items-center gap-2 text-lg font-black text-navy">
                  <BookOpen size={19} className="text-ocean" /> In this guide
                </h2>
                <div className="mt-4 space-y-2">
                  {guide.sections.map((section) => (
                    <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="block text-sm font-bold leading-5 text-slate-600 hover:text-ocean">
                      {section.heading}
                    </a>
                  ))}
                  <a href="#faqs" className="block text-sm font-bold leading-5 text-slate-600 hover:text-ocean">
                    Frequently asked questions
                  </a>
                </div>
              </section>

              <section className="rounded-2xl bg-navy p-5 text-white">
                <p className="flex items-center gap-2 text-sm font-black">
                  <Clock size={17} /> {guide.readTime}
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/85">Best read before booking a centre or speaking to your vet.</p>
              </section>
            </aside>

            <div>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
              {guide.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Use this guide as a practical starting point, then compare suitable providers in the <Link href="/centres" className="font-black text-ocean">centre directory</Link>. A directory listing can help you shortlist local options, but the final choice should be based on your dog&apos;s health history, veterinary advice, the centre&apos;s assessment process and how clearly the team explains their approach.
              </p>
              <p>
                Before booking, write down your dog&apos;s diagnosis if known, current medication, recent surgery dates, exercise limits, behaviour around water and any worries you want to raise. This makes the first call more useful and helps the centre explain whether hydrotherapy, physiotherapy, swimming, underwater treadmill work or a different route may be appropriate to discuss with your vet.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              {guide.sections.map((section) => (
                <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className="scroll-mt-28">
                  <h2 className="text-2xl font-black tracking-tight text-navy">{section.heading}</h2>
                  <div className="mt-3 space-y-4 text-base leading-8 text-slate-700">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-xl bg-mist px-4 py-3 text-sm font-bold text-navy ring-1 ring-sky-100">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
              {ownerPrepSections.map((section) => (
                <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className="scroll-mt-28">
                  <h2 className="text-2xl font-black tracking-tight text-navy">{section.heading}</h2>
                  <div className="mt-3 space-y-4 text-base leading-8 text-slate-700">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-xl bg-mist px-4 py-3 text-sm font-bold text-navy ring-1 ring-sky-100">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-sky-100">
              <h2 className="text-2xl font-black tracking-tight text-navy">When to speak to your vet</h2>
              <div className="mt-3 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Speak with your vet before starting hydrotherapy, physiotherapy, rehabilitation or a new exercise programme, especially if your dog has pain, lameness, wounds, recent surgery, breathing issues, heart concerns, skin infections or a sudden change in mobility.
                </p>
                <p>
                  Contact a vet promptly if your dog seems unwell, is reluctant to stand, cries out, suddenly worsens after activity, or has an injury that has not been assessed. Therapy providers can support a plan, but they should not be used as a substitute for diagnosis or urgent veterinary care.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/centres" className="rounded-xl bg-leaf px-4 py-2 text-sm font-black text-white">Find centres</Link>
                <Link href="/faqs" className="rounded-xl border border-ocean px-4 py-2 text-sm font-black text-ocean">Browse FAQs</Link>
              </div>
            </section>

            <section className="mt-10 scroll-mt-28" id="faqs">
              <h2 className="flex items-center gap-2 text-2xl font-black tracking-tight text-navy">
                <HelpCircle className="text-teal" /> Frequently asked questions
              </h2>
              <div className="mt-4 space-y-3">
                {guide.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-white p-5 ring-1 ring-sky-100">
                    <h3 className="font-black text-navy">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-8 rounded-2xl bg-cyan-50 p-5 text-sm leading-6 text-navy">
              {guideDisclaimer}
            </div>
            </div>
          </div>
        </div>
      </article>
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-2xl font-black tracking-tight text-navy">Related guides</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {relatedGuides.map((item) => (
            <GuideCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </main>
  );
}
