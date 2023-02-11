import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center '>
    <p className='text-8xl text-white font-semibold'>404 error</p>
    <p className='text-2xl text-white font-normal'>Please check the URL carefully</p>
    <button className='mt-5 bg-[#F65926] rounded p-[8px] animate-pulse transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[4px_5px_0px_rgba(0,0,0)]'>
        <Link to="/" className='text-2xl text-white font-semibold'>Home</Link>
    </button>
    </div>
  )
}

export default ErrorPage;