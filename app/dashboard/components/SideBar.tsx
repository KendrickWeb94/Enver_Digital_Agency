

import React from 'react';
import logolight from "../../assets/logo.png";
import logodark from "../../assets/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from 'lucide-react';

const SideBar = () => {
  return (
    <div className='relative w-[280px] h-full'>
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
          <hr></hr>
          <div className=''></div>
      </div>
    </div>
  );
}

export default SideBar;
