// react imports
import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AiFillHome } from "react-icons/ai";
import { IoMdImages } from "react-icons/io"
import { useLocation } from "react-router-dom";
export default function Menu() {

    const [showHamburgerDropDown, setShowHamburgerDropDown] = React.useState(false);
    const location = useLocation();
    const activeMenuButtonStyle = "flex border-b-4 bg-transpernt duration-100 -mx-3 p-3";
    const inactiveMenuButtonStyle = "flex hover:border-b-4 hover:border-b-green-500 duration-100 -mx-3 p-3";

    const activeHamMenuButtonStyle = "border-zinc-300 py-5 hover:border-b border-b border-b-gray-500 uppercase";
    const inactiveHamMenuButtonStyle = "border-zinc-300 py-5 hover:border-b border-b-gray-800 uppercase";

    return (
        <>
            {/* side nav menu  */}
            <ul className="justify-between items-center hidden md:flex text-sm">
                <li>
                    <a href="/"
                        className={
                            location.pathname === "/" ?
                                activeMenuButtonStyle
                                :
                                inactiveMenuButtonStyle
                        }>
                        <AiFillHome
                            size={18}
                            className="mr-2  " />
                        Home
                    </a>
                </li>
                <li>
                    <a href="/images"
                        className={
                            location.pathname === "/images" ?
                                activeMenuButtonStyle
                                :
                                inactiveMenuButtonStyle
                        }>
                        <IoMdImages size={18}
                            className='mr-2 ' />
                        Images
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
                        activeHamMenuButtonStyle
                        :
                        inactiveHamMenuButtonStyle
                }>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li className={
                    location.pathname === "/images" ?
                        activeHamMenuButtonStyle
                        :
                        inactiveHamMenuButtonStyle
                }>
                    <a href="/images">
                        Images
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
