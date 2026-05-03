import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const cloudflareBeacon = JSON.stringify({
  token: "b236f09217f046ebaae12c9aa85a31b1"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HyperDog Therapy | Find Dog Hydrotherapy & Canine Rehab Near You",
    template: "%s | HyperDog Therapy"
  },
  description: "Find dog hydrotherapy centres, canine physiotherapists, rehabilitation clinics and dog swimming pools near you.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    siteName: "HyperDog Therapy",
    title: "HyperDog Therapy | Find Dog Hydrotherapy & Canine Rehab Near You",
    description: "Find dog hydrotherapy centres, canine physiotherapists, rehabilitation clinics and dog swimming pools near you.",
    url: siteUrl
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={cloudflareBeacon}
        />
        {/* End Cloudflare Web Analytics */}
      </body>
    </html>
  );
}
