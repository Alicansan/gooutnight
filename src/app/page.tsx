import SearchSection from '@/components/search-section/SearchSection'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container mx-auto w-full'>
      <ModeToggle />
      <SearchSection />
    </main>
  )
}
