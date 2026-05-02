"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Centre } from "@/data/centres";
import { CentreCard } from "@/components/CentreCard";
import { searchCentresByLocationText } from "@/lib/centres";

type LocationSearchProps = {
  centres: Centre[];
  title?: string;
};

export function LocationSearch({ centres, title = "Search by town, city or postcode" }: LocationSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchCentresByLocationText(centres, query);
  }, [centres, query]);

  return (
    <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-card sm:p-5">
      <h2 className="text-xl font-black text-navy">{title}</h2>
      <label className="relative mt-4 block">
        <span className="sr-only">Enter town, city or postcode</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter town, city or postcode"
          className="h-12 w-full rounded-xl border border-sky-100 bg-mist pl-11 pr-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
        />
      </label>

      {query.trim() ? (
        <div className="mt-5">
          <p className="text-sm font-bold text-slate-600">
            {results.length ? `${results.length} matching centre${results.length === 1 ? "" : "s"}` : "No matching centres found."}
          </p>

          {results.length ? (
            <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.slice(0, 9).map((centre) => (
                <CentreCard key={centre.id} centre={centre} />
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-xl bg-cyan-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-sky-100">
              <p className="font-bold text-navy">Try a nearby town, county or outward postcode such as LE, SW, M or B.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/centres" className="rounded-lg bg-leaf px-3 py-2 text-xs font-black text-white">
                  Browse all centres
                </Link>
                <Link href="/locations" className="rounded-lg border border-ocean px-3 py-2 text-xs font-black text-ocean">
                  Browse locations
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
