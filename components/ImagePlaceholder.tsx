import { Activity, Dog, Waves } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  variant?: "hero" | "service" | "location" | "guide" | "avatar";
  className?: string;
};

export function ImagePlaceholder({ label, variant = "service", className = "" }: ImagePlaceholderProps) {
  const isHero = variant === "hero";
  const isAvatar = variant === "avatar";

  return (
    <div
      className={[
        "relative isolate flex h-full w-full overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100",
        isAvatar ? "items-center justify-center rounded-full" : "items-end rounded-2xl",
        className
      ].join(" ")}
    >
      <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-teal/20" />
      <div className="absolute -bottom-12 left-6 h-32 w-32 rounded-full bg-ocean/15" />
      <div className={isHero ? "absolute right-8 top-10 text-ocean/25" : "absolute right-4 top-4 text-ocean/25"}>
        <Waves size={isHero ? 120 : 54} strokeWidth={1.5} />
      </div>
      <div className={isHero ? "absolute bottom-12 right-14 text-navy/35" : "absolute bottom-8 right-6 text-navy/35"}>
        <Dog size={isHero ? 130 : 58} strokeWidth={1.4} />
      </div>
      <div className={isHero ? "absolute left-9 top-10 text-leaf/35" : "absolute left-4 top-4 text-leaf/35"}>
        <Activity size={isHero ? 62 : 32} />
      </div>
      {!isAvatar && (
        <div className="relative z-10 w-full bg-gradient-to-t from-navy/75 to-transparent p-4 pt-16">
          <p className="max-w-[16rem] text-sm font-bold text-white">{label}</p>
        </div>
      )}
    </div>
  );
}
