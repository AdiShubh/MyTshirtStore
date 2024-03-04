"use client";

import { mailAction } from "@/app/actions/mailaction";
import { useState } from "react";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(email);
    await mailAction({ email });
  };

  return (
    <div className="h-screen">
      <div className="text-center text-3xl text-[#ed7b81] font-semibold mt-8">
        <p> Reset Password </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="  rounded-md p-6 flex flex-col gap-2 mx-auto mt-20 w-[450px] border-2 border-gray-400">
          <p>Please Enter Your Registered Email Address</p>

          <input
            type="email"
            placeholder="Your Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#e19a9e] p-2"
          />
          <div>
            <button className="mt-2 text-2xl px-4 py-1 text-gray-950 font-semibold   bg-[#e19a9e] rounded-sm  hover:bg-black hover:text-white">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetForm;
