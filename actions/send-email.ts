"use server";

import { Resend } from "resend";
import { getNotificationHtml, getAutoReplyHtml } from "@/lib/email-templates";

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
    const notificationHtml = getNotificationHtml(name, email, `${message}\n\nPhone: ${phone}`);
    const autoReplyHtml = getAutoReplyHtml(name);

    // Run in parallel
    await Promise.all([
      // 1. Notification Email (To You)
      resend.emails.send({
        from: "system@send.smailselmi.com",
        to: "smailselmi101@gmail.com",
        replyTo: email,
        subject: `New Lead: ${name}`,
        html: notificationHtml,
      }),

      // 2. Auto-Reply Email (To User)
      resend.emails.send({
        from: "contact@send.smailselmi.com",
        to: email,
        subject: "Message Received - Kyodai Code",
        html: autoReplyHtml,
      }),
    ]);

    return { success: true };
  } catch (error: any) {
    console.error("Resend Error:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
