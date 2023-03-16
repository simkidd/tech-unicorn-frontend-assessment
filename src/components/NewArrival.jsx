import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "./ProductCard";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

const NewArrival = () => {
  return (
    <Wrapper className="w-full py-[8rem] pb-[12rem]">
      <div className="w-full container flex justify-between items-center mx-auto px-8 pb-5">
        <h2 className="text-5xl font-[700] ">New Arrival</h2>
        <Link className="text-base text-[var(--color-50)]">See All</Link>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={true}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default NewArrival;

const Wrapper = styled.div`
  .swiper {
    padding: 2rem 3.5rem;
    width: 100%;
    height: 100%;
  }
  .swiper .swiper-slide {
    box-sizing: border-box;
    height: 312px;
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev {
    color: var(--color-50);
    font-weight: bold;
  }
  .swiper-button-next {
    color: var(--color-50);
    font-weight: bold;
  }
`;
