// react imports
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

// custom imports
import ImageCards from "../gridCard/imageCards";
import VideoCards from "../gridCard/videoCards";
import API from "../../services/API";

const Grid = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [loadMorePageCount, setLoadMorePageCount] = React.useState(1);
    const [gridData, setGridData] = React.useState([]);
    var tempLocationSearch = React.useRef(location.search);


    React.useEffect(() => {
        // check if browser is online
        if (navigator.onLine) {
            // check if location pathname is /images
            if (location.pathname === "/images") {
                var tempGridData = [];
                if (tempLocationSearch.current === location.search) {
                    tempGridData = gridData;
                }
                tempLocationSearch.current = location.search;
                // get data for images based on pathname, search query and pages
                API.getImages(location.pathname, location.search, loadMorePageCount)
                    .then(function (value) {
                        setGridData([...tempGridData, ...value]);
                    });
            }
        }
    }, [location, loadMorePageCount]);



    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return "Home";
            case "/images":
                return "Images";
            case "/videos":
                return "Videos";
            default:
                return "Title Not found";
        }
    };

    const onSearchTagClick = (sQuery) => {
        setLoadMorePageCount(1);
        // navigate to pathname with query
        navigate({
            pathname: location.pathname,
            search: "query=" + sQuery
        });
    };

    return (
        <div className="max-w-none mx-auto py-20 px-8 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]">
            <div className=" bg-gradient-to-l from-[#0f2527]  to-[#2C5364] pl-4 shadow-xl border-x-2  rounded-md text-white">
                <h2 className="py-2 items-center font-bold">{getTitle()}</h2>
            </div>
            {/* filter row */}
            <div className="max-w-none m-auto px-2 py-3">
                <div className="relative justify-between focus:shadow-lg ">
                    {//display Recent button for images
                        location.pathname === "/images"
                        &&
                        <button onClick={() => onSearchTagClick("recent")} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">
                            Recent
                        </button>
                    }
                    {//display Popular for videos
                        location.pathname === "/videos"
                        &&
                        <button onClick={() => onSearchTagClick("popular")} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">
                            Popular
                        </button>
                    }

                    {/* display common search tags */}
                    <button onClick={() => onSearchTagClick("nature")} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
                        Nature
                    </button>
                    <button onClick={() => onSearchTagClick("abstract")} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
                        Abstract
                    </button>
                    <button onClick={() => onSearchTagClick("cars")} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
                        Cars
                    </button>
                    <button onClick={() => onSearchTagClick("sunset")} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
                        Sunset
                    </button>
                </div>
            </div>
            <div className="md:masonry-3-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-4">
                {
                    location.pathname === "/images"
                    &&
                    <ImageCards gridData={gridData} />
                }
                {
                    location.pathname === "/videos"
                    &&
                    <VideoCards />
                }
            </div>
            {/* Pagination Button  */}
            <div className="flex justify-center items-center my-5 p-4  ">
                {/* text */}
                <button onClick={() => setLoadMorePageCount(loadMorePageCount + 1)} className="font-bold py-2 px-2 items-center justify-between border-none hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-400 flex">For More
                    <BsArrowDownShort size={24} className='text-gray-400 animate-bounce hover:scale-125 ' />
                </button>
            </div>
        </div>
    );
};

export default Grid;
