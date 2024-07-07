/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import contactphoto from "../assets/contact.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className=" w-full min-h-screen relative ">
      <div className=" absolute top-0 right-0">
        <div className=" bg-yellow-400  dark:bg-yellow-300 blur-[150px] w-[150px] h-[100px]"></div>
      </div>
      <div className=" absolute top-0  left-0 ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className=" w-full space-y-5 z-30">
        <div className=" text-center z-30">
          {" "}
          <h1 className=" md:text-[48px] text-transparent bg-clip-text to-yellow-300  text-clip bg-gradient-to-r from-indigo-600 to leading-[3rem] sm:text-[36px] ds:text-[30px] text-balance font-extrabold">
            Get in Touch
          </h1>
          <p className=" py-3">
            Let's align our minds Reach out and let the magic of collaboration
            illuminate our skies.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className=" max-w-2xl w-fit gap-4 dark:border-[0.5px] shadow-xl justify-center dark:border-gray-500/35 rounded-md h-auto flex-wrap p-4 flex items-center">
            <div className="contact-form">
              <form className=" w-[300px] space-y-5">
                <Input placeholder="Enter your name" type="text" className=" w-full " />
                <Input placeholder="Enter your email" type="email" className=" w-full " />
                <Textarea placeholder="Type your message here"  className=" w-full " />
                <button className="w-full p-2 rounded-md bg-indigo-600 hover:bg-gradient-to-r from-indigo-600 to-yellow-300 scroll-smooth flex items-center justify-center text-sm text-white">
                  Rocket Your Message
                </button>
              </form>
            </div>
            <div className=" w-[300px] auto rounded-md overflow-hidden ">
              <Image src={contactphoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
