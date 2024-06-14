import React from "react";
import { SignIn } from "@clerk/nextjs";
import Header from "@/app/Designs/Header";
import Footer from "@/app/Designs/Footer";
const page = () => {
  return (
    <div>
      <div className=" min-h-screen w-full  py-16 ">
        <div className=" space-y-16">
          <div className="bg z-50">
            <Header />
          </div>
          <div className="w-full mx-auto flex items-center justify-center py-4">
            <SignIn />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
