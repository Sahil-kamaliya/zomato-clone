import React from "react";
import {
  PHONE_IMG_URL,
  CALENDAR_IMG_URL,
  VEG_MODE_IMG_URL,
  HEALTHY_IMG_URL,
  PARTY_IMG_URL,
  GIFT_CARDS_IMG_URL,
  GOURMET_IMG_URL,
  OFFERS_IMG_URL,
  FOOD_ON_TRAIN_IMG_URL,
  COLLECTIONS_IMG_URL,
} from "../utils/app.constants";
import FeacherCard from "./FeacherCard";

const Feachures = () => {
  return (
    <div className="h-[30rem] bg-linear-to-b from-chablis to-white">
      < div className="relative flex justify-center items-center flex-col text-center py-28">
        <span className="text-carnation text-[48px] font-bold leading-tight">
          What’s waiting for you<br></br> on the app?
        </span>
        <span className="text-xl text-comet font-extralight mt-5 ">
          Our app is packed with features that
          <br /> enable you to experience food
          <br />
          delivery like never before
        </span>
        <div className="relative">
          <img
            src={PHONE_IMG_URL}
            alt=""
            srcset=""
            className="w-[18rem] mt-6 "
          />
          <div className=" py-3.5 pb-2 absolute top-[8.5rem] left-[4.5rem] shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border border-athens-gray">
            <img
              src={CALENDAR_IMG_URL}
              alt=""
              srcset=""
              className="w-[144px] h-[90px]"
            />
            <span>
              Schedule
              <br /> your order{" "}
            </span>
          </div>
        </div>
        <FeacherCard
          imgUrl={VEG_MODE_IMG_URL}
          title="Veg Mode"
          className="bottom-[17.5rem] left-[22.5rem] "
        />

        <FeacherCard
          imgUrl={HEALTHY_IMG_URL}
          title="Healthy"
          className="bottom-[17rem] left-[14rem] "
        />

        <FeacherCard
          imgUrl={PARTY_IMG_URL}
          title="Plan a Party"
          className="bottom-[8rem] left-[16rem] "
        />

        <FeacherCard
          imgUrl={GIFT_CARDS_IMG_URL}
          title="Gifts Cards"
          className="bottom-[9rem] left-[25rem] "
        />
        <FeacherCard
          imgUrl={GOURMET_IMG_URL}
          title="Gourment"
          className="bottom-[16rem] right-[25rem] "
        />
        <FeacherCard
          imgUrl={OFFERS_IMG_URL}
          title="Offers"
          className="bottom-[17.5rem] right-[16.5rem] "
        />
        <FeacherCard
          imgUrl={FOOD_ON_TRAIN_IMG_URL}
          title="Food on Train"
          className="bottom-[7rem] right-[23.5rem] "
        />
        <FeacherCard
          imgUrl={COLLECTIONS_IMG_URL}
          title="Collection"
          className="bottom-[9rem] right-[15rem] "
        />
      </div>
    </div>
  );
};

export default Feachures;
