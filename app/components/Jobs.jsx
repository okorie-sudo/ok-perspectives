import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { motion } from "motion/react";

const Jobs = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="jobs"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Recent Works
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My most recent Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-center max-w-2xl mt-5 mx-auto font-Ovo mb-12"
      >
        Here’s a collection of my projects, reflecting my growth as a full stack
        developer and my focus on building practical, functional solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-5 my-10 dark:text-black"
      >
        {workData &&
          workData.map((work, index) => (
            <div
              className="aspect-square bg-no-repeatbg-cover bg-center rounded-lg relative cursor-pointer group "
              key={index}
              style={{ backgroundImage: `url(${work.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-400 hover group-hover:bottom-7">
                <div className="">
                  <h2 className="font-semibold">{work.title}</h2>
                  <p className="text-sm text-gray-700">{work.description}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[-2px_-2px_0_#000] group-hover:bg-indigo-300 transition duration-400">
                    <a href="">
                      <FaLink className="w-5" />
                    </a>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-400">
                    <a href="">
                      <GrGithub className="w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-400 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        See more
        <Image
          src={theme ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </a>
    </motion.div>
  );
};

export default Jobs;
