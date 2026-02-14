"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("button, a, .glass-card, input, textarea, [role='button']");
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY, isVisible]);


  return (
    <>
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
        {/* Main Dot */}
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full"
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        />
        
        {/* Outer Ring */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full"
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
          animate={{
            scale: hovered ? 1.5 : 1,
            backgroundColor: hovered ? "rgba(252, 163, 17, 0.1)" : "rgba(252, 163, 17, 0)",
            borderColor: hovered ? "rgba(252, 163, 17, 1)" : "rgba(252, 163, 17, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        />
      </div>
    </>
  );
}
