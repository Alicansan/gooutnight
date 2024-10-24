import React from "react";

import { Vortex } from "@/components/ui/vortex";

export function HeroSection() {
  return (
    <div className="mx-auto my-24 h-[30rem] w-screen overflow-hidden rounded-md bg-background">
      <Vortex
        backgroundColor="transparent"
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <h2 className="text-center text-2xl font-bold text-foreground md:text-6xl">
          Go Blend the Night
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-foreground md:text-2xl">
          We Will Provide The Right Information For Your Best Night Out!
        </p>
      </Vortex>
    </div>
  );
}
