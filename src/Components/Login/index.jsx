// 
"use client";

import React from "react";
import Link from "next/link";
import image from "/public/login02.png";
import { useForm } from "react-hook-form";
import { LoginAction } from "../../app/actions/loginaction";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useLoginStore } from "../../Store/loginStore";

const LoginComponent = () => {
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await LoginAction(data);
    if (res.error) {
      toast.error(res.error);
    } else if (res.message) {
      setIsLogin(true);
      toast.success(res?.message);
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen py-4 flex items-center justify-center">
      <div className="flex flex-col md:flex-row border-2 rounded-md max-w-[95%] md:max-w-[1000px] w-full mt-10 mb-10 mx-auto">
        {/* Image Section */}
        <div className="md:w-1/2 w-full bg-[#e19a9e] flex items-center justify-center">
          <img
            src={image.src}
            alt="Login Illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full flex flex-col gap-4 p-6 md:p-8 justify-center items-center">
          <div className="text-3xl font-semibold text-center mb-4 border-b-2 pb-4">
            <p>Login</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col gap-4">
              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg md:text-xl">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="border border-[#e19a9e] rounded-sm p-2 w-full"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-lg md:text-xl">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#e19a9e] rounded-sm p-2 w-full focus:outline-none focus:border-[#de8e92]"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
              </div>

              {/* Login Button */}
              <div>
                <button className="mt-2 text-lg md:text-2xl px-4 py-2 text-gray-950 font-semibold bg-[#e19a9e] rounded-md hover:bg-black hover:text-white w-full">
                  Login
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-center text-sm md:text-base">
                Forgot Password?{" "}
                <Link href="/reset">
                  <strong className="text-blue-600">Reset it here</strong>
                </Link>
              </div>

              {/* Register Link */}
              <div className="text-center text-sm md:text-base">
                <p>
                  Don't have an account yet?{" "}
                  <Link href="/register">
                    <strong className="text-blue-600">Register</strong>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
