import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, HeartPulse, MapPin, PawPrint, ShieldCheck, Waves } from "lucide-react";
import { centres } from "@/data/centres";
import { guides } from "@/lib/guides";
import { CtaBanner } from "@/components/CtaBanner";
import { getLocations, serviceOptions } from "@/lib/utils";
import { SITE_BRAND_NAME, SITE_DOMAIN_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About HyperDog Therapy",
  description:
    "Who runs HyperDog Therapy, how UK dog hydrotherapy listings are sourced and updated, and how owners should use the directory alongside veterinary advice.",
  alternates: {
    canonical: "/about"
  }
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Clear, useful information",
    text: "Profiles bring together names, locations, service tags, ratings, contact details and website links so owners can compare centres quickly."
  },
  {
    icon: HeartPulse,
    title: "Built around dog welfare",
    text: "The directory helps owners find suitable support, but it always encourages veterinary advice before starting treatment or rehabilitation."
  },
  {
    icon: MapPin,
    title: "Location-first discovery",
    text: "Owners can browse by city, county or region, then filter by service type to find nearby centres that match their dog’s needs."
  },
  {
    icon: BookOpen,
    title: "Friendly owner education",
    text: "Guides explain common treatment paths, costs, first sessions, post-surgery rehab and questions to ask before booking."
  }
];

const ownerSteps = [
  "Search by town, city, county or postcode area.",
  "Filter by hydrotherapy, physiotherapy, rehab, swimming, treadmill or mobility services.",
  "Read ratings, review snippets and service tags to shortlist suitable centres.",
  "Contact the centre directly and speak with your vet before beginning treatment."
];

