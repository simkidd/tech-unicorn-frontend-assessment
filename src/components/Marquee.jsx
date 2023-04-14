import React from 'react';
import Marquee from 'react-fast-marquee';
import Apple from '../assets/images/brand-01.png'
import Bose from '../assets/images/brand-02.png'
import Canon from '../assets/images/brand-03.png'
import Dell from '../assets/images/brand-04.png'
import Intel from '../assets/images/brand-05.png'
import Lg from '../assets/images/brand-06.png'
import Samsung from '../assets/images/brand-07.png'
import SanDisk from '../assets/images/brand-08.png'

const MarqueeSlide = () => {
  return (
    <div className='pb-[100px] w-full'>
        <Marquee className='flex'>
            <div className='mx-4 w-[30%]'>
                <img src={Apple} alt="brand" />
            </div>
            <div className='mx-4 w-[30%]'>
                <img src={Bose} alt="brand" />
            </div>
            <div className='mx-4 w-[30%]'>
                <img src={Canon} alt="brand" />
            </div>
            <div className='mx-4 w-[30%]'>
                <img src={Dell} alt="brand" />
            </div>
            <div className='mx-4 w-[30%]'>
                <img src={Intel} alt="brand" />
            </div>
            <div className='mx-4 w-[30%]'>
                <img src={Lg} alt="brand" />
            </div>
            <div className='mx-4 w-[25%]'>
                <img src={Samsung} alt="brand" />
            </div>
            <div className='mx-4 w-[30%]'>
                <img src={SanDisk} alt="brand" />
            </div>
        </Marquee>
    </div>
  )
}

export default MarqueeSlide