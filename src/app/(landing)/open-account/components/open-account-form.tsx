"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

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
}

export const AccountOpeningForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<IMicroLoanForm>({
    mode: "onTouched",
  });

  const onSubmit = (data: IMicroLoanForm) => {
    console.log(data);
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
                </div>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
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
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="stateOfResidence"
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
                      <SelectItem value="Lagos">Lagos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />

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
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="businessName"
              label="Business Name"
              type="businessName"
              placeholder="Enter business name "
              register={register("loanAmount", {
                required: "Business name is required",
              })}
              error={errors.loanAmount}
            />

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
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="loanTenure"
              label="Loan Tenure"
              type="text"
              placeholder="Specify how long you want the the money"
              register={register("loanTenure", {
                required: "Loan Tenure is required",
              })}
              error={errors.loanTenure}
            />
          </div>

          <div className=" w-full lg:w-[30%]">
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
