"use client";

import React from "react";
import { HeaderOverlay } from "../../../components";
import Image from "next/image";
import hour_of_divine_help from "../../../../public/assets/images/Hour Of Divine Help.jpg";
import miracle_service from "../../../../public/assets/images/Miracle and Communion Service.jpg";
import sunday_service from "../../../../public/assets/images/SUNDAY SERVICE.jpg";
import thursday_service from "../../../../public/assets/images/THURSDAY SERVICE.jpg";
import bible_study from "../../../../public/assets/images/SUNDAY SERVICE.jpg";
import good_morning_Jesus from "../../../../public/assets/images/gmj.jpeg";

const programmes = [
  {
    title: "Miracle and Communion Service",
    time: "Every first sunday of the month",
    img: miracle_service,
  },
  {
    title: "Sunday Service",
    time: "Sunday, 9am - 11:30am",
    img: sunday_service,
  },
  {
    title: "Hour of Divine Help",
    time: "Sunday, 8am - 9am",
    img: hour_of_divine_help,
  },
  {
    title: "HolyGhost Encounter",
    time: "Thursdays, 4:30pm - 6pm",
    img: thursday_service,
  },
  {
    title: "Good Morning Jesus",
    time: "Mondays - Fridays, 6am - 7am",
    img: good_morning_Jesus,
  },
  { title: "Bible Study", time: "Tuesdays, 5:30pm - 7pm", img: bible_study },
];

const WeeklyProgrammes = () => {
  return (
    <>
      <HeaderOverlay>Weekly Programmes</HeaderOverlay>
      <div className="container mx-auto w-full px-[20px] py-[32px] md:px-[100px] md:py-[75px]">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
          {programmes.map((programme, i) => (
            <a
              key={i}
              className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              data-aos="zoom-in-up">
              <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover"
                  src={programme.img}
                  alt="Image Description"
                />
              </div>

              <div className="absolute top-0 inset-x-0 z-10">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <Image
                      className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                      src={logo}
                      alt="Image Description"
                    /> */}
                    </div>
                    {/* <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">Gloria</h4>
                        <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                      </div> */}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8] font-josefin_sans">
                    {programme.title}
                  </h3>
                  <p className="mt-2 text-white/[.8] font-raleway">
                    {programme.time}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeeklyProgrammes;
