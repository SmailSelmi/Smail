"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { ContactNotificationEmail } from "@/components/emails/contact-notification";
import { AutoReplyEmail } from "@/components/emails/auto-reply";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("⚠️ [DEV MOCK] RESEND_API_KEY is missing. Falling back to mock mode.");
      return null;
    }
    throw new Error("Missing RESEND_API_KEY environment variable");
  }
  return new Resend(apiKey);
};

export async function sendContactEmail(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const name = formData.get("from_name") as string;
  const email = formData.get("from_email") as string;
  const message = formData.get("message") as string;
  const phone = formData.get("phone_number") as string;
  const project_type = formData.get("project_type") as string;

  if (!name || !email || !message || !project_type) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    // Run in parallel
    const [notificationHtml, autoReplyHtml] = await Promise.all([
      render(<ContactNotificationEmail name={name} email={email} message={message} phone={phone} project_type={project_type} />),
      render(<AutoReplyEmail name={name} project_type={project_type} />),
    ]);

    const resend = getResendClient();

    if (!resend) {
      console.log("✨ [MOCK EMAIL SENT]");
      console.log({
        to_admin: "smailselmi101@gmail.com",
        to_user: email,
        lead_name: name,
        message: message
      });
      return { success: true };
    }

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
