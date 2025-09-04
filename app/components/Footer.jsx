import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = ({ theme }) => {
  return (
    <div className="mt-20 font-Ovo">
      <div className="text-center">
        <Image
          src={theme ? assets.logo_dark : assets.logo}
          alt=""
          className="w-26 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={theme ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          outis8945@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-12 py-6">
        <p>&copy;2024 Ok Perspectives Inc. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="hover:scale-150 transition duration-400">
            <a target="_blank" href="https://github.com/okorie-ok">
              <FaGithub />
            </a>
          </li>
          <li className="hover:scale-150 transition duration-400">
            <a target="_blank" href="https://linkedin.com/okorie-ok">
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:scale-150 transition duration-400">
            <a target="_blank" href="https://instagram.com/okorie-ok">
              <GrInstagram />
            </a>
          </li>
          <li className="hover:scale-150 transition duration-400">
            <a target="_blank" href="https://x.com/okorie-ok">
              <FaSquareXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
