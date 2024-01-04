"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function SwiperCard() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=1"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=2"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=3"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=4"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=5"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=6"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=7"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=8"
            alt="Previous year photos"
            width={700}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/700/700?random=9"
            alt="Previous year photos"
            width={700}
            height={700}
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
