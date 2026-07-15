"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

const serviceTypes = [
  "Dog hydrotherapy",
  "Canine physiotherapy",
  "Rehabilitation centre",
  "Dog swimming pool",
  "Underwater treadmill",
  "Senior dog mobility",
  "Other canine therapy service"
];

type FormState = {
  centreName: string;
  serviceType: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  message: string;
  botField: string;
};

const initialState: FormState = {
  centreName: "",
  serviceType: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  message: "",
  botField: ""
};

export function ListYourCentreForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setErrors({});

    const response = await fetch("/api/list-your-centre", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      setStatus("error");
      setMessage(payload.message ?? "Something went wrong. Please try again.");
      setErrors(payload.errors ?? {});
      return;
    }

    setStatus("success");
    setMessage("Thanks, your centre details have been sent. We will review them and follow up soon.");
    setForm(initialState);
  }

  const inputClass = "mt-2 h-12 w-full rounded-xl border border-sky-100 bg-white px-4 text-sm text-navy outline-none transition focus:border-ocean focus:ring-4 focus:ring-sky-100";
  const labelClass = "text-sm font-black text-navy";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Centre name
          <input value={form.centreName} onChange={(event) => updateField("centreName", event.target.value)} className={inputClass} placeholder="e.g. Paws in Motion Hydrotherapy" />
          {errors.centreName ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.centreName}</span> : null}
        </label>

        <label className={labelClass}>
          Main service
          <select value={form.serviceType} onChange={(event) => updateField("serviceType", event.target.value)} className={inputClass}>
            <option value="">Select service</option>
            {serviceTypes.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          {errors.serviceType ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.serviceType}</span> : null}
        </label>

        <label className={labelClass}>
          Your name
          <input value={form.contactName} onChange={(event) => updateField("contactName", event.target.value)} className={inputClass} placeholder="Centre owner or manager" />
          {errors.contactName ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.contactName}</span> : null}
        </label>

        <label className={labelClass}>
          Email address
          <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className={inputClass} placeholder="you@example.co.uk" />
          {errors.email ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.email}</span> : null}
        </label>

        <label className={labelClass}>
          Phone
          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className={inputClass} placeholder="Optional" />
        </label>

        <label className={labelClass}>
          Website
          <input value={form.website} onChange={(event) => updateField("website", event.target.value)} className={inputClass} placeholder="https://..." />
        </label>
      </div>

      <label className={`${labelClass} mt-5 block`}>
        Centre address or coverage area
        <input value={form.address} onChange={(event) => updateField("address", event.target.value)} className={inputClass} placeholder="Town, county, postcode or full address" />
        {errors.address ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.address}</span> : null}
      </label>

      <label className={`${labelClass} mt-5 block`}>
        Notes
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 min-h-32 w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm leading-6 text-navy outline-none transition focus:border-ocean focus:ring-4 focus:ring-sky-100"
          placeholder="Tell us about your facilities, qualifications, opening area, referral requirements or anything owners should know."
        />
      </label>

      <label className="hidden">
        Leave this blank
        <input value={form.botField} onChange={(event) => updateField("botField", event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          Submissions are reviewed before going live so the directory stays accurate and useful for dog owners.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-leaf px-6 py-3 text-sm font-black text-white shadow-card transition hover:bg-leaf/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          Submit centre
        </button>
      </div>

      {message ? (
        <div className={`mt-5 rounded-xl p-4 text-sm font-bold ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"}`}>
          {status === "success" ? <CheckCircle2 className="mr-2 inline" size={18} /> : null}
          {message}
        </div>
      ) : null}
    </form>
  );
}

export function ListingBenefits() {
  const benefits = [
    { icon: Sparkles, title: "Better local visibility", text: "Reach owners searching for hydrotherapy, physio and rehab support nearby." },
    { icon: Mail, title: "Simple enquiry flow", text: "New centre submissions arrive directly in the HyperDog review inbox." },
    { icon: MapPin, title: "Location-led discovery", text: "Centre cards connect to location pages, service tags and detailed profiles." },
    { icon: Phone, title: "Owner-ready details", text: "Add contact, website, facilities and referral notes in one focused form." }
  ];

  return (
    <div id="directory-benefits" className="scroll-mt-28 grid gap-4 sm:grid-cols-2">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <article key={benefit.title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-cyan-50 text-teal">
              <Icon size={23} />
            </span>
            <h2 className="mt-4 text-lg font-black text-navy">{benefit.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
          </article>
        );
      })}
    </div>
  );
}
