import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import LandingPage from "./pages/LandingPage";

const AppWrapper = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      navigate("/");
    }, 3000); // show welcome for 3s
    return () => clearTimeout(timer);
  }, [navigate]);

  return showWelcome ? <WelcomeScreen /> : <Routes><Route path="/" element={<LandingPage />} /></Routes>;
};

const App = () => <AppWrapper />;

export default App;
