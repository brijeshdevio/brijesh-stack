import { Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { transporter } from '../config';
import { ContactDto } from '../modules/form/dto/contact.schema';

const baseConfig = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
};

@Injectable()
export class EmailService {
  private transporter: Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >;
  constructor() {
    this.transporter = transporter;
  }

  async contactSendEmail(body: ContactDto) {
    const { name, email, subject, message } = body;

    return this.transporter.sendMail({
      ...baseConfig,
      subject: `📩 Portfolio Contact: ${subject}`,
      replyTo: email, // So you can click Reply and respond to the sender
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim(),

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:30px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">

        <table
          width="600"
          cellspacing="0"
          cellpadding="0"
          style="background:#ffffff;border-radius:10px;border:1px solid #e5e5e5;overflow:hidden;"
        >

          <tr>
            <td
              style="background:#111827;padding:24px;color:#ffffff;font-size:24px;font-weight:bold;"
            >
              📩 New Portfolio Contact
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">

              <table width="100%" cellpadding="10" cellspacing="0">

                <tr>
                  <td style="font-weight:bold;width:140px;">Name</td>
                  <td>${name}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;">Email</td>
                  <td>
                    <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="font-weight:bold;">Subject</td>
                  <td>${subject}</td>
                </tr>

              </table>

              <div
                style="
                  margin-top:25px;
                  padding:20px;
                  background:#f9fafb;
                  border-left:4px solid #2563eb;
                  white-space:pre-wrap;
                  line-height:1.6;
                "
              >
                ${message}
              </div>

            </td>
          </tr>

          <tr>
            <td
              style="
                padding:16px;
                text-align:center;
                background:#f3f4f6;
                color:#6b7280;
                font-size:12px;
              "
            >
              This message was sent from your portfolio contact form.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
    `,
    });
  }
}
