import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Background from "./background";

const Header = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigation = useLocation();

  const dynamicBGClass = () => {
    if (navigation.pathname === "/") {
      return "flex w-full justify-between items-center p-2  z-10 text-white absolute";
    } else {
      return "flex w-full justify-between items-center p-2  z-10 text-white relative bg-gray-600";
    }
  };

  return (
    <>
      <div className={dynamicBGClass()}>
        <div className="px-2 flex justify-between items-center w-full h-full">
          {/* Menu */}
          <div className="flex items-center">
            <a href="/"><h1 className="text-white-600 text-4xl cursor-pointer font-bold ">.IMG PALACE</h1></a>
          </div>
          <ul className="justify-center items-center hidden md:flex ">

            <li className="hover:bg-gray-700/40 rounded-sm duration-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-gray-700/40 rounded-sm duration-500">
              <a href="/videos">Videos</a>
            </li>
            <li className="hover:bg-gray-700/40 rounded-sm duration-500">
              <a href="/popular">Popular</a>
            </li>
            <li className="hover:bg-gray-700/40 rounded-sm duration-500">
              <a href="/recent">Recent</a>
            </li>
            <li className="hover:bg-gray-700/40 rounded-sm duration-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          {/* Button */}
          <div className="justify-center hidden md:flex p-4 ">
            <Link to='/login'>
              <button className="bg-transparent px-4 py-3 pr-5 border-none font-semibold hover:bg-gray-700/40 rounded-sm duration-500 mr-2 ">Login</button>
            </Link>
            <Link to='signup'>
              <button className="px-8 py-3 font-semibold">Sign Up</button>
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
            {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
          </div>
        </div>
        {/* Mobile Dropdown */}
        <div>
          <ul className={!nav ? "hidden" : "absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-[#0a192f]/90 w-full px-8"}>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase"><a href='/home'>Home</a></li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase"><a href='/videos'>Videos</a></li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase"><a href='/popular'>Popular</a></li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase"><a href='/recent'>Recent</a></li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase"><a href='/contact'>Contact</a></li>
            <div className="flex flex-col my-6">
              <button className="bg-transparent text-indigo-500 px-8 py-3 mb-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
            </div>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Background />} />
      </Routes>
    </>
  );
};

export default Header;