import { Button } from "@/components/ui/button";
import {
  Book,
  ChevronRight,
  HelpingHand,
  Newspaper,
  UsersRound,
} from "lucide-react";
import React from "react";

const Support = () => {
  return (
    <div className=" w-full p-5 space-y-6">
      <p className="uppercase text-white font-medium text-center">
        Enver Support
      </p>
      <h1 className=" ds:text-2xl text-white sm:text-3xl text-balance text-center md:text-4xl font-semibold">
        All around Help when,<br className=" sm:block ds:hidden"></br> you need
        it
      </h1>
      <div className="gap-5 py-5 sm:px-6  md:px-10 grid grid-cols-1 sm:grid-cols-2">
        <div className=" w-full h-[300px] bg-zinc-950 space-y-5 p-5 border-[0.5px] border-gray-400/20 rounded-md">
          <span className=" w-12 flex items-center justify-center p-3 bg-indigo-600 rounded-sm text-indigo-200 ">
            <Newspaper />
          </span>

          <h1 className=" ds:text-2xl text-white sm:text-3xl text-balance  md:text-4xl font-semibold">
            Blog
          </h1>
          <p className="text-sm font-normal text-gray-300">
            Get all the marketing and business strategy tips you need to help
            you run an online business.
          </p>
          <Button
            variant={"outline"}
            className=" flex gap-4 smooth rounded-3xl"
          >
            <p>Read</p> <ChevronRight />{" "}
          </Button>
        </div>
        <div className=" w-full h-[300px] bg-zinc-950 space-y-5 p-5 border-[0.5px] border-gray-400/20 rounded-md">
          <span className=" w-12 flex items-center justify-center p-3 bg-indigo-600 rounded-sm text-indigo-200">
            <UsersRound />
          </span>

          <h1 className=" ds:text-2xl text-white sm:text-3xl text-balance  md:text-4xl font-semibold">
            Communtity
          </h1>
          <p className="text-sm font-normal text-gray-300">
            Connect with a community of brands, partners, and fellow merchants
            who understand Shopify.
          </p>
          <Button
            variant={"outline"}
            className=" flex gap-4 smooth rounded-3xl"
          >
            <p>Discuss</p> <ChevronRight />{" "}
          </Button>
        </div>
        <div className=" w-full h-[300px] bg-zinc-950 space-y-5 p-5 border-[0.5px] border-gray-400/20 rounded-md">
          <span className=" w-12 flex items-center justify-center p-3 bg-indigo-600 rounded-sm text-indigo-200">
            <Book />
          </span>

          <h1 className=" ds:text-2xl text-white sm:text-3xl text-balance  md:text-4xl font-semibold">
            Online Courses
          </h1>
          <p className="text-sm font-normal text-gray-300">
            Learn tried-and-tested business tips with instant access to lessons
            from successful entrepreneurs.
          </p>
          <Button
            variant={"outline"}
            className=" flex gap-4 smooth rounded-3xl"
          >
            <p>Learn</p> <ChevronRight />{" "}
          </Button>
        </div>
        <div className=" w-full h-[300px] bg-zinc-950 space-y-5 p-5 border-[0.5px] border-gray-400/20 rounded-md">
          <span className=" w-12 flex items-center justify-center p-3 bg-indigo-600 rounded-sm text-indigo-200">
            <HelpingHand />
          </span>

          <h1 className=" ds:text-2xl text-white sm:text-3xl text-balance  md:text-4xl font-semibold">
            Help center
          </h1>
          <p className="text-sm font-normal text-gray-300">
            Find answers with a dedicated helpdesk resource full of articles and
            videos from our Support team.
          </p>
          <Button
            variant={"outline"}
            className=" flex gap-4 smooth rounded-3xl"
          >
            <p>Read</p> <ChevronRight />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;
