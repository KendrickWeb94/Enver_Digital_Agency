import React from "react";
import { NavLink } from "../Data/navlink";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const NavItems: React.FC<{ links: NavLink[] }> = ({ links }) => {
  return (
    <div className={nunito.className}>
      <ul className=" flex md:items-center gap-7 ds:flex-col md:flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className=" font-medium hover:text-indigo-500 smooth "
          >
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
