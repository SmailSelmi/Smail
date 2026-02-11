"use client";

import { useState, useEffect } from "react";

export function useNetworkStatus() {
  const [isLowBandwidth, setIsLowBandwidth] = useState(false);

  useEffect(() => {
    // Check if navigator.connection is available
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

    if (connection) {
      const updateConnectionStatus = () => {
        // Check for saveData mode or slow effective connection type
        const saveData = connection.saveData;
        const effectiveType = connection.effectiveType; // 'slow-2g', '2g', '3g', or '4g'

        // Consider '3g' and slower as low bandwidth for high-performance sites
        const isSlow = saveData || effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g";
        setIsLowBandwidth(isSlow);
      };

      // Initial check
      updateConnectionStatus();

      // Listen for changes
      connection.addEventListener("change", updateConnectionStatus);

      return () => {
        connection.removeEventListener("change", updateConnectionStatus);
      };
    }
  }, []);

  return isLowBandwidth;
}
