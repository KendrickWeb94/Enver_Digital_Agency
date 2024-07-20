"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, Mail, PhoneCall } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export const Profile = () => {
  
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
    <div className=" w-full min-h-auto mx-auto z-lg max-w-[94%]">
      <Link href="/" className="p-3">
        <Button
          variant={"outline"}
          className="gap-3 rounded-3xl flex dark:shadow-none shadow-lg  items-center"
        >
          <ChevronLeft size="19" /> <p>Back</p>
        </Button>
      </Link>
      <div className="pt-10">
        <div className="flex-wrap flex items-center justify-center gap-6">
          <div className=" max-w-lg dark:border border-gray-400/25 p-3 rounded-md dark:shadow-none shadow-lg">
          {user && (
          <div className="py-5 px-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-sm overflow-">
                {user.avatar ? (
                  <Image
                    alt="profile img"
                    src={user.avatar}
                    width={19}
                    height={19}
                    className="w-12 h-12 rounded-sm overflow-hidden object-cover"
                  />
                ) : (
                  <div className="w-12 h-12  rounded-sm bg-indigo-600 flex items-center justify-center">
                    <span className="text-white">
                      {user.username.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-2  md:block">
                <p className="text-base">{user.username}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {user.email}
                </p>
              </div>
            </div>
            <hr className=" my-6"></hr>
            <div className="pt-5 other_details space-y-3">
              <p className="bg-indigo-600 rounded-md  max-w-md w-full text-sm p-2 mb-6">Other Details</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <PhoneCall size="16"/> <p className=" text-sm">Phone Number</p>
                    </div>
                      <Input type="text" className=" w-full"/>
                    <p className="hidden">
                    {"this should be the output when you type your data into input remove the hidden class on the"}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size="16"/> <p className=" text-sm">Additional email (Optionial)</p>
                    </div>
                      <Input type="text" className=" w-full"/>
                    <p className="hidden">
                    {"this should be the output when you type your data into input remove the hidden class on the"}
                    </p>
    
                  </div>
            </div>
          </div>
        )}
          </div>
          <div className=" flex-grow dark:border border-gray-400/25 p-3 rounded-md dark:shadow-none shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};
