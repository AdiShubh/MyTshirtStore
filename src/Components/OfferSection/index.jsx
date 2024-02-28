import React from "react";
import image from "/public/offer01.jpg";
import MButton from "../MButton";

const OfferSection = () => {
  return (
    <div className="p-8 flex flex-col gap-8  ">
      <div className="flex ">
        <img
          src={image.src}
          alt="offerimage"
          className="w-full h-[650px] rounded-md"
        />
        <div className="absolute mx-44 mt-[350px] text-white bg-zinc-700 p-5 rounded-lg bg-opacity-60">
          <p className="text-2xl">Limited Time Offer</p>
          <p className="text-4xl">Special Edition</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-2xl mb-4">
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </p>
          <MButton buttonText={"Shop Now"}></MButton>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
