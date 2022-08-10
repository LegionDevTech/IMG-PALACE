import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";

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
                        <img src={tileData.src} alt="/" className="rounded-md" />
                        <div className="relative px-3 justify-between items-center">
                            {/* <p className="items-center py-2 flex">
                                {tileData.alt}
                            </p> */}
                            
                                <button className="absolute bottom-3 py-1 px-1 rounded-md  hover:duration-500 hover:text-white hover:bg-transparent">
                                    <a href="downloads"><CgSoftwareDownload size={22} /></a>
                                </button>
                        
                        </div>
                    </div>
                ))}

        </div>
    );

};

export default VideoCard;