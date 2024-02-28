import React from "react";
import heroImage from "../../../public/hero02.png";
import MButton from "../MButton";

const Hero = () => {
  return (
    <div className="bg-[#ffe4e1]">
      <div className="flex flex-row justify-between   my-6  ">
        <div className="flex flex-col  mt-44    mx-auto  text-gray-750  ">
          <p className="text-xl font-normal mb-2 ml-1">T-Shirts</p>
          <p className="text-6xl font-semibold mt-3">Slick. Modern.</p>
          <p className="text-6xl font-semibold">Awesome.</p>
          <div className=" mt-4 ">
            {/* <button className="p-2 bg-gray-900  text-2xl text-white">
              Shop Now
            </button> */}
            <MButton buttonText="Shop Now" />
          </div>
        </div>

        <img
          src={heroImage.src}
          alt="heroImage"
          className=" h-[600px] mr-0  "
        />
      </div>
    </div>
  );
};

export default Hero;
