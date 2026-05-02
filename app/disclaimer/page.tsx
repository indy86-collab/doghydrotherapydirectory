import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Veterinary Disclaimer",
  description: "Important veterinary and medical disclaimer for HyperDog Therapy content and listings.",
  alternates: {
    canonical: "/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <SimplePage
      eyebrow="Important"
      title="Veterinary Disclaimer"
      text="HyperDog Therapy is an informational directory and owner education resource. It does not provide veterinary diagnosis, treatment advice or emergency guidance."
      sections={[
        {
          title: "Not veterinary advice",
          text: "Content about hydrotherapy, physiotherapy, rehabilitation, dog swimming, underwater treadmill work and mobility support is general information only. It is not a diagnosis, prescription or replacement for care from a qualified veterinary professional."
        },
        {
          title: "Speak with your vet first",
          text: "Dog owners should consult their vet before starting hydrotherapy, physiotherapy, rehabilitation or a new exercise programme, especially after injury, surgery, lameness, pain or a diagnosed medical condition."
        },
        {
          title: "Emergencies and worsening symptoms",
          text: "If your dog is in pain, injured, suddenly lame, unable to stand, unusually tired, distressed, bleeding, unwell or deteriorating after activity, contact a vet or emergency veterinary service promptly."
        },
        {
          title: "Listings are informational",
          text: "Directory listings are provided to help owners find and compare services. HyperDog Therapy does not guarantee suitability, availability, qualifications, prices or outcomes for any centre."
        }
      ]}
    />
  );
}
