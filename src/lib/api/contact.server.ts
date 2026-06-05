import nodemailer from "nodemailer";

function getTransporter() {
  return nodemailer.createTransport({
    host:       process.env.SMTP_HOST,
    port:       587,
    secure:     false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function handleContactRequest(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, company, industry, enquiryType, message } = body;

  if (!firstName || !lastName || !email || !company) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? "noreply@innovsol.ai";
  const smtpTo   = process.env.SMTP_TO   ?? "hello@innovsol.ai";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("[contact] Missing SMTP env vars");
    return Response.json({ error: "Email service not configured. Please contact us at " + smtpTo }, { status: 500 });
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <style>
    body { font-family: Arial, sans-serif; color: #0f1923; background: #f8f9fc; margin: 0; padding: 0; }
    .wrap { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,.08); }
    .header { background: #3f6cb5; padding: 28px 32px; }
    .header h1 { color: #fff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -.02em; }
    .header p { color: rgba(255,255,255,.75); margin: 4px 0 0; font-size: 13px; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #5a6a7a; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f1923; }
    .divider { height: 1px; background: #e8eef7; margin: 20px 0; }
    .message-box { background: #f8f9fc; border-left: 3px solid #faa720; padding: 14px 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1e2d3d; white-space: pre-wrap; }
    .footer { background: #f8f9fc; padding: 16px 32px; border-top: 1px solid #e8eef7; font-size: 12px; color: #8fa3b8; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>New Website Enquiry</h1>
      <p>Submitted via innovsol.ai contact form</p>
    </div>
    <div class="body">
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:160px">
          <div class="label">Name</div>
          <div class="value">${firstName} ${lastName}</div>
        </div>
        <div class="field" style="flex:1;min-width:160px">
          <div class="label">Company</div>
          <div class="value">${company}</div>
        </div>
      </div>
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:160px">
          <div class="label">Work Email</div>
          <div class="value"><a href="mailto:${email}" style="color:#3f6cb5">${email}</a></div>
        </div>
        <div class="field" style="flex:1;min-width:160px">
          <div class="label">Phone</div>
          <div class="value">${phone || "—"}</div>
        </div>
      </div>
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:160px">
          <div class="label">Industry</div>
          <div class="value">${industry || "—"}</div>
        </div>
        <div class="field" style="flex:1;min-width:160px">
          <div class="label">Enquiry Type</div>
          <div class="value">${enquiryType || "—"}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message || "(no message provided)"}</div>
      </div>
    </div>
    <div class="footer">This email was sent automatically from the Innovsol website contact form.</div>
  </div>
</body>
</html>`;

  try {
    const transporter = getTransporter();
    const info = await transporter.sendMail({
      from:    `"${process.env.SMTP_FROM_NAME ?? "Innovsol Website"}" <${smtpFrom}>`,
      to:      smtpTo,
      replyTo: email,
      subject: `New Enquiry: ${firstName} ${lastName} — ${company}`,
      html,
    });
    console.log("[contact] ✓ Sent | messageId:", info.messageId, "| response:", info.response);
  } catch (err: any) {
    console.error("[contact] SMTP error:", err?.message);
    return Response.json({ error: "Failed to send email. Please contact us at " + smtpTo }, { status: 500 });
  }

  return Response.json({ success: true });
}
