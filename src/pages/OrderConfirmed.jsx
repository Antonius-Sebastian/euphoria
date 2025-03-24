import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  return (
    <div className="border-grayDark2 mx-auto my-10 flex w-11/12 max-w-md flex-col items-center justify-center rounded-xl border-2 px-5 pt-10 pb-16 md:w-4/5">
      <DotLottieReact
        src="/animations/order-confirmed.lottie"
        autoplay
        loop
        speed={0.75}
      />
      <h1 className="font-coreSans text-grayDark2 mt-5 text-3xl font-bold">
        Your Order is Confirmed
      </h1>

      <Link
        to="/shop"
        className="font-causten bg-primary mt-10 w-fit rounded-lg px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#6620C1] active:translate-y-0 lg:py-4 lg:text-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmed;
