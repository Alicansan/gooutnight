"use client";
import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

import { AboutUsOurTeamSection } from "@/components/pages/about-us/AboutUsOurTeamSection";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words = `NiteLifeNav – There is a lack of an accurate, single application that provides consumers real-time information on clubs, bars, and lounges such as venue hours, wait severity, cover charge, number of security at the venue, type of crowd at the venue, dress code, venues where underage consumers 18-20 can attend, music genre, or which DJ/ Artist is performing.`;

const AboutUsPage: FunctionComponent = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-[12rem] text-wrap text-center text-4xl font-bold tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-7xl"
        >
          ABOUT US
        </motion.h1>
        <TextGenerateEffect words={words} className="mt-24" />
        <AboutUsOurTeamSection />
      </LampContainer>
    </>
  );
};
export default AboutUsPage;
