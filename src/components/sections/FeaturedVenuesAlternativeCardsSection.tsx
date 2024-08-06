"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Venue {
  id: number;
  src: string;
  alt: string;
  name: string;
  address: string;
  link: string;
}

export function FeaturedVenuesAlternativeCardsSection() {
  const [venues, setVenues] = useState<Venue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/info");
        const data = await response.json();
        setVenues(data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container grid h-full w-full grid-cols-1 gap-10 bg-background py-10 sm:grid-cols-2 lg:grid-cols-3">
      {venues.map((venue) => (
        <Link href={venue.link} key={venue.id}>
          <BackgroundGradient className="rounded-[22px] bg-white pb-4 dark:bg-zinc-900">
            <Image
              src={venue.src}
              alt={venue.alt}
              height="500"
              width="500"
              className="h-[265px] max-h-[auto] max-w-[auto] rounded-t-[23px] border-b-2 border-yellow-800 object-contain"
            />
            <div className="p-3">
              <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
                {venue.name}
              </p>

              <p className="pb-3 text-sm text-neutral-600 dark:text-neutral-400">
                {venue.address}
              </p>
            </div>
          </BackgroundGradient>
        </Link>
      ))}
    </div>
  );
}
