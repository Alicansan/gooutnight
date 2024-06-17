"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function FeaturedVenuesAlternativeCardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 gap-8">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/example1.png"
          alt="example1"
          height="400"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          The Bitter End
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          441 Clement St San Francisco , CA 94118
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/example2.png"
          alt="example2"
          height="400"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Monkey Bar
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          26 Wall St Orlando, FL 32801
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/example3.png"
          alt="example3"
          height="400"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Sideshow
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          15 N. Orange Ave Orlando, FL 32801
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/example4.png"
          alt="example4"
          height="400"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Waitiki
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          26 Wall St Orlando, FL 32801
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/example5.png"
          alt="example5"
          height="400"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Shine
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          25 Wall St Orlando, FL 32801
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/example6.png"
          alt="example6"
          height="400"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Hen House
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          11 Wall St Orlando, FL 32801
        </p>
        <button className="rounded-full text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View Listing </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
