import React from "react";
import Image from "next/image";
import welcome_img from "../../../../public/assets/images/welcome.png";

export const WelcomeCTA = () => {
  return (
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
            like you can have a life-changing experience with God. At our doors
            are wide open to people from all backgrounds.
          </p>
        </div>
      </div>
    </section>
  );
};
