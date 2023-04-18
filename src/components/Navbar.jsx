import React, { useState, useContext } from "react";
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
import Logo from "../assets/Group.png";
import { CartContext } from "../contexts/CartProvider"; 

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // extract items count from cartContext
  const { cart, itemCount } = useContext(CartContext);

  return (
    <>
      <header className="header-top bg-white w-full md:h-[96px] h-[66px] md:px-[104px] px-[1rem] flex items-center">
        <div className="flex container mx-auto md:flex justify-between items-center">
          <div className="md:flex hidden items-center font-dmsans text-[16px] font-[500]">
            <BiPhoneCall className="mr-[16px]" />
            +022 319 821 967
          </div>
          <div className="flex items-center justify-center ">
            <img
              src={Logo}
              alt=""
              className="object-contain w-[167px] h-[33px]"
            />
          </div>

          <ul className="flex items-center justify-center gap-4">
            <li className="flex items-center justify-center">
              <Link
                to="/"
                className="text-[#11142D] hover:text-[var(--color-50)]"
              >
                <BsFacebook size={24} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                to="/"
                className="text-[#11142D] hover:text-[var(--color-50)]"
              >
                <BsTwitter size={24} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                to="/"
                className="text-[#11142D] hover:text-[var(--color-50)]"
              >
                <BsInstagram size={24} />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                to="/"
                className="text-[#11142D] hover:text-[var(--color-50)]"
              >
                <BsYoutube size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <nav className="header-bottom bg-white md:px-[104px] px-[1rem] z-20 relative shadow-sm md:h-[109px] h-[69px] ">
        <div className="md:container flex justify-between h-full items-center relative mx-auto">
          {/* menu button */}
          <div onClick={handleMenu} className="md:hidden z-20 cursor-pointer">
            {!openMenu ? <FaBars size={24} /> : <FaTimes size={24} />}
          </div>

          {/* mobile menu start */}
          <ul
            className={
              openMenu
                ? "flex flex-col top-[65px] absolute bg-white left-0 w-full p-0 duration-300 shadow-lg py-4 rounded-b-[8px] font-dmsans font-[400] text-[16px]"
                : "hidden"
            }
          >
            <li className="w-full text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold  py-6 block w-full hover:text-[var(--color-50)] text-[#11142D]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold py-6  block w-full hover:text-[var(--color-50)] text-[#11142D]"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold  py-6 block w-full hover:text-[var(--color-50)] text-[#11142D]"
                to="faq"
              >
                FAQ
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold py-6  block w-full hover:text-[var(--color-50)] text-[#11142D]"
                to="blog"
              >
                Blog
              </NavLink>
            </li>
            <li className=" w-full  text-center">
              <NavLink
                onClick={handleMenu}
                className="font-bold py-6  block w-full hover:text-[var(--color-50)] text-[#11142D]"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* mobile menu end */}

          <ul className="hidden md:flex items-center justify-center gap-8 font-dmsans font-[400] text-[16px] ">
            <li>
              <NavLink
                className="text-[#11142D] hover:text-[var(--color-50)]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#11142D] hover:text-[var(--color-50)]"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#11142D] hover:text-[var(--color-50)]"
                to="faq"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#11142D] hover:text-[var(--color-50)]"
                to="blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#11142D] hover:text-[var(--color-50)]"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center justify-center gap-8">
            <li className="flex relative items-center justify-center">
              <NavLink className="font-bold text-[#11142D] hover:text-[var(--color-50)]">
                <AiOutlineHeart size={24} />
              </NavLink>
            </li>
            <li className="relative flex items-center justify-center">
              <NavLink
                to="cart"
                className="font-bold text-[#11142D] hover:text-[var(--color-50)]"
              >
                <BsCart3 size={24} />
                {cart.length > 0 && (
                  <span className="absolute bg-[var(--color-50)] text-white w-[18px] h-[18px] rounded-[50%] flex items-center justify-center top-[-12px] right-[-10px] text-[14px] border-0">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="flex relative items-center justify-center">
              <NavLink className="font-bold text-[#11142D] hover:text-[var(--color-50)]">
                <BsPerson size={24} />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
