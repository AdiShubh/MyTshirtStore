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

    //console.log("Response :", res);
  };
  return (
    <div className="h-screen">
      <div className="flex flex-row  border-2 rounded-md max-w-[1000px] mt-14 mb-10 mx-auto h-[400px]">
        <div className="w-1/2 border-2 border-[#e3a0a4] bg-[#e19a9e]">
          <img src={image.src} />
        </div>
        <div className=" w-1/2 border-2 border-[#e19a9e] flex flex-col gap-4 p-8 justify-center items-center pb-4">
          <div className="text-3xl font-semibold text-center mb-1 border-b-2 pb-4">
            <p>Login</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 ">
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
                <label htmlFor="email" className="text-xl">
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
                <button className=" mt-2 text-2xl px-4 py-1 text-gray-950 font-semibold   bg-[#e19a9e] rounded-md  hover:bg-black hover:text-white">
                  Login
                </button>
              </div>
              <div>
                Forgot Password ?{" "}
                <Link href="/reset">
                  <strong>Reset it here</strong>
                </Link>
              </div>
              <div className="mb-8">
                <p>
                  Don't have an account yet ? ,Please{" "}
                  <Link href="/register">
                    <strong>Register</strong>
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
