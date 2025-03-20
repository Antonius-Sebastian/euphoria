import React from "react";
import FilterBar from "../components/FilterBar";
import { womenProducts } from "../constant";
import Icons from "../assets/icons";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <>
      <div className="mx-auto w-11/12 max-w-7xl md:w-4/5">
        <div className="flex flex-col justify-between md:flex-row md:gap-[50px]">
          <FilterBar />
          {/* Product List */}
          <div className="flex-1 py-5 md:py-[50px]">
            <div className="flex items-center justify-between">
              <h3 className="font-causten text-grayDark2 text-[22px] font-semibold">
                Women's Clothing
              </h3>
              <div className="border-grayLight flex items-center justify-between gap-4 border px-4 py-2 md:hidden">
                <h5 className="font-causten text-grayDark text-[22px] font-semibold">
                  Filter
                </h5>
                <Icons.Filter />
              </div>
            </div>
            <div className="mt-[50px] grid grid-cols-2 gap-6 sm:grid-cols-3">
              {womenProducts.map((item, id) => (
                <ProductCard key={id} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-14 sm:py-24">
          <h2 className="text-heading">
            Clothing for Women Online in Indonesia
          </h2>
          <div className="px-3 text-justify sm:px-7">
            <h6 className="font-coreSans text-grayDark mt-6 font-bold md:mt-[30px] md:text-[20px] md:leading-8">
              Reexplore Women's Clothing Collection Online at Euphoria
            </h6>
            <p className="font-causten text-grayDark mt-4 font-light tracking-wide md:mt-6 md:text-[20px] md:leading-8">
              Women's Clothing – Are you searching for the best website to buy
              Clothing for Women online in Indonesia? Well, your search for the
              coolest and most stylish womens clothing ends here. From trendy
              Casual Womens Wear Online shopping to premium quality cotton
              women's apparel, <span className="font-bold">Euphoria</span> has
              closet of Women Collection covered with the latest and best
              designs of Women's Clothing Online.
            </p>
            <p className="font-causten text-grayDark mt-3 font-light tracking-wide md:mt-5 md:text-[20px] md:leading-8">
              Our collection of clothes for women will make you the trendsetter
              with an iconic resemblance of choice in Womens Wear.
            </p>
            <h6 className="font-coreSans text-grayDark mt-4 font-bold md:mt-6 md:text-[20px] md:leading-8">
              One-Stop Destination to Shop Every Clothing for Women: Euphoria
            </h6>
            <p className="font-causten text-grayDark mt-4 font-light tracking-wide md:mt-6 md:text-[20px] md:leading-8">
              Today, Clothing for Women is gaining more popularity above all.
              This is because gone are the days when women were used to carrying
              uncomfortable fashion. Today, a lady looks prettier when she is in
              Casual Womens Wear which is a comfortable outfit. Concerning this,
              <span className="font-bold">Euphoria</span> has a big fat range of
              Stylish Women's Clothing that would make her the winner wherever
              she goes.
            </p>
            <p className="font-causten text-grayDark mt-3 font-light tracking-wide md:mt-5 md:text-[20px] md:leading-8">
              Our collection of clothes for women will make you the trendsetter
              with an iconic resemblance of choice in Womens Wear. It is quite
              evident to say that there are very few Womens Clothing online
              stores where you can buy Western Wear for Women comprising the
              premium material and elegant design that you are always seeking
              for. Basically,
            </p>

            <h6 className="font-coreSans text-grayDark mt-3 leading-8 font-bold md:mt-5 md:text-[20px]">
              See More
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
