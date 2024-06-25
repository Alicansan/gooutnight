import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { VenuePhoto } from "@/constants/venuephotos";

interface VenueSliderProps {
  venuePhotos: VenuePhoto[];
  className?: string;
}

const VenueSlider = ({ venuePhotos, className }: VenueSliderProps) => {
  return (
    <Carousel className={cn("w-full px-4", className)}>
      <CarouselContent>
        {venuePhotos.map((venue) => (
          <CarouselItem key={venue.id}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    width={600}
                    height={600}
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
};

export default VenueSlider;
