import React from "react";
import Services from "./Designs/Services";
import Portfolio from "./Designs/Portfolio";
import Testimonials from "./Designs/Testimonials";
import { AccordionDemo } from "./Designs/FAQs";
import { motion } from "framer-motion";

const Main = () => {
  return (
   <div className="flex flex-col gap-[10rem]">
     <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
    >
      <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
        <Services />

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <Portfolio />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <Testimonials />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <AccordionDemo />
          </div>
        </motion.div>
      </div>
    </motion.div>
   </div>
  );
};

export default Main;
