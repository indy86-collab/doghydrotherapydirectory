import { NextResponse } from "next/server";

type ContactSubmission = {
  name?: string;
  email?: string;
  enquiryType?: string;
  subject?: string;
  message?: string;
  botField?: string;
};

const recipientEmail = process.env.CONTACT_FORM_TO ?? "indyz_86@hotmail.com";
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
      <td style="padding: 10px 12px; border-bottom: 1px solid #dbeafe; color: #08244A; font-weight: 700; width: 150px;">${label}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #dbeafe; color: #334155;">${escapeHtml(value) || "-"}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "Email delivery is not configured yet." }, { status: 500 });
  }

  let body: ContactSubmission;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid contact enquiry." }, { status: 400 });
  }

  if (clean(body.botField)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email).toLowerCase();
  const enquiryType = clean(body.enquiryType);
  const subject = clean(body.subject);
  const message = clean(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (!enquiryType) errors.enquiryType = "Please choose an enquiry type.";
  if (subject.length < 3) errors.subject = "Please enter a subject.";
  if (message.length < 10) errors.message = "Please enter a message.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Please check the form fields.", errors }, { status: 400 });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; background: #F6FBFF; padding: 24px;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid #dbeafe;">
        <div style="background: linear-gradient(135deg, #08244A, #0E6BA8, #2CA6A4); color: #ffffff; padding: 24px;">
          <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 800;">New contact enquiry</p>
          <h1 style="margin: 0; font-size: 28px; line-height: 1.2;">${escapeHtml(subject)}</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Enquiry type", enquiryType)}
          ${row("Subject", subject)}
        </table>
        <div style="padding: 20px 24px;">
          <h2 style="margin: 0 0 10px; color: #08244A; font-size: 18px;">Message</h2>
          <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6;">${escapeHtml(message)}</p>
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
      subject: `New HyperDog Therapy contact: ${subject}`,
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json({ message: "We could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
