import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, HeartPulse, MapPin, PawPrint, ShieldCheck, Waves } from "lucide-react";
import { centres } from "@/data/centres";
import { CtaBanner } from "@/components/CtaBanner";
import { getLocations, serviceOptions } from "@/lib/utils";
import { SITE_DOMAIN_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About HyperDog Therapy",
  description: "Learn about HyperDog Therapy, a UK directory for dog hydrotherapy, canine physiotherapy, rehabilitation centres and mobility support services.",
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
  const locationCount = getLocations().length;
  const centresWithWebsites = centres.filter((centre) => centre.website).length;
  const reviewedCentres = centres.filter((centre) => centre.rating && centre.reviewCount).length;

  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">About HyperDog Therapy</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-navy sm:text-5xl">
              Helping dog owners compare hydrotherapy and rehab support.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              HyperDog Therapy is a specialist directory for dog hydrotherapy, canine physiotherapy, rehabilitation centres, dog swimming pools,
              underwater treadmill services and mobility support. The public site is{" "}
              <strong className="font-black text-navy">{SITE_DOMAIN_LABEL}</strong> — one brand, one canonical domain for owners and search engines.
              It exists to make the first stage of finding care clearer, calmer and more practical for owners across the UK and Ireland.
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
              [`${locationCount}+`, "location pages"],
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

      <section className="mx-auto grid max-w-7xl gap-7 px-4 pb-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-cyan-50 text-ocean">
              <Waves size={28} />
            </span>
            <h2 className="text-2xl font-black text-navy">What the directory covers</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Listings are organised around the services owners are most likely to search for when their dog needs low-impact exercise, recovery support
            or ongoing mobility care.
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
              Important: directory information is provided for convenience only. Always consult your vet before starting hydrotherapy, physiotherapy,
              post-surgery rehabilitation or a new exercise programme.
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            If a listing appears outdated, use the contact page to send the page URL, the detail that should change and a source where possible.
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
                HyperDog Therapy is designed to help good centres become easier to discover. If your business offers canine hydrotherapy,
                physiotherapy, rehabilitation, swimming, underwater treadmill work or mobility services, you can submit your details for review.
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
