import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsCart3,
  BsPerson,
} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import {FaBars} from 'react-icons/fa'
import Logo from "../assests/Group.png";

const Header = () => {
  return (
    <>
      <header className="header-top bg-white md:px-[4rem] px-[1rem] py-5">
        <div className="hidden container md:flex justify-between items-center">
          <div className="flex items-center">
            <BiPhoneCall />
            +022 319 821 967
          </div>
          <div className="logo flex items-center justify-center">
            <img src={Logo} alt="" className="object-contain" />
          </div>
          
            <ul className="flex items-center justify-center gap-8">
              <li className="flex items-center justify-center">
                <Link to="/">
                  <BsFacebook size={16}/>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/">
                  <BsTwitter size={16}/>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/">
                  <BsInstagram size={16}/>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/">
                  <BsYoutube size={16}/>
                </Link>
              </li>
            </ul>
        </div>

        {/* mobile view */}
        <div className="md:hidden flex items-center justify-between">
        <div className="logo flex items-center justify-center">
            <img src={Logo} alt="" className="object-contain" />
          </div>
          
            <ul className="flex items-center justify-center gap-8">
              <li className="flex items-center justify-center">
                <Link to="/" className="hover:text-[var(--color-50)]">
                  <BsFacebook size={16}/>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/" className="hover:text-[var(--color-50)]">
                  <BsTwitter size={16}/>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/" className="hover:text-[var(--color-50)]">
                  <BsInstagram size={16}/>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/" className="hover:text-[var(--color-50)]">
                  <BsYoutube size={16}/>
                </Link>
              </li>
            </ul>

        </div>
      </header>
      <header className="header-bottom bg-white md:px-[4rem] px-[1rem] py-8">
        <div className="container flex justify-between items-center relative ">

        {/* menu button */}
        <div>
          <FaBars size={20}  />
        </div>
      {/* mobile menu start */}
      <ul className="md:hidden flex flex-col top-0 absolute bg-white left-0 w-full p-0 ">
              <li className="py-2">
                <NavLink className='font-bold w-full hover:text-[var(--color-50)]' to="/">Home</NavLink>
              </li>
              <li className="py-2">
                <NavLink className='font-bold w-full hover:text-[var(--color-50)]' to="about">About</NavLink>
              </li>
              <li className="py-2">
                <NavLink className='font-bold w-full hover:text-[var(--color-50)]' to="faq">FAQ</NavLink>
              </li>
              <li className="py-2">
                <NavLink className='font-bold w-full hover:text-var(--color-50)]' to="blog">Blog</NavLink>
              </li>
              <li className="py-2">
                <NavLink className='font-bold w-full hover:text-[var(--color-50)]' to="contact">Contact</NavLink>
              </li>
            </ul>
            {/* mobile menu end */}

            <ul className="hidden md:flex items-center justify-center gap-8">
              <li>
                <NavLink className='font-bold hover:text-[var(--color-50)]' to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className='font-bold hover:text-[var(--color-50)]' to="about">About</NavLink>
              </li>
              <li>
                <NavLink className='font-bold hover:text-[var(--color-50)]' to="faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink className='font-bold hover:text-black' to="blog">Blog</NavLink>
              </li>
              <li>
                <NavLink className='font-bold hover:text-[var(--color-50)]' to="contact">Contact</NavLink>
              </li>
            </ul>

            <ul className="flex items-center justify-center gap-8">
              <li className="flex items-center justify-center">
                <NavLink className='font-bold hover:text-[var(--color-50)]'>
                  <AiOutlineHeart size={20}  />
                </NavLink>
              </li>
              <li className="relative flex items-center justify-center">
                <NavLink className='font-bold hover:text-[var(--color-50)]'>
                  <BsCart3 size={20}   />
                  <span className="absolute bg-[var(--color-50)] text-white w-[15px] h-[15px] rounded-[50%] flex items-center justify-center top-[-10px] right-[-8px] text-[10px] border-0">3</span>
                </NavLink>
              </li>
              <li className="flex items-center justify-center">
                <NavLink className='font-bold hover:text-[var(--color-50)]'>
                  <BsPerson size={20}  />
                </NavLink>
              </li>
            </ul>
        </div>

        
      </header>
    </>
  );
};

export default Header;
