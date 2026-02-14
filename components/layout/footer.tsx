"use client";

import { personalData } from "@/lib/data";
import { Text } from "@gravity-ui/uikit";
import { Instagram, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Algeria is UTC+1
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Algiers",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-muted-foreground/80 font-mono text-sm px-3 py-1 bg-white/5 rounded-full border border-white/10">
      <Clock size={14} className="text-primary animate-pulse" />
      <span>Illizi, DZ: {time || "--:--:--"}</span>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pb-10 pt-20 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80%] h-[150px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-6 md:px-12 lg:px-20 relative">
        <div className="glass-card p-8 md:p-10 border border-white/10 rounded-3xl overflow-hidden relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Column 1: Identity & Availability */}
            <div className="flex flex-col items-center md:items-start gap-3">
               <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Text variant="caption-1" className="text-emerald-400 font-medium">Available for hire</Text>
              </div>
              <Text variant="header-2" className="text-xl font-bold tracking-tight">
                {personalData.name}
              </Text>
              <Text variant="body-1" className="text-muted-foreground text-sm max-w-[200px] text-center md:text-left">
                Crafting weightless digital experiences.
              </Text>
            </div>

            {/* Column 2: International Context */}
            <div className="flex flex-col items-center gap-4 py-6 md:py-0 border-y md:border-y-0 md:border-x border-white/10">
              <LocalTime />
              <div className="flex flex-col items-center gap-1">
                 <Text variant="body-1" className="text-muted-foreground text-sm">
                  Made with <span className="text-red-500 inline-block hover:scale-125 transition-transform cursor-default">❤️</span>
                </Text>
                <Text variant="caption-1" className="text-muted-foreground/60 transition-colors hover:text-primary">
                  From deep in the Sahara Desert
                </Text>
              </div>
            </div>

            {/* Column 3: Navigation & Socials */}
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex items-center gap-4">
                <Link 
                  href={personalData.socials.behance} 
                  target="_blank" 
                  className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-2xl transition-all group"
                  aria-label="Behance"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 256 256" 
                    width="20" 
                    height="20" 
                    fill="currentColor" 
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <path d="M231.2,70.9h-64.2V55h64.2V70.9z M124.3,136.3c4.1,6.4,6.2,14.2,6.2,23.3c0,9.5-2.3,17.9-7.1,25.4 c-3,5-6.8,9.1-11.3,12.5c-5.1,3.9-11.1,6.6-18,8c-8.2,1.7-15.7,2.5-22.3,2.5H0V48.4h77c19.4,0.3,33.2,5.9,41.3,17 c4.9,6.8,7.3,14.9,7.3,24.3c0,9.7-2.4,17.6-7.4,23.5c-2.7,3.3-6.8,6.3-12.1,9.1C114,125.2,120.2,129.9,124.3,136.3z M36.8,111.2h33.7 c6.9,0,12.5-1.3,16.9-3.9c4.3-2.6,6.5-7.3,6.5-14c0-7.4-2.9-12.3-8.6-14.7c-4.9-1.6-11.2-2.5-18.8-2.5H36.8V111.2z M97,157.4 c0-8.3-3.4-14-10.1-17.1c-3.8-1.7-9.1-2.6-15.9-2.7H36.8v42.5h33.7c6.9,0,12.3-0.9,16.1-2.8C93.5,173.8,97,167.2,97,157.4z M255,131.4c0.8,5.2,1.1,12.8,1,22.7H172.9c0.5,11.5,4.4,19.5,11.9,24.1c4.5,2.9,10,4.3,16.5,4.3c6.8,0,12.3-1.7,16.6-5.2 c2.3-1.9,4.4-4.5,6.1-7.8h30.5c-0.8,6.8-4.5,13.6-11.1,20.6c-10.2,11.1-24.5,16.7-42.9,16.7c-15.2,0-28.6-4.7-40.2-14.1 c-11.6-9.4-17.4-24.6-17.4-45.7c0-19.8,5.2-35,15.7-45.5c10.5-10.6,24.1-15.8,40.8-15.8c9.9,0,18.9,1.8,26.8,5.3 c8,3.6,14.5,9.2,19.7,16.9C250.6,114.6,253.6,122.5,255,131.4z M225,134.4c-0.6-7.9-3.2-13.9-8-18c-4.7-4.1-10.6-6.2-17.7-6.2 c-7.7,0-13.6,2.2-17.8,6.5c-4.2,4.3-6.9,10.2-8,17.7L225,134.4L225,134.4z" />
                  </svg>
                </Link>
                <Link 
                  href={personalData.socials.instagram} 
                  target="_blank" 
                  className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-2xl transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </div>
              
              <div className="text-center md:text-right">
                <Text variant="caption-1" className="text-muted-foreground/70 block">
                  &copy; {currentYear} All rights reserved.
                </Text>
                <Text variant="caption-2" className="text-muted-foreground/40 mt-1 block">
                  Designed & Developed by {personalData.name}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
