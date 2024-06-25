"use client";
import Link from "next/link";
import { useState } from "react";

import { CarouselDemo } from "@/components/pages/single-venue/VenueSlider";
import Comments from "@/components/sections/Comments";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FeaturedVenue } from "@/constants/featured-venues";
interface SingleVenuePageSectionProps {
  venue: FeaturedVenue;
}

const SingleVenuePageSection = ({ venue }: SingleVenuePageSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-6 text-center text-3xl font-bold uppercase text-foreground">
        {venue.name}
      </h1>
      <div className="flex w-full justify-center gap-4 rounded-xl bg-secondary p-2 pt-6 lg:flex-col lg:items-start lg:justify-start lg:p-12">
        <div className="flex w-full flex-col justify-center gap-10 lg:flex-row lg:items-start">
          <div className="flex w-full flex-1 flex-col items-center justify-start gap-4 lg:items-start">
            <p
              className={`${isOpen ? "" : "line-clamp-4"} ? lg:line-clamp-none" text-foreground`}
            >
              {venue.description}
            </p>
            <span className="" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Hide " : "Read More... "}
            </span>
          </div>
          <div className="lg:flex-row lg:px-4">
            <CarouselDemo />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:justify-center">
        <div className="flex h-full w-full flex-col items-start justify-center rounded-lg bg-secondary p-2 pl-4 text-sm">
          <div className="pb-2"> Dress Code: {venue.fields.dressCode}</div>
          <div className="pb-2">Best Nights: {venue.fields.bestNights}</div>
          <div className="pb-2">Type of Crowd: {venue.fields.typeOfCrowd}</div>
          <div className="pb-2">LGBTQ: {venue.fields.lgbtq}</div>
          <div className="pb-2">Welcome: {venue.fields.welcome}</div>
          <div className="pb-2">Age: {venue.fields.age}</div>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center self-auto rounded-lg bg-secondary p-2 pl-4 text-sm">
          <div className="flex lg:items-center lg:justify-center">
            Address:{" "}
            <Link
              key={venue.fields.addressLink}
              href={venue.fields.addressLink}
              target="_blank"
              className="hover:text-blue-500"
            >
              <span className="text-indigo-400 hover:text-blue-200">
                {venue.address}
              </span>
            </Link>
          </div>
          <div className="flex lg:items-center lg:justify-center">
            <Link
              href={venue.fields.website}
              key={venue.fields.website}
              target="_blank"
            >
              Website:{" "}
              <span className="text-indigo-400 hover:text-blue-200">
                {venue.name}
              </span>
            </Link>
          </div>
          <div className="flex lg:items-center lg:justify-center">
            <Link
              href={`tel:${venue.fields.phone}`}
              key={venue.fields.phone}
              target="_blank"
            >
              Phone:{" "}
              <span className="text-indigo-400 hover:text-blue-200">
                {venue.fields.phone}
              </span>
            </Link>
          </div>
        </div>
        <div className="bottom h-full w-full items-center rounded-lg bg-secondary p-2 lg:col-span-2">
          <Table className="">
            <TableHeader className="">
              <TableRow>
                <TableHead className="text-center">Days</TableHead>
                <TableHead className="text-nowrap text-center">
                  Open Hours
                </TableHead>
                <TableHead className="text-center">Music Format</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-sm">
                <TableCell>
                  {venue.fields.days.map((day) => (
                    <p className="pt-2 text-center" key={day}>
                      {day}
                    </p>
                  ))}
                </TableCell>
                <TableCell>
                  {venue.fields.hours.map((hour) => (
                    <p className="pt-2 text-center" key={hour}>
                      {hour}
                    </p>
                  ))}
                </TableCell>
                <TableCell>
                  {venue.fields.musicFormats.map((item) => (
                    <p className="pt-2 text-center" key={item}>
                      {item}
                    </p>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default SingleVenuePageSection;
