import { useMutation } from "@tanstack/react-query";
import { LoanApplicationPayload, LoanApplicationResponse } from "@/types";
import { applyForLoan } from "../helpers/loan";

export const useApplyForLoanMutation = () => {
  return useMutation<LoanApplicationResponse, Error, LoanApplicationPayload>({
    mutationFn: (payload) => applyForLoan(payload),
  });
};
