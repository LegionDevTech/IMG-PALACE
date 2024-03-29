// react imports
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

// custom imports
import ImageCards from "../gridCard/imageCards";
import { APIPexelsPhotos } from "../../services/API/Pexels";
import FilterTags from "./FilterTags";
import { BiArrowToTop } from "react-icons/bi";


const getMasonryContent = (gridContentType, gridData) => {
    switch (gridContentType) {
        case "Home":
        case "Images":
            return <ImageCards gridData={gridData} />;
        default:
            break;
    }
}

export default function Grid(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const [loadMorePageCount, setLoadMorePageCount] = React.useState(1);
    const [gridData, setGridData] = React.useState([]);
    const [showPaginationButton, setShowPaginationButton] = React.useState(true);
    const gridContainerRef = React.useRef(null);
    const oldSearchQuery = "";
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };


    /**
     * This function is used to call Services API call to get *IMAGES*.
     * On reponse the data it set to grid!
     */
    const loadImages = React.useCallback((sSearchQuery, iPageNumber) => {
        var responsePromise = APIPexelsPhotos(sSearchQuery, iPageNumber);
        responsePromise.then(response => {
            if (oldSearchQuery === location.search) {
                setGridData(prevGridData => [...prevGridData, ...response.photos]);
            } else {
                setGridData(response.photos);
            }
            setShowPaginationButton(response.next_page ? true : false);
        });
    }, [location.search]);


    React.useEffect(() => {
        // check if browser is online
        if (!navigator.onLine) {
            // TODO: else show error
            return;
        }
        if (location.search) {
            gridContainerRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }

        // check location pathname and then
        // get data for images based on pathname, search query
        if (props.gridContentType === "Home" || props.gridContentType === "Images") {
            loadImages(location.search, loadMorePageCount);
        }
    }, [location, loadMorePageCount, loadImages, props.gridContentType]);

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
        <div ref={gridContainerRef} className="max-w-none mx-auto py-20 px-8 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]">
            <div className="flex bg-gradient-to-l from-[#0f2527]  to-[#2C5364] pl-4 shadow-xl border-x-2  rounded-md text-white">
                <h2 className="py-2 items-center font-bold">
                    {props.title}
                </h2>
                {
                    location.search.split("query=")[1]
                    &&
                    <p className="w-full text-right p-2 self-center  justify-between  ">
                        <span className="text-gray-600">
                            Search results for:
                        </span>
                        <span className="italic text-green-600 ">
                            {" " + location.search.split("query=")[1]}
                        </span>
                    </p>
                }

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
            <div className={showPaginationButton ? "flex justify-center items-center my-5 p-4" : "hidden"} >
                {/* text */}
                <button onClick={() => setLoadMorePageCount(loadMorePageCount + 1)}
                    className="font-bold py-2 px-2 items-center justify-between border-none hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-400 flex">
                    For More
                    <BsArrowDownShort size={24} className='text-gray-400 animate-bounce hover:scale-125' />
                </button>
            </div>
            {/* back to top */}
            <div className="fixed z-30 bottom-0 right-0 mr-6 mb-6 ">
                <button onClick={() => ScrollToTop()}
                    className="text-gray-300 items-center block shadow-md bg-gray-600/80 py-2 px-2 rounded-md hover:text-white ">
                    <BiArrowToTop size={22}
                        className='hover:scale-105 ' />
                </button>
            </div>


        </div >
    );
};