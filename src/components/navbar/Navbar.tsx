"use client";

import React, { useState } from "react";
import Link from "next/link";
import HamburgerIcon from "@/components/icons/hamburgerIcon";
import { ModeToggle } from "@/components/theme-toggle";
import { Combobox } from "@/components/sections/Combobox";

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
        className="text-foreground hover:text-foreground-hover py-2 px-4 text-xl font-bold hover:text-blue-500"
      >
        FAQs
      </Link>
      <Link
        href="/about-us"
        className="text-foreground hover:text-foreground-hover py-2 px-4 text-xl font-bold hover:text-blue-500"
      >
        About Us
      </Link>
      <Link
        href="/services"
        className="text-foreground hover:text-foreground-hover py-2 px-4 text-xl font-bold hover:text-blue-500"
      >
        Twitter
      </Link>
      <Link
        href="/contact"
        className="text-foreground hover:text-foreground-hover py-2 px-4 text-xl font-bold hover:text-blue-500"
      >
        Angel List
      </Link>
    </>
  );

  return (
    <nav className="bg-background dark:bg-background-dark py-4 w-full border-b-4 border-indigo-300">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-foreground text-xl font-bold">NITELIFENAV</div>
        </Link>
        <div className="hidden lg:flex flex-1 justify-center space-x-4">
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
        <div className="flex flex-col items-center mt-4 lg:hidden">
          {links}
          <Combobox
            label="Language"
            items={languages.map((lang) => `${lang.icon} ${lang.label}`)}
            defaultValue={`${languages[0].icon} ${languages[0].label}`}
            className="w-40 mt-4"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
