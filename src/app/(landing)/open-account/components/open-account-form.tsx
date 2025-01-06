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
import { useAccountOpeningMutation } from "@/services/mutations/account";
import { useUploadFileMutation } from "@/services/mutations/file";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface IMicroLoanForm {
  accountCategory: string;
  fullName: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  contactAddress: string;
  stateOfResidence: string;
  bvn: string;
  nin: string;
  id: FileList;
  meansOfIdentification: string;
  utilityBill: FileList;
  otherDoc: FileList;
}

export const AccountOpeningForm = () => {
  const [date, setDate] = useState<Date>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<IMicroLoanForm>({
    mode: "onTouched",
  });

  const [selectedDocs, setSelectedDocs] = useState({
    id: false,
    utilityBill: false,
    otherDoc: false,
  });

  const handleFileChange =
    (type: keyof typeof selectedDocs) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedDocs((prevState) => ({
        ...prevState,
        [type]: event?.target?.files?.length! > 0 || false,
      }));
    };

  const { mutate: uploadFile, isPending: isUploading } =
    useUploadFileMutation();
  const { mutate: submitAccountOpening, isPending: isSubmitting } =
    useAccountOpeningMutation();

  const uploadDocument = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      uploadFile(file, {
        onSuccess: (response) => resolve(response.responseData.publicLink),
        onError: (error) => reject(error.message),
      });
    });
  };

  const onSubmit = async (data: IMicroLoanForm) => {
    try {
      // Upload files and get their URLs
      const idDocumentUrl = data.id ? await uploadDocument(data.id[0]) : "";
      const utilityBillUrl = data.utilityBill
        ? await uploadDocument(data.utilityBill[0])
        : "";
      const otherDocumentUrl = data.otherDoc
        ? await uploadDocument(data.otherDoc[0])
        : "";

      // Submit the account opening form
      submitAccountOpening(
        {
          productType: data.accountCategory,
          fullName: data.fullName,
          gender: data.gender,
          dateOfBirth: date?.toISOString() || "",
          emailAddress: data.email,
          phoneNumber: data.phone,
          stateOfResidence: data.stateOfResidence,
          contactAddress: data.contactAddress,
          bvn: data.bvn,
          nin: data.nin,
          meansOfIdentification: idDocumentUrl,
          documentUrl: idDocumentUrl,
          utilityBillUrl: utilityBillUrl,
          otherDocUrl: otherDocumentUrl,
        },
        {
          onSuccess: (response) => {
            toast.success(response.responseMessage);
            reset();
          },
          onError: (error) => {
            toast.error(error.message);
          },
        }
      );
    } catch (error) {
      toast.error(`Failed to upload documents`);
    }
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
            <FormField
              control={form.control}
              name="accountCategory"
              rules={{ required: "Please select an account category" }}
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="accountCategory">
                    Type of Deposit Product
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the Account Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Springfield Daily Contributions">
                        Springfield Daily Contributions (SDC)
                      </SelectItem>
                      <SelectItem value="Springfield Savings Account (SSA)">
                        Springfield Savings Account (SSA)
                      </SelectItem>
                      <SelectItem value="Springfield Current Account (SCA)">
                        Springfield Current Account (SCA)
                      </SelectItem>
                      <SelectItem value="Springfield Target Account (STA)">
                        Springfield Target Account (STA)
                      </SelectItem>
                      <SelectItem value="Springfield Fixed Deposit Account (SPDA)">
                        Springfield Fixed Deposit Account (SPDA)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.accountCategory && (
                    <p className="text-red-500 text-xs">
                      {errors.accountCategory.message}
                    </p>
                  )}
                </div>
              )}
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
            <div className="flex flex-col space-y-1">
              <label className="text-sm" htmlFor="date">
                Date of Birth
              </label>
              <DatePickerWithPresets date={date} setDate={setDate} />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <FormInput
              id="email"
              label="Email Address (Optional)"
              type="email"
              placeholder="Enter your full name"
              register={register("email", {
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
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
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
              id="bvn"
              label="BVN"
              type="number"
              placeholder="Enter your BVN "
              register={register("bvn", {
                required: "BVN is required",
              })}
              error={errors.bvn}
            />

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

          <div className="grid lg:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="meansOfIdentification"
              rules={{ required: "Please select a means of identification" }}
              render={({ field }) => (
                <div className="flex flex-col space-y-1">
                  <label className="text-sm" htmlFor="gender">
                    Means of Identification
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value || ""}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select available valid ID" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Driver’s License">
                        Driver’s License
                      </SelectItem>
                      <SelectItem value="International Passport">
                        International Passport
                      </SelectItem>
                      <SelectItem value="Permanent Voter’s Card">
                        Permanent Voter’s Card
                      </SelectItem>
                      <SelectItem value="National Identity Number (NIN) Card">
                        National Identity Number (NIN) Card
                      </SelectItem>
                      <SelectItem value="Residence/Work Permit (For Foreigners)">
                        Residence/Work Permit (For Foreigners)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.id && (
                    <p className="text-red-500 text-xs">{errors.id.message}</p>
                  )}
                </div>
              )}
            />

            <FormInput
              id="id"
              label="Upload Scan Document/ Image"
              type="file"
              accept="image/*" // Allows camera and file options
              capture="user" // Prefers the rear camera on devices with multiple cameras
              placeholder="Upload Scan Document/ Image"
              register={register("id", {
                required: "Document/ Image is required",
              })}
              error={errors.id}
              className="flex items-center justify-center pt-3"
              onChange={handleFileChange("id")}
            />

            <FormInput
              id="utilityBill"
              label="Upload Utility Bill"
              type="file"
              placeholder="Upload Utility Bill"
              register={register("utilityBill", {
                required: "Utility Bill is required",
              })}
              error={errors.utilityBill}
              className="flex items-center justify-center pt-3"
              onChange={handleFileChange("utilityBill")}
            />

            <FormInput
              id="otherDoc"
              label="Upload Other Doc"
              type="file"
              placeholder="Upload Other Doc"
              register={register("otherDoc", {})}
              error={errors.otherDoc}
              className="flex items-center justify-center pt-3"
              onChange={handleFileChange("otherDoc")}
            />
          </div>

          <div className=" w-full lg:w-[30%] z-40">
            <CustomButton type="submit">
              {isUploading
                ? "Uploading Documents..."
                : isSubmitting
                ? "Submitting Request..."
                : "Submit"}
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
