import React from "react";
import { saleProducts } from "@/Utils";
import Image from "next/image";
import AddCartButton from "../AddCartButton";
const SaleSection = () => {
  return (
    <>
      <div className="bg-gray-200 pt-4">
        <div className=" text-center">
          <p>Summer Collection</p>
          <p className="text-4xl font-semibold">T-Shirts on Sale</p>
        </div>
        <div className="flex flex-row gap-6  p-8 justify-center">
          {saleProducts.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <Image
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

export default SaleSection;
