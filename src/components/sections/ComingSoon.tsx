"use client";
import { motion } from "framer-motion";

import { comingSoonData } from "@/constants/comingsoon-data";

import { BackgroundGradient } from "../ui/background-gradient";
import { LampContainer } from "../ui/lamp";
export default ComingSoon;

export function ComingSoon() {
  return (
    <section className="h-[740px]">
      <LampContainer className="!min-h-full !pt-2">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="relative flex flex-col md:flex-row">
            <div className="absolute bottom-[300px] left-[80px] text-wrap text-3xl font-bold text-foreground drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:bottom-[315px] md:bottom-[110px] md:left-[200px] md:w-[480px] md:text-6xl">
              COMING SOON
            </div>
            <div className="md:2 mt-24 flex flex-col gap-3 px-24 md:flex-row">
              {comingSoonData.map((item) => (
                <BackgroundGradient
                  key={item}
                  className="!rounded-3xl bg-background bg-opacity-60 p-2"
                  containerClassName=""
                >
                  <div className="w-36 text-xl uppercase text-foreground">
                    {item}
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </section>
  );
}
