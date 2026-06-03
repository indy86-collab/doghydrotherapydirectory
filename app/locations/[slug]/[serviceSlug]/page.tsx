import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CentreCard } from "@/components/CentreCard";
import {
  getCentresForLocalService,
  getLocalServiceBySlug,
  getNearbyRelatedLocations,
  getValidLocalServicePages
} from "@/lib/centres";
import { getLocationIntroCopy } from "@/lib/local-page-copy";
import { buildBreadcrumbJsonLd, buildCentreItemListJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { getCentresByLocation, getLocations, titleCase } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string; serviceSlug: string }>;
};

function getPage(locationSlug: string, serviceSlug: string) {
  return getValidLocalServicePages().find((page) => page.locationSlug === locationSlug && page.serviceSlug === serviceSlug);
}

function getKnownLocationName(locationSlug: string) {
  return getLocations().find((location) => location.slug === locationSlug)?.name;
}

function getServiceSpecificCopy(serviceSlug: string, serviceLabel: string) {
  if (serviceSlug === "dog-hydrotherapy") {
    return `Dog hydrotherapy pages list centres whose data explicitly includes hydrotherapy or underwater treadmill services. Sessions may be used as part of a vet-approved plan for controlled movement, fitness, confidence or rehabilitation, depending on the dog's condition and assessment.`;
  }

  if (serviceSlug === "canine-physiotherapy") {
    return `Canine physiotherapy pages list centres whose data explicitly includes physiotherapy services. Treatment may involve assessment, movement work, hands-on techniques and home exercise guidance, but suitability should be confirmed by the provider and your vet.`;
  }

  if (serviceSlug === "dog-rehabilitation") {
    return `Dog rehabilitation pages list centres whose data explicitly includes rehabilitation services. Rehab needs vary widely after surgery, injury or mobility changes, so ask how the centre plans, reviews and communicates progress.`;
  }

  return `${serviceLabel} pages list centres whose data explicitly includes dog swimming pool services. Check whether the session is recreational swimming, fitness work, confidence building or part of a therapeutic plan.`;
}

