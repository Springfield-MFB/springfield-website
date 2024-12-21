"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface IBusinessLoanForm {
  location: string;
  fullName: string;
  email: string;
  confrimEmail: string;
  monthlyIncome: string;
  businessName: string;
  loanAmount: string;
  businessType: string;
  notKnown: string;
  collateralType: string;
  homeAddress: string;
  businessAddress: string;
}

export const BusinessLoanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<IBusinessLoanForm>({
    mode: "onTouched",
  });

  const onSubmit = (data: IBusinessLoanForm) => {
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
              id="location"
              label="Location"
              type="text"
              placeholder="Enter phone number"
              register={register("location", {
                required: "location is required",
              })}
              error={errors.location}
            />

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
              id="confrimEmail"
              label="Confirm Email"
              type="email"
              placeholder="Enter your full name"
              register={register("confrimEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              error={errors.confrimEmail}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="monthlyIncome"
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="monthlyIncome">
                    Monthly Income
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your monthly income" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />

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
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="loanAmount"
              label="Loan Amount"
              type="loanAmount"
              placeholder="Enter business name "
              register={register("loanAmount", {
                required: "Enter loan amount",
              })}
              error={errors.loanAmount}
            />

            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="businessType">
                    Business Type
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="notKnown"
              label="Unknown"
              type="notKnown"
              placeholder="Enter your home address "
              register={register("notKnown", {
                required: "Not Known is required",
              })}
              error={errors.notKnown}
            />

            <FormField
              control={form.control}
              name="collateralType"
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="collateralType">
                    Collateral Type
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select collateral type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
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
              id="businessAddress"
              label="Business Address"
              type="businessAddress"
              placeholder="Enter your business address"
              register={register("businessAddress", {
                required: "Enter your business address, it is required",
              })}
              error={errors.businessAddress}
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
