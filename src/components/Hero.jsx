import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-[37%_63%] flex flex-col w-full md:pl-[104px] md:pr-[0] px-[20px] md:h-[519px] h-full box-border">
          <div className="flex flex-col md:pt-[89px] pt-[50px]">
            <h2 className="md:text-[48px] text-[38px] font-[700] font-merriweather text-[#11142d] pb-[32px] tracking-[0.005em] leading-[120%]">
              Sort Out Your <br /> Spring Look
            </h2>
            <p className="text-[16px] w-[370px] pb-[48px] font-[500] font-dmsans text-[#9a9ab0] leading-[120%]">
              We will help to develop every smallest thing into <br/> a big one
              for your company
            </p>
            <div className='mb-[48px]'>
              <Link
                to="shop"
                className="text-[16px] bg-[var(--color-50)] w-[120px] h-[56px] text-white rounded-[8px] flex items-center justify-center cursor-pointer font-dmsans font-[700] tracking-[0.5%] leading-[19.2px]"
              >
                Shop
                <MdArrowForwardIos size={16} className="ml-[8px]" />
              </Link>
            </div>
          </div>

            <HeroSlider />
        </div>
  )
}

export default Hero