export default function AboutPage() {
  const locationCount = getLocations().filter((location) => location.count >= 2).length;
  const centresWithWebsites = centres.filter((centre) => centre.website).length;
  const reviewedCentres = centres.filter((centre) => centre.rating && centre.reviewCount).length;

  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">About HyperDog Therapy</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-navy sm:text-5xl">
              A practical UK directory for dog hydrotherapy and canine rehab.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              {SITE_BRAND_NAME} helps dog owners compare hydrotherapy pools, underwater treadmills, canine physiotherapy and
              rehabilitation services across the UK and Ireland. The public site is{" "}
              <strong className="font-black text-navy">{SITE_DOMAIN_LABEL}</strong> — one brand and one canonical domain for
              owners and search engines.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
              We built the directory because the first stage of finding care is often messy: owners search under many different
              names, listings are scattered, and it is hard to know what to ask before travelling. This site is meant to make
              that first shortlist clearer and calmer — not to replace veterinary advice or a centre&apos;s own assessment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/centres" className="inline-flex items-center gap-2 rounded-xl bg-leaf px-5 py-3 text-sm font-black text-white shadow-card">
                Find a centre <ArrowRight size={17} />
              </Link>
              <Link href="/guides" className="inline-flex items-center gap-2 rounded-xl border border-ocean px-5 py-3 text-sm font-black text-ocean">
                Read guides <BookOpen size={17} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-soft sm:grid-cols-2">
            {[
              [`${centres.length}+`, "directory listings"],
              [`${guides.length}+`, "owner guides"],
              [`${reviewedCentres}+`, "rated centres"],
              [`${centresWithWebsites}+`, "website links"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-mist p-5 ring-1 ring-sky-100">
                <p className="text-3xl font-black text-navy">{value}</p>
                <p className="mt-1 text-sm font-bold text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card sm:p-8">
          <h2 className="text-2xl font-black text-navy">Who we are and what this site is for</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
            <p>
              {SITE_BRAND_NAME} is an independently published online directory and owner-education resource. It is not a
              veterinary practice, clinic network, booking platform or treatment provider. We do not diagnose dogs, sell
              treatment packages, or take payment for appointments on behalf of centres.
            </p>
            <p>
              Our audience is mainly UK and Ireland dog owners researching hydrotherapy after a vet conversation about
              arthritis, post-surgery rehab, mobility decline, fitness swimming or confidence in water. Secondary readers
              include centre owners checking or updating their public listing details.
            </p>
            <p>
              Editorial pages — guides, FAQs, near-me advice and location explainers — are written to help owners prepare
              better questions. Listing pages summarise publicly available business details so you can shortlist and contact
              providers directly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
                <span className="grid h-13 w-13 place-items-center rounded-full bg-cyan-50 text-teal">
                  <Icon size={28} />
                </span>
                <h2 className="mt-4 text-lg font-black text-navy">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-2">
          <article className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
            <h2 className="text-2xl font-black text-navy">How listings are sourced</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
              <p>
                Centre profiles are assembled from public business information such as names, addresses, phone numbers,
                websites, service categories, map listings and review signals. We also accept centre-submitted details through
                the list-your-centre form and correction requests through the contact page.
              </p>
              <p>
                We focus on hydrotherapy, physiotherapy, rehabilitation, dog swimming and related mobility services. Off-topic
                businesses (for example boarding kennels, general dog trainers or rescue centres without therapy services) are
                removed when identified so the directory stays useful for owners researching treatment options.
              </p>
              <p>
                A listing is not an endorsement, inspection report or guarantee of clinical quality. Always confirm current
                services, referral rules, prices and suitability with the centre and your vet.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
            <h2 className="text-2xl font-black text-navy">How we update and review content</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
              <p>
                We periodically review service tags, websites and location coverage, and we prioritise corrections when owners
                or centres send evidence that a detail is wrong. Guides are refreshed when pricing norms, common owner
                questions or safety guidance need clearer wording.
              </p>
              <p>
                Thin location pages with fewer than two relevant listings are kept out of search indexes until there is enough
                real local data. That reduces doorway-style pages and keeps indexed city pages more useful.
              </p>
              <p>
                Editorial standards are summarised on our{" "}
                <Link href="/editorial-policy" className="font-bold text-ocean underline decoration-ocean/30 underline-offset-2">
                  editorial policy
                </Link>{" "}
                page. Medical and legal boundaries are covered in the{" "}
                <Link href="/disclaimer" className="font-bold text-ocean underline decoration-ocean/30 underline-offset-2">
                  disclaimer
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-4 pb-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-cyan-50 text-ocean">
              <Waves size={28} />
            </span>
            <h2 className="text-2xl font-black text-navy">What the directory covers</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Listings are organised around the services owners are most likely to search for when their dog needs low-impact
            exercise, recovery support or ongoing mobility care. There {locationCount >= 2 ? `are currently ${locationCount}+ indexable local areas` : "are local area pages"} with enough listings to be useful for browsing.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {serviceOptions.map((service) => (
              <Link key={service} href={`/centres?service=${encodeURIComponent(service)}`} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-black text-ocean ring-1 ring-sky-100">
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <h2 className="text-2xl font-black text-navy">How dog owners should use it</h2>
          <div className="mt-5 space-y-4">
            {ownerSteps.map((step) => (
              <div key={step} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-leaf" size={20} />
                <p className="text-sm leading-6 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-mist p-5 ring-1 ring-sky-100">
            <p className="text-sm font-bold leading-6 text-navy">
              Important: directory information is provided for convenience only. Always consult your vet before starting
              hydrotherapy, physiotherapy, post-surgery rehabilitation or a new exercise programme.
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            If a listing appears outdated, use the{" "}
            <Link href="/contact" className="font-bold text-ocean underline decoration-ocean/30 underline-offset-2">
              contact page
            </Link>{" "}
            with the page URL, the detail that should change and a source where possible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">For centres</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-navy">Own or manage a canine therapy centre?</h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-slate-700">
                {SITE_BRAND_NAME} is designed to help genuine therapy centres become easier to discover. If your business offers
                canine hydrotherapy, physiotherapy, rehabilitation, swimming, underwater treadmill work or mobility services,
                you can submit your details for review. Please include accurate service tags so local pages stay trustworthy.
              </p>
              <Link href="/list-your-centre" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-leaf px-5 py-3 text-sm font-black text-white shadow-card">
                List your centre <PawPrint size={17} fill="currentColor" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
