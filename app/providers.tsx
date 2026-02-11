// app/providers.tsx
"use client";

import React from "react";
import { ThemeProvider } from "@gravity-ui/uikit";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme="dark">
      {children}
    </ThemeProvider>
  );
}