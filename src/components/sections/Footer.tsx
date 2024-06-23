import Link from "next/link";
import React from "react";

import { footerItems, socialMediaLinks } from "@/constants/footerItems";

const Footer = () => {
  return (
    <>
      <footer className="container my-6">
        <div className="flex flex-row items-center border-y-2 border-indigo-300 py-6 max-lg:flex-col">
          <div className="flex flex-col items-center lg:max-w-[300px] lg:items-start">
            <Link href="/">
              <div className="text-xl font-bold text-foreground">
                NITELIFENAV
              </div>
            </Link>
            <p className="mt-6 text-base leading-7 text-foreground sm:max-w-md md:text-start">
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

          <div className="flex flex-1 flex-col items-end justify-between gap-3 lg:gap-5">
            {footerItems.map((section) => (
              <div key={section.name}>
                <ul>
                  <li className="text-white-400 hover:text-slate-gray w-[90px] text-center text-base leading-normal">
                    <a href={section.link}>{section.name}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-white-400 my-12 flex items-center justify-between max-sm:flex-col sm:items-start">
          <div className="flex flex-1 cursor-pointer flex-col items-center justify-start gap-2 md:flex-row">
            <p className="mb-6 text-center text-sm">
              NITELIFENAV Copyright © 2024. All rights reserved.
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
