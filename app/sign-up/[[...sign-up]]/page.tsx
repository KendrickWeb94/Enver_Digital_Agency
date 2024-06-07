import React from "react";
import { SignUp } from "@clerk/nextjs";
import Header  from "@/app/Designs/Header";
import Footer from "@/app/Designs/Footer";
const page = () => {
  return (
    <div>
      <div className=" min-h-screen w-full mx-auto max-w-[95%] py-16 flex items-center justify-center">
        <div className="">
        <div className="z-50">
        <Header />
        </div>
          <SignUp />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
