/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TopBar from "./components/TopBar";
import { DataTableDemo } from "@/app/dashboard/components/DashboardTable";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const percentage = 66;

  return (
    <div className=" w-full  p-2 z-40">
      <div className="w-full min-h-screen rounded-sm z-40 bg-slate-300 dark:bg-[#18171C]">
        <TopBar />
        <div className="flex items-center p-3 gap-6 flex-wrap">
          {/*     <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />*/}
          <div className=" flex-grow h-auto p-3 bg-white dark:bg-[#101010] rounded-md shadow-lg  border-gray-400/25 flex items-center justify-between gap-6 flex-wrap">
            <div style={{ width: 60, height: 60 }}>
              <CircularProgressbar value={66} />
            </div>
            <div className="text-base">66%</div>
            <div className="text-sm">
              <h1 className=" text-indigo-600 mb-1">Profile Completion</h1>
              <p className="text-xs text-gray-400">go to onboarding</p>
            </div>
          </div>
          <div className=" flex-grow h-auto p-3 bg-white dark:bg-[#101010] rounded-md shadow-lg  border-gray-400/25 flex items-center justify-between gap-6 flex-wrap">
            <div style={{ width: 60, height: 60 }}>
              <CircularProgressbar value={76} />
            </div>
            <div className="text-base">76%</div>
            <div className="text-sm">
              <h1 className=" text-indigo-600 mb-1">WorkFlow generated</h1>
              <p className="text-xs text-gray-400">go to settings</p>
            </div>
          </div>
          <div className=" flex-grow h-auto p-3 bg-white dark:bg-[#101010] rounded-md shadow-lg  border-gray-400/25 flex items-center justify-between gap-6 flex-wrap">
            <div style={{ width: 60, height: 60 }}>
              <CircularProgressbar value={10} />
            </div>
            <div className="text-base">10%</div>
            <div className="text-sm">
              <h1 className=" text-indigo-600 mb-1">Project space used</h1>
              <p className=" text-xs text-gray-400">go to projects page</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default page;
