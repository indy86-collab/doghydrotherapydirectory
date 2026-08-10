import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ConsentManagedAnalytics } from "@/components/ConsentManagedAnalytics";
import { ConsentManagedAds } from "@/components/ConsentManagedAds";
import { buildOrganizationJsonLd, buildWebSiteJsonLd, getDefaultOgImageUrl } from "@/lib/seo";
import { getSiteUrl, SITE_BRAND_NAME } from "@/lib/site";

const siteUrl = getSiteUrl();

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HyperDog Therapy | UK Dog Hydrotherapy Centres Near You",
    template: "%s | HyperDog Therapy"
  },
  description:
    "Find UK dog hydrotherapy centres near you — compare pools, underwater treadmills, physiotherapy and rehab listings, then contact providers before you book.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    siteName: SITE_BRAND_NAME,
    title: "HyperDog Therapy | UK Dog Hydrotherapy Centres Near You",
    description:
      "Find UK dog hydrotherapy centres near you — compare pools, underwater treadmills, physiotherapy and rehab listings, then contact providers before you book.",
    url: siteUrl,
    images: [{ url: getDefaultOgImageUrl(), width: 1200, height: 630, alt: "Dog hydrotherapy directory" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperDog Therapy | UK Dog Hydrotherapy Directory",
    description: "Find dog hydrotherapy, physiotherapy and rehab centres near you across the UK.",
    images: [getDefaultOgImageUrl()]
  }
};

const siteJsonLd = [buildOrganizationJsonLd(), buildWebSiteJsonLd()];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <ConsentManagedAnalytics />
        <ConsentManagedAds />
      </body>
    </html>
  );
}
