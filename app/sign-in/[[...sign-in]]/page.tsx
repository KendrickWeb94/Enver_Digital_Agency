import React from "react";
import { SignIn } from "@clerk/nextjs";
import Header from "@/app/Designs/Header";
import Footer from "@/app/Designs/Footer";
const page = () => {
  return (
    <div>
      <div className=" min-h-screen w-full mx-auto max-w-[95%] py-16 flex items-center justify-center">
        <div className=" space-y-16">
          <div className=" z-50">
            <Header />
          </div>
          <SignIn />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
