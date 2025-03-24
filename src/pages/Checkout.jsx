import React from "react";
import Icons from "../assets/icons";
import { billingDetailsInput } from "../constant";
import BillingFormControl from "../components/BillingFormControl";
import images from "../assets/images";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="mx-auto w-11/12 max-w-7xl py-5 md:w-4/5 lg:py-[50px]">
      <div className="flex items-center gap-4 text-sm md:text-lg">
        <p className="font-causten text-grayDark font-medium">Home</p>
        <Icons.ChevronRight className="fill-grayDark w-5" />
        <p className="font-causten text-grayDark font-medium">My Account</p>
        <Icons.ChevronRight className="fill-grayDark w-5" />
        <p className="font-causten text-grayDark2 font-medium">Checkout</p>
      </div>
      <h2 className="text-heading mt-6 lg:mt-12">Check Out</h2>
      <div className="mt-4 flex flex-col-reverse justify-between gap-9 md:flex-row">
        {/* Billing Address */}
        <div className="flex-2/3">
          <h3 className="font-coreSans text-grayDark2 text-[22px] font-bold">
            Billing Details
          </h3>
          <div className="mt-[50px] grid grid-cols-6 gap-x-4 gap-y-3 lg:gap-x-9 lg:gap-y-7">
            {billingDetailsInput.map((item, id) => (
              <BillingFormControl key={id} {...item} />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <Link
              to="/delivery"
              className="font-causten bg-primary w-fit rounded-lg px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#6620C1] active:translate-y-0 lg:py-4 lg:text-lg"
            >
              Continue to delivery
            </Link>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="save-information"
                className="accent-primary outline-none"
              />
              <label
                htmlFor="save-information"
                className="font-causten text-grayDark2 text-sm lg:text-lg"
              >
                Save my information for a faster checkout
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="h-fit max-h-[670px] flex-1/3 px-2 py-10 shadow-[-2px_-2px_4px_rgba(0,0,0,0.05),2px_2px_4px_rgba(0,0,0,0.05)] lg:px-5">
          <h3 className="font-coreSans text-grayDark2 border-b border-[#eee] pb-4 text-xl font-bold lg:text-2xl">
            Order Summary
          </h3>

          <div className="flex max-h-[350px] flex-col overflow-y-auto">
            <div className="font-causten flex flex-col justify-between gap-2 border-b border-[#eee] py-2 lg:flex-row lg:items-center lg:py-4">
              <div className="flex flex-1 flex-row items-center justify-start gap-4 lg:flex-row lg:items-center">
                <img
                  src={images.womenThumbnail_1}
                  alt=""
                  className="w-full max-w-[63px] rounded-sm object-contain"
                />
                <div className="text-grayDark2 flex flex-col text-xs font-bold lg:text-sm">
                  <p className="">
                    Black Sweatshirt With Text
                    <span className="text-grayDark"> x 1</span>
                  </p>
                  <p className="">
                    Color:
                    <span className="text-grayDark font-normal"> Yellow</span>
                  </p>
                </div>
              </div>
              <p className="font-causten text-grayDark text-xs font-bold lg:text-sm">
                $29.00
              </p>
            </div>
            <div className="font-causten flex flex-col justify-between gap-2 border-b border-[#eee] py-2 lg:flex-row lg:items-center lg:py-4">
              <div className="flex flex-1 flex-row items-center justify-start gap-4 lg:flex-row lg:items-center">
                <img
                  src={images.womenThumbnail_2}
                  alt=""
                  className="w-full max-w-[63px] rounded-sm object-contain"
                />
                <div className="text-grayDark2 flex flex-col text-xs font-bold lg:text-sm">
                  <p className="">
                    White T-Shirt
                    <span className="text-grayDark"> x 1</span>
                  </p>
                  <p className="">
                    Color:
                    <span className="text-grayDark font-normal"> Yellow</span>
                  </p>
                </div>
              </div>
              <p className="font-causten text-grayDark text-xs font-bold lg:text-sm">
                $29.00
              </p>
            </div>
            <div className="font-causten flex flex-col justify-between gap-2 border-b border-[#eee] py-2 lg:flex-row lg:items-center lg:py-4">
              <div className="flex flex-1 flex-row items-center justify-start gap-4 lg:flex-row lg:items-center">
                <img
                  src={images.womenThumbnail_3}
                  alt=""
                  className="w-full max-w-[63px] rounded-sm object-contain"
                />
                <div className="text-grayDark2 flex flex-col text-xs font-bold lg:text-sm">
                  <p className="">
                    Lavender Hoodie with text
                    <span className="text-grayDark"> x 1</span>
                  </p>
                  <p className="">
                    Color:
                    <span className="text-grayDark font-normal"> Yellow</span>
                  </p>
                </div>
              </div>
              <p className="font-causten text-grayDark text-xs font-bold lg:text-sm">
                $29.00
              </p>
            </div>

            <div className="font-causten flex flex-col justify-between gap-2 border-b border-[#eee] py-2 lg:flex-row lg:items-center lg:py-4">
              <div className="flex flex-1 flex-row items-center justify-start gap-4 lg:flex-row lg:items-center">
                <img
                  src={images.womenThumbnail_4}
                  alt=""
                  className="w-full max-w-[63px] rounded-sm object-contain"
                />
                <div className="text-grayDark2 flex flex-col text-xs font-bold lg:text-sm">
                  <p className="">
                    Leaves Pattern White Top
                    <span className="text-grayDark"> x 1</span>
                  </p>
                  <p className="">
                    Color:
                    <span className="text-grayDark font-normal"> Yellow</span>
                  </p>
                </div>
              </div>
              <p className="font-causten text-grayDark text-xs font-bold lg:text-sm">
                $29.00
              </p>
            </div>
          </div>

          <div className="font-causten text-grayDark2 text-sm font-bold tracking-wide lg:text-lg">
            <div className="border-b border-[#eee] py-4">
              <div className="flex justify-between">
                <p>
                  Subtotal
                  <span className="text-grayDark font-medium">
                    {" "}
                    ( 3 items )
                  </span>
                </p>
                <p>$513.00</p>
              </div>
              <div className="mt-4 flex justify-between">
                <p>Savings</p>
                <p>-$30.00</p>
              </div>
            </div>
            <div className="border-b border-[#eee] py-4">
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>-$5.00</p>
              </div>
            </div>
            <div className="py-4">
              <div className="flex justify-between">
                <p>Total</p>
                <p>$478.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
