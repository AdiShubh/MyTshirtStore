 
"use client";

import { useState } from "react";
import { navItems } from "../../Utils/index";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa"; // User/Login Icon
import { FiLogOut } from "react-icons/fi"; // Logout Icon
import { useLoginStore } from "../../Store/loginStore";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu
  const isAdmin = false;
  const isLogin = useLoginStore((state) => state.isLogin);

  return (
    <div className="p-2 pb-5 text-xl flex flex-row justify-between items-center  m-4 mb-0 border-b-2 border-gray-300">
      {/* Logo */}
      <Link href="/">
        <p className="text-lg md:text-xl text-gray-700 border-2 border-[#b8676b] py-1 px-2 md:py-2 md:px-3 font-semibold">
          My <span className="text-gray-700">T-Shirt</span> Store
        </p>
      </Link>

      {/* Mobile Menu and User/Logout Icon */}
      <div className="md:hidden flex items-center gap-4 text-lg">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-[#C37B7F] focus:outline-none"
        >
          ☰
        </button>
        <Link href={isLogin ? "/api/auth/signout" : "/login"} className="text-2xl text-[#C37B7F]">
          {isLogin ? <FiLogOut /> : <FaRegUserCircle />}
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:gap-5 absolute md:relative top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:top-0 z-10`}
      >
        {navItems.map((item, index) => (
          <Link href={item.path} key={index} className="p-3 text-center md:p-0 hover:text-[#C37B7F]" onClick={() => setIsMenuOpen(false)}>
            <div>{item.name}</div>
          </Link>
        ))}
        {/* Add Product button displays for admin only */}
        {isAdmin && (
          <Link href="/addproduct" className="text-center md:text-left">
            <div className="text-[#e17c81] font-semibold border-2 border-[#d8757a] px-1 py-1 rounded-md">
              ADD PRODUCT
            </div>
          </Link>
        )}
      </div>

      {/* Search, Cart, and User/Logout Icons for Desktop */}
      <div className="hidden md:flex gap-6 text-2xl px-4 mr-3 py-2 cursor-pointer items-center">
        
          <CiSearch />
        
        <Link href="/cart">
          <CiShoppingCart />
        </Link>
        <Link href={isLogin ? "/api/auth/signout" : "/login"}>
          {isLogin ? <FiLogOut /> : <FaRegUserCircle />}
        </Link>
      </div>

      {/* Fixed Search and Cart Icons for Mobile */}
      <div className="md:hidden z-20 fixed bottom-4 right-4 flex gap-4 text-3xl bg-[#e69b9f] p-3 rounded-full shadow-lg">
        <Link href="/" className="text-white">
          <CiSearch />
        </Link>
        <Link href="/cart" className="text-white">
          <CiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
