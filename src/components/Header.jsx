import React, { useState } from "react";
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
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assests/Group.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="header-top bg-white md:px-[4rem] px-[1rem] md:py-5 py-2">
        <div className="hidden container mx-auto md:flex justify-between items-center">
          <div className="flex items-center">
            <BiPhoneCall />
            +022 319 821 967
          </div>
          <div className="logo flex items-center justify-center">
            <img src={Logo} alt="" className="object-contain" />
          </div>

          <ul className="flex items-center justify-center gap-8">
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsFacebook size={16} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsTwitter size={16} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsInstagram size={16} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsYoutube size={16} />
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
                <BsFacebook size={16} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsTwitter size={16} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsInstagram size={16} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link to="/" className="hover:text-[var(--color-50)]">
                <BsYoutube size={16} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <header className="header-bottom bg-white md:px-[4rem] px-[1rem] py-4 md:py-8 z-20 relative shadow-sm">
        <div className="md:container flex justify-between h-full items-center relative mx-auto">
          {/* menu button */}
          <div onClick={handleMenu} className="md:hidden z-20 cursor-pointer">
            {!openMenu ? <FaBars size={24} /> : <FaTimes size={24} />}
          </div>

          {/* mobile menu start */}
          <ul
            className={
              openMenu
                ? "flex flex-col top-9 absolute bg-white left-0 w-full p-0 duration-300 shadow-lg py-4 rounded-b-[8px]"
                : "hidden"
            }
          >
            <li className="w-full text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold  py-4 block w-full hover:text-[var(--color-50)]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold py-4  block w-full hover:text-[var(--color-50)]"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold  py-4 block w-full hover:text-[var(--color-50)]"
                to="faq"
              >
                FAQ
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold py-4  block w-full hover:text-[var(--color-50)]"
                to="blog"
              >
                Blog
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold py-4  block w-full hover:text-[var(--color-50)]"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* mobile menu end */}

          <ul className="hidden md:flex items-center justify-center gap-8">
            <li>
              <NavLink
                className="font-bold hover:text-[var(--color-50)]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bold hover:text-[var(--color-50)]"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bold hover:text-[var(--color-50)]"
                to="faq"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold hover:text-[var(--color-50)]" to="blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bold hover:text-[var(--color-50)]"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center justify-center gap-8">
            <li className="flex relative items-center justify-center">
              <NavLink className="font-bold hover:text-[var(--color-50)]">
                <AiOutlineHeart size={20} />
              </NavLink>
            </li>
            <li className="relative flex items-center justify-center">
              <NavLink className="font-bold hover:text-[var(--color-50)]">
                <BsCart3 size={20} />
                <span className="absolute bg-[var(--color-50)] text-white w-[15px] h-[15px] rounded-[50%] flex items-center justify-center top-[-10px] right-[-8px] text-[10px] border-0">
                  3
                </span>
              </NavLink>
            </li>
            <li className="flex relative items-center justify-center">
              <NavLink className="font-bold hover:text-[var(--color-50)]">
                <BsPerson size={20} />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
