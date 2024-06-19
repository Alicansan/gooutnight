import React from 'react'
import {
  footerItems,
  socialMediaLinks,
} from '@/constants/footerItems'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className='container mb-6'>
        <div className='flex flex-row items-center justify-between  max-lg:flex-col border-y-2 px-3 py-6'>
          <div className='flex flex-col items-center'>
            <div className='border-2 bg-red-300 w-36 h-12 text-center '>
              There be Logo
            </div>
            <p className='mt-6 text-base leading-7  text-foreground sm:max-w-md'>
              We Will Provide The Right
              Information For Your Best Night Out!
            </p>
            <div className='flex items-center gap-5 my-6'>
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

          <div className='flex flex-col justify-between  items-center flex-1 gap-3 lg:gap-5'>
            {footerItems.map((section) => (
              <div key={section.name}>
                <ul>
                  <li className=' text-base leading-normal font-montserrat text-white-400 hover:text-slate-gray'>
                    <a href={section.link}>
                      {section.name}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='flex  justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-col md:flex-row items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat'>
            <p>
              NITELIFENAV Copyright © 2024. All
              rights reserved.
            </p>
          </div>
          <p className='cursor-pointer font-montserrat'>
            Terms & Conditions
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
