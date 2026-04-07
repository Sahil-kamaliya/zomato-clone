import React from "react";
import {
  FREE_DELIVERY_IMG_URL,
  GOLD_IMG_URL,
  GOLD_STAR_IMG_URL,
  SCOTTER_IMG_URL,
} from "../utils/app.constants";
import Goldstar from "./Goldstar";
import ImageCards from "./ImageCards";

const Gold = () => {
  return (
    <div className="relative bg-black py-[15rem] mt-[20rem] text-white flex items-center justify-center flex-col">
      <img
        src={GOLD_IMG_URL}
        alt=""
        srcset=""
        className="w-[306px] h-[134px]"
      />

      <div className="mt-6 text-xl flex flex-col font-normal bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent ">
        <span>Indias Top Saving</span>
        <span>Program For Food Lover</span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <Goldstar />
        <span className="text-2xl font-medium tracking-[4px] ">
          GOLD BENEFITS
        </span>
        <Goldstar />
      </div>

      <div className="flex gap-10 mt-8">
        <ImageCards
          imgUrl={FREE_DELIVERY_IMG_URL}
          title="Free Delivery"
          secondtitle="at all restaurants within 7 km"
        />

        <ImageCards
          imgUrl={SCOTTER_IMG_URL}
          title="Up to 30% extra Off"
          secondtitle="at 20,000+ partner restaurants"
        />
      </div>
      <img
        src={GOLD_STAR_IMG_URL}
        alt=""
        className="w-[11rem] absolute top-0 left-0 "
      />

      <img
        src={GOLD_STAR_IMG_URL}
        alt=""
        className="w-[19rem] absolute top-0 right-0 rotate-1 "
      />
    </div>
  );
};

export default Gold;
