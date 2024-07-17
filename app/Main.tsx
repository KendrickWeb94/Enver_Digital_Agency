import React from "react";
import Services from "./Designs/Services";
import Testimonials from "./Designs/Testimonials";
import { AccordionDemo } from "./Designs/FAQs";
import { motion } from "framer-motion";

const Main = () => {
  return (
   <div className="flex flex-col gap-[10rem]">
    
      <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
        <Services />

     
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <Testimonials />
          </div>
      
          <div className=" w-full  o relative z-40 pt-4  mx-auto max-w-[95%]">
            <AccordionDemo />
          </div>
       
      </div>
  
   </div>
  );
};

export default Main;
