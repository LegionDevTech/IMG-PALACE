//react imports
import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { saveAs } from 'file-saver';

// custom imports
import BusyCards from "./busyCards";
import Modal from "../content/modal";

const ImageCard = (props) => {

    const [isDownload, setIsDownload] = React.useState(false);
    const [singleTileData, setSingleTileData] = React.useState();
    const downloadFile = (sURL, sName) => {
        saveAs(sURL, sName);
    };

    const toggleDownload = (imageData) => {
        setSingleTileData(imageData);
        setIsDownload(!isDownload);
    };


    return (
        <>
            {props.gridData.length === 0 ?
                <>
                    <BusyCards />
                    <BusyCards />
                    <BusyCards />
                </>
                :
                props.gridData.map((tileData, index, obj) => (
                    <div key={index} className="break-inside rounded-md shadow-lg hover:scale-105 duration-300">
                        <img src={tileData.src} alt="/" className="rounded-md" />
                        <div className="relative px-3 justify-center items-center">
                            <button onClick={() => toggleDownload(tileData)} className="absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent" >
                                <CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' />
                            </button>
                        </div>
                    </div>
                )
                )}
            {
                isDownload && <Modal tileData={singleTileData} show={isDownload} toggleDownload={toggleDownload} />
            }
        </>
    );

};

export default ImageCard;
