"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8">
      {venues.map((venue) => (
        <BackgroundGradient
          key={venue.id}
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          <Image
            src={venue.src}
            alt={venue.alt}
            height="400"
            width="600"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {venue.name}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {venue.address}
          </p>
          <a href={venue.link}>
            <button className="rounded-full dark:text-white text-black flex items-center space-x-1 bg-white mt-4 text-sm p-2 font-bold dark:bg-zinc-800 border dark:border-white border-black opacity-60 group-hover:opacity-100 transition duration-500 will-change-transform hover:font-extrabold">
              <span>View Listing</span>
            </button>
          </a>
        </BackgroundGradient>
      ))}
    </div>
  );
}
