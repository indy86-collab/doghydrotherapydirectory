import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides & Advice",
  description: "Detailed dog hydrotherapy, canine physiotherapy, rehabilitation, dog swimming and mobility guides for UK dog owners.",
  alternates: {
    canonical: "/guides"
  }
};

export default function GuidesPage() {
  const featured = guides[0];
  const rest = guides.slice(1);

  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Guides & advice</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-5xl">Friendly guidance for dog owners</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Clear, practical introductions to hydrotherapy, physiotherapy, rehab, mobility conditions, treatment choices and first appointments.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            These guides are written for owners who want to ask better questions before booking a centre. They explain common treatment terms, when veterinary referral matters, how pool sessions differ from underwater treadmill work, what costs can include and how to judge whether a provider is a sensible fit for your dog&apos;s needs.
          </p>
        </div>

        <div className="mb-8 grid gap-3 rounded-2xl border border-sky-100 bg-white p-5 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["What is hydrotherapy?", "/guides/what-is-dog-hydrotherapy"],
            ["Arthritis support", "/guides/dog-hydrotherapy-for-arthritis"],
            ["After surgery", "/guides/dog-hydrotherapy-after-surgery"],
            ["Choosing a centre", "/guides/how-to-choose-a-canine-hydrotherapy-centre"]
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-xl bg-cyan-50 px-4 py-3 text-sm font-black text-ocean ring-1 ring-sky-100">
              {label}
            </Link>
          ))}
        </div>

        <Link
          href={`/guides/${featured.slug}`}
          className="mb-8 grid overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-soft lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="relative min-h-56 bg-sky-100 sm:min-h-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.imageSrc} alt={featured.imageLabel} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal">
              Featured guide | {featured.readTime}
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy sm:text-3xl">{featured.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{featured.description}</p>
            <ul className="mt-5 space-y-2">
              {featured.keyTakeaways.slice(0, 3).map((takeaway) => (
                <li key={takeaway} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                  {takeaway}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex rounded-xl bg-leaf px-5 py-3 text-sm font-black text-white">Read guide</span>
          </div>
        </Link>

        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>
      </section>
    </main>
  );
}
