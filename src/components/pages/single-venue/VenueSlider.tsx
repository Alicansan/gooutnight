import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { VenuePhoto, venuePhotos } from "@/constants/venuephotos";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-md px-4">
      <CarouselContent>
        {venuePhotos.map((venue: VenuePhoto) => (
          <CarouselItem key={venue.id}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden cursor-pointer lg:flex" />
      <CarouselNext className="hidden cursor-pointer lg:flex" />
    </Carousel>
  );
}
