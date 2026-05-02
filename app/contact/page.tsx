import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact HyperDog Therapy",
  description: "Contact HyperDog Therapy for listing updates, centre submissions, corrections and partnership enquiries."
};

const contactNotes = [
  {
    title: "Listing updates",
    text: "If you own or manage a centre, include the centre name, website, address, phone number and the exact changes you would like us to review."
  },
  {
    title: "Corrections",
    text: "Spotted an outdated phone number, service tag, location or website link? Tell us what should change and include a source where possible."
  },
  {
    title: "Centre owner enquiries",
    text: "For listing ownership, profile updates or centre submission questions, share your role and the centre details so the request can be reviewed."
  },
  {
    title: "General questions",
    text: "For general questions, partnership, guide, content or media enquiries, share a short overview and the best contact details for a reply."
  }
];

export default function ContactPage() {
  return (
    <main className="bg-mist">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Contact</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-5xl">Get in touch</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Send listing updates, corrections, centre enquiries and partnership notes to the HyperDog Therapy team.
          </p>
          <p className="mt-3 text-sm font-bold text-slate-600">
            Prefer email? Use hello@hyperdogtherapy.co.uk.
          </p>

          <div className="mt-8 space-y-4">
            {contactNotes.map((note) => (
              <article key={note.title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-card">
                <h2 className="text-lg font-black text-navy">{note.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{note.text}</p>
              </article>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
