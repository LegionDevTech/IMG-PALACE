import React from "react";
import { useLocation } from "react-router-dom";
import ImageCard from "../gridCard/imageCard";
import VideoCard from "../gridCard/videoCard";

const Grid = () => {

    const navigation = useLocation();
    var Gridcard;
    if (navigation.pathname === "/videos") {
        Gridcard = <VideoCard />
    } else {
        Gridcard = <ImageCard />
    }

    const getTitle = () => {
        var title = "";
        switch (navigation.pathname) {
            case "/":
                title = "Home";
                break;
            case "/videos":
                title = "Videos";
                break;
            case "/popular":
                title = "Popular";
                break;
            case "/recent":
                title = "Recent";
                break;
            case "/contact":
                title = "Contact Us";
                break;
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
                    <div className="relative justify-between ">
                        <button className="rounded-full m-1 border-gray-500 text-white bg-transparent items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] hover:text-white hover:duration-600">Trending</button>
                        <button className="rounded-full m-1 border-gray-500 text-white bg-transparent items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] hover:text-white hover:duration-600">Nature</button>
                        <button className="rounded-full m-1 border-gray-500 text-white bg-transparent items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] hover:text-white hover:duration-600">Abstract</button>
                        <button className="rounded-full m-1 border-gray-500 text-white bg-transparent items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] hover:text-white hover:duration-600">Cars</button>
                        <button className="rounded-full m-1 border-gray-500 text-white bg-transparent items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] hover:text-white hover:duration-600">Girls</button>
                        <button className="rounded-full m-1 border-gray-500 text-white bg-transparent items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] hover:text-white hover:duration-600">Sunset</button>
                    </div>
            </div>
            {Gridcard}
        </div>
    );
};

export default Grid;
