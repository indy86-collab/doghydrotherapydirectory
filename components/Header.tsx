"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, PawPrint, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/centres", label: "Find a Centre", dropdown: true },
  { href: "/near-me", label: "Near Me" },
  { href: "/locations", label: "Locations", dropdown: true },
  { href: "/guides", label: "Guides", dropdown: true },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="HyperDog Therapy home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ocean to-teal text-white shadow-card sm:h-12 sm:w-12">
            <PawPrint size={25} fill="currentColor" className="sm:h-[29px] sm:w-[29px]" />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-tight text-navy sm:text-2xl">HyperDog</span>
            <span className="block text-lg font-black tracking-tight text-teal sm:text-xl">Therapy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-bold text-navy lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 border-b-2 border-transparent py-4 transition hover:border-ocean hover:text-ocean"
            >
              {item.label}
              {item.dropdown ? <ChevronDown size={14} /> : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-sky-100 bg-white text-navy shadow-sm transition hover:border-ocean hover:text-ocean lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            href="/list-your-centre"
            className="hidden min-h-11 items-center gap-2 rounded-xl bg-leaf px-5 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-leaf/90 lg:inline-flex"
          >
            List Your Centre <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[65px] z-40 h-[calc(100dvh-65px)] bg-white/98 px-4 pb-6 pt-3 shadow-soft transition sm:top-[73px] sm:h-[calc(100dvh-73px)] lg:hidden ${menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
      >
        <nav aria-label="Mobile navigation" className="flex h-full flex-col">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-between rounded-xl bg-mist px-4 py-3 text-base font-black text-navy ring-1 ring-sky-100"
              >
                {item.label}
                <ArrowRight size={17} className="text-ocean" />
              </Link>
            ))}
          </div>
          <Link
            href="/list-your-centre"
            onClick={closeMenu}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-leaf px-5 py-3 text-base font-black text-white shadow-card"
          >
            List Your Centre <ArrowRight size={17} />
          </Link>
          <p className="mt-auto rounded-xl bg-cyan-50 p-4 text-sm font-semibold leading-6 text-navy">
            Compare hydrotherapy, physiotherapy, rehab and dog swimming services before contacting a centre directly.
          </p>
        </nav>
      </div>
    </header>
  );
}
