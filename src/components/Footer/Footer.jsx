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
        <section className="container mx-auto flex justify-center md:justify-between p-4 border-solid border-white border-b">
          <div className="me-5 hidden md:block text-white">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex items-center text-white">
            <Link
              href="https://www.facebook.com/GTMinistryIb/"
              target="_blank"
              className="me-4 text-reset">
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.twitter.com/GTMinistryIb/"
              target="_blank"
              className="me-4 text-reset">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.youtube.com/GTMinistryIb/"
              target="_blank"
              className="me-4 text-reset">
              <FaYoutube />
            </Link>
            <Link
              href="https://www.instagram.com/GTMinistryIb/"
              target="_blank"
              className="me-4 text-reset">
              <FaInstagram />
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto text-start mt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <div className="text-uppercase fw-bold mb-1 flex align-items-center gap-6">
                  <Image src={logo} alt="Logo" height="auto" className="" />
                </div>
                <h3 className="text-uppercase fw-bold mb-4">
                  Glory Tabernacle Ministry
                </h3>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Teams</h6>
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

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Menu links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Church history
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    ADMI
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Missions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <ul className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                <li className="">
                  <a
                    href="mailto:gtictunit@gmail.com"
                    className="no-hover d-flex align-items-start">
                    <div className="me-3">
                      <FaLocationDot />
                    </div>
                    <span>
                      Glory Tabernacle Ministry, Oju-Irin, Bodija, Ibadan
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:gtictunit@gmail.com"
                    className="no-hover d-flex align-items-start">
                    <div className="me-3">
                      <FaEnvelope />
                    </div>
                    <span>gtictunit@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:123456"
                    className="no-hover d-flex align-items-start">
                    <div className="me-3">
                      <FaPhone />
                    </div>
                    <span>+ 01 234 567 88</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright -
          <a className="text-reset fw-bold px-1" href="/">
            Glory Tabernacle Ministry
          </a>
        </div>
      </footer>
    </>
  );
};
