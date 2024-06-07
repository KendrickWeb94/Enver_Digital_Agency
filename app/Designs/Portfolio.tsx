import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { useRef, useState } from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import circle from "../assets/circle.svg";
import line from "../assets/line.svg";
import homepage from "../assets/green.png";
[];
import play from "../assets/play.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <div className=" relative min-h-screen pt-[6rem] flex-center flex-col  space-y-9 w-full ">
      <div className={plus.className}>
        <h1 className=" md:text-[45px]  leading-[3rem] sm:text-[32px] ds:text-[27px] text-balance font-bold">
          Our Awesome Portfolio
        </h1>
      </div>

      <div className="relative flex flex-wrap gap-10 items-center justify-center ">
        <div className="absolute right-0 top-0">
          <Image src={circle} alt="" />
        </div>
        <div className="absolute left-0 top-0">
          <Image src={line} alt="" />
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src={play} alt="" />
        </div>
        <div className=" absolute bottom left-0  ">
          <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
        </div>
        <div className=" absolute bottom-0 right-0  ">
          <div className=" bg-indigo-500  min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
        </div>
        <div className=" space-y-5 rounded-md p-1 dark:bg-white bg-black">
          <Image
            src={project1}
            alt=""
            className="ds:w-full xs:w-[230px] smooth rounded-md h-[230px] object-cover"
          />
          <div className="space-y-3 xs:w-auto ds:w-full p-3">
            <p className="text-base text-white dark:text-black font-semibold">
              MovieHub Mobile App
            </p>
            <p className="text-sm font-normal text-gray-400 dark:text-gray-600">
              2017
            </p>
          </div>
        </div>
        <div className=" space-y-5 rounded-md p-1 dark:bg-white bg-black">
          <Image
            src={project2}
            alt=""
            className="ds:w-full xs:w-[230px] smooth rounded-md h-[230px] object-cover"
          />
          <div className="space-y-3 p-3">
            <p className="text-base text-white dark:text-black font-semibold">
              Funito
            </p>
            <p className="text-sm font-normal text-gray-400 dark:text-gray-600">
              2017
            </p>
          </div>
        </div>
        <div className=" space-y-5 rounded-md p-1 dark:bg-white bg-black">
          <Image
            src={project3}
            alt=""
            className="ds:w-full xs:w-[230px] smooth rounded-md h-[230px] object-cover"
          />
          <div className="space-y-3 p-3">
            <p className="text-base text-white dark:text-black font-semibold">
              Saturn Project Manager
            </p>
            <p className="text-sm font-normal text-gray-400 dark:text-gray-600">
              2020
            </p>
          </div>
        </div>
        <div className=" space-y-5 rounded-md p-1 dark:bg-white bg-black">
          <Image
            src={homepage}
            alt=""
            className="ds:w-full xs:w-[230px] smooth rounded-md h-[230px] object-cover"
          />
          <div className="space-y-3 p-3">
            <p className="text-base text-white dark:text-black font-semibold">
              Trivelio.io
            </p>
            <p className="text-sm font-normal text-gray-400 dark:text-gray-600">
              2022
            </p>
          </div>
        </div>
      </div>
      <Button variant="outline">
        <Link href="../Projects">View All Projects</Link>
      </Button>
    </div>
  );
};

export default Portfolio;
