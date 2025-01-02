"use client";

import Image from "next/image";
import { Hero } from "./corporate-hero";
import { DocumentRequired } from "./document-required";
import { SavvingsBenefit } from "./benefit";

export const CorporateCurrentAccountPage = () => {
  return (
    <>
      <div className="relative">
        {/* Hero section */}
        <Hero />

        {/* Optional: Background grid effect */}
        <div className="absolute top-[40%] -z-20 opacity-70  left-0 right-0 w-full ">
          <Image
            src="/images/building.png"
            alt="photo Building"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Document Required */}
      <div className="relative py-12 lg:py-24">
        <div className="absolute inset-x-0 inset-y-0  bg-dark-primary -z-10" />
        <DocumentRequired />
      </div>

      {/* Benefit of Savings */}
      <SavvingsBenefit />
    </>
  );
};
