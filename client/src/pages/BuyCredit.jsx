import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button
        className="inline-flex gap-3 px-8 py-3.5 rounded-2xl cursor-pointer 
                       bg-gradient-to-r from-teal-500 to-purple-500 
                       shadow-lg shadow-purple-300/50
                       hover:shadow-purple-500/70 hover:scale-110 
                       transition-all duration-500 mb-6"
      >
        Our Plans
      </button>
      <h1 className="text-center text-2xl md:text-4xl mt-4 font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the plan that’s right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            className="bg-gradient-to-r from-teal-100 to-purple-100 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-700 flex flex-col items-center text-center min-h-[360px]"
            key={index}
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/{" "}
              {item.credits} Credits
            </p>
            <div className="flex-grow" />
            <button
              className="w-full px-8 py-2.5 rounded-md cursor-pointer 
                       bg-gradient-to-r from-teal-500 to-purple-500 
                       shadow-lg shadow-purple-300/50
                       hover:shadow-purple-500/70 hover:scale-110 
                       transition-all duration-500 mb-6 text-sm min-w-52"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
