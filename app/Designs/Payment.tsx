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
          <h2 className=" ds:text-lg sm:text-xl  font-semibold ">
            Get The Mobile App
          </h2>
          <div className="  md:w-[100%] gap-3 grid grid-cols-1 sm:grid-cols-2">
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-sm">This is super easy to use</p>
              <p className="text-[11px] md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                maxime assumenda quas doloribus eligendi. Facere quia modi
                impedit nobis, accusamus laboriosam unde praesentium assumenda
                alias.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-sm">This is super easy to use</p>
              <p className="text-[11px] md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                maxime assumenda quas doloribus eligendi. Facere quia modi
                impedit nobis, accusamus laboriosam unde praesentium assumenda
                alias.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-sm">This is super easy to use</p>
              <p className="text-[11px] md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                maxime assumenda quas doloribus eligendi. Facere quia modi
                impedit nobis, accusamus laboriosam unde praesentium assumenda
                alias.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="rounded-3xl  w-[100px] flex items-center justify-center bg-black p-1 text-white dark:text-black font-semibold text-sm dark:bg-white">
                Easy use
              </span>
              <p className=" font-medium text-sm">This is super easy to use</p>
              <p className="text-[11px] md:w-[60%] font-normal text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                maxime assumenda quas doloribus eligendi. Facere quia modi
                impedit nobis, accusamus laboriosam unde praesentium assumenda
                alias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
