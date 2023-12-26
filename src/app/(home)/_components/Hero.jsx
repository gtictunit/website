import React from "react";

export const Hero = () => {
  return (
    <section
      className="w-screen h-screen relative bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/assets/images/heroo.png)",
      }}>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]" />
      <div className="relative">
        <div className="container mx-auto flex items-center justify-center text-center py-16 lg:py-32 text-white text-[40px] md:text-[72px] font-bold">
          <div className="">
            <h2>Welcome To</h2>
            <h2>Glory Tabernacle Ministry</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
