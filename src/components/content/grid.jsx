// react imports
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

// custom imports
import ImageCards from "../gridCard/imageCards";
import VideoCards from "../gridCard/videoCards";
import { APIPexelsPhotos } from "../../services/API/Pexels";
import GridUtility from "../../utilities/components/grid";

const Grid = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [loadMorePageCount, setLoadMorePageCount] = React.useState(1);
    const [gridData, setGridData] = React.useState([]);


    /**
     * This function is used to call Services API call to get *IMAGES*.
     * On reponse the data it set to grid!
     */
    const loadImages = useCallback((sSearchQuery, iPageNumber, iContentPerPage) => {
        var responsePromise = APIPexelsPhotos(sSearchQuery, iPageNumber, iContentPerPage);
        responsePromise.then(response => {
            setGridData(prevGridData => [...prevGridData, ...response.photos]);
        });
    }, []);

    /**
    * This function is used to call Services API call to get *VIDEOS*.
    * On reponse the data it set to grid!
    */
    const loadVideos = useCallback((sSearchQuery, iPageNumber, iContentPerPage) => {
        var responsePromise = APIPexelsPhotos(sSearchQuery, iPageNumber, iContentPerPage);
        responsePromise.then(response => {
            setGridData(prevGridData => [...prevGridData, ...response.photos]);
        });
    }, []);


    React.useEffect(() => {
        // check if browser is online
        if (navigator.onLine) {
            // check location pathname and then
            // get data for images or videos based on pathname, search query
            if (location.pathname === "/images") {
                loadImages(location.search, loadMorePageCount);
            } else if (location.pathname === "/videos") {
                loadVideos(location.search, loadMorePageCount);
            }
        }
        // TODO: else show error
    }, [location, loadMorePageCount, loadImages, loadVideos]);

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
                <h2 className="py-2 items-center font-bold">
                    {GridUtility.getTitle(location.pathname)}
                </h2>
            </div>

            {/* filter row */}
            <div className="max-w-none m-auto px-2 py-3">
                <div className="relative justify-between focus:shadow-lg ">
                    {//display Recent button for images
                        location.pathname === "/images"
                        &&
                        <button onClick={() => onSearchTagClick("recent")}
                            className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">
                            Recent
                        </button>
                    }
                    {//display Popular for videos
                        location.pathname === "/videos"
                        &&
                        <button onClick={() => onSearchTagClick("popular")}
                            className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">
                            Popular
                        </button>
                    }

                    {/* display common search tags */}
                    {
                        GridUtility.getSearchTagNames().map((val, index, obj) => (
                            <button key={index}
                                onClick={() => onSearchTagClick(val.searchText)}
                                className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
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
            <div className="flex justify-center items-center my-5 p-4">
                {/* text */}
                <button onClick={() => setLoadMorePageCount(loadMorePageCount + 1)}
                    className="font-bold py-2 px-2 items-center justify-between border-none hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-400 flex">
                    For More
                    <BsArrowDownShort size={24} className='text-gray-400 animate-bounce hover:scale-125' />
                </button>
            </div>
        </div >
    );
};

export default Grid;
