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
        <div className="max-w-none mx-auto py-16 px-8">
            <div className=" bg-gradient-to-r from-[#ebebfc] pl-4 ">
                <h2 className="py-4 items-center font-bold">{getTitle()}</h2>
            </div>
            {Gridcard}
        </div>
    );
};

export default Grid;
