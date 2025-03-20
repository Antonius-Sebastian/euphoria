import React from "react";

const Deals = ({ overline, title, subtitle, bgImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={`w-full rounded-xl bg-cover bg-center bg-no-repeat pt-[66px] pb-14 pl-7 shadow-lg`}
    >
      <div className="font-coreSans flex max-w-[300px] flex-col justify-center text-white">
        <p className="text-lg font-extrabold">{overline}</p>
        <h3 className="mt-6 text-3xl font-extrabold md:text-[34px]">{title}</h3>
        <p className="font-ligh mt-2 text-base uppercase">{subtitle}</p>
        <a
          href="#"
          className="mt-10 w-fit border-b-2 border-b-white text-lg font-extrabold"
        >
          Explore Items
        </a>
      </div>
    </div>
  );
};

export default Deals;
