type SendEmailInput = {
  html: string;
  replyTo: string;
  subject: string;
  to: string;
};

const resendEndpoint = "https://api.resend.com/emails";

export const defaultFromEmail =
  process.env.RESEND_FROM_EMAIL ?? "Dog Therapy Centres <hello@dogtherapycentres.co.uk>";

export async function sendEmail({ html, replyTo, subject, to }: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "RESEND_API_KEY is not configured." };
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: defaultFromEmail,
      to: [to],
      reply_to: replyTo,
      subject,
      html
    })
  });

  if (response.ok) {
    return { ok: true, status: response.status, error: "" };
  }

  const error = await response.text();
  console.error("Resend email delivery failed", {
    status: response.status,
    from: defaultFromEmail,
    to,
    error
  });

  return { ok: false, status: response.status, error };
}
