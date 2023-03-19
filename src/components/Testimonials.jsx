import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { TestimonialData } from "../data/TestimonialData";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <Wrapper className="w-full h-full py-[4rem] pb-[5rem]">
      <div className="flex flex-col items-center gap-12 relative">
        <h2 className="font-[700] md:text-[48px] text-[38px]">What Our Customer Says</h2>
        <div className="container w-full flex justify-center items-center">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={true}
            loop={true}
            
            className='w-full'
          >
            {TestimonialData.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="bg-[var(--color-10)] flex flex-col relative rounded-[8px] md:p-[5rem] px-[1.2rem] pt-16 pb-8 items-center justify-center ">
                    <div className="bg-[var(--placeholder)] h-[70px] w-[70px] rounded-[50%] absolute top-[-2rem]"></div>
                    <p className="text-[16px] text-center pb-8 ">{item.text}</p>

                    <h5 className="text-[24px] font-bold mb-1">{item.author}</h5>
                    <p className="text-[16px]">{item.role}</p>
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
        padding: 2rem 0 8rem;
        width: 60%;
        position: unset ;
        @media screen and (max-width:768px){
          width:90%;

          .swiper-button-prev, .swiper-button-next{
            display:none;
          }
        }
    }

    .swiper .swiper-slide{
        box-sizing:border-box ;
        height: 312px;
    }
    .swiper-button-prev{
        color: var(--color-50);
        font-weight:bold ;
        left: 17%;
    }
    .swiper-button-next{
        color: var(--color-50);
        font-weight:bold ;
        right:17%;
        
    }
`
