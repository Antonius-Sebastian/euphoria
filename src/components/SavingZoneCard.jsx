import React from "react";
import Icons from "../assets/icons";
import { Link } from "react-router-dom";

const SavingZoneCard = ({
  colSpan,
  image,
  title,
  subtitle,
  deals,
  limited,
  contentAlign,
  textAlign,
  color,
}) => {
  const colSpanVariants = {
    2: "col-span-1 lg:col-span-2",
    3: "col-span-1 lg:col-span-3",
  };

  const titleFontSizeVariants = {
    2: "text-[28px] leading-[38px]",
    3: "text-[32px] leading-[44px]",
  };

  const subtitleFontSizeVariants = {
    2: "text-[14px]",
    3: "text-[16px]",
  };

  const dealsFontSizeVariants = {
    2: "text-[18px]",
    3: "text-[20px]",
  };

  const buttonSizeVariants = {
    2: "px-[25px] py-[10px]",
    3: "px-[35.5px] py-[11px]",
  };

  const justifyVariants = {
    left: "justify-start ",
    right: "justify-end ",
  };

  const alignItemsVariants = {
    left: "items-start",
    right: "items-end",
  };

  const textAlignVariants = {
    left: "text-start",
    right: "text-end",
  };

  const colorVariants = {
    light: "text-white ",
    dark: "text-white md:text-grayDark2 ",
  };

  const arrowColorVariants = {
    light: "fill-white",
    dark: "fill-grayDark2",
  };

  const borderVariants = {
    light: "border-white hover:bg-white hover:text-grayDark2",
    dark: "border-white md:border-grayDark2 hover:bg-white md:hover:bg-grayDark2 md:hover:text-white hover:text-grayDark2",
  };

  return (
    <div
      className={`${colSpanVariants[colSpan]} flex rounded-xl ${justifyVariants[contentAlign]} items-center bg-cover bg-no-repeat px-5 py-8`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className={`flex max-w-[156px] flex-col ${textAlignVariants[textAlign]} ${alignItemsVariants[textAlign]} ${colorVariants[color]} ${colSpan == 3 ? "md:mr-20" : ""}`}
      >
        {limited && (
          <p className="bg-grayDark2 font-causten w-fit rounded-s px-4 py-2.5 font-semibold">
            Limited Stock
          </p>
        )}
        <h3
          className={`font-coreSans mt-7 text-[28px] ${titleFontSizeVariants[colSpan]} font-bold tracking-wide`}
        >
          {title}
        </h3>
        <p
          className={`font-causten mt-2.5 ${subtitleFontSizeVariants[colSpan]} font-semibold`}
        >
          {subtitle}
        </p>
        <p
          className={`font-causten mt-[9px] ${dealsFontSizeVariants[colSpan]} font-bold uppercase`}
        >
          Upto {deals} off
        </p>
        <div className="flex flex-col items-center">
          <Icons.ArrowDown
            className={`mt-[30px] h-10 w-12 ${arrowColorVariants[color]}`}
          />
          <Link
            to="/shop"
            className={`font-causten mt-10 w-fit rounded-sm border transition-all ${borderVariants[color]} bg-transparent ${buttonSizeVariants[colSpan]} text-xs font-medium uppercase`}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavingZoneCard;
