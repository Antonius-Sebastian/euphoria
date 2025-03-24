import React from "react";
import Icons from "../assets/icons";
import images from "../assets/images";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      {/*  */}
      <div className="mx-auto flex w-11/12 max-w-7xl flex-col gap-7 py-5 md:w-4/5 lg:py-[50px]">
        <div className="flex items-center gap-4">
          <p className="font-causten text-grayDark text-lg font-medium">Home</p>
          <Icons.ChevronRight className="fill-grayDark w-5" />
          <p className="font-causten text-grayDark2 text-lg font-medium">
            Add To Cart
          </p>
        </div>
        <p className="text-grayDark font-causten text-sm">
          Please fill in the fields below and click place order to complete your
          purchase!
          <br />
          Already registered?{" "}
          <a href="#" className="text-primary font-semibold">
            Please login here{" "}
          </a>
        </p>
      </div>

      <div className="bg-grayDark2 hidden lg:block">
        <div className="font-causten mx-auto grid w-4/5 max-w-7xl grid-cols-9 items-center justify-center gap-10 py-7 text-center text-lg font-semibold text-white uppercase">
          <p className="col-span-4 text-start">Product Details</p>
          <p className="">Price</p>
          <p className="">Quantity</p>
          <p className="">Shipping</p>
          <p className="">Subtotal</p>
          <p className="">Action</p>
        </div>
      </div>

      {/* Cart items */}
      <div className="py-5">
        <div className="font-causten border-grayLight mx-auto grid w-11/12 max-w-7xl grid-cols-3 items-center gap-x-1 gap-y-5 py-8 text-center text-lg font-semibold text-white not-last:border-b md:w-4/5 lg:grid-cols-9 lg:gap-10 lg:py-[50px]">
          <div className="col-span-3 flex justify-start gap-3 text-start lg:col-span-4 lg:gap-5">
            <img
              src={images.womenThumbnail_1}
              className="max-w-[105px] rounded-xl object-contain"
              alt=""
            />
            <div className="font-causten">
              <h6 className="text-grayDark2 text-lg font-bold">
                Black Sweatshirt With Text
              </h6>
              <p className="text-grayDark mt-1 text-sm font-medium">
                Color : Yellow
              </p>
              <p className="text-grayDark mt-0.5 text-sm font-medium">
                Size : M
              </p>
              <p className="text-grayDark mt-0.5 text-sm font-medium lg:hidden">
                Price : $29.00
              </p>
            </div>
          </div>

          <p className="font-causten text-grayDark2 hidden text-lg font-bold lg:block">
            $29.00
          </p>

          <div className="font-causten text-grayDark2 bg-secondary flex h-fit w-[40%] max-w-[140px] min-w-[90px] items-center justify-between rounded-xl px-0 py-3 text-xs font-medium">
            <button className="w-[25%] max-w-[35px] cursor-pointer text-3xl leading-4 transition-all hover:text-black">
              -
            </button>
            <input
              type="number"
              placeholder="1"
              value={1}
              className="w-[50%] max-w-[60px] appearance-none bg-transparent text-center text-xl outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button className="w-[25%] max-w-[35px] cursor-pointer text-3xl leading-4 transition-all hover:text-black">
              +
            </button>
          </div>

          <p className="font-causten text-grayLight order-1 col-span-2 text-start text-lg font-medium lg:order-none lg:col-span-1 lg:text-center lg:font-bold">
            FREE<span className="inline lg:hidden"> shipping</span>
          </p>

          <p className="font-causten text-grayDark2 text-center text-lg font-bold lg:text-center">
            $29.00
          </p>
          <div className="flex items-center justify-center">
            <Icons.Trash className="fill-primary w-6 cursor-pointer hover:fill-[#6620C1]" />
          </div>
        </div>
        <div className="font-causten border-grayLight mx-auto grid w-11/12 max-w-7xl grid-cols-3 items-center gap-x-1 gap-y-5 py-8 text-center text-lg font-semibold text-white not-last:border-b md:w-4/5 lg:grid-cols-9 lg:gap-10 lg:py-[50px]">
          <div className="col-span-3 flex justify-start gap-3 text-start lg:col-span-4 lg:gap-5">
            <img
              src={images.womenThumbnail_2}
              className="max-w-[105px] rounded-xl object-contain"
              alt=""
            />
            <div className="font-causten">
              <h6 className="text-grayDark2 text-lg font-bold">
                White T-Shirt
              </h6>
              <p className="text-grayDark mt-1 text-sm font-medium">
                Color : Yellow
              </p>
              <p className="text-grayDark mt-0.5 text-sm font-medium">
                Size : M
              </p>
              <p className="text-grayDark mt-0.5 text-sm font-medium lg:hidden">
                Price : $29.00
              </p>
            </div>
          </div>

          <p className="font-causten text-grayDark2 hidden text-lg font-bold lg:block">
            $29.00
          </p>

          <div className="font-causten text-grayDark2 bg-secondary flex h-fit w-[40%] max-w-[140px] min-w-[90px] items-center justify-between rounded-xl px-0 py-3 text-xs font-medium">
            <button className="w-[25%] max-w-[35px] cursor-pointer text-3xl leading-4 transition-all hover:text-black">
              -
            </button>
            <input
              type="number"
              placeholder="1"
              value={1}
              className="w-[50%] max-w-[60px] appearance-none bg-transparent text-center text-xl outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button className="w-[25%] max-w-[35px] cursor-pointer text-3xl leading-4 transition-all hover:text-black">
              +
            </button>
          </div>

          <p className="font-causten text-grayLight order-1 col-span-2 text-start text-lg font-medium lg:order-none lg:col-span-1 lg:text-center lg:font-bold">
            FREE<span className="inline lg:hidden"> shipping</span>
          </p>

          <p className="font-causten text-grayDark2 text-center text-lg font-bold lg:text-center">
            $29.00
          </p>
          <div className="flex items-center justify-center">
            <Icons.Trash className="fill-primary w-6 cursor-pointer hover:fill-[#6620C1]" />
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-between gap-20 md:w-4/5 lg:flex-row xl:gap-50">
          <div className="font-causten mt-8 flex-5/12">
            <h5 className="text-grayDark2 text-2xl font-semibold">
              Discount Codes
            </h5>
            <p className="text-grayDark mt-2.5 text-base">
              Enter your coupon code if you have one
            </p>

            <form
              action="#"
              className="border-grayLight mt-10 flex w-full rounded-xl border text-lg"
            >
              <input type="text" className="w-2/3 px-5 outline-0" />
              <button className="bg-primary w-1/3 rounded-tr-xl rounded-br-xl px-5 py-3 text-sm text-white transition-all hover:bg-[#6620C1]">
                Apply Coupon
              </button>
            </form>

            <Link
              to="/shop"
              className="border-grayLight text-grayDark2 mt-9 inline-block rounded-lg border bg-white px-12 py-3 transition-all hover:bg-[#f5f5f5] hover:text-black"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="flex flex-7/12 flex-col bg-[#F3F3F3]">
            <div className="font-causten border-grayLight grid grid-cols-2 gap-x-20 gap-y-4 border-b px-8 py-5 text-base lg:px-20 lg:pt-9 lg:pb-10 lg:text-[22px]">
              <p className="text-grayDark2 font-medium">Sub Total</p>
              <p className="text-grayDark2 font-medium">$513.00</p>
              <p className="text-grayDark2 font-medium">Shipping</p>
              <p className="text-grayDark2 font-medium">$5.00</p>
              <p className="text-grayDark2 mt-6 font-bold">Grand Total</p>
              <p className="text-grayDark2 mt-6 font-bold">$518.00</p>
            </div>
            <div className="flex items-center justify-center py-5 lg:py-12">
              <Link
                to="/checkout"
                className="font-causten bg-primary w-fit rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6620C1] active:translate-y-0 lg:px-8 lg:py-3 lg:text-lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
