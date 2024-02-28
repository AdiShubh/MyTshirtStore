import React from "react";

const MButton = ({ buttonText }) => {
  return (
    <div>
      <button className="p-2 bg-gray-900  text-2xl text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default MButton;
