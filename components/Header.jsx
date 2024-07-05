import Image from "next/image";
import React from "react";
import { assets } from "@/Assets/assets";
const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium  py-1 px-3 sm:py-3 sm:px-6 border border-solid  border-black rounded-lg shadow-[-4px_5px] hover:shadow-[-6px_5px] peer">
          Get started <Image className="" alt="" src={assets.arrow} />{" "}
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium text-slate-700  ">
          Latest Blogs
        </h1>
        <p className="mt-4 max-w-[740px]  m-auto sm:text-base">
          Get inspired by latest blogs about web technologies
        </p>
        <form action="" className="flex justify-between max-w-[600px] w-full scale-75 sm:scale-100 mx-auto mt-10 border border-slate-400 shadow-[-7px_7px_0px] rounded-lg outline-none">
          <input type="email" className="pl-4 text-2xl p-2 rounded-lg border-none outline-none" placeholder="Enter your email" />
          <button type="submit" className="border-1 text-xl border-black px-2 rounded-md sm:px-8  bg-slate-600 text-white  active:bg-gray-700">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
