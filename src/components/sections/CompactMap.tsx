"use client";
import React, { useState } from "react";

import MapModal from "@/components/sections/MapModal";
import MultipleLocationMap from "@/components/sections/MultipleLocationMap";

import { coordinates } from "@/constants/coordinates";

const CompactMap = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(!showModal);

  return (
    <div className="container relative h-full w-full">
      <button onClick={handleShowModal} className="h-full w-full">
        <MultipleLocationMap coordinates={coordinates} />
      </button>

      {showModal && (
        <MapModal handleShowModal={handleShowModal}>
          <MultipleLocationMap coordinates={coordinates} />
        </MapModal>
      )}
    </div>
  );
};

export default CompactMap;
