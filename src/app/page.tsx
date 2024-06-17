import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { FeaturedVenuesAlternativeCardsSection } from "@/components/sections/FeaturedVenuesAlternativeCardsSection";
import { FeaturedVenuesCardsSection } from "@/components/sections/FeaturedVenuesCardsSection";
import { FeaturedVenuesSection } from "@/components/sections/FeaturedVenuesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import Image from "next/image";
import SearchSection from "@/components/sections/SearchSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ModeToggle />
      <SearchSection />
      <HeroSection />
      <FeaturedVenuesSection />
      <FeaturedVenuesCardsSection />
      <FeaturedVenuesAlternativeCardsSection />
      <AboutUsSection />
    </main>
  );
}
