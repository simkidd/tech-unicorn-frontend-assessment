import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import NewArrivalCard from "./NewArrivalCard";

import "swiper/css";
import "swiper/css/navigation";

const NewArrival = ({products}) => {

  return (
    <Wrapper className="w-full md:pb-[200px] pb-[100px] ">
      <div className="w-full flex justify-between items-center md:px-[104px] px-[20px] pb-5">
        <h2 className="md:text-[48px] text-[28px] font-[700] ">New Arrival</h2>
        <Link to='shop' className="md:text-[24px] text-[16px] font-merriweather tracking-[0.5%] text-[var(--color-50)]">See All</Link>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={true}
          breakpoints={
            {
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }
          }
        >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <NewArrivalCard product={product} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default NewArrival;

const Wrapper = styled.div`
  .swiper {
    padding: 20px 3.5rem;
    width: 100%;
    height: 100%;
    @media screen and (max-width:768px) {
      padding-left: 20px;
      padding-right: 20px;

    }
  }
  .swiper .swiper-slide {
    box-sizing: border-box;
    /* height: 312px; */
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
