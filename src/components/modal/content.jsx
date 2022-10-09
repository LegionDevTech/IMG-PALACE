import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdDownload } from 'react-icons/md';
import Download from './download';

export default function Content(props) {

    const [isArrowDown, setIsArrowDown] = React.useState(false);

    return (
        <>
            <div className='flex items-center px-2  justify-center text-white rounded-lg w-auto h-auto mx-6 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] '>
                {/* inner main div container  */}
                <div className='relative flex-col w-full h-full py-4 justify-center items-center bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]'>
                    <div className='flex  overflow-hidden lg:h-96 md:h-auto justify-center items-center rounded bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] '>
                        <img src={props.tileData.src}
                            alt="/"
                            className='lg:h-full md:h-full aspect-auto flex' />
                    </div>
                    {/* download and resolution buttons  will have to create onclick listener  */}
                    <div className='flex md:justify-start lg:justify-start justify-center gap-1 items-center w-full px-4 my-8 py-8 duration:700'>
                        <button className='flex items-center justify-center px-4 py-2 text-xs font-medium leading-4 uppercase font-sans rounded-l bg-teal-800/90 hover:text-teal-400  border-none  hover:shadow-lg  '>
                            <MdDownload size={20}
                                className='mr-1 hover:fill-teal-300 hover:animate-bounce hover:duration-700' />
                            Download
                        </button>

                        <button onClick={() => setIsArrowDown(!isArrowDown)}
                            className='inline-flex px-2 py-2.5 my-4 text-xs font-medium leading-4 uppercase rounded-r font-sans  bg-teal-800/90 hover:text-teal-200  border-none hover:shadow-lg  '>
                            <AiOutlineCaretDown size={16}
                                className={isArrowDown ? "-rotate-90 duration-500" : "duration-500"}
                                aria-hidden={isArrowDown ? "true" : "false"} />
                        </button>
                    </div>
                </div>
            </div>

            <Download
                showOptions={isArrowDown} />
        </>
    )
}
