import React from "react";
import Image from "next/image";
import Benefit from "../assets/hero.png";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Database, LucideRocket } from "lucide-react";

export const Benefits = () => {
  return (
    <div className=" w-full relative flex flex-wrap-reverse gap-14 smooth ds:flex-col lg:flex-row-reverse ">
      <div className=" absolute top-0 left-0  ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[200px] max-w-[450px] h-[200px]"></div>
      </div>

      <div className=" absolute right-0 bottom-0  ">
        <div className=" bg-yellow-400 min-w-[150px] blur-[200px] max-w-[450px] h-[200px]"></div>
      </div>
      <div className=" lg:w-[43%]">
        <Image src={Benefit} alt="" />
      </div>
      <div className="z-40 lg:w-[50%]">
        <div className="z-40 space-y-6">
          <h1 className="md:text-[35px] ds:text-[24px] to-yellow-300   bg-gradient-to-r from-indigo-600 bg-clip-text text-transparent text-clip sm:text-[30px] leading- font-bold ">
            How our API can be useful to your business
          </h1>
          <p className="font-normal text-gray-600 text-[14px] leading-6 dark:text-gray-300 smooth ">
            Our API offers an invaluable opportunity for your business to
            streamline operations and enhance functionality. By integrating our
            API into your digital infrastructure, you can unlock a world of
            possibilities, from automating tedious tasks to accessing real-time
            data insights.
          </p>
          <Button className=" smooth dark:text-white font-medium bg-indigo-200 text-indigo-600 hover:opacity-60 dark:bg-indigo-600 rounded-full">
            Read the Docs
          </Button>
          <div className="mt-6 flex gap-5 ">
            <div className="space-y-5">
              <span className=" ">
                <Database
                  className=" bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-600 text-indigo-600 text-5xl rounded-lg p-2"
                  size={35}
                />
              </span>
              <h2 className=" font-semibold text-base">
                PCI Token Services API
              </h2>
              <p className="font-normal text-gray-600 text-[14px] leading-6 dark:text-gray-300 smooth ">
                Experience peace of mind and unparalleled security with our PCI
                Token Services API. Designed to safeguard sensitive payment
                information,
              </p>
              <div className="flex items-center font-semibold cursor-pointer  text-sm gap-3 smooth hover:gap-5 text-indigo-600 ">
                <p>API reference</p> <ArrowRightIcon />
              </div>
            </div>
            <div className="space-y-5">
              <span className=" ">
                <LucideRocket
                  className=" bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-600 text-indigo-600 text-5xl rounded-lg p-2"
                  size={35}
                />
              </span>
              <h2 className=" font-semibold text-base">
                Achieving Your Business Goals
              </h2>
              <p className="font-normal text-gray-600 text-[14px] leading-6 dark:text-gray-300 smooth ">
                Our API serves as a pivotal tool in achieving your business
                objectives efficiently and effectively. By seamlessly
                integrating our API into your operations,
              </p>
              <div className="flex items-center font-semibold  cursor-pointer text-sm gap-3 smooth hover:gap-5 text-indigo-600 ">
                <p>Business Guides</p> <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
