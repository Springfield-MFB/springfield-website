"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { useState } from "react";

import { useForm } from "react-hook-form";

interface IMicroLoanForm {
  fullName: string;
  email: string;
  phone: string;
  cv: string;
}

export const ApplyJobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<IMicroLoanForm>({
    mode: "onTouched",
  });

  const [fileSelected, setFileSelected] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileSelected(event?.target?.files?.length! > 0 || false);
  };

  const onSubmit = (data: IMicroLoanForm) => {
    if (!fileSelected) {
      alert("Please upload a CV before submitting.");
    }

    console.log(data);
  };

  return (
    <div className="my-16" id="apply-job">
      <MaxWidthWrapper className="lg:w-[50%]">
        <div className="bg-white border border-[#D6D6D6] rounded-[12px] px-4 lg:px-16 py-10">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <FormInput
              id="fullName"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              register={register("fullName", {
                required: "Please enter your name",
              })}
              error={errors.fullName}
            />
            <FormInput
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your full name"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              error={errors.email}
            />

            <FormInput
              id="phone"
              label="Phone Number"
              type="phone"
              placeholder="Enter phone number"
              register={register("phone", {
                required: "phone is required",
              })}
              error={errors.phone}
            />

            <FormInput
              id="cv"
              label="Upload your CV"
              type="file"
              placeholder="Enter phone number"
              register={register("cv", {
                required: "cv is required",
              })}
              error={errors.cv}
              className="flex items-center justify-center pt-3"
              onChange={handleFileChange}
            />

            <div className=" w-full lg:w-[30%]">
              <CustomButton type="submit">Apply</CustomButton>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
