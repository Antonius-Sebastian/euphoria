import React from "react";
import images from "../assets/images";

const Carousel = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.slide1})`,
      }}
      className="flex min-h-screen w-full items-center bg-cover bg-center bg-no-repeat"
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
          <a
            href="#"
            className="font-causten text-grayDark2 w-fit bg-white px-10 py-2 text-lg font-bold md:px-[72px] md:py-4 md:text-2xl"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
