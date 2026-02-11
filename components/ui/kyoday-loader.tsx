"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Text } from "@gravity-ui/uikit";

export function KyodayLoader() {
  const [statusText, setStatusText] = useState("INITIALIZING");

  useEffect(() => {
    const texts = ["INITIALIZING", "CHECKING SYSTEM", "CONNECTING", "KYODAI ONLINE"];
    let i = 0;
    
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      if (i < texts.length) {
          setStatusText(texts[i]);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Grid/Noise for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative flex items-center justify-center">
        {/* Outer Orbit Ring */}
        <motion.div
           className="absolute w-64 h-64 rounded-full border border-white/5 border-dashed"
           animate={{ rotate: 360 }}
           transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        
        {/* Inner Orbit Ring */}
        <motion.div
           className="absolute w-48 h-48 rounded-full border border-primary/10"
           animate={{ rotate: -360 }}
           transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        />

        {/* Radar Scanner Container */}
        <div className="relative w-32 h-32 rounded-full border-2 border-primary/20 bg-black/50 backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            {/* The Scanner Sweep */}
            <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(249, 115, 22, 0.4) 360deg)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />
            
            {/* Center Grid Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-full h-[1px] bg-primary" />
                <div className="h-full w-[1px] bg-primary absolute" />
            </div>

            {/* Core Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                    className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </div>
        </div>
      </div>

      {/* Status Text */}
      <div className="mt-12 flex flex-col items-center gap-2 z-10">
        <Text 
            variant="code-2" 
            className="text-primary font-mono tracking-[0.2em] text-sm"
        >
            {statusText}
        </Text>
        <div className="flex gap-1">
             <motion.div className="w-1 h-1 bg-primary/50" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0 }} />
             <motion.div className="w-1 h-1 bg-primary/50" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }} />
             <motion.div className="w-1 h-1 bg-primary/50" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }} />
        </div>
      </div>
    </div>
  );
}
