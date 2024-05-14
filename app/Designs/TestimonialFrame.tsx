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
            className="flex z-50 hover:scale-110 smooth flex-col gap-4 h-auto w-auto p-4 rounded-md shadow-2xl dark:bg-slate-900 bg-white"
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
            <p className=" text-[14px] leading-5 font-normal   text-gray-600 dark:text-gray-300">
              {test.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialFrame;
