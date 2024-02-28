import React from "react";
import Image from "next/image";
import MButton from "../MButton";
import collection01 from "/public/collection01.jpg";
import collection02 from "/public/collection02.jpg";

const NewCollection = () => {
  return (
    //   First Image
    <div className="p-8 flex flex-row gap-12 justify-center ">
      <div className="flex   items-center   ">
        <img
          src={collection01.src}
          alt="image"
          width={500}
          height={300}
          className="rounded-md  "
        />

        <div
          className="absolute ml-6 mt-[320px] bg-zinc-600 bg-opacity-70 rounded-lg px-4      
         text-white  p-3"
        >
          <p>New Collection</p>
          <p className="text-2xl ">The base collection - Ideal every day.</p>
          <p className="text-xl mb-2">Find your unique style.</p>
          <MButton buttonText={"Shop Now"} />
        </div>
      </div>
      {/* Second Image */}
      <div className="flex     ">
        <img
          src={collection02.src}
          alt="image"
          width={460}
          height={300}
          className="rounded-md  "
        />

        <div
          className="absolute ml-16 mt-[450px] bg-zinc-600 bg-opacity-70 rounded-lg px-4   
            text-white p-3"
        >
          <p>New Collection</p>
          <p className="text-2xl">Be different in your own way!</p>
          <p className="text-xl mb-2">Find your unique style.</p>
          <MButton buttonText={"Shop Now"} />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
