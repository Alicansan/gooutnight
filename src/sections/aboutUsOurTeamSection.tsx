"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Our Team",
    description:
      "This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team This is our team.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
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
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
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
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
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
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Sarah Gulati Photo"
        />
      </div>
    ),
  },
];
export function OurTeam() {
  return (
    <div className="mt-36 container">
      <StickyScroll content={content} />
    </div>
  );
}
