import React from "react";
import { FaPlay } from "react-icons/fa";

export const LiveBroadcast = () => {
  return (
    <section className="live-video-section h-full md:h-[80vh] relative my-[50px] md:my-[75px]">
      {/* <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent absolute w-full h-full top-0 left-0"></div> */}
      <div className="container relative mx-auto w-full h-full flex justify-end items-center">
        <div className="live-description w-full md:w-1/2 justify-end">
          <span className="font-corben mb-4">VIEW LIVE BROADCAST </span>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="play-icon step w-full md:w-1/4">
              <FaPlay className="z-50" />
              <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>
            </div>
            <h6 className="w-full md:w-3/4 font-josefin_sans">
              Stream Our Services Live Online Now!
            </h6>
          </div>

          <p className="font-raleway hidden md:block">
            What a joy it is to introduce you to our church! You&apos;ll
            discover that our passion is to provide a place where people.
          </p>

          <button role="link" className="join-us-live font-montserrat">
            <a
              href="https://www.youtube.com/@GTMinistryIb/streams"
              target="_blank">
              Join us live
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
