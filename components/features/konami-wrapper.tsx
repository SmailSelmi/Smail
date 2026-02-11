"use client";

import { useKonamiCode } from "@/hooks/use-konami-code";
import { TerminalOverlay } from "@/components/features/terminal-overlay";
import { useEffect, useState } from "react";

export function KonamiWrapper() {
  const konamiSuccess = useKonamiCode();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (konamiSuccess) {
      setIsOpen(true);
    }
  }, [konamiSuccess]);

  return <TerminalOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
