import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How HyperDog Therapy uses cookies and similar technologies on the directory website."
};

export default function CookiesPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Cookies Policy"
      text="HyperDog Therapy may use cookies and similar technologies to keep the website working, understand usage and improve directory features."
      sections={[
        {
          title: "Essential cookies",
          text: "Some cookies are needed for core site functions such as page navigation, form security and remembering basic preferences."
        },
        {
          title: "Analytics cookies",
          text: "We may use privacy-conscious analytics to understand which pages are helpful, how visitors find the directory and where the site can be improved."
        },
        {
          title: "Third-party services",
          text: "Embedded tools, maps, analytics or linked services may set their own cookies when you interact with them. Their use is governed by the relevant provider's policy."
        },
        {
          title: "Managing cookies",
          text: "You can block or delete cookies through your browser settings. Some features may not work as expected if essential cookies are disabled."
        }
      ]}
    />
  );
}
