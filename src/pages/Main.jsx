import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import v1 from '../assets/videos/v1.mp4';
import Typed from 'react-typed';

const Main = () => {
  return (
    <div className='w-full h-screen realtive'>
      <div className='absolute w-full h-screen bg-gradient-to-r from-neutral-900'></div>
      <video className='w-full h-full object-cover'
        src={v1}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <p className='font-bold p-1 text-3xl text-[#6366F1] uppercase md:text-5xl sm:text-4xl md:py-4'>.Img Palace</p>
        <h1>Offers you free stock Images</h1>
        <div className='flex justify-center items-center'>
        <p className='py-5 md:text-4xl sm:text:3x-l text-xl font-bold '>Get royalty Free </p>
        <Typed 
        className='py-5 md:text-4xl sm:text:3x-l text-xl font-bold pl-2 text-[#999aff]'
        strings={['IMAGES', 'VIDEOS']}
        typeSpeed={120} backSpeed={140} loop
        />
        </div>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
          <div>
            <input className='bg-transparent w-[300px] sm:w-[640px] focus:outline-none p-2' type="text" placeholder='Search Here' />
          </div>
          <div className='flex'>
            <button><AiOutlineSearch size={22} className='icon m-2 hover:fill-green-600 hover:border-slate-600' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Main