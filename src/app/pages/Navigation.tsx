"use client";
import React, { useState } from "react";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";
import Image from "next/image";

const Navigation = () => {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <>
      <div className=" flex justify-between cursor-pointer ">
        <div className="flex items-center justify-between max-md:w-full">
          <Image src={Logo} alt="logo" className=" w-40 h-7" />
          <Image
            src={viewMenu ? CloseIcon : MenuIcon}
            alt="logo"
            className="md:hidden"
            onClick={() => setViewMenu(!viewMenu)}
          />
        </div>

        <div className="md:flex hidden lg:w-3/5 justify-between">
          <div className="flex flex-row justify-between items-center  ">
            <div className=" ">
              <ul className=" list-none flex text-sm font-medium  ">
                <li className="px-2 lg:px-5 hover:text-gray-400">Pricing</li>
                <li className="px-2 lg:px-5 hover:text-gray-400">Product</li>
                <li className="px-2 lg:px-5 hover:text-gray-400">About Us</li>
                <li className="px-2 lg:px-5 hover:text-gray-400">Careers</li>
                <li className="px-2 lg:px-5 hover:text-gray-400">Community</li>
              </ul>
            </div>
          </div>
          <button className=" bg-red-500 text-white text-sm py-2 px-4 rounded-3xl hover:bg-rose-300 mx-2">
            Get Started
          </button>
        </div>
      </div>
      {viewMenu && (
        <div className="text-blue-950 justify-center flex md:hidden bg-white mt-5 p-10 shadow-xl z-10 absolute w-11/12">
          <ul className=" list-none text-base font-bold">
            <li className="p-3 hover:text-gray-400">Pricing</li>
            <li className=" p-3 hover:text-gray-400">Product</li>
            <li className=" p-3 hover:text-gray-400">About Us</li>
            <li className=" p-3 hover:text-gray-400">Careers</li>
            <li className="p-3 hover:text-gray-400">Community</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
