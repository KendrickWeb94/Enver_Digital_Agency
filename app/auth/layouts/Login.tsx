"use client";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email, password }
      );
      console.log("User logged in:", response.data);
      toast.success("Successfully logged in");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("There was an error logging in.");
    }
  };

  const [closeOverlay, setCloseOverlay] = useState(false);
  const toggleOff = () => {
    setCloseOverlay(!closeOverlay);
  };

  return (
    <div
      className={`w-full smooth h-screen fixed top-0 bg-slate-200/25 z-50 flex items-center justify-center ${
        closeOverlay && `hidden`
      }`}
    ><div className=" z-lg ">
    <ToastContainer />
  </div>
      <div className="max-w-md h-auto relative space-y-5 shadow-xl dark:shadow-none rounded-md dark:bg-black dark:border dark:border-gray-600 bg-white p-8">
        <div className="p-3 absolute top-0 right-0 mb-5" onClick={toggleOff}>
          <button className="flex items-center p-2 smooth hover:bg-gray-400/60 rounded-full justify-center bg-gray-400/50">
            <XIcon size={16} fill="gray" />
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            placeholder="Email"
            className="w-full border p-3 rounded mb-3 bg-transparent flex items-center gap-6"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            placeholder="Password"
            className="w-full border p-3 rounded mb-3 bg-transparent flex items-center gap-6"
          />
          <Button variant={"default"} type="submit" className="w-full">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};
