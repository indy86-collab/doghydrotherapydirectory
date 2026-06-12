import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, LocateFixed, MapPin, PawPrint, ShieldCheck } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { CentreCard } from "@/components/CentreCard";
import { GuideCard } from "@/components/GuideCard";
import { LocationCard } from "@/components/LocationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { centres } from "@/data/centres";
import { guides } from "@/lib/guides";
import { getLocationImage } from "@/lib/location-images";
import { isDisplaySafeReview } from "@/lib/review-safety";
import { getFeaturedCentres, getLocations } from "@/lib/utils";

const popularSearches = ["Hydrotherapy near me", "Physiotherapy", "Underwater treadmill", "Rehab centres"];

function buildTrustItems(centreCount: number) {
  const countLabel = centreCount >= 100 ? `${centreCount}+` : `${centreCount}`;
  return [
  { icon: MapPin, title: `${countLabel} listings`, text: "Across the UK and Ireland" },
  { icon: ShieldCheck, title: "Public listing details", text: "Confirm details with each centre before booking" },
  { icon: PawPrint, title: "Hydrotherapy, physio & rehab", text: "Compare services in one practical directory" },
  { icon: BookOpen, title: "Owner-friendly guides", text: "Plain-English questions for your first call" }
  ];
}

const services = [
  { title: "Dog Hydrotherapy", icon: "waves", label: "Dog hydrotherapy", imageSrc: "/images/service-dog-hydrotherapy.jpg", description: "Low-impact water-based exercise for vet-guided support plans." },
  { title: "Canine Physiotherapy", icon: "physio", label: "Canine physiotherapy", imageSrc: "/images/service-canine-physiotherapy.jpg", description: "Assessment-led movement support to discuss with your vet." },
  { title: "Rehabilitation Centres", icon: "rehab", label: "Rehab centre", imageSrc: "/images/service-rehabilitation-centre.jpg", description: "Structured support options for mobility and post-surgery plans." },
  { title: "Dog Swimming Pools", icon: "pool", label: "Dog swimming pool", imageSrc: "/images/service-dog-swimming-pool.jpg", description: "Private warm water pools for exercise and fitness." },
  { title: "Underwater Treadmill", icon: "treadmill", label: "Underwater treadmill", imageSrc: "/images/service-underwater-treadmill.jpg", description: "Controlled exercise to build strength and improve conditioning." },
  { title: "Senior Dog Mobility", icon: "mobility", label: "Senior dog mobility", imageSrc: "/images/service-senior-dog-mobility.jpg", description: "Support for ageing dogs to keep them active and comfortable." }
] as const;

function getCustomerComments(limit = 3) {
  function snippet(text: string) {
    const compact = text.replace(/\s+/g, " ").trim();
    if (compact.length <= 260) return compact;
    return `${compact.slice(0, 257).trim()}...`;
  }

  return centres
    .flatMap((centre) =>
      centre.reviews.filter((review) => isDisplaySafeReview(review.text)).map((review) => ({
        quote: snippet(review.text),
        name: review.authorName,
        centreName: centre.name,
        location: centre.city,
        rating: review.rating ?? centre.rating ?? 5
      }))
    )
    .filter((review) => review.rating >= 5 && review.quote.length >= 80)
    .sort((a, b) => {
      const scoreA = (a.rating ?? 5) * 1000 + a.quote.length;
      const scoreB = (b.rating ?? 5) * 1000 + b.quote.length;
      return scoreB - scoreA || a.centreName.localeCompare(b.centreName);
    })
    .slice(0, limit);
}

