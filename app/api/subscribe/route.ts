import { NextResponse } from "next/server";

type SubscribeSubmission = {
  email?: string;
  botField?: string;
};

const recipientEmail = process.env.NEWSLETTER_SUBSCRIPTION_TO ?? "indyz_86@hotmail.com";
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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "Email delivery is not configured yet." }, { status: 500 });
  }

  let body: SubscribeSubmission;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid subscription." }, { status: 400 });
  }

  if (clean(body.botField)) {
    return NextResponse.json({ ok: true });
  }

  const email = clean(body.email).toLowerCase();
  if (!isEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; background: #F6FBFF; padding: 24px;">
      <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid #dbeafe;">
        <div style="background: linear-gradient(135deg, #08244A, #0E6BA8, #2CA6A4); color: #ffffff; padding: 24px;">
          <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 800;">New newsletter subscriber</p>
          <h1 style="margin: 0; font-size: 26px; line-height: 1.2;">HyperDog Therapy</h1>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 10px; color: #08244A; font-weight: 700;">Email address</p>
          <p style="margin: 0; color: #334155; font-size: 18px;">${escapeHtml(email)}</p>
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
      subject: "New HyperDog Therapy newsletter subscriber",
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json({ message: "We could not send the subscription. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
