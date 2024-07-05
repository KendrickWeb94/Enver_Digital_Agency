import React from "react";
import TestimonialFrame from "./TestimonialFrame";
import testData from "../Data/TestimonialData";

const Testimonials = () => {
  return (
    <div className=" min-h-screen space-y-6 w-full relative">
      <div className="z-10 absolute bottom-0 right-0  ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className=" absolute top-0 left-0  ">
        <div className=" dark:bg-yellow-300 bg-yellow-300 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <h1 className=" text-center  to-yellow-300   bg-gradient-to-r from-indigo-600 bg-clip-text text-transparent text-clip font-extrabold lg:text-4xl text-3xl text-balance">
        We have worked with thousands of amazing people
      </h1>
      <div className="z-50">
        <TestimonialFrame testData={testData} />
      </div>
    </div>
  );
};

export default Testimonials;
