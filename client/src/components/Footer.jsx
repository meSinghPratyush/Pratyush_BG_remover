import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 lg:px-44 py-3 border-t border-gray-200">
      {/* Logo */}
      <img width={150} src={assets.logo} alt="Logo" className="shrink-0" />

      {/* Text */}
      <p className="text-center sm:text-left sm:flex-1 self-center border-t sm:border-t-0 sm:border-l border-gray-500 pt-2 sm:pt-0 sm:pl-4 text-sm text-gray-500 leading-none">
        All rights reserved. Copyright @bg removal
      </p>

      {/* Social Icons */}
      <div className="flex gap-2">
        <img width={40} src={assets.facebook_icon} alt="Facebook" />
        <img width={40} src={assets.twitter_icon} alt="Twitter" />
        <img width={40} src={assets.google_plus_icon} alt="Google Plus" />
      </div>
    </div>
  );
};

export default Footer;
