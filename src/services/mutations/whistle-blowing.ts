import { WhistleEnquiryPayload, WhistleEnquiryResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { submitWhistleEnquiry } from "../helpers/whistle-blowing";

export const useSubmitWhistleEnquiryMutation = () => {
  return useMutation<WhistleEnquiryResponse, Error, WhistleEnquiryPayload>({
    mutationFn: (payload: WhistleEnquiryPayload) =>
      submitWhistleEnquiry(payload),
  });
};
