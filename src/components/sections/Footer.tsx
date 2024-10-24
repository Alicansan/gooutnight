import Link from "next/link";
import React from "react";

import { socialMediaLinks } from "@/constants/footerItems";

const Footer = () => {
  return (
    <>
      <footer className="my-2">
        <div className="flex items-center justify-center border-y border-indigo-300 py-6 max-lg:flex-col">
          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="text-xl font-bold text-foreground">
                GOOUTNIGHT
              </div>
            </Link>
            <p className="mx-2 mt-6 text-center text-base leading-7 text-foreground sm:max-w-md">
              We Will Provide The Right Information For Your Best Night Out!
            </p>
            <div className="my-6 flex items-center gap-5">
              {socialMediaLinks.map((icon) => (
                <a
                  href={icon.link}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground"
                  key={icon.name}
                  aria-label={icon.name}
                >
                  <icon.icon className="text-background" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white-400 container my-6 flex items-center justify-start max-sm:flex-col sm:items-start">
          <div className="flex flex-1 cursor-pointer flex-col items-center justify-start gap-2 md:flex-row">
            <p className="mb-6 text-center text-sm">
              GOOUTNIGHT Copyright © 2024. All rights reserved.
            </p>
          </div>
          <Link href="/terms-and-conditions">
            <p className="cursor-pointer text-sm">Terms & Conditions</p>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
