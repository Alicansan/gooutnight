"use client";
import Image from "next/image";
import React from "react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Our Team",
    description:
      "As the NiteLifeNav team, we are committed to transforming the nightlife experience. Our CEO and Founder, Melvin Price, with over 15 years of global nightlife experience, understands the needs of our customers. Our COO, Rohit Murthy, strengthens our internal structure with his expertise in corporate strategy and lean methodology. Our In-House General Counsel, Sarah Gulati, ensures smooth legal transactions with her experience in business contracts and international law. Together, we strive to provide accurate and real-time information to enhance your nightlife experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/team1.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Our Team Photo"
        />
      </div>
    ),
  },
  {
    title: "Rohit Murthy – COO",
    description:
      "A operations supervisor at Shire Pharmaceuticals. He brings proven corporate team strategies, lean methodology and coordination for NiteLifeNav internal structure and around our brand operations. He has experience coordinating social events at nightlife venues around Southern California during his time in university fraternity.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/team2.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Rohit Murthy Photo"
        />
      </div>
    ),
  },
  {
    title: "Melvin Price – CEO/ Founder",
    description:
      "Melvin originated the idea of NiteLifeNav through issues he observed from nightlife patrons. He has over 15 years of global experience within the nightlife industry, along with over 10 years of tourism and customer service expertise. Melvin was a speaker at the 2017 SXSW Festival. He thoroughly understands the nightlife market along with understanding the NiteLifeNav customer needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src="/team3.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Melvin Price Photo"
        />
      </div>
    ),
  },
  {
    title: "Sarah Gulati – In-House General Counsel",
    description:
      "A member of the Florida Bar and the Federal Middle District of Florida. Specialties: Transactional work, including but not limited to business contract drafting/business closings, starting businesses, international law/foreign investment in Florida, trademarks/service marks/copyrights, etc.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/team4.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Sarah Gulati Photo"
        />
      </div>
    ),
  },
];
export function AboutUsOurTeamSection() {
  return (
    <div className="container mt-36">
      <StickyScroll content={content} />
    </div>
  );
}
