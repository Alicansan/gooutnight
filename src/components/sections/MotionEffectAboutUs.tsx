"use client";
import { motion } from "framer-motion";
import React from "react";

function MotionEffectAboutUs() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-[12rem] text-wrap text-center text-4xl font-bold tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-7xl"
    >
      ABOUT US
    </motion.h1>
  );
}

export default MotionEffectAboutUs;
