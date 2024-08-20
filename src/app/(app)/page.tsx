import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";

import AddressSearch from "@/collections/views/AddressSearch";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });

  const venues = await payload.find({
    collection: "venue",
  });

  // TODO: pass the venues to the FeaturedVenuesAlternativeCardsSection component
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      {/* <HeroSection />
      <SearchSection />
      <FeaturedVenuesSection />
      <CompactMap />
      <ComingSoon /> */}
      <FeaturedVenuesAlternativeCardsSection venues={venues} />
      <AddressSearch />
    </main>
  );
}
