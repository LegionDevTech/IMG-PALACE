import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { saveAs } from 'file-saver';
import {BsArrowDownShort} from 'react-icons/bs';

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
                    <div key={index} className="break-inside rounded-md shadow-lg hover:scale-105 duration-300">
                        <img src={tileData.src} alt="/" className="rounded-md" />
                        <div className="relative px-3 justify-center items-center">
                            {/* <p className="items-center py-2 flex">
                                {tileData.alt}
                            </p> */}

                            <button2 className="absolute bottom-3 py-1 px-1 rounded-md bg-transparent border-[1.5px] hover:border-none text-white hover:duration-500 hover:text-white hover:bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
                                <CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' />
                                {/* <CgSoftwareDownload size={20} className='hover:scale-125 items-center hover:animate-bounce' onClick={() => downloadFile(tileData.src, tileData.alt)} /> */}
                            </button2>
                            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
          Extra large modal
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        ...
      </div>
    </div>
  </div>
</div>

                        </div>
                    </div>
                ))}
                
        </div>
    );

};

export default ImageCard;
