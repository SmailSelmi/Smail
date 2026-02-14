"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Globe, User, Mail, Phone, Layers, MessageSquare, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactButton } from "@/components/ui/contact-button";
import { Text, TextInput, TextArea, Select } from "@gravity-ui/uikit";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { sendContactEmail } from "@/actions/send-email";
import { NotificationSheet } from "@/components/ui/notification-sheet";
import confetti from "canvas-confetti";

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
  project_type: z.string().min(1, "Please select a project type"),
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
    control,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "Hi Smail, I'm reaching out to discuss a potential project. I was impressed by your portfolio's focus on high-performance digital experiences and would love to explore a collaboration."
    }
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
      // Offline Check
      if (!navigator.onLine) {
        throw new Error(
          "You appear to be offline. Please check your internet connection.",
        );
      }

      // Create FormData
      const formData = new FormData();
      formData.append("from_name", values.from_name);
      formData.append("from_email", values.from_email);
      formData.append("phone_number", values.phone_number);
      formData.append("message", values.message);
      formData.append("project_type", values.project_type);

      // Run API and Animation in parallel
      // We ensure the animation plays for at least 4.5 seconds
      const animationPromise = new Promise((resolve) =>
        setTimeout(resolve, 4500),
      );

      const emailPromise = sendContactEmail(formData);

      const [emailResult] = await Promise.all([
        emailPromise,
        animationPromise,
      ]);

      if (!emailResult.success) {
        throw new Error(emailResult.error || "Failed to send email");
      }

      if (form.current) {
        setStatus("success");
        
        // Trigger Confetti
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#fca311", "#ffffff", "#18181b"]
        });

        reset();

        // Auto-close success message after 5 seconds
        setTimeout(() => {
          if (form.current) {
            setStatus((prev) => (prev === "success" ? "idle" : prev));
          }
        }, 5000);
      }
    } catch (error: unknown) {
      console.error("Email Error:", error);
      // Specific handling for common errors could go here
      if (form.current) {
        setStatus("error");
      }
    } finally {
      if (form.current) {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <section
      id="contact"
      className="py-10 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <Text variant="display-2" className="mb-4 block">
            Start a Conversation
          </Text>
          <Text variant="body-2" className="text-muted-foreground block">
            Great projects begin with a single message
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <Text variant="caption-1" className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
                Available for Projects
              </Text>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Text variant="display-1" className="block text-3xl md:text-4xl font-black tracking-tight">
                Let&apos;s Build Something
                <span className="text-primary"> Amazing</span>
              </Text>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Text
                variant="body-1"
                className="text-muted-foreground text-base leading-relaxed block"
              >
                I&apos;m currently available for freelance projects and remote
                opportunities. Whether you need a full product design, a high-performance
                web application, or just want to explore an idea — let&apos;s connect.
              </Text>
            </motion.div>

            {/* Trust Cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 text-center group/card">
                <motion.div
                  className="flex justify-center mb-2 text-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap className="w-6 h-6" fill="currentColor" />
                </motion.div>
                <Text variant="header-1" className="text-primary font-black block text-lg">&lt; 2h</Text>
                <Text variant="caption-1" className="text-muted-foreground text-[11px] block">Response Time</Text>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 text-center group/card">
                <motion.div
                  className="flex justify-center mb-2 text-primary"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="w-6 h-6" />
                </motion.div>
                <Text variant="header-1" className="text-primary font-black block text-lg">15+</Text>
                <Text variant="caption-1" className="text-muted-foreground text-[11px] block">Projects Done</Text>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 text-center group/card">
                <motion.div
                  className="flex justify-center mb-2 text-primary"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-6 h-6" />
                </motion.div>
                <Text variant="header-1" className="text-primary font-black block text-lg">Remote</Text>
                <Text variant="caption-1" className="text-muted-foreground text-[11px] block">Worldwide</Text>
              </div>
            </motion.div>


            {/* Decorative accent line */}
            <div className="hidden lg:block h-px w-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-4 md:p-10 border-primary/10 hover:border-primary/20 transition-all duration-500">
              {/* Form Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <Text variant="header-1" className="font-black block">Send a Message</Text>
                    <Text variant="caption-1" className="text-muted-foreground text-[11px] block">All fields are required</Text>
                  </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
              </div>

              <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name & Email - 2 column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-sm font-semibold flex items-center gap-2 text-foreground/80">
                      <User className="w-3.5 h-3.5 text-primary" />
                      Name
                    </label>
                    <TextInput
                      {...register("from_name")}
                      placeholder="Your full name"
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
                    <label htmlFor="from_email" className="text-sm font-semibold flex items-center gap-2 text-foreground/80">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      Email
                    </label>
                    <TextInput
                      {...register("from_email")}
                      placeholder="you@example.com"
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
                </div>

                {/* Phone & Project Type - 2 column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="phone_number" className="text-sm font-semibold flex items-center gap-2 text-foreground/80">
                      <Phone className="w-3.5 h-3.5 text-primary" />
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
                    <label className="text-sm font-semibold flex items-center gap-2 text-foreground/80">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      Project Type
                    </label>
                    <Controller
                      name="project_type"
                      control={control}
                      render={({ field }) => (
                        <Select
                          size="l"
                          className="w-full"
                          placeholder="Select what you need"
                          value={field.value ? [field.value] : []}
                          onUpdate={(value) => field.onChange(value[0])}
                          options={[
                            { value: "uiux", content: "UI/UX Design" },
                            { value: "development", content: "Web Development" },
                            { value: "branding", content: "Brand Identity" },
                            { value: "other", content: "Other" },
                          ]}
                        />
                      )}
                    />
                    {errors.project_type && (
                      <Text color="danger" variant="caption-1">
                        {errors.project_type.message}
                      </Text>
                    )}
                  </div>
                </div>

                {/* Message - full width */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2 text-foreground/80">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                    Message
                  </label>
                  <TextArea
                    {...register("message")}
                    placeholder="Tell me about your project, goals, and timeline..."
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

                {/* Privacy note */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <Shield className="w-3 h-3 text-emerald-500/60" />
                  <Text variant="caption-1" className="text-emerald-400/60 text-[10px]">
                    Your information is secure and will never be shared
                  </Text>
                </div>
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
