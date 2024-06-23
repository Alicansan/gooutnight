"use client";

import Link from "next/link";
import React, { useState } from "react";

import HamburgerIcon from "@/components/icons/hamburgerIcon";
import { Combobox } from "@/components/sections/Combobox";
import { ModeToggle } from "@/components/theme-toggle";

const languages = [
  { value: "en", label: "English", icon: "🇬🇧" },
  // Add more languages if needed
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      <Link
        href="/faq"
        className="hover:text-foreground-hover px-4 py-2 text-xl font-bold text-foreground hover:text-blue-500"
      >
        FAQs
      </Link>
      <Link
        href="/about-us"
        className="hover:text-foreground-hover px-4 py-2 text-xl font-bold text-foreground hover:text-blue-500"
      >
        About Us
      </Link>
      <Link
        href="https://twitter.com/nitelifenav"
        passHref
        className="hover:text-foreground-hover px-4 py-2 text-xl font-bold text-foreground hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      <Link
        href="https://angel.co/nitelifenav"
        passHref
        className="hover:text-foreground-hover px-4 py-2 text-xl font-bold text-foreground hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Angel List
      </Link>
    </>
  );

  return (
    <nav className="dark:bg-background-dark w-full border-b-4 border-indigo-300 bg-background py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold text-foreground">NITELIFENAV</div>
        </Link>
        <div className="hidden flex-1 justify-center space-x-4 lg:flex">
          {links}
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">
            <Combobox
              label="Language"
              items={languages.map((lang) => `${lang.icon} ${lang.label}`)}
              defaultValue={`${languages[0].icon} ${languages[0].label}`}
              className="w-40"
            />
          </div>
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground focus:outline-none lg:hidden"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 flex flex-col items-center lg:hidden">
          {links}
          <Combobox
            label="Language"
            items={languages.map((lang) => `${lang.icon} ${lang.label}`)}
            defaultValue={`${languages[0].icon} ${languages[0].label}`}
            className="mt-4 w-40"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
