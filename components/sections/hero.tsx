"use client";

import { motion } from "framer-motion";
import { Button, Text } from "@gravity-ui/uikit";
import { ArrowRight, Instagram, Mail } from "lucide-react";
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

          <div className="flex items-center gap-6 text-muted-foreground pt-4">

            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href={personalData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            {/* Behance Icon Placeholder (using Link for now as generic) */}
            <a
              href={personalData.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 256 256" 
                width="24" 
                height="24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M231.2,70.9h-64.2V55h64.2V70.9z M124.3,136.3c4.1,6.4,6.2,14.2,6.2,23.3c0,9.5-2.3,17.9-7.1,25.4 c-3,5-6.8,9.1-11.3,12.5c-5.1,3.9-11.1,6.6-18,8c-8.2,1.7-15.7,2.5-22.3,2.5H0V48.4h77c19.4,0.3,33.2,5.9,41.3,17 c4.9,6.8,7.3,14.9,7.3,24.3c0,9.7-2.4,17.6-7.4,23.5c-2.7,3.3-6.8,6.3-12.1,9.1C114,125.2,120.2,129.9,124.3,136.3z M36.8,111.2h33.7 c6.9,0,12.5-1.3,16.9-3.9c4.3-2.6,6.5-7.3,6.5-14c0-7.4-2.9-12.3-8.6-14.7c-4.9-1.6-11.2-2.5-18.8-2.5H36.8V111.2z M97,157.4 c0-8.3-3.4-14-10.1-17.1c-3.8-1.7-9.1-2.6-15.9-2.7H36.8v42.5h33.7c6.9,0,12.3-0.9,16.1-2.8C93.5,173.8,97,167.2,97,157.4z M255,131.4c0.8,5.2,1.1,12.8,1,22.7H172.9c0.5,11.5,4.4,19.5,11.9,24.1c4.5,2.9,10,4.3,16.5,4.3c6.8,0,12.3-1.7,16.6-5.2 c2.3-1.9,4.4-4.5,6.1-7.8h30.5c-0.8,6.8-4.5,13.6-11.1,20.6c-10.2,11.1-24.5,16.7-42.9,16.7c-15.2,0-28.6-4.7-40.2-14.1 c-11.6-9.4-17.4-24.6-17.4-45.7c0-19.8,5.2-35,15.7-45.5c10.5-10.6,24.1-15.8,40.8-15.8c9.9,0,18.9,1.8,26.8,5.3 c8,3.6,14.5,9.2,19.7,16.9C250.6,114.6,253.6,122.5,255,131.4z M225,134.4c-0.6-7.9-3.2-13.9-8-18c-4.7-4.1-10.6-6.2-17.7-6.2 c-7.7,0-13.6,2.2-17.8,6.5c-4.2,4.3-6.9,10.2-8,17.7L225,134.4L225,134.4z" />
              </svg>
            </a>
            <a
              href="https://github.com/SmailSelmi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 90 90" 
                width="24" 
                height="24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M45,0C20.147,0,0,20.467,0,45.714c0,21.32,14.367,39.23,33.802,44.286c-0.013-5.283-0.03-11.763-0.04-13.782 c-12.986,2.869-15.726-5.595-15.726-5.595c-2.123-5.481-5.183-6.939-5.183-6.939c-4.236-2.943,0.319-2.883,0.319-2.883 c4.687,0.334,7.156,4.887,7.156,4.887c4.163,7.249,10.92,5.153,13.584,3.942c0.419-3.064,1.628-5.157,2.964-6.341 c-10.368-1.199-21.268-5.265-21.268-23.435c0-5.177,1.824-9.407,4.81-12.728c-0.485-1.195-2.083-6.018,0.452-12.55 c0,0,3.92-1.274,12.84,4.861c3.724-1.051,7.717-1.578,11.684-1.596c3.967,0.018,7.963,0.545,11.694,1.596 c8.91-6.135,12.824-4.861,12.824-4.861c2.541,6.532,0.943,11.355,0.458,12.55c2.993,3.321,4.804,7.551,4.804,12.728 c0,18.214-10.92,22.223-21.315,23.398c1.674,1.472,3.166,4.357,3.166,8.781c0,3.513-0.016,11.601-0.031,17.74 C76.021,84.439,90,66.74,90,45.714C90,20.467,69.853,0,45,0z" />
              </svg>
            </a>
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
