import React from "react";
import Testimonials from "../components/Testimonials";
import { MdArrowForwardIos } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import NewArrival from "../components/NewArrival";
import HeroSlider from "../components/HeroSlider";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <section className="hero">
        <div className="grid grid-cols-[40%_60%] w-full">
        <div className='flex flex-col p-[4rem]'>
          <h2 className="text-[48px] font-[700]">Sort Out Your Spring Look</h2>
          <p className="text-[16px] py-6">We will help to develop every smallest thing into a big one for your company</p>
          <div >
          <Link to='shop' className="text-[16px] bg-[var(--color-50)] w-fit text-white rounded-[5px] flex items-center justify-between py-3 px-5 mb-[3rem] cursor-pointer">
              Shop
              <MdArrowForwardIos className="ml-2 text-white" />
            </Link>

          </div>
        </div>
        <div className=''>
          <HeroSlider />
        </div>
        </div>
      </section>
      <section>
        <NewArrival />
      </section>
      <section id='discount'>
        <div className="md:container w-full mx-auto px-[2rem] text-white">
          <div className="flex flex-col items-center justify-center bg-[var(--color-50)] p-[2rem] md:py-[3rem] py-[1rem]">
            <h4 className="text-[24px] pt-[3rem]">March Discount</h4>
            <h2 className="md:text-[64px] text-[54px] font-700 pb-[2rem]">Up to 70% off</h2>
            <button className="text-[16px] bg-white text-[var(--color-50)] rounded-[5px] flex items-center justify-between py-3 px-5 mb-[3rem] cursor-pointer">
              Get it
              <MdArrowForwardIos className="ml-2 text-[var(--color-50)]" />
            </button>
          </div>
        </div>
      </section>
      <section id='best-seller' >
        <div className="md:container mx-auto px-[2rem] py-[8rem]">
          <div className="w-full">
          <h2 className="text-[48px] font-[700] py-8">Best Seller</h2>
          </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
