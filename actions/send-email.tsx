"use server";

import { Resend } from "resend";
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
    await Promise.all([
      // 1. Notification Email (To You)
      resend.emails.send({
        from: "Portfolio System <system@smailselmi.com>",
        to: "smailselmi101@gmail.com",
        replyTo: email,
        subject: `New Lead: ${name}`,
        react: <ContactNotificationEmail name={name} email={email} message={message} phone={phone} />,
      }),

      // 2. Auto-Reply Email (To User)
      resend.emails.send({
        from: "Smail Selmi <contact@smailselmi.com>",
        to: email,
        subject: "Message Received - Kyodai Code",
        react: <AutoReplyEmail name={name} />,
      }),
    ]);

    return { success: true };
  } catch (error: any) {
    console.error("Resend Error:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
