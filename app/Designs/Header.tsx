"use client";

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
import { GetStarted } from "../auth/layouts/GetStarted";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const { userId } = useAuth();
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
  {
    /* 
    const [Getstarted, setGetstarted] = useState(false);
    
  function toggleGetStarted() {
    setGetstarted(!Getstarted);
  }
  {Getstarted && <GetStarted />}
*/
  }

  return (
    <div className=" relative w-full">
      <div
        className={`top-0 fixed z-40 w-full  transition-colors delay-500 ease-in-out duration-500 ${
          isScrolled ? "bg-white dark:bg-black" : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "backInOut", delay: 1, duration: 2 }}
        >
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
              {!userId && (
                <>
                  <SignInButton>
                    <div className="">
                      <Button className="bg-transparent border dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
                        Get Started
                      </Button>
                    </div>
                  </SignInButton>
                </>
              )}
              {userId && (
                <div className=" flex space-x-5 items-center ">
                  <Link href="../dashboard">
                    <div className=" p-2 rounded-full cursor-pointer smooth hover:bg-indigo-600 hover:text-white bg-indigo-200 text-indigo-500 ">
                      <LayoutDashboard size={17} />
                    </div>
                  </Link>
                  <div>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </div>
              )}
              <div className="md:hidden ds:block">
                <ResponsiveNavbar />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
