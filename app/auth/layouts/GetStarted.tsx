"use client";

import { Button } from "@/components/ui/button";
import { Github, KeyIcon, Mail, SidebarCloseIcon, XIcon } from "lucide-react";
import React from "react";
import { useState } from "react";

export const GetStarted = () => {
  const [CloseOverlay, SetCloseOverlay] = useState(false);
  function toggleOff() {
    SetCloseOverlay(!CloseOverlay);
  }
  return (
    <div
      className={`w-full smooth h-screen fixed top-0 bg-slate-200/25  z-50 flex items-center justify-center ${
        CloseOverlay && `hidden`
      }`}
    >
      <div className=" max-w-md h-auto relative space-y-5  shadow-xl dark:shadow-none rounded-md dark:bg-black dark:border dark:border-gray-600  bg-white p-8">
        <div className=" p-3 absolute top-0 right-0  mb-5" onClick={toggleOff}>
          <button className=" flex items-center p-2 smooth hover:bg-gray-400/60 rounded-full justify-center bg-gray-400/50">
            <XIcon size={16} fill="gray" />
          </button>
        </div>
        <Button
          variant={"outline"}
          className=" w-full border p-3 rounded  bg-transparent flex items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <KeyIcon size={15} />{" "}
            <span>
              <Mail size={15} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p> Email and Password</p>
          </div>
        </Button>
        <div className="">
          <Button variant={"outline"}> Continue with Google Account</Button>
        </div>
        <div className="">
          <Button
            variant={"outline"}
            className=" flex items-center justify-between gap-9"
          >
            {" "}
            <Github size={23} /> Continue with Github{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
