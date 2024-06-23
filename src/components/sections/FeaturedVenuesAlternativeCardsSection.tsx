"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";

const venues = [
  {
    id: 1,
    src: "/example1.png",
    alt: "example1",
    name: "The Bitter End",
    address: "441 Clement St San Francisco, CA 94118",
    link: "https://nitelifenav.com/listings/the-bitter-end/",
  },
  {
    id: 2,
    src: "/example2.png",
    alt: "example2",
    name: "Monkey Bar",
    address: "26 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/monkey-bar/",
  },
  {
    id: 3,
    src: "/example3.png",
    alt: "example3",
    name: "Sideshow",
    address: "15 N. Orange Ave Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/sideshow/",
  },
  {
    id: 4,
    src: "/example4.png",
    alt: "example4",
    name: "Waitiki",
    address: "26 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/waitiki/",
  },
  {
    id: 5,
    src: "/example5.png",
    alt: "example5",
    name: "Shine",
    address: "25 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/shine/",
  },
  {
    id: 6,
    src: "/example6.png",
    alt: "example6",
    name: "Hen House",
    address: "11 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/hen-house/",
  },
];

export function FeaturedVenuesAlternativeCardsSection() {
  return (
    <div className="container grid w-full grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
      {venues.map((venue) => (
        <BackgroundGradient
          key={venue.id}
          className="rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10"
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
            <Link href={venue.link}>View Listing</Link>
          </Button>
        </BackgroundGradient>
      ))}
    </div>
  );
}
