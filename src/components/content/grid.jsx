import React from "react";
import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CgSoftwareDownload } from "react-icons/cg";


const Grid = () => {

    const navigation = useLocation();

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

    const getTitle = () => {
        var title = "";
        switch (navigation.pathname) {
            case "/":
                title = "Home";
                break;
            case "/videos":
                title = "Videos";
                break;
            case "/popular":
                title = "Popular";
                break;
            case "/recent":
                title = "Recent";
                break;
            case "/contact":
                title = "Contact Us";
                break;
            default:
                title = "Title Not found";
                break;
        }
        return title;
    };

    return (
        <div className="max-w-none mx-auto py-16 px-8">
            <div className=" bg-gradient-to-r from-[#ebebfc] pl-4 ">
                <h2 className="py-4 items-center font-bold">{getTitle()}</h2>
            </div>

            {/* card */}
            <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center pt-4 space-y-5 ">

                {!gridData ?
                    "" :
                    gridData.map((tileData, index, obj) => (
                        <div key={index} className="break-inside rounded-lg shadow-lg rounded-t-lg hover:scale-105 duration-300">
                            <img src={tileData.src} alt="/" />
                            <div className="flex justify-between px-4 py-2 items-center object-cover">
                                {/* <p className="items-center py-2 flex">
                                    {tileData.alt}
                                </p> */}
                                <span>
                                    <button className="flex items-center py-1 px-4">
                                        <a href="downloads"><CgSoftwareDownload size={22} /></a>
                                    </button>
                                </span>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    );
};

export default Grid;
