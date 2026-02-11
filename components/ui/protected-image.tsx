"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ProtectedImageProps extends ImageProps {
  wrapperClassName?: string;
}

export function ProtectedImage({ className, wrapperClassName, alt, ...props }: ProtectedImageProps) {
  return (
    <div className={cn("relative select-none", wrapperClassName)}>
      <Image
        {...props}
        alt={alt}
        className={cn("pointer-events-none select-none", className)}
        draggable={false}
      />
      {/* Transparent overlay to block right-clicks on the image specifically */}
      <div 
        className="absolute inset-0 z-10 bg-transparent"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
