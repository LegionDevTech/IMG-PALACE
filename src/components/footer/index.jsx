import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 py-16">
      <div className="max-w-none mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <a href="/">
            <h1 className="text-4xl font-bold text-center py-6 px-4 hover:text-indigo-500">
              .IMG PALACE
            </h1>
          </a>
          <div className="flex justify-between w-full sm:max-w-[240px] my-2">
            <FaFacebook size={28} className="icon hover:text-indigo-400 duration-300" />

            <FaInstagram size={28} className="icon hover:text-pink-500" />
            <FaPinterest size={28} className="icon hover:text-red-700" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>

            <li>Language</li>
            <li>Cookie Policy</li>
          </ul>
          <ul className="text-right lg:flex">
            <a href="/">
              <li className="hover:text-blue-400">Home</li>
            </a>

            <a href="popular">
              <li className="hover:text-blue-400">Popular</li>
            </a>
            <a href="recent">
              <li className="hover:text-blue-400">Recent</li>
            </a>
          </ul>
        </div>
        <div className="text-center">
          <h4>© Copyright 2022</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
