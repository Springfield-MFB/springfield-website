import Image from "next/image";

import { BsBullseye } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SmallHeading } from "@/components/heading";

import AimImage from "@/public/images/aim-image.png";

export const Aim = () => {
  return (
    <div className="py-10 lg:py-36">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 px-4 lg:px-16">
          <div className="basis-1/2">
            {/* Our Mission */}
            <div className="">
              <div className="flex items-center gap-x-2">
                <TbTargetArrow className="size-[48px] text-brand-primary" />
                <SmallHeading>Our Mission</SmallHeading>
              </div>

              <p className="mt-6 text-xs font-normal text-[#54606E] leading-6">
                Our mission at SMFB is to leverage advanced technology and a
                motivated team to deliver innovative microfinance solutions,
                empowering individuals and communities, and generating high
                returns for our stakeholders while enhancing financial
                well-being of our teeming customers.
              </p>
            </div>

            {/* Our Vision */}
            <div className="mt-12">
              <div className="flex items-center gap-x-2">
                <BsBullseye className="size-[48px] text-brand-primary" />
                <SmallHeading>Our Vision</SmallHeading>
              </div>

              <p className="mt-6 text-xs font-normal text-[#54606E] leading-6">
                To be a trailblazer in Nigeria's microfinance sector, unlocking
                the financial potential of individuals and MSMEs through
                cutting-edge, inclusive, and tailored solutions that drive
                sustainable economic growth and social impact.
              </p>
            </div>
          </div>

          <div className="basis-1/2">
            <Image
              src={AimImage}
              alt="About Hero"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
