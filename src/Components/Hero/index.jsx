import React from "react";
import heroImage from "../../../public/hero02.png";
import MButton from "../MButton";

const Hero = () => {
  return (
    <div className="bg-[#ffe4e1] ">
      <div className="flex flex-col flex-col-reverse md:w-[80%] mx-auto md:flex-row md:gap-10 justify-center  md:my-6  ">
        
          <div className="flex flex-col  my-10 md:mt-44 mx-auto md:mx-0 text-gray-750 text-center md:text-left">
             <p className="text-2xl font-normal mb-2 ml-1">T-Shirts</p>
             <p className="text-5xl md:text-6xl font-semibold mt-3">Slick. Modern.</p>
             <p className="text-5xl md:text-6xl font-semibold">Awesome.</p>
             <div className="mt-4">
   
            <MButton buttonText="Shop Now" />
          </div>
     </div>


       

        <img
          src={heroImage.src}
          alt="heroImage"
          className=" h-90vh md:h-[600px]   "
        />
      </div>
    </div>
  );
};

export default Hero;
