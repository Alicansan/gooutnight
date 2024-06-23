"use client";
import React from "react";

import { cn } from "@/lib/utils";

import { Boxes } from "@/components/ui/background-boxes";

export function FeaturedVenuesSection() {
  return (
    <div className="container relative mt-4 flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-purple-400 [mask-image:radial-gradient(transparent,white)] dark:bg-slate-900" />

      <Boxes />
      <h1
        className={cn(
          "relative z-20 text-xl font-extrabold text-white md:text-4xl",
        )}
      >
        FEATURED VENUES
      </h1>
    </div>
  );
}
