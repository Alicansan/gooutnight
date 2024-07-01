"use client";
import Link from "next/link";

import VenueSlider from "@/components/pages/single-venue/VenueSlider";
import Comments from "@/components/sections/Comments";

import { FeaturedVenue } from "@/constants/featured-venues";
import { venuePhotos } from "@/constants/venuephotos";
import MapSection from "@/components/sections/MapSection";

import "leaflet/dist/leaflet.css";

interface SingleVenuePageSectionProps {
  venue: FeaturedVenue;
}

const SingleVenuePageSection = ({ venue }: SingleVenuePageSectionProps) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold uppercase text-foreground">
        {venue.name}
      </h1>
      <div className="mt-12 flex w-full justify-center gap-4 rounded-xl border border-border bg-secondary p-4 lg:flex-col lg:items-start lg:justify-start lg:p-12">
        <div className="flex w-full flex-col-reverse justify-center lg:flex-row lg:items-center lg:gap-10">
          <p className="text-balance p-2 text-sm md:text-base lg:max-w-xl lg:p-0">
            {venue.description}
          </p>
          <div className="w-full flex-1 p-4">
            <VenueSlider
              venuePhotos={venuePhotos}
              className="mx-auto w-full md:max-w-3xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:justify-center">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded-lg border border-border bg-secondary p-6 text-sm lg:p-12">
          <div className="">
            Dress Coderess:{" "}
            <span className="font-semibold">{venue.fields.dressCode}</span>
          </div>
          <div className="">
            Best Nights:{" "}
            <span className="font-semibold">{venue.fields.bestNights}</span>
          </div>
          <div className="">
            Type of Crowd:{" "}
            <span className="font-semibold">{venue.fields.typeOfCrowd}</span>
          </div>
          <div className="">
            LGBTQ: <span className="font-semibold">{venue.fields.lgbtq}</span>
          </div>
          <div className="">
            Welcome:{" "}
            <span className="font-semibold">{venue.fields.welcome}</span>
          </div>
          <div className="">
            Age: <span className="font-semibold">{venue.fields.age}</span>
          </div>

          <div className="flex gap-2 lg:items-center lg:justify-center">
            Address:{" "}
            <Link
              key={venue.fields.addressLink}
              href={venue.fields.addressLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary transition-all hover:opacity-70">
                {venue.address}
              </span>
            </Link>
          </div>
          <div className="flex gap-2 lg:items-center lg:justify-center">
            <Link
              href={venue.fields.website}
              key={venue.fields.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website:{" "}
              <span className="text-primary transition-all hover:opacity-70">
                {venue.name}
              </span>
            </Link>
          </div>
          <div className="flex gap-2 lg:items-center lg:justify-center">
            <Link
              href={`tel:${venue.fields.phone}`}
              key={venue.fields.phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              Phone:{" "}
              <span className="text-primary transition-all hover:opacity-70">
                {venue.fields.phone}
              </span>
            </Link>
          </div>
        </div>
        <div className="h-full w-full items-center rounded-lg border border-border bg-secondary lg:col-span-1">
          <div className="grid grid-cols-3 gap-4 p-6 lg:p-12">
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-left text-sm font-semibold">Days</span>
              {venue.fields.days.map((day, index) => (
                <p className="pt-2 text-left text-sm" key={index}>
                  {day}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-left text-sm font-semibold">Hours</span>
              {venue.fields.hours.map((hour, index) => (
                <p className="pt-2 text-left text-sm" key={index}>
                  {hour}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-left text-sm font-semibold">
                Music Format
              </span>
              {venue.fields.musicFormats.map((item, index) => (
                <p className="pt-2 text-left text-sm" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MapSection
        coordinates={venue.fields.coord}
        venueName={venue.name}
        address={venue.address}
      />

      <Comments />
    </div>
  );
};

export default SingleVenuePageSection;
