import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How HyperDog Therapy compiles listings, writes guides and handles corrections.",
  alternates: {
    canonical: "/editorial-policy"
  }
};

export default function EditorialPolicyPage() {
  return (
    <SimplePage
      eyebrow="Trust"
      title="Editorial Policy"
      text="HyperDog Therapy aims to publish useful, factual, dog-owner-first information about hydrotherapy, physiotherapy, rehabilitation and dog swimming services."
      sections={[
        {
          title: "How listings are compiled",
          text: "Directory listings are compiled from public business information, submitted centre details and available review or map data. Listings are informational and should be checked with the centre before booking."
        },
        {
          title: "How content is reviewed",
          text: "Guides are written to help owners understand terminology, questions to ask and when veterinary advice matters. Content is reviewed for clarity, caution around health claims and usefulness before publication."
        },
        {
          title: "Corrections and updates",
          text: "Centre owners and dog owners can request corrections through the contact page. Useful correction requests include the centre name, current page URL, the detail that should change and a source where possible."
        },
        {
          title: "No veterinary replacement",
          text: "The site does not diagnose, prescribe or replace veterinary advice. Health-related content is general education only, and owners should speak with their vet before starting hydrotherapy, physiotherapy or rehabilitation."
        },
        {
          title: "Commercial independence",
          text: "A listing does not mean HyperDog Therapy has inspected, certified or medically endorsed a centre. If advertising or sponsored placements are introduced in future, they should be clearly identified."
        }
      ]}
    />
  );
}
