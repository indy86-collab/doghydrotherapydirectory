import type { Metadata } from "next";
import { ListYourCentreForm, ListingBenefits } from "@/components/ListYourCentreForm";

export const metadata: Metadata = {
  title: "List Your Canine Therapy Centre",
  description: "Submit your dog hydrotherapy, canine physiotherapy or rehabilitation centre to HyperDog Therapy.",
  alternates: {
    canonical: "/list-your-centre"
  }
};

export default function ListYourCentrePage() {
  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">For centres</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">List your canine therapy centre</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Share your centre details with HyperDog Therapy and help UK dog owners find trusted hydrotherapy, physiotherapy and rehab support.
            </p>
            <div className="mt-8">
              <ListingBenefits />
            </div>
          </div>

          <ListYourCentreForm />
        </div>
      </section>
    </main>
  );
}
