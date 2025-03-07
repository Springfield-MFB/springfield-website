import { ApiResponse } from "..";

interface Records {
  title: string;
  location: string;
  type: string;
  department: string;
  salaryRange: string;
  experienceLevel: string;
  jobDescription: string;
  requirements: string;
  educationLevel: string;
  applicationDeadline: string;
  companyName: string;
  companyOverview: string;
  benefits: string;
  workingHours: string;
  reportingManager: string;
  postedDate: string;
  contractDuration: string;
  jobCategory: string;
  travelRequirements: string;
  languagesRequired: string;
  applicationMethod: string;
  numberOfOpenings: number;
  remoteEligibility: boolean;
}

interface Meta {
  pageNumber: number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
  numberOfPages: number;
}

interface ResponseData {
  meta: Meta;
  records: Records[];
}

export type JobResponse = ApiResponse<ResponseData>;

export interface ApplyJobPayload {
  fullName: string;
  email: string;
  mobileNumber: string;
  resumeLink: string;
}

interface ApplyJobResponseData {
  fullName: string;
  email: string;
  mobileNumber: string;
  resumeLink: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

// Generic API Response Interface
export type ApplyJobResponse = ApiResponse<ApplyJobResponseData>;
