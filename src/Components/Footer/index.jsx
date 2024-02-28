import React from "react";
import MButton from "../MButton";

const Footer = () => {
  return (
    <div className="p-8  divide-y-2 divide-solid  bg-[#e69b9f]  ">
      <div className="flex flex-col gap-4 justify-center items-center p-8 mb-4   ">
        <p className="text-2xl"> Subscribe to get offers in your inbox.</p>
        <div className="flex gap-5">
          <input
            className="border-2 rounded-md w-[400px] p-2"
            type="text"
            placeholder="Enter your email address"
          />
          {/* <button className="text-xl ml-8 font-semibold bg-cyan-300 p-2 rounded-sm">
            Subscribe{" "}
          </button> */}
          <MButton buttonText={"Subscribe"}></MButton>
        </div>
      </div>
      <div id="menu" className="flex flex-row  gap-8 justify-center p-8">
        <button>Buy T-Shirts</button>
        <button>All-Products</button>
        <button>Men</button>
        <button>Women</button>
        <button>Kids</button>
        <button>About</button>
        <button>Contacts</button>
      </div>
      <div className="pt-8 text-center">
        <p>Copyright © 2024 My T-Shirt Store | Powered By My T-Shirt Store</p>
      </div>
    </div>
  );
};

export default Footer;
