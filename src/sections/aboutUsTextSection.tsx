"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `NiteLifeNav – There is a lack of an accurate, single application that provides consumers real-time information on clubs, bars, and lounges such as venue hours, wait severity, cover charge, number of security at the venue, type of crowd at the venue, dress code, venues where underage consumers 18-20 can attend, music genre, or which DJ/ Artist is performing.`;

export function AboutUsText() {
  return <TextGenerateEffect words={words} />;
}
