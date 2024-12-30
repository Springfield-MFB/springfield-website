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
  phone: string;
  email: string;
  confrimEmail: string;
  location: string;
  gender: string;
  businessName: string;
  asset: string;
  homeAddress: string;
  contactAddress: string;
}

export const LoanForm = () => {
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
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="location">
                    Location
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lagos">Lagos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="businessName"
              label="Business Name"
              type="businessName"
              placeholder="Enter business name "
              register={register("businessName", {
                required: "Business name is required",
              })}
              error={errors.businessName}
            />

            <FormInput
              id="asset"
              label="Asset to Acquire"
              type="asset"
              placeholder="List asset to acquire"
              register={register("asset", {
                required: "Asset to Acquire is required",
              })}
              error={errors.asset}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="homeAddress"
              label="Home Address"
              type="homeAddress"
              placeholder="Enter your home address "
              register={register("homeAddress", {
                required: "Home Address is required",
              })}
              error={errors.homeAddress}
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

          <div className=" w-full lg:w-[30%]">
            <CustomButton type="submit">Apply</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
