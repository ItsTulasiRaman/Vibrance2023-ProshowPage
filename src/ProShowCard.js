import React from 'react'
import './App.css'
import artist from './assets/artist.png'
import titik from './assets/titik-titik.png'
import bookticketsarrow from './assets/bookticketsarrow.svg'
import insta from "./assets/instagramicon.svg"
import tweet from "./assets/twittericon.svg"
//import proshowbg from "./assets/proshowbg.svg"

function ProShowCard({name,description}) {
  return (
  <>
  <div className='flex justify-center mt-[40px] m-w-[400px]'>
          <div className='p-[2%] w-[90%] min-w-[350px] flex md:flex-row flex-col gap-1 bdr'>
            <div className=' w-[100%] md:h-auto xl:w-[40%] lg:w-[60%] md:w-[70%] p-[1%] '>
              <div className='card1 md:px-0 px-[20%] md:h-auto sm:h-[55vh] h-[220px]'>
                <div className='fadeIn w-[85px] float-right'><img className='' src={titik} alt='white dots' /></div>
                <div className='relative bottom-0'>
                <div className='fadeIn w-[100%] absolute flex items-end xl:h-[42vh] lg:h-[40vh] md:h-[35vh] sm:h-[52vh] h-[220px]'><img className='w-[85px]' src={titik} alt='white dots' /></div>
                </div>
                <div className='relative'>
                <div className='w-[100%] xl:top-[4vh] flex justify-center border-3 absolute lg:top-[6vh] md:top-[5vh] top-[5vh]'><img className='w-[70%]' src={artist} alt='artist' /></div>
                </div>
              </div>
            </div>

            <div className='md:mt-[0px] md:ml-[-20px] p-[1%]'>
              <h1 className='text-white text-8xl'>{name}</h1>
              <div className='flex flex-col gap-2 md:ml-[-40px] p-[10px]'>
                <p className='text-white'>{description}</p>
                <div className='flex flex-row gap-4'>
                  <img className='w-[40px]' src={insta} alt='instagram' />
                  <img className='w-[40px]' src={tweet} alt='twitter' />
                </div>
                <div>
                  <button className='bg-[#E7704B] p-[10px] font-medium mb-[2%]'>
                    <div className='flex flex-row gap-[10px]'>
                      <p>Book tickets</p>
                      <img src={bookticketsarrow} alt='book tickets icon' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
  )
}

export default ProShowCard