import { CarouselDemo } from "@/components/pages/single-venue/VenueSlider";
import Comments from "@/components/sections/Comments";

import { FeaturedVenue } from "@/constants/featured-venues";

interface SingleVenuePageSectionProps {
  venue: FeaturedVenue;
}

const SingleVenuePageSection = ({ venue }: SingleVenuePageSectionProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-secondary p-12">
      <div className="flex w-full items-start justify-start gap-10">
        <div className="flex w-full flex-1 flex-col items-start justify-start gap-4">
          <h1 className="text-center text-3xl font-bold text-foreground">
            {venue.name}
          </h1>
          <p className="text-foreground">{venue.description}</p>
        </div>
        <div className="px-4">
          <CarouselDemo />
        </div>
      </div>
      <p className="text-left text-sm text-foreground">{venue.address}</p>

      <Comments />
    </div>
  );
};

export default SingleVenuePageSection;
