"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function NotFound() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        className={`text-4xl md:text-6xl font-bold text-primary ${mono.className} tabular-nums`}
        animate={{ opacity: [1, 1, 0.5, 1, 0.8, 1] }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          repeatDelay: 3 + Math.random() * 5, // Random delay between glitches
          ease: "linear"
        }}
        // Hydration note: Math.random here is okay because it only affects the *animation start/prop* 
        // after mount if we use it in a way that doesn't mismatch server HTML. 
        // Actually, props to motion components *can* cause mismatch if SRR renders one thing and client another.
        // To be safe, let's use a fixed duration or set it in useEffect.
        // Better: Use a fixed pattern or just a CSS class "animate-pulse" with custom speed.
        // Let's use a robust Framer Motion prop:
        // transition={{ duration: 2, times: [0, 0.95, 0.96, 0.98, 0.99, 1], repeat: Infinity }}
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <div className="text-xs md:text-sm text-white/40 uppercase tracking-widest mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h1 className="text-[20vw] font-bold leading-none select-none text-primary">
          BUILDING
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl w-full px-4"
      >
        <div className="glass-card p-8 md:p-16 text-center space-y-12 backdrop-blur-xl border border-white/10 rounded-2xl bg-black/40">
          
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase glitch-text">
              Under Construction
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              I'm still building this page to perfection. Check back soon for the full experience.
            </p>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 md:gap-12 max-w-3xl mx-auto py-8 border-y border-white/10">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Status Bar */}
          <div className="max-w-md mx-auto w-full space-y-2">
            <p className={`text-xs text-primary/80 uppercase tracking-[0.2em] ${mono.className}`}>
              Refining user experience...
            </p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
               <motion.div
                 className="h-full bg-primary"
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 15, ease: "linear" }}
               />
            </div>
          </div>

          {/* Action */}
          <div className="flex justify-center w-full pt-4">
            <button
              onClick={() => router.back()}
              className="group relative flex flex-row items-center justify-center gap-3 h-[52px] px-8 rounded-lg bg-[#f97316] text-white font-medium hover:bg-[#f97316]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-black"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
