"use client";

import React, { useState } from "react";
import image from "../../../public/loginImage.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterAction } from "@/app/actions/registeraction";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    await RegisterAction(data);
    toast.success("Registered Successfully");
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-[1000px] w-[90%] my-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 border-2 border-[#e19a9e] bg-[#e19a9e]">
          <img src={image.src} className="w-full object-cover" alt="Register" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 border-2 border-[#e19a9e] p-8 flex flex-col justify-center items-center">
          <div className="text-3xl font-semibold text-center mb-4 border-b-2 pb-4">
            <p>Sign - Up</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="flex flex-col gap-4">
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-[#e19a9e] rounded-sm p-2"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && <p className="text-red-500">Name is required</p>}
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="border border-[#e19a9e] rounded-sm p-2"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && <p className="text-red-500">Email is required</p>}
              </div>

              {/* Password Input */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-xl">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#e19a9e] rounded-sm p-2 focus:border-[#de8e92]"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button className="mt-2 mb-2 text-2xl px-4 py-1 text-gray-950 font-semibold bg-[#e19a9e] rounded-md hover:bg-black hover:text-white w-full">
                  Sign-up
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center mt-4">
                <p>
                  Already have an account?{" "}
                  <Link href="/login">
                    <strong>Login</strong>
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

export default RegisterComponent;

