import { FC, ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

import CbnLogo from "@/public/svg/cbn-logo.svg";
import NdicLogo from "@/public/svg/ndic-logo.svg";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />

      <div className="fixed -bottom-6 left-4">
        <div className="bg-white/65 p-2 rounded-md text-center lg:text-left mb-8 flex justify-center lg:justify-start">
          <div className="text-sm font-normal flex gap-x-2 items-center">
            <span className="">Licensed by CBN</span>
            <Image
              src={CbnLogo}
              alt="CBN Logo"
              width={1000}
              height={1000}
              className="size-[30px]"
            />
            <span className="">Insured by NDIC</span>
            <Image
              src={NdicLogo}
              alt="CBN Logo"
              width={1000}
              height={1000}
              className="size-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
