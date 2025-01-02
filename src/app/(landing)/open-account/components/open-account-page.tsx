import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import React from "react";
import { AccountOpeningForm } from "./open-account-form";

export const OpenAccountPage = () => {
  return (
    <div className="py-16 bg-[#FAFAFA]">
      <MaxWidthWrapper>
        <Heading className="text-left lg:text-center">
          Account Opening Form
        </Heading>
        <p className="text-xs text-[#606060] text-left lg:text-center  mt-3 lg:w-[70%] lg:mx-auto">
          Streamline the process with our Account Opening Form. Quick, easy, and
          secure, it’s designed to help you set up your account effortlessly.
          Start your journey today!
        </p>

        <AccountOpeningForm />
      </MaxWidthWrapper>
    </div>
  );
};
