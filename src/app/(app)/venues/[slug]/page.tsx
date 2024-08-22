import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

import SingleVenuePageSection from "@/components/pages/single-venue/SingleVenuePageSection";

import { featuredVenues } from "@/constants/featured-venues";

interface SingleVenuePageProps {
  params: {
    slug: string;
  };
}

const SingleVenuePage = async ({ params }: SingleVenuePageProps) => {
  const payload = await getPayloadHMR({ config: configPromise });

  const pageSlug = params.slug
  const venues = await payload.find({
    collection: "venue",
    where:{
      pageLink: {
        equals: pageSlug
      }
    }
  });



 

  return (
    <main className="mx-auto min-h-screen pt-32 md:pt-12">
      <SingleVenuePageSection venue={venues} />
    </main>
  );
};

export default SingleVenuePage;
