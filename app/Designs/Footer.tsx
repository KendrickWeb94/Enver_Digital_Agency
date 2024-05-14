import React from "react";

import logolight from "../assets/logo.png";
import logodark from "../assets/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItem";
import navLinks from "../Data/navlink";



const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" py-16 w-full mx-auto max-w-[95%]">
      <div >
        <div className="flex md:flex-row ds:flex-col flex-wrap justify-between gap-7">
          <div className="">
            <Link href="/" className="hidden dark:block ">
              <Image src={logolight} alt="logo" className=" w-28" />
            </Link>
            <Link href="/" className=" dark:hidden   ">
              <Image src={logodark} alt="logo" className=" w-28" />
            </Link>
          </div>
          <div className="">
            <div className="flex-row flex-wrap flex items-center gap-7 ">
              <NavItems links={navLinks} />
            </div>
          </div>
          <span className="md:hidden ds:block h-[0.5px] bg-gray-400 w-full"></span>
          <p className=" text-[14px] font-medium"> @{currentYear} Enver. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
