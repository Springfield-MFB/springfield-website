"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import FormTextArea from "@/components/forms/text-area";
import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface IWhistleBlowingForm {
  category: string;
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
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="natureOfEnquiry">
                  Name of Enquiry
                </label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Harassment">Harassment</SelectItem>
                    <SelectItem value="Fraud">Fraud</SelectItem>
                    <SelectItem value="Corruption">Corruption</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <FormTextArea
            label="Report Details"
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
