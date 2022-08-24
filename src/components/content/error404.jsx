import React from 'react'

const error404 = () => {
  return (
    
    <div className='w-full h-screen p-2 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]'>
        {/* Inner container  */}
        <div className='flex flex-col justify-center items-center h-full bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]'>
                <div className='flex font-mono justify-center items-center cursor-pointer'>
                
                    <h1 className='text-[175px] text-white hover:text-[#ff3063] hover:translate-y-4 duration-300 hover:duration-300  '>4</h1>                
                        <img src="https://o.remove.bg/uploads/578754df-9a12-40a7-a789-b6e670ed6cba/image.png" alt="/" className='h-28 w-28 m-4 hover:translate-y-4 duration-300 hover:duration-300' />           
                            <h1 className='text-[175px] text-white hover:text-[#ff3063] hover:translate-y-4 duration-300 hover:duration-300 '>4</h1>
                </div>
                <h4 className='m-4 text-gray-400 uppercase'>
                    The page you are trying to access does not exsists.
                </h4>
                <h1 className='uppercase font-sans font-bold py-2 px-2 hover:rounded-md hover:shadow-xl hover:shadow-gray-800/80 bg-transparent text-gray-300'>
                   <a href="/">.img palace </a> 
                </h1>
        </div>
    </div>
  )
}

export default error404