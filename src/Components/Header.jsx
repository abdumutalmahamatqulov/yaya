import React from "react";
import logo from "../assets/logo  .png";

const Header = () => {
  return (
    <div className="w-full h-[80px] mx-auto sticky top-0 left-0 z-50 bg-white shadow-md flex items-center justify-center">
      <div className="max-w-6xl w-full h-[61px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[138px] h-[40px]" />
        </div>
        {/* Navigation */}
        <div className="flex space-x-8 text-gray-600">
          <button className="hover:text-black">Product</button>
          <button className="hover:text-black">Business</button>
          <button className="hover:text-black">Blog</button>
          <button className="hover:text-black">Pricing</button>
        </div>
        {/* Login and Sign in */}
        {/* <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Sign In</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
