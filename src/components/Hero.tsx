// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import LightParticles from "./LightRays";
import Galaxy from "./Galaxy"; // animated glowing bg


const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* === Background Galaxy === */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.2}
          glowIntensity={0.6}
          saturation={0.2}
          hueShift={0} // Set this to 0 for white stars
        />
      </div>

      {/* === Light Glow Particles === */}
      <LightParticles />

      {/* === Main Content === */}
      <motion.div
        className="relative z-10 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        {/* Chrome Style Container */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 px-8 py-12 rounded-3xl shadow-xl max-w-2xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {"<Arjun Nath />"}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            I craft beautiful UIs and powerful systems.  
            Blending tech, art & obsession for detail.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
