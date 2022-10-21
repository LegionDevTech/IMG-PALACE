// react imports
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import {
    createClient
} from 'pexels';

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
    const searchTagNames = [
        { searchText: "nature", displayText: "Nature" },
        { searchText: "abstract", displayText: "Abstract" },
        { searchText: "cars", displayText: "Cars" },
        { searchText: "sunset", displayText: "Sunset" }
    ];
    const loadImages = async (sQuery, iPage, perPage) => {
        const client = createClient('563492ad6f9170000100000156956241344046c8953c628fb5e032b7'),
            fixedWidth = 300;
        var value;
        if (sQuery === "") {
            await client.photos.curated({
                page: iPage,
                per_page: perPage
            }).then(photos => {
                var localPhotos = photos,
                    aImageResponse = [],
                    oSingleImage;
                for (var i = 0; i < localPhotos.photos.length; i++) {
                    oSingleImage = localPhotos.photos[i]
                    localPhotos.photos[i].src = oSingleImage.src.tiny.split("?")[0] + "?auto=compress&cs=tinysrgb&dpr=2&w=" + fixedWidth;
                    localPhotos.photos[i]["newH"] = oSingleImage.height / oSingleImage.width * fixedWidth;
                }
                value = localPhotos.photos;
                if (!!!value) {
                    setGridData([]);
                }
                else if (tempLocationSearch.current === location.search) {
                    setGridData(prevGridData => [...prevGridData, ...value]);
                } else {
                    setGridData(value);
                }
                tempLocationSearch.current = location.search;
            });
        } else {
            await client.photos.search({
                query: sQuery,
                page: iPage,
                per_page: perPage
            })
                .then(photos => {
                    var localPhotos = photos,
                        oSingleImage;
                    for (var i = 0; i < localPhotos.photos.length; i++) {
                        oSingleImage = localPhotos.photos[i];
                        localPhotos.photos[i].src = localPhotos.photos[i].src.tiny.split("?")[0] + "?auto=compress&cs=tinysrgb&dpr=2&w=" + fixedWidth;
                        localPhotos.photos[i]["newH"] = oSingleImage.height / oSingleImage.width * fixedWidth;
                    }
                    value = localPhotos.photos;
                    if (!!!value) {
                        setGridData([]);
                    }
                    else if (tempLocationSearch.current === location.search) {
                        setGridData(prevGridData => [...prevGridData, ...value]);
                    } else {
                        setGridData(value);
                    }
                    tempLocationSearch.current = location.search;
                });
        }
    };

    const loadVideos = async (sQuery, iPage, perPage) => { };


    React.useEffect(() => {
        // check if browser is online
        if (navigator.onLine) {
            // check if location pathname is /images
            if (location.pathname === "/images") {
                // get data for images based on pathname, search query and pages
                loadImages(location.search, loadMorePageCount, 20);
            } else if (location.pathname === "/videos") {
                // get data for videos based on pathname, search query and pages
                loadVideos(location.search, loadMorePageCount, 20);
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
                    {
                        searchTagNames.map((val, index, obj) => (
                            <button key={index} onClick={() => onSearchTagClick(val.searchText)} className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
                                {val.displayText}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="md:masonry-3-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-5">
                {
                    location.pathname === "/images"
                    &&
                    <ImageCards gridData={gridData} />
                }
                {
                    location.pathname === "/videos"
                    &&
                    <VideoCards gridData={gridData} />
                }
            </div>
            {/* Pagination Button  */}
            <div className="flex justify-center items-center my-5 p-4  ">
                {/* text */}
                <button onClick={() => setLoadMorePageCount(loadMorePageCount + 1)} className="font-bold py-2 px-2 items-center justify-between border-none hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-400 flex">For More
                    <BsArrowDownShort size={24} className='text-gray-400 animate-bounce hover:scale-125 ' />
                </button>
            </div>
        </div >
    );
};

export default Grid;
