"use client";

import { motion } from "framer-motion";
import { Button, Text } from "@gravity-ui/uikit";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { personalData } from "@/lib/data";
import { CountUp } from "@/components/ui/count-up";
import { Magnetic } from "@/components/ui/magnetic";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 lg:pt-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Available for remote work
          </div>

          <Text
            variant="display-2"
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight block"
          >
            Hi, I&apos;m{" "}
            <span className="text-primary">{personalData.name}</span> <br />
            <span className="text-foreground/80">{personalData.role}</span>
          </Text>

          <Text
            variant="body-3"
            className="text-lg text-muted-foreground max-w-lg leading-relaxed block"
          >
            {personalData.bio}
          </Text>

          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <Button
                size="l"
                view="action"
                className="rounded-full group"
                href="#projects"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Button
                size="l"
                view="outlined"
                className="rounded-full"
                href="#contact"
              >
                Contact Me
              </Button>
            </Magnetic>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end order-first lg:order-none"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Abstract Shapes behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/20 p-2 glass">
              <div
                className="w-full h-full rounded-full overflow-hidden relative select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src="/smailselmi.png"
                  alt={personalData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover pointer-events-none select-none"
                  draggable={false}
                  priority
                />
                {/* Transparent overlay to intercept interactions */}
                <div className="absolute inset-0 z-10" />
              </div>
            </div>

            {/* Float elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border shadow-lg"
            >
              <span className="text-3xl font-bold text-primary">
                <CountUp to={3} suffix="+" />
              </span>
              <p className="text-xs text-muted-foreground font-medium">
                Years Exp.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
