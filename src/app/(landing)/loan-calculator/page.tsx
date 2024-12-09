"use client";

import { LoanCalculator } from "../micro-loan/components/loan-calculator";

const Page = () => {
  return (
    <div className="pt-16 pb-40">
      <LoanCalculator mode="light" />
    </div>
  );
};

export default Page;
