import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Star } from "lucide-react";
import type { Centre } from "@/data/centres";
import { formatRating, getServiceTags, locationLabel } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type CentreCardProps = {
  centre: Centre;
  distanceMiles?: number;
};

export function CentreCard({ centre, distanceMiles }: CentreCardProps) {
  const tags = getServiceTags(centre);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-40 overflow-hidden bg-sky-50">
        {centre.image ? (
          <Image
            src={centre.image}
            alt={`${centre.name} centre image`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder label="Canine therapy centre" className="rounded-none" />
        )}
        <button
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur transition hover:text-ocean"
          aria-label={`Save ${centre.name}`}
        >
          <Heart size={20} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-base font-black leading-5 text-navy">{centre.name}</h3>
        <p className="mt-2 flex min-h-[2.5rem] items-start gap-1.5 text-sm leading-5 text-slate-600">
          <MapPin size={15} className="mt-0.5 shrink-0 text-orange-500" />
          <span className="line-clamp-2">{locationLabel(centre)}</span>
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 font-black text-amber-500">
            <Star size={15} fill="currentColor" />
            {formatRating(centre)}
          </span>
          {centre.reviewCount ? <span className="text-slate-500">({centre.reviewCount} reviews)</span> : null}
        </div>
        {typeof distanceMiles === "number" ? (
          <p className="mt-2 text-sm font-black text-ocean">{distanceMiles.toFixed(distanceMiles < 10 ? 1 : 0)} miles away</p>
        ) : null}
        <div className="mt-3 flex min-h-[5rem] content-start flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-ocean ring-1 ring-sky-100">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/centres/${centre.slug}`}
          className="mt-auto flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0b5a66] px-4 text-sm font-black text-white transition hover:bg-navy"
        >
          View profile <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
