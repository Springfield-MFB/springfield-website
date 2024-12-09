"use client";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const LoanCalculator = ({ mode }: { mode: "dark" | "light" }) => {
  const [loanAmount, setLoanAmount] = useState<number>(2341980);
  const [loanDuration, setLoanDuration] = useState<number>(213);

  // Calculate total repayment
  const interestRate = 0.15; // Example interest rate
  const totalRepayment = Math.round(
    loanAmount * (1 + interestRate * (loanDuration / 365))
  );

  return (
    <MaxWidthWrapper className="px-6 lg:px-0">
      <Heading className={cn(mode === "dark" ? "text-white" : "")}>
        Loan Calculator
      </Heading>
      <p
        className={cn(
          "mt-6 mb-10  text-[13px]",
          mode === "dark" ? "text-white" : "text-[#606060]"
        )}
      >
        Lorem ipsum dolor sit amet consectetur. Et eleifend nibh felis feugiat
        faucibus id.
      </p>

      <div
        className={cn(
          "flex flex-col lg:flex-row gap-x-20 items-center justify-center"
        )}
      >
        {/* Loan Calculator Section */}

        <div
          className={cn(
            "w-full ",
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
              max={3000000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className=" custom-range  w-full accent-brand-primary mt-2"
              style={{
                background:
                  mode === "dark"
                    ? `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${
                      ((loanAmount - 50000) / (3000000 - 50000)) * 100
                    }%,
                    #3E3E3E ${
                      ((loanAmount - 50000) / (3000000 - 50000)) * 100
                    }%,
                    #3E3E3E 100%`
                    : `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${
                      ((loanAmount - 50000) / (3000000 - 50000)) * 100
                    }%,
                    #DFDFDF ${
                      ((loanAmount - 50000) / (3000000 - 50000)) * 100
                    }%,
                    #DFDFDF 100%`,
              }}
            />

            <div className="w-full mt-3 text-xs flex items-center justify-between">
              <p>NGN 50,000</p>
              <p className="text-brand-primary">
                NGN {loanAmount.toLocaleString()}
              </p>
              <p>NGN 3,000,000</p>
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

          <CustomButton type="ghost" className="bg-[#585858] text-white">
            Apply Now
          </CustomButton>
        </div>

        {/* Loan Application Process Section */}
        <div className="relative overflow-hidden bg-[#5F5F5F] px-10 py-20 rounded-[10px] shadow-lg mt-8 max-w-lg w-full text-white">
          <Image
            src="/svg/spring-svg.svg"
            alt="Loan Calculator Process"
            width={1000}
            height={1000}
            className="absolute size-[200px] bottom-0 right-0 z-10 opacity-70"
          />

          <Image
            src="/svg/spring-svg.svg"
            alt="Loan Calculator Process"
            width={1000}
            height={1000}
            className="absolute size-[300px] -top-10 left-0 z-10 opacity-70"
          />

          <h3 className="text-brand-primary text-base font-bold mb-4">
            Loan Application Process
          </h3>
          <p className="text-sm font-bold mb-10">
            Follow our easy steps to getting a loan.
          </p>
          <ul className="space-y-10 font-satoshi">
            <li className="flex items-center space-x-4 text-[#E7E7E7]">
              <span className="size-[50px] text-sm flex justify-center items-center text-black bg-brand-primary rounded-full  border-[8px] border-gray-300 font-bold">
                01
              </span>
              <div className="flex flex-col">
                <h1 className=" font-bold">OPEN AN ACCOUNT</h1>
                <p className="basis-11/12 text-xs">
                  Open an account and deposit 20% of the proposed loan facility.
                </p>
              </div>
            </li>

            <li className="flex items-center space-x-4 text-[#E7E7E7]">
              <span className="size-[50px] text-sm flex justify-center items-center text-black bg-brand-primary rounded-full  border-[8px] border-gray-300 font-bold">
                02
              </span>
              <div className="flex flex-col">
                <h1 className=" font-bold">APPLY FOR LOAN</h1>
                <p className="basis-11/12 text-xs">
                  Fill the loan application form and meet all requirement
                </p>
              </div>
            </li>

            <li className="flex items-center space-x-4 text-[#E7E7E7]">
              <span className="size-[50px] text-sm flex justify-center items-center text-black bg-brand-primary rounded-full  border-[8px] border-gray-300 font-bold">
                03
              </span>
              <div className="flex flex-col">
                <h1 className=" font-bold">LOAN DISBURSED</h1>
                <p className="basis-11/12 text-xs">
                  Your loan request is taken for approval and then disbursed.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
