"use client";

import React from "react";
import { InputForm } from "./layouts/form";
import Stars from "../assets/stars.svg";
import Image from "next/image";
import gradient from "../assets/gradient.png"
import grid from "../assets/grid.png"

const page = () => {
  return (
    <div className=" min-h-screen w-full   mx-auto max-w-[95%]">
      <div className="w-full h-full lg:flex-row flex-col-reverse items-center gap-16 flex  scroll-m-1 ">
        <div className="lg:w-[60%] bg-indigo-500 w-full lg:h-screen h-[300px]  ">
         
          <div className="h-full w-full object-cover opacity-50 ">
            <Image src={gradient} alt="" />
          </div>
          <div className=" absolute  right-0  top-0  ">
            <Image src={grid} alt="" />
          </div>
        </div>
        <InputForm />
      </div>
    </div>
  );
};

export default page;
