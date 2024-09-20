"use client";
import Image from "next/image";
import React from "react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { AboutUs } from "payload-types";
import { PaginatedDocs } from "payload";

export function AboutUsOurTeamSection({
  aboutUs,
}: {
  aboutUs?: PaginatedDocs<AboutUs>;
}) {
 

  if (!aboutUs?.docs?.length) return null;

  return (
    <div className="container mt-36">
      <StickyScroll content={aboutUs} />
    </div>
  );
}
