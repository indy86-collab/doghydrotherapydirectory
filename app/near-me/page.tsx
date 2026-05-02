import type { Metadata } from "next";
import { centres } from "@/data/centres";
import { NearMeFinder } from "@/components/NearMeFinder";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo";

const faqs = [
  {
    question: "Does HyperDog Therapy store my location?",
    answer: "No. Your location is only used in your browser to calculate approximate distances to listed centres."
  },
  {
    question: "Can I search without sharing my location?",
    answer: "Yes. You can search by town, city, county, postcode, centre name or partial outward postcode."
  },
  {
    question: "Are distances exact travel distances?",
    answer: "No. Distances are calculated as straight-line mileage using listing coordinates, so journey distance and travel time may differ."
  }
];

export const metadata: Metadata = {
  title: "Find Dog Hydrotherapy Centres Near Me",
  description: "Use your current location or search manually to find nearby dog hydrotherapy, canine physiotherapy, rehabilitation and dog swimming centres.",
  alternates: {
    canonical: "/near-me"
  }
};

export default function NearMePage() {
  return (
    <main className="bg-mist">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildWebPageJsonLd({
              title: "Find Dog Hydrotherapy Centres Near Me",
              description: "Find nearby dog hydrotherapy, canine physiotherapy, rehabilitation and dog swimming centres.",
              path: "/near-me"
            }),
            buildFaqJsonLd(faqs)
          ])
        }}
      />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Near me</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-5xl">Find Dog Hydrotherapy Centres Near Me</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Use your current location to find nearby dog hydrotherapy, physiotherapy, rehabilitation and dog swimming centres.
          </p>
        </div>

        <NearMeFinder centres={centres} />

        <section className="mt-10 rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-black text-navy">Near me finder FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl bg-mist p-4 ring-1 ring-sky-100">
                <h3 className="font-black text-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
