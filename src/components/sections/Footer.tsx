import React from 'react'
import {
  footerItems,
  socialMediaLinks,
} from '@/constants/footerItems'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className='container my-6'>
        <div className='flex flex-row items-center  max-lg:flex-col border-y-2 border-indigo-300  py-6'>
          <div className='flex flex-col items-center lg:items-start  lg:max-w-[300px] '>
            <Link href='/'>
              <div className='text-foreground text-xl font-bold'>
                NITELIFENAV
              </div>
            </Link>
            <p className='mt-6 text-base leading-7  text-foreground sm:max-w-md md:text-start'>
              We Will Provide The Right
              Information For Your Best Night Out!
            </p>
            <div className='flex items-center gap-5 my-6 '>
              {socialMediaLinks.map((icon) => (
                <a
                  href={icon.link}
                  className='flex items-center justify-center w-12 h-12 bg-foreground rounded-full'
                  key={icon.name}
                  aria-label={icon.name}
                >
                  <icon.icon className='text-background ' />
                </a>
              ))}
            </div>
          </div>

          <div className='flex flex-col justify-between  items-end flex-1 gap-3 lg:gap-5'>
            {footerItems.map((section) => (
              <div key={section.name}>
                <ul>
                  <li className='w-[90px] text-base leading-normal  text-center text-white-400 hover:text-slate-gray'>
                    <a href={section.link}>
                      {section.name}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='flex  justify-between my-12 text-white-400 max-sm:flex-col items-center sm:items-start'>
          <div className='flex flex-col md:flex-row items-center justify-start flex-1 gap-2 cursor-pointer  '>
            <p className='text-center mb-6 text-sm'>
              NITELIFENAV Copyright © 2024. All
              rights reserved.
            </p>
          </div>
          <Link href={'/terms-and-conditions'}>
            <p className='cursor-pointer text-sm'>
              Terms & Conditions
            </p>
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
