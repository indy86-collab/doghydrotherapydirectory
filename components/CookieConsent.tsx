"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Settings2, X } from "lucide-react";

type ConsentChoice = "accepted" | "rejected" | "custom";

const storageKey = "hyperdog_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = window.localStorage.getItem(storageKey);
    setVisible(!existing);
  }, []);

  function saveConsent(choice: ConsentChoice, preferences = { analytics, marketing }) {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        choice,
        necessary: true,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        savedAt: new Date().toISOString()
      })
    );
    setVisible(false);
    setManageOpen(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-sky-100 bg-white p-4 shadow-soft sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-teal">Cookie preferences</p>
            <h2 className="mt-1 text-xl font-black text-navy">Manage Consent</h2>
          </div>
          <button
            type="button"
            aria-label="Dismiss cookie banner"
            onClick={() => saveConsent("rejected", { analytics: false, marketing: false })}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sky-100 text-navy transition hover:border-ocean hover:text-ocean"
          >
            <X size={19} />
          </button>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          We use necessary cookies to keep the site working. With your consent, we may later use analytics or advertising cookies to understand site use and support the directory. You can change your choice before optional cookies are enabled.
        </p>
        <p className="mt-2 text-xs font-semibold text-slate-500">
          Read our <Link href="/privacy-policy" className="text-ocean underline">Privacy Policy</Link> and <Link href="/cookies" className="text-ocean underline">Cookies Policy</Link>.
        </p>

        {manageOpen ? (
          <div className="mt-4 grid gap-3 rounded-xl bg-mist p-4 ring-1 ring-sky-100">
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-black text-navy">Necessary cookies</span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">Required for core site functions and form security.</span>
              </span>
              <input type="checkbox" checked disabled className="mt-1 h-5 w-5 accent-ocean" />
            </label>
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-black text-navy">Analytics cookies</span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">Help us understand which pages are useful.</span>
              </span>
              <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-1 h-5 w-5 accent-ocean" />
            </label>
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-black text-navy">Advertising cookies</span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">Reserved for future ad measurement if ads are added after approval.</span>
              </span>
              <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="mt-1 h-5 w-5 accent-ocean" />
            </label>
          </div>
        ) : null}

        <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto_auto]">
          <button
            type="button"
            onClick={() => setManageOpen((open) => !open)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-ocean px-4 py-3 text-sm font-black text-ocean"
          >
            <Settings2 size={17} />
            {manageOpen ? "Hide preferences" : "Manage consent"}
          </button>
          <button
            type="button"
            onClick={() => saveConsent("rejected", { analytics: false, marketing: false })}
            className="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm font-black text-navy"
          >
            Reject optional
          </button>
          <button
            type="button"
            onClick={() => saveConsent(manageOpen ? "custom" : "accepted", manageOpen ? { analytics, marketing } : { analytics: true, marketing: true })}
            className="min-h-12 rounded-xl bg-leaf px-4 py-3 text-sm font-black text-white shadow-card"
          >
            {manageOpen ? "Save choices" : "Accept all"}
          </button>
        </div>
      </div>
    </div>
  );
}
