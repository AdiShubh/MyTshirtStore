"use client";

import Input from "postcss/lib/input";
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

    //reset({ data: { name: "", email: "", password: "" } });
  };
  //console.log(errors);

  return (
    <div className="h-screen">
      <div className="flex max-w-[1000px] mx-auto mt-8 mb-10 ">
        <div className="w-1/2 border-2 border-[#e19a9e] bg-[#e19a9e]">
          <img src={image.src} />
        </div>
        <div className="w-1/2 border-2 border-[#e19a9e] p-8 justify-center items-center">
          <div className="text-3xl font-semibold text-center mb-4 border-b-2 pb-4">
            <p>Sign - Up</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-[#e19a9e] rounded-sm p-2 w-96"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="border border-[#e19a9e] rounded-sm p-2 w-96"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-xl">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border border-[#e19a9e] rounded-sm p-2 w-96 focus:border  focus:border-[#de8e92]"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <div>
                <button className=" mt-2 mb-2 text-2xl px-4 py-1 text-gray-950 font-semibold   bg-[#e19a9e] rounded-md  hover:bg-black hover:text-white">
                  Sign-up
                </button>
              </div>

              <div>
                <p>
                  Already have an account ? , Please{" "}
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
