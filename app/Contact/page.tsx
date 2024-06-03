"use client";

import React from "react";
import { InputForm } from "./layouts/form";
import Stars from "../assets/stars.svg";
import Image from "next/image";
import gradient from "../assets/gradient.png"
import grid from "../assets/grid.png"

const page = () => {
  return (
    <div className=" min-h-screen w-full ds:pt-24 md:pt-2 pb-16  mx-auto max-w-[95%]">
      <div className="w-full h-full lg:flex-row flex-col items-center gap-16 flex  scroll-m-1 ">
        <div className="lg:w-[60%] bg-indigo-500 overflow-hidden w-full lg:h-screen h-[200px]  ">
         
          <div className="h-full w-full object-cover opacity-50 ">
            <Image src={gradient} alt="" />
          </div>
          <div className=" absolute w-full h-screen  right-0  top-0  ">
            <Image src={grid} alt="" />
          </div>
        </div>
        <InputForm />
      </div>
    </div>
  );
};

export default page;
