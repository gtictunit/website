import React from "react";
import Image from "next/image";
import vision from "../../../../public/assets/images/vision.png";
import mission from "../../../../public/assets/images/target.png";
import participate from "../../../../public/assets/images/location.png";

export const Vision = () => {
  return (
    <section className="vision">
      <div className="w-full container mx-auto flex justify-center my-10 p-6">
        <div className="relative w-full md:w-[80%] h-full bg-white rounded-[12px] md:rounded-[20px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] z-50 md:mt-[-100px] p-[20px] md:p-[50px] hidden md:block">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:divide-x">
            <div className="flex flex-row justify-start items-center gap-1 px-5">
              <div className="w-1/3">
                <Image
                  src={vision}
                  className="w-[40px] h-[40px] md:w-[75px] md:h-[75px]"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <h6 className="text-black font-montserrat font-semibold text-[28px]">
                  Vision
                </h6>
                <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                  That every member will be a living model of genuine salvation,
                  sanctification and service, to God&apos;s glory.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-1 px-3 md:px-5">
              <div className="w-1/3">
                <Image
                  src={mission}
                  className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <h6 className="text-black font-montserrat font-semibold text-[28px]">
                  Motto
                </h6>
                <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                  Jesus gave Himself for me, that He might redeem me from all
                  iniquity and purify me unto Himself a peculiar child, zealous
                  of good works
                </p>
                <p className="font-bold">Titus 2: 14</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-1 px-5">
              <div className="w-1/3">
                <Image
                  src={participate}
                  className="w-[40px] h-[40px] md:w-[75px] md:h-[75px]"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <h6 className="text-black font-montserrat font-semibold text-[28px]">
                  Participate
                </h6>
                <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                  Follow our services online or visit us physically.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div
            className="relative w-full bg-white rounded-[12px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] z-50 p-[20px] block md:hidden"
            data-aos="fade-up">
            <div className="flex flex-row justify-start items-center gap-1 px-3 md:px-5">
              <div className="w-1/3">
                <Image
                  src={vision}
                  className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <h6 className="text-black font-montserrat font-semibold text-[28px]">
                  Vision
                </h6>
                <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                  That every member will be a living model of genuine salvation,
                  sanctification and service, to God&apos;s glory.
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full bg-white rounded-[12px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] z-50 p-[20px] block md:hidden"
            data-aos="fade-up">
            <div className="flex flex-row justify-start items-center gap-1 px-3 md:px-5">
              <div className="w-1/3">
                <Image
                  src={mission}
                  className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <h6 className="text-black font-montserrat font-semibold text-[28px]">
                  Motto
                </h6>
                <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                  Jesus gave Himself for me, that He might redeem me from all
                  iniquity and purify me unto Himself a peculiar child, zealous
                  of good works
                </p>
                <p className="font-bold">Titus 2: 14</p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full bg-white rounded-[12px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] z-50 p-[20px] block md:hidden"
            data-aos="fade-up">
            <div className="flex flex-row justify-start items-center gap-1 px-3 md:px-5">
              <div className="w-1/3">
                <Image
                  src={participate}
                  className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <h6 className="text-black font-montserrat font-semibold text-[28px]">
                  Participate
                </h6>
                <p className="text-[#635353] text-[14px] font-raleway opacity-[0.875]">
                  Follow our services online or visit us physically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
