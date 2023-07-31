// react imports
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Masonry } from '@mui/lab';

// custom imports
import ImageCards from "../gridCard/imageCards";
import { APIPexelsPhotos } from "../../services/API/Pexels";
import FilterTags from "./FilterTags";
import { BiArrowToTop } from "react-icons/bi";
import { CgSoftwareDownload } from "react-icons/cg";




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

    const [isDownload, setIsDownload] = React.useState(false);
    const [singleTileData, setSingleTileData] = React.useState();
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



    const toggleDownload = (imageData) => {
        setSingleTileData(imageData);
        setIsDownload(!isDownload);
    };

    const onImageLoad = (oEvent) => {
        let oParent = oEvent.target.parentElement;
        oParent.style.height = "auto";
        // TODO: uncomment after implementing image loader
        // oParent.parentElement.getElementsByClassName("imageCard-image-loader-animation")[0].style.display = "none"
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
        <div ref={gridContainerRef} className="max-w-none mx-auto py-20 px-8 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]">

            {/* Title and Search results text  */}
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

            <Masonry columns={4} spacing={2}>
                {gridData.map((tileData, index, obj) => (
                    <div key={tileData.id}
                        className="break-inside shadow-lg hover:scale-105 duration-200  ">
                        {/**
     *  NOTE: Put some loading animation here!!
     * Also note that imageCard-image-loader-animation
     * className is for JS neither use in anyother div
     * nor delete it!!!! */}
                        {/* <div className="imageCard-image-loader-animation">

    </div> */}

                        <div className="animate-fade-in-down rounded-md"
                            style={{ height: tileData.newH }}>
                            <img src={tileData.src}
                                alt="/"
                                className="w-full aspect-auto rounded-md animate-fade-in-down "
                                onLoad={(oEvent) => onImageLoad(oEvent)} />
                        </div>
                        <div className="relative px-3 justify-center items-center animate-fade-in-down ">
                            <button onClick={() => toggleDownload(tileData)}
                                className=" absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent" >
                                <CgSoftwareDownload size={22}
                                    className='hover:scale-125 items-center' />
                            </button>
                        </div>
                    </div>
                ))}
            </Masonry>

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