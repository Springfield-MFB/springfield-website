import Image from "next/image";

import { SmallHeading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import ESGSvg from "@/public/svg/csr-svg.svg";

export const OurImpact = () => {
  return (
    <div className="my-10">
      <MaxWidthWrapper className="">
        <div className="md:mx-10 border-[1.5px] border-brand-primary rounded-[16px] bg-white">
          <div className="flex pt-8 pb-48 px-4 md:px-14 md:py-8 items-center relative">
            <div className="flex flex-col gap-y-4 ">
              <SmallHeading>Our Impact</SmallHeading>
              <p className="text-[13px] text-[#494848] leading-5 md:leading-6 md:w-[65%] font-satoshi">
                Though we have just commenced operations, our early efforts are
                already making a difference. Programs such as community
                financial literacy sessions and small business empowerment
                drives have reached over [number] individuals in [locations].
              </p>
            </div>

            <Image
              src={ESGSvg}
              className="w-[200px]  absolute bottom-0 right-0"
              alt="svg-esg"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
