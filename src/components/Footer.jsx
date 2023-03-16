import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assests/Group1.svg";
import {GoLocation} from 'react-icons/go'
import {HiOutlinePhone} from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="footer bg-[var(--color-50)] w-full text-white">
        <div className='md:container mx-auto w-full px-[1.5rem] md:py-[6rem] pt-12 pb-4 md:flex justify-between grid gap-10'>
          <div className='f-left flex flex-col justify-between md:w-[35%]'>
          <div>
            <img src={Logo} alt="" className='w-[180px] mb-4' />
            <p className='text-[14px]'>Our Studio is a digital agency UI/UX Design and website Development located in Ohio United States of America</p>
          </div>
          <p className='hidden md:block'>Copyright Tanah Air Studio</p>

          </div>
          <div className='flex justify-between gap-[3rem] '>
          <div className='f-center flex flex-col gap-6 w-full'>
            <h5 className='font-bold'>Our Social Media</h5>
            <ul>
              <li className='mb-4 text-[14px]'><Link>Facebook</Link></li>
              <li className='mb-4 text-[14px]'><Link>Twitter</Link></li>
              <li className='mb-4 text-[14px]'><Link>Instagram</Link></li>
              <li ><Link>Youtube</Link></li>
            </ul>
          </div>
          <div className='f-right  flex flex-col gap-6 w-full'>
            <h5 className='font-bold'>Contact</h5>
            <ul>
              <li className='flex items-center mb-4 text-[14px]'><GoLocation className='mr-4'/> 8819 Ohio St. South Gate, California 90280</li>
              <li className='flex  items-center mb-4 text-[14px]'><AiOutlineMail className='mr-4'/> ourstudio@hello.com</li>
              <li className='flex items-center text-[14px]'><HiOutlinePhone className='mr-4' /> +271 386-647-3637</li>
            </ul>
          </div>

          </div>

          <p className='md:hidden'>Copyright Tanah Air Studio</p>
        </div>
      </div>
    </>
  )
}

export default Footer