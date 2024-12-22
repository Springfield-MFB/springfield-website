"use client";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoanProcessCard } from "../../loan-calculator/loan-process-card";

export const LoanCalculator = ({ mode }: { mode: "dark" | "light" }) => {
  const router = useRouter();

  const [loanAmount, setLoanAmount] = useState<number>(2341980);
  const [loanDuration, setLoanDuration] = useState<number>(213);

  // Calculate total repayment
  const interestRate = 0.15; // Example interest rate
  const totalRepayment = Math.round(
    loanAmount * (1 + interestRate * (loanDuration / 365))
  );

  return (
    <MaxWidthWrapper className="">
      <Heading className={cn(mode === "dark" ? "text-white" : "")}>
        Loan Calculator
      </Heading>
      <p
        className={cn(
          "mt-6 mb-10  text-[13px] md:w-[50%] leading-5",
          mode === "dark" ? "text-white" : "text-[#606060]"
        )}
      >
        Quickly estimate your monthly payments and total interest for any loan.
        Make informed decisions and take control of your finances today!
      </p>

      <div
        className={cn(
          "flex flex-col lg:flex-row  items-center justify-between"
        )}
      >
        {/* Loan Calculator Section */}
        <div
          className={cn(
            "lg:w-[45%] w-full",
            mode === "dark" ? "text-white" : "text-black"
          )}
        >
          <h2 className="text-yellow-400 text-base font-bold mb-1 ">
            How much money do you need?
          </h2>
          <p className={cn("text-sm mb-6")}>Calculate Your Loan</p>

          {/* Loan Amount Slider */}
          <label className="block mb-10">
            <input
              type="range"
              min={50000}
              max={10000000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="custom-range  w-full accent-brand-primary mt-2"
              style={{
                background:
                  mode === "dark"
                    ? `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${
                      ((loanAmount - 50000) / (10000000 - 50000)) * 100
                    }%,
                    #3E3E3E ${
                      ((loanAmount - 50000) / (10000000 - 50000)) * 100
                    }%,
                    #3E3E3E 100%`
                    : `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${
                      ((loanAmount - 50000) / (10000000 - 50000)) * 100
                    }%,
                    #DFDFDF ${
                      ((loanAmount - 50000) / (10000000 - 50000)) * 100
                    }%,
                    #DFDFDF 100%`,
              }}
            />

            <div className="w-full mt-3 text-xs flex items-center justify-between">
              <p>NGN 50,000</p>
              <p className="text-brand-primary">
                NGN {loanAmount.toLocaleString()}
              </p>
              <p>NGN 10,000,000</p>
            </div>
          </label>

          {/* Duration Slider */}
          <label className="block mb-6">
            <input
              type="range"
              min={30}
              max={365}
              value={loanDuration}
              onChange={(e) => setLoanDuration(Number(e.target.value))}
              className="custom-range w-full  accent-brand-primary mt-2"
              style={{
                background:
                  mode === "dark"
                    ? `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${((loanDuration - 30) / (365 - 30)) * 100}%,
                    #3E3E3E ${((loanDuration - 30) / (365 - 30)) * 100}%,
                    #3E3E3E 100%`
                    : `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${((loanDuration - 30) / (365 - 30)) * 100}%,
                    #DFDFDF ${((loanDuration - 30) / (365 - 30)) * 100}%,
                    #DFDFDF 100%`,
              }}
            />
            <div className="w-full mt-3 text-xs flex items-center justify-between">
              <p>30 days</p>
              <p className="text-brand-primary">{loanDuration} days</p>
              <p>365 days</p>
            </div>
          </label>

          {/* Calculated Values */}
          <div className="flex justify-between  items-center mt-8 mb-16">
            <div className="flex flex-col space-y-2 text-xs">
              <span>You are getting:</span>
              <span className="font-bold">
                NGN {loanAmount.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <span>Duration:</span>{" "}
              <span className="font-bold">{loanDuration} days</span>
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <span>Total Repayment:</span>
              <span className="font-bold">
                NGN {totalRepayment.toLocaleString()}
              </span>
            </div>
          </div>

          <CustomButton
            type="ghost"
            onClick={() => router.push("/sme-loan/business-loan")}
            className="bg-[#585858] text-white"
          >
            Apply Now
          </CustomButton>
        </div>

        {/* Loan Application Process Section */}
        <LoanProcessCard />
      </div>
    </MaxWidthWrapper>
  );
};
