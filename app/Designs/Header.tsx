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
import { Login } from "../auth/layouts/Login";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

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

  const [Getstarted, setGetstarted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function toggleGetStarted() {
    setGetstarted(!Getstarted);
  }

  function toggleLogin() {
    setShowLogin(!showLogin);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user") || '{}');
      setUser(user);
    }
  }, []);

  return (
    <div className="relative w-full">
      {Getstarted && <GetStarted />}
      {showLogin && <Login />}
      <div
        className={`top-0 fixed z-50 w-full  transition-colors delay-500 ease-in-out duration-500 ${
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

              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-black dark:text-white">{user.username}</span>
                </div>
              ) : (
                <>
                  <div className="" onClick={toggleGetStarted}>
                    <Button className="bg-transparent border dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
                      Get Started
                    </Button>
                  </div>
                  <div className="hidden" onClick={toggleLogin}>
                    <Button className="bg-transparent border hidden dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
                      Log In
                    </Button>
                  </div>
                </>
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
