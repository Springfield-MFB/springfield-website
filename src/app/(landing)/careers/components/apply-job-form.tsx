"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { useUploadFileMutation } from "@/services/mutations/file";
import { useApplyForJobMutation } from "@/services/mutations/job";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface IMicroLoanForm {
  fullName: string;
  email: string;
  phone: string;
  cv: FileList;
}

export const ApplyJobForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    ...form
  } = useForm<IMicroLoanForm>({
    mode: "onTouched",
  });

  const { mutate: uploadFile, isPending: isUploading } =
    useUploadFileMutation();
  const { mutate: applyForJob, isPending: isApplying } =
    useApplyForJobMutation();

  const onSubmit = (data: IMicroLoanForm) => {
    const file = data.cv[0];

    // step 1
    uploadFile(file, {
      onSuccess: (fileResponse) => {
        const resumeLink = fileResponse.responseData.publicLink;

        // setp 2
        applyForJob(
          {
            fullName: data.fullName,
            email: data.email,
            mobileNumber: data.phone,
            resumeLink,
          },
          {
            onSuccess: (res) => {
              toast.success(res.responseMessage);
              reset();
            },
            onError: (error) => {
              console.error("Error submitting application:", error);
              toast.error(error.message);
            },
          }
        );
      },
      onError: (error) => {
        console.error("Error uploading file:", error);
        toast.error(error.message);
      },
    });
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
              type="number"
              placeholder="Enter phone number"
              register={register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message:
                    "Phone number must contain only numbers and be 11 digits",
                },
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
            />

            <div className=" w-full lg:w-[30%]">
              <CustomButton type="submit">
                {isUploading
                  ? "Uploading CV"
                  : isApplying
                  ? "Submitting Application..."
                  : "Apply"}
              </CustomButton>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
