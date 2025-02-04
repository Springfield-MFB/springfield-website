import Image from "next/image";

import { SmallHeading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import ESGSvg from "@/public/svg/esg-svg.svg";

export const OurCommitment = () => {
  return (
    <div className="pb-20">
      <MaxWidthWrapper className="">
        <div className="md:mx-10 border-[1.5px] border-brand-primary rounded-[16px] bg-white">
          <div className="flex pt-8 pb-40 px-4 md:px-14 md:py-8 items-center relative">
            <div className="flex flex-col gap-y-4 ">
              <SmallHeading>Our Commitment</SmallHeading>
              <p className="text-[13px] text-[#494848] leading-5 md:leading-6 md:w-[58%] font-satoshi">
                Through our ESG initiatives, we aim to create a meaningful and
                lasting impact on society and the environment. We invite you to
                join us on this journey toward a sustainable and inclusive
                future. For more information about our ESG efforts or to
                collaborate with us, please contact{" "}
                <small className="text-[13px] text-[#6F6FF5]">
                  info@springfielfmfb.com
                </small>
              </p>
            </div>

            <Image
              src={ESGSvg}
              className="w-[400px]  absolute bottom-0 right-0"
              alt="svg-esg"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
