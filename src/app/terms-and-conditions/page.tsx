import Comments from '@/components/sections/Comments'

import { FeaturedVenuesPaginationSection } from '@/components/sections/FeaturedVenuesPagination'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden container flex flex-col items-center justify-center my-24'>
      <h1 className='text-2xl font-bold my-6'>
        Terms and Conditions
      </h1>
      <p className='m-auto lg:px-[12rem] italic font-thin'>
        Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ducimus consequatur
        magni provident! Fuga unde vel rem
        repellendus vero error, ea beatae saepe
        totam labore voluptatem quis est quae.
        Quasi, eveniet? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Ducimus
        consequatur magni provident! Fuga unde vel
        rem repellendus vero error, ea beatae
        saepe totam labore voluptatem quis est
        quae. Quasi, eveniet? Lorem ipsum dolor,
        sit amet consectetur adipisicing elit.
        Ducimus consequatur magni provident! Fuga
        unde vel rem repellendus vero error, ea
        beatae saepe totam labore voluptatem quis
        est quae. Quasi, eveniet? Lorem ipsum
        dolor, sit amet consectetur adipisicing
        elit. Ducimus consequatur magni provident!
        Fuga unde vel rem repellendus vero error,
        ea beatae saepe totam labore voluptatem
        quis est quae. Quasi, eveniet?
      </p>
      <FeaturedVenuesPaginationSection />
      <Comments />
    </div>
  )
}

export default page
