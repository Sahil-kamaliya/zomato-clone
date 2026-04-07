import React from "react";

const ImageCards = ({ imgUrl, title, secondtitle }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <img src={imgUrl} alt="" srcset="" className="w-[4.6rem]" />
      <div className="flex flex-col">
        <span className="text-2xl">{title}</span>
        <span className="text-xl mt-1 bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent ">
          {secondtitle}
        </span>
      </div>
    </div>
  );
};

export default ImageCards;
