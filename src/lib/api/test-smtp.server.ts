import nodemailer from "nodemailer";

export async function handleTestSmtp(_request: Request): Promise<Response> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? "noreply@innovsol.ai";
  const smtpTo   = process.env.SMTP_TO   ?? "hello@innovsol.ai";

  const envStatus = {
    SMTP_HOST: smtpHost ? `✓ (${smtpHost})` : "✗ MISSING",
    SMTP_USER: smtpUser ? `✓ (${smtpUser})` : "✗ MISSING",
    SMTP_PASS: smtpPass ? "✓ (hidden)"      : "✗ MISSING",
    SMTP_FROM: `✓ (${smtpFrom})`,
    SMTP_TO:   `✓ (${smtpTo})`,
  };

  if (!smtpHost || !smtpUser || !smtpPass) {
    return Response.json({ ok: false, step: "env", envStatus, error: "Missing required SMTP env vars" });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost, port: 587, secure: false, requireTLS: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.verify();
  } catch (err: any) {
    return Response.json({ ok: false, step: "verify", envStatus, error: err?.message ?? String(err) });
  }

  try {
    const info = await transporter.sendMail({
      from:    `"Innovsol Test" <${smtpFrom}>`,
      to:      smtpTo,
      subject: "✅ SMTP Test — Innovsol",
      text:    `Test email sent to ${smtpTo} from ${smtpFrom} via ${smtpHost}`,
    });
    return Response.json({
      ok: true, step: "sent", envStatus,
      messageId:   info.messageId,
      sesResponse: info.response,
      note:        `Email dispatched to ${smtpTo} — check inbox AND spam/junk folder`,
    });
  } catch (err: any) {
    return Response.json({ ok: false, step: "sendMail", envStatus, error: err?.message ?? String(err) });
  }
}
