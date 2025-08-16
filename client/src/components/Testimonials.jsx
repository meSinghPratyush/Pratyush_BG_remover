import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl mt-4 font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent py-5">
        Customer Testimonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            className="bg-gradient-to-r from-teal-100 to-purple-100 rounded-xl p-6 drop-shadow-md-w-lg m-auto hover:scale-105 transition-all duration-700 flex flex-col items-center text-center"
            key={index}
          >
            <p className="text-4xl text-gradient-to-r from-teal-500 to-purple-500">
              ❞
            </p>
            <p className="text-sm text-gradient-to-r from-teal-500 to-purple-500">
              {item.text}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <img className="w-20 rounded-full" src={item.image} alt="" />
              <div>
                <p>{item.author}</p>
                <p className="text-sm text-gradient-to-r from-teal-500 to-purple-500">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
