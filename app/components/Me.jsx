import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Me = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="me"
      className="`w-full px-[12%] md:py-10 py:2 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-5xl mb-0 font-Ovo"
      >
        It's all about me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
        className="flex w-full flex-col lg:flex-row  gap-20 items-center justify-start my-20 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="me"
            className="w-full  rounded-3xl mx-auto mt-5 mb-5"
          />
        </motion.div>
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-10 max-w-2xl font-Ovo text-center"
          >
            I am a Full Stack Developer with 2 years of experience building
            scalable web applications. Skilled in React, Tailwind CSS, Node.js,
            and databases, I create seamless user experiences and efficient
            backends.
          </motion.p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList &&
              infoList.map((info, index) => (
                <motion.li
                  whileInView={{ scale: 1.05 }}
                  key={index}
                  className="border-[0.5px] border-gray-400 hover:bg-lightHover hover:shadow-[2px_2px_0_#000] dark:border-white dark:hover:shadow-[2px_2px_0_#fff] dark:hover:bg-darkHover/50  shadow-sm hover:-translate-y-3 duration-400  rounded-xl cursor-pointer p-6"
                >
                  <Image
                    className="w-7 mt-3"
                    src={theme ? info.iconDark : info.icon}
                    alt={info.title}
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/80 text-sm">
                    {info.description}
                  </p>
                </motion.li>
              ))}
          </ul>
          <h4 className="my-6 text-gray-700 dark:text-white/80 font-Ovo">
            Tools
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border cursor-pointer border-dotted border-gray-400 rounded-lg hover:-translate-x-2 duration-400 transition"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Me;
