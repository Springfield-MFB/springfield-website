import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { fetchJobs } from "../helpers/job";
import { JobResponse } from "@/types/job/type";

const useGetJobsQuery = (
  pageNumber?: number,
  pageSize?: number,
  search?: string
) => {
  return useQuery<JobResponse, Error>({
    queryKey: [QUERY_KEYS.JOBS, pageNumber, pageSize, search],
    queryFn: () => fetchJobs(pageNumber, pageSize, search),
    placeholderData: keepPreviousData,
  });
};

export { useGetJobsQuery };
