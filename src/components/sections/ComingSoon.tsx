'use client'
import { LampContainer } from '../ui/lamp'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BackgroundGradient } from '../ui/background-gradient'
import { comingSoonData } from '@/constants/comingsoon-data'
export default ComingSoon

export function ComingSoon() {
  return (
    <section className='w-full mt-32'>
      <LampContainer className='!pt-2 '>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
        >
          <div className='relative flex flex-col md:flex-row'>
            <div className='text-2xl md:text-6xl font-bold absolute text-foreground md:left-[200px]  md:bottom-[110px] md:w-[480px] bottom-[295px] left-[100px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
              COMING SOON
            </div>
            <div className='flex flex-col md:flex-row px-24 md:2 gap-3 '>
              {comingSoonData.map((item) => (
                <BackgroundGradient
                  key={item}
                  className=' bg-background bg-opacity-60 !rounded-3xl  p-2  '
                  containerClassName=''
                >
                  <div className='text-xl text-foreground w-36 uppercase'>
                    {item}
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </section>
  )
}
