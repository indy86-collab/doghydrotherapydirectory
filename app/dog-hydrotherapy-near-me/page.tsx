import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LocateFixed } from "lucide-react";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo";

const faqs = [
  {
    question: "How do I find dog hydrotherapy near me?",
    answer: "Start with a location search, shortlist centres within a sensible travel radius, then contact each provider to confirm referral requirements, facilities, appointment availability and suitability for your dog."
  },
  {
    question: "Is dog hydrotherapy the same as dog swimming?",
    answer: "Not always. Hydrotherapy is usually a structured therapeutic session with a health or rehabilitation goal, while dog swimming can be recreational, confidence-building or fitness-focused."
  },
  {
    question: "Do all dogs need a vet referral?",
    answer: "Many UK centres require veterinary referral or consent, especially for arthritis, injury, surgery recovery, neurological issues or pain. Ask the centre before booking."
  },
  {
    question: "How far should I travel for hydrotherapy?",
    answer: "For complex rehabilitation, a specialist centre may be worth a longer journey. For ongoing maintenance or fitness, a closer centre can make regular sessions easier."
  }
];

export const metadata: Metadata = {
  title: "Dog Hydrotherapy Near Me | HyperDog Therapy",
  description: "Find dog hydrotherapy centres, canine physiotherapy clinics, rehabilitation services and dog swimming pools near your area.",
  alternates: {
    canonical: "/dog-hydrotherapy-near-me"
  }
};

