import proshowintro from './assets/proshowintro.png'
import ProShowCard from './ProShowCard';
import './App.css'
import { useEffect, useState } from 'react';
import "./assets/gilroy-font/Gilroy-Light.ttf"
import Navbar from './Navbar';
import { MoonLoader } from 'react-spinners';
import { motion } from 'framer-motion';

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
    <div className='mt-10px' />
    <Navbar/>
      <section className="mb-[40px]">

         <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex justify-center mt-[30px] min-w-[320px]'>
          <img className='w-[83.33%]' src={proshowintro} alt='pro show intro' />
        </motion.div>



{/* Card 1 begins here */}
{Loading ? (<div className=''>
<div>
  <ProShowCard proShowData={proShowData} />
</div>
        </div>)
    :
      (
        <div className='flex justify-center mt-[40px]'>
      <MoonLoader
        color="#F65926"
        cssOverride={{}}
        loading
        size={50}
        speedMultiplier={0.3}
      />
      </div>)}
      </section>
    </>
  );
}

export default App;
