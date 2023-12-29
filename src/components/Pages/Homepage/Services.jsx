"use client";

import React from "react";
import Image from "next/image";
import sunday from "../../../../public/assets/images/SUNDAY SERVICE.jpg";
import thursday from "../../../../public/assets/images/THURSDAY SERVICE.jpg";
import hodh from "../../../../public/assets/images/Hour Of Divine Help.jpg";
import miracle_service from "../../../../public/assets/images/Miracle and Communion Service.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";

export const Services = () => {
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section
      className="services container mx-auto flex justify-center md:p-[20px]"
      data-aos="fade-down">
      <div className="py-[20px] md:py-[50px] flex flex-col items-center gap-8">
        <div className="services-title flex items-center gap-[20px]">
          <h2 className="font-bold text-[40px] md:text-[80px] font-josefin_sans flex items-center gap-[10px] md:gap-[20px]">
            Our Services
          </h2>
          <FaArrowTurnDown
            className="text-[30px] md:text-[80px]"
            color="blue"
          />
        </div>
        <div className="relative w-full" data-aos="fade-up-left">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination, Navigation]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            onAutoplayTimeLeft={onAutoplayTimeLeft}>
            <SwiperSlide className="">
              <Link
                href="https://www.youtube.com/@GTMinistryIb/streams"
                target="_blank">
                <Image src={sunday} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link
                href="https://www.youtube.com/playlist?list=PLYaPNT9OHFY2e5VG4B1CMrqvOvr261PDs"
                target="_blank">
                <Image src={miracle_service} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link
                href="https://www.youtube.com/playlist?list=PLYaPNT9OHFY0ccDvVvGTvbzY8fGn5vdTJ"
                target="_blank">
                <Image src={thursday} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link
                href="https://www.youtube.com/playlist?list=PLYaPNT9OHFY30sMhrduq5kUV-yE7Sbyk2"
                target="_blank">
                <Image src={hodh} alt="" />
              </Link>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
