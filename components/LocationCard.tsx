import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type LocationCardProps = {
  name: string;
  slug: string;
  count?: number;
  imageSrc?: string;
};

export function LocationCard({ name, slug, count, imageSrc }: LocationCardProps) {
  return (
    <Link
      href={`/locations/${slug}`}
      className="group relative flex min-h-28 items-end overflow-hidden rounded-xl bg-gradient-to-br from-ocean via-teal to-leaf p-4 shadow-card"
    >
      {imageSrc ? (
        <Image src={imageSrc} alt={`${name} location`} fill sizes="(max-width: 768px) 50vw, 14vw" className="object-cover transition duration-500 group-hover:scale-110" />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(180deg,rgba(8,36,74,0.05),rgba(8,36,74,0.72))]" />
      <div className="absolute right-0 top-0 h-20 w-20 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/20 transition group-hover:scale-125 sm:h-24 sm:w-24" />
      <div className="relative flex w-full items-end justify-between gap-3">
        <div>
        <h3 className="text-base font-black leading-5 text-white sm:text-lg">{name}</h3>
        {typeof count === "number" ? <p className="mt-1 text-xs font-bold text-cyan-50">{count} centres</p> : null}
        </div>
        <ArrowRight size={16} className="mb-1 shrink-0 text-white transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
