import type { Metadata } from "next";
import { LocationCard } from "@/components/LocationCard";
import { getLocationImage } from "@/lib/location-images";
import { getLocations } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Browse Locations",
  description: "Browse dog hydrotherapy, canine physiotherapy, dog swimming and rehab centres by UK and Ireland location.",
  alternates: {
    canonical: "/locations"
  }
};

export default function LocationsPage() {
  const locations = [...getLocations()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-navy via-ocean to-teal p-5 text-white shadow-soft sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">Browse locations</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Find canine therapy near you</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-50 sm:text-lg sm:leading-8">
            Explore dog hydrotherapy, physiotherapy and rehabilitation centres by city, county or region.
          </p>
        </div>
        <div className="mb-8 rounded-2xl border border-sky-100 bg-white p-6 shadow-card">
          <p className="text-base leading-8 text-slate-700">
            Location pages are designed to help owners compare services without relying only on a map search. Each page includes local listings, practical booking questions, nearby areas and guidance on when to speak with your vet. Counts reflect the current directory data and may change as centres request updates.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {locations.map((location) => (
            <LocationCard key={location.slug} {...location} imageSrc={getLocationImage(location.slug)} />
          ))}
        </div>
      </section>
    </main>
  );
}
