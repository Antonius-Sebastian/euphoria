import React from "react";
import Icons from "../assets/icons";
import { filter, size } from "../constant";

const FilterBar = () => {
  return (
    <div className="border-grayLight hidden h-fit w-1/4 flex-col border md:flex">
      {/* Filter */}
      <div className="border-b-grayLight flex items-center justify-between border-b px-8 py-5">
        <h5 className="font-causten text-grayDark text-[22px] font-semibold">
          Filter
        </h5>
        <Icons.Filter />
      </div>
      <div className="border-b-grayLight flex flex-col gap-[18px] border-b px-8 py-10">
        {filter.map((item, id) => (
          <div key={id} className="flex justify-between gap-24">
            <h5 className="font-causten text-grayDark text-base font-semibold">
              {item}
            </h5>
            <Icons.ChevronRight />
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="border-b-grayLight flex items-center justify-between border-b px-8 py-5">
        <h5 className="font-causten text-grayDark text-[22px] font-semibold">
          Price
        </h5>
        <Icons.ChevronUp />
      </div>
      <div className="border-b-grayLight flex flex-col gap-[18px] border-b px-8 py-10">
        <div className="flex flex-wrap justify-between gap-[30px]">
          <div className="flex flex-1 flex-col items-start gap-5">
            <h4 className="font-causten text-grayDark text-base font-semibold">
              Highest Price
            </h4>
            <input
              type="number"
              className="font-causten border-grayLight text-grayDark2 w-full rounded-lg border px-9 py-2 text-center text-base font-medium"
              placeholder="$70"
            />
          </div>
          <div className="flex flex-1 flex-col items-end gap-5">
            <h4 className="font-causten text-grayDark text-base font-semibold">
              Highest Price
            </h4>
            <input
              type="number"
              className="font-causten border-grayLight text-grayDark2 w-full rounded-lg border px-9 py-2 text-center text-base font-medium"
              placeholder="$70"
            />
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="border-b-grayLight flex items-center justify-between border-b px-8 py-5">
        <h5 className="font-causten text-grayDark text-[22px] font-semibold">
          Size
        </h5>
        <Icons.ChevronUp />
      </div>
      <div className="border-b-grayLight flex flex-col gap-[18px] border-b px-8 py-10">
        <div className="grid grid-cols-3 gap-x-5 gap-y-[18px]">
          {size.map((item, id) => (
            <button
              key={id}
              className="border-grayLight font-causten text-grayDark2 cursor-pointer rounded-lg border px-[18px] py-2 text-sm font-semibold uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
