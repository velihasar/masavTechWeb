import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm alanları doldurunuz.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_SERVER || 'webmail.veriupmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USERNAME || 'no-reply@masavtech.com';
    const smtpPass = process.env.SMTP_PASSWORD || 'Adana.14531453';
    const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'vhas_ar@hotmail.com';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const escapeHtml = (str: string) =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    await transporter.sendMail({
      from: `"MasavTech İletişim Formu" <${smtpUser}>`,
      to: targetEmail,
      replyTo: email,
      subject: `[MasavTech İletişim] ${name} yeni bir mesaj gönderdi`,
      text: `MasavTech Web Sitesi İletişim Formu\n\nAd Soyad / Kurum: ${name}\nE-Posta: ${email}\n\nMesaj:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #2c98f6; padding-bottom: 12px;">
            MasavTech İletişim &amp; Proje Formu
          </h2>
          <p style="margin: 12px 0; color: #334155; font-size: 14px;">
            <strong>Ad Soyad / Kurum:</strong> ${escapeHtml(name)}
          </p>
          <p style="margin: 12px 0; color: #334155; font-size: 14px;">
            <strong>E-Posta Adresi:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #2c98f6;">${escapeHtml(email)}</a>
          </p>
          <div style="margin-top: 18px; padding: 16px; border-radius: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0;">
            <strong style="display: block; color: #0f172a; font-size: 13px; margin-bottom: 8px;">Proje Özeti &amp; Mesaj:</strong>
            <p style="margin: 0; color: #1e293b; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
            Bu e-postayı doğrudan yanıtlayarak (Reply) göndericiye (${escapeHtml(email)}) cevap verebilirsiniz.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}

