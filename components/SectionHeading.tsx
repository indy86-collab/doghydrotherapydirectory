import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  href?: string;
  linkLabel?: string;
  centered?: boolean;
};

export function SectionHeading({ title, href, linkLabel, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-6 flex items-center ${centered ? "justify-center" : "justify-between"} gap-4`}>
      <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl">{title}</h2>
      {href && linkLabel ? (
        <Link href={href} className="hidden text-sm font-extrabold text-ocean hover:text-navy sm:inline-flex">
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}