export default function DogHydrotherapyNearMePage() {
  return (
    <main className="bg-mist">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildWebPageJsonLd({
              title: "Dog Hydrotherapy Near Me | Find Canine Therapy Centres",
              description: "Find dog hydrotherapy centres, canine physiotherapy clinics, rehabilitation services and dog swimming pools near your area.",
              path: "/dog-hydrotherapy-near-me"
            }),
            buildFaqJsonLd(faqs)
          ])
        }}
      />
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Local guide</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-5xl">
          Dog Hydrotherapy Near Me | Find Canine Therapy Centres
        </h1>

        <section className="mt-6 rounded-2xl border border-sky-100 bg-white p-5 shadow-card sm:p-7">
          <div className="grid gap-5 sm:grid-cols-[1fr_15rem] sm:items-center">
            <div>
              <h2 className="text-2xl font-black text-navy">Want results based on your current location?</h2>
              <p className="mt-2 text-base leading-7 text-slate-700">
                Use the location finder to sort listed centres by approximate distance in miles.
              </p>
            </div>
            <Link
              href="/near-me"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-leaf px-5 text-sm font-black text-white shadow-card transition hover:bg-leaf/90"
            >
              <LocateFixed size={18} />
              Use the Near Me Finder
            </Link>
          </div>
        </section>

        <div className="mt-8 space-y-8 rounded-2xl border border-sky-100 bg-white p-6 text-base leading-8 text-slate-700 shadow-card sm:p-8">
          <section>
            <h2 className="text-2xl font-black text-navy">Finding a dog hydrotherapy centre near you</h2>
            <p className="mt-4">
              Searching for dog hydrotherapy near me is usually the start of a practical decision, not the end of one. Distance matters because many dogs need repeat appointments, but the closest centre is not always the right centre for every dog. A good search should help you compare location, facilities, therapist experience, referral requirements and the type of support available. HyperDog Therapy brings together public listing information for dog hydrotherapy, canine physiotherapy, rehabilitation and dog swimming providers so owners can build a sensible shortlist before contacting centres directly.
            </p>
            <p className="mt-4">
              If you want the quickest route, use the <Link href="/near-me" className="font-black text-ocean">Near Me Finder</Link> to calculate approximate mileage from your browser location. If you prefer not to share location access, browse <Link href="/centres" className="font-black text-ocean">all centres</Link> or search by town, city, county or postcode. Partial outward postcodes such as LE, SW, M or B can be useful when you are comparing a wider area. Once you have a shortlist, visit each profile, check the provider website if available, and ask the centre whether your dog&apos;s needs match their facilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">What is dog hydrotherapy?</h2>
            <p className="mt-4">
              Dog hydrotherapy uses water to support controlled exercise. Warm water, buoyancy and careful handling can reduce load through sore joints while allowing a dog to move in a more supported way. Sessions may take place in a specialist hydrotherapy pool, an underwater treadmill, or sometimes alongside canine physiotherapy and land-based rehabilitation exercises. The exact plan should depend on your dog&apos;s diagnosis, comfort, confidence, stamina and veterinary advice.
            </p>
            <p className="mt-4">
              Hydrotherapy is not just dog swimming with a nicer name. Therapeutic sessions usually have a defined goal, such as rebuilding strength after surgery, supporting mobility in an arthritic dog, improving controlled gait on an underwater treadmill, or helping a dog exercise safely while carrying too much weight. Recreational dog swimming can still be useful for fitness and confidence, but owners should be clear about whether they are booking a therapeutic appointment or a leisure swim. The guide <Link href="/guides/what-is-dog-hydrotherapy" className="font-black text-ocean">what is dog hydrotherapy</Link> explains the basics in more detail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">Why owners search for hydrotherapy nearby</h2>
            <p className="mt-4">
              Many owners start searching after noticing stiffness, shorter walks, hesitation on stairs or difficulty getting up after rest. Others are referred by a vet after an injury or operation. Common reasons include arthritis, general stiffness, post-surgery recovery, cruciate ligament recovery, hip or elbow dysplasia, weight management and senior dog mobility support. Some dogs also benefit from carefully managed water work when normal land exercise is too uncomfortable or too high impact.
            </p>
            <p className="mt-4">
              For arthritis and senior mobility, the aim is usually comfort, controlled movement and muscle maintenance rather than a cure. For post-surgery or cruciate ligament recovery, timing is critical: wounds need to be healed and the vet or surgeon should confirm when rehabilitation can begin. For hip or elbow dysplasia, hydrotherapy may form part of a wider plan that includes weight control, pain management, home changes and exercise guidance. For weight management, water-based exercise can help some dogs move more comfortably, but diet and veterinary supervision still matter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">How to choose a dog hydrotherapy centre near you</h2>
            <p className="mt-4">
              Choosing well means balancing convenience with clinical suitability. Start by checking whether the centre offers the service your dog actually needs: pool hydrotherapy, underwater treadmill work, canine physiotherapy, rehabilitation planning or dog swimming. Look for clear information about qualifications, insurance, water hygiene, handling methods and how the team adapts sessions for nervous, older or painful dogs. Reviews can help you understand the owner experience, but they should not replace practical checks.
            </p>
            <p className="mt-4">
              Travel time also matters. A dog recovering from surgery, living with pain or feeling anxious may find a long journey tiring, so the best centre is often one that combines suitable facilities with realistic travel. If the nearest centre does not offer the right service, it may be sensible to travel further for a specialist assessment and then ask whether ongoing maintenance can happen closer to home. The <Link href="/guides/how-to-choose-a-canine-hydrotherapy-centre" className="font-black text-ocean">centre choosing checklist</Link> is a useful next step.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">Questions to ask before booking</h2>
            <p className="mt-4">
              Before booking, ask whether a vet referral is required, who will assess your dog, what qualifications the therapists hold and whether they liaise with vets or physiotherapists. Ask whether pool sessions, underwater treadmill sessions or land-based rehab are available, and why one option may suit your dog better than another. For nervous dogs, ask how introductions to water are handled, whether life jackets or ramps are used, and whether owners can be present during sessions.
            </p>
            <p className="mt-4">
              It is also worth asking about practical details: appointment length, initial assessment fees, session prices, block bookings, cancellation terms, parking, accessibility and what to bring. For insurance claims, ask whether the centre can provide invoices, referral records or progress notes. The cost guide at <Link href="/guides/how-much-does-dog-hydrotherapy-cost" className="font-black text-ocean">how much does dog hydrotherapy cost</Link> can help you compare pricing questions without treating price as the only factor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">Do you need a vet referral?</h2>
            <p className="mt-4">
              Many UK dog hydrotherapy and canine rehabilitation providers ask for veterinary referral or consent, especially when a dog has pain, injury, arthritis, neurological concerns, surgery recovery needs or a diagnosed orthopaedic condition. This is a safety step. It helps the therapist understand the diagnosis, medication, restrictions and any reasons hydrotherapy might need to be delayed or adapted.
            </p>
            <p className="mt-4">
              Even if a centre offers recreational dog swimming without referral, you should speak to your vet before using water exercise for a medical or mobility concern. Hydrotherapy can be helpful for some dogs, but it is not suitable for every situation. Open wounds, infection, uncontrolled pain, severe anxiety, some heart or breathing problems and other medical issues may mean a different plan is needed first.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">Useful links for your search</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                ["/near-me", "Use current location"],
                ["/centres", "Browse all centres"],
                ["/guides/what-is-dog-hydrotherapy", "Hydrotherapy basics"],
                ["/guides/how-to-choose-a-canine-hydrotherapy-centre", "Choosing a centre"],
                ["/guides/how-much-does-dog-hydrotherapy-cost", "Cost guide"]
              ].map(([href, label]) => (
                <Link key={href} href={href} className="inline-flex items-center gap-2 rounded-xl bg-cyan-50 px-4 py-2 text-sm font-black text-ocean ring-1 ring-sky-100">
                  {label} <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-navy">Dog hydrotherapy near me FAQs</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl bg-mist p-4 ring-1 ring-sky-100">
                  <h3 className="font-black text-navy">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <p className="rounded-xl bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-950 ring-1 ring-amber-200">
            This page is for general information only and does not replace advice from your vet.
          </p>
        </div>
      </article>
    </main>
  );
}
