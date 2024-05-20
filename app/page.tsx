"use client";

import { ModeToggle } from "@/components/ModeToggle";
import React from "react";
import Main from "./Main";
import Hero from "./Designs/Hero";
import { motion } from "framer-motion";
import WhyChooseUs from "./Designs/WhyChooseUs";
import NewsRobot from "./Designs/NewsRobot";
import { DataTableDemo } from "./Designs/NewsLetter";
import Payment from "./Designs/Payment";
import { Benefits } from "./Designs/Benefits";
import Support from "./Designs/Support";

const Page = () => {
  return (
    <>
      <div className=" fixed z-50  right-0 bottom-0 m-6 p-3">
        <ModeToggle />
      </div>
    <div className=" flex flex-col gap-[10rem]">
    <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className=" w-full mx-auto max-w-[95%]">
          <Hero />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className=" dark:bg-slate-950 bg-slate-200">
          <WhyChooseUs />
        </div>
      </motion.div>

      <Main />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className="bg dark:bg-zinc-900 flex-center flex-col space-y-8 p-5 w-full min-h-screen mx-auto ">
          <DataTableDemo />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -700 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className="bg  flex-center flex-col space-y-8 p-5 w-full min-h-screen mx-auto ">
          <Payment />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className="bg  flex-center flex-col space-y-8 p-5 w-full min-h-screen mx-auto ">
          <Benefits />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className="  max-w-[95%] pt-10 w-full mx-auto">
          <Support />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
      >
        <div className="  max-w-[95%] pt-10 w-full mx-auto">
          <NewsRobot />
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Page;
