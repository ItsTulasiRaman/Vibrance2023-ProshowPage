import './ProShow.css'
import artist from './../assets/ProShow/artist.png'
import titik from './../assets/ProShow/titik-titik.png'
import vibrancelogo from './../assets/ProShow/vibrancelogo.png'
import bookticketsarrowlight from './../assets/ProShow/bookticketsarrowlight.svg'
import bookticketsarrowdark from './../assets/ProShow/bookticketsarrowdark.svg'
import insta from "./../assets/ProShow/instagramicon.svg"
import tweet from "./../assets/ProShow/twittericon.svg"
import { useNavigate } from 'react-router-dom'
import ReactImageFallback from 'react-image-fallback'

function ProShowCard({ proShowData }) {
const navigate = useNavigate();

  return (
    <>
      <div>
        {proShowData.map((show) => (<div key={show.id} className='flex justify-center mt-[40px] m-w-[400px]'>
          <div className='p-[2%] w-[90%] min-w-[350px] flex md:flex-row flex-col gap-5 bdr'>
            <div className='flex justify-center items-center'>
              <div className='box md:mt-0 mt-[18px]'>
                <img className='corner-1' src={titik} alt='white dots'/>
                {<ReactImageFallback className='centre aspect-square' src={`${process.env.REACT_APP_VIBRANCE_API +show.image}`} fallbackImage={vibrancelogo} initialImage={vibrancelogo} alt='artist'/>}
                <img className='corner-2' src={titik} alt='white dots'/>
              </div>
            </div>



            <div className='md:mt-[20px] md:ml-[-20px] p-[1%] pt-0'>
              <h1 className='text-white md:text-[70px] text-[56px] leading-none cirkafont'>{show.title}</h1>
              <div className='flex flex-col gap-[12px] md:ml-[-40px] p-[10px] mt-[4px]'>
                <p className='text-white gilroyfont'>{show.description}</p>
                <div className='flex flex-row gap-4'>
                  <a href='https://www.instagram.com' target="_blank" rel='noopener noreferrer'><img className='w-[40px] relative' src={insta} alt='instagram' /></a>
                  <a href='https://www.twitter.com' target="_blank" rel='noopener noreferrer'><img className='w-[40px] relative' src={tweet} alt='twitter' /></a>
                </div>
                <div className='mt-[18px]'>
                  <div className='w-[193px] grid'>
                    <a className="btn-epic" href="/" target="_blank" rel='noreferrer'>
                      <div>
                        <span>
                          <div className='flex flex-row gap-[10px] justify-center items-center'>
                            <p className='cirkabold'>Book tickets</p>
                            <img className='pt-[3px] w-[30px]' src={bookticketsarrowlight} alt='book tickets icon' />
                          </div>
                        </span>
                        <span>
                          <div className='flex flex-row gap-[10px] justify-center items-center'>
                            <p className='cirkabold'>Book tickets</p>
                            <img className='pt-[3px] w-[30px]' src={bookticketsarrowdark} alt='book tickets icon' />
                          </div>
                        </span>
                      </div>
                    </a>
                  </div>
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