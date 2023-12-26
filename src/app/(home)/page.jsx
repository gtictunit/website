"use client";

import * as React from "react";
import Image from "next/image";
import vision from "../../../public/assets/images/vision.png";
import mission from "../../../public/assets/images/target.png";
import participate from "../../../public/assets/images/location.png";
import welcome_img from "../../../public/assets/images/welcome.png";
import sunday from "../../../public/assets/images/SUNDAY SERVICE.jpg";
import thursday from "../../../public/assets/images/THURSDAY SERVICE.jpg";
import hodh from "../../../public/assets/images/Hour Of Divine Help.jpg";
import miracle_service from "../../../public/assets/images/Miracle and Communion Service.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <main className="">
      <section
        className="w-screen h-[95vh] relative bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/assets/images/heroo.png)",
        }}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]" />
        <div className="relative w-full h-full">
          <div className="w-full h-full container mx-auto flex flex-col items-center justify-center text-center text-white text-[40px] md:text-[72px] font-bold">
            <div className="font-josefin_sans text-[40px] md:text-[90px] drop-in">
              <h2>Welcome To</h2>
              <h2>Glory Tabernacle Ministry</h2>
            </div>
            <div className="text-base md:text-[22px] mt-[24px] md:mt-[48px] flex gap-[20px] font-raleway font-semibold drop-in-2">
              <span>SALVATION</span>| <span>SANCTIFICATION</span>|
              <span>SERVICE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vision">
        <div className="w-full container mx-auto flex justify-center my-10 p-6">
          <div className="relative w-full md:w-[80%] h-full bg-white rounded-[12px] md:rounded-[20px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] z-50 mt-[-100px] p-[20px] md:p-[50px]">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:divide-x">
              <div className="flex flex-row justify-start items-center gap-1 px-5">
                <div className="w-1/3">
                  <Image src={vision} className="w-[75px] h-[75px]" alt="" />
                </div>
                <div className="w-2/3">
                  <h6 className="text-black font-montserrat font-semibold text-[28px]">
                    Vision
                  </h6>
                  <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem nostrum earum, libero nihil delectus, officia minima
                    voluptatem sit
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-1 px-5">
                <div className="w-1/3">
                  <Image src={mission} className="w-[75px] h-[75px]" alt="" />
                </div>
                <div className="w-2/3">
                  <h6 className="text-black font-montserrat font-semibold text-[28px]">
                    Mission
                  </h6>
                  <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem nostrum earum, libero nihil delectus, officia minima
                    voluptatem sit
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-1 px-5">
                <div className="w-1/3">
                  <Image
                    src={participate}
                    className="w-[75px] h-[75px]"
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h6 className="text-black font-montserrat font-semibold text-[28px]">
                    Participate
                  </h6>
                  <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem nostrum earum, libero nihil delectus, officia minima
                    voluptatem sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-[50px] w-full md:w-[90%] p-[20px] md:p-[50px] bg-white flex justify-center">
        <div className="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-center md:gap-[50px]">
          <div className="mb-[20px] md:mb-0 relative" data-aos="zoom-in-up">
            <Image
              src={welcome_img}
              alt=""
              className="relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]"
            />
            <div className="bg-[rgba(0,0,0,0.25)] absolute top-0 left-0 w-full h-full z-[200] rounded-[20px]"></div>
          </div>
          <div className="welcome-text flex-1" data-aos="fade-left">
            <span className="font-corben font-medium text-black text-[21px] opacity-[0.875]">
              Welcome to
            </span>
            <h6 className="font-josefin_sans text-black font-bold text-[40px] md:text-[60px] mb-[18px]">
              Glory Tabernacle Ministry
            </h6>
            <p className="font-raleway text-[14px] text-[#9e9c9c] mb-[18px]">
              What a joy it is to introduce you to our church! You&apos;ll
              discover that our passion is to provide a place where people just
              like you can have a life-changing experience with God. At our
              doors are wide open to people from all backgrounds.
            </p>
          </div>
        </div>
      </section>

      <section className="services container mx-auto flex justify-center p-[20px]">
        <div className="py-[50px] flex flex-col items-center gap-8">
          <div className="services-title">
            <h2>Our Services</h2>
            <FaArrowTurnDown className="inherit" />
          </div>
          <div className="relative w-full">
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
    </main>
  );
}

// .swiper-slide {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 18px;
//   font-size: 22px;
//   font-weight: bold;
//   color: #fff;
// }

// .autoplay-progress {
//   position: absolute;
//   right: 16px;
//   bottom: 16px;
//   z-index: 10;
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: bold;
//   color: var(--swiper-theme-color);
// }

// .autoplay-progress svg {
//   --progress: 0;
//   position: absolute;
//   left: 0;
//   top: 0px;
//   z-index: 10;
//   width: 100%;
//   height: 100%;
//   stroke-width: 4px;
//   stroke: var(--swiper-theme-color);
//   fill: none;
//   stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
//   stroke-dasharray: 125.6;
//   transform: rotate(-90deg);
// }
