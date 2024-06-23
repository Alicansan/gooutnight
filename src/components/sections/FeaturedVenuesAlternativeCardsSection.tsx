"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";

import { featuredVenues } from "@/constants/featured-venues";

export function FeaturedVenuesAlternativeCardsSection() {
  return (
    <div className="container grid w-full grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
      {featuredVenues.map((venue) => (
        <BackgroundGradient
          key={venue.id}
          className="rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-6"
        >
          <Image
            src={venue.src}
            alt={venue.alt}
            height="400"
            width="600"
            className="object-contain"
          />
          <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
            {venue.name}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {venue.address}
          </p>
          <Button asChild variant="link" className="mt-4 !px-0">
            <Link href={`/venues/${venue.slug}`}>See Listing</Link>
          </Button>
        </BackgroundGradient>
      ))}
    </div>
  );
}
