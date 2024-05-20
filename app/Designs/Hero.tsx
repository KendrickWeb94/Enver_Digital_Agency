import React from "react";
import hero from "../assets/service-3.png";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Stars from "../assets/stars.svg";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className=" relative pt-6 mt-16 z-40 flex w-full md:items-center md:flex-row flex-col justify-between gap-16 ">
      <div className=" inset-0 absolute w-full ">
        <Image src={Stars} alt="" />
      </div>
      <div className=" absolute top-0 left-0 right-0 ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className=" md:w-[50%]">
        <div className={plus.className}>
          <div className=" flex flex-col space-y-5">
            <h1 className="lg:text-6xl md:text-5xl  sm:text-5xl ds:text-4xl text-balance font-extrabold">
              Build Your Awesome Platform
            </h1>
            <span>
              <p className=" text-gray-500  text-15px leading-7 ">
                Enver studio is a digital studio that offers several services
                such as UI/UX Design to developers, we will provide the best
                service for those of you who use our services.
              </p>
            </span>
            <button className=" w-[200px] opacity-75 hover:opacity-100 smooth rounded-sm p-3 justify-center gap-2 bg-indigo-500 text-white text-sm font-medium flex items-center ">
              Our Services <GoArrowUpRight className=" text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] relative ">
        <div className=" absolute top-0 inset-0">
          <div className=" bg-yellow-400  dark:bg-yellow-300 blur-[150px] w-[150px] h-[100px]"></div>
        </div>
        <Image
          src={hero}
          alt="hero image"
          className="h-[520px] object-cover w-[450px] min-w-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
