import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

import user1 from "../assets/users/balazs-orban.png";
import user2 from "../assets/users/delba-de-oliveira.png";
import user3 from "../assets/users/evil-rabbit.png";
import user4 from "../assets/users/guillermo-rauch.png";
import user5 from "../assets/users/hector-simpson.png";



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
import { MessageCircle, Star, ThumbsUp, ViewIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className=" relative min-h-screen pt-[6rem] p-2 flex-center flex-col  space-y-9 w-full ">
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
        <div className=" absolute bottom left-0  ">
          <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
        </div>
        <div className=" absolute bottom-0 right-0  ">
          <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
        </div>
        <div className=" w-[280px] p-2 hover:border-gray-500 dark:hover:border-gray-500/85 smooth max-h-[450px] space-y-4 rounded-sm dark:border-[0.5px] border-gray-400/20 dark:shadow-[0px] shadow-2xl ">
          <Image
            src={project1}
            alt=""
            className="ds:w-full xs:w-full rounded-md h-[230px] object-cover"
          />
          <div className=" space-y-3">
            <div className="flex flex-wrap p-2 justify-between items-center">
              <h1 className=" text-lg font-semibold ">Squid Game App</h1>
              <p className="text-sm dark:text-gray-300 text-gray-500">2019</p>
            </div>
             <div className="flex gap-1 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center -space-x-3">
                <Image  alt="" src={user1} className=" w-7 h-7 rounded-full object-cover "/>
                <Image  alt="" src={user2} className=" w-7 h-7 rounded-full object-cover "/>
                <Image  alt="" src={user3} className=" w-7 h-7 rounded-full object-cover "/>
                <Image  alt="" src={user4} className=" w-7 h-7 rounded-full object-cover "/>
                <Image  alt="" src={user5} className=" w-7 h-7 rounded-full object-cover "/>
              </div>
                <p>15K+ people like this</p>
             </div>
             <div className="flex gap-3 flex-wrap">
              <Button variant={"outline"} className=" text-sm flex items-center gap-3"><p>View</p><ViewIcon width={16}/></Button>
              <Button variant={"secondary"} className=" text-sm items-center gap-3"><ThumbsUp width={16} /></Button>
              <Button variant={"destructive"} className=" text-sm items-center gap-3"> <MessageCircle width={16} /></Button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
