"use client";

import { useNetworkStatus } from "@/hooks/use-network-status";
import { useEffect } from "react";

export function NetworkAware() {
  const isLowBandwidth = useNetworkStatus();

  useEffect(() => {
    if (isLowBandwidth) {
      document.body.classList.add("low-bandwidth");
    } else {
      document.body.classList.remove("low-bandwidth");
    }
  }, [isLowBandwidth]);

  return null;
}
