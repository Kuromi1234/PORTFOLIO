import { motion } from "framer-motion";
import Galaxy from "./Galaxy";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  return (
    <div className="welcome-wrapper">
      {/* Starfield Galaxy Background */}
      <div className="galaxy-bg">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.4}
          glowIntensity={0.6}
          hueShift={0.1}
          saturation={0}
          twinkleIntensity={0.5}
          repulsionStrength={2.5}
          rotationSpeed={0.05}
        />
      </div>

      {/* Hero Text */}
      <motion.h1
        className="hero-text"
        initial={{ opacity: 0, y: 60 , scale: 0.8 }}
        animate={{ opacity: 1, y: 0 , scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        {"<Arjun Nath/>"}
      </motion.h1>
    </div>
  );
};

export default WelcomeScreen;
