"use client";

import React from "react";
import { toast } from "react-toastify";

const AddCartButton = ({ buttonText }) => {
  const message = () => {
    toast.warning(
      "Work in Progress. Hey there, I am working on this feature these days."
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          message();
          //alert("Work in Progress. Hey there, I am still working on this.");
        }}
        className="rounded-sm border border-gray-600  px-2 py-1 bg-[#e19a9e]  text-xl text-gray-800 hover:bg-gray-600 hover:text-white"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AddCartButton;
