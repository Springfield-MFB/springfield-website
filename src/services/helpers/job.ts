import { JobResponse } from "@/types/job/type";
import request from "@/utils/axios";

const fetchJobs = async (
  pageNumber = 1,
  pageSize = 10,
  search = ""
): Promise<JobResponse> => {
  const { data } = await request.get<JobResponse>("/careers/jobs", {
    params: {
      pageNumber,
      pageSize,
      search,
    },
  });

  return data;
};

export { fetchJobs };
