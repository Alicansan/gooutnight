import SearchSection from '@/components/SearchSection'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <ModeToggle />

      <SearchSection />
    </main>
  )
}
