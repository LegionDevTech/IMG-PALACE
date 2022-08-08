import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";

const ImageCard = () => {

    const [gridData, setGridData] = React.useState(null);

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
        <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-5">

            {!gridData ?
                "" :
                gridData.map((tileData, index, obj) => (
                    <div key={index} className="break-inside rounded-lg shadow-lg rounded-t-lg hover:scale-105 duration-300">
                        <img src={tileData.src} alt="/" />
                        <div className="absolute justify-center px-5 py-4 items-center top-0 bottom-0  object-cover">
                            {/* <p className="items-center py-2 flex">
                                {tileData.alt}
                            </p> */}
                            <div>

                                <button className="absolute items-center py-1 px-1 rounded-md  hover:duration-500 hover:text-green-300">
                                    <CgSoftwareDownload size={22} />
                                </button>
                        
                            </div>
                        </div>
                    </div>
                ))}

        </div>
    );

};

export default ImageCard;
