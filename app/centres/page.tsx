import type { Metadata } from "next";
import { centres } from "@/data/centres";
import { CentresClient } from "@/components/CentresClient";
import { serviceOptions } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Find Dog Hydrotherapy, Physiotherapy & Rehab Centres",
  description: "Browse UK dog hydrotherapy, canine physiotherapy, rehabilitation, underwater treadmill and dog swimming centre listings with practical booking guidance.",
  alternates: {
    canonical: "/centres"
  }
};

type CentresPageProps = {
  searchParams?: Promise<{
    query?: string;
    service?: string;
    rating?: string;
    centreType?: string;
  }>;
};

function normaliseSearchParam(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function CentresPage({ searchParams }: CentresPageProps) {
  const params = searchParams ? await searchParams : {};
  const query = normaliseSearchParam(params.query);
  const requestedService = normaliseSearchParam(params.service);
  const requestedRating = normaliseSearchParam(params.rating);
  const centreType = normaliseSearchParam(params.centreType) || "All centre types";
  const service = serviceOptions.includes(requestedService) ? requestedService : "All services";
  const rating = ["4.0+", "4.5+"].includes(requestedRating) ? requestedRating : "Any rating";

  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Find a centre</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-5xl">Dog hydrotherapy and canine rehab centres</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Search UK and Ireland listings for dog hydrotherapy pools, canine physiotherapy clinics, rehabilitation centres, underwater treadmill services and dog swimming facilities. The directory is designed to help owners compare useful public information before contacting a provider directly.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Use the filters to narrow the list by location, service type, rating and centre category. A listing is not a recommendation or medical opinion: always speak with your vet before beginning hydrotherapy, physiotherapy, post-surgery rehabilitation or a new exercise plan. When you contact a centre, ask about referral requirements, therapist qualifications, insurance, water hygiene procedures and whether pool work or an underwater treadmill is more suitable for your dog&apos;s condition and confidence.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Centre information can change, so confirm prices, appointment availability, opening times and treatment suitability with the provider before travelling. Centre owners can request corrections through the contact page.
          </p>
        </div>
        <CentresClient centres={centres} initialQuery={query} initialService={service} initialRating={rating} initialCentreType={centreType} />

        <section className="mt-12 rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-black text-navy">Dog hydrotherapy directory FAQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Do I need a vet referral for dog hydrotherapy?", "Many UK centres require veterinary consent before treatment, especially for injury, arthritis, neurological conditions or post-surgery recovery. Ask the centre what paperwork they need before booking."],
              ["What is the difference between dog hydrotherapy and dog swimming?", "Hydrotherapy is usually a structured therapeutic session with a treatment goal, while dog swimming may be recreational fitness or confidence building. The right choice depends on your dog&apos;s health and your vet's advice."],
              ["How much does dog hydrotherapy cost?", "Prices vary by region, appointment length, facility type and whether an assessment is included. Ask about first-session fees, block bookings, cancellation terms and whether reports can be sent to your vet or insurer."],
              ["What should I ask before booking?", "Ask about qualifications, referral requirements, water testing, safety equipment, how nervous dogs are supported and whether the team recommends pool work, an underwater treadmill or physiotherapy."],
              ["Is hydrotherapy suitable for older dogs?", "It may help some older dogs with controlled movement and comfort, but suitability depends on health, pain levels, stamina and any heart, skin or breathing concerns. Speak with your vet first."]
            ].map(([question, answer]) => (
              <article key={question} className="rounded-2xl bg-mist p-5 ring-1 ring-sky-100">
                <h3 className="font-black text-navy">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{answer}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
