"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { featuredVenues } from "@/constants/featured-venues";

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
  {
    id: 7,
    src: "/example1.png",
    alt: "example1",
    name: "The Bitter End",
    address: "441 Clement St San Francisco, CA 94118",
    link: "https://nitelifenav.com/listings/the-bitter-end/",
  },
  {
    id: 8,
    src: "/example2.png",
    alt: "example2",
    name: "Monkey Bar",
    address: "26 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/monkey-bar/",
  },
  {
    id: 9,
    src: "/example3.png",
    alt: "example3",
    name: "Sideshow",
    address: "15 N. Orange Ave Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/sideshow/",
  },
  {
    id: 10,
    src: "/example4.png",
    alt: "example4",
    name: "Waitiki",
    address: "26 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/waitiki/",
  },
  {
    id: 11,
    src: "/example5.png",
    alt: "example5",
    name: "Shine",
    address: "25 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/shine/",
  },
  {
    id: 12,
    src: "/example6.png",
    alt: "example6",
    name: "Hen House",
    address: "11 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/hen-house/",
  },
];
const itemsPerPage = 4;

export function FeaturedVenuesPaginationSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(venues.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };
  //this one conflicts with featured venues no need to fix but rn

  const oldfeaturedVenues = venues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div>
      <div className="container grid w-full grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
        {featuredVenues.map((venue) => (
          <Link href={`/venues/${venue.slug}`} key={venue.id}>
            <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 sm:p-6">
              <Image
                src={venue.src}
                alt={venue.alt}
                height="400"
                width="600"
                className="object-contain pt-6"
              />
              <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
                {venue.name}
              </p>

              <p className="pb-6 text-sm text-neutral-600 dark:text-neutral-400">
                {venue.address}
              </p>
            </BackgroundGradient>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(idx + 1);
                  }}
                  className={currentPage === idx + 1 ? "active" : ""}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
