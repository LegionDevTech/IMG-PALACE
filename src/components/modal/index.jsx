import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Content from "./content";

export default function Modal(props) {

    return (
        <div className='fixed -inset-4 z-50 bg-gray-500/80 backdrop-blur-sm overflow-auto box-border pt-8 pb-8'>

            {/* close btn  */}
            <button onClick={props.toggleDownload}
                className='top-0 right-auto left-6 sticky text-white font-bold cursor-pointer z-10 '>
                <AiOutlineClose size={22} />
            </button>

            <Content
                tileData={props.tileData} />
        </div>
    )
}
