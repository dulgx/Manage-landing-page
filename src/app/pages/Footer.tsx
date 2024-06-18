import React from "react";
import Image from "next/image";
import Logo1 from "../images/logo1.svg";
import FB from "../images/icon-facebook.svg";
import YT from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Insta from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className=" bg-blue-950 md:-mx-28 p-16 flex justify-between content-between max-md:flex-col-reverse max-md:-mx-10 max-md:p-10">
      <div className=" mx-28 text-white flex flex-col justify-between max-md:mx-0 max-md:items-center max-md:flex-col-reverse">
        <p className=" text-gray-400 text-sm text-end max-md:my-5 max-md:text-center md:hidden">
          {" "}
          Copyright 2024. All right Reserved
        </p>
        <Image src={Logo1} alt="logo" className="  max-md:my-5" />
        <div className=" flex  max-md:my-5">
          <Image src={FB} alt="FB" className=" mx-2" />
          <Image src={YT} alt="FB" className=" mx-2" />
          <Image src={Twitter} alt="FB" className=" mx-2" />
          <Image src={Pinterest} alt="FB" className=" mx-2" />
          <Image src={Insta} alt="FB" className=" mx-2" />
        </div>
      </div>
      <div className=" max-md:justify-evenly max-md:my-5 flex">
        <div className=" text-white max-md:my-5  max-md:flex max-md:flex-col lg:mx-20">
          <ul className="li py-1">Home</ul>
          <ul className="li py-1">Pricing</ul>
          <ul className="li py-1">Products</ul>
          <ul className="li py-1">About Us</ul>
        </div>
        <div className=" text-white max-md:my-5  max-md:flex max-md:flex-col lg:mx-20">
          <ul className="li py-1">Careers</ul>
          <ul className="li py-1">Community</ul>
          <ul className="li py-1">Privacy Policy</ul>
        </div>
      </div>

      <div className="flex flex-col justify-between max-md:items-center">
        <div className=" max-md:flex flex">
          <input
            type="text"
            name="email"
            id="email"
            className="h-10 rounded-3xl p-2 placeholder:text-xs placeholder:pl-3"
            placeholder="Update in your inbox ....."
          />
          <button className=" bg-red-500 text-white text-sm py-2 px-4 rounded-3xl hover:bg-rose-300 mx-2 ">
            Go
          </button>
        </div>
        <p className=" text-gray-400 text-sm text-end max-md:my-5 max-md:text-center max-md:hidden">
          {" "}
          Copyright 2024. All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
