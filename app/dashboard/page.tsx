/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { ChartTop } from "./components/ChartTop";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className=" w-full p-2 z-40">
      <div className="w-full min-h-screen rounded-sm z-40 bg-slate-300 dark:bg-[#18171C]">
        <div className="flex items-center gap-16 p-4 ds:flex-col lg:flex-row">
          <ChartTop />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
