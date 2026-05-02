import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type GuideCardProps = {
  title: string;
  description: string;
  slug: string;
  imageLabel: string;
  imageSrc?: string;
  readTime?: string;
  category?: string;
};

export function GuideCard({ title, description, slug, imageLabel, imageSrc, readTime, category }: GuideCardProps) {
  return (
    <article className="grid h-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-card sm:grid-cols-[8rem_1fr]">
      <div className="h-40 sm:h-auto">
        <div className="relative h-full min-h-40">
          {imageSrc ? (
            <Image src={imageSrc} alt={imageLabel} fill sizes="(max-width: 768px) 100vw, 18vw" className="object-cover" />
          ) : (
            <ImagePlaceholder label={imageLabel} variant="guide" className="rounded-none" />
          )}
        </div>
      </div>
      <div className="flex min-w-0 flex-col p-4">
        {category || readTime ? (
          <p className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-teal">
            {[category, readTime].filter(Boolean).join(" | ")}
          </p>
        ) : null}
        <h3 className="text-base font-black leading-5 text-navy">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
        <Link href={`/guides/${slug}`} className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-black text-ocean">
          Read more <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
