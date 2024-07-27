"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import { coordinates } from "@/constants/coordinates";
const DynamicMapModal = dynamic(
  () => import("@/components/sections/MapModal"),
  {
    ssr: false,
  },
);
const DynamicMultipleLocationMap = dynamic(
  () => import("@/components/sections/MultipleLocationMap"),
  {
    ssr: false,
  },
);
const CompactMap = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container relative h-full w-full">
      <button onClick={handleShowModal} className="h-full w-full">
        <DynamicMultipleLocationMap
          mapHeight="hidden md:block  md:h-[245px] h-[220px]"
          coordinates={coordinates}
        />
      </button>
      <button
        onClick={handleShowModal}
        className="block h-full w-full rounded-lg bg-secondary p-4 md:hidden"
      >
        See venues on the map
      </button>
      {showModal && (
        <DynamicMapModal handleShowModal={handleShowModal}>
          <div className="relative z-10 h-full w-full">
            <button
              className="absolute right-0 top-0 z-40 h-12 w-12 rounded-lg border-2 border-background bg-secondary text-2xl font-extrabold"
              onClick={handleShowModal}
            >
              X
            </button>
            <DynamicMultipleLocationMap
              mapHeight="  md:h-[645px] h-[220px]"
              coordinates={coordinates}
            />
          </div>
        </DynamicMapModal>
      )}
    </div>
  );
};

export default CompactMap;
