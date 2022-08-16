import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai';
import img1 from './img1.jpg';
import { MdDownload} from 'react-icons/md';
import { XIcon } from '@heroicons/react/outline';

const Modal = () => {

    const [drop, setDrop ] = useState(false);
    const handleClick = () => setDrop(!drop);
    
    return (

    <div className='fixed inset-0 z-50 bg-blue-500/80 backdrop-blur-sm overflow-auto box-border pt-14'>
        
        {/* close btn  */}
        <button1 href="/" className='top-6 right-auto left-6 fixed text-white font-bold cursor-pointer '>
            <AiOutlineClose size={22}  /> 
            </button1>
        
        {/* BG container  */}
        <div className='flex items-center justify-center text-white rounded-lg w-11/12  h-auto mx-auto bg-orange-500 '>
            
            {/* inner main div container  */}
            <div className='relative flex-col w-11/12 h-full py-8 justify-center items-center bg-blue-400'>
                    {/* img card | image is resizing on breakpoints fix nedded */}
                    <div className='relative overflow-hidden h-96 justify-center items-center rounded bg-teal-700  '>
                        <img src="https://images.pexels.com/photos/12890617/pexels-photo-12890617.jpeg" alt="/" className='w-full h-full absolute object-cover' />
                    </div>
                    {/* download and resolution buttons  will have to create onclick listener  */}
                    <div className='flex md:justify-start lg:justify-start justify-center gap-1 items-center w-full px-4 my-8 py-8 duration:700'>
                        <button2 className='flex items-center justify-center px-4 py-2 text-xs font-medium leading-4 uppercase font-sans rounded-l bg-teal-800/90 hover:text-teal-400  border-none  hover:shadow-lg  '> 
                            <MdDownload size={20} className='mr-1 hover:fill-teal-300 hover:animate-bounce hover:duration-700'/>
                            Download 
                            </button2> 
                        
                        <button2 onClick={handleClick} className='inline-flex px-2 py-2.5 my-4 text-xs font-medium leading-4 uppercase rounded-r font-sans  bg-teal-800/90 hover:text-teal-200  border-none hover:shadow-lg  '>
                            {!drop ? <AiOutlineCaretDown size={16} className="duration-500"/> : <AiOutlineCaretDown size={16} className='-rotate-90 duration-500' aria-hidden="true"/> } 
                            </button2> 
                            
                            
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

