import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How HyperDog Therapy handles contact form data, analytics, cookies and future advertising-related data.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy Policy"
      text="HyperDog Therapy collects only the information needed to operate the directory, respond to enquiries, improve the website and keep listings useful for dog owners."
      sections={[
        {
          title: "Information we may collect",
          text: "We may collect information that you provide directly, along with basic technical information created when you use the website.",
          items: [
            "Contact form details such as name, email address, enquiry type, subject and message.",
            "Centre submission or correction details such as business name, address, website, phone number, services and supporting notes.",
            "Newsletter subscription email addresses where a visitor chooses to subscribe.",
            "Technical information such as browser type, device type, pages visited, approximate location and referral source."
          ]
        },
        {
          title: "How information is used",
          text: "Information is used to reply to enquiries, review listing corrections, understand site performance, prevent misuse and improve directory content."
        },
        {
          title: "Analytics, cookies and future advertising",
          text: "The site may use cookies or similar technologies for essential functionality and privacy-conscious analytics. If advertising such as Google AdSense is added in future, cookies or advertising identifiers may be used to serve, measure and limit ads according to the relevant provider policies."
        },
        {
          title: "Sharing and retention",
          text: "We do not sell personal data. Information may be processed by trusted providers used for hosting, form delivery, analytics or email. We keep information only for as long as needed for the purpose it was provided."
        },
        {
          title: "Your rights",
          text: "You can request access, correction or deletion of personal information you have provided, subject to legal and operational requirements. Contact hello@hyperdogtherapy.co.uk for privacy requests."
        }
      ]}
    />
  );
}
