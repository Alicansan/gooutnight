import dynamic from "next/dynamic";
import Link from "next/link";

import "leaflet/dist/leaflet.css";

import Comments from "@/components/sections/Comments";

import { LatLngTuple } from "leaflet";
import { Address, Venue } from "payload-types";
import Image from "next/image";

const MapSection = dynamic(() => import("@/components/sections/MapSection"), {
  ssr: false,
});

const VenueSlider = dynamic(
  () => import("@/components/pages/single-venue/VenueSlider"),
  {
    ssr: false,
  },
);

interface SingleVenuePageSectionProps {
  venue: Venue;
}

const SingleVenuePageSection = ({ venue }: SingleVenuePageSectionProps) => {
  const coordinates: LatLngTuple = [
    (venue.address as Address).latitude,
    (venue.address as Address).longitude,
  ] as LatLngTuple;

  return (
    <section className="items-center justify-center">
      <div className="relative">
        {/* <div className="pointer-events-auto absolute">
          {venue.venueImages && venue.venueImages.length > 0 && (
            <div className="fixed left-0 top-0 -z-10 h-[20vh] w-full">
              <Image
                src={venue.venueImages[0].image.url}
                alt={venue.title}
                layout="fill"
                objectFit="cover"
                className="backdrop-blur-lg backdrop-filter"
              />
            </div>
          )}
        </div> */}

        <VenueSlider
          venuePhotos={venue.venueImages}
          className="fixed top-16 -z-10 mx-auto max-h-[700px] w-full sm:relative md:z-10 md:-mb-[30px] md:max-w-[1200px]"
        />

        <div className="z-10 mx-auto mt-[170px] flex w-full flex-col justify-center gap-2 rounded-xl bg-background pb-16 md:-mt-2 md:rounded-t-[70px] lg:items-center lg:justify-center">
          <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[120px] bg-gradient-to-t from-background from-10% via-secondary via-70% to-background to-90% pb-32">
            <div className="flex w-full max-w-6xl px-2 py-12">
              <h1 className="mx-auto my-12 text-start font-mulish text-3xl font-[1000] uppercase text-foreground md:mt-24">
                {venue.title}
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
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="font-semibold">Music Format: </div>
            {venue.genre?.map((genre: any) => (
              <p className="text-left text-sm" key={genre.id}>
                {genre.style}
              </p>
            ))}
          </div>
          <div className="">
            Dress Code: <span className="font-semibold">{venue.dressCode}</span>
          </div>
          <div className="">
            Best Nights: <span className="font-semibold">{}</span>
          </div>
          <div className="">
            Type of Crowd:{" "}
            <span className="font-semibold">{venue.crowdType}</span>
          </div>
          <div className="">
            LGBTQ: <span className="font-semibold">{venue.lgbtq}</span>
          </div>

          <div className="">
            Age 18-20 Allowed:{" "}
            <span className="font-semibold">{venue.ageRestriction}</span>
          </div>

          <div className="flex gap-2 lg:items-center lg:justify-center">
            Address:{" "}
            <Link
              key={(venue.address as Address).addressName}
              href={`https://www.google.com/search?q=${encodeURIComponent((venue.address as Address).addressName)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary transition-all hover:opacity-70">
                {(venue.address as Address).addressName}
              </span>
            </Link>
          </div>
          {venue.website && (
            <div className="flex gap-2 lg:items-center lg:justify-center">
              <Link
                href={venue.website}
                key={venue.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website:{" "}
                <span className="text-primary transition-all hover:opacity-70">
                  {venue.title}
                </span>
              </Link>
            </div>
          )}
          <div className="flex gap-2 lg:items-center lg:justify-center">
            <Link
              href={`tel:${venue.phone}`}
              key={venue.phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              Phone:{" "}
              <span className="text-primary transition-all hover:opacity-70">
                {venue.phone}
              </span>
            </Link>
          </div>
        </div>
        <div className="h-full w-full items-center rounded-lg border border-border bg-secondary font-extrabold lg:col-span-1">
          <div className="grid grid-cols-2 gap-4 p-6 lg:p-12">
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-left text-sm font-semibold">Days</span>
              {venue.bussinessHours.map((day: any) => (
                <p className="pt-2 text-left text-sm" key={day}>
                  {day.days}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-left text-sm font-semibold">Hours</span>
              {venue.bussinessHours.map((day: any) => (
                <p className="pt-2 text-left text-sm" key={day}>
                  {day.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          <MapSection
            coordinates={coordinates}
            venueName={venue.title}
            address={(venue.address as Address).addressName}
          />
          <Comments />
        </div>
      </div>
    </section>
  );
};

export default SingleVenuePageSection;
