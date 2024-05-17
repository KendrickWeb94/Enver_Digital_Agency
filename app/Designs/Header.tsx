import Image from "next/image";
import Link from "next/link";
import React from "react";
import logolight from "../assets/logo.png";
import logodark from "../assets/logo-dark.png";
import NavItems from "./NavItem";
import navLinks from "../Data/navlink";
import { Button } from "@/components/ui/button";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  return (
   <div className=" top-0 fixed bg-white z-50  dark:bg-black w-full">
     <div className=" w-full z-40 relative mx-auto py-3 max-w-[95%]">
      <div className=" flex items-center justify-between w-full">
        <div className="">
          <Link href="/" className="hidden dark:block ">
            <Image src={logolight} alt="logo" className=" w-28" />
          </Link>
          <Link href="/" className=" dark:hidden   ">
            <Image src={logodark} alt="logo" className=" w-28" />
          </Link>
        </div>
        <div className=" md:flex ds:hidden flex items-center gap-7 ">
          <NavItems links={navLinks} />
        </div>
        <div className="">
          <Button className=" bg-transparent border dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
            Get Started
          </Button>
        </div>
        <div className=" md:hidden ds:block">
          <ResponsiveNavbar />
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;
