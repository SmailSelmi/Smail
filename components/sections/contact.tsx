"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactButton } from "@/components/ui/contact-button";
import { Button, Text, TextInput, TextArea } from "@gravity-ui/uikit";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail } from "lucide-react";
import { personalData } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { NotificationSheet } from "@/components/ui/notification-sheet";

const formSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Invalid email address"),
  phone_number: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(
      /^(05|06|07)\d{8}$/,
      "Invalid number. Must start with 05, 06, or 07",
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Pre-fill message based on context
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      // Decode URI component just in case
      const projectName = decodeURIComponent(ref);
      setValue(
        "message",
        `Hi Smail, I saw your work on ${projectName} and I'm interested in building something similar.`,
      );
    }
  }, [searchParams, setValue]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS environment variables");
      }

      // Offline Check
      if (!navigator.onLine) {
        throw new Error(
          "You appear to be offline. Please check your internet connection.",
        );
      }

      if (form.current) {
        // Run API and Animation in parallel
        // We ensure the animation plays for at least 3 seconds/1 cycle
        const animationPromise = new Promise((resolve) =>
          setTimeout(resolve, 4500),
        );

        let emailPromise;

        try {
          emailPromise = emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey,
          );
        } catch (error) {
          // Immediate failure in setup
          throw error;
        }

        // Wait for both. If email fails, it will throw and cancel the flow (handled in catch)
        // Ideally we might want animation to finish even on error, but showing error state
        // immediately is better for feedback if it fails.
        // However, for "Immersion", we could use allSettled, but let's stick to robust feedback.
        await Promise.all([emailPromise, animationPromise]);

        console.log(values);
        setStatus("success");
        reset();

        // Auto-close success message after 5 seconds
        setTimeout(() => {
          setStatus((prev) => (prev === "success" ? "idle" : prev));
        }, 5000);
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      // Specific handling for common errors could go here
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-10 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <Text variant="display-2" className="mb-4 block">
            Get In Touch
          </Text>
          <Text variant="body-2" className="text-muted-foreground block">
            Have a project in mind?
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Text variant="header-2" className="mb-4 block">
              Let&apos;s Talk
            </Text>
            <Text
              variant="body-1"
              className="text-muted-foreground mb-8 text-lg block"
            >
              I&apos;m currently available for freelance projects and remote
              jobs. If you have a project that you want to get started, think
              you need my help with something or just fancy saying hey, then get
              in touch.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-5 md:p-8">
              <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium">
                    Name
                  </label>
                  <TextInput
                    {...register("from_name")}
                    placeholder="John Doe"
                    size="l"
                    className="w-full"
                    hasClear
                    name="from_name"
                  />
                  {errors.from_name && (
                    <Text color="danger" variant="caption-1">
                      {errors.from_name.message}
                    </Text>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium">
                    Email
                  </label>
                  <TextInput
                    {...register("from_email")}
                    placeholder="john@example.com"
                    size="l"
                    className="w-full"
                    hasClear
                    name="from_email"
                  />
                  {errors.from_email && (
                    <Text color="danger" variant="caption-1">
                      {errors.from_email.message}
                    </Text>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone_number" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <TextInput
                    {...register("phone_number")}
                    placeholder="0555555555"
                    size="l"
                    className="w-full"
                    hasClear
                    type="tel"
                    name="phone_number"
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.phone_number && (
                    <Text color="danger" variant="caption-1">
                      {errors.phone_number.message}
                    </Text>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <TextArea
                    {...register("message")}
                    placeholder="Tell me about your project..."
                    size="l"
                    className="w-full"
                    rows={4}
                    name="message"
                  />
                  {errors.message && (
                    <Text color="danger" variant="caption-1">
                      {errors.message.message}
                    </Text>
                  )}
                </div>

                <ContactButton
                  isSubmitting={isSubmitting}
                  isSuccess={status === "success"}
                />
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Notification Sheet */}
      <NotificationSheet status={status} onClose={() => setStatus("idle")} />
    </section>
  );
}
