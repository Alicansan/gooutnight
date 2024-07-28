"use client";
import Link from "next/link";

import "leaflet/dist/leaflet.css";

import VenueSlider from "@/components/pages/single-venue/VenueSlider";
import Comments from "@/components/sections/Comments";
import MapSection from "@/components/sections/MapSection";

import { FeaturedVenue } from "@/constants/featured-venues";
import { venuePhotos } from "@/constants/venuephotos";

interface SingleVenuePageSectionProps {
  venue: FeaturedVenue;
}

const SingleVenuePageSection = ({ venue }: SingleVenuePageSectionProps) => {
  return (
    <section className="items-center justify-center">
      <div className="relative">
        <div className="pointer-events-auto absolute">
          <VenueSlider
            venuePhotos={venuePhotos}
            className="-top-10 left-28 -z-10 hidden blur-lg md:block md:w-[90%]"
          />
        </div>

        <VenueSlider
          venuePhotos={venuePhotos}
          className="fixed top-16 -z-10 mx-auto max-h-[700px] w-full sm:relative md:z-10 md:-mb-[30px] md:max-w-[1200px]"
        />

        <div className="z-10 mx-auto mt-[170px] flex w-full flex-col justify-center gap-2 rounded-xl bg-background pb-16 md:-mt-2 md:rounded-t-[70px] lg:items-center lg:justify-center">
          <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[120px] bg-gradient-to-t from-background from-10% via-secondary via-70% to-background to-90% pb-32">
            <div className="flex w-full max-w-6xl px-2 py-12">
              <h1 className="mx-auto my-12 text-start font-mulish text-3xl font-[1000] uppercase text-foreground md:mt-24">
                {venue.name}
              </h1>
            </div>

            <div className="flex w-full flex-col-reverse justify-center rounded-xl px-2 md:rounded-t-[70px] lg:flex-row lg:items-center">
              <p className="mt-4 max-w-4xl text-balance px-2 text-sm md:text-base">
                {venue.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:justify-center">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded-lg border border-border bg-secondary p-6 text-sm font-extrabold lg:p-12">
          <div className="">
            Dress Code:{" "}
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
        <div className="h-full w-full items-center rounded-lg border border-border bg-secondary font-extrabold lg:col-span-1">
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

      <div className="container">
        <MapSection
          coordinates={venue.fields.coord}
          venueName={venue.name}
          address={venue.address}
        />
        <Comments />
      </div>
    </section>
  );
};

export default SingleVenuePageSection;
