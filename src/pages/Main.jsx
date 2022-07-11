import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import v1 from '../assets/videos/v1.mp4';

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
        <h1>Image Palace Offers you free stock Images</h1>
        <h2 className='py-4'>Get royalty Free Images</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
          <div>
            <input className='bg-transparent w-[300px] sm:w-[640px] focus:outline-none p-2' type="text" placeholder='Search Here' />
          </div>
          <div>
            <button><AiOutlineSearch size={26} className='icon m-2 hover:fill-green-600 hover:border-slate-600' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Main