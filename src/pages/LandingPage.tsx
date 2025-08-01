import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-black via-[#0f0f1f] to-[#1a1a2e] text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default LandingPage;