export default function HomePage() {
  const trustItems = buildTrustItems(centres.length);
  const featured = getFeaturedCentres();
  const locations = [...getLocations()]
    .sort((a, b) => {
      const countDiff = (b.count ?? 0) - (a.count ?? 0);
      return countDiff || a.name.localeCompare(b.name);
    })
    .slice(0, 7);
  const customerComments = getCustomerComments();

  return (
    <main>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-hydrotherapy.jpg"
            alt="Dog hydrotherapy session with a therapist"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/5" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/25" />
        </div>
        <div className="pointer-events-none absolute -bottom-16 left-0 h-32 w-full rounded-[100%] bg-white" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:min-h-[34rem] lg:grid-cols-[0.82fr_1fr] lg:px-8 lg:py-20">
          <div className="z-10">
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Dog Hydrotherapy & Canine Rehab <span className="block text-teal">Near You</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-cyan-50">
              A practical directory for hydrotherapy, physiotherapy and rehabilitation centres across the UK and Ireland.
            </p>

            <div className="relative mt-7 w-full max-w-5xl">
              <form action="/centres" className="relative rounded-2xl bg-white/95 p-3 shadow-soft ring-1 ring-white/40 backdrop-blur sm:rounded-3xl sm:p-4">
              <div className="grid gap-3 lg:grid-cols-[minmax(18rem,1.35fr)_minmax(15rem,0.85fr)_13.5rem]">
                <label className="relative">
                  <span className="absolute left-14 top-3 text-xs font-black text-slate-600">Location</span>
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-leaf" size={22} fill="currentColor" />
                  <input name="query" className="h-16 w-full min-w-0 rounded-xl border border-sky-100 bg-white pb-2 pl-14 pr-4 pt-7 text-sm text-navy shadow-sm outline-none focus:border-ocean" placeholder="e.g. London, Manchester" />
                </label>
                <label className="relative">
                  <span className="absolute left-14 top-3 text-xs font-black text-slate-600">Service type</span>
                  <PawPrint className="absolute left-4 top-1/2 -translate-y-1/2 text-navy" size={21} fill="currentColor" />
                  <select name="service" className="h-16 w-full min-w-0 rounded-xl border border-sky-100 bg-white pb-2 pl-14 pr-4 pt-7 text-sm text-navy shadow-sm outline-none focus:border-ocean">
                    <option value="All services">All services</option>
                    <option>Hydrotherapy</option>
                    <option>Physiotherapy</option>
                    <option>Rehab</option>
                    <option>Swimming Pool</option>
                    <option>Treadmill</option>
                    <option>Mobility</option>
                  </select>
                </label>
                <button type="submit" className="inline-flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-leaf px-6 text-sm font-black text-white shadow-card transition hover:bg-leaf/90">
                  Search Centres <ArrowRight size={18} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs font-bold sm:gap-3">
                <Link href="/near-me" className="inline-flex items-center gap-1.5 rounded-full bg-leaf px-3 py-1.5 text-white ring-1 ring-leaf/20 hover:bg-leaf/90">
                  <LocateFixed size={14} />
                  Find centres near me
                </Link>
                <span className="mr-1 shrink-0 text-slate-500">Useful searches:</span>
                {popularSearches.map((search) => (
                  <Link key={search} href={`/centres?query=${encodeURIComponent(search.replace(" near me", ""))}`} className="rounded-full bg-cyan-50 px-3 py-1.5 text-ocean ring-1 ring-cyan-100 hover:text-navy">
                    {search}
                  </Link>
                ))}
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:-mt-10 lg:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-sky-100 bg-white/95 p-4 shadow-soft backdrop-blur sm:gap-4 sm:p-6 lg:grid-cols-4 lg:rounded-[2rem]">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-teal shadow-card ring-1 ring-sky-100 sm:h-16 sm:w-16">
                  <Icon size={28} className="sm:h-[34px] sm:w-[34px]" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-5 text-navy sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading title="Explore Services" centered />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Owner guide</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-navy">What is dog hydrotherapy?</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Dog hydrotherapy uses warm water, buoyancy and controlled movement to help dogs exercise with less strain through sore joints or recovering tissues. Sessions may take place in a specialist pool or on an underwater treadmill, depending on the dog&apos;s condition, confidence and the treatment goal agreed with the owner, vet and therapist.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            It is commonly used as part of a wider plan for mobility support, post-surgery rehabilitation, strength building and safe fitness. It should not replace veterinary care, and responsible centres will explain when referral or consent is needed.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/guides/what-is-dog-hydrotherapy" className="rounded-xl bg-leaf px-4 py-2 text-sm font-black text-white">Read the guide</Link>
            <Link href="/centres?service=Hydrotherapy" className="rounded-xl border border-ocean px-4 py-2 text-sm font-black text-ocean">Find hydrotherapy centres</Link>
          </div>
        </div>

        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <h2 className="text-3xl font-black tracking-tight text-navy">When dog owners commonly look for canine therapy</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Owners often start researching canine therapy when walks become harder, a vet has diagnosed an orthopaedic issue, or a dog needs a safer way to rebuild strength. The right option depends on veterinary advice and an individual assessment.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              "Arthritis and stiffness",
              "Post-surgery recovery",
              "Cruciate ligament recovery",
              "Hip or elbow dysplasia",
              "Weight management",
              "Senior dog mobility",
              "Confidence in water"
            ].map((item) => (
              <Link key={item} href="/guides" className="rounded-xl bg-mist px-4 py-3 text-sm font-bold text-navy ring-1 ring-sky-100">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white p-7 shadow-card">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Before booking</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-navy">How to choose a dog hydrotherapy centre</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                A good first conversation should feel calm, specific and safety-focused. Use the directory to shortlist centres, then contact them directly to check whether their facilities and approach match your dog&apos;s needs.
              </p>
              <Link href="/guides/how-to-choose-a-canine-hydrotherapy-centre" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                Read choosing checklist <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Ask whether a vet referral is required.",
                "Check qualifications and association membership.",
                "Ask about pool vs underwater treadmill options.",
                "Check water hygiene and safety processes.",
                "Read reviews and look for owner feedback.",
                "Confirm insurance, payment and cancellation terms."
              ].map((item) => (
                <div key={item} className="rounded-xl bg-cyan-50 p-4 text-sm font-bold leading-6 text-navy ring-1 ring-sky-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Centres" href="/centres" linkLabel="View all centres" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((centre) => (
            <CentreCard key={centre.id} centre={centre} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading title="Browse by location" href="/locations" linkLabel="View all locations" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
          {locations.map((location) => (
            <LocationCard key={location.name} {...location} imageSrc={getLocationImage(location.slug)} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading title="Guides & Advice" href="/guides" linkLabel="View all guides" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {guides.slice(0, 4).map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading title="Loved by dog owners" centered />
        <div className="grid gap-5 md:grid-cols-3">
          {customerComments.map((comment) => (
            <article key={`${comment.centreName}-${comment.name}`} className="flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
              <div className="text-5xl font-black leading-none text-teal">“</div>
              <p className="mt-1 line-clamp-6 min-h-[9rem] text-sm leading-6 text-slate-700">{comment.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cyan-50 text-lg font-black text-ocean ring-1 ring-sky-100">
                  {comment.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-navy">{comment.name}</p>
                  <p className="text-sm text-slate-600">{comment.centreName}</p>
                  <p className="text-xs font-bold text-slate-500">{comment.location}</p>
                  <p className="mt-1 text-xs font-black text-amber-400">★★★★★</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
