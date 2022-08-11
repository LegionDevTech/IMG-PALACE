import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import HoverVideoPlayer from 'react-hover-video-player';

const VideoCard = () => {

    const [gridData, setGridData] = React.useState(null);

    React.useEffect(() => {
        fetch("/getVideos",
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        setGridData(json.aVideoResponse);
                    });
                }
            });
    }, []);



    return (
        <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-4">

            {!gridData ?
                "" :
                gridData.map((tileData, index, obj) => (

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

                            <button2 className="absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent">
                                <a href="downloads"><CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' /></a>
                            </button2>

                        </div>
                    </div>
                ))}

        </div>
    );

};

export default VideoCard;
