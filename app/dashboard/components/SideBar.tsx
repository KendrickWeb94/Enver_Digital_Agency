

import React from 'react';
import logolight from "../../assets/logo.png";
import logodark from "../../assets/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Eye, Home, LayoutDashboard, Settings } from 'lucide-react';

const SideBar = () => {
  return (
    <div className=' w-[280px] z-50 h-full'>
      <div className='w-full h-full '>
          <div className='w-full flex items-center p-3  justify-between'>
          <div className="">
                <Link href="/" className="hidden dark:block">
                  <Image src={logolight} alt="logo" className="w-24" />
                </Link>
                <Link href="/" className="dark:hidden">
                  <Image src={logodark} alt="logo" className="w-24" />
                </Link>
              </div>
              <div className=''><ChevronDown /></div>
          </div>
          <hr className=' my-3 '></hr>
          <div className=' flex p-3 text-sm py-6 flex-col space-y-5'>
            <li className=' hover:text-indigo-600 smooth cursor-pointer flex items-center gap-4'>
              <Home size="20px" /><p>Home</p>
            </li>
            <li className=' flex items-center hover:text-indigo-600 smooth cursor-pointer gap-4'>
              <LayoutDashboard size="20px" /><p>Projects</p>
            </li>
            <li className=' flex items-cente hover:text-indigo-600 smooth cursor-pointer gap-4'>
              <Eye size="20px" /><p>Overview</p>
            </li>
            <li className=' flex hover:text-indigo-600 smooth cursor-pointer items-center gap-4'>
              <Settings size="20px" /><p>Settings</p>
            </li>
          </div>
          <div className=''></div>
      </div>
    </div>
  );
}

export default SideBar;
