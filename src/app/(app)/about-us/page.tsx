import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";

import { AboutUsOurTeamSection } from "@/components/pages/about-us/AboutUsOurTeamSection";
import MotionEffectAboutUs from "@/components/sections/MotionEffectAboutUs";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words = `NiteLifeNav – There is a lack of an accurate, single application that provides consumers real-time information on clubs, bars, and lounges such as venue hours, wait severity, cover charge, number of security at the venue, type of crowd at the venue, dress code, venues where underage consumers 18-20 can attend, music genre, or which DJ/ Artist is performing.`;

const AboutUsPage = async () => {
  const payload = await getPayloadHMR({ config: configPromise });

  const aboutUs = await payload.find({
    collection: "about-us",
  });

  return (
    <>
      <LampContainer>
        <MotionEffectAboutUs />
        <TextGenerateEffect words={words} className="mt-24" />
        <AboutUsOurTeamSection aboutUs={aboutUs} />
      </LampContainer>
    </>
  );
};
export default AboutUsPage;
