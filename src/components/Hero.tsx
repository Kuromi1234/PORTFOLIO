import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f1f] to-[#1a1a2e] px-6"
    >
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Hey, I'm Arjun Nath.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80">
          I blend code, design & storytelling to build magical digital experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🚀 Explore Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
