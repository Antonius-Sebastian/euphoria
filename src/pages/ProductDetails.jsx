import React from "react";
import images from "../assets/images";
import Icons from "../assets/icons";
import { productSpecification, womenProducts } from "../constant";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = womenProducts.find(
    (item) => item.productName.toLowerCase().replace(/\s+/g, "-") === slug,
  );
  return (
    <div className="mx-auto w-11/12 max-w-7xl md:w-4/5">
      {/* Product Details */}
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-[74px]">
        <div className="flex-1">
          <img
            src={product.thumbnailImage}
            className="w-full object-contain"
            alt=""
          />
        </div>

        <div className="flex flex-1 flex-col gap-9 pt-[30px] pb-[38px]">
          <p className="font-causten text-grayDark flex items-center gap-4 text-lg font-medium">
            Shop
            <Icons.ChevronRight className="fill-grayDark w-5" />
            Women
            <Icons.ChevronRight className="fill-grayDark w-5" />
            Top
          </p>
          <h1 className="font-coreSans text-grayDark2 text-3xl leading-[140%] font-bold capitalize md:max-w-[70%] md:text-[34px]">
            {product.productName}
          </h1>

          {/* Rating & Comments */}
          <div className="flex justify-between">
            {/* Rating */}
            <div className="flex items-center justify-between gap-[15px]">
              {/* Rating stars */}
              <div className="flex justify-between gap-2.5">
                <img
                  src={Icons.star}
                  alt=""
                  className="w-[22px] object-contain"
                />
                <img
                  src={Icons.star}
                  alt=""
                  className="w-[22px] object-contain"
                />
                <img
                  src={Icons.star}
                  alt=""
                  className="w-[22px] object-contain"
                />
                <img
                  src={Icons.star}
                  alt=""
                  className="w-[22px] object-contain"
                />
                <img
                  src={Icons.star}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
              <p className="text-grayDark font-causten text-lg font-medium">
                5.0
              </p>
            </div>

            {/* Comments */}
          </div>

          {/* Size */}
          <div className="flex flex-col justify-between gap-[25px]">
            <p className="font-causten text-grayDark2 text-lg font-semibold">
              Select Size
            </p>
            <div className="flex gap-5">
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="xs"
                  className="peer hidden"
                />
                <div className="border-grayLight peer-checked:bg-grayDark2 font-causten text-grayDark2 min-w-10 rounded-xl border-[1.5px] px-2.5 py-2 text-center text-sm font-medium uppercase transition-all peer-checked:border-0 peer-checked:text-white hover:bg-[#4A4F4F] hover:text-white">
                  xs
                </div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="s"
                  className="peer hidden"
                />
                <div className="border-grayLight peer-checked:bg-grayDark2 font-causten text-grayDark2 min-w-10 rounded-xl border-[1.5px] px-2.5 py-2 text-center text-sm font-medium uppercase transition-all peer-checked:text-white hover:bg-[#4A4F4F] hover:text-white">
                  s
                </div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="m"
                  className="peer hidden"
                />
                <div className="border-grayLight peer-checked:bg-grayDark2 font-causten text-grayDark2 min-w-10 rounded-xl border-[1.5px] px-2.5 py-2 text-center text-sm font-medium uppercase transition-all peer-checked:text-white hover:bg-[#4A4F4F] hover:text-white">
                  m
                </div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="l"
                  className="peer hidden"
                />
                <div className="border-grayLight peer-checked:bg-grayDark2 font-causten text-grayDark2 min-w-10 rounded-xl border-[1.5px] px-2.5 py-2 text-center text-sm font-medium uppercase transition-all peer-checked:text-white hover:bg-[#4A4F4F] hover:text-white">
                  l
                </div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="xl"
                  className="peer hidden"
                />
                <div className="border-grayLight peer-checked:bg-grayDark2 font-causten text-grayDark2 min-w-10 rounded-xl border-[1.5px] px-2.5 py-2 text-center text-sm font-medium uppercase transition-all peer-checked:text-white hover:bg-[#4A4F4F] hover:text-white">
                  xl
                </div>
              </label>
            </div>
          </div>

          {/* Colours */}
          <div className="flex flex-col justify-between gap-[25px]">
            <p className="font-causten text-grayDark2 text-lg font-semibold">
              Colours Available
            </p>
            <div className="flex gap-6">
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#EDD146"
                  className="peer hidden"
                />
                <div className="bg-grayDark2 peer-checked:outline-grayDark2 h-[22px] w-[22px] rounded-full outline-offset-4 transition-all peer-checked:outline-2 hover:outline-1"></div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#3C4242"
                  className="peer hidden"
                />
                <div className="h-[22px] w-[22px] rounded-full bg-[#EDD146] outline-offset-4 outline-[#EDD146] transition-all peer-checked:outline-2 hover:outline-1"></div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#EB84B0"
                  className="peer hidden"
                />
                <div className="h-[22px] w-[22px] rounded-full bg-[#EB84B0] outline-offset-4 outline-[#EB84B0] transition-all peer-checked:outline-2 hover:outline-1"></div>
              </label>
              <label className="relative flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#EB84B0"
                  className="peer hidden"
                />
                <div className="h-[22px] w-[22px] rounded-full bg-[#9C1F35] outline-offset-4 outline-[#9C1F35] transition-all peer-checked:outline-2 hover:outline-1"></div>
              </label>
            </div>
          </div>

          {/* Add-to-Cart & Price */}
          <div className="border-b-grayLight flex items-center justify-start gap-[25px] border-b pb-9">
            <Link
              to="#"
              className="font-causten bg-primary flex items-center justify-between gap-3 rounded-lg px-5 py-3 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6620C1] active:translate-y-0 md:px-10"
            >
              <Icons.ShoppingCart className="stroke-white stroke-2" />
              Add to Cart
            </Link>
            <p className="font-causten text-grayDark2 border-grayDark2 rounded-lg border px-10 py-3 text-lg font-bold">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-0 gap-y-5 md:gap-x-2 lg:gap-x-16">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-secondary flex items-center justify-center rounded-full p-[15px]">
                <Icons.CreditCard />
              </div>
              <h6 className="font-causten text-grayDark2 text-sm font-medium md:text-lg">
                Secure Payment
              </h6>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="bg-secondary flex items-center justify-center rounded-full p-[15px]">
                <Icons.SizeAndFit />
              </div>
              <h6 className="font-causten text-grayDark2 text-sm font-medium md:text-lg">
                Size & Fit
              </h6>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="bg-secondary flex items-center justify-center rounded-full p-[15px]">
                <Icons.Truck />
              </div>
              <h6 className="font-causten text-grayDark2 textsme font-medium md:text-lg">
                Free Shipping
              </h6>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="bg-secondary flex items-center justify-center rounded-full p-[15px]">
                <Icons.FreeShipping />
              </div>
              <h6 className="font-causten text-grayDark2 text-sm font-medium md:text-lg">
                Free Shipping & Returns
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Product Descriptions */}
      <div className="mt-20 flex flex-col items-center justify-between gap-12 md:mt-[100px] md:gap-24 lg:flex-row">
        <div className="flex flex-2/5 flex-col gap-[30px]">
          <h2 className="text-heading">Product Description</h2>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] md:flex-row">
              <button className="font-causten text-grayDark2 border-b-grayDark2 items-center border-b pb-4 text-start text-lg font-medium">
                Description
              </button>
              <button className="font-causten text-grayDark border-b-grayDark2 flex items-center justify-between gap-4 pb-4 text-start text-lg">
                User Comments
                <div className="bg-primary font-causten flex h-5 w-5 items-center justify-center rounded-sm text-start text-[10px] font-medium text-white">
                  21
                </div>
              </button>
              <button className="font-causten text-grayDark border-b-grayDark2 flex items-center justify-between gap-4 pb-4 text-lg">
                Question & Answer
                <div className="bg-grayDark2 font-causten flex h-5 w-5 items-center justify-center rounded-sm text-[10px] font-medium text-white">
                  4
                </div>
              </button>
            </div>

            <p className="font-causten text-grayDark text-base">
              100% Bio-washed Cotton – makes the fabric extra soft & silky.
              Flexible ribbed crew neck. Precisely stitched with no pilling & no
              fading. Provide all-time comfort. Anytime, anywhere. Infinite
              range of matte-finish HD prints.
            </p>
          </div>
          <div className="bg-secondary grid grid-cols-2 rounded-xl md:grid-cols-3">
            {productSpecification.map((item, id) => (
              <div
                key={id}
                className="border-grayLight flex flex-col justify-center gap-3 border-r border-b py-5 pl-6"
              >
                <h6 className="font-causten text-grayDark text-base">
                  {item.title}
                </h6>
                <p className="font-causten text-grayDark2 text-base font-medium">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Video */}
        <div className="flex-1/3">
          <img
            src={images.video}
            className="rounded-xl object-contain"
            alt=""
          />
        </div>
      </div>

      {/* Similar Products */}
      <div className="py-20 md:py-[100px]">
        <h2 className="text-heading">Similar Products</h2>

        <div className="mt-[30px] grid grid-cols-2 gap-6 sm:grid-cols-4">
          {womenProducts
            .filter((item) => item.productName !== product.productName)
            .map((item, id) => <ProductCard key={id} {...item} />)
            .splice(3)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
