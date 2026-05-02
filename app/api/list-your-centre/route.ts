import { NextResponse } from "next/server";

type Submission = {
  centreName?: string;
  serviceType?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  message?: string;
  botField?: string;
};

const recipientEmail = process.env.LISTING_SUBMISSION_TO ?? "indyz_86@hotmail.com";
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "HyperDog Therapy <onboarding@resend.dev>";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #dbeafe; color: #08244A; font-weight: 700; width: 170px;">${label}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #dbeafe; color: #334155;">${escapeHtml(value) || "-"}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "Email delivery is not configured yet." }, { status: 500 });
  }

  let body: Submission;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  if (clean(body.botField)) {
    return NextResponse.json({ ok: true });
  }

  const centreName = clean(body.centreName);
  const serviceType = clean(body.serviceType);
  const contactName = clean(body.contactName);
  const email = clean(body.email).toLowerCase();
  const phone = clean(body.phone);
  const website = clean(body.website);
  const address = clean(body.address);
  const message = clean(body.message);

  const errors: Record<string, string> = {};
  if (centreName.length < 2) errors.centreName = "Please enter the centre name.";
  if (!serviceType) errors.serviceType = "Please select a service type.";
  if (contactName.length < 2) errors.contactName = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (address.length < 6) errors.address = "Please enter the centre location.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Please check the form fields.", errors }, { status: 400 });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; background: #F6FBFF; padding: 24px;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid #dbeafe;">
        <div style="background: linear-gradient(135deg, #08244A, #0E6BA8, #2CA6A4); color: #ffffff; padding: 24px;">
          <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 800;">New listing enquiry</p>
          <h1 style="margin: 0; font-size: 28px; line-height: 1.2;">${escapeHtml(centreName)}</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          ${row("Service type", serviceType)}
          ${row("Contact name", contactName)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Website", website)}
          ${row("Address / location", address)}
        </table>
        <div style="padding: 20px 24px;">
          <h2 style="margin: 0 0 10px; color: #08244A; font-size: 18px;">Additional notes</h2>
          <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6;">${escapeHtml(message) || "No additional notes provided."}</p>
        </div>
      </div>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: email,
      subject: `New HyperDog Therapy listing: ${centreName}`,
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json({ message: "We could not send the listing enquiry. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
