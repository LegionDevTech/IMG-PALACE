// react imports
import React from "react";
import { useLocation } from "react-router-dom";
import white from '../../assets/images/white.svg';


// custom imports
import Background from "./background";
import SmallSearchBar from "./smallSearchBar";
import Menu from "./menu";

export default function Header(props) {

  const location = useLocation();

  return (
    <>
      <div className={
        location.pathname === "/" ?
          "flex w-full justify-between items-center p-2 z-10 text-white absolute" :
          "flex w-full justify-between items-center p-2 z-10 text-white shadow-lg sticky top-0 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] "}>
        <div className="flex justify-between items-center w-full h-full px-2">
            <a href="/" className="flex items-center">
            <img src={white}
              alt="/"
              className="max-h-[44px] mx-auto cursor-pointer " />
              <h1 className="text-white-600 hidden md:flex text-3xl lg:text-4xl cursor-pointer font-bold ">
                .IMG PALACE
              </h1>
            </a>
          

          {/* Search bar for other pages  */}
          {location.pathname !== "/" && <SmallSearchBar />}

          {/* Side Nav Menu. Hamburger Menu in case of Small screen */}
          <Menu />
        </div>
      </div>

      {/* Background with Video and Large Search Bar */}
      {location.pathname === "/" && <Background />}
    </>
  );
};