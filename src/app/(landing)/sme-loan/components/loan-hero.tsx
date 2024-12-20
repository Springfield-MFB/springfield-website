import Image from "next/image";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import LoanHeroImage from "@/public/images/loan-hero-image.png";

import { LOAN_PROPERTIES } from "@/config";

export const LoanHero = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <div className=" flex pb-16 flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left">
            <Heading className="w-[80%] lg:w-[80%]">
              Springfield SME <span className="text-brand-primary">Loan</span>
            </Heading>
            <p className="lg:w-[90%] text-dark-text lg:leading-7 text-sm">
              This is a loan specially crafted for SME business owners whose
              goals are business expansion and working capital enhancement.
            </p>

            <p className="text-dark-text mb-6 text-sm">
              Interest Rate: Competitive interest rate
            </p>
            <CustomButton type="primary">Get Started</CustomButton>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:basis-[45%]">
            <Image
              src={LoanHeroImage}
              alt="Saving Account"
              width={1000}
              height={1000}
              className="object-cover  w-full h-full"
            />
          </div>
        </div>

        <div className="w-full p-8 lg:p-14 grid lg:grid-cols-4 gap-8 bg-dark-primary rounded-[32px]">
          {LOAN_PROPERTIES.map((item, i) => (
            <div key={i} className="flex space-x-3">
              <Image
                src={item.icon}
                alt="Loan Hero"
                width={1000}
                height={1000}
                className="object-cover size-[32px]"
              />

              <div className="flex flex-col space-y-2">
                <h1 className="text-white font-bold text-sm">{item.title}</h1>
                <p className="text-xs text-[#CACACA] leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
