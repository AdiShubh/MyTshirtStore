"use client";

import { navItems } from "../../Utils/index";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../../../public/logo.png";
import { useLoginStore } from "../../Store/loginStore";

import Link from "next/link";
import MButton from "../MButton";
import { Bubblegum_Sans } from "next/font/google";
import { auth } from "../../app/auth";

const NavBar = () => {
  const isAdmin = false;
  const isLogin = useLoginStore((state) => state.isLogin);
  console.log(isLogin);

  return (
    <div className=" p-2 pb-5 flex flex-row justify-between  uppercase m-4 border-b-2 border-gray-300  ">
      {/* <img src={logo.src} className="w-[200px] h-9" /> */}
      <Link href="/">
        <p className="text-xl  text-[#C37B7F] border-2       border-[#b8676b] py-2 px-3 font-semibold">
          My <span className="text-gray-700">T-Shirt</span> Store
        </p>{" "}
      </Link>
      <div className="flex flex-row gap-5  p-3  cursor-pointer ">
        {navItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <div>{item.name}</div>
          </Link>
        ))}
        {/* Add Product button displays for admin only */}
        {isAdmin && (
          <Link href="/addproduct">
            <div className="text-[#e17c81] font-semibold border-2 border-[#d8757a] px-1 py-1  rounded-md">
              ADD PRODUCT
            </div>
          </Link>
        )}
      </div>

      <div className="flex flex-row gap-6 text-3xl px-6 mr-3   py-2 cursor-pointer">
        <div>
          <Link href="/addproduct">
            <CiSearch />
          </Link>
        </div>
        <div>
          <CiShoppingCart />
        </div>
        {/* <div>
          <FaRegCircleUser />
        </div> */}
      </div>
      {!isLogin ? (
        <div className="flex gap-4 py-3 justify-center">
          <Link href="/login">
            <div>Login</div>
          </Link>
          <Link href="/register">
            <div>Register</div>
          </Link>
        </div>
      ) : (
        <Link href="/api/auth/signout" className="py-3">
          Logout
        </Link>
      )}
    </div>
  );
};

export default NavBar;
