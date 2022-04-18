import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-200 py-16'>
        <div className='max-w-none mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>.IMG PALACE</h1>
                    <div className='flex justify-between w-full sm:max-w-[240px] my-4'>
                        <FaFacebook className='icon'/>
                        <FaTwitter className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaPinterest className='icon'/>
                    </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Language</li>
                    <li>Cookie Policy</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li>Home</li>
                    <li>Genre</li>
                    <li>Popular</li>
                    <li>Recent</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='text-center'>
                <h4>© Copyright 2022</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer