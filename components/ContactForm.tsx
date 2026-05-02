"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const enquiryTypes = ["Listing update", "Correction", "Partnership", "Editorial", "General enquiry"];

type FormState = {
  name: string;
  email: string;
  enquiryType: string;
  subject: string;
  message: string;
  botField: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  enquiryType: "",
  subject: "",
  message: "",
  botField: ""
};

export function ContactForm() {
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

    const response = await fetch("/api/contact", {
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
    setMessage("Thanks, your message has been sent. We will get back to you soon.");
    setForm(initialState);
  }

  const inputClass = "mt-2 h-12 w-full rounded-xl border border-sky-100 bg-white px-4 text-sm text-navy outline-none transition focus:border-ocean focus:ring-4 focus:ring-sky-100";
  const labelClass = "text-sm font-black text-navy";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Your name
          <input value={form.name} onChange={(event) => updateField("name", event.target.value)} className={inputClass} placeholder="Your name" />
          {errors.name ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.name}</span> : null}
        </label>

        <label className={labelClass}>
          Email address
          <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className={inputClass} placeholder="you@example.co.uk" />
          {errors.email ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.email}</span> : null}
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Enquiry type
          <select value={form.enquiryType} onChange={(event) => updateField("enquiryType", event.target.value)} className={inputClass}>
            <option value="">Select enquiry type</option>
            {enquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          {errors.enquiryType ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.enquiryType}</span> : null}
        </label>

        <label className={labelClass}>
          Subject
          <input value={form.subject} onChange={(event) => updateField("subject", event.target.value)} className={inputClass} placeholder="How can we help?" />
          {errors.subject ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.subject}</span> : null}
        </label>
      </div>

      <label className={`${labelClass} mt-5 block`}>
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 min-h-36 w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm leading-6 text-navy outline-none transition focus:border-ocean focus:ring-4 focus:ring-sky-100"
          placeholder="Share the details of your enquiry."
        />
        {errors.message ? <span className="mt-1 block text-xs font-bold text-red-600">{errors.message}</span> : null}
      </label>

      <label className="hidden">
        Leave this blank
        <input value={form.botField} onChange={(event) => updateField("botField", event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">Messages go directly to the HyperDog Therapy inbox for review.</p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-leaf px-6 py-3 text-sm font-black text-white shadow-card transition hover:bg-leaf/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          Send message
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
