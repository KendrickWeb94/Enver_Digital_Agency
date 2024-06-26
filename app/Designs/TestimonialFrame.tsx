import React from "react";
import { TestData } from "../Data/TestimonialData";


import Image from "next/image";



const TestimonialFrame: React.FC<{ testData: TestData[] }> = ({ testData }) => {
  return (
    <div >
      <div className="grid z-50 grid-cols-1 lg:grid-cols-3 first:col-span-2 sm:grid-cols-2 grid-rows-[masonry] gap-6">
        {testData.map((test) => (
          <div
            key={test.id}
            className="flex z-50  hover:border-gray-400/45 sm:first:col-span-2 hover:smooth smooth flex-col gap-6 h-auto w-auto p-4 rounded-md shadow-2xl dark:bg-transparent dark:border border-gray-500/25 bg-white"
          >
            <div className="flex items-center gap-5">
              <Image
                src={test.image}
                alt=""
                className=" w-9 h-9 object-cover rounded-full"
              />
              <div className="space-y-[1px]">
                <div className="font-semibold text-base ">{test.name}</div>
                <div className="font-normal text-gray-600 dark:text-gray-300 text-sm ">
                  {test.position}
                </div>
              </div>
            </div>
            <p className=" text-[14px] leading-6 font-normal   text-gray-600 dark:text-gray-300">
              {test.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialFrame;
