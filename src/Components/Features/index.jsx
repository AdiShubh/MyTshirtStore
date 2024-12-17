
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosReturnLeft } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className="p-6 md:p-12 mt-1">
      <div className="text-center md:text-left mb-10">
        <p className="text-2xl md:text-3xl font-semibold">Why Choose Us?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div>
          <div className="flex items-center gap-3">
            <BsCart2 className="p-1 text-4xl border-2 text-white rounded-full border-[#C37B7F] bg-[#C37B7F]" />
            <p className="text-xl md:text-2xl font-semibold">Free Shipping</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div>
          <div className="flex items-center gap-3">
            <CiDeliveryTruck className="p-1 text-4xl border-2 text-white rounded-full border-[#C37B7F] bg-[#C37B7F]" />
            <p className="text-xl md:text-2xl font-semibold">Fast Delivery</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div>
          <div className="flex items-center gap-3">
            <IoIosReturnLeft className="p-1 text-4xl border-2 text-white rounded-full border-[#C37B7F] bg-[#C37B7F]" />
            <p className="text-xl md:text-2xl font-semibold">Easy Returns</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              tempora vero corporis dolore deleniti perferendis quod rem vel
              voluptatibus atque.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div>
          <div className="flex items-center gap-3">
            <RiSecurePaymentLine className="p-1 text-4xl border-2 text-white rounded-full border-[#C37B7F] bg-[#C37B7F]" />
            <p className="text-xl md:text-2xl font-semibold">Secure Payments</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 text-justify">
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
