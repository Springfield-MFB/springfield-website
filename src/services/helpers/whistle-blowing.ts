import { WhistleEnquiryPayload, WhistleEnquiryResponse } from "@/types";
import request from "@/utils/axios";

export const submitWhistleEnquiry = async (
  payload: WhistleEnquiryPayload
): Promise<WhistleEnquiryResponse> => {
  const { data } = await request.post<WhistleEnquiryResponse>(
    "/enquiry/whistle/submit",
    payload
  );
  return data;
};
