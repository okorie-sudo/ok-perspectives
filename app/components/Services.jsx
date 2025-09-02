import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Let's work together</h4>
      <h2 className="text-center text-5xl font-Ovo">Pick a Choose</h2>
      <p className="text-center max-w-2xl mt-5 mx-auto font-Ovo mb-12">
        I deliver high-quality, full-stack web solutions with a strong focus on
        speed, reliability, and precision—helping you launch impactful products
        faster without compromising excellence.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData &&
          serviceData.map((service, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-sm px-8 py-5 hover:shadow-boxShadowDark cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-400 transition"
            >
              <Image src={service.icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-5">
                {service.description}
              </p>
              <a
                href={service.link}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Read More{" "}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
