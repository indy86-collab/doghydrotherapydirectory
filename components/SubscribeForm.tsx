"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, botField })
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message ?? "Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
      setMessage("Thanks, you are on the list.");
    } catch {
      setStatus("error");
      setMessage("Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(event) => setBotField(event.target.value)}
          className="hidden"
        />
        <div className="relative min-w-0 flex-1">
          <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            id="footer-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="w-full min-w-0 rounded-lg border-0 bg-white py-3 pl-9 pr-3 text-sm text-navy outline-none ring-1 ring-white/20 placeholder:text-slate-400"
          />
        </div>
        <button disabled={status === "submitting"} className="min-h-12 rounded-lg bg-leaf px-4 py-3 text-sm font-bold text-white transition hover:bg-leaf/90 disabled:cursor-not-allowed disabled:opacity-70">
          {status === "submitting" ? "Sending" : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className={`mt-2 text-xs font-bold ${status === "success" ? "text-cyan-100" : "text-red-200"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
