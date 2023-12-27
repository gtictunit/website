import React from "react";

export const HeaderOverlay = ({ children }) => {
  return (
    <>
      <div className={"relative"}>
        <div
          className={
            "relative bg-no-repeat bg-center bg-cover bg-header-overlay"
          }>
          <div
            className={
              "bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 w-full h-full"
            }></div>
          <p
            className={`relative py-[50px] md:py-[100px] text-center items-center text-[30px] md:text-[60px] font-bold font-corben text-white drop-in`}>
            {children}
          </p>
        </div>
      </div>
    </>
  );
};
