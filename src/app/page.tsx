import { ModeToggle } from '@/components/theme-toggle'
import { FeaturedVenuesAlternativeCardsSection } from '@/components/sections/FeaturedVenuesAlternativeCardsSection'
import { FeaturedVenuesCardsSection } from '@/components/sections/FeaturedVenuesCardsSection'
import { FeaturedVenuesSection } from '@/components/sections/FeaturedVenuesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import SearchSection from '@/components/sections/SearchSection'
import Navbar from '@/components/navbar/Navbar'
import ComingSoon from '@/components/sections/ComingSoon'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <FeaturedVenuesSection />
      <FeaturedVenuesCardsSection />
      <FeaturedVenuesAlternativeCardsSection />
      <ComingSoon />
    </main>
  )
}
