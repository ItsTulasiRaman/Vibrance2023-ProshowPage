import proshowintro from './assets/proshowintro.png'
import ProShowCard from './ProShowCard';
import './App.css'
import { useEffect, useState } from 'react';
import "./assets/gilroy-font/Gilroy-Light.ttf"
import artist from './assets/artist.png'
import titik from './assets/titik-titik.png'
import bookticketsarrow from './assets/bookticketsarrow.svg'
import insta from "./assets/instagramicon.svg"
import tweet from "./assets/twittericon.svg"

function App() {
  const [Loading, SetLoading] = useState(false)
  const [LoadingPage, SetLoadingPage] = useState(false)
  const [proShowData,setproShowData] = useState([]);
useEffect(() => {
  async function getData() {
    try{
      SetLoadingPage(true)
    const response = await fetch(`https://vitvibrance.onrender.com/api/v1.0/pro-shows`)
    const data = await response.json();
    setproShowData(data.pro_shows)
    SetLoadingPage(false)
    SetLoading(true)
  }
    catch(error){
      console.log(error)
    }
  }
  getData()
}, [])
console.log(proShowData[0])
  return (
    <>
      {Loading ? (<section className="mb-[40px]">

         <div className='flex justify-center mt-[30px] min-w-[320px]'>
          <img className='w-[60%]' src={proshowintro} alt='pro show intro' />
        </div>



{/* Card 1 begins here */}
<div className=''>
<div>
  <ProShowCard name={proShowData[0].title} description={proShowData[0].description}/>
</div>

{/* End of 1st card */}

{/* Second card begins here */}
        {/* <div className='flex justify-center mt-[40px]'>
          <div className='p-[2%] w-[90%] flex md:flex-row flex-col gap-1 bdr'>
            <div className='w-[40%] clearfix md:h-auto sm:h-[260px] heightCard p-[1%] border'>
              <div className='p-[2%]'>
                <div className='fadeIn w-[25%] float-right'><img src={titik} alt='white dots' /></div>
                <div className='fadeIn w-[25%] bot absolute'><img className='' src={titik} alt='white dots' /></div>
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
          </div>*/}
        </div>
      </section>)
    :
      (<section>
        <div className='flex justify-center mt-[30px] min-w-[320px]'>
          <img className='w-[60%]' src={proshowintro} alt='pro show intro' />
        </div>
      </section>)}
    </>
  );
}

export default App;
