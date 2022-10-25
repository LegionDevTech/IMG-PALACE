// react imports
import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-16 shadow-2xl bg-gradient-to-l from-[#0f2527] to-[#2C5364] text-white ">
      <div className="max-w-none mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <a href="/">
            <h1 className="text-4xl font-bold text-center py-6 px-4 hover:text-indigo-500">
              .IMG PALACE
            </h1>
          </a>

          {/* footer icons  */}
          <div className="flex justify-center items-center gap-x-20  sm:max-w-[240px] my-4">
            <FaFacebook size={28}
              className="icon hover:text-blue-600 duration-300" />
            <FaInstagram size={28}
              className="icon hover:text-pink-500 duration-300" />
            <FaPinterest size={28}
              className="icon hover:text-red-700 duration-300" />
          </div>
        </div>

        {/* Footer Menu  */}
        <div className="flex justify-between ">
          <ul className="lg:flex">
            <a href="about">
              <li>
                About
              </li>
            </a>
            <a href="privacyPolicy">
              <li>
                Privacy Policy
              </li>
            </a>
            <a href="termAndConditions">
              <li>
                T &amp; C
              </li>
            </a>
          </ul>
          <ul className="text-right lg:flex">
            <a href="/">
              <li className="hover:text-blue-400">
                Home
              </li>
            </a>

            <a href="images">
              <li className="hover:text-blue-400">
                Images
              </li>
            </a>
            <a href="videos">
              <li className="hover:text-blue-400">
                Videos
              </li>
            </a>
          </ul>
        </div>
        <div className="text-center">
          <h4>
            © Copyright 2022
          </h4>
        </div>
      </div>
      {/* back to top */}
      <div className="fixed z-30 bottom-0 right-0 mr-6 mb-6 ">
        <button onClick={() => ScrollToTop()}
          className="text-gray-300 items-center block shadow-md bg-gray-600/80 py-2 px-2 rounded-md hover:text-white ">
          <BiArrowToTop size={22}
            className='hover:scale-105 ' />
        </button>
      </div>
    </div>
  );
};

export default Footer;
