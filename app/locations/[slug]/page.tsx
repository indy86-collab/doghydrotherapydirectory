import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CentresClient } from "@/components/CentresClient";
import { getLocationImage } from "@/lib/location-images";
import { getLocationIntroCopy } from "@/lib/local-page-copy";
import { getCentresByLocation, getLocations, titleCase } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLocations().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = titleCase(slug);
  const count = getCentresByLocation(slug).length;
  return {
    title: `Dog Hydrotherapy in ${name}`,
    description: `Find dog hydrotherapy, canine physiotherapy, dog swimming and rehab centres in ${name}, with owner-focused booking guidance and local FAQs.`,
    alternates: {
      canonical: `/locations/${slug}`
    },
    robots: count < 2 ? { index: false, follow: true } : undefined
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const known = getLocations().some((location) => location.slug === slug);
  if (!known) notFound();

  const name = titleCase(slug);
  const locationCentres = getCentresByLocation(slug);
  const imageSrc = getLocationImage(slug);
  const nearbyLocations = getLocations()
    .filter((location) => location.slug !== slug && location.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
  const locationIntro = getLocationIntroCopy(slug, name);

  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="relative mb-8 overflow-hidden rounded-2xl bg-navy p-5 text-white shadow-soft sm:p-8">
          <Image src={imageSrc} alt={`${name} location`} fill priority sizes="(max-width: 768px) 100vw, 1152px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-ocean/78 to-teal/35" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">Browse by location</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Dog therapy centres in {name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-50 sm:text-lg sm:leading-8">
              Explore hydrotherapy, physiotherapy, swimming and rehabilitation options near {name}.
            </p>
          </div>
        </div>
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-7">
            <h2 className="text-2xl font-black text-navy">Canine therapy services around {name}</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
              <p>{locationIntro}</p>
              <p>
                This location page helps dog owners compare public listings for hydrotherapy, physiotherapy, rehabilitation, underwater treadmill services and dog swimming around {name}. Use it as a starting point for research, then contact each centre directly to confirm services, referral requirements, appointment availability and suitability for your dog.
              </p>
              <p>
                If your dog has arthritis, stiffness, a cruciate injury, hip or elbow dysplasia, recent surgery, weight management needs or senior mobility concerns, speak with your vet before booking. The right service depends on diagnosis, pain level, confidence in water and the therapist&apos;s assessment.
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-7">
            <h2 className="text-2xl font-black text-navy">Useful local checks</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {["Ask whether a vet referral is needed before the first appointment.", "Check parking, access and travel time if your dog has mobility issues.", "Confirm whether the centre offers pool sessions, treadmill sessions or physiotherapy.", "Ask how nervous dogs and first-time swimmers are introduced to the water."].map((item) => (
                <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <CentresClient centres={locationCentres} title={`${name} centres`} />

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-black text-navy">Nearby areas</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearbyLocations.map((location) => (
                <Link key={location.slug} href={`/locations/${location.slug}`} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-black text-ocean ring-1 ring-sky-100">
                  {location.name} ({location.count})
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-black text-navy">{name} dog therapy FAQs</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["How do I choose a centre near me?", "Compare referral requirements, qualifications, facility type, water hygiene, reviews and how clearly the team explains suitability."],
                ["Is dog swimming the same as hydrotherapy?", "Not always. Hydrotherapy is usually therapeutic and goal-led, while dog swimming may be recreational or fitness-focused."],
                ["Should I travel further for specialist rehab?", "Sometimes a specialist facility is worth a longer journey, especially after surgery or for complex mobility issues. Ask your vet for guidance."],
                ["Where can I learn more?", "Read the guides on hydrotherapy, arthritis, surgery recovery, underwater treadmills and choosing a centre."]
              ].map(([question, answer]) => (
                <article key={question} className="rounded-xl bg-mist p-4 ring-1 ring-sky-100">
                  <h3 className="font-black text-navy">{question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/guides/how-to-choose-a-canine-hydrotherapy-centre" className="rounded-xl bg-leaf px-4 py-2 text-sm font-black text-white">Choosing guide</Link>
              <Link href="/guides/what-is-dog-hydrotherapy" className="rounded-xl border border-ocean px-4 py-2 text-sm font-black text-ocean">Hydrotherapy basics</Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
