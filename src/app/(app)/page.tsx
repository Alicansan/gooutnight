import ComingSoon from "@/components/sections/ComingSoon";
import CompactMap from "@/components/sections/CompactMap";
import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";
import { FeaturedVenuesSection } from "@/components/sections/FeaturedVenuesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import SearchSection from "@/components/sections/SearchSection";
import getPayload from "@/payload/payload.ssr";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getPayload();

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
