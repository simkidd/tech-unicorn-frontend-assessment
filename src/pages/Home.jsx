import React, { useContext } from "react";
import Testimonials from "../components/Testimonials";
import { MdArrowForwardIos } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import NewArrival from "../components/NewArrival";
import Meta from "../components/Meta";
import Bestseller from "../components/Bestseller";
import Hero from "../components/Hero";
import MarqueeSlide from "../components/Marquee";
import { ProductContext } from "../contexts/ProductProvider";

const Home = () => {
  // get products from context
  const { products } = useContext(ProductContext);

  return (
    <div className="w-full bg-white">
      <Meta title={"E-commerce App"} />
      <section className="hero">
        <Hero />
      </section>
      {/* categories */}
      <section id="categories">
        <div className="md:px-[104px] px-[20px] md:py-[200px] py-[100px] grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-[12px]">
          <div
            id="card"
            className="md:h-[560px] h-[360px] bg-[#e2e2ea] md:px-[40px] px-[20px] md:pb-[40px] md:pt-[302px] pt-[180px] box-border"
          >
            <h2 className="font-merriweather font-[700] md:text-[48px] text-[28px] leading-[57.6px] tracking-[0.005em] md:pb-[24px] ">
              Dresses
            </h2>
            <p className="md:text-[16px] text-[14px] font-[400] font-dmsans text-[#9a9ab0] leading-[125%] tracking-[0.5%] md:pb-[56px] pb-[14px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="w-[40px] h-[40px] rounded-[28px] bg-[var(--color-50)] border-0 text-white flex items-center justify-center cursor-pointer">
              <HiArrowRight size={24} />
            </button>
          </div>
          <div
            id="card"
            className="md:h-[560px] h-[360px] bg-[#e2e2ea] md:px-[40px] px-[20px] md:pb-[40px] md:pt-[302px] pt-[180px] box-border"
          ></div>
          <div
            id="card"
            className="md:h-[560px] h-[360px] bg-[#e2e2ea] md:px-[40px] px-[20px] md:pb-[40px] md:pt-[302px] pt-[180px] box-border"
          ></div>
          <div
            id="card"
            className="md:h-[560px] h-[360px] bg-[#e2e2ea] md:px-[40px] px-[20px] md:pb-[40px] md:pt-[302px] pt-[180px] box-border"
          ></div>
          <div
            id="card"
            className="md:h-[560px] h-[360px] bg-[#e2e2ea] md:px-[40px] px-[20px] md:pb-[40px] md:pt-[302px] pt-[180px] box-border"
          ></div>
          <div
            id="card"
            className="md:h-[560px] h-[360px] bg-[#e2e2ea] md:px-[40px] px-[20px] md:pb-[40px] md:pt-[302px] pt-[180px] box-border"
          ></div>
        </div>
      </section>
      {/* new arrival */}
      <section id="new-arrival">
        <NewArrival products={products} />
      </section>
      {/* discount */}
      <section id="discount">
        <div className=" w-full text-white md:px-[104px] px-[20px]">
          <div className="flex flex-col w-full items-center justify-center bg-[var(--color-50)]  md:py-[3rem]  md:h-[496px] h-[296px]">
            <h4 className="md:text-[24px] text-[18px] font-merriweather font-[700] md:pb-[24px] pb-[10px]">
              March Discount
            </h4>
            <h2 className="md:text-[64px] text-[44px] font-[700] md:pb-[56px] pb-[10px] font-merriweather">
              Up to 70% off
            </h2>
            <button className="md:text-[16px] text-[14px] bg-white text-[var(--color-50)] rounded-[8px] md:h-[56px] h-[46px] md:w-[124px] w-[100px] flex items-center justify-center cursor-pointer font-dmsans border-0">
              Get it
              <MdArrowForwardIos className="ml-2 text-[var(--color-50)]" />
            </button>
          </div>
        </div>
      </section>
      {/* best seller */}
      <section id="best-seller">
        <Bestseller products={products} />
      </section>
      {/* marquee */}
      <section id="marquee">
        <MarqueeSlide />
      </section>
      {/* testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
