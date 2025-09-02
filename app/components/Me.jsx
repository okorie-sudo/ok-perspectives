import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Me = () => {
  return (
    <div id="me" className="`w-full px-[12%] md:py-10 py:2 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">It's all about me</h2>

      <div className="flex w-full flex-col lg:flex-row gap-20 items-center my-20 ">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="me"
            className="w-full  rounded-3xl mx-auto mt-10 mb-5"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a Full Stack Developer with 2 years of experience building
            scalable web applications. Skilled in React, Tailwind CSS, Node.js,
            and databases, I create seamless user experiences and efficient
            backends. Passionate about problem-solving, clean code, and
            continuous learning, I deliver impactful, production-ready digital
            solutions.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList &&
              infoList.map((info, index) => (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 hover:bg-lightHover hover:shadow-boxShadowDark shadow-sm hover:-translate-y-3 duration-400  rounded-xl cursor-pointer p-6"
                >
                  <Image
                    className="w-7 mt-3"
                    src={info.icon}
                    alt={info.title}
                  />
                  <h3 className="my-4 font-semibold text-gray-700">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </li>
              ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border cursor-pointer border-dotted border-gray-400 rounded-lg hover:-translate-x-2 duration-400 transition"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Me;
