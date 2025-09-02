import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-20">
        <Image src={assets.profile_img} alt="" className="rounded-ful w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hello! Friday Okorie here{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        I'm a fullstack web developer.
      </h1>
      <p>
        I create modern and responsive websites for individuals and businesses
        that help them establish a strong online presence and achieve their
        goals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Download Cv
          <Image
            src={assets.download_icon}
            alt=""
            className="rounded-full w-4"
          />
        </a>
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white"
        >
          Get in touch
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
