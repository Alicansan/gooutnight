"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import HamburgerIcon from "@/components/icons/hamburgerIcon";
import { Combobox } from "@/components/sections/Combobox";

const languages = [
  { value: "en", label: "English", icon: "🇬🇧" },
  // Add more languages if needed
];

const NavBarLinks = ({ onClick }: { onClick: () => void }) => (
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
      onClick={onClick}
    >
      About Us
    </Link>
    <Link
      href="https://twitter.com/gooutnight"
      passHref
      className="px-4 py-2 text-foreground transition-all hover:text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      Twitter
    </Link>
    <Link
      href="https://angel.co/gooutnight"
      passHref
      className="px-4 py-2 text-foreground transition-all hover:text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      Angel List
    </Link>
  </>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={cn("fixed z-[99] w-full border-b-2 border-indigo-300 py-4", {
        "backdrop-blur-sm": isScrolled,
      })}
    >
      <div
        className={cn("absolute left-0 top-0 h-full w-full bg-background", {
          "bg-background opacity-80 backdrop-blur-sm": isScrolled,
        })}
      />
      <div className="container relative mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold text-foreground">GOOUTNIGHT</div>
        </Link>
        <div className="absolute left-1/2 hidden -translate-x-1/2 justify-center space-x-4 lg:flex">
          <NavBarLinks onClick={closeMenu} />
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
          {/* <ModeToggle /> */}
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
          <NavBarLinks onClick={closeMenu} />
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
