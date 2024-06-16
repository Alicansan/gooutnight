import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { AboutUs } from "@/sections/aboutUsSection";
import { FeaturedVenuesAlternativeCards } from "@/sections/featuredVenuesAlternativeCardsSection";
import { FeaturedVenuesCards } from "@/sections/featuredVenuesCardsSection";
import { FeaturedVenues } from "@/sections/featuredVenuesSection";
import { HeroSection } from "@/sections/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ModeToggle />
      <HeroSection />
      <FeaturedVenues />
      <FeaturedVenuesCards />
      <FeaturedVenuesAlternativeCards />
      <AboutUs />
    </main>
  );
}
