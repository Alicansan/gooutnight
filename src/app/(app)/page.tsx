import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import SearchSection from "@/components/sections/SearchSection";
import { FeaturedVenuesSection } from "@/components/sections/FeaturedVenuesSection";
import CompactMap from "@/components/sections/CompactMap";
import ComingSoon from "@/components/sections/ComingSoon";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });

  const venues = await payload.find({
    collection: "venue",
  });

  
  
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <SearchSection />
      <FeaturedVenuesSection />
      <CompactMap />
      <FeaturedVenuesAlternativeCardsSection venues={venues} />
      <ComingSoon />

      
    </main>
  );
}
