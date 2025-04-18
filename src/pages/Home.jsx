import React from "react";

import { brands, deals, feedbacks, newArrivals, savingZone } from "../constant";
import Icons from "../assets/icons";
import images from "../assets/images";

import SavingZoneCard from "../components/SavingZoneCard";
import FeedbackCard from "../components/FeedbackCard";
import Carousel from "../components/Carousel";
import Deals from "../components/Deals";
import NewArrival from "../components/NewArrival";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carousel />

      {/* Deals */}
      <div className="mx-auto flex w-11/12 max-w-7xl flex-wrap justify-between gap-[30px] pt-10 pb-[100px] md:w-4/5 md:flex-nowrap md:pt-[130px]">
        {deals.map((deal, id) => {
          return <Deals key={id} {...deal} />;
        })}
      </div>

      {/* New Arrival */}
      <div className="mx-auto w-11/12 max-w-7xl md:w-4/5">
        <h2 className="text-heading">New Arrival</h2>
        <div className="mt-10 md:mt-[70px]">
          <div className="flex items-center justify-between gap-2">
            <Icons.ArrowLeft className="h-20 w-20 sm:h-7 sm:w-7" />
            <div className="flex justify-between gap-4 overflow-x-auto md:gap-[38px]">
              {newArrivals.map((newArrival, id) => (
                <NewArrival key={id} {...newArrival} />
              ))}
            </div>
            <Icons.ArrowRight className="h-20 w-20 sm:h-7 sm:w-7" />
          </div>
        </div>
      </div>

      {/* Big Saving Zone */}
      <div className="mx-auto mt-20 w-11/12 max-w-7xl md:mt-[100px] md:w-4/5">
        <h2 className="text-heading">Big Saving Zone</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-[70px] lg:grid-cols-6">
          {savingZone.map((item, id) => (
            <SavingZoneCard {...item} key={id} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto mt-20 flex max-w-7xl md:mt-[100px]">
        <div
          style={{
            backgroundImage: `url(${images.ctaBackground})`,
          }}
          className="w-11/12 flex-1 bg-cover bg-center bg-no-repeat py-20 lg:py-10"
        >
          <div className="mx-auto flex h-full w-11/12 max-w-[466px] flex-col justify-center text-white">
            <h2 className="font-coreSans text-2xl font-extrabold uppercase md:text-[34px] md:leading-[50px]">
              We Made Your Everyday Fashion Better!
            </h2>
            <p className="font-causten mt-5 text-base font-light tracking-wider md:mt-[30px] md:text-xl">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </p>
            <Link
              to="/shop"
              className="font-causten text-grayDark2 text-bas mt-8 w-fit rounded-lg bg-white px-5 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:bg-[#f5f5f5] hover:text-black active:translate-y-0 md:mt-[50px] md:px-11 md:py-3 md:text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="hidden flex-1 lg:block">
          <img src={images.ctaImage} className="h-full" alt="" />
        </div>
      </div>

      {/* Top Brands Deal */}
      <div className="bg-grayDark2 mx-auto mt-20 w-11/12 max-w-7xl rounded-xl py-11 md:mt-[100px] md:w-4/5">
        <div className="flex h-full flex-col items-center justify-center">
          <h2 className="font-coreSans text-3xl font-extrabold text-white md:text-[50px]">
            Top Brands Deal
          </h2>
          <p className="font-causten mt-5 text-base font-light text-white md:mt-[26px] md:text-[22px]">
            Up To <span className="font-bold text-[#FBD103]">60%</span> off on
            brands
          </p>
          <div className="mt-8 flex w-11/12 justify-between gap-3 overflow-x-auto px-5 md:mt-16 md:w-4/5 md:gap-6">
            {brands.map((brand, id) => (
              <div
                className="flex min-w-[100px] flex-1 items-center justify-center rounded-md bg-white px-5 py-3 md:rounded-xl"
                key={id}
              >
                <img src={brand} className="w-full object-contain" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="mx-auto mt-20 flex w-11/12 max-w-7xl flex-col md:mt-[100px] md:w-4/5">
        <h2 className="text-heading">Feedback</h2>
        <div className="mt-10 mb-24 flex flex-col justify-between gap-6 md:mt-[70px] lg:flex-row">
          {feedbacks.map((feedback, id) => (
            <FeedbackCard key={id} {...feedback} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
