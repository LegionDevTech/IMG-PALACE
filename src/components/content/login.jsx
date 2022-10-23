/**
 * FILE NOT USED! 
 */

import React from 'react'
import { BsGoogle } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const Login = () => {
    return (
        <div className='grid grid-cols-1 h-screen w-full'>
            {/* login from */}
            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white-600 p-4 rounded-lg shadow-xl'>
                    <a href="/"><h2 className='text-4xl font-bold text-center py-6 hover:text-indigo-500'>.IMG PALACE</h2></a>
                    <div className='flex flex-col py-2'>
                        <label className='font-semibold'>Username</label>
                        <input className='border p-2 rounded-md relative bg-gray-200' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-semibold'>Password</label>
                        <input className='border p-2 rounded-md relative bg-gray-200' type="password" />
                    </div>
                    <button className='border-none w-full mt-6 py-2 bg-indigo-600 hover:bg-green-400 hover:shadow-xl hover:text-black font-semibold duration-300'>Sign In</button>
                    <div className='flex justify-between py-6 '>
                        <p className='border relative shadow-sm hover:shadow-xl px-6 py-2 flex items-center duration-500 rounded-md hover:bg-blue-500 hover:text-white  font-semibold'><BsFacebook className='mr-2' /> Facebook</p>
                        <p className='border relative shadow-sm hover:shadow-xl px-6 py-2 flex items-center duration-500 rounded-md hover:bg-green-500 hover:text-white font-semibold'><BsGoogle className='mr-2' /> Google</p>
                    </div>
                    <div className='justify-between flex'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" />Remeber Me</p>
                        <p>Create an account</p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
