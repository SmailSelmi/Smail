"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { ContactNotificationEmail } from "@/components/emails/contact-notification";
import { AutoReplyEmail } from "@/components/emails/auto-reply";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const name = formData.get("from_name") as string;
  const email = formData.get("from_email") as string;
  const message = formData.get("message") as string;
  const phone = formData.get("phone_number") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    // Run in parallel
    const [notificationHtml, autoReplyHtml] = await Promise.all([
      render(<ContactNotificationEmail name={name} email={email} message={message} phone={phone} />),
      render(<AutoReplyEmail name={name} />),
    ]);

    await Promise.all([
      // 1. Notification Email (To You)
      resend.emails.send({
        from: "Portfolio System <system@smailselmi.com>",
        to: "smailselmi101@gmail.com",
        replyTo: email,
        subject: `New Lead: ${name}`,
        html: notificationHtml,
      }),

      // 2. Auto-Reply Email (To User)
      resend.emails.send({
        from: "Smail Selmi <contact@smailselmi.com>",
        to: email,
        subject: "Message Received - Kyodai Code",
        html: autoReplyHtml,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return { success: false, error: errorMessage };
  }
}
