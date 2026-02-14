"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function DynamicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very soft springs for a "floating" feel
  const springConfig = { damping: 50, stiffness: 50 };
  const posX = useSpring(mouseX, springConfig);
  const posY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-background">
      {/* Primary Floating Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
        style={{
          x: posX,
          y: posY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Secondary Static Blobs for Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
    </div>
  );
}
