import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus, Settings, X } from "lucide-react";

export const Profile = () => {
  const [closemodal, setclosemodal] = useState(false);

  function close() {
    setclosemodal(!closemodal);
  }
  const [user, setUser] = useState<{
    email: string;
    username: string;
    avatar?: string;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(user);
    }
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUser((prev) => (prev ? { ...prev, avatar: base64String } : null));
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, avatar: base64String })
        );
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); 
  };

  return (
    <div
      className={`w-full h-screen fixed top-0  bg-gray-500/50 flex items-center justify-center z-xl ${
        closemodal ? "hidden" : "block"
      }`}
    >
      <div className=" max-w-md bg-zinc-900 h-auo rounded-md p-4 relative">
        <Button
          onClick={close}
          className="w-7 z-xl absolute m-7 top-0 right-0 h-7 rounded-full bg-zinc-800 hover:bg-zinc-800/45 p-1 flex items-center justify-center"
        >
          <X size={18} />
        </Button>
        {user ? (
          <div className="relative pt-16">
            <label
              htmlFor="avatar-upload"
              className=" px-4 py-2 float-end flex items-center gap-3 text-sm text-white hover:bg-gray-200 dark:hover:bg-indigo-600 smooth cursor-pointer"
            >
              <Plus /> <div className="">Upload Avatar</div>
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
            <div className="relative w-8 h-8 rounded-full bg-indigo-600  overflow-hidden">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt="User Avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              ) : (
                <span className="w-full h-full flex items-center justify-center text-white">
                  {user.username.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex w-full pt-6 gap-5 justify-between items-center">
              <p className=" p-2 rounded-md bg-zinc-800 text-white">
                {user.username}
              </p>
              <p className="  p-2 rounded-md bg-zinc-800 text-white">
                {user.email}
              </p>
            </div>

            <div className="flex w-full mt-6 gap-3 items-center">
              <Button onClick={handleSignOut} variant={"outline"}>
                Sign Out
              </Button>
              <Button variant={"outline"}>
                <Settings /> {""} <p className=" ml-3">Settings</p>
              </Button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
