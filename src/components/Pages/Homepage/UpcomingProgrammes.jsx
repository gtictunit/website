import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/images/gt_logo.png";

export const UpcomingProgrammes = () => {
  return (
    <section className="upcoming-events">
      <div className="text-[#3e4555] font-medium py-5">
        <div className="container mx-auto md:px-[100px] px-[20px]">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 text-center font-montserrat">
              <h3
                className="my-3 text-[28px] md:text-[40px] font-josefin_sans"
                data-aos="fade-down">
                Upcoming Programs
              </h3>
              <h6 className="text-[#8d97ad] font-normal" data-aos="fade-up">
                Keep to date with the latest and upcoming programs in Glory
                Tabernacle Ministry
              </h6>
            </div>
          </div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              <a
                className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                data-aos="zoom-in-up">
                <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover"
                    src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                    alt="Image Description"
                  />
                </div>

                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                          src={logo}
                          alt="Image Description"
                        />
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
                      Crossover / New Year Service
                    </h3>
                    <p className="mt-2 text-white/[.8] font-raleway">
                      December 31, 2023
                    </p>
                  </div>
                </div>
              </a>

              <a
                className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                data-aos="zoom-in-up">
                <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover"
                    src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="Image Description"
                  />
                </div>

                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                          src={logo}
                          alt="Image Description"
                        />
                      </div>
                      {/* <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">Gloria</h4>
                        <p className="text-xs text-white/[.8]">May 30, 2021</p>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8] font-josefin_sans">
                      Congregational fasting and prayer
                    </h3>
                    <p className="mt-2 text-white/[.8] font-raleway">
                      6th January - 26th January, 2024.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
