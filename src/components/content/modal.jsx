import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineClose } from 'react-icons/ai';
import { MdDownload } from 'react-icons/md';


const Modal = (props) => {

    const [drop, setDrop] = useState(false);
    const handleClick = () => setDrop(!drop);

    return (

        <div className='fixed -inset-4 z-50 bg-gray-500/80 backdrop-blur-sm overflow-auto box-border pt-8 pb-8'>

            {/* close btn  */}
            <button onClick={props.toggleDownload} className='top-0 right-auto left-6 sticky text-white font-bold cursor-pointer z-10 '>
                <AiOutlineClose size={22} />
            </button>

            {/* BG container  */}
            <div className='flex items-center px-2  justify-center text-white rounded-lg w-auto h-auto mx-6 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] '>

                {/* inner main div container  */}
                <div className='relative flex-col w-full h-full py-4 justify-center items-center bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]'>
                    <div className='flex  overflow-hidden lg:h-96 md:h-auto justify-center items-center rounded bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] '>
                        <img src={props.tileData.src} alt="/" className='lg:h-full md:h-full aspect-auto flex' />
                    </div>
                    {/* download and resolution buttons  will have to create onclick listener  */}
                    <div className='flex md:justify-start lg:justify-start justify-center gap-1 items-center w-full px-4 my-8 py-8 duration:700'>
                        <button className='flex items-center justify-center px-4 py-2 text-xs font-medium leading-4 uppercase font-sans rounded-l bg-teal-800/90 hover:text-teal-400  border-none  hover:shadow-lg  '>
                            <MdDownload size={20} className='mr-1 hover:fill-teal-300 hover:animate-bounce hover:duration-700' />
                            Download
                        </button>

                        <button onClick={handleClick} className='inline-flex px-2 py-2.5 my-4 text-xs font-medium leading-4 uppercase rounded-r font-sans  bg-teal-800/90 hover:text-teal-200  border-none hover:shadow-lg  '>
                            {!drop ? <AiOutlineCaretDown size={16} className="duration-500" /> : <AiOutlineCaretDown size={16} className='-rotate-90 duration-500' aria-hidden="true" />}
                        </button>


                        {/* Resoloution Dropdown  */}
                        <div className={!drop ? "hidden" : " z-10 w-auto bg-white divide-y divide-gray-100 shadow dark:bg-gray-700"}>
                            <ul className='md:inline-flex lg:inline-flex flex md:-my-4 lg:-my-4 -my-4  items-center justify-center text-sm text-gray-700 dark:text-gray-200 '>
                                <li>
                                    <a href="/" className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orignal</a>
                                </li>
                                <li>
                                    <a href="/" className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Large</a>
                                </li>
                                <li>
                                    <a href="/" className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Medium</a>
                                </li>
                                <li>
                                    <a href="/" className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Small</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal;

