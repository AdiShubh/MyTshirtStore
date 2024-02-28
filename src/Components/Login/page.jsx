import React from "react";
import Link from "next/link";
import image from "/public/login02.png";

const LoginComponent = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-row  border-2 rounded-md max-w-[1000px] mt-14 mb-10 mx-auto h-[400px]">
        <div className="w-1/2 border-2 border-[#e3a0a4] bg-[#e19a9e]">
          <img src={image.src} />
        </div>
        <div className=" w-1/2 border-2 border-[#e19a9e] flex flex-col gap-4 p-8 justify-center items-center">
          <div className="text-3xl font-semibold text-center mb-1 border-b-2 pb-4">
            <p>Login</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col">
              <label for="email" className="text-xl">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                required
                className="border border-[#e19a9e] rounded-sm p-2 w-96"
              />
            </div>
            <div className="flex flex-col">
              <label for="email" className="text-xl">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="border border-[#e19a9e] rounded-sm p-2 w-96 focus:border  focus:border-[#de8e92]"
              />
            </div>
            <div>
              <button className=" mt-2 text-2xl px-4 py-1 text-gray-950 font-semibold   bg-[#e19a9e] rounded-md  hover:bg-black hover:text-white">
                Login
              </button>
            </div>
            <div>
              <p>
                Don't have an account yet ? ,Please{" "}
                <Link href="/register">
                  <strong>Register</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
