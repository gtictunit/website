import React from "react";
import Image from "next/image";
import { HeaderOverlay } from "../../../components";
import pioneer_associate_pastor from "../../../../public/assets/images/dr_chy.JPG";
import general_pastor from "../../../../public/assets/images/eldership/gp.jpg";
import assistant_pastor from "../../../../public/assets/images/eldership/ap.jpg";
import elder_uponi from "../../../../public/assets/images/eldership/elder_uponi.jpg";
import elder_adewumni from "../../../../public/assets/images/eldership/elder_adewumni.jpg";
import elder_agbokeye from "../../../../public/assets/images/eldership/elder_agbokeye.jpg";
import elder_alao from "../../../../public/assets/images/eldership/elder_alao.jpg";
import elder_oshafi from "../../../../public/assets/images/eldership/elder_oshafi.jpg";

const image =
  "rounded-[20px] h-[350px] md:h-[400px] object-cover mb-[5px] md:mb-[10px] object-top";
const name =
  "text-[21px] md:text-[24px] font-light text-[#088df9] font-montserrat mb-0 md:mb-[5px]";
const position =
  "text-[#0a3360] text-[14px] md:text-[18px] font-bold font-raleway";

const Eldership = () => {
  return (
    <>
      <HeaderOverlay>Pastors and Elders</HeaderOverlay>
      <div className="w-full container mx-auto flex justify-center">
        <div className="w-full py-[20px] md:py-[100px] px-[20px] md:px-[100px]">
          <div className="mb-[50px]">
            <h2 className="font-corben text-[24px] font-bold text-black/90 mb-4">
              Pastors
            </h2>
            <div className="grid md:grid-cols-4 gap-[32px]">
              <div className="relative">
                <Image
                  src={pioneer_associate_pastor}
                  alt=""
                  className={image}
                />
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
          <div className="mb-6">
            <h2 className="font-corben text-[24px] font-bold text-black/90 mb-4">
              Elders
            </h2>
            <div className="grid md:grid-cols-4 gap-[32px]">
              <div className="relative">
                <Image src={elder_uponi} alt="" className={image} />
                <p className={name}>Elder Joseph Uponi</p>
              </div>
              <div className="relative">
                <Image src={elder_adewumni} alt="" className={image} />
                <p className={name}>Elder Johnson Adewumi</p>
              </div>
              <div className="relative">
                <Image src={elder_agbokeye} alt="" className={image} />
                <p className={name}>Elder Samson Agbokeye</p>
              </div>
              <div className="relative">
                <Image src={elder_oshafi} alt="" className={image} />
                <p className={name}>Elder Daniel Oshafi</p>
              </div>
              <div className="relative">
                <Image src={elder_alao} alt="" className={image} />
                <p className={name}>Elder Yemi Alao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eldership;
