"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logolight from "../assets/logo.png";
import logodark from "../assets/logo-dark.png";
import NavItems from "./NavItem";
import navLinks from "../Data/navlink";
import { Button } from "@/components/ui/button";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 fixed z-50 w-full transition-colors delay-500 ease-in-out duration-500 ${
        isScrolled ? "bg-white dark:bg-black" : "bg-transparent"
      }`}
    >
     <motion.div  initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "backInOut", delay: 1, duration: 2 }}>
     <div className="w-full z-40 relative mx-auto py-3 max-w-[95%]">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <Link href="/" className="hidden dark:block">
              <Image src={logolight} alt="logo" className="w-28" />
            </Link>
            <Link href="/" className="dark:hidden">
              <Image src={logodark} alt="logo" className="w-28" />
            </Link>
          </div>
          <div className="md:flex ds:hidden flex items-center gap-7">
            <NavItems links={navLinks} />
          </div>
          <div className="">
            <Button className="bg-transparent border dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
              Get Started
            </Button>
          </div>
          <div className="md:hidden ds:block">
            <ResponsiveNavbar />
          </div>
        </div>
      </div>
     </motion.div>
    </div>
  );
};

export default Header;
