import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });

  const venues = await payload.find({
    collection: "venue",
  });

  
  
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      {/* <HeroSection />
      <SearchSection />
      <FeaturedVenuesSection />
      <CompactMap />
      <ComingSoon /> */}

      <FeaturedVenuesAlternativeCardsSection venues={venues} />
    </main>
  );
}
