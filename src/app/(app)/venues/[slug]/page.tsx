import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

import SingleVenuePageSection from "@/components/pages/single-venue/SingleVenuePageSection";


interface SingleVenuePageProps {
  params: {
    slug: string;
  };
}

const SingleVenuePage = async ({ params }: SingleVenuePageProps) => {
  const payload = await getPayloadHMR({ config: configPromise });

  const pageSlug = params.slug;
  const venues = await payload.find({
    collection: "venue",
    where: {
      pageLink: {
        equals: pageSlug,
      },
    },
  });

  const venue = venues?.docs.length > 0 ? venues.docs[0] : null;

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <main className="mx-auto min-h-screen pt-32 md:pt-12">
      <SingleVenuePageSection venue={venue} />
    </main>
  );
};

export default SingleVenuePage;
