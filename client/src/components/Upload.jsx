import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      {/* This section is for the upload functionality. You can add your upload component here. */}
      <h1 className="text-center text-2xl md:text-4xl mt-4 font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent py-6 md:py-16">
        See the magic. Try now
      </h1>

      <div className="text-center mb-24">
        <input type="file" id="upload2" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-2xl cursor-pointer 
                             bg-gradient-to-r from-teal-500 to-purple-500 
                             shadow-lg shadow-purple-300/50
                             hover:shadow-purple-500/70 hover:scale-110 
                             transition-all duration-500"
          htmlFor="upload2"
        >
          <img
            width={20}
            src={assets.upload_btn_icon}
            alt=""
            className="w-5 h-5"
          />
          <p className="text-white font-medium">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
