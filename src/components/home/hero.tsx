import React from "react";
import { CustomButton } from "../custom-button";
import Image from "next/image";

import HeroImage from "@/public/images/home-hero.png";

export const Hero = () => {
  return (
    <div className="ma-auto flex flex-col lg:flex-row  px-2  space-y-10 md:space-y-0 md:space-x-12 ">
      {/* LEFT CONTENT */}

      <div className="basis-2/3   md:text-left">
        <h1 className="text-4xl md:text-6xl leading-[45px] lg:leading-[70px] font-millik">
          Guiding you toward{" "}
          <span className="text-brand-primary">financial</span> achievement
        </h1>
        <p className="mt-4 lg:leading-6 text-[#383838] text-sm lg:text-sm">
          Discover the power to unlock your full potential through our automated
          and secure savings, strategic investment opportunities, agency banking
          solutions, and a wide array of value-added services tailored to meet
          your financial goals and beyond.
        </p>
        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CustomButton type="primary">Apply For Loan</CustomButton>
          <CustomButton type="ghost">Open An Account</CustomButton>
        </div>
      </div>

      <div className=" basis-1/2 ">
        {/* Grid Effect */}
        <div className="relative flex lg:justify-end">
          <div className="col-span-3 w-[95%] row-span-3 ">
            <Image
              src={HeroImage} // Replace with actual path
              alt="Building"
              width={1000}
              height={1000}
              className="h-full  object-cover"
            />
          </div>
          {/* Add additional grid elements or styling if needed */}
        </div>
      </div>
    </div>
  );
};
