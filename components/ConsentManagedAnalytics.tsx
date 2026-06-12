"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const storageKey = "hyperdog_cookie_consent";
const consentChangeEvent = "hyperdog-cookie-consent-change";
const cloudflareBeacon = JSON.stringify({
  token: "b236f09217f046ebaae12c9aa85a31b1"
});

function hasAnalyticsConsent() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return false;

    const parsed = JSON.parse(raw) as { analytics?: unknown };
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

export function ConsentManagedAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function syncConsent() {
      setEnabled(hasAnalyticsConsent());
    }

    syncConsent();
    window.addEventListener("storage", syncConsent);
    window.addEventListener(consentChangeEvent, syncConsent);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(consentChangeEvent, syncConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Analytics />
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
        data-cf-beacon={cloudflareBeacon}
      />
    </>
  );
}
