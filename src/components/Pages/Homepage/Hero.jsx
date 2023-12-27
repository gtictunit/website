import React from "react";

export const Hero = () => {
  return (
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
          <div className="text-[12px] md:text-[22px] mt-[24px] md:mt-[48px] flex gap-[20px] font-raleway font-semibold drop-in-2">
            <span>SALVATION</span>| <span>SANCTIFICATION</span>|
            <span className="">SERVICE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
