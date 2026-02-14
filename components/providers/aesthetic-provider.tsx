"use client";

import dynamic from "next/dynamic";
import React from "react";

const SmoothScroll = dynamic(
  () => import("@/components/ui/smooth-scroll").then((mod) => mod.SmoothScroll),
  { ssr: false },
);
const DynamicBackground = dynamic(
  () =>
    import("@/components/ui/dynamic-background").then(
      (mod) => mod.DynamicBackground,
    ),
  { ssr: false },
);

export function AestheticProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <DynamicBackground />
      {children}
    </>
  );
}
