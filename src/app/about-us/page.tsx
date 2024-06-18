"use client";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import {AboutUsTextSection} from "@/components/pages/about-us/AboutUsTextSection";
import {AboutUsOurTeamSection} from "@/components/pages/about-us/AboutUsOurTeamSection";
import {AboutUsCreateYourNiteSection} from "@/components/pages/about-us/AboutUsCreateYourNiteSection";

const AboutUsPage: FunctionComponent = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-200 to-slate-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        ABOUT US
      </motion.h1>
      <AboutUsTextSection />
      <AboutUsOurTeamSection />
      <AboutUsCreateYourNiteSection />
    </LampContainer>
  );
};
export default AboutUsPage;
