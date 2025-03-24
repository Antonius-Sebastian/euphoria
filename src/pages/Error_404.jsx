import React from "react";
import images from "../assets/images";
import { Link } from "react-router-dom";

const Error_404 = () => {
  return (
    <div className="mx-auto flex w-11/12 max-w-md flex-col items-center justify-center py-10 text-center lg:w-fit lg:py-20">
      <img src={images.error_404} className="object-contain" alt="" />
      <h1 className="font-coreSans mt-1 text-2xl font-bold text-black sm:text-4xl">
        Oops! Page not found
      </h1>
      <p className="font-causten text-grayDark mt-2.5 text-base leading-[1.25] font-medium">
        The page you are looking for might have been removed or temporarily
        unavailable.
      </p>

      <Link
        to="/"
        className="font-causten bg-primary mt-10 w-fit rounded-lg px-10 py-3 text-sm font-medium text-white lg:py-3 lg:text-lg"
      >
        Back to HomePage
      </Link>
    </div>
  );
};

export default Error_404;
