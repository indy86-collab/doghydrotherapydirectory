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
    default: "HyperDog Therapy | Find Dog Hydrotherapy & Canine Rehab Near You",
    template: "%s | HyperDog Therapy"
  },
  description: "Find dog hydrotherapy centres, canine physiotherapists, rehabilitation clinics and dog swimming pools near you.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    siteName: SITE_BRAND_NAME,
    title: "HyperDog Therapy | Find Dog Hydrotherapy & Canine Rehab Near You",
    description: "Find dog hydrotherapy centres, canine physiotherapists, rehabilitation clinics and dog swimming pools near you.",
    url: siteUrl,
    images: [{ url: getDefaultOgImageUrl(), width: 1200, height: 630, alt: "Dog hydrotherapy directory" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperDog Therapy | Dog Hydrotherapy Directory UK",
    description: "Find dog hydrotherapy centres, canine physiotherapy and rehab near you.",
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
