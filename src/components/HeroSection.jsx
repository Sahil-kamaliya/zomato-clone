import React from "react";
import {
  VIDEO_URL,
  PLAY_STORE_URL,
  APP_STORE_URL,
} from "../utils/app.constants";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        loop
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent -z-10"></div>

      <div className="flex flex-col items-center justify-center h-full pt-40">
        <img
          src="/restaurant-landing-page-assets/zomato.png"
          alt="zomato logo"
          className="w-52 "
        />
        <div className="mb-5 px-5 text-center font-semibold text-5xl text-white mt-8">
          India’s #1 <br /> food delivery app
        </div>
        <span className="text-white text-2xl px-15 text-center font-medium">
          Experience fast & easy online ordering <br /> on the Zomato app
        </span>
        <div className="flex gap-6 mt-10">
          <img src={PLAY_STORE_URL} alt="" className="w-44" />
          <img src={APP_STORE_URL} alt="" className="w-44" />
        </div>

        <div className="flex items-center justify-center pt-8 animate-bounce">
          <span className="text-white font-medium">Scroll down</span>
          <img src="../../public/restaurant-landing-page-assets/double-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
