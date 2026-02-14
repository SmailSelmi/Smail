"use client";

import { useEffect } from "react";

export function useProtection() {
  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };

    // 3. Detect DevTools (Basic Check)
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        // Warning or Action
        console.clear();
        console.log("%cStop!", "color: red; font-size: 50px; font-weight: bold;");
        console.log("%cThis is a protected area.", "font-size: 20px;");
      }
    };


    const handleWindowBlur = () => {
       document.body.classList.add("blur-content");
    };

    const handleWindowFocus = () => {
       document.body.classList.remove("blur-content");
    };


    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", detectDevTools);
    // Use blur/focus for window switching specifically
    // window.addEventListener("blur", handleWindowBlur);
    // window.addEventListener("focus", handleWindowFocus);

    // Initial check
    detectDevTools();

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", detectDevTools);
      // window.removeEventListener("blur", handleWindowBlur);
      // window.removeEventListener("focus", handleWindowFocus);
      document.body.classList.remove("blur-content");
    };
  }, []);
}
