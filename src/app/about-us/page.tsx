"use client";
import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

import { AboutUsCreateYourNiteSection } from "@/components/pages/about-us/AboutUsCreateYourNiteSection";
import { AboutUsOurTeamSection } from "@/components/pages/about-us/AboutUsOurTeamSection";
import { AboutUsTextSection } from "@/components/pages/about-us/AboutUsTextSection";
import { LampContainer } from "@/components/ui/lamp";

const AboutUsPage: FunctionComponent = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-200 to-slate-600 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          ABOUT US
        </motion.h1>
        <AboutUsTextSection />
        <AboutUsOurTeamSection />
        <AboutUsCreateYourNiteSection />
      </LampContainer>
    </>
  );
};
export default AboutUsPage;
