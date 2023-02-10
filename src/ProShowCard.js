import React, { useEffect, useState } from 'react'
import './App.css'
import artist from './assets/artist.png'
import titik from './assets/titik-titik.png'
import bookticketsarrow from './assets/bookticketsarrow.svg'
import insta from "./assets/instagramicon.svg"
import tweet from "./assets/twittericon.svg"
//import proshowbg from "./assets/proshowbg.svg"

function ProShowCard({proShowData}) {


  return (
  <>
  <div>
  {proShowData.map((show)=>(<div key={show.id} className='flex justify-center mt-[40px] m-w-[400px]'>
          <div className='p-[2%] w-[90%] min-w-[350px] flex md:flex-row flex-col gap-5 bdr'>
          <div className='flex justify-center items-center'>
        <div className='box'>
          <img className='corner-1' src={titik} />
          <img className='centre' src={artist} />
          <img className='corner-2' src={titik} />
        </div>
        </div>



        <div className='md:mt-[0px] md:ml-[-20px] p-[1%]'>
              <h1 className='text-white text-8xl cirkafont text-[120px]'>{show.title}</h1>
              <div className='flex flex-col gap-[12px] md:ml-[-40px] p-[10px]'>
                <p className='text-white gilroyfont'>{show.description}</p>
                <div className='flex flex-row gap-4'>
                  <img className='w-[40px]' src={insta} alt='instagram' />
                  <img className='w-[40px]' src={tweet} alt='twitter' />
                </div>
                <div className='mt-[18px]'>
                  <div className='w-[200px]'>
                  <a class="btn-epic" href="/" target="_blank" rel='noreferrer'>
  <div>
    <span><div className='flex flex-row gap-[10px]'><p className='cirkabold'>Book tickets</p>
    <img className='pt-[3px]' src={bookticketsarrow} alt='book tickets icon' /></div></span>
    <span><div className='flex flex-row gap-[10px]'><p className='cirkabold'>Book tickets</p>
    <img className='pt-[3px]' src={bookticketsarrow} alt='book tickets icon' /></div></span>
    </div>
    </a>
                  </div>
                  {/* <button className='bg-[#F65926] px-[20px] py-[12px] font-medium mb-[2%]'>
                    <div className='flex flex-row gap-[10px]'>
                      <p className='cirkabold'>Book tickets</p>
                      <img className='pt-[3px]' src={bookticketsarrow} alt='book tickets icon' />
                    </div>
                  </button> */}
                </div>
              </div> 


            </div>
          </div>
        </div>))}
      </div>
  </>
  )
}

export default ProShowCard