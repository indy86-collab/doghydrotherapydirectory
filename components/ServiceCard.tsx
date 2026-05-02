import { Activity, ArrowRight, Building2, Dumbbell, HeartPulse, Waves, WavesIcon } from "lucide-react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const iconMap = {
  waves: Waves,
  physio: HeartPulse,
  rehab: Building2,
  pool: WavesIcon,
  treadmill: Activity,
  mobility: Dumbbell
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  label: string;
  imageSrc?: string;
};

export function ServiceCard({ title, description, icon, label, imageSrc }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-36">
        {imageSrc ? (
          <Image src={imageSrc} alt={label} fill sizes="(max-width: 768px) 50vw, 16vw" className="object-cover" />
        ) : (
          <ImagePlaceholder label={label} className="rounded-none" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
        <div className="absolute -top-1 left-4 grid h-14 w-14 place-items-center rounded-full bg-cyan-50 text-ocean shadow-card ring-4 ring-white">
          <Icon size={28} />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col p-4 pb-8">
        <h3 className="text-base font-black leading-5 text-navy">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
        <span className="absolute bottom-3 right-3 grid h-7 w-7 place-items-center rounded-full border border-teal text-teal transition group-hover:bg-teal group-hover:text-white">
          <ArrowRight size={14} />
        </span>
      </div>
    </article>
  );
}
