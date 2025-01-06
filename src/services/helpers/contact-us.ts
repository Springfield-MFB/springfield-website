import { ContactUsEnquiryPayload, ContactUsEnquiryResponse } from "@/types";
import request from "@/utils/axios";

export const submitContactUsEnquiry = async (
  payload: ContactUsEnquiryPayload
): Promise<ContactUsEnquiryResponse> => {
  const { data } = await request.post<ContactUsEnquiryResponse>(
    "/enquiry/submit",
    payload
  );

  return data;
};
