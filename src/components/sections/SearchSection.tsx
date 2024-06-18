import { Button } from "@/components/ui/button";

import { SparklesCore } from "../ui/sparkles";
import { searchData } from "@/constants/search-data";
import { Combobox } from "./Combobox";

export default function SearchSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center container mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-3 gap-2 relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm z-[-10]" />

        <Combobox
          label="City"
          items={searchData.cities}
          className="col-span-1"
        />
        <Combobox
          label="Neighbourhood"
          items={searchData.neighbourhoods}
          className="col-span-1"
        />
        <Combobox
          label="Genre"
          items={searchData.genres}
          className="col-span-1"
        />
        <Combobox label="Venue" items={searchData.venues} />

        <Button
          variant="default"
          className="items-center col-span-1 md:col-span-2 lg:col-span-1"
        >
          <div className="flex gap-2 items-center ">
            <h1 className="text-sm font-medium   ">Search</h1>
          </div>
        </Button>
      </div>
      <DimLight side="right"></DimLight>
    </section>
  );
}

interface DimLightProps {
  side: "left" | "right";
  children?: React.ReactNode;
}

const DimLight = ({ side, children }: DimLightProps) => {
  return (
    <div className="w-[16rem] md:w-[40rem] h-40 relative z-[-99]">
      {/* Gradient */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={400}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full mt-4 h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
};
