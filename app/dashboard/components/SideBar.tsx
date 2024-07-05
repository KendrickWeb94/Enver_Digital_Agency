"use client";

import React, { useEffect, useState } from "react";
import logolight from "../../assets/logo.png";
import logodark from "../../assets/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  CircleHelp,
  Eye,
  GemIcon,
  Home,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const SideBar = () => {
  const [user, setUser] = useState<{
    username: string;
    avatar?: string;
    email?: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="w-[280px] z-50 h-full">
      <div className="w-full relative h-full">
        <div className="w-full flex items-center p-3 justify-between">
          <div>
            <Link href="/" className="hidden dark:block">
              <Image src={logolight} alt="logo" className="w-24" />
            </Link>
            <Link href="/" className="dark:hidden">
              <Image src={logodark} alt="logo" className="w-24" />
            </Link>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex p-3 text-sm py-6 flex-col space-y-5">
          <Link
            href="/"
            className="hover:text-indigo-600 smooth cursor-pointer flex items-center gap-4"
          >
            <Home size="20px" />
            <p>Home</p>
          </Link>
          <Link
            href="dashboard/yourprojects"
            className="flex items-center hover:text-indigo-600 smooth cursor-pointer gap-4"
          >
            <LayoutDashboard size="20px" />
            <p>Projects</p>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center hover:text-indigo-600 smooth cursor-pointer gap-4"
          >
            <Eye size="20px" />
            <p>Overview</p>
          </Link>
          <Link
            href="dashboard/settings"
            className="flex hover:text-indigo-600 smooth cursor-pointer items-center gap-4"
          >
            <Settings size="20px" />
            <p>Settings</p>
          </Link>
        </div>
        <div className="px-3 pb-5">
          <Link href="dashboard/support" className="text-sm flex items-center gap-3 text-yellow-500">
            <GemIcon size={18} /> Premium Features
          </Link>
        </div>
        <div className="px-3 space-y-4">
          <p className="text-xs">Customisation</p>
          <p className="text-xs">Draggable Components</p>
          <p className="text-xs">Unlimted Projects</p>
          <p className="text-xs">Daily UI Packs</p>
          <p className="text-xs">Presentation</p>
        </div>

        <div className="py-6 px-3 text-sm flex items-center gap-3 text-blue-600">
          <CircleHelp size={18} />
          Support
        </div>

        {user && (
          <div className="py-6 px-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-600 rounded-md overflow-hidden">
                {user.avatar ? (
                  <Image
                    alt="profile img"
                    src={user.avatar}
                    width={19}
                    height={19}
                    className="w-9 h-9 rounded-md overflow-hidden object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white">
                      {user.username.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm">{user.username}</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
