"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { searchData } from "@/constants/search-data";

import { Combobox } from "./Combobox";
import { SparklesCore } from "../ui/sparkles";

export default function SearchSection() {
  const [selectedCity, setSelectedCity] = useState<string>("");

  return (
    <section className="container mx-auto flex w-full flex-col items-center justify-center">
      <div className="relative grid w-full grid-cols-1 gap-2 py-3 md:grid-cols-2 lg:grid-cols-5">
        <div className="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />

        <Combobox
          label="City"
          items={searchData.cities}
          className="col-span-1"
          onChange={(value) => {
            setSelectedCity(value);
          }}
        />
        <Combobox
          label="Neighbourhood"
          items={searchData.neighbourhoods}
          className="col-span-1"
          disabled={selectedCity === ""}
        />
        <Combobox
          label="Genre"
          items={searchData.genres}
          className="col-span-1"
        />
        <Combobox label="Venue" items={searchData.venues} />

        <Button
          variant="default"
          className="col-span-1 items-center md:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-medium">Search</h1>
          </div>
        </Button>
      </div>
      <DimLight />
    </section>
  );
}

const DimLight = () => {
  return (
    <div className="relative z-[-99] h-40 w-[16rem] md:w-[40rem]">
      {/* Gradient */}
      <div className="absolute left-1/2 top-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent blur-sm" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={400}
        className="h-full w-full"
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 mt-4 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
};
