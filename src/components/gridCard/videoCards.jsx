//react imports
import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import HoverVideoPlayer from 'react-hover-video-player';

// custom imports
import BusyCard from "./busyCard";

const VideoCard = (props) => {

    return (
        <>
            <BusyCard />
            <BusyCard />
            <BusyCard />
            {1 === 0 &&

                props.gridData.map((tileData, index, obj) => (

                    <div key={index} className=" break-inside rounded-md shadow-lg hover:scale-105 duration-300">
                        {/* <img src={tileData.image} alt="/" className="rounded-md" /> */}
                        {/* <video  >
                            <source src={tileData.video_files[1].link} type="video/mp4" />
                        </video> */}
                        <HoverVideoPlayer className="w-full h-full object-cover bg-slate-600"
                            videoSrc={tileData.video_files[1].link}
                            pausedOverlay={
                                <img
                                    src={tileData.image}
                                    alt={tileData.user.name}
                                />
                            }
                            loadingOverlay={
                                <div className="loading-overlay">
                                    <div className="loading-spinner" />
                                </div>
                            }
                        />
                        <div className="relative px-3 justify-between items-center">
                            {/* <p className="items-center py-2 flex">
                                {tileData.alt}
                            </p> */}

                            <button className="absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent">
                                <a href="downloads"><CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' /></a>
                            </button>

                        </div>
                    </div>
                ))}
        </>
    );

};

export default VideoCard;
