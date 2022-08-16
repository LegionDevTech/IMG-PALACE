import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import v1 from '../../assets/videos/v1.mp4';
import Typed from 'react-typed';

const Background = () => {

    return (
        <div className='w-full h-screen realtive'>
            {/* center div  */}
            <div className='absolute w-full h-screen bg-gradient-to-r from-neutral-900'></div>
            <video className='w-full h-full object-cover'
                src={v1}
                autoPlay
                loop
                muted
            />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <p className='font-bold p-1 text-3xl uppercase md:text-5xl sm:text-4xl md:py-4'>.Img Palace</p>
                <h1>Offers you free stock Images</h1>
                <div className='flex justify-center items-center'>
                    <p className='py-5 md:text-4xl sm:text:3x-l text-xl font-bold '>Get royalty Free </p>
                    <Typed
                        className='py-5 md:text-4xl sm:text:3x-l text-xl font-bold pl-2 text-blue-600'
                        strings={['IMAGES', 'VIDEOS']}
                        typeSpeed={120} backSpeed={140} loop
                    />
                </div>
              {/* main search box  */}
                    <div className='flex justify-between items-center max-w-[650px] mx-auto w-full border-none p-1 rounded-md text-black bg-gray-200/90'>
                        <input className='bg-transparent w-[300px] sm:w-[600px] focus:outline-none p-2' type="text" placeholder='Search Here' />
                        <button className=' hover:bg-green-600 hover:border-green-600 hover:duration-200  ml-2 '>
                            <AiOutlineSearch size={22} className='m-2 hover:rotate-90 hover:duration-500' />
                        </button>
                    </div>
                
            </div>
        </div>
    );

}
export default Background;
