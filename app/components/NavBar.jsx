import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    menuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-2 lg:px-8 xl:px-[8%] py-2 items-center  flex justify-between z-50 ${
          scrolled ? "bg-white opacity-90 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="">
          <Image
            alt=""
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex bg-white shadow-sm bg-opacity-50  items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            scrolled ? "" : "bg-white shadow-sm opacity-90"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#me">
              Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#jobs">
              Jobs
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Keep in touch
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="cursor-pointer p-2 bg-white bg-opacity-50 shadow-sm rounded-full">
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500  ml-4"
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>
          <button
            onClick={openMenu}
            className="block md:hidden ml-3 cursor-pointer"
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
        {/* Small display navigation here */}
        <ul
          ref={menuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute bottom-[50%] right-6 hover:rotate-180 transition duration-1000 ease-linear cursor-pointer ">
            <Image
              onClick={closeMenu}
              src={assets.close_black}
              alt=""
              className="w-5"
            />
          </div>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#me">
              Me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#work">
              Jobs
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#contact">
              Keep in touch
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
