import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the HyperDog Therapy directory and submitting canine therapy centre information.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms & Conditions"
      text="By using HyperDog Therapy, you agree to use the directory responsibly and understand that listings are provided for information only."
      sections={[
        {
          title: "Directory information",
          text: "We work to keep listings accurate, but centre details, services, prices, opening times and availability can change. Always confirm important details directly with the centre before booking."
        },
        {
          title: "Health and veterinary advice",
          text: "HyperDog Therapy is not a veterinary service and does not provide medical advice. Hydrotherapy, physiotherapy and rehabilitation should be discussed with your vet before treatment begins."
        },
        {
          title: "Centre submissions",
          text: "If you submit or update a centre listing, you confirm that the information is accurate and that you have authority to provide it. We may edit, reject or remove submissions to keep the directory useful and trustworthy."
        },
        {
          title: "External links",
          text: "Listings and guides may link to third-party websites. Those websites are controlled by their owners, and their content, policies and booking processes are not managed by HyperDog Therapy."
        },
        {
          title: "Limitation of liability",
          text: "HyperDog Therapy is provided on an as-is informational basis. To the fullest extent permitted by law, we are not responsible for losses arising from reliance on listing details, third-party websites, treatment decisions or provider availability."
        },
        {
          title: "Use of the website",
          text: "You must not misuse the site, attempt to disrupt it, copy large parts of the directory without permission or submit false, misleading or unlawful content."
        }
      ]}
    />
  );
}
