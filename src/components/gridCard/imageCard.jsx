import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { saveAs } from 'file-saver';

const ImageCard = () => {

    const [gridData, setGridData] = React.useState(null);
    const downloadFile = (sURL, sName) => {
        saveAs(sURL, sName);
    };

    React.useEffect(() => {
        fetch("/getImages",
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        setGridData(json.aImageResponse);
                    });
                }
            });
    }, []);



    return (
        <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-4">

            {!gridData ?
                "" :
                gridData.map((tileData, index, obj) => (
                    <div key={index} className="break-inside rounded-md shadow-lg hover:scale-105 duration-300 h-90" style={{ height: tileData.height }} >
                        <img src={tileData.src} alt="/" className="rounded-md" />
                        <div className="relative px-3 justify-center items-center">
                            {/* <p className="items-center py-2 flex">
                                {tileData.alt}
                            </p> */}

                            <button2 className="absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent">
                                <a href="downloads"><CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' /></a>
                                {/* <CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' onClick={() => downloadFile(tileData.src, tileData.alt)} /> */}
                            </button2>

                        </div>
                    </div>
                ))}

        </div>
    );

};

export default ImageCard;
