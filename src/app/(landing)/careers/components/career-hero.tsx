import Image from "next/image";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import CareerImage1 from "@/public/images/career-1.png";
import CareerImage2 from "@/public/images/career-2.png";
import CareerImage3 from "@/public/images/career-3.png";
import CareerImage4 from "@/public/images/career-4.png";
import CareerImage5 from "@/public/images/career-5.png";

export const CareerHero = () => {
  return (
    <div className="py-16 ">
      <MaxWidthWrapper className="">
        <div className="flex flex-col text-center items-center">
          <Heading>
            Work at <span className="text-brand-primary">Springfield</span>
          </Heading>

          <p className="text-[#1D1D1D] text-xs lg:text-sm leading-6 lg:w-[75%] mx-auto mt-4 mb-8">
            Discover the power to unlock your full potential through our
            automated and secure savings, strategic investment opportunities,
            agency banking solutions, and a wide array of value-added services
            tailored to meet your financial goals and beyond.
          </p>

          <CustomButton>View all Job</CustomButton>

          <div className="lg:w-[80%] border-[1.5px] border-[#F5B307] rounded-[24.55px] p-4  mt-6">
            <div className="flex flex-col h-full gap-4">
              <div className="grid lg:grid-cols-10 gap-4  flex-1">
                <div className="lg:col-span-2 ">
                  <Image
                    src={CareerImage1}
                    alt="1 - career"
                    width={1000}
                    height={1000}
                    className=" lg:rounded-[24.55px] object-cover w-full h-full"
                  />
                </div>
                <div className="lg:col-span-5">
                  <Image
                    src={CareerImage2}
                    alt="2 - career"
                    width={1000}
                    height={1000}
                    className=" h-full w-full"
                  />
                </div>
                <div className="lg:col-span-3 ">
                  <Image
                    src={CareerImage3}
                    alt="3 - career"
                    width={1000}
                    height={1000}
                    className=" h-full w-full"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-4 flex-1">
                <div className="lg:col-span-1 ">
                  <Image
                    src={CareerImage4}
                    alt="4 - career"
                    width={1000}
                    height={1000}
                    className=" h-full w-full"
                  />
                </div>

                <div className="lg:col-span-2 ">
                  <Image
                    src={CareerImage5}
                    alt="4 - career"
                    width={1000}
                    height={1000}
                    className=" h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
