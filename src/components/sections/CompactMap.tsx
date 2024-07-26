"use client";
import React, { useState } from "react";

import MapModal from "@/components/sections/MapModal";
import MultipleLocationMap from "@/components/sections/MultipleLocationMap";

import { coordinates } from "@/constants/coordinates";

const CompactMap = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container relative -mb-14 h-full w-full">
      <button onClick={handleShowModal} className="h-full w-full">
        <MultipleLocationMap
          mapHeight="  md:h-[245px] "
          mobileMapHeight="h-[920px]"
          coordinates={coordinates}
        />
      </button>

      {showModal && (
        <MapModal handleShowModal={handleShowModal}>
          <MultipleLocationMap
            mapHeight="  md:h-[645px] "
            mobileMapHeight="h-[920px]"
            coordinates={coordinates}
          />
        </MapModal>
      )}
    </div>
  );
};

export default CompactMap;
