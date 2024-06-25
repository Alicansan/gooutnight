"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import HamburgerIcon from "@/components/icons/hamburgerIcon";
import { Combobox } from "@/components/sections/Combobox";
import { ModeToggle } from "@/components/theme-toggle";

const languages = [
  { value: "en", label: "English", icon: "🇬🇧" },
  // Add more languages if needed
];

const NavBarLinks = () => (
  <>
    <Link
      href="/faq"
      className="px-4 py-2 text-foreground transition-all hover:text-blue-500"
    >
      FAQs
    </Link>
    <Link
      href="/about-us"
      className="px-4 py-2 text-foreground transition-all hover:text-blue-500"
    >
      About Us
    </Link>
    <Link
      href="https://twitter.com/nitelifenav"
      passHref
      className="px-4 py-2 text-foreground transition-all hover:text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </Link>
    <Link
      href="https://angel.co/nitelifenav"
      passHref
      className="px-4 py-2 text-foreground transition-all hover:text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      Angel List
    </Link>
  </>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "dark:bg-background-dark fixed z-[99] w-full border-b-2 border-indigo-300 bg-background py-4",
        {
          "bg-background/80 backdrop-blur-sm": isScrolled,
        },
      )}
    >
      <div className="container relative mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold text-foreground">NITELIFENAV</div>
        </Link>
        <div className="absolute left-1/2 hidden -translate-x-1/2 justify-center space-x-4 lg:flex">
          <NavBarLinks />
        </div>
        <div className="relative flex items-center space-x-4">
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
          <NavBarLinks />
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
