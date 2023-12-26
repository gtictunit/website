import React from "react";
import Image from "next/image";
import { HeaderOverlay } from "../../../components";
import pioneer_associate_pastor from "../../../../public/assets/images/dr_chy.JPG";
import general_pastor from "../../../../public/assets/images/eldership/gp.jpg";
import assistant_pastor from "../../../../public/assets/images/eldership/ap.jpg";

const image =
  "rounded-[20px] h-[350px] md:h-[500px] object-cover mb-[5px] md:mb-[10px]";
const name =
  "text-[21px] md:text-[32px] font-light text-[#088df9] font-montserrat mb-0 md:mb-[5px]";
const position =
  "text-[#0a3360] text-[14px] md:text-[18px] font-bold font-raleway";

const Eldership = () => {
  return (
    <>
      <HeaderOverlay>Pastors and Elders</HeaderOverlay>
      <div className="w-full container mx-auto flex justify-center">
        <div className="w-full py-[20px] md:py-[100px] px-[20px] md:px-0">
          <h2 className="font-corben text-[24px] font-bold text-black/90 mb-4">
            Pastors
          </h2>
          <div className="grid md:grid-cols-4 gap-[32px]">
            <div className="relative">
              <Image src={pioneer_associate_pastor} alt="" className={image} />
              <p className={name}>Dr. Chy Obed</p>
              <p className={position}>Pioneer Associate Pastor</p>
            </div>
            <div className="relative">
              <Image src={general_pastor} alt="" className={image} />
              <p className={name}>Prof. G. E. Akinbola</p>
              <p className={position}>General Pastor</p>
            </div>
            <div className="relative">
              <Image src={assistant_pastor} alt="" className={image} />
              <p className={name}>Pst. Joseph Emmanuel</p>
              <p className={position}>Assistant Pastor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eldership;
