import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MapPin, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { centres } from "@/data/centres";
import { CentreCard } from "@/components/CentreCard";
import { CtaBanner } from "@/components/CtaBanner";
import { GuideCard } from "@/components/GuideCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { guides } from "@/lib/guides";
import { isDisplaySafeReview } from "@/lib/review-safety";
import { buildLocalBusinessJsonLd, formatRating, getCentreBySlug, getServiceTags, locationLabel } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function ReviewText({ text }: { text: string }) {
  const trimmed = text.trim();
  if (trimmed.length <= 520) {
    return <p className="mt-3 text-sm leading-6 text-slate-700">{trimmed}</p>;
  }

  return (
    <div className="mt-3 text-sm leading-6 text-slate-700">
      <p>{trimmed.slice(0, 520).trim()}...</p>
      <details className="mt-2">
        <summary className="cursor-pointer text-sm font-black text-ocean">Read full review</summary>
        <p className="mt-2 whitespace-pre-line">{trimmed}</p>
      </details>
    </div>
  );
}

function CentreReviews({
  centre
}: {
  centre: NonNullable<ReturnType<typeof getCentreBySlug>>;
}) {
  const displayReviews = centre.reviews.filter((review) => isDisplaySafeReview(review.text));

  return (
    <section className="mt-10 rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-black text-navy">
            <MessageCircle className="text-teal" /> Google reviews
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Recent review snippets from Google. Reviews are shown for convenience and may update over time.
          </p>
        </div>
        {centre.googleMapsUrl ? (
          <a
            href={centre.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-ocean px-4 py-2 text-sm font-black text-ocean hover:bg-ocean hover:text-white"
          >
            View on Google
          </a>
        ) : null}
      </div>

      {displayReviews.length ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {displayReviews.slice(0, 5).map((review, index) => (
            <article key={`${review.authorName}-${review.publishTime ?? index}`} className="rounded-2xl bg-mist p-5 ring-1 ring-sky-100">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-navy">{review.authorName}</h3>
                  {review.relativePublishTimeDescription ? (
                    <p className="text-xs font-semibold text-slate-500">{review.relativePublishTimeDescription}</p>
                  ) : null}
                </div>
                {review.rating ? (
                  <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-black text-amber-500 ring-1 ring-sky-100">
                    <Star size={13} fill="currentColor" /> {review.rating}
                  </span>
                ) : null}
              </div>
              <ReviewText text={review.text} />
            </article>
          ))}
        </div>
      ) : centre.reviewKeywords.length ? (
        <>
          <p className="mt-5 text-sm font-bold text-slate-600">Review text is not available, but reviewers mention:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {centre.reviewKeywords.slice(0, 5).map((keyword) => (
              <span key={keyword} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-black capitalize text-ocean ring-1 ring-sky-100">
                {keyword}
              </span>
            ))}
          </div>
        </>
      ) : (
        <p className="mt-5 rounded-xl bg-mist p-4 text-sm leading-6 text-slate-600">Reviews are not available for this centre yet.</p>
      )}
    </section>
  );
}

