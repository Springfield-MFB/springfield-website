"use client";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CalculatorChart } from "./deposit-calculator-chart";
import BoxReveal from "@/components/ui/box-reveal";

export const DepositCalculator = ({ mode }: { mode: "dark" | "light" }) => {
  const [depositAmount, setdepositAmount] = useState<number>(2341980);
  const [tenor, setTenor] = useState<number>(30);

  // Calculate total repayment
  const interestRate = 0.15; // Example interest rate
  const totalRepayment = Math.round(
    depositAmount * (1 + interestRate * (tenor / 365))
  );

  return (
    <MaxWidthWrapper className="">
      <BoxReveal boxColor={"#F0B929"} duration={1}>
        <Heading className={cn(mode === "dark" ? "text-white" : "")}>
          Deposit Calculator
        </Heading>
      </BoxReveal>
      <BoxReveal boxColor={"#F0B929"} duration={1.3}>
        <p
          className={cn(
            "mt-6 mb-20  text-[13px] md:w-[50%] leading-5",
            mode === "dark" ? "text-white" : "text-[#606060]"
          )}
        >
          Quickly estimate your monthly payments and total interest for any
          loan. Make informed decisions and take control of your finances today!
        </p>
      </BoxReveal>

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
          <div className="flex items-center justify-between">
            <p className={cn("text-sm mb-4")}>Total Amount to Deposit</p>
            <div className="p-4 bg-[#585858] rounded-[4px] text-white text-sm font-medium">
              NGN{depositAmount.toLocaleString()}
            </div>
          </div>

          {/* Deposit Amount Slider */}
          <label className="block mb-10">
            <input
              type="range"
              min={50000}
              max={500000000}
              value={depositAmount}
              onChange={(e) => setdepositAmount(Number(e.target.value))}
              className="custom-range  w-full accent-brand-primary mt-2"
              style={{
                background:
                  mode === "dark"
                    ? `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${
                      ((depositAmount - 50000) / (500000000 - 50000)) * 100
                    }%,
                    #3E3E3E ${
                      ((depositAmount - 50000) / (500000000 - 50000)) * 100
                    }%,
                    #3E3E3E 100%`
                    : `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${
                      ((depositAmount - 50000) / (500000000 - 50000)) * 100
                    }%,
                    #DFDFDF ${
                      ((depositAmount - 50000) / (500000000 - 50000)) * 100
                    }%,
                    #DFDFDF 100%`,
              }}
            />
          </label>

          <div className="flex items-center justify-between">
            <p className={cn("text-sm mb-4")}>Tenor(days)</p>
            <div className="p-4 bg-[#585858] rounded-[4px] text-white text-sm font-medium">
              {tenor} days
            </div>
          </div>

          {/* Duration Slider */}
          <label className="block mb-6">
            <input
              type="range"
              min={30}
              max={365}
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="custom-range w-full  accent-brand-primary mt-2"
              style={{
                background:
                  mode === "dark"
                    ? `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${((tenor - 30) / (365 - 30)) * 100}%,
                    #3E3E3E ${((tenor - 30) / (365 - 30)) * 100}%,
                    #3E3E3E 100%`
                    : `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${((tenor - 30) / (365 - 30)) * 100}%,
                    #DFDFDF ${((tenor - 30) / (365 - 30)) * 100}%,
                    #DFDFDF 100%`,
              }}
            />
          </label>

          {/* Calculated Values */}
          <div className="flex justify-between  items-center mt-8 mb-4">
            <div className="flex flex-col space-y-2 text-xs">
              <span>Total Amount Invested</span>
              <span className="font-bold">
                NGN {depositAmount.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col space-y-2 text-xs">
              <span>10% Withholding Tax</span>
              <span className="font-bold">
                NGN {totalRepayment.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex justify-between  items-center mt-8 mb-16">
            <div className="flex flex-col space-y-2 text-xs">
              <span>Total Amount Invested</span>
              <span className="font-bold">
                NGN {depositAmount.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col space-y-2 text-xs">
              <span>10% Withholding Tax</span>
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
        <CalculatorChart />
      </div>
    </MaxWidthWrapper>
  );
};
