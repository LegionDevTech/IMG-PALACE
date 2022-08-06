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
        <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-5">

            {!gridData ?
                "" :
                gridData.map((tileData, index, obj) => (
                    <div key={index} className="break-inside rounded-lg shadow-lg rounded-t-lg hover:scale-105 duration-300">
                        <img src={tileData.image} alt="/" />
                        <div className="flex justify-between px-4 py-2 items-center object-cover">
                            {/* <p className="items-center py-2 flex"> */}
                            {/* {tileData.alt} */}
                            {/* </p> */}
                            <span>
                                <button className="flex items-center py-1 px-4">
                                    <CgSoftwareDownload size={22} />
                                </button>
                            </span>
                        </div>
                    </div>
                ))}

        </div>
    );

};

export default VideoCard;
