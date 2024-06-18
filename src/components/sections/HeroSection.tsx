import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function HeroSection() {
  return (
    <div className="mb-24 w-screen mx-auto rounded-md  h-[30rem] overflow-hidden dark:bg-black bg-white">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="dark:text-white text-black text-2xl md:text-6xl font-bold text-center">
          Create Your Nite
        </h2>
        <p className="dark:text-white text-black text-sm md:text-2xl max-w-xl mt-6 text-center">
          We Will Provide The Right Information For Your Best Night Out!
        </p>
      </Vortex>
    </div>
  );
}
