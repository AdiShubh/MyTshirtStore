import React from "react";
import { trendingProducts } from "../../Utils/index";
import AddCartButton from "../AddCartButton";

const TrendingProducts = () => {
  return (
    <>
      <div className="bg-gray-200 pt-4">
        <div className=" text-center">
          <p>Popular Products</p>
          <p className="text-4xl font-semibold">Trending Now</p>
        </div>
        <div className="flex flex-row gap-6  p-8 justify-center">
          {trendingProducts.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img
                    src={item.image}
                    width={250}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <div className="ml-1">
                  <div className="font-bold mt-2">{item.name}</div>
                  <div className="text-gray-400">{item.category}</div>
                  <div>{item.price}</div>
                  <div className="flex flex-row gap-2">
                    {item.availColors.map((color, index) => {
                      return <div key={index}>{color}</div>;
                    })}
                  </div>
                  <AddCartButton buttonText="Add To Cart" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
