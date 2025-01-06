"use client";

import { CustomButton } from "@/components/custom-button";
import FormTextArea from "@/components/forms/text-area";
import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubmitWhistleEnquiryMutation } from "@/services/mutations/whistle-blowing";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface IWhistleBlowingForm {
  category: string;
  disclosure: string;
}

export const WhistleBlowingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    ...form
  } = useForm<IWhistleBlowingForm>({
    mode: "onTouched",
    defaultValues: {
      category: "", // Default value for category
      disclosure: "", // Default value for disclosure
    },
  });

  const { mutate, isPending } = useSubmitWhistleEnquiryMutation();

  const onSubmit = (data: IWhistleBlowingForm) => {
    mutate(
      {
        enquiryType: data.category,
        details: data.disclosure,
      },
      {
        onSuccess: (response) => {
          toast.success(response.responseMessage);
          reset(); // Reset all form fields
          setValue("category", ""); // Explicitly reset the category field
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
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
            rules={{ required: "Please select a category" }}
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="natureOfEnquiry">
                  Name of Enquiry
                </label>
                <Select
                  onValueChange={(value) => setValue("category", value)}
                  defaultValue={field.value || ""}
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
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
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

          <CustomButton type={"submit"}>
            {isPending ? "Submitting..." : "Submit"}
          </CustomButton>
        </form>
      </div>
    </div>
  );
};
