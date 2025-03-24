import React from "react";
import images from "../assets/images";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.slide1})`,
      }}
      className="flex max-h-[960px] w-full items-center bg-cover bg-center bg-no-repeat py-10 lg:h-screen"
    >
      <div className="mx-auto w-4/5 max-w-7xl">
        <div className="flex max-w-[450px] flex-col justify-center gap-10">
          <p className="font-coreSans text-2xl font-medium text-white md:text-[32px]">
            T-Shirt / Tops
          </p>
          <h1 className="font-coreSans text-5xl font-extrabold text-white md:text-[78px] md:leading-24">
            Summer Value Pack
          </h1>
          <p className="font-coreSans text-2xl font-medium text-white md:text-[32px]">
            cool / colorful / comfy
          </p>
          <Link
            to="/shop"
            className="font-causten text-grayDark2 w-fit bg-white px-10 py-2 text-lg font-bold transition-all hover:-translate-y-0.5 hover:bg-[#f5f5f5] hover:text-black active:translate-y-0 md:px-[72px] md:py-4 md:text-2xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
