// react imports
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

// custom imports
import { APIPexelsPhotos, APIPexelsVideos } from "../../services/API/Pexels";
import FilterTags from "./FilterTags";
import { BiArrowToTop } from "react-icons/bi";
import ImageCard from "../gridCard/imageCard";
import VideoCard from "../gridCard/videoCard";
import BusyCard from "../gridCard/busyCard";

export default function Grid(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const [loadMorePageCount, setLoadMorePageCount] = React.useState(1);
    const [gridData, setGridData] = React.useState([]);
    const [showPaginationButton, setShowPaginationButton] = React.useState(true);
    const gridContainerRef = React.useRef(null);
    const oldSearchQuery = "";


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
            debugger;
            setShowPaginationButton(response.next_page ? true : false);
        });
    }, [location.search]);

    /**
    * This function is used to call Services API call to get *VIDEOS*.
    * On reponse the data it set to grid!
    */
    const loadVideos = React.useCallback((sSearchQuery, iPageNumber) => {
        var responsePromise = APIPexelsVideos(sSearchQuery, iPageNumber);
        responsePromise.then(response => {
            if (oldSearchQuery === location.search) {
                setGridData(prevGridData => [...prevGridData, ...response.videos]);
            } else {
                setGridData(response.videos);
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
        // get data for images or videos based on pathname, search query
        if (props.gridContentType === "Home" || props.gridContentType === "Images") {
            loadImages(location.search, loadMorePageCount);
        } else if (props.gridContentType === "Videos") {
            loadVideos(location.search, loadMorePageCount);
        }
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

    const getMasonryCard = (tileData) => {
        switch (props.gridContentType) {
            case "Home":
            case "Images":
                return <ImageCard tileData={tileData} />;
            case "Videos":
                return <VideoCard tileData={tileData} />;
            default:
                break;
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onNextInfiniteScroll = () => {
        setLoadMorePageCount(loadMorePageCount => loadMorePageCount + 1)
    };

    return (
        <>
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

                <InfiniteScroll
                    dataLength={gridData.length}
                    next={onNextInfiniteScroll}
                    hasMore={showPaginationButton}
                    loader={
                        <>
                            <BusyCard />
                            <BusyCard />
                            <BusyCard />
                        </>
                    }
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <div className="grid gap-2 grid-cols-3 row-span-2 box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-5">
                        {
                            gridData.map((tileData, index, obj) => (
                                getMasonryCard(tileData)
                            ))
                        }
                    </div>
                </InfiniteScroll>

                {/* back to top */}
                <div className="fixed z-30 bottom-0 right-0 mr-6 mb-6 ">
                    <button onClick={() => ScrollToTop()}
                        className="text-gray-300 items-center block shadow-md bg-gray-600/80 py-2 px-2 rounded-md hover:text-white ">
                        <BiArrowToTop size={22}
                            className='hover:scale-105 ' />
                    </button>
                </div>
            </div >
        </>
    );
};