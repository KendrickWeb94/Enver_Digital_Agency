

import React from 'react'
import { Profile } from './Profile'
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Stars from "@/app/assets/stars.svg";


const page = () => {
  return (
    <div className=' w-full relative min-h-screen'>
       <div className=" inset-0 z-1 absolute w-full ">
        <Image src={Stars} alt="" />
      </div>
      <div className=" absolute z-1 top-0 left-0 right-0 ">
        <div className=" bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className="z-40">
      <Profile />
      </div>
    </div>
  )
}

export default page
