"use client";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CalculatorChart } from "./deposit-calculator-chart";
import BoxReveal from "@/components/ui/box-reveal";

export const DepositCalculator = ({ mode }: { mode: "dark" | "light" }) => {
  const [depositAmount, setDepositAmount] = useState<number>(2341980);
  const [tenure, setTenure] = useState<number>(30);

  // Function to get the interest rate based on the deposit amount and tenure
  const getInterestRate = (amount: number, days: number): number => {
    const interestRates = [
      { maxAmount: 1000000, rates: [10.0, 10.5, 12.0, 13.0] },
      { maxAmount: 5000000, rates: [13.0, 14.0, 15.0, 17.0] },
      { maxAmount: 10000000, rates: [13.5, 14.5, 15.5, 17.5] },
      { maxAmount: 20000000, rates: [15.5, 17.0, 17.5, 18.0] },
      { maxAmount: 50000000, rates: [16.0, 17.5, 18.5, 19.5] },
      { maxAmount: 100000000, rates: [16.5, 18.0, 19.5, 20.5] },
      { maxAmount: 200000000, rates: [17.5, 19.5, 20.5, 21.0] },
      { maxAmount: Infinity, rates: [18.5, 20.5, 21.0, 21.5] },
    ];

    const tenureRanges = [60, 90, 180, 365];

    for (const tier of interestRates) {
      if (amount <= tier.maxAmount) {
        for (let i = 0; i < tenureRanges.length; i++) {
          if (days <= tenureRanges[i]) {
            return tier.rates[i];
          }
        }
      }
    }

    return 0; // Default to 0 if no rate is found (should not happen)
  };

  const handleDepositInputChange = (value: string) => {
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    if (!isNaN(numericValue)) {
      setDepositAmount(Math.min(Math.max(numericValue, 50000), 500000000));
    }
  };

  const handleTenureInputChange = (value: string) => {
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    if (!isNaN(numericValue)) {
      setTenure(Math.min(Math.max(numericValue, 30), 365));
    }
  };

  // Calculate total repayment
  const interestRate = getInterestRate(depositAmount, tenure);
  const accuredInterest = Math.round(
    (depositAmount * interestRate * (tenure / 365)) / 100
  );

  // Calculate Withholding Tax (10% of the interest)
  const withholdingTax = Math.round(accuredInterest * 0.1);

  // Calculate Net Interest
  const netInterest = accuredInterest - withholdingTax;

  // Calculate Maturity Amount
  const maturityAmount = depositAmount + netInterest;

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
              NGN {depositAmount.toLocaleString()}
            </div>
          </div>

          <label className="block mb-4 ">
            <input
              type="text"
              value={depositAmount.toLocaleString()}
              onChange={(e) => handleDepositInputChange(e.target.value)}
              className="w-[50%] border p-4 rounded text-sm focus-visible:ring-brand-primary focus-visible:outline-none focus-visible:ring-1"
            />
          </label>

          {/* Deposit Amount Slider */}
          <label className="block mb-10">
            <input
              type="range"
              min={50000}
              max={500000000}
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
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
            <p className={cn("text-sm mb-4")}>Tenure(days)</p>
            <div className="p-4 bg-[#585858] rounded-[4px] text-white text-sm font-medium">
              {tenure} days
            </div>
          </div>

          <label className="block mb-4 ">
            <input
              type="text"
              value={tenure.toLocaleString()}
              onChange={(e) => handleTenureInputChange(e.target.value)}
              className="w-[20%] border p-4 rounded text-sm focus-visible:ring-brand-primary focus-visible:outline-none focus-visible:ring-1"
            />
          </label>

          {/* Duration Slider */}
          <label className="block mb-6">
            <input
              type="range"
              min={30}
              max={365}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="custom-range w-full  accent-brand-primary mt-2"
              style={{
                background:
                  mode === "dark"
                    ? `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${((tenure - 30) / (365 - 30)) * 100}%,
                    #3E3E3E ${((tenure - 30) / (365 - 30)) * 100}%,
                    #3E3E3E 100%`
                    : `linear-gradient(
                    to right,
                    #f0b929 0%,
                    #f0b929 ${((tenure - 30) / (365 - 30)) * 100}%,
                    #DFDFDF ${((tenure - 30) / (365 - 30)) * 100}%,
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
              <span>Est. Return Interest(Amount)</span>
              <span className="font-bold">
                NGN {accuredInterest.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex justify-between  items-center mt-8 mb-16">
            <div className="flex flex-col space-y-2 text-xs">
              <span>10% Withholding Tax</span>
              <span className="font-bold">
                NGN {withholdingTax.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <span>Total Amount At Maturity</span>
              <span className="font-bold">
                NGN {maturityAmount.toLocaleString()}
              </span>
            </div>
          </div>

          <CustomButton
            link="/loan/apply"
            type="ghost"
            className="bg-[#585858] text-white"
          >
            Apply Now
          </CustomButton>
        </div>

        {/* Loan Application Process Section */}
        <CalculatorChart
          totalInvestment={depositAmount}
          totalReturn={maturityAmount}
          withholdingTax={withholdingTax}
          duration={tenure}
        />
      </div>
    </MaxWidthWrapper>
  );
};
