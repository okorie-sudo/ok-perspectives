import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Reach out today
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        I'm just one message away
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mt-5 mx-auto font-Ovo mb-12"
      >
        Reach out anytime—I’m committed to quick replies and making sure your
        questions get answered without delay.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, repeat: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            type="text"
            required
            placeholder="Your name..."
            name="name"
          />
          <motion.input
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            type="email"
            name="email"
            placeholder="Your email..."
          />
        </div>
        <motion.textarea
          whileFocus={{
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
          className="w-full p-4 dark:bg-darkHover/30 dark:border-white/90 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 resize-y"
          name="message"
          id=""
          rows={3}
          placeholder="Enter message..."
        ></motion.textarea>
        <motion.button
          transition={{ duration: 0.5, delay: 0.3, repeat: 0 }}
          whileHover={{ scale: 1.1 }}
          className="py-1 px-3 w-max flex cursor-pointer items-center justify-between gap-2 bg-black/80 text-white  mx-auto hover:bg-black duration-400 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Send
          <Image src={assets.right_arrow_white} alt="" className="w-full " />
        </motion.button>
        <p className="mt-4">sending...</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
