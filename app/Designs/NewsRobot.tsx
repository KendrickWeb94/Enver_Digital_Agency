"use client";

import React from "react";
import Image from "next/image";
import Stars from "../assets/stars.svg"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 

const NewsRobot = () => {
  const [Response, SetResponse] = useState(false);
  function Toggle() {
    SetResponse(true);
  }
  return (
    <div className=" min-h-screen relative w-full flex-center ">
    <div className=" inset-0 absolute w-full ">
    <Image src={Stars} alt="" />
    </div>
      {Response && <RobotAction />}
      <div className="z-40 w-full text-center mx-auto">
        <div className=" space-y-5">
          <p className="text-base">
            Stay in control with information. Subscribe yo our newsletter and
            feel the ultimate power of staying updated
          </p>
          <Input type="email" placeholder="Email" autoFocus  className=" max-w-md mx-auto"/>
          <div className="z-h">
            <Button
              onClick={Toggle}
              variant="outline"
              className="bg-black dark:bg-white  text-white dark:text-black"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsRobot;

const RobotAction = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" fixed bottom-0 right-0 z-50  m-5 p-5">
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ ease: "backInOut", delay: 1, duration: 2 }}
      >
        {isVisible && (
          <div className=" w-[320px] p-4  rounded-md dark:border-0 border border-gray-400 h-auto dark:bg-white space-y-4 bg-black">
            <p className=" text-sm text-gray-200 dark:text-gray-700">
              You have Succesfully Subscribed to our newsletter , you will now
              recieve news and updates from us{" "}
            </p>
            <div className="text-right">
              <Button
                variant="outline"
                className="smooth"
              >
                Undo
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
