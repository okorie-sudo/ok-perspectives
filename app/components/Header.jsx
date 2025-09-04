import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { FaDownload } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Header = ({ theme }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto mb-20 h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          repeat: false,
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        className="mt-30"
      >
        <div className="w-40 h-40 rounded-full my-2">
          <Image
            src={assets.profile_img}
            alt=""
            className="h-full rounded-full w-full"
          />
        </div>
      </motion.div>
      <motion.h3
        initial={{ y: -20, scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          repeat: false,
          duration: 1,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hello! Friday Okorie here
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -20, scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          repeat: false,
          duration: 1,
          delay: 0.6,
          type: "spring",
          stiffness: 50,
        }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        I'm a fullstack web developer.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
          repeat: false,
        }}
      >
        I create modern and responsive websites for individuals and businesses
        that help them establish a strong online presence and achieve their
        goals.
      </motion.p>

      <div className="flex flex-col sm:flex-row  md:items-baseline justify-center gap-4 mt-4">
        <motion.a
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.7,
            repeat: false,
          }}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white"
          href="#contact"
        >
          Reach out
          <FaArrowRight />
        </motion.a>
        <motion.a
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.8,
            repeat: false,
          }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Download Cv
          <FaDownload />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
