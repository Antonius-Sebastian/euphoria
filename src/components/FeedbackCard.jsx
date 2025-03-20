import React from "react";
import icons from "../assets/icons";

const FeedbackCard = ({ userImg, rating, name, text }) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={icons.star} alt="" className="w-6 object-contain" />);
  }

  for (let i = 0; i < 5 - rating; i++) {
    stars.push(
      <img src={icons.starBorder} alt="" className="w-6 object-contain" />,
    );
  }

  return (
    <div className="border-grayLight flex-1 rounded-[10px] border-2 p-6">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between gap-4">
          <img src={userImg} alt="" className="w-[58px] object-contain" />
          <div className="flex items-start justify-between">
            {stars.map((Star) => Star)}
          </div>
        </div>
        <h4 className="font-coreSans text-grayDark2 text-[22px] font-medium">
          {name}
        </h4>
        <p className="font-causten text-grayDark text-sm tracking-wide whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
