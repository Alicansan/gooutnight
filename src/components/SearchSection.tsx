'use client'
import { useState } from 'react'
import { SparklesCore } from './ui/sparkes'
import {
  Check,
  ChevronsUpDown,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function SearchSection() {
  return (
    <section className='bg-background mt-24 top-10 h-64 z-40 w-full py-8 container mx-auto flex items-center justify-between px-4'>
      <div className=' outer-container  container flex flex-col items-center justify-center'>
        <div className='top-light w-[40rem] h-[2px] relative  '>
          <div className='absolute inset-x-20 top-0 bg-gradient-to-l from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm'></div>
          <div className='absolute inset-x-20 top-0 bg-gradient-to-l from-transparent via-indigo-500 to-transparent h-px w-3/4'></div>
          <div className='absolute inset-x-60 top-0 bg-gradient-to-l from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm'></div>
          <div className='absolute inset-x-60 top-0 bg-gradient-to-l from-transparent via-sky-500 to-transparent h-px w-1/4"'></div>
        </div>

        <div className='w-full lg:grid lg:grid-cols-5   h-auto py-3 gap-2 bg-gradient-to-r from-transparent via-sky-500 to-transparent mb-px  items-center justify-evenly mx-auto overflow-hidden  '>
          <Combobox
            label='City'
            items={data.cities}
          />
          <Combobox
            label='Neighbourhood'
            items={data.neighbourhoods}
          />
          <Combobox
            label='Genre'
            items={data.genres}
          />
          <Combobox
            label='Venue'
            items={data.venues}
          />

          <Button
            variant='outline'
            className='w-[200px]  items-center  className="col-span-1"'
          >
            <div className='flex gap-2 items-center '>
              <h1 className='text-sm font-medium   '>
                Search
              </h1>
            </div>
          </Button>
        </div>
        <div>
          <div className='dim-light w-[40rem] h-40 relative  '>
            <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm'></div>
            <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4'></div>
            <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm'></div>
            <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"'></div>
            <div className='w-full h-full'>
              <SparklesCore
                id='tsparticlesfullpage'
                background='transparent'
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className='w-full h-full'
                particleColor='#FFFFFF'
              />
            </div>
            <div className='absolute inset-0 w-full h-full bg-[#0a0a0a] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const data = {
  cities: [
    'Orlando',
    'Los Angeles',
    'Miami',
    'Denver',
    'Berlin',
    'London',
  ],
  neighbourhoods: [
    'Downtown',
    'South Beach',
    'West End',
    'North Beach',
    'East End',
    'Central',
    'Northside',
    'Westside',
    'Southside',
    'Uptown',
    'Eastside',
  ],
  genres: [
    'Hip-Hop',
    'RnB',
    'Pop',
    'Rock',
    'Electronic',
    'Reggae',
    'Dance',
    'Jazz',
    'Country',
    'Folk',
    'Metal',
    'Punk',
    'Rap',
    'Soul',
    'Alternative',
    'Classical',
    'World',
    'Other',
  ],
  venues: [
    'Bar',
    'Club',
    'Lounge',
    'Nightclub',
    'Pub',
    'Restaurant',
    'Theater',
    'Other',
  ],
}

interface ComboboxProps {
  label: string
  items: string[]
}

const Combobox = ({
  label,
  items,
}: ComboboxProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between className="col-span-1"'
        >
          {value
            ? items.find(
                (item) => item === value
              ) || 'Select an option'
            : `${label}`}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50 ' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0 '>
        <Command>
          <CommandInput
            placeholder={`Search ${label}`}
          />
          <CommandList className='no-scrollbar'>
            <CommandEmpty>
              {' '}
              No {label} found.
            </CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue === value
                        ? ''
                        : currentValue
                    )
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

// const SearchDropdowns = () => {
//   const [city, setCity] = useState<string>('')
//   const [neighbourhood, setNeighbourhood] =
//     useState<string>('')
//   const [genre, setGenre] = useState<string>('')
//   const [venue, setVenue] = useState<string>('')

//   const [showCityDropdown, setShowCityDropdown] =
//     useState(false)
//   const [
//     showNeighbourhoodDropdown,
//     setShowNeighbourhoodDropdown,
//   ] = useState(false)
//   const [
//     showGenreDropdown,
//     setShowGenreDropdown,
//   ] = useState(false)
//   const [
//     showVenueDropdown,
//     setShowVenueDropdown,
//   ] = useState(false)

//   const handleSelect = (
//     setter: Function,
//     value: string,
//     dropdownSetter: Function
//   ) => {
//     setter(value)
//     dropdownSetter(false)
//   }
//   const cities = [
//     'Orlando',
//     'Los Angeles',
//     'Miami',
//     'Denver',
//     'Berlin',
//     'London',
//   ]
//   const neighbourhoods = [
//     'Downtown',
//     'South Beach',
//     'West End',
//     'North Beach',
//     'East End',
//     'Central',
//     'Northside',
//     'Westside',
//     'Southside',
//     'Uptown',
//     'Eastside',
//   ]
//   const genres = [
//     'Hip-Hop',
//     'RnB',
//     'Pop',
//     'Rock',
//     'Electronic',
//     'Reggae',
//     'Dance',
//     'Jazz',
//     'Country',
//     'Folk',
//     'Metal',
//     'Punk',
//     'Rap',
//     'Soul',
//     'Alternative',
//     'Classical',
//     'World',
//     'Other',
//   ]
//   const venues = [
//     'Bar',
//     'Club',
//     'Lounge',
//     'Nightclub',
//     'Pub',
//     'Restaurant',
//     'Theater',
//     'Other',
//   ]
//   return (
//     <div className='search-fields flex gap-3 items-center justify-center mx-auto   '>
//       <label>
//         <input
//           type='search'
//           placeholder='Cities'
//           list='cities'
//           value={city}
//           onChange={(e) =>
//             setCity(e.target.value)
//           }
//           onFocus={() =>
//             setShowCityDropdown(true)
//           }
//           className='t-1 p-2 border border-gray-300 rounded w-full  '
//         />
//         {showCityDropdown && (
//           <ul className='absolute z-10  border border-indigo-300 bg-black  max-h-48 overflow-auto  no-scrollbar'>
//             {cities.map((type) => (
//               <li
//                 className='p-2 cursor-pointer hover:bg-gray-200  '
//                 key={type}
//                 onClick={() =>
//                   handleSelect(
//                     setCity,
//                     type,
//                     setShowCityDropdown
//                   )
//                 }
//               >
//                 {type}
//               </li>
//             ))}
//           </ul>
//         )}
//       </label>
//     </div>
//   )
// }
