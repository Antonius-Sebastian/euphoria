import React from "react";
import Icons from "../assets/icons";
import { Link } from "react-router-dom";

const ProductCard = ({ thumbnailImage, productName, brand, price }) => {
  return (
    <Link
      to={`/shop/${productName.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col gap-[30px]"
    >
      <div className="relative">
        <img
          src={thumbnailImage}
          className="w-full rounded-xl object-contain"
          alt={productName}
        />
        <div className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 sm:top-7 sm:right-5">
          <Icons.Heart className="h-5 w-5" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex max-w-7/12 flex-col">
          <h5 className="font-causten text-grayDark2 overflow-hidden text-base font-semibold overflow-ellipsis whitespace-nowrap">
            {productName}
          </h5>
          <p className="font-causten text-grayDark text-sm font-medium">
            {brand}'s Brand
          </p>
        </div>
        <p className="font-causten bg-secondary text-grayDark2 flex w-fit items-center justify-center rounded-lg px-3 py-1 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
