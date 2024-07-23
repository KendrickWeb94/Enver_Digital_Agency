import Image from "next/image";
import React from "react";
import Stars from "@/app/assets/stars.svg";

const page = () => {
  return (
    <div className=" w-full p-3 mx-auto max-w-[95%] ">
      <div className=" inset-0 z-1 absolute w-full ">
        <Image src={Stars} alt="" />
      </div>
      <div className=" absolute z-1 top-0 left-0 right-0 ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className="w-full h-auto">
        
      </div>
    </div>
  );
};

export default page;
