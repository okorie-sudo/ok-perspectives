import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Jobs = () => {
  return (
    <div id="jobs" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Porfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My most recent Projects</h2>
      <p className="text-center max-w-2xl mt-5 mx-auto font-Ovo mb-12">
        Here’s a collection of my projects, reflecting my growth as a full stack
        developer and my focus on building practical, functional solutions.
      </p>

      <div className="grid grid-cols-auto gap-5 my-10">
        {workData &&
          workData.map((work, index) => (
            <div
              className="aspect-square bg-no-repeatbg-cover bg-center rounded-lg relative cursor-pointer group "
              key={index}
              style={{ backgroundImage: `url(${work.bgImage})` }}
            >
              <div>
                <div className="">
                  <h2>{work.title}</h2>
                  <p>{work.description}</p>
                </div>
                <div>
                  <Image
                    src={assets.send_icon}
                    alt="send_icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Jobs;
