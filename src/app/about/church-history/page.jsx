import React from "react";
import Image from "next/image";
import { HeaderOverlay } from "../../../components";
import pioneerPastor from "../../../../public/assets/images/dr_obed.JPG";
import mummyChy from "../../../../public/assets/images/dr_chy.JPG";
import pioneerPastorAndMummyChy from "../../../../public/assets/images/combined.JPG";

const ChurchHistory = () => {
  return (
    <>
      <HeaderOverlay>In the beginning...</HeaderOverlay>
      <div
        class={`w-full container mx-auto py-5 md:py-[100px] flex flex-col md:flex-row`}>
        <div class="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-2">
          <div class="flex gap-1">
            <div
              class={`card px-[2px] rounded-[20px] text-white border-none h-[400px] w-[190px] md:mr-[25px] p-0 border-0  mt-[100px]`}>
              <Image
                src={pioneerPastor}
                width="100%"
                class={`object-cover h-[400px] rounded-[20px]`}
                alt=""
                data-aos="fade-up"
                data-aos-offset="-100"
                data-aos-delay="120"
                data-aos-duration="7500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </div>
            <div
              class={`card px-[2px] rounded-[20px] text-white border-none h-[400px] w-[190px] md:mr-[25px] p-0 border-0  mt-[55px]`}>
              <Image
                src={pioneerPastorAndMummyChy}
                class={`object-cover h-[400px] rounded-[20px]`}
                alt=""
                data-aos="fade-up"
                data-aos-offset="-55"
                data-aos-delay="60"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </div>
            <div
              class={`card px-[2px] rounded-[20px] text-white border-none h-[400px] w-[190px] md:mr-[25px] p-0 border-0  mt-[15px]`}>
              <Image
                src={mummyChy}
                class={`object-cover h-[400px] rounded-[20px]`}
                alt=""
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </div>
          </div>
        </div>

        <div
          class={`w-full md:w-1/2 mt-4 md:mt-0 px-5 md:px-[75px] text-black`}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center">
          <h1 className={"mt-[15px] mb-[20px] font-josefin_sans font-bold"}>
            Uniting people with purpose
          </h1>
          <p className={"font-raleway leading-[30px]"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            accusamus, quae tempore molestias autem cupiditate corrupti illum
            laudantium, ipsum laboriosam odio, ipsam ratione quisquam commodi! A
            officiis voluptates ut sapiente!
          </p>
          <p className={"font-raleway leading-[30px]"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            accusamus, quae tempore molestias autem cupiditate corrupti illum
            laudantium, ipsum laboriosam odio, ipsam ratione quisquam commodi! A
            officiis voluptates ut sapiente!
          </p>
          <button type="button" class="btn-primary rounded-3 custom-button">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default ChurchHistory;
