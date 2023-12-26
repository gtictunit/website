"use client";

import React from "react";
import logo from "../../../public/assets/images/gt_logo.png";
import styles from "./navbar.module.css";
import { HiChevronDown } from "react-icons/hi";
import { Twirl as Hamburger } from "hamburger-react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = React.useState(false);

  return (
    <nav className={"w-full bg-gt_purple  shadow-main"}>
      <div className="container mx-auto w-full flex justify-between items-center py-[10px] px-4 md:px-[30px]">
        <Link href={"/"} className={`flex items-center gap-2 no-underline`}>
          <Image
            src={logo}
            alt="Glory Tabernacle Ministry Logo"
            className={"w-[30px] md:w-[50px] h-full"}
          />
          <p className="font-bold text-[14px] md:text-[20px] flex items-center text-white font-[] hover:text-white/85">
            Glory Tabernacle Ministry
          </p>
        </Link>

        <div className="" id="">
          <ul
            className={`items-center list-none m-0 gap-1 font-montserrat font-semibold text-white hidden md:flex`}>
            <li>
              <Link
                href="/"
                className={`${styles.nav_link} ${
                  pathname === "/" ? styles.active : ""
                }`}>
                Home
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="#"
                className={`${styles.nav_link} flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat`}>
                <span className="mx-1">About</span>
                <HiChevronDown />
              </Link>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div className="px-[1px] py-2 bg-white shadow-lg rounded-[8px] text-black w-[250px]">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/about/church-history"
                      className="px-4 py-2 hover:bg-gt_purple hover:text-white">
                      Church History
                    </Link>
                    <Link
                      href="/about/board-of-trustees"
                      className="px-4 py-2 hover:bg-gt_purple hover:text-white">
                      Board of Trustees
                    </Link>
                    <Link
                      href="/programmes/weekly-programmes"
                      className="px-4 py-2 hover:bg-gt_purple hover:text-white">
                      Eldership
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="#" className={styles.nav_link}>
                Resources
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="/programmes"
                className={`${styles.nav_link} flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat`}>
                <span className="mx-1">Programmes</span>
                <HiChevronDown />
              </Link>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div className="px-[1px] py-2 bg-white shadow-lg rounded-[8px] text-black w-[250px]">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/church-calendar"
                      className="px-4 py-2 hover:bg-gt_purple hover:text-white">
                      Church Calendar
                    </Link>
                    <Link
                      href="/weekly-programmes"
                      className="px-4 py-2 hover:bg-gt_purple hover:text-white">
                      Weekly Programmes
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/missions" className={styles.nav_link}>
                <span className="mx-1">Missions</span>
                <HiChevronDown />
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.nav_link}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="white"
            label="Show menu"
            rounded
            size={20}
          />
        </div>
        <div
          className={`absolute top-0 left-0 bg-gt_purple w-full rounded-br-[15px] rounded-bl-[15px] px-[20px] transition-all duration-500 ${
            isOpen ? "translate-y-[0px]" : "-translate-y-[500px]"
          }`}>
          <div className="flex justify-between items-center mb-[20px]">
            <Image
              src={logo}
              alt="Glory Tabernacle Ministry Logo"
              className={"w-[35px] md:w-[50px] h-full"}
            />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="white"
              label="Show menu"
              rounded
              size={20}
            />{" "}
          </div>
          <ul className="flex flex-col gap-4 py-4 items-start border-b border-[yellow] border-solid text-white">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>{" "}
            <li>
              <Link href={"/"}>Resources</Link>
            </li>{" "}
            <li>
              <Link href={"/"}>Programmes</Link>
            </li>{" "}
            <li>
              <Link href={"/"}>Missions</Link>
            </li>{" "}
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
          <div className="flex items-center text-[yellow] py-4">
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
        </div>
      </div>
    </nav>
  );
};
