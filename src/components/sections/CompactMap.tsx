"use client";
import React from "react";

import MultipleLocationMap from "@/components/sections/MultipleLocationMap";

import { coordinates } from "@/constants/coordinates";

const CompactMap = () => {
  return (
    <div className="container -mt-3 h-full w-full">
      <MultipleLocationMap coordinates={coordinates} />
    </div>
  );
};

export default CompactMap;
