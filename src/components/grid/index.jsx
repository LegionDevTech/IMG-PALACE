// react imports
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

// custom imports
import ImageCards from "../gridCard/imageCards";
import VideoCards from "../gridCard/videoCards";
import { APIPexelsPhotos, APIPexelsVideos } from "../../services/API/Pexels";
import FilterTags from "./FilterTags";


const getMasonryContent = (gridContentType, gridData) => {
    switch (gridContentType) {
        case "Home":
        case "Images":
            return <ImageCards gridData={gridData} />;
        case "Videos":
            return <VideoCards gridData={gridData} />;
        default:
            break;
    }
}

export default function Grid(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const [loadMorePageCount, setLoadMorePageCount] = React.useState(1);
    const [gridData, setGridData] = React.useState([]);


    /**
     * This function is used to call Services API call to get *IMAGES*.
     * On reponse the data it set to grid!
     */
    const loadImages = useCallback((sSearchQuery, iPageNumber) => {
        var responsePromise = APIPexelsPhotos(sSearchQuery, iPageNumber);
        responsePromise.then(response => {
            setGridData(prevGridData => [...prevGridData, ...response.photos]);
        });
    }, []);

    /**
    * This function is used to call Services API call to get *VIDEOS*.
    * On reponse the data it set to grid!
    */
    const loadVideos = useCallback((sSearchQuery, iPageNumber) => {
        var responsePromise = APIPexelsVideos(sSearchQuery, iPageNumber);
        responsePromise.then(response => {
            setGridData(prevGridData => [...prevGridData, ...response.videos]);
        });
    }, []);


    React.useEffect(() => {
        // check if browser is online
        if (navigator.onLine) {
            // check location pathname and then
            // get data for images or videos based on pathname, search query
            if (props.gridContentType === "Home" || props.gridContentType === "Images") {
                loadImages(location.search, loadMorePageCount);
            } else if (props.gridContentType === "Vidoes") {
                loadVideos(location.search, loadMorePageCount);
            }
        }
        // TODO: else show error
    }, [location, loadMorePageCount, loadImages, loadVideos, props.gridContentType]);

    const onSearchTagClick = (sQuery) => {
        setGridData([]);
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
                    {props.title}
                </h2>
            </div>

            {/* filter row */}
            <FilterTags pathname={location.pathname}
                onSearchTagClick={onSearchTagClick} />

            <div className="md:masonry-3-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-5">
                {
                    getMasonryContent(props.gridContentType, gridData)
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