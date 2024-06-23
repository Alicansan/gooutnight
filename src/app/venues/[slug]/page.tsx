import SingleVenuePageSection from "@/components/pages/single-venue/SingleVenuePageSection";

import { featuredVenues } from "@/constants/featured-venues";

interface SingleVenuePageProps {
  params: {
    slug: string;
  };
}

const SingleVenuePage = ({ params }: SingleVenuePageProps) => {
  const venue = featuredVenues.find((venue) => venue.slug === params.slug);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <main className="container mx-auto min-h-screen pt-32">
      <SingleVenuePageSection venue={venue} />
    </main>
  );
};

export default SingleVenuePage;
