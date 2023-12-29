import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "../../../public/assets/images/gt_logo.png";

export const Footer = () => {
  return (
    <>
      <footer className={` bg-gt_purple w-full`}>
        <section className="container mx-auto flex items-center justify-center md:justify-between p-4 border-solid border-white border-b">
          <div className="me-5 hidden md:block text-white font-montserrat">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex items-center text-gt_yellow py-4">
            <Link
              href="https://www.facebook.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.twitter.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.youtube.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaYoutube />
            </Link>
            <Link
              href="https://www.instagram.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaInstagram />
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto text-start mt-5 md:pt-4 md:pb-10 px-[20px]">
            <div className="grid-1 grid grid-cols-2 md:grid-cols-4 justify-between gap-6 mt-3">
              <div className="mx-auto mb-4">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={logo}
                    alt="Logo"
                    height="auto"
                    className="w-[50px] h-[50px]"
                  />
                  <h3 className="uppercase font-bold font-ubuntu text-white text-[13px] md:text-base">
                    Glory Tabernacle Ministry
                  </h3>
                </div>

                <p className="font-montserrat font-light text-white text-[13px] md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur libero quas fuga at. Earum iusto ipsa in sed enim
                  porro dolorum id labore, ut nisi dignissimos eos maiores
                  quisquam facilis.
                </p>
              </div>

              <div className="mb-4">
                <h6 className="uppercase font-bold mb-2 text-white font-josefin_sans">
                  Human Teams
                </h6>
                <div className="text-white/80 font-montserrat flex flex-col gap-3 text-[13px] md:text-base">
                  <p>
                    <a href="#!" className="text-reset">
                      Glory Men
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Glory Women
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Blest
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Glory Youth
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Glory Children
                    </a>
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="uppercase font-bold mb-2 text-white font-josefin_sans">
                  Ministries
                </h6>
                <div className="text-white/80 font-montserrat flex flex-col gap-3 text-[13px] md:text-base">
                  <p>
                    <a href="#!" className="text-reset">
                      ADMI
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      BGS
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Missions
                    </a>
                  </p>
                </div>
              </div>

              <ul className="mx-auto md:mb-0 mb-4">
                <h6 className="uppercase font-bold mb-2 text-white font-josefin_sans">
                  Contact
                </h6>

                <li className="mb-3">
                  <a
                    href="mailto:gtictunit@gmail.com"
                    className="flex items-center">
                    <div className="me-3 text-gt_yellow">
                      <FaLocationDot />
                    </div>
                    <span className="text-[13px] md:text-base text-white/80 font-montserrat">
                      Bethel land, Glory Tabernacle Ministry, Oju-Irin, Bodija,
                      Ibadan
                    </span>
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="mailto:gtictunit@gmail.com"
                    className="flex items-center">
                    <div className="me-3 text-gt_yellow">
                      <FaEnvelope />
                    </div>
                    <span className="text-[13px] md:text-base text-white/80 font-montserrat">
                      Gtictunit@gmail.com
                    </span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel:123456" className="flex items-center">
                    <div className="me-3 text-gt_yellow">
                      <FaPhone />
                    </div>
                    <span className="text-[13px] md:text-base text-white/80 font-montserrat">
                      + 01 234 567 88
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 text-white font-montserrat"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright -
          <a className="text-reset font-bold px-1" href="/">
            Glory Tabernacle Ministry
          </a>
        </div>
      </footer>
    </>
  );
};
