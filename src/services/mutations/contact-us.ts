import { ContactUsEnquiryPayload, ContactUsEnquiryResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { submitContactUsEnquiry } from "../helpers/contact-us";

export const useSubmitContactUsEnquiryMutation = () => {
  return useMutation<ContactUsEnquiryResponse, Error, ContactUsEnquiryPayload>({
    mutationFn: (payload) => submitContactUsEnquiry(payload),
  });
};
