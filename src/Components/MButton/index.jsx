"use client"

import React from "react";
import { toast } from "react-toastify";

const MButton = ({ buttonText }) => {
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
      className="p-2 bg-gray-900  text-2xl text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default MButton;
