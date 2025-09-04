import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Let's work together
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Pick a Choose
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mt-5 mx-auto font-Ovo mb-12"
      >
        I deliver high-quality, full-stack web solutions with a strong focus on
        speed, reliability, and precision—helping you launch impactful products
        faster without compromising excellence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData &&
          serviceData.map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-sm px-8 py-5 hover:shadow-[2px_2px_0_#000]  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-400 transition dark:hover:bg-darkHover dark:hover:shadow-[2px_2px_0_#fff]"
            >
              <Image src={service.icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {service.description}
              </p>
              <a
                href={service.link}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Read More{" "}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
