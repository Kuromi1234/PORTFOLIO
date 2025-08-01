import { motion } from "framer-motion";
import devImage from "../assets/dev.png"; // Replace with your own image

const timeline = [
  { year: "2021", text: "Started coding journey 🚀" },
  { year: "2022", text: "Built full-stack apps & solved real-world problems" },
  { year: "2023", text: "Got obsessed with design & UI/UX ✨" },
  { year: "2024", text: "Crafting premium-grade products people remember" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12 bg-gradient-to-br from-black via-[#0f0f1f] to-[#1a1a2e]"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-white/80 mb-6 leading-relaxed">
          I'm a self-taught developer and designer who loves building web products that look as
          good as they work. My passion lies in translating imagination into code and pixels.
        </p>

        {/* Timeline */}
        <div className="space-y-4 mt-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-blue-500 pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold">{item.year}</h4>
              <p className="text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={devImage}
          alt="Developer"
          className="rounded-xl w-[300px] md:w-[400px] border-4 border-white/10 shadow-2xl hover:scale-105 transition-all duration-500"
        />
      </motion.div>
    </section>
  );
};

export default About;
