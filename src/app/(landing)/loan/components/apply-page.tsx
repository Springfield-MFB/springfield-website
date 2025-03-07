import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import React from "react";
import { LoanForm } from "./apply-loan-form";

export const ApplyLoanPage = () => {
  return (
    <div className="py-16 bg-[#FAFAFA]">
      <MaxWidthWrapper>
        <Heading className="text-left lg:text-center">Apply For Loan</Heading>
        <p className="text-xs text-[#606060] text-left lg:text-center  mt-3 lg:w-[70%] lg:mx-auto">
          Apply For Loan Get quick and easy access to funds with our MicroLoan
          program. Perfect for small businesses or personal needs, we offer
          flexible terms and a hassle-free application process to help you
          achieve your goals.
        </p>

        <LoanForm />
      </MaxWidthWrapper>
    </div>
  );
};
