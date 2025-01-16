"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

import CbnLogo from "@/public/svg/cbn-logo.svg";
import NdicLogo from "@/public/svg/ndic-logo.svg";
import TawkToChat from "@/components/chatbot/tawk-to-chat";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      {children}
      <TawkToChat />
      <section id="footer">
        <Footer />
      </section>

      {!isFooterVisible && (
        <div className="fixed -bottom-6 left-2 lg:left-20 z-50">
          <div className="bg-white/40 backdrop-blur-sm p-2 rounded-md text-center lg:text-left mb-8 flex justify-center lg:justify-start">
            <div className="text-sm font-normal flex gap-x-2 items-center">
              <span className="">Approved by CBN</span>
              <Image
                src={CbnLogo}
                alt="photo CBN Logo"
                width={1000}
                height={1000}
                className="size-[30px]"
              />
              <span className="">Insured by NDIC</span>
              <Image
                src={NdicLogo}
                alt="photo NDIC Logo"
                width={1000}
                height={1000}
                className="size-[40px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
