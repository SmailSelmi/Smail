"use client";

import React from "react";
import { brands } from "@/lib/data";
import { Text } from "@gravity-ui/uikit";

export function InfiniteMarquee() {
  // Triple the items to ensure seamless loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="py-20 overflow-hidden relative border-y border-border/10 bg-primary/5">
       {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px w-8 bg-primary/30" />
            <Text variant="caption-1" className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Strategic Partners & Tech Stack</Text>
            <div className="h-px w-8 bg-primary/30" />
        </div>

        <div className="flex select-none overflow-hidden group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeItems.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-12 group/item transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center group-hover/item:border-primary/50 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                   <span className="text-xl font-black text-muted-foreground/30 group-hover/item:text-primary transition-colors">
                      {brand.name.charAt(0)}
                   </span>
                </div>
                <Text
                  variant="header-1"
                  className="text-2xl font-bold text-muted-foreground/20 group-hover/item:text-foreground transition-colors tracking-tighter whitespace-nowrap"
                >
                  {brand.name}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
}
