import ComingSoon from "@/components/sections/ComingSoon";
import CompactMap from "@/components/sections/CompactMap";
import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";
import { FeaturedVenuesSection } from "@/components/sections/FeaturedVenuesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import SearchSection from "@/components/sections/SearchSection";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });

  const places = await payload.find({
    collection: "places",
  });

  // TODO: pass the places to the FeaturedVenuesAlternativeCardsSection component
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <SearchSection />
      <FeaturedVenuesSection />
      <CompactMap />
      {/* <FeaturedVenuesAlternativeCardsSection /> */}
      <ComingSoon />
    </main>
  );
}
