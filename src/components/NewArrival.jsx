import React from "react";

const NewArrival = ({ bgImage, title }) => {
  return (
    <div className="flex min-w-[120px] flex-col items-start gap-8">
      <img src={bgImage} alt="" className="w-full rounded-xl object-contain" />
      <h4 className="font-causten text-grayDark2 text-base font-bold md:text-[20px]">
        {title}
      </h4>
    </div>
  );
};

export default NewArrival;
