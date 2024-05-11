import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import circle from "../assets/circle.svg";
import line from "../assets/line.svg";
import homepage from "../assets/Home Page.png";
import jobfinder from "../assets/jobfinder.png";
import axos from "../assets/axos.png";
import web30 from "../assets/web.png";
import game from "../assets/game.png";
import play from "../assets/play.svg";
import green from "../assets/green.png";
import travel from "../assets/travel.png";
import fash from "../assets/fash.png";
import bit from "../assets/bit.jpg";
import Image from "next/image";

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
          <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
        </div>
        <Image
          src={project1}
          alt=""
          className="ds:w-full xs:w-[250px] hover:scale-105 smooth rounded-md h-[230px] object-cover"
        />
        <Image
          src={project2}
          alt=""
          className="ds:w-full xs:w-[250px] hover:scale-105 smooth rounded-md h-[230px] object-cover"
        />
        <Image
          src={project3}
          alt=""
          className="ds:w-full xs:w-[250px] hover:scale-105 smooth rounded-md h-[230px] object-cover"
        />
        <div className="ds:w-full xs:w-[250px] rounded-md h-[230px] hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={homepage} alt="" />
        </div>
        <div className="ds:w-full   xs:w-[250px] rounded-md h-[230px] hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={jobfinder} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px]  hover:scale-105 smoothobject-cover overflow-hidden">
          <Image src={axos} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px] hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={web30} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px]  hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={game} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px]  hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={green} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px]  hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={travel} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px]  hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={fash} alt="" />
        </div>
        <div className="ds:w-full  xs:w-[250px] rounded-md h-[230px]  hover:scale-105 smooth object-cover overflow-hidden">
          <Image src={bit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
