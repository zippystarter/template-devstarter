"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "bg-primary relative aspect-square overflow-hidden border-b border-border transition-opacity duration-500",
        loaded ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setLoaded(true)}
        className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale mix-blend-luminosity dark:mix-blend-darken"
      />
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
