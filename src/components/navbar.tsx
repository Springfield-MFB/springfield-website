"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Image from "next/image";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./ui/button";
import { NavbarItems } from "./navbar-items";
import { NAVBART_ITEMS } from "@/config";

import { AnimatedHamburgerButton } from "./hamburger-button";
import Logo from "@/public/svg/logo.svg";
import AccordionItem from "./mobile-item";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleAccordionClick = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <div className="sticky z-[100] lg:h-20 inset-x-0 top-0 bg-white/80 w-full shadow-navbar backdrop-blur-md transition-all">
      {/* MOBILE MENU */}
      <div
        className={`absolute top-[78px] inset-0 z-10 bg-white transition-all duration-500 ease-in-out`}
        style={{
          height: active ? `${menuRef.current?.scrollHeight}px` : "0px",
          opacity: active ? 1 : 0,
        }}
        ref={menuRef}
      >
        <nav
          className={cn(
            "flex flex-col space-y-4 overflow-auto pt-10 pb-32 px-4",
            active ? "h-[100vh] translate-y-0" : "translate-y-[100%] bg-black"
          )}
        >
          {NAVBART_ITEMS.map((item) => (
            <AccordionItem
              key={item.label}
              item={item}
              isOpen={openItem == item.label}
              close={() => setActive(false)}
              onClick={() => handleAccordionClick(item.label)}
            >
              {item.label}
            </AccordionItem>
          ))}
          <Button className="w-[90%] py-6 mx-auto ">Internet Banking</Button>
        </nav>
      </div>
      <MaxWidthWrapper>
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}

          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="w-36 h-auto lg:w-40 lg:h-14 z-40"
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
