import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosReturnLeft } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
  return (
    <div>
      <div className="flex p-12 mt-14">
        <div className="w-[20%]">
          <p className="text-xl"> Why Chosse Us ?</p>
        </div>
        {/* 1st */}

        <div className="w-[20%]">
          <div className="flex gap-3">
            <BsCart2 className="p-1 text-4xl  border-2 text-white rounded-[50%] border-[#C37B7F] bg-[#C37B7F] " />

            <p className="text-2xl">Free Shiping</p>
          </div>
          <div className="ml-12 mt-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="w-[20%]">
          <div className="flex gap-3">
            <CiDeliveryTruck className="p-1 text-4xl  border-2 text-white rounded-[50%] border-[#C37B7F] bg-[#C37B7F] " />

            <p className="text-2xl">Fast Delivery</p>
          </div>
          <div className="ml-12 mt-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="w-[20%]">
          <div className="flex gap-3">
            <IoIosReturnLeft className="p-1 text-4xl  border-2 text-white rounded-[50%] border-[#C37B7F] bg-[#C37B7F]   " />

            <p className="text-2xl">Easy Returns</p>
          </div>
          <div className="ml-12 mt-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>

        {/* 4th */}
        <div className="w-[20%]">
          <div className="flex gap-3">
            <RiSecurePaymentLine className=" p-1 text-4xl  border-2 text-white rounded-[50%] border-[#C37B7F] bg-[#C37B7F] " />

            <p className="text-2xl">Secure Payments</p>
          </div>
          <div className="ml-12 mt-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
