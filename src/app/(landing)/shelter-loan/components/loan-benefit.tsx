import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LOAN_BENEFITS } from "@/config";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Heading } from "@/components/heading";

export const LoanBenefit = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <Heading className="text-left">Benefit of Loan</Heading>
      <p className="text-dark-primary mt-6 mb-16 text-[13px] w-full  lg:w-[50%] leading-[24px]">
        Capacity to empower individuals and businesses to achieve their
        objectives by providing necessary financial support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-satoshi">
        {LOAN_BENEFITS.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-4">
            <IoMdCheckmarkCircleOutline
              className="text-brand-primary basis-1/12"
              size={32}
            />
            <div className="basis-11/12">
              <div className="font-semibold mb-2 text-sm leading-6">
                {benefit.title}:{" "}
                <span className="text-gray-700 font-light">
                  {benefit.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
