import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { VenuePhoto } from "@/constants/venuephotos";
interface VenueSliderProps {
  venuePhotos: VenuePhoto[];
  className?: string;
}

const VenueSlider = ({ venuePhotos, className }: VenueSliderProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <Carousel
      className={cn("w-full md:px-4", className)}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {venuePhotos.map((venue) => (
          <CarouselItem key={venue.id}>
            <div>
              <Card className="md:rounded-[30px]">
                <CardContent className="flex aspect-[21/9] items-center justify-center p-0">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    width={1200}
                    height={600}
                    className="h-full w-full object-cover md:rounded-[30px]"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="hidden cursor-pointer lg:flex" />
      <CarouselNext className="hidden cursor-pointer lg:flex" /> */}
    </Carousel>
  );
};

export default VenueSlider;
