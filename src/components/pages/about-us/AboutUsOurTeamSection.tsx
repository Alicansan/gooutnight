"use client";
import Image from "next/image";
import React from "react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export function AboutUsOurTeamSection({ aboutUs }: { aboutUs: any }) {
  const content = aboutUs.docs.map((doc: any) => ({
    title: doc.title,
    description: doc.description,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={doc.image.url}
          width={doc.image.width}
          height={doc.image.height}
          className="h-full w-full object-cover"
          alt={doc.image.alt}
        />
      </div>
    ),
  }));

  return (
    <div className="container mt-36">
      <StickyScroll content={content} />
    </div>
  );
}
