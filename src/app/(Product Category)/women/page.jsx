import React from "react";
import FilterSection from "@/Components/FilterSection/page";
import ProductCard from "@/Components/ProductCard";

import { trendingProducts } from "../../../Utils/index";

const WomenCategory = () => {
  return (
    <div>
      <div className="flex   ">
        <FilterSection />
        <div className="mx-4 w-[70%]  border border-pink-500 h-auto  mb-10 ">
          <div className="ml-8 mt-8">
            <p className="text-4xl mb-4">Women</p>
            <p className="text-xl pb-4 border-b-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              mollitia, temporibus ratione, iure rerum molestias quo aperiam,
              voluptates deleniti sint repellendus. Voluptatem corporis officiis
              in.
            </p>
            <div className="flex justify-between mt-2">
              <p>Shows 1-8 of all 12 results</p>
              <select>
                <option>Default Sorting</option>
                <option>Sort by Popularity</option>
                <option>Sort by Latest</option>
                <option>Sort by Price: Low to High</option>
                <option>Sort by Price: High to Low</option>
              </select>
            </div>
            {/* Products for Womens Category */}
            <div className="flex  gap-8 my-8">
              {trendingProducts
                .filter((product) => product.category === "Women")
                .map((product) => (
                  <ProductCard product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCategory;
