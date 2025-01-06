import { AccountOpeningPayload, AccountOpeningResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { submitAccountOpening } from "../helpers/account";

export const useAccountOpeningMutation = () => {
  return useMutation<AccountOpeningResponse, Error, AccountOpeningPayload>({
    mutationFn: (payload) => submitAccountOpening(payload),
  });
};
