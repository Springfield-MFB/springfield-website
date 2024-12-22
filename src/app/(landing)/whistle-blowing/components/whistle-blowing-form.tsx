"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import FormTextArea from "@/components/forms/text-area";
import { useForm } from "react-hook-form";

interface IWhistleBlowingForm {
  fullName: string;
  nricNumber: string;
  phone: string;
  email: string;
  employmentDetails: string;
  disclosure: string;
}

export const WhistleBlowingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<IWhistleBlowingForm>({
    mode: "onTouched",
  });

  const onSubmit = (data: IWhistleBlowingForm) => {
    console.log(data);
  };

  return (
    <div className="bg-white border border-[#D6D6D6] rounded-[12px] px-4 lg:px-8 py-10">
      <p className="text-[13px] text-[#4A4949] leading-7 ">
        Please provide the following details for any suspected serious
        misconduct or any breach or suspected breach of law or regulation that
        may adversely impact the company. Please note that you may be called
        upon to assist in the investigation, if required.
      </p>
      <p className="text-black font-bold text-sm">(*) Denote mandatory field</p>

      <div className="mt-8">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <p className="text-black font-bold text-sm">
            A. Your contact information
          </p>
          <FormInput
            label="Full Name*"
            id="fullName"
            type="text"
            register={register("fullName", {
              required: "Please enter your name",
            })}
            error={errors.fullName}
          />

          <FormInput
            label="NRIC Number*"
            id="nricNumber"
            type="text"
            register={register("nricNumber", {
              required: "Please enter NRIC number",
            })}
            error={errors.nricNumber}
          />

          <FormInput
            label="Phone Number*"
            placeholder="Office | Mobile | Home"
            id="phone"
            type="text"
            register={register("phone", {
              required: "Office | Mobile | Home is required",
            })}
            error={errors.phone}
          />

          <FormInput
            label="Email*"
            id="email"
            type="text"
            register={register("email", {
              required: "Please enter your email",
            })}
            error={errors.email}
          />

          <FormInput
            label="Employment Details* (for Employee Only)"
            placeholder="e.g. Current Job, Previous Job"
            id="employmentDetails"
            type="text"
            register={register("employmentDetails", {
              required: "Please enter employment details",
            })}
            error={errors.employmentDetails}
          />

          <p className="text-black font-bold text-sm">B. Disclosure </p>
          <p className="mt-3 text-sm">
            Please include the details of the person alleged, nature of
            allegation and when the alleged conduct took place.
          </p>

          <FormTextArea
            id="disclosure"
            type="text"
            register={register("disclosure", {
              required: "Please enter the details",
            })}
            error={errors.disclosure}
          />

          <CustomButton type={"submit"}>Submit</CustomButton>
        </form>
      </div>
    </div>
  );
};
