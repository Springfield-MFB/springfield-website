"use client";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/svg/logo.svg";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./ui/button";
import { NavbarItems } from "./navbar-items";
import { useState } from "react";
import { AnimatedHamburgerButton } from "./hamburger-button";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="sticky z-[100] h-20 lg:h-20 inset-x-0 top-0 bg-white w-full shadow-navbar backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}

          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="w-36 h-auto lg:w-40 lg:h-14"
              width={1000}
              height={1000}
            />
          </Link>

          {/* MENUS */}
          <div className="hidden z-50 lg:block lg:self-stretch">
            <NavbarItems />
          </div>

          {/* Buttons */}
          <Button className="hidden lg:block">Internet Banking</Button>
          <div className="flex lg:hidden">
            <AnimatedHamburgerButton active={active} setActive={setActive} />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
