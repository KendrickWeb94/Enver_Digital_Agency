import React from "react";
import Image from "next/image";
import webcode from "../assets/webdev-code.png";
import layer from "../assets/layer.png";
import code from "../assets/code.png";
import align from "../assets/align-vertically.png";
import camera from "../assets/camera.png";
import videoplay from "../assets/video-play.png";
import play from "../assets/play.svg";
import add from "../assets/add.svg";
import up from "../assets/arrow-right-up.svg";

import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });

const Services = () => {
  return (
    <div className="pt-16 w-full relative text-center smooth min-h-screen container flex-col space-y-8 lg:flex lg:items-center lg:justify-center  p-1">
      <div className={plus.className}>
        <h1 className=" md:text-[48px] leading-[3rem] sm:text-[36px] ds:text-[30px] text-balance font-extrabold">
          The Service We Provide <br className=" ds:hidden sm:block"></br> For
          You
        </h1>
      </div>
      {/*    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="60" viewBox="0 0 51 60" fill="none">
<circle cx="20" cy="20" r="18.5" stroke="white" stroke-width="3"/>
<circle cx="31" cy="40" r="19.5" stroke="white"/>
</svg>*/}
      <div className=" absolute top-0 left-0  ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className=" absolute top-0 left-0  ">
        <Image src={play} alt="logoif" className=" min-w-[50px] " />
      </div>
      <div className=" absolute bottom-0 right-0  ">
        <Image src={add} alt="logoif" className=" min-w-[50px] " />
      </div>
      <div className=" absolute top-0 right-0  ">
        <Image src={up} alt="logoif" className=" min-w-[50px] " />
      </div>
      <div className=" absolute bottom-0 right-0  ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className="smooth  w-full text-center z-40 mx-auto grid grid-cols-1 items-center justify-center gap-16 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className=" flex flex-col items-center justify-center space-y-5">
          <div className=" rounded-full w-[40px] h-[40px] flex-center bg-indigo-300">
            <Image src={webcode} alt="" className=" object-cover w-[20px]" />
          </div>
          <div className={plus.className}>
            <h1 className=" text-lg font-semibold  ">Development</h1>
          </div>
          <div className={nunito.className}>
            <p className=" text-base font-medium text-gray-600 dark:text-gray-400  ">
              Create a platform with the best and coolest quality from us
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5">
          <div className=" rounded-full w-[40px] h-[40px] flex-center bg-red-300">
            <Image src={layer} alt="" className=" object-cover w-[20px]" />
          </div>
          <div className={plus.className}>
            <h1 className=" text-lg font-semibold  ">UI/UX designer </h1>
          </div>
          <div className={nunito.className}>
            <p className=" text-base font-medium text-gray-600 dark:text-gray-400  ">
              We provide UI/UX Design services, and of course with the best
              quality
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5">
          <div className=" rounded-full w-[40px] h-[40px] flex-center bg-yellow-100">
            <Image src={code} alt="" className=" object-cover w-[20px]" />
          </div>
          <div className={plus.className}>
            <h1 className=" text-lg font-semibold  ">Graphic Designer</h1>
          </div>
          <div className={nunito.className}>
            <p className=" text-base font-medium text-gray-600 dark:text-gray-400  ">
              We provide Graphic Design services, with the best designers
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5">
          <div className=" rounded-full w-[40px] h-[40px] flex-center bg-yellow-100">
            <Image src={align} alt="" className=" object-cover w-[20px]" />
          </div>
          <div className={plus.className}>
            <h1 className=" text-lg font-semibold  ">Motion Animations</h1>
          </div>
          <div className={nunito.className}>
            <p className=" text-base font-medium text-gray-600 dark:text-gray-400  ">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5">
          <div className=" rounded-full w-[40px] h-[40px] flex-center bg-indigo-300">
            <Image src={camera} alt="" className=" object-cover w-[20px]" />
          </div>
          <div className={plus.className}>
            <h1 className=" text-lg font-semibold  ">Photography</h1>
          </div>
          <div className={nunito.className}>
            <p className=" text-base font-medium text-gray-600 dark:text-gray-400  ">
              We provide Photography services, and of course with the best
              quality
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5">
          <div className=" rounded-full w-[40px] h-[40px] flex-center bg-red-300">
            <Image src={videoplay} alt="" className=" object-cover w-[20px]" />
          </div>
          <div className={plus.className}>
            <h1 className=" text-lg font-semibold  ">Videography</h1>
          </div>
          <div className={nunito.className}>
            <p className=" text-base font-medium text-gray-600 dark:text-gray-400  ">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
