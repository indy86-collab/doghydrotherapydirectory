import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyperdogtherapy.co.uk"),
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
    url: "https://hyperdogtherapy.co.uk"
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
      </body>
    </html>
  );
}
