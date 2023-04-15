import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { TestimonialData } from "../data/TestimonialData";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <Wrapper className="w-full">
      <div className="flex flex-col items-center relative">
        <h2 className="font-[700] md:text-[48px] mb-[70px] text-[28px]">What Our Customer Says</h2>
        <div className="w-full mb-[200px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            modules={[Navigation, Autoplay, Pagination]}
            navigation={true}
            pagination={{dynamicBullets:true}}
            loop={true}
            autoplay={{delay:2500, disableOnInteraction:false}}
          >
            {TestimonialData.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="bg-[var(--color-10)] flex flex-col relative rounded-[8px] h-[312px] items-center box-border px-[20px]">
                    <div className="bg-[var(--placeholder)] h-[88px] w-[88px] rounded-[50%] absolute top-[-44px]"></div>
                    <p className="text-[16px] text-center md:w-[566px] mt-[75px] mb-[46px] font-dmsans font-[400] tracking-[0.5%] leading-[20px] text-[#515151]">{item.text}</p>

                    <h5 className="text-[24px] font-[700] font-merriweather text-[#11142d] tracking-[0.5%] leading-[20px] mb-[8px]">{item.author}</h5>
                    <p className="text-[16px] font-dmsans font-[400] tracking-[0.5%] text-[#515151] ">{item.role}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.div`
    .swiper{
        width: 60%;
        position: unset;
        padding-top: 3rem;
        @media screen and (max-width:768px){
          width:90%;
          padding: 3rem 0 0;

          .swiper-button-prev, .swiper-button-next{
            display:none;
          }
        }
    }

    .swiper .swiper-slide{
        box-sizing:border-box;
        height: 312px;
    }
    .swiper-button-prev{
        color: var(--color-50);
        font-weight:bold ;
        left: 235px;
    }
    .swiper-button-next{
        color: var(--color-50);
        font-weight:bold ;
        right: 235px;
        
    }
    .swiper-pagination{
      position: absolute;
      bottom: 160px;
    }
    .swiper-pagination-bullet{
      background: var(--color-50);
    }
`
