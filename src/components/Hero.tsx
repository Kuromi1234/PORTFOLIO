// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import LightRays from "./LightRays";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* === Light Rays Only Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* === Main Hero Content === */}
      <motion.div
        className="relative z-10 px-6 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        {/* Chrome-glass container */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl px-10 py-14 rounded-3xl">
          <motion.h1
            className="text-[42px] sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {"<Arjun Nath />"}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            I design cinematic UIs and engineer powerful systems — merging code, creativity, and obsession for detail.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
