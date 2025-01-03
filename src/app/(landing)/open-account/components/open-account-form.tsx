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
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IMicroLoanForm {
  fullName: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  contactAddress: string;
  stateOfResidence: string;
  bvn: string;
  nin: string;
}

export const AccountOpeningForm = () => {
  const [date, setDate] = useState<Date>();

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
    console.log("date", date);
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
              placeholder="Enter your full name"
              register={register("email", {
                required: "Email Address is required",
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
              id="phone"
              label="Phone Number"
              type="number"
              placeholder="Enter phone number"
              register={register("phone", {
                required: "phone is required",
              })}
              error={errors.phone}
            />

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
                      {STATES_IN_NIGERIA.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
              id="bvn"
              label="BVN"
              type="number"
              placeholder="Enter your BVN "
              register={register("bvn", {
                required: "BVN is required",
              })}
              error={errors.bvn}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="nin"
              label="NIN"
              type="number"
              placeholder="Enter your NIN"
              register={register("nin", {
                required: "NIN is required",
              })}
              error={errors.nin}
            />
          </div>

          <div className=" w-full lg:w-[30%] z-40">
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
