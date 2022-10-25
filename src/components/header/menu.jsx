// react imports
import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AiFillHome } from "react-icons/ai";
import { IoMdImages } from "react-icons/io"
import { MdVideoLibrary } from "react-icons/md"
import { useLocation } from "react-router-dom";

export default function Menu() {

    const [showHamburgerDropDown, setShowHamburgerDropDown] = React.useState(false);
    const location = useLocation();

    return (
        <>
            {/* side nav menu  */}
            <ul className="justify-between items-center hidden md:flex text-sm">
                <li>
                    <a href="/"
                        className={
                            location.pathname === "/" ?
                                "flex hover:bg-gray-700/40 bg-gray-900 rounded-sm duration-500 -mx-3 p-3"//TODO: ACTIVE CSS
                                :
                                "flex hover:bg-gray-700/40  rounded-sm duration-500 -mx-3 p-3"//TODO: IN-ACTIVE CSS
                        }>
                        <AiFillHome
                            size={18}
                            className="mr-2" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="/images"
                        className={
                            location.pathname === "/images" ?
                                "flex hover:bg-gray-700/40 bg-gray-900 rounded-sm duration-500 -mx-3 p-3"//TODO: ACTIVE CSS
                                :
                                "flex hover:bg-gray-700/40  rounded-sm duration-500 -mx-3 p-3"//TODO: IN-ACTIVE CSS
                        }>
                        <IoMdImages size={18}
                            className='mr-2' />
                        Images
                    </a>
                </li>
                <li>
                    <a href="/videos"
                        className={
                            location.pathname === "/videos" ?
                                "flex hover:bg-gray-700/40 bg-gray-900 rounded-sm duration-500 -mx-3 p-3" //TODO: ACTIVE CSS
                                :
                                "flex hover:bg-gray-700/40  rounded-sm duration-500 -mx-3 p-3"//TODO: IN-ACTIVE CSS
                        }>
                        <MdVideoLibrary size={18}
                            className="mr-2" />
                        Videos
                    </a>
                </li>
            </ul>


            {/* 
                Button
                <div className="justify-center hidden md:flex p-4 ">
                    <Link to='/login'>
                        <button className="bg-transparent px-4 py-3 pr-5 border-none font-semibold hover:bg-gray-700/40 rounded-sm duration-500 mr-2 ">Login</button>
                    </Link>
                    <Link to='signup'>
                        <button className="px-8 py-3 font-semibold">Sign Up</button>
                    </Link>
                </div>
             */}

            {/* Mobile Hamburger */}
            <div onClick={() => setShowHamburgerDropDown(!showHamburgerDropDown)}
                className="md:hidden z-10 cursor-pointer">
                {!showHamburgerDropDown ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
            </div>

            {/* Mobile Dropdown */}
            <ul className={
                !showHamburgerDropDown
                    ? "hidden"
                    : "absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-[#0a192f]/90 w-full px-8"
            }>
                <li className={
                    location.pathname === "/" ?
                        "border-zinc-300 py-5 hover:border-b border-b border-b-gray-500 uppercase" //TODO: ACTIVE CSS
                        :
                        "border-zinc-300 py-5 hover:border-b border-b-gray-800 uppercase"//TODO: IN-ACTIVE CSS
                }>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li className={
                    location.pathname === "/images" ?
                        "border-zinc-300 py-5 hover:border-b border-b border-b-gray-500 uppercase" //TODO: ACTIVE CSS
                        :
                        "border-zinc-300 py-5 hover:border-b border-b-gray-800 uppercase"//TODO: IN-ACTIVE CSS
                }>
                    <a href="/images">
                        Images
                    </a>
                </li>
                <li className={
                    location.pathname === "/videos" ?
                        "border-zinc-300 py-5 hover:border-b border-b border-b-gray-500 uppercase" //TODO: ACTIVE CSS
                        :
                        "border-zinc-300 py-5 hover:border-b border-b-gray-800 uppercase"//TODO: IN-ACTIVE CSS
                }>
                    <a href="/videos">
                        Videos
                    </a>
                </li>
                {/*
                        <div className="flex flex-col my-6">
                            <button className="bg-transparent text-indigo-500 px-8 py-3 mb-4">Sign In</button>
                            <button className="px-8 py-3">Sign Up</button>
                        </div> 
                    */}
            </ul>
        </>
    )
}
