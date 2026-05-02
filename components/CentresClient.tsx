"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Centre } from "@/data/centres";
import { CentreCard } from "@/components/CentreCard";
import { serviceOptions } from "@/lib/utils";

type CentresClientProps = {
  centres: Centre[];
  title?: string;
  initialQuery?: string;
  initialService?: string;
  initialRating?: string;
  initialCentreType?: string;
};

export function CentresClient({
  centres,
  title = "All centres",
  initialQuery = "",
  initialService = "All services",
  initialRating = "Any rating",
  initialCentreType = "All centre types"
}: CentresClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const [service, setService] = useState(initialService);
  const [rating, setRating] = useState(initialRating);
  const [centreType, setCentreType] = useState(initialCentreType);

  const centreTypes = useMemo(
    () => ["All centre types", ...Array.from(new Set(centres.map((centre) => centre.category).filter(Boolean))).sort()],
    [centres]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const minRating = rating === "4.5+" ? 4.5 : rating === "4.0+" ? 4 : 0;

    return centres.filter((centre) => {
      const text = [centre.name, centre.city, centre.region, centre.postcode, centre.address, centre.category, centre.serviceTags.join(" ")]
        .join(" ")
        .toLowerCase();
      const matchesQuery = q ? text.includes(q) : true;
      const matchesService = service === "All services" ? true : centre.serviceTags.includes(service);
      const matchesRating = minRating ? (centre.rating ?? 0) >= minRating : true;
      const matchesCentreType = centreType === "All centre types" ? true : centre.category === centreType;
      return matchesQuery && matchesService && matchesRating && matchesCentreType;
    });
  }, [centreType, centres, query, rating, service]);

  return (
    <section>
      <div className="mb-6 rounded-2xl border border-sky-100 bg-white p-4 shadow-card">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_14rem_12rem_15rem]">
          <label className="relative">
            <span className="sr-only">Search by name or location</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter town, city or postcode"
              className="h-12 w-full rounded-xl border border-sky-100 bg-mist pl-11 pr-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
            />
          </label>
          <label>
            <span className="sr-only">Service type</span>
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="h-12 w-full rounded-xl border border-sky-100 bg-mist px-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
            >
              <option>All services</option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Rating</span>
            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              className="h-12 w-full rounded-xl border border-sky-100 bg-mist px-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
            >
              <option>Any rating</option>
              <option>4.0+</option>
              <option>4.5+</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Centre type</span>
            <select
              value={centreType}
              onChange={(event) => setCentreType(event.target.value)}
              className="h-12 w-full rounded-xl border border-sky-100 bg-mist px-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
            >
              {centreTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-xl font-black text-navy">{title}</h2>
        <p className="flex items-center gap-2 text-sm font-bold text-slate-600">
          <SlidersHorizontal size={16} />
          {filtered.length} results
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((centre) => (
          <CentreCard key={centre.id} centre={centre} />
        ))}
      </div>

      {!filtered.length ? (
        <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-10 text-center shadow-card">
          <p className="font-bold text-navy">No centres matched those filters.</p>
          <p className="mt-2 text-sm text-slate-600">Try a nearby town, county or outward postcode, browse all centres, or check nearby locations.</p>
        </div>
      ) : null}
    </section>
  );
}
