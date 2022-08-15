// react imports
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Route, Routes, Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

// custom imports
import Background from "./background";

const Header = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const onSmallSearchButtonPress = (sQuery) => {
    // navigate to pathname with query
    navigate({
      pathname: location.pathname,
      search: "query=" + sQuery
    });
  };

  const dynamicBGClass = () => {
    if (location.pathname === "/") {
      return "flex w-full justify-between items-center p-2 z-10 text-white absolute  ";
    } else {
      return "flex w-full justify-between items-center p-2 z-10 text-white relative shadow-lg sticky top-0 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] ";
    }
  };

  return (
    <>
      <div className={dynamicBGClass()}>
        <div className="flex justify-between items-center w-full h-full px-2">
          {/* Menu */}
          <div className="flex items-center">
            <a href="/">
              <h1 className="text-white-600 text-3xl cursor-pointer font-bold ">
                .IMG PALACE
              </h1>
            </a>
          </div>

          {location.pathname !== "/" && (
            /* Search bar for other pages */
            <div className="bg-[#0f2527]  shadow-xl rounded-md flex items-center px-2 w-[100px] sm:w-[200px] lg:w-[400px] ">
              <input onInput={e => setSearchInput(e.target.value)}
                className="bg-transparent w-full focus:outline-none p-1.5 text-sm"
                type="text"
                placeholder="Search here"
              />
              <button2 onClick={() => onSmallSearchButtonPress(searchInput)} className="justify-between items-center text-gray-300 px-1 py-1 rounded-md cursor-pointer">
                <AiOutlineSearch
                  size={20}
                  className="-mr-1 hover:fill-green-600"
                />
              </button2>
            </div>
          )}

          {/* side nav button  */}

          <ul className="justify-between items-center hidden md:flex text-sm">
            <li>
              <a
                href="/"
                className="hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/images"
                className="hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-4 ">
                Images
              </a>
            </li>
            <li>
              <a
                href="/videos"
                className="hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-4 ">
                Videos
              </a>
            </li>
            {/* <li>
              <a href="/popular" className="hover:bg-gray-700/40 rounded-sm duration-500 p-4">Popular</a>
            </li> */}
            {/* <li>
              <a
                href="/recent"
                className="hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-4"
              >
                Recent
              </a>
            </li> */}
          </ul>


          {/* Button
          <div className="justify-center hidden md:flex p-4 ">
            <Link to='/login'>
              <button className="bg-transparent px-4 py-3 pr-5 border-none font-semibold hover:bg-gray-700/40 rounded-sm duration-500 mr-2 ">Login</button>
            </Link>
            <Link to='signup'>
              <button className="px-8 py-3 font-semibold">Sign Up</button>
            </Link>
          </div> */}
          {/* Mobile Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
            {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
          </div>
        </div>
        {/* Mobile Dropdown */}
        <div>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-[#0a192f]/90 w-full px-8"
            }
          >
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/home">Home</a>
            </li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/images">Images</a>
            </li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/videos">Videos</a>
            </li>
            {/* <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/popular">Popular</a>
            </li> */}
            {/* <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/recent">Recent</a>
            </li> */}
            {/* <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/contact">Contact</a>
            </li> */}
            {/* <div className="flex flex-col my-6">
              <button className="bg-transparent text-indigo-500 px-8 py-3 mb-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
            </div> */}
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
