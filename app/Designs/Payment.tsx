import React from "react";
import Image from "next/image";
import payment from "../assets/phone.png";

const Payment = () => {
  return (
    <div className=" w-full relative flex-center ">
      <div className="z-10 absolute bottom-0 right-0  ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className=" absolute top-0 left-0  ">
        <div className=" dark:bg-yellow-300 bg-yellow-300 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className=" w-full flex z-40 items-center justify-center md:flex-row flex-col smooth gap-16">
        <Image
          src={payment}
          alt="info robot"
          className=" w-[400px] ds:hidden lg:block min-w-[200px] h-full object-cover"
        />
        <div className=" space-y-4">
          <h2 className=" ds:text-xl sm:text-2xl  font-semibold ">
            Get The Mobile App
          </h2>
          <div className="  md:w-[100%] gap-7 grid grid-cols-1 sm:grid-cols-2">
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-base">Project Management Tools</p>
              <p className="text-[13px] leading-5 md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
              Enver simplifies project management with features like task lists, calendars, and collaboration tools, helping users streamline their workflow and improve productivity.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-base">Real-Time Analytics</p>
              <p className="text-[13px] leading-5 md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
              Gain insights into your digital marketing performance with real-time analytics available on the app, allowing you to track progress and make data-driven decisions.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-base">User-Friendly Interface</p>
              <p className="text-[13px] leading-5 md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
              With its intuitive design and user-friendly interface, Enver makes it easy for users to navigate the app, find relevant content, and connect with others in the industry.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-base">Customized Recommendations</p>
              <p className="text-[13px] leading-5 md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
              Enver leverages user preferences and behavior to offer personalized recommendations, ensuring that each user receives content and resources tailored to their interests and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
