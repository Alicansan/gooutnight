"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { AboutUs, Media } from "payload-types";
import { PaginatedDocs } from "payload";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {

  content?: PaginatedDocs<AboutUs>;
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content?.docs?.length ?? 0;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content?.docs?.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints?.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );

    if (!closestBreakpointIndex) return;

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  const activeImage = content?.docs?.[activeCard].image as Media;

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="no-scrollbar relative flex h-[40rem] justify-center gap-10 space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content?.docs?.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-30" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "h-61 w-70 sticky top-1 hidden overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {/* {content[activeCard].content ?? null} */}
        {activeImage?.url && activeImage.width && activeImage.height && (
          <div className="flex h-full w-full items-center justify-center text-white">
            <Image
              src={activeImage.url}
              width={activeImage.width}
              height={activeImage.height}
              className="h-full w-full object-cover"
              alt={activeImage.alt}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
