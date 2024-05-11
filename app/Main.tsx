import React from "react";
import Services from "./Designs/Services";
import Portfolio from "./Designs/Portfolio";
import Testimonials from "./Designs/Testimonials";
import { AccordionDemo } from "./Designs/FAQs";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
    >
      <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">

        <Services />

        <motion.div
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <Portfolio />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <Testimonials />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 1, duration: 2 }}
        >
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <AccordionDemo />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Main;
