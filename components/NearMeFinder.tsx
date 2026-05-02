"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Loader2, LocateFixed, MapPin, SlidersHorizontal } from "lucide-react";
import type { Centre } from "@/data/centres";
import { CentreCard } from "@/components/CentreCard";
import { LocationSearch } from "@/components/LocationSearch";
import { filterCentresByRadius, sortCentresByDistance, type CentreWithDistance } from "@/lib/distance";
import { serviceOptions } from "@/lib/utils";

type LocationState = "idle" | "loading" | "success" | "error" | "unsupported";

type NearMeFinderProps = {
  centres: Centre[];
};

const radiusOptions = [5, 10, 25, 50, 100];
const ratingOptions = ["Any rating", "4.0+", "4.5+"];

export function NearMeFinder({ centres }: NearMeFinderProps) {
  const [status, setStatus] = useState<LocationState>("idle");
  const [message, setMessage] = useState("");
  const [locatedCentres, setLocatedCentres] = useState<CentreWithDistance[]>([]);
  const [service, setService] = useState("All services");
  const [radius, setRadius] = useState("25");
  const [rating, setRating] = useState("Any rating");

  const filteredCentres = useMemo(() => {
    const radiusMiles = Number(radius);
    const minRating = rating === "4.5+" ? 4.5 : rating === "4.0+" ? 4 : 0;

    return filterCentresByRadius(locatedCentres, radiusMiles).filter((centre) => {
      const matchesService = service === "All services" ? true : centre.serviceTags.includes(service);
      const matchesRating = minRating ? (centre.rating ?? 0) >= minRating : true;
      return matchesService && matchesRating;
    });
  }, [locatedCentres, radius, rating, service]);

  function requestLocation() {
    setMessage("");

    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      setMessage("Geolocation is not supported by this browser. You can still search by town, city or postcode.");
      return;
    }

    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const sorted = sortCentresByDistance(position.coords.latitude, position.coords.longitude, centres);
        setLocatedCentres(sorted);
        setStatus("success");
      },
      (error) => {
        setStatus("error");
        setMessage(
          error.code === error.PERMISSION_DENIED
            ? "Location access was not enabled. You can still search by town, city or postcode."
            : "We could not get your location. You can still search by town, city or postcode."
        );
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }

  const showManualFallback = status === "error" || status === "unsupported";

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-card sm:p-7">
        <div className="grid gap-5 lg:grid-cols-[1fr_18rem] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Location finder</p>
            <h2 className="mt-2 text-2xl font-black text-navy">Use your browser location</h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              We will calculate the nearest listed centres in your browser and show the closest matches first.
            </p>
          </div>
          <button
            type="button"
            onClick={requestLocation}
            disabled={status === "loading"}
            aria-label="Use my current location to find nearby centres"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-leaf px-6 text-base font-black text-white shadow-card transition hover:bg-leaf/90 disabled:cursor-wait disabled:opacity-75"
          >
            {status === "loading" ? <Loader2 size={20} className="animate-spin" /> : <LocateFixed size={20} />}
            {status === "loading" ? "Finding centres..." : "Use my location"}
          </button>
        </div>

        <p className="mt-5 rounded-xl bg-cyan-50 p-4 text-sm font-semibold leading-6 text-navy ring-1 ring-sky-100">
          Your location is only used in your browser to calculate nearby centres. We do not store your location.
        </p>

        {message ? (
          <div className="mt-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-950">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p>{message}</p>
          </div>
        ) : null}
      </section>

      {status === "success" ? (
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-card sm:p-5">
          <div className="grid gap-3 md:grid-cols-3">
            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">Service type</span>
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                aria-label="Filter by service type"
                className="h-12 w-full rounded-xl border border-sky-100 bg-mist px-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
              >
                <option>All services</option>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">Radius</span>
              <select
                value={radius}
                onChange={(event) => setRadius(event.target.value)}
                aria-label="Filter by radius"
                className="h-12 w-full rounded-xl border border-sky-100 bg-mist px-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
              >
                {radiusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} miles
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">Minimum rating</span>
              <select
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                aria-label="Filter by minimum rating"
                className="h-12 w-full rounded-xl border border-sky-100 bg-mist px-4 text-sm font-semibold text-navy outline-none focus:border-ocean"
              >
                {ratingOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <h2 className="text-xl font-black text-navy">Nearest centres</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <SlidersHorizontal size={16} />
              {filteredCentres.length} results
            </p>
          </div>

          {filteredCentres.length ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCentres.map((centre) => (
                <CentreCard key={centre.id} centre={centre} distanceMiles={centre.distanceMiles} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl bg-mist p-8 text-center ring-1 ring-sky-100">
              <MapPin className="mx-auto text-ocean" size={28} />
              <p className="mt-3 font-black text-navy">No centres matched those filters.</p>
              <p className="mt-2 text-sm text-slate-600">Try a wider radius or choose all services.</p>
            </div>
          )}
        </section>
      ) : null}

      {showManualFallback || status === "idle" ? <LocationSearch centres={centres} /> : null}
    </div>
  );
}
