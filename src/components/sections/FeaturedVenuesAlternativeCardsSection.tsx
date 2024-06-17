"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function FeaturedVenuesAlternativeCardsSection() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="https://nitelifenav.com/wp-content/uploads/2020/01/A2004766-0BA5-448C-922B-7DFC2D867FB9.jpeg"
          alt="example1"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          The Bitter End
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          441 Clement St San Francisco , California 94118
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
