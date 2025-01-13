"use client";

import { CustomButton } from "@/components/custom-button";
import { DatePickerWithPresets } from "@/components/data-picker";
import FormInput from "@/components/forms/input";
import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STATES_IN_NIGERIA } from "@/config";
import { useApplyForLoanMutation } from "@/services/mutations/loan";
import { useBusinessTypesQuery } from "@/services/queries/loan";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface IMicroLoanForm {
  fullName: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  contactAddress: string;
  stateOfResidence: string;
  loanAmount: string;
  loanPurpose: string;
  loanTenure: string;
  businessAddress: string;
  typeOfBusiness: string;
  bvn: string;
  nin: string;
}

export const LoanForm = () => {
  const [date, setDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    ...form
  } = useForm<IMicroLoanForm>({
    mode: "onTouched",
  });

  const { mutate, isPending } = useApplyForLoanMutation();
  const { data: businessTypes, isLoading: isBusinessTypesLoading } =
    useBusinessTypesQuery(); // Fetch business types

  const onSubmit = ({
    contactAddress,
    dob,
    email,
    fullName,
    gender,
    loanAmount,
    loanPurpose,
    loanTenure,
    phone,
    stateOfResidence,
    businessAddress,
    typeOfBusiness,
    bvn,
    nin,
    ...rest
  }: IMicroLoanForm) => {
    console.log(typeOfBusiness);

    mutate(
      {
        fullName,
        dateOfBirth: dob,
        gender,
        phoneNumber: phone,
        stateOfResidence,
        contactAddress,
        businessAddress,
        businessType: typeOfBusiness,
        bvn,
        nin,
        loanAmount: Number(loanAmount),
        loanPurpose,
        loanTenure: Number(loanTenure),
        email,
      },
      {
        onSuccess: (response) => {
          if (response.responseCode === "00") {
            toast.success(response.responseMessage);
            reset(); // Reset the form after successful submission
          }

          toast.error(response.responseMessage);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="my-16">
      <div className="bg-white border border-[#D6D6D6] rounded-[12px] px-4 lg:px-16 py-10">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <div className="grid lg:grid-cols-2 gap-6">
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

            <FormField
              control={form.control}
              name="gender"
              rules={{ required: "Please select a gender" }}
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="gender">
                    Gender
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <p className="text-red-500 text-xs">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="date">
                Date of Birth
              </label>
              <DatePickerWithPresets date={date} setDate={setDate} />
            </div>

            <FormInput
              id="email"
              label="Email Address (Optional)"
              type="email"
              placeholder="Enter your email"
              register={register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              error={errors.email}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="bvn"
              label="BVN"
              type="text"
              pattern="\d{11}"
              maxLength={11}
              minLength={11}
              placeholder="Enter your BVN"
              register={register("bvn", {
                required: "Enter your BVN, it is required",
              })}
              error={errors.bvn}
            />

            <FormInput
              id="nin"
              label="NIN"
              type="text"
              pattern="\d{11}"
              maxLength={11}
              minLength={11}
              placeholder="Enter your NIN "
              register={register("nin", {
                required: "NIN is required",
              })}
              error={errors.nin}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="businessAddress"
              label="Business Address"
              type="text"
              placeholder="Enter your Business address"
              register={register("businessAddress", {
                required: "Enter your business address, it is required",
              })}
              error={errors.businessAddress}
            />

            <FormField
              control={form.control}
              name="typeOfBusiness"
              rules={{ required: "Please select a business type" }}
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="typeOfBusiness">
                    Type of Business
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes?.responseData.map((businessType) => (
                        <SelectItem
                          key={businessType.id}
                          value={businessType.type}
                        >
                          {businessType.prettyName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.typeOfBusiness && (
                    <p className="text-red-500 text-xs">
                      {errors.typeOfBusiness.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
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

            <FormField
              control={form.control}
              name="stateOfResidence"
              rules={{ required: "Please select a state" }}
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="stateOfResidence">
                    State of Residence
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {STATES_IN_NIGERIA.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.stateOfResidence && (
                    <p className="text-red-500 text-xs">
                      {errors.stateOfResidence.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="contactAddress"
              label="Contact Address"
              type="contactAddress"
              placeholder="Enter your contact address"
              register={register("contactAddress", {
                required: "Enter your contact address, it is required",
              })}
              error={errors.contactAddress}
            />

            <FormInput
              id="loanAmount"
              label="Loan Amount Request"
              type="number"
              placeholder="Enter how much you need "
              register={register("loanAmount", {
                required: "Loan amount is required",
              })}
              error={errors.loanAmount}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="loanPurpose"
              label="Purpose of Loan"
              type="text"
              placeholder="Enter what you will use the loan for"
              register={register("loanPurpose", {
                required: "loan purpose is required",
              })}
              error={errors.loanPurpose}
            />

            <FormInput
              id="loanTenure"
              label="Loan Tenure"
              type="number"
              placeholder="Specify how long you want the the money"
              register={register("loanTenure", {
                required: "Loan Tenure is required",
              })}
              error={errors.loanTenure}
            />
          </div>

          <div className=" w-full lg:w-[30%] z-40">
            <CustomButton type="submit">
              {isPending ? "Applying..." : "Apply"}
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
