import ComingSoon from "@/components/sections/ComingSoon";
import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";
import { FeaturedVenuesSection } from "@/components/sections/FeaturedVenuesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import SearchSection from "@/components/sections/SearchSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <SearchSection />
      <FeaturedVenuesSection />
      {/* <FeaturedVenuesCardsSection /> */}
      <FeaturedVenuesAlternativeCardsSection />
      <ComingSoon />
    </main>
  );
}
