"use client";

import React, { useState } from "react";
import { UpdatePassword } from "../../../actions/updatepassword";

const ResetPassword = ({ params }) => {
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await UpdatePassword({ newPassword, token: params.token });
    //console.log(newPassword, rePassword);
  };

  return (
    <div className="h-screen">
      <div className="text-center text-3xl text-[#ed7b81] font-semibold mt-8">
        <p> Reset Password </p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="  rounded-md p-6 flex flex-col gap-2 mx-auto mt-20 w-[450px] border-2 border-gray-400">
          <label htmlFor="password">New Password</label>

          <input
            name="password"
            type="text"
            placeholder="Your Email Address"
            required
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-[#e19a9e] p-2"
          />
          <label htmlFor="repassword">Re-enter Password</label>

          <input
            name="repassword"
            type="text"
            placeholder="Your Email Address"
            required
            onChange={(e) => setRePassword(e.target.value)}
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

export default ResetPassword;
