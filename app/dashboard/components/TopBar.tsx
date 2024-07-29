"use client";
import { Bell, Menu, Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import ResponsiveSideBar from "./ResponsiveSideBar";

const TopBar = () => {
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

  const [sidebar, setsidebar] = useState(false);
  function togglesidebar() {
    setsidebar(!sidebar);
  }
  return (
    <div className="w-full h-auto relative">
      {sidebar && <ResponsiveSideBar />}

      <div className="w-full flex items-center p-4 justify-between">
        {user && (
          <p className="text-sm flex items-center gap-3">
            Hello! <p className="text-indigo-600">{user.username}</p>
          </p>
        )}
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-md shadow-lg bg-white  dark:bg-[#101010] flex items-center justify-center">
            <Bell size={20} className="text-gray-400" />
          </button>
          <button className="w-9 h-9 rounded-md shadow-lg bg-white  dark:bg-[#101010] flex items-center justify-center">
            <Settings size={20} className="text-gray-400" />
          </button>
          <button
            className="w-9 h-9  md:hidden rounded-md shadow-lg bg-white  dark:bg-[#101010] flex items-center justify-center"
            onClick={togglesidebar}
          >
            <Menu size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
