import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/*.....Left side.....*/}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-800 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from
          <br max-md:hidden /> images for free
        </h1>
        <p className="my-6 text-[15px] text-gray-600">
          Remove backgrounds in seconds no design skills needed!
          <br max-sm:hidden />
          Whether you’re creating product photos, social media posts, or
          personal projects,
          <br max-sm:hidden /> just upload your image and let our tool do the
          magic fast, easy, and free.
        </p>
        <div>
          <input type="file" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-2xl cursor-pointer 
                       bg-gradient-to-r from-teal-500 to-purple-500 
                       shadow-lg shadow-purple-300/50
                       hover:shadow-purple-500/70 hover:scale-110 
                       transition-all duration-500"
            htmlFor="upload1"
          >
            <img src={assets.upload_btn_icon} alt="" className="w-5 h-5" />
            <p className="text-white font-medium">Upload your image</p>
          </label>
        </div>
      </div>
      {/*.....Right side.....*/}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
