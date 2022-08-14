import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { saveAs } from 'file-saver';
import { useLocation } from "react-router-dom";
import { BsArrowDownShort } from 'react-icons/bs';
import API from "../../services/API";

const ImageCard = () => {

    const [gridData, setGridData] = React.useState(null);
    const location = useLocation();
    const downloadFile = (sURL, sName) => {
        saveAs(sURL, sName);
    };

    /**
     * Load Grid cards on page load
     */
    React.useEffect(() => {
        debugger;
        if (navigator.onLine) {
            API.getImages("").then(function (value) { setGridData(value); });
        }
    }, []);

    return (
        <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-4">
            {!gridData ?
                ""
                :
                gridData.map((tileData, index, obj) => (
                    <div key={index} className="break-inside rounded-md shadow-lg hover:scale-105 duration-300">
                        <img src={tileData.src} alt="/" className="rounded-md" />
                        <div className="relative px-3 justify-center items-center">
                            <button2 className="absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent" >
                                <CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' />
                            </button2>
                        </div>
                    </div>
                ))}

        </div>
    );

};

export default ImageCard;
