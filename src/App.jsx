import React from "react";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";
import Feachures from "./components/Feachures";
import Gold from "./components/Gold";
import Download from "./components/Download";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative w-screen h-screen">
      <HeroSection />
      <OrderSection />
      <Feachures />
      <Gold/>
      <Download/>
      <Footer/>
    </div>
  );
};

export default App;