export function generateStaticParams() {
  return centres.map((centre) => ({ slug: centre.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const centre = getCentreBySlug(slug);
  if (!centre) return {};
  return {
    title: `${centre.name} - Dog Therapy Centre in ${centre.city}`,
    description: `${centre.name} in ${locationLabel(centre)}. View public listing details, services, address, rating, contact options and booking questions to ask before treatment.`,
    alternates: {
      canonical: `/centres/${centre.slug}`
    },
    openGraph: {
      title: `${centre.name} | HyperDog Therapy`,
      description: `${centre.name} listing details for dog hydrotherapy, swimming, physiotherapy or rehabilitation research in ${centre.city}.`,
      images: centre.image ? [centre.image] : undefined
    }
  };
}

export default async function CentreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const centre = getCentreBySlug(slug);
  if (!centre) notFound();

  const related = centres
    .filter((item) => item.slug !== centre.slug && (item.city === centre.city || item.region === centre.region))
    .slice(0, 4);
  const tags = getServiceTags(centre);
  const relatedGuides = guides
    .filter((guide) =>
      tags.some((tag) => `${guide.title} ${guide.description} ${guide.category}`.toLowerCase().includes(tag.toLowerCase().split(" ")[0]))
    )
    .concat(guides)
    .filter((guide, index, all) => all.findIndex((item) => item.slug === guide.slug) === index)
    .slice(0, 3);
  const serviceDescription = tags.length
    ? tags.join(", ").toLowerCase()
    : centre.category.toLowerCase();

  return (
    <main className="bg-mist">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd(centre)) }} />
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link href="/centres" className="mb-5 inline-flex min-h-10 max-w-full items-center gap-2 text-sm font-black text-ocean">
          <ArrowLeft size={16} /> Back to centres
        </Link>

        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
            <div className="relative h-60 bg-sky-50 sm:h-80 lg:h-96">
              {centre.image ? (
                <Image src={centre.image} alt={`${centre.name} therapy centre`} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              ) : (
                <ImagePlaceholder label={centre.name} variant="hero" />
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-ocean ring-1 ring-sky-100">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-4xl">{centre.name}</h1>
              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-700 sm:text-base">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-500" /> <span>{centre.address}</span>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1 font-black text-amber-500">
                  <Star size={17} fill="currentColor" /> {formatRating(centre)}
                </span>
                {centre.reviewCount ? <span className="font-semibold text-slate-600">{centre.reviewCount} reviews</span> : null}
                <span className="font-semibold text-slate-600">{centre.category}</span>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
              <h2 className="text-xl font-black text-navy">Contact centre</h2>
              <div className="mt-5 space-y-3">
                {centre.phone ? (
                  <a href={`tel:${centre.phone}`} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-ocean px-5 py-3 text-sm font-black text-ocean">
                    <Phone size={18} /> {centre.phone}
                  </a>
                ) : null}
                {centre.website ? (
                  <a href={centre.website} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-leaf px-5 py-3 text-sm font-black text-white">
                    Visit website <ExternalLink size={18} />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-xl font-black text-navy">
                <ShieldCheck className="text-teal" /> Before you book
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Information is provided for convenience only. Always consult your vet before starting treatment.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
              <h2 className="text-xl font-black text-navy">Location</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{locationLabel(centre)}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{centre.postcode}</p>
            </div>
          </aside>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-7">
            <h2 className="text-2xl font-black text-navy">About this listing</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
              <p>
                {centre.name} is listed as a {centre.category.toLowerCase()} in {locationLabel(centre)}. Based on the listing category and available public business information, this profile may be relevant for owners researching {serviceDescription} services in or around {centre.city}.
              </p>
              <p>
                This page brings together public contact details, location information, service tags and review signals to help owners decide what to ask next. It is not a clinical recommendation, inspection report or confirmation that a centre is suitable for a specific dog.
              </p>
              <p>
                If your dog is recovering from injury, living with arthritis, rebuilding after surgery or struggling with mobility, contact your vet before booking. A good centre should be willing to explain referral requirements, assessment steps and how sessions are adapted for your dog&apos;s health and confidence.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card sm:p-7">
            <h2 className="text-2xl font-black text-navy">Services this centre may offer</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Based on the listing category and public business information, this centre may be relevant for:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-black text-ocean ring-1 ring-sky-100">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Confirm current services, therapist availability, prices and suitability directly with the centre before travelling.
            </p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-xl font-black text-navy">Questions to ask before booking</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {["Do you require veterinary referral or consent?", "Who assesses my dog before the first session?", "Do you recommend pool work, treadmill work or physiotherapy?", "How do you monitor water hygiene and safety?", "Can you provide reports for my vet or insurer?"].map((item) => (
                <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-xl font-black text-navy">Before your first appointment</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Bring your dog&apos;s diagnosis if known, medication details, vet referral notes, insurance requirements and a clear summary of recent symptoms. Tell the centre if your dog is nervous, reactive, water-shy or has handling sensitivities.
            </p>
          </article>
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
            <h2 className="text-xl font-black text-navy">Local area</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Owners searching in {centre.city} may also compare nearby providers in {centre.region}. Check travel time, parking, accessibility and whether the centre can accommodate your dog&apos;s size, mobility and confidence level.
            </p>
          </article>
        </section>

        <div className="mt-10 rounded-2xl border border-sky-100 bg-cyan-50 p-5 text-sm font-bold leading-6 text-navy">
          Always speak with your vet before starting hydrotherapy, physiotherapy or rehabilitation. If your dog is in pain, injured or unwell, contact a vet promptly.
        </div>

        <CentreReviews centre={centre} />

        {related.length ? (
          <section className="mt-10">
            <h2 className="mb-5 text-2xl font-black text-navy">More centres nearby</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <CentreCard key={item.id} centre={item} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-black text-navy">Related owner guides</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <GuideCard key={guide.slug} {...guide} />
            ))}
          </div>
        </section>
      </section>
      <CtaBanner />
    </main>
  );
}
