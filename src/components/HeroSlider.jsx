import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styled from 'styled-components'

const HeroSlider = () => {
  return (
    <Wrapper>
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    </Wrapper>
  )
}

export default HeroSlider

const Wrapper = styled.div`
    .swiper{
        width: 100%;
        height: 100%;
        padding: 2rem;
    }

    .swiper-slide{
        background-color:var(--placeholder) ;
        height:100% ;
        width: 70% !important ;
    }
`