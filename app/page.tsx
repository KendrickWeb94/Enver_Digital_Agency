"use client";

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
import Header from "./Designs/Header";
import Footer from "./Designs/Footer";
import Contact from "./Designs/Contact";
const Page = () => {
  return (
    <div className=" space-y16">
      <div className="z-50">
        <Header />
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
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
        <div className=" dark:bg-slate-950 bg-slate-200">
          <WhyChooseUs />
        </div>
        </motion.div>

        <Main />

        <div className="bg dark:bg-zinc-900 flex-center flex-col space-y-8 p-5 w-full min-h-screen mx-auto ">
          <DataTableDemo />
        </div>

        <div className="bg  flex-center flex-col space-y-8 p-5 w-full min-h-screen mx-auto ">
          <Payment />
        </div>

        <div className="bg  flex-center flex-col space-y-8 p-5 w-full min-h-screen mx-auto ">
          <Benefits />
        </div>

        <div className="bg-black min-h-screen py-10 w-full mx-auto">
          <Support />
        </div>

        <div className="  max-w-[95%] pt-10 w-full mx-auto">
          <Contact />
        </div>

        <div className=" hidden  max-w-[95%] pt-10 w-full mx-auto">
          <NewsRobot />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
