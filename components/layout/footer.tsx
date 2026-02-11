"use client";

import { personalData } from "@/lib/data";
import { Text } from "@gravity-ui/uikit";

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/50 text-center">
      <div className="container px-4 flex flex-col items-center gap-2">
        <Text variant="body-1" className="text-muted-foreground text-lg flex items-center justify-center gap-1">
          Made with <span className="text-red-500 animate-pulse">❤️</span> in Illizi
        </Text>
        <Text variant="caption-1" className="text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
