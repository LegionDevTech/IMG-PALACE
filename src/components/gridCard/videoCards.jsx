//react imports
import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import Modal from "../modal";
// import HoverVideoPlayer from 'react-hover-video-player';

// custom imports
import BusyCard from "./busyCard";



export default function VideoCard(props) {

    const [isDownload, setIsDownload] = React.useState(false);
    const [singleTileData, setSingleTileData] = React.useState();

    const toggleDownload = (imageData) => {
        setSingleTileData(imageData);
        setIsDownload(!isDownload);
    };


    const onThumbnailLoad = (oEvent) => {
        let oParent = oEvent.target.parentElement;
        oParent.style.height = "auto";
        // TODO: uncomment after implementing image loader
        // oParent.parentElement.getElementsByClassName("imageCard-image-loader-animation")[0].style.display = "none"
    };

    return (
        <>
            {
                props.gridData.length === 0 ?
                    <>
                        <BusyCard />
                        <BusyCard />
                        <BusyCard />
                    </>
                    :
                    props.gridData.map((tileData, index, obj) => (
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
                                <video src={tileData.video_files[0].link}
                                    poster={tileData.image}
                                    alt="/"
                                    onMouseOver={event => event.target.play()}
                                    onMouseOut={event => event.target.pause()}
                                    className="w-full aspect-auto rounded-md animate-fade-in-down "
                                    onLoad={(oEvent) => onThumbnailLoad(oEvent)} />
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
            {
                isDownload && <Modal tileData={singleTileData} show={isDownload} toggleDownload={toggleDownload} />
            }
        </>
    );

};

