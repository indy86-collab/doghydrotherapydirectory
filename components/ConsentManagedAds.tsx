"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const storageKey = "hyperdog_cookie_consent";
const consentChangeEvent = "hyperdog-cookie-consent-change";

function getAdSenseClient() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();
  if (!client) return null;
  // Expect ca-pub-XXXXXXXX format; ignore accidental empty/placeholder values
  if (!/^ca-pub-\d+$/.test(client)) return null;
  return client;
}

function hasMarketingConsent() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { marketing?: unknown };
    return parsed.marketing === true;
  } catch {
    return false;
  }
}

/**
 * Loads the AdSense script only when:
 * 1. NEXT_PUBLIC_ADSENSE_CLIENT is set (e.g. ca-pub-9868896840591922)
 * 2. The visitor has granted marketing/advertising cookie consent
 *
 * Keep the env var unset until after AdSense approval and live QA.
 */
export function ConsentManagedAds() {
  const client = getAdSenseClient();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!client) return;

    function syncConsent() {
      setEnabled(hasMarketingConsent());
    }

    syncConsent();
    window.addEventListener("storage", syncConsent);
    window.addEventListener(consentChangeEvent, syncConsent);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(consentChangeEvent, syncConsent);
    };
  }, [client]);

  if (!client || !enabled) return null;

  return (
    <Script
      id="adsense-loader"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}

type AdSenseUnitProps = {
  slot: string;
  className?: string;
  format?: string;
  fullWidthResponsive?: boolean;
};

/**
 * Optional ad unit — only mounts when AdSense client env is set and marketing consent is granted.
 * Do not place on pages until after approval; keep density to one unit per page initially.
 */
export function AdSenseUnit({
  slot,
  className = "",
  format = "auto",
  fullWidthResponsive = true
}: AdSenseUnitProps) {
  const client = getAdSenseClient();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!client) return;

    function syncConsent() {
      setEnabled(hasMarketingConsent());
    }

    syncConsent();
    window.addEventListener("storage", syncConsent);
    window.addEventListener(consentChangeEvent, syncConsent);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(consentChangeEvent, syncConsent);
    };
  }, [client]);

  useEffect(() => {
    if (!client || !enabled) return;
    try {
      const w = window as Window & { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // AdSense may throw if the script is still loading; safe to ignore.
    }
  }, [client, enabled, slot]);

  if (!client || !enabled) return null;

  return (
    <div className={className} aria-hidden="true">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
