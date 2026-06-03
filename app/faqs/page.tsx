import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Dog Hydrotherapy FAQs",
  description: "Common questions about dog hydrotherapy, canine physiotherapy, rehabilitation, costs and first appointments.",
  alternates: {
    canonical: "/faqs"
  }
};

export default function FaqsPage() {
  const faqs = guides.flatMap((guide) =>
    guide.faqs.map((faq) => ({
      ...faq,
      guideTitle: guide.title,
      guideSlug: guide.slug
    }))
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main className="bg-mist">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">FAQs</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-navy sm:text-5xl">Dog hydrotherapy FAQs</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Quick answers to common questions about canine hydrotherapy, physiotherapy, rehab, costs and getting started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={`${faq.guideSlug}-${faq.question}`} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-card">
              <h2 className="text-lg font-black text-navy">{faq.question}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
              <Link href={`/guides/${faq.guideSlug}#faqs`} className="mt-4 inline-flex items-center gap-1 text-sm font-black text-ocean">
                Read related guide <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
