"use client";

import { CustomButton } from "@/components/custom-button";
import FormInput from "@/components/forms/input";
import FormTextArea from "@/components/forms/text-area";
import { FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Form, useForm } from "react-hook-form";

enum natureOfEnquiry {
  general_enquiry = "General enquiry",
  loan_related = "Loan Related",
  business_idea = "Business Idea",
  know_more = "Know more about our product",
}

interface IContactForm {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  natureOfEnquiry: natureOfEnquiry;
  description: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<IContactForm>({
    mode: "onTouched",
  });

  const onSubmit = (data: IContactForm) => {
    console.log(data);
  };

  return (
    <div className="bg-white border border-[#D6D6D6] rounded-[12px] px-4 lg:px-12 py-10">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormInput
          label="Full Name"
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          register={register("fullName", {
            required: "Please enter your name",
          })}
          error={errors.fullName}
        />

        <FormInput
          label="Phone Mobile Number"
          id="phone"
          type="text"
          placeholder="Enter your phone mobile number"
          register={register("phone", {
            required: "Please enter your phone number",
          })}
          error={errors.phone}
        />

        <FormInput
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
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
          label="Subject"
          id="subject"
          type="text"
          placeholder="Enter subject of your request"
          register={register("subject", {
            required: "Please enter your name",
          })}
          error={errors.subject}
        />

        <FormField
          control={form.control}
          name="natureOfEnquiry"
          render={({ field }) => (
            <div className="flex flex-col space-y-1">
              <label className="text-sm" htmlFor="natureOfEnquiry">
                Type of Enquiry
              </label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General enquiry">
                    General enquiry
                  </SelectItem>
                  <SelectItem value="Loan Related">Loan Related</SelectItem>
                  <SelectItem value="Business Idea">Business Idea</SelectItem>
                  <SelectItem value="Know more about our product">
                    Know more about our product
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />

        <FormTextArea
          label="Description"
          id="description"
          type="text"
          register={register("description", {
            required: "Please enter the description",
          })}
          error={errors.description}
        />

        <CustomButton type="submit">Send Message</CustomButton>
      </form>
    </div>
  );
};
