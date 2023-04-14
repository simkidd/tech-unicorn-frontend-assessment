import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Banner1 from "../assets/images/main-banner.jpg";
import Banner2 from "../assets/images/main-banner-1.jpg";
import CatBanner1 from "../assets/images/catbanner-01.jpg";
import CatBanner2 from "../assets/images/catbanner-02.jpg";
import CatBanner3 from "../assets/images/catbanner-03.jpg";
import CatBanner4 from "../assets/images/catbanner-04.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        // loop={true}
        slidesPerGroup={1}
        modules={[Autoplay, Pagination]}
        pagination={{clickable: true}}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="w-full h-full box-border relative">
            <img src={Banner1} alt="" className="object-cover h-full w-full" />
            <div className="absolute md:top-[90px] top-[40px] md:left-[50px] left-[25px]">
                <p className="uppercase font-dmsans text-[var(--color-50)] md:text-[16px] text-[14px] md:pb-[18px] pb-[10px]">supercharged for pros.</p>
                <h2 className="md:text-[48px] text-[32px] font-dmsans md:pb-[18px] pb-[10px]">Special Sale</h2>
                <p className="font-dmsans md:text-[16px] text-[14px] tracking-[0.5%] leading-[28px] md:pb-[18px] pb-[10px] text-gray-600">From $999.00 or $41.62/mo.<br/> for 24 mo.</p>
                <button className="bg-[var(--color-50)] text-white md:w-[124px] w-[114px] md:h-[56px] h-[46px] border-none rounded-[8px] uppercase cursor-pointer md:text-[16px] text-[14px] font-dmsans">buy now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full box-border relative">
            <img src={Banner2} alt="" className="object-cover h-full w-full" />
            <div className="absolute md:top-[90px] top-[40px] md:left-[50px] left-[25px]">
                <p className="uppercase font-dmsans text-[var(--color-50)] md:text-[16px] text-[14px] md:pb-[18px] pb-[10px]">supercharged for pros.</p>
                <h2 className="md:text-[48px] text-[32px] font-dmsans md:pb-[18px] pb-[10px]">Special Sale</h2>
                <p className="font-dmsans md:text-[16px] text-[14px] tracking-[0.5%] leading-[28px] md:pb-[18px] pb-[10px] text-gray-600">From $999.00 or $41.62/mo.<br/> for 24 mo.</p>
                <button className="bg-[var(--color-50)] text-white md:w-[124px] w-[114px] md:h-[56px] h-[46px] border-none rounded-[8px] uppercase cursor-pointer md:text-[16px] text-[14px] font-dmsans">buy now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full box-border relative">
            <img src={CatBanner1} alt="" className="object-cover h-full w-full" />
            <div className="absolute md:top-[90px] top-[40px] md:left-[50px] left-[25px]">
                <p className="uppercase font-dmsans text-[var(--color-50)] md:text-[16px] text-[14px] md:pb-[18px] pb-[10px]">best sale</p>
                <h2 className="md:text-[48px] text-[32px] font-dmsans md:pb-[18px] pb-[10px]">Laptops Max</h2>
                <p className="font-dmsans md:text-[16px] text-[14px] tracking-[0.5%] leading-[28px] md:pb-[18px] pb-[10px] text-gray-600">From $1999.00 or<br/> $64.62/mo.</p>
                <button className="bg-[var(--color-50)] text-white md:w-[124px] w-[114px] md:h-[56px] h-[46px] border-none rounded-[8px] uppercase cursor-pointer md:text-[16px] text-[14px] font-dmsans">buy now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full box-border relative">
            <img src={CatBanner2} alt="" className="object-cover h-full w-full" />
            <div className="absolute md:top-[90px] top-[40px] md:left-[50px] left-[25px]">
                <p className="uppercase font-dmsans text-[var(--color-50)] md:text-[16px] text-[14px] md:pb-[18px] pb-[10px]">15% off</p>
                <h2 className="md:text-[48px] text-[32px] font-dmsans md:pb-[18px] pb-[10px]">Smartwatch 7</h2>
                <p className="font-dmsans md:text-[16px] text-[14px] tracking-[0.5%] leading-[28px] md:pb-[18px] pb-[10px] text-gray-600">Shop the latest brand<br/> styles and colors</p>
                <button className="bg-[var(--color-50)] text-white md:w-[124px] w-[114px] md:h-[56px] h-[46px] border-none rounded-[8px] uppercase cursor-pointer md:text-[16px] text-[14px] font-dmsans">buy now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full box-border relative">
            <img src={CatBanner3} alt="" className="object-cover h-full w-full" />
            <div className="absolute md:top-[90px] top-[40px] md:left-[50px] left-[25px]">
                <p className="uppercase font-dmsans text-[var(--color-50)] md:text-[16px] text-[14px] md:pb-[18px] pb-[10px]">new arrival</p>
                <h2 className="md:text-[48px] text-[32px] font-dmsans md:pb-[18px] pb-[10px]">Buy IPad Air</h2>
                <p className="font-dmsans md:text-[16px] text-[14px] tracking-[0.5%] leading-[28px] md:pb-[18px] pb-[10px] text-gray-600">From $599.00 or $49.91/mo.<br/> for 12 mo.</p>
                <button className="bg-[var(--color-50)] text-white md:w-[124px] w-[114px] md:h-[56px] h-[46px] border-none rounded-[8px] uppercase cursor-pointer md:text-[16px] text-[14px] font-dmsans">buy now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full box-border relative">
            <img src={CatBanner4} alt="" className="object-cover h-full w-full" />
            <div className="absolute md:top-[90px] top-[40px] md:left-[50px] left-[25px]">
                <p className="uppercase font-dmsans text-[var(--color-50)] md:text-[16px] text-[14px] md:pb-[18px] pb-[10px]">free engraving</p>
                <h2 className="md:text-[48px] text-[32px] font-dmsans md:pb-[18px] pb-[10px]">AirPods Air</h2>
                <p className="font-dmsans text-[16px] tracking-[0.5%] leading-[28px] pb-[18px] text-gray-600">High-fidelity playback &<br/> ultra-low distortion</p>
                <button className="bg-[var(--color-50)] text-white md:w-[124px] w-[114px] md:h-[56px] h-[46px] border-none rounded-[8px] uppercase cursor-pointer md:text-[16px] text-[14px] font-dmsans">buy now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default HeroSlider;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    @media screen and (max-width: 768px) {
        height: 330px;
    }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination{

    .swiper-pagination-bullet{
        background: var(--color-50);
    }
  }
`;
