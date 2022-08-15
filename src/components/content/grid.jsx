import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import ImageCards from "../gridCard/imageCards";
import VideoCards from "../gridCard/videoCards";

const Grid = () => {

    const location = useLocation();
    var gridCards;
    if (location.pathname === "/videos") {
        gridCards = <VideoCards />
    } else if (location.pathname === "/images") {
        gridCards = <ImageCards />
    }

    const getTitle = () => {
        var title = "";
        switch (location.pathname) {
            case "/":
                title = "Home";
                break;
            case "/images":
                title = "Images";
                break;
            case "/videos":
                title = "Videos";
                break;
            // case "/popular":
            //     title = "Popular";
            //     break;
            // case "/recent":
            //     title = "Recent";
            //     break;
            // case "/contact":
            //     title = "Contact Us";
            //     break;
            default:
                title = "Title Not found";
                break;
        }
        return title;
    };

    return (
        <div className="max-w-none mx-auto py-20 px-8 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]">
            <div className=" bg-gradient-to-l from-[#0f2527]  to-[#2C5364] pl-4 shadow-xl border-x-2  rounded-md text-white">
                <h2 className="py-2 items-center font-bold">{getTitle()}</h2>
            </div>
            {/* filter row */}
            <div className="max-w-none m-auto px-2 py-3">
                <div className="relative justify-between focus:shadow-lg ">
                    <button className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">Trending</button>
                    <button className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">Nature</button>
                    <button className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">Abstract</button>
                    <button className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">Cars</button>
                    <button className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">Girls</button>
                    <button className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">Sunset</button>
                </div>
            </div>
            <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-4">
                {gridCards}
            </div>
            {/* Pagination Button  */}
            <div className="flex justify-center items-center my-5 p-4  ">
                {/* text */}
                <button className="font-bold py-2 px-2 items-center justify-between border-none hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-400 flex">For More
                    <BsArrowDownShort size={24} className='text-gray-400 animate-bounce hover:scale-125 ' />
                </button>
            </div>
        </div>
    );
};

export default Grid;
