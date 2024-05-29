"use client";

import { Plus_Jakarta_Sans} from "next/font/google";
const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

import BG from "../assets/service-1.png";
import Image from "next/image";


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WhyChooseUs = () => {
 
  return (
    <div className=" w-full mx-auto max-w-[95%] min-h-auto flex flex-col space-y-6 pt-16">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className=" w-[180px]" variant="outline">
            <p>Watch Video</p>{" "}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>OOPS!</AlertDialogTitle>
            <AlertDialogDescription>
              Sorry this Video isnt available in your region , but our team is
              working on making it accesible to you , you could press continue
              to subscribe to our newsletter and we could send it to you
              directly when available
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <Link href="../Newsletter" className=" w-full">
                Continue
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex md:flex-row ds:flex-col-reverse  w-full  justify-between gap-10 items-center">
        <div className="f">
          <Image
            alt=""
            src={BG}
            className=" md:w-auto w-full object-cover h-[400px]"
          />
        </div>
        <div className="space-y-4">
          <div className={plus.className}>
            <h1 className=" md:text-[48px] leading-[3rem] sm:text-[36px] ds:text-[30px] text-balance font-extrabold">
              why enver is the <br></br>best choice?
            </h1>
          </div>
          <div >
            <p className=" text-[15px] w-fit leading-5 md:w-[50%] text-gray-500">
              Watch this one minute video so you understand why you should use
              our services! the service we provide for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
