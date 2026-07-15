"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, PawPrint, X } from "lucide-react";

type NavChild = { href: string; label: string };
type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/centres",
    label: "Find a Centre",
    children: [
      { href: "/centres", label: "Browse all centres" },
      { href: "/near-me", label: "Near me (distance sort)" },
      { href: "/dog-hydrotherapy-near-me", label: "Dog hydrotherapy near me" },
      { href: "/list-your-centre", label: "List your centre" }
    ]
  },
  { href: "/near-me", label: "Near Me" },
  {
    href: "/locations",
    label: "Locations",
    children: [
      { href: "/locations", label: "All locations" },
      { href: "/locations/london", label: "London" },
      { href: "/locations/belfast", label: "Belfast" },
      { href: "/locations/romsey", label: "Romsey" },
      { href: "/locations/goole", label: "Goole" },
      { href: "/locations/northampton", label: "Northampton" },
      { href: "/locations/maghera", label: "Maghera" }
    ]
  },
  {
    href: "/guides",
    label: "Guides",
    children: [
      { href: "/guides", label: "All guides" },
      { href: "/guides/what-is-dog-hydrotherapy", label: "What is dog hydrotherapy?" },
      { href: "/guides/how-much-does-dog-hydrotherapy-cost", label: "Hydrotherapy cost UK" },
      { href: "/guides/how-to-choose-a-canine-hydrotherapy-centre", label: "How to choose a centre" },
      { href: "/guides/dog-physiotherapy-explained", label: "Dog physiotherapy" },
      { href: "/guides/senior-dog-mobility-support", label: "Senior dog mobility" }
    ]
  },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => () => clearCloseTimer(), []);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="group flex items-center gap-1.5 border-b-2 border-transparent py-4 transition hover:border-ocean hover:text-ocean"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={item.href}
        className="group flex items-center gap-1.5 border-b-2 border-transparent py-4 transition hover:border-ocean hover:text-ocean"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {item.label}
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </Link>
      <div
        id={menuId}
        role="menu"
        className={`absolute left-0 top-full z-50 min-w-[240px] rounded-xl border border-sky-100 bg-white p-2 shadow-soft transition ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {item.children.map((child) => (
          <Link
            key={child.href + child.label}
            href={child.href}
            role="menuitem"
            className="block rounded-lg px-3 py-2.5 text-sm font-bold text-navy transition hover:bg-mist hover:text-ocean"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setExpandedMobile(null);
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

        <nav className="hidden items-center gap-5 text-sm font-bold text-navy lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <DesktopDropdown key={item.href + item.label} item={item} />
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
        className={`fixed inset-x-0 top-[65px] z-40 h-[calc(100dvh-65px)] overflow-y-auto bg-white/98 px-4 pb-6 pt-3 shadow-soft transition sm:top-[73px] sm:h-[calc(100dvh-73px)] lg:hidden ${menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
      >
        <nav aria-label="Mobile navigation" className="flex h-full flex-col">
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.href + item.label} className="rounded-xl bg-mist ring-1 ring-sky-100">
                <div className="flex min-h-12 items-stretch">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex flex-1 items-center px-4 py-3 text-base font-black text-navy"
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <button
                      type="button"
                      aria-label={`Expand ${item.label} links`}
                      aria-expanded={expandedMobile === item.label}
                      className="grid w-12 place-items-center text-ocean"
                      onClick={() => setExpandedMobile((current) => (current === item.label ? null : item.label))}
                    >
                      <ChevronDown size={18} className={`transition ${expandedMobile === item.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <span className="grid w-12 place-items-center text-ocean">
                      <ArrowRight size={17} />
                    </span>
                  )}
                </div>
                {item.children?.length && expandedMobile === item.label ? (
                  <div className="space-y-1 border-t border-sky-100 px-2 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 hover:bg-white hover:text-ocean"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
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
