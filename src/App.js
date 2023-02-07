import './App.css';
import proshowintro from './assets/proshowintro.png'
import artist from './assets/artist.png'
import titik from './assets/titik-titik.png'
import bookticketsarrow from './assets/bookticketsarrow.svg'
import insta from "./assets/instagramicon.svg"
import tweet from "./assets/twittericon.svg"
//import proshowbg from "./assets/proshowbg.svg"

function App({name,description}) {
  return (
    <>
      <section className="mb-[40px]">

         <div className='flex justify-center mt-[30px] min-w-[320px]'>
          <img className='w-[60%]' src={proshowintro} alt='pro show intro' />
        </div>



{/* Card 1 begins here */}
<div className=''>
        <div className='flex justify-center mt-[40px] m-w-[400px]'>
          <div className='p-[2%] w-[90%] min-w-[390px] flex md:flex-row flex-col gap-1 bdr'>
            <div className=' w-[100%] md:h-auto xl:w-[40%] lg:w-[60%] md:w-[70%] p-[1%] '>
              <div className='card1 md:px-0 px-[20%] sm:h-[55vh] h-[220px]'>
                <div className='fadeIn w-[85px] float-right'><img className='' src={titik} alt='white dots' /></div>
                <div className='relative'>
                <div className='fadeIn w-[100%] absolute flex items-end border xl:h-[45vh] lg:h-[40vh] md:h-[35vh] sm:h-[52vh] h-[220px]'><img className='w-[85px]' src={titik} alt='white dots' /></div>
                </div>
                <div className='relative'>
                <div className='w-[100%] xl:top-[4vh] flex justify-center border-3 absolute lg:top-[6vh] md:top-[5vh] top-[5vh]'><img className='w-[70%]' src={artist} alt='artist' /></div>
                </div>
              </div>
            </div>

            <div className='md:mt-[0px] md:ml-[-20px] p-[1%]'>
              <h1 className='text-white text-8xl'>Ritviz</h1>
              <div className='flex flex-col gap-2 md:ml-[-40px] p-[10px]'>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Et maecenas parturient vulputate netus lectus in faucibus massa dui. Varius urna pellentesque faucibus sed at. Mauris augue non imperdiet diam fermentum.</p>
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




{/* End of 1st card */}

{/* Second card begins here */}
        {/* <div className='flex justify-center mt-[40px]'>
          <div className='p-[2%] w-[90%] flex md:flex-row flex-col gap-1 bdr'>
            <div className='w-[40%] clearfix md:h-auto sm:h-[260px] h-[220px] p-[1%]'>
              <div className='relative'>
                <div className='fadeIn w-[25%] top-0 right-0 absolute'><img src={titik} alt='white dots' /></div>
                <div className='fadeIn w-[25%] top-[220px] left-0 absolute'><img className='' src={titik} alt='white dots' /></div>
                <div className='w-[70%] absolute top-[30px] left-[50px]'><img classname='' src={artist} alt='artist' /></div>
              </div>
            </div>


            <div className='md:mt-[0px] md:ml-[-20px] p-[1%]'>
              <h1 className='text-white text-8xl'>Ritviz</h1>
              <div className='flex flex-col gap-2 md:ml-[-40px] p-[10px]'>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Et maecenas parturient vulputate netus lectus in faucibus massa dui. Varius urna pellentesque faucibus sed at. Mauris augue non imperdiet diam fermentum.</p>
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
        </div> */}
      </div>
      </section>
    </>
  );
}

export default App;
