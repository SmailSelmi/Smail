"use client";

import { useProtection } from "@/hooks/use-protection";

export function ContentProtection() {
  useProtection();
  return null; // This component doesn't render anything visible
}
