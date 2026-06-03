import Link from "next/link";
import { PawPrint } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SITE_DOMAIN_LABEL } from "@/lib/site";

const columns = [
  {
    title: "Quick links",
    links: [
      ["Home", "/"],
      ["Find a Centre", "/centres"],
      ["Locations", "/locations"],
      ["Guides & Advice", "/guides"],
      ["About Us", "/about"],
      ["Contact", "/contact"]
    ]
  },
  {
    title: "For dog owners",
    links: [
      ["Hydrotherapy Guide", "/guides/what-is-dog-hydrotherapy"],
      ["Physiotherapy Guide", "/guides/dog-physiotherapy-explained"],
      ["Rehab After Surgery", "/guides/dog-hydrotherapy-after-surgery"],
      ["Senior Dog Support", "/guides/senior-dog-mobility-support"],
      ["Cost Guide", "/guides/how-much-does-dog-hydrotherapy-cost"],
      ["FAQs", "/faqs"]
    ]
  },
  {
    title: "For centres",
    links: [
      ["List Your Centre", "/list-your-centre"],
      ["Centre Login", "/login"],
      ["Directory Benefits", "/list-your-centre"],
      ["Help Centre", "/contact"]
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#061b35] via-navy to-[#03182e] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.35fr] lg:px-8">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2">
            <PawPrint size={34} fill="currentColor" />
            <span className="text-xl font-black leading-none">
              HyperDog
              <span className="block text-sm text-cyan-100">Therapy</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-6 text-cyan-50/85">
            HyperDog Therapy — the UK directory at{" "}
            <span className="font-bold text-white">{SITE_DOMAIN_LABEL}</span> for dog hydrotherapy, physiotherapy, rehabilitation and mobility support.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-3 text-sm font-extrabold">{column.title}</h3>
            <ul className="space-y-1.5 text-sm text-cyan-50/85">
              {column.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="inline-flex min-h-10 items-center hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-sm font-extrabold">Stay in the loop</h3>
          <p className="text-sm leading-6 text-cyan-50/85">Subscribe to get helpful dog health tips, guides and updates.</p>
          <SubscribeForm />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cyan-50/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 HyperDog Therapy Ltd. · {SITE_DOMAIN_LABEL}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            <Link className="inline-flex min-h-8 items-center" href="/privacy-policy">Privacy Policy</Link>
            <Link className="inline-flex min-h-8 items-center" href="/terms">Terms & Conditions</Link>
            <Link className="inline-flex min-h-8 items-center" href="/editorial-policy">Editorial Policy</Link>
            <Link className="inline-flex min-h-8 items-center" href="/disclaimer">Disclaimer</Link>
            <Link className="inline-flex min-h-8 items-center" href="/cookies">Cookies Policy</Link>
          </div>
          <p>Made with care for dogs</p>
        </div>
      </div>
    </footer>
  );
}
