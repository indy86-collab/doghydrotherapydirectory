import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How HyperDog Therapy uses cookies and similar technologies on the directory website.",
  alternates: {
    canonical: "/cookies"
  }
};

export default function CookiesPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Cookies Policy"
      text="HyperDog Therapy uses necessary storage for core site preferences. Optional analytics scripts load only after analytics consent is saved. Advertising scripts (such as Google AdSense) load only when advertising is enabled on the site and advertising consent is saved."
      sections={[
        {
          title: "Essential cookies",
          text: "Some cookies are needed for core site functions such as page navigation, form security and remembering basic preferences."
        },
        {
          title: "Analytics cookies",
          text: "With your consent, we may use privacy-conscious analytics to understand which pages are helpful, how visitors find the directory and where the site can be improved. If you reject optional cookies, analytics scripts should not load."
        },
        {
          title: "Advertising cookies",
          text: "If Google AdSense or similar advertising is enabled after approval, advertising cookies or identifiers may be used to serve, personalise, measure and limit ads. These scripts load only after you grant advertising consent via the cookie banner. You can reject advertising cookies and still use the directory."
        },
        {
          title: "Third-party services",
          text: "Embedded tools, maps, analytics, advertising or linked services may set their own cookies when you interact with them. Their use is governed by the relevant provider's policy."
        },
        {
          title: "Managing cookies",
          text: "You can block or delete cookies through your browser settings, or clear the HyperDog consent choice and set preferences again on your next visit. Some features may not work as expected if essential cookies are disabled."
        }
      ]}
    />
  );
}
