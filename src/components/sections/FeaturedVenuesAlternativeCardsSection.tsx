"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";

export function FeaturedVenuesAlternativeCardsSection({
  venues,
}: {
  venues?: any;
}) {
  if (!venues || venues.length === 0) return null;

  return (
    <div className="container grid h-full w-full grid-cols-1 gap-10 bg-background py-10 sm:grid-cols-2 lg:grid-cols-3">
      {venues.docs?.map((venue: any) => (
        <Link href={venue.link} key={venue.id}>
          <BackgroundGradient className="rounded-[22px] bg-white pb-4 dark:bg-zinc-900">
            <Image
              src={venue.image.url}
              alt={venue.image.alt}
              height={venue.image.height}
              width={venue.image.width}
              className="mx-auto h-[265px] max-h-[auto] max-w-[auto] rounded-t-[23px] object-none"
            />
            <hr className="border-b-2 border-yellow-800" />
            <div className="flex flex-col items-center">
              <p className="mb-2 mt-4 text-base uppercase text-black dark:text-neutral-200 sm:text-2xl sm:font-bold">
                {venue.title}
              </p>
              <p className="pb-3 text-sm text-neutral-600 dark:text-neutral-400">
                {venue.description}
              </p>
            </div>
          </BackgroundGradient>
        </Link>
      ))}
    </div>
  );
}
