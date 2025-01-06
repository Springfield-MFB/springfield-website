import { ApplyJobPayload, ApplyJobResponse } from "@/types/job/type";
import { useMutation } from "@tanstack/react-query";
import { applyForJob } from "../helpers/job";
import { MUTATION_KEYS } from "./mutation-keys";

const useApplyForJobMutation = () => {
  return useMutation<ApplyJobResponse, Error, ApplyJobPayload>({
    mutationKey: [MUTATION_KEYS.JOBS],
    mutationFn: (payload: ApplyJobPayload) => applyForJob(payload),
  });
};

export { useApplyForJobMutation };
