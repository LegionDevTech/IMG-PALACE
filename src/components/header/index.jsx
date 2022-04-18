import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div className="px-2 flex justify-between items-center w-full h-full">
        {/* Menu */}
        <div className="flex items-center">
         <a href=""><h1>.IMG PALACE</h1></a>
          </div>
          <ul className="justify-center items-center hidden md:flex ">
            <li>Home</li>
            <li>Genre</li>
            <li>Popular</li>
            <li>Recent</li>
            <li>Contact</li>
          </ul>
        
       {/* Butoon */} 
        <div className="justify-center hidden md:flex px-2">
          <button className="border-none bg-transparent mr-4 px-2">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      {/* Dropdown */}
      <div>
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-[#0a192f]/90 w-full px-8 "}>
            <li className="border-zinc-300 py-5">Home</li>
            <li className="border-zinc-300 py-5">Genre</li>
            <li className="border-zinc-300 py-5">Popular</li>
            <li className="border-zinc-300 py-5">Recent</li>
            <li className="border-zinc-300 py-5">Contact</li>
            <div className="flex flex-col my-4">
              <button className="bg-transparent text-indigo-500 px-8 py-3 mb-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
              </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
