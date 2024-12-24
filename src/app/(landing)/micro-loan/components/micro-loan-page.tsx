"use client";

import Image from "next/image";
import { LoanHero } from "./loan-hero";
import { LoanBenefit } from "./loan-benefit";
import { LoanCalculator } from "../../loan-calculator/loan-calculator";

export const MicroLoanPage = () => {
  return (
    <>
      <div className="relative ">
        {/* Hero section */}
        <LoanHero />

        {/* Optional: Background grid effect */}
        <div className="absolute top-[33%] -z-20 opacity-70  left-0 right-0 w-full ">
          <Image
            src="/images/building.png"
            alt="photo Building"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Benefit of Loan */}
      <LoanBenefit />

      {/* Loan Calculator */}
      <div className="relative py-12">
        <div className="absolute inset-x-0 inset-y-0  bg-dark-primary -z-10" />
        <LoanCalculator mode="dark" />
      </div>
    </>
  );
};
