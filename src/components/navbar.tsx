import { ChevronDown } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/svg/logo.svg";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./ui/button";
import { NavbarItems } from "./navbar-items";

export const Navbar = () => {
  return (
    <div className="sticky z-[100] h-24 inset-x-0 top-0 bg-white w-full shadow-navbar backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="relative flex h-24  items-center justify-between">
          {/* Logo */}

          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className=" sm:w-16 sm:h-12 lg:w-48 lg:h-14"
              width={1000}
              height={1000}
            />
          </Link>

          {/* MENUS */}
          <div className="hidden z-50 lg:block lg:self-stretch">
            <NavbarItems />
          </div>

          {/* <div className="hiden md:flex items-center space-x-6">
            <div className="flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer">
              <span>Company</span>
              <ChevronDown size={18} className="text-dark-primary" />
            </div>

            <div className="flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer">
              <span>Savings & Deposit</span>
              <ChevronDown size={18} className="text-dark-primary" />
            </div>

            <div className="flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer">
              <span>Loans</span>
              <ChevronDown size={18} className="text-dark-primary" />
            </div>

            <div className="flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer">
              <span>Digital Services</span>
              <ChevronDown size={18} className="text-dark-primary" />
            </div>

            <div className="flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer">
              <span>Contact Us</span>
              <ChevronDown size={18} className="text-dark-primary" />
            </div>
          </div> */}

          {/* Buttons */}
          <Button>Internet Banking</Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
