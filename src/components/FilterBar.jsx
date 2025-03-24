import React, { useState } from "react";
import Icons from "../assets/icons";
import { filter, size } from "../constant";
import { Link } from "react-router-dom";

const FilterBar = ({ isOpen }) => {
  const display = {
    true: "flex",
    false: "hidden",
  };

  const [openFilters, setOpenFilters] = useState({
    filter: true,
    price: true,
    size: true,
  });

  const toggleFilter = (filterName) => {
    setOpenFilters((prevValue) => ({
      ...prevValue,
      [filterName]: !prevValue[filterName],
    }));
  };

  return (
    <div
      className={`border-grayLight transition-all ${display[isOpen]} absolute top-50 left-1/2 z-10 h-fit w-11/12 -translate-x-1/2 flex-col border bg-white md:w-3/4 lg:relative lg:inset-0 lg:flex lg:w-1/4 lg:translate-x-0`}
    >
      {/* Filter */}
      <div className="border-b-grayLight flex items-center justify-between border-b px-8 py-5">
        <h5 className="font-causten text-grayDark text-[22px] font-semibold">
          Filter
        </h5>
        <button
          className="hidden cursor-pointer lg:block"
          onClick={() => {
            toggleFilter("filter");
          }}
        >
          <Icons.Filter />
        </button>
      </div>

      {openFilters.filter && (
        <>
          <div className="border-b-grayLight flex flex-col gap-[18px] border-b px-8 py-10 transition-all">
            {filter.map((item, id) => (
              <Link
                to="#"
                key={id}
                className="text-grayDark fill-grayDark hover:fill-grayDark2 font-causten hover:text-grayDark2 flex justify-between gap-2 text-base font-semibold transition-all"
              >
                <h5 className="">{item}</h5>
                <Icons.ChevronRight className="w-5" />
              </Link>
            ))}
          </div>

          {/* Price */}
          <button
            onClick={() => {
              toggleFilter("price");
            }}
            className="border-b-grayLight font-causten text-grayDark flex cursor-pointer items-center justify-between border-b px-8 py-5 text-[22px] font-semibold transition-all hover:bg-[#f5f5f5] hover:text-[#2C2C2C]"
          >
            Price
            <span className="transition-all duration-200 group-hover:translate-y-[-2px]">
              {openFilters.price ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
            </span>
          </button>
          {openFilters.price && (
            <div className="border-b-grayLight flex flex-col gap-[18px] border-b px-8 py-10 transition-all">
              <div className="flex flex-wrap justify-between gap-[30px]">
                <div className="flex flex-1 flex-col items-start gap-5">
                  <h4 className="font-causten text-grayDark text-base font-semibold">
                    Lowest Price
                  </h4>
                  <input
                    type="number"
                    className="font-causten border-grayLight text-grayDark2 w-full rounded-lg border px-1 py-2 text-center text-base font-medium"
                    placeholder="$10"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-5">
                  <h4 className="font-causten text-grayDark text-base font-semibold">
                    Highest Price
                  </h4>
                  <input
                    type="number"
                    className="font-causten border-grayLight text-grayDark2 w-full rounded-lg border px-1 py-2 text-center text-base font-medium"
                    placeholder="$70"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Size */}
          <button
            onClick={() => {
              toggleFilter("size");
            }}
            className="border-b-grayLight font-causten text-grayDark flex cursor-pointer items-center justify-between border-b px-8 py-5 text-[22px] font-semibold transition-all hover:bg-[#f5f5f5] hover:text-[#2C2C2C]"
          >
            Size
            <span className="transition-all duration-200 group-hover:translate-y-[-2px]">
              {openFilters.size ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
            </span>
          </button>
          {openFilters.size && (
            <div className="border-b-grayLight flex flex-col gap-[18px] border-b px-8 py-10">
              <div className="grid grid-cols-3 gap-x-5 gap-y-[18px]">
                {size.map((item, id) => (
                  <label key={id} className="relative flex items-center">
                    <input
                      type="checkbox"
                      value={item}
                      className="peer hidden"
                    />
                    <div className="peer-checked:bg-grayDark2 border-grayLight font-causten text-grayDark2 w-full cursor-pointer rounded-lg border px-[18px] py-2 text-center text-sm font-semibold uppercase transition-all peer-checked:text-white hover:bg-[#4A4F4F] hover:text-white">
                      {item}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilterBar;
