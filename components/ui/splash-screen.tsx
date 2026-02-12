"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { KyodayLoader } from "@/components/ui/kyoday-loader";



export function SplashScreen() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check session storage to prevent re-showing on back navigation/refresh in same session
    const hasVisited = sessionStorage.getItem("kyoday-visited");
    
    if (isHome && !hasVisited) {
      // Use setTimeout to avoid synchronous state update warning
      const showTimer = setTimeout(() => setIsVisible(true), 0);
      document.body.style.overflow = "hidden";
      
      // Mark as visited in session storage
      sessionStorage.setItem("kyoday-visited", "true");

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }, 2000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        document.body.style.overflow = "auto";
      };
    }
  }, [isHome]);

  if (!isHome) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          className="fixed inset-0 z-[100]" // Wrapper for exit animation only
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
        >
          <KyodayLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
