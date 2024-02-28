"use client";

import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const AddProduct = () => {
  const [resource, setResource] = useState([]);

  function handleUpload(results) {
    console.log(resource);
    console.log(results?.info);
    setResource(results?.info);
  }

  return (
    <div>
      <div className=" p-2  w-[70%] border-2 border-gray-500 mx-auto my-10 h-screen rounded-md">
        <div className="text-2xl font-semibold text-center p-4 bg-[#eeb5b8] rounded-md  ">
          Add Product
        </div>
        <div className="flex flex-col  h-auto  ">
          <div
            name="form"
            className="p-5    flex flex-col gap-4 border-2 border-[#e6a4a8] rounded-sm   w-[94%] mx-auto mt-8"
          >
            <div className="flex gap-4 ">
              <label className="w-[210px] text-xl">Product Name :</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                required
                className="w-[70%]  border-2 px-2 py-2"
              />
            </div>
            <div className="flex gap-4 ">
              <label className="w-[210px] text-xl">Product Description :</label>
              <textarea
                type="text"
                placeholder="Enter Product Description"
                className="w-[70%] border-2 px-2 py-2"
              />
            </div>
            <div className="flex gap-4 ">
              <label className="w-[210px] text-xl">Product Category :</label>
              <select className="w-[70%] border-2 px-2  py-2" required>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <div className="flex gap-4 ">
              <label className="w-[210px] text-xl">Product Sizes :</label>
              <select className="w-[70%] border-2 px-2 py-2" required>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="flex gap-4 ">
              <label className="w-[210px] text-xl">Product Price :</label>
              <input
                type="text"
                placeholder="Enter Product Price"
                required
                className="w-[70%]  border-2 px-2 py-2"
              />
            </div>
            <div className="flex gap-4 ">
              <label className="w-[210px] text-xl">Available Stock :</label>
              <input
                type="text"
                placeholder="Enter Product Stock Available"
                required
                className="w-[70%]  border-2 px-2 py-2"
              />
            </div>
          </div>
          <div
            name="images"
            className="p-5 flex flex-col gap-4 border-2 border-[#e6a4a8] rounded-sm   w-[94%] mx-auto mt-8"
          >
            <div>
              <CldUploadWidget
                uploadPreset="TshirtProducts"
                onSuccess={handleUpload}
                // onSuccess={(result, { widget }) => {
                //   setResource(result?.info);
                //   console.log(result?.info);
                //   //widget.close();
                // }}
              >
                {({ open }) => {
                  function handleOnClick(e) {
                    //e.preventDefault();
                    open();
                  }
                  return <button onClick={handleOnClick}>Upload</button>;
                }}
              </CldUploadWidget>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
