// import React from "react";
import MButton from "../MButton";

const Footer = () => {
  return (
    <div className="p-6 divide-y-2 divide-solid bg-[#e69b9f]">
      {/* Subscription Section */}
      <div className="flex flex-col gap-4 justify-center items-center text-center p-6">
        <p className="text-xl md:text-2xl">
          Subscribe to get offers in your inbox.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
          <input
            className=" rounded-md p-2 w-full"
            type="text"
            placeholder="Enter your email address"
          />
          <MButton buttonText={"Subscribe"} />
        </div>
      </div>

      {/* Menu Section */}
      <div
        id="menu"
        className="flex flex-wrap justify-center gap-4 p-6 text-center"
      >
        <button className="hover:text-white">Buy T-Shirts</button>
        <button className="hover:text-white">All-Products</button>
        <button className="hover:text-white">Men</button>
        <button className="hover:text-white">Women</button>
        <button className="hover:text-white">Kids</button>
        <button className="hover:text-white">About</button>
        <button className="hover:text-white">Contacts</button>
      </div>

      {/* Copyright Section */}
      <div className="pt-6 text-center text-sm">
        <p>
          Copyright © 2024 My T-Shirt Store | Powered By My T-Shirt Store
        </p>
      </div>
    </div>
  );
};

export default Footer;
