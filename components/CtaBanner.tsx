import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, PawPrint } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal via-[#0b7d83] to-[#119b8c] p-5 text-white shadow-soft sm:p-6 md:p-8">
        <div className="absolute bottom-0 right-0 hidden h-40 w-40 md:block">
          <Image src="/images/cta-dog.jpg" alt="Happy dog after therapy" fill sizes="160px" className="object-cover opacity-95" />
        </div>
        <div className="relative grid gap-6 md:grid-cols-[1.3fr_1fr_auto] md:items-center">
          <div className="flex gap-5">
            <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-full border border-white/40 bg-white/10 sm:grid">
              <PawPrint size={34} fill="currentColor" />
            </span>
            <div>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">Own a canine therapy centre? Get listed.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-cyan-50">
                Join trusted UK centres and connect with dog owners who are searching for your services.
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-sm font-semibold text-cyan-50">
            {["Increase your visibility", "Reach more local clients", "Easy listing & management"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check size={17} /> {item}
              </li>
            ))}
          </ul>
          <Link href="/list-your-centre" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-ocean shadow-card md:w-auto">
            List Your Centre <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
