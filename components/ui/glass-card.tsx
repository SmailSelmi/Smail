"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@gravity-ui/uikit";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  // We need to wrap Card with motion.div or motion.create(Card) to keep animation props working easily
  // simpler is to just animate a div that CONTAINS the card, or use motion.div and put Card inside.
  // BUT props passed here are HTMLMotionProps.
  // Let's use motion.div as the wrapper and Card as the content for visual style.
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.5 }}
      {...props}
      className={cn("h-full", className)} // Pass className to wrapper if layout related
    >
        <Card className={cn("glass-card h-full p-6", className)} view="outlined">
            {children}
        </Card>
    </motion.div>
  );
}
