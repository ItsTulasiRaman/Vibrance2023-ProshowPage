import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

function ErrorPage() {
  return (
    <section className='bg-[#F5B8FF]'>
      <Navbar/>
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center '>
    <p className='text-8xl text-white font-semibold'>404 error</p>
    <p className='mt-5 flex w-[65%] text-[32px] text-black font-bold text-center'>Page not found. But hey, at least you found your way to the fest! Enjoy the sights, sounds, and good vibes.</p>
    <button className='mt-5 bg-[#B125C9] w-[253px] h-[61px] rounded-[96px] p-[8px] animate-pulse transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[4px_5px_0px_rgba(0,0,0)]'>
        <Link to="/" className='text-[24px] text-white font-semibold'>Go back home</Link>
    </button>
    <button className='mt-5 bg-[#B125C9] w-[253px] h-[61px] rounded-[96px] p-[8px] animate-pulse transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[4px_5px_0px_rgba(0,0,0)]'>
        <Link to="/proshows" className='text-2xl text-white font-semibold'>Pro Shows</Link>
    </button>
    </div>
    </section>
  )
}

export default ErrorPage;