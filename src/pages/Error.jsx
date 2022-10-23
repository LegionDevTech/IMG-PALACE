import React from 'react';
import image from '../assets/images/image.png';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Error(props) {
    return (
        <>
            <Header />
            <div className='w-full h-screen p-2 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]'>
                <div className='flex flex-col justify-center items-center h-full bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]'>
                    <div className='flex font-mono justify-center items-center cursor-pointer'>
                        {
                            props.errorCode.split("").map((character, index) => {
                                if (character === "0") {
                                    return (
                                        <img src={image}
                                            alt="/"
                                            key={index + "-" + character}
                                            className='h-28 w-28 m-4 hover:translate-y-4 duration-300 hover:duration-300' />
                                    );
                                } else {
                                    return (
                                        <h1 key={index + "-" + character}
                                            className='text-[175px] text-white hover:text-[#ff3063] hover:translate-y-4 duration-300 hover:duration-300'>
                                            {character}
                                        </h1>
                                    );
                                }
                            })
                        }
                    </div>
                    <h4 className='m-4 text-gray-400 uppercase'>
                        {props.errorDescription}
                    </h4>
                    <h1 className='uppercase font-sans font-bold py-2 px-2 hover:rounded-md hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-300'>
                        <a href="/">
                            .img palace
                        </a>
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    )
}
