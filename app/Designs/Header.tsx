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
import { Login } from "../auth/layouts/login/Login";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<{ username: string; avatar?: string } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // reload the page to update the header
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUser((prev) => prev ? { ...prev, avatar: base64String } : null);
        localStorage.setItem("user", JSON.stringify({ ...user, avatar: base64String }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
                <div className="relative">
                  <button
                    className="flex items-center space-x-3"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="relative w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                      {user.avatar ? (
                        <Image
                          src={user.avatar}
                          alt="User Avatar"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      ) : (
                        <span className="w-full h-full flex items-center justify-center text-gray-500">
                          {user.username.charAt(0)}
                        </span>
                      )}
                    </div>
                    <span className="text-black hidden dark:text-white">{user.username}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute border border-gray-400/45 overflow-hidden py-3 right-0 mt-2 w-48 bg-white dark:bg-black shadow-md rounded-md">
                      <label
                        htmlFor="avatar-upload"
                        className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-indigo-600 smooth cursor-pointer"
                      >
                        Upload Avatar
                      </label>
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                      />
                      <Link href="./auth/layouts/profile">
                        <p className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-indigo-600 smooth">
                          Profile
                        </p>
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-black dark:text-white hover:bg-gray-200 smooth dark:hover:bg-indigo-600"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className="" onClick={toggleGetStarted}>
                    <Button className="bg-transparent border dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
                      Get Started
                    </Button>
                  </div>
                  <div className="hidden" onClick={toggleLogin}>
                    <Button className="bg-transparent border dark:border-white border-black/75 dark:text-white text-black hover:text-white dark:hover:text-black">
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
