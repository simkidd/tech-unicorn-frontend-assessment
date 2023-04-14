import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Group1.svg";
import { GoLocation } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer bg-[var(--color-50)] w-full h-[476px] text-white">
      <div className=" w-full px-[104px] pt-[74px] md:flex flex flex-col">
        <div className="pb-[30px]">
          <img src={Logo} alt="" className="w-[240px] " />
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-full max-w-[440px]">
            <p className="text-[16px] font-dmsans font-[400] leading-[20px] tracking-[0.5%]">
              Our Studio is a digital agency UI/UX Design and website
              Development located in Ohio United States of America
            </p>
          </div>
          <div>
            <h5 className="font-dmsans font-[700] leading-[19.2px] tracking-[0.5%] text-[16px] pb-[30px] ">
              Our Social Media
            </h5>
            <ul>
              <li className="mb-4">
                <Link className="text-white font-dmsans font-[400] tracking-[0.5%] leading-[20px] txt-[16px]">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-white font-dmsans font-[400] tracking-[0.5%] leading-[20px] txt-[16px]">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-white font-dmsans font-[400] tracking-[0.5%] leading-[20px] txt-[16px]">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="text-white font-dmsans font-[400] tracking-[0.5%] leading-[20px] txt-[16px]">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[229px]">
            <h5 className="font-dmsans font-[700] leading-[19.2px] tracking-[0.5%] text-[16px] pb-[30px] ">
              Contact
            </h5>
            <ul>
              <li className="flex items-center mb-4 text-white font-dmsans font-[400] tracking-[0.5% leading-[20px] text-[16px]">
                <GoLocation className="mr-4" /> 8819 Ohio St. South Gate,
                California 90280
              </li>
              <li className="flex  items-center mb-4 text-white font-dmsans font-[400] tracking-[0.5% leading-[20px] text-[16px]">
                <AiOutlineMail className="mr-4" /> ourstudio@hello.com
              </li>
              <li className="flex items-center text-white font-dmsans font-[400] tracking-[0.5% leading-[20px] text-[16px]">
                <HiOutlinePhone className="mr-4" /> +271 386-647-3637
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-white font-dmsans font-[400] tracking-[0.5%] leading-[20px] text-[16px]">
            Copyright Tanah Air Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
