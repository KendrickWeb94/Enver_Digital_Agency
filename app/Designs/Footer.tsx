import React from "react";

import logolight from "../assets/logo.png";
import logodark from "../assets/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";



const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 text-black dark:text-white md:grid-cols-5 p-5 text-sm gap-8">
          <div>
            <Link href="/" className="hidden dark:block">
              <Image src={logolight} alt="logo" className="w-28" />
            </Link>
            <Link href="/" className="dark:hidden">
              <Image src={logodark} alt="logo" className="w-28" />
            </Link>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Sponsorship</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Become a Sponsor
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Our Sponsors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Sponsor Benefits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Support Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Privacy & Security</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
                  Security Information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 smooth hover:px-3">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Enver Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
