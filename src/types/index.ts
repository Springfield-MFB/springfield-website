export interface ApiResponse<T> {
  responseCode: string;
  responseMessage: string;
  errors: string[]; // Array of errors, if any
  responseData: T; // Generic type for the response data
}

interface FileUploadResponseData {
  responseCode: string;
  publicLink: string;
  remoteFileName: string;
}

export type FileUploadResponse = ApiResponse<FileUploadResponseData>;

export interface WhistleEnquiryPayload {
  enquiryType: string;
  details: string;
}

export type WhistleEnquiryResponse = ApiResponse<string>;

export interface ContactUsEnquiryPayload {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  enquiryType: string;
  description: string;
}

interface ContactUsEnquiryResponseData {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  enquiryType: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type ContactUsEnquiryResponse = ApiResponse<
  ContactUsEnquiryResponseData
>;

export interface LoanApplicationPayload {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phoneNumber: string;
  stateOfResidence: string;
  contactAddress: string;
  loanAmount: number;
  loanPurpose: string;
  loanTenure: number;
}

interface LoanApplicationResponseData {
  email: string;
  phoneNumber: string;
  approvedAmount: number;
  totalLoanRepayment: number;
}

export type LoanApplicationResponse = ApiResponse<LoanApplicationResponseData>;

export interface AccountOpeningPayload {
  productType: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  emailAddress: string;
  phoneNumber: string;
  stateOfResidence: string;
  contactAddress: string;
  bvn: string;
  nin: string;
  meansOfIdentification: string;
  documentUrl: string;
  utilityBillUrl: string;
  otherDocUrl: string;
}

export type AccountOpeningResponse = ApiResponse<string>;
