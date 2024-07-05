import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuSquareIcon } from "lucide-react";
import Link from "next/link";

import React from "react";

const ResponsiveNavbar = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuSquareIcon className="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" shadow-xl">
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="../Services">
            <DropdownMenuItem>Blog & Newsletter</DropdownMenuItem>
          </Link>
          <Link href="../Projects">
            <DropdownMenuItem>Our Projects</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ResponsiveNavbar;
