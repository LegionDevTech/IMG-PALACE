//react imports
import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import Modal from "../modal";


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

    const onVideoMouseOver = (event, videoURL) => {
        if (!event.target.src) {
            event.target.src = videoURL;
        }
        event.target.play();
    };

    return (
        <>
            <div key={props.tileData.id}
                className="break-inside shadow-lg hover:scale-105 duration-200  ">
                <div className="animate-fade-in-down rounded-md aspect-auto cursor-pointer" >
                    {/* style={{ height: tileData.newH }}>   */}
                    <video src={props.tileData.video_files[0].link}
                        poster={props.tileData.image}
                        alt="/"
                        onMouseOver={event => onVideoMouseOver(event, props.tileData.video_files[0].link)}
                        onMouseOut={event => event.target.pause()}
                        className="w-full aspect-auto rounded-md animate-fade-in-down "
                        onLoad={(oEvent) => onThumbnailLoad(oEvent)} />
                </div>
                <div className="relative px-3 justify-center items-center animate-fade-in-down ">
                    <button onClick={() => toggleDownload(props.tileData)}
                        className=" absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent" >
                        <CgSoftwareDownload size={22}
                            className='hover:scale-125 items-center' />
                    </button>
                </div>
            </div>
            {
                isDownload && <Modal tileData={singleTileData} show={isDownload} toggleDownload={toggleDownload} />
            }
        </>
    );

};