export function generateStaticParams() {
  return getValidLocalServicePages().map((page) => ({
    slug: page.locationSlug,
    serviceSlug: page.serviceSlug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, serviceSlug } = await params;
  const service = getLocalServiceBySlug(serviceSlug);
  const page = getPage(slug, serviceSlug);
  const locationName = page?.locationName ?? getKnownLocationName(slug);

  if (!service || !locationName) {
    return {
      title: "Local dog therapy services",
      robots: { index: false, follow: true }
    };
  }

  return {
    title: `${service.titlePrefix} in ${locationName}`,
    description: `Find ${service.label} services in ${locationName}, compare relevant centres and read practical questions to ask before booking.`,
    alternates: {
      canonical: `/locations/${slug}/${serviceSlug}`
    },
    robots: page ? undefined : { index: false, follow: true }
  };
}

export default async function LocalServicePage({ params }: PageProps) {
  const { slug, serviceSlug } = await params;
  const page = getPage(slug, serviceSlug);
  const service = getLocalServiceBySlug(serviceSlug);
  const knownLocationName = getKnownLocationName(slug);

  if (!service || !knownLocationName) notFound();

  const locationName = page?.locationName || knownLocationName || titleCase(slug);
  const centreList = getCentresForLocalService(slug, serviceSlug);
  const isIndexable = Boolean(page);
  const broaderLocationCentres = isIndexable || centreList.length ? centreList : getCentresByLocation(slug).slice(0, 8);

  const nearbyLocations = getNearbyRelatedLocations(slug, serviceSlug);
  const path = `/locations/${slug}/${serviceSlug}`;
  const locationIntro = getLocationIntroCopy(slug, locationName);
  const faqs = [
    {
      question: `How do I choose ${service.label} in ${locationName}?`,
      answer: "Compare referral requirements, qualifications, facilities, travel time, reviews, water hygiene and how clearly the centre explains suitability for your dog."
    },
    {
      question: `Do I need a vet referral for ${service.label}?`,
      answer: "Many centres require veterinary referral or consent for therapeutic treatment, especially after surgery, injury or when a dog has pain or a diagnosed condition."
    },
    {
      question: `What should I ask a ${locationName} centre before booking?`,
      answer: "Ask about assessment, therapist qualifications, session type, prices, cancellation terms, insurance paperwork and how progress will be monitored."
    }
  ];

  return (
    <main className="bg-mist">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: locationName, path: `/locations/${slug}` },
              { name: service.titlePrefix, path }
            ]),
            buildFaqJsonLd(faqs),
            ...(centreList.length ? [buildCentreItemListJsonLd(centreList, path)] : [])
          ])
        }}
      />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Local service guide</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-5xl">
            {service.titlePrefix} in {locationName}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Compare listed {service.label} providers in {locationName}, then contact centres directly to confirm services, referral requirements, availability and suitability for your dog.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <article className="rounded-2xl border border-sky-100 bg-white p-6 text-base leading-8 text-slate-700 shadow-card sm:p-8">
            <h2 className="text-2xl font-black text-navy">{service.titlePrefix} options around {locationName}</h2>
            <p className="mt-4">{locationIntro}</p>
            <p className="mt-4">
              This page is built from real centre listing data rather than empty keyword pages. Indexable local service pages are included only where HyperDog Therapy has enough relevant listings to make the page useful. Use it to compare local providers, understand the kind of questions to ask, and decide whether a nearby centre or a specialist service slightly further away is the better fit.
            </p>
            <p className="mt-4">
              {getServiceSpecificCopy(serviceSlug, service.label)}
            </p>
            <p className="mt-4">
              The {locationName} listings below are selected from centre city, region, postcode and service-tag data. That keeps local pages grounded in the directory data and avoids claiming that a centre offers a service just because a keyword appears somewhere in its address or reviews. Before travelling, confirm the appointment type, referral requirements and current availability directly with the provider.
            </p>
            <p className="mt-4">
              In {locationName}, travel time can be part of the decision. Dogs with pain, anxiety or recent surgery may cope better with shorter journeys, but the nearest listing is not automatically the safest choice. Check therapist qualifications, referral rules, insurance, handling approach, water hygiene and whether progress notes can be shared with your vet. If your dog has a diagnosed condition, always ask your vet what type of activity is appropriate before booking.
            </p>
          </article>

          <aside className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-2xl font-black text-navy">Before you book</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {[
                "Ask whether veterinary referral or consent is required.",
                "Confirm the centre offers the service your dog needs.",
                "Check parking and access if your dog has mobility issues.",
                "Ask how nervous, senior or post-operative dogs are supported.",
                "Confirm prices, appointment length and cancellation terms."
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href={service.guideHref} className="rounded-xl bg-leaf px-4 py-2 text-sm font-black text-white">
                Read service guide
              </Link>
              <Link href="/near-me" className="rounded-xl border border-ocean px-4 py-2 text-sm font-black text-ocean">
                Use near me finder
              </Link>
            </div>
          </aside>
        </div>

        {!isIndexable ? (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-6 text-amber-950 shadow-card">
            HyperDog Therapy currently has fewer than two clearly relevant {service.label} listings for {locationName}. This broader local page is available for users, but it is marked noindex and is excluded from the sitemap until there is enough listing data.
          </div>
        ) : null}

        <section className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-black text-navy">
              {isIndexable ? `Relevant centres in ${locationName}` : `Listed centres around ${locationName}`}
            </h2>
            <p className="text-sm font-bold text-slate-600">{broaderLocationCentres.length} listings</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {broaderLocationCentres.map((centre) => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-black text-navy">Nearby related locations</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearbyLocations.length ? (
                nearbyLocations.map((nearby) => (
                  <Link
                    key={`${nearby.locationSlug}-${nearby.serviceSlug}`}
                    href={`/locations/${nearby.locationSlug}/${nearby.serviceSlug}`}
                    className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-black text-ocean ring-1 ring-sky-100"
                  >
                    {nearby.locationName} ({nearby.count})
                  </Link>
                ))
              ) : (
                <p className="text-sm leading-6 text-slate-700">Browse all centre listings if you are able to travel further.</p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-black text-navy">{service.titlePrefix} in {locationName} FAQs</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl bg-mist p-4 ring-1 ring-sky-100">
                  <h3 className="font-black text-navy">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/guides/how-to-choose-a-canine-hydrotherapy-centre" className="inline-flex items-center gap-2 text-sm font-black text-ocean">
                Choosing checklist <ArrowRight size={16} />
              </Link>
              <Link href="/guides/how-much-does-dog-hydrotherapy-cost" className="inline-flex items-center gap-2 text-sm font-black text-ocean">
                Cost guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <p className="mt-8 rounded-xl bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-950 ring-1 ring-amber-200">
          This page is for general information only and does not replace advice from your vet.
        </p>
      </section>
    </main>
  );
}
