import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="  p-[24px] mx-auto">
        <ul className="flex gap-[48px] justify-center">
          <li>
            <Link to="/" className=" transition duration-300 transform hover:scale-110 hover:text-[#4b4b9b] text-[28px]  ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className="transition duration-300 transform hover:scale-110 hover:text-[#4b4b9b] text-[28px]">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition duration-300 transform hover:scale-110 hover:text-[#4b4b9b] text-[28px]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition duration-300 transform hover:scale-110 hover:text-[#4b4b9b] text-[28px]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full bg-[#F3F4F7]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;