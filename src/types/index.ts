export interface ApiResponse<T> {
  responseCode: string;
  responseMessage: string;
  errors: string[]; // Array of errors, if any
  responseData: T; // Generic type for the response data
}

// GENERIC

interface State {
  slug: string;
  name: string;
}

export type StateResponse = ApiResponse<State[]>;

export interface LGAResponse {
  responseCode: string;
  responseMessage: string;
  errors: string[];
  responseData: string[]; // List of LGAs
}

interface FileUploadResponseData {
  responseCode: string;
  publicLink: string;
  remoteFileName: string;
}

export type FileUploadResponse = ApiResponse<FileUploadResponseData>;

// WHISTLE BLOWER & CONTACT US

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

// LOAN APPLICATIONS
interface BusinessType {
  id: number;
  prettyName: string;
  type: string;
}

export type BusinessTypeResponse = ApiResponse<BusinessType[]>;

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
  businessType: string;
  businessAddress: string;
  bvn: string;
  nin: string;
}

interface LoanApplicationResponseData {
  email: string;
  phoneNumber: string;
  approvedAmount: number;
  totalLoanRepayment: number;
}

export type LoanApplicationResponse = ApiResponse<LoanApplicationResponseData>;

// ACCOUNT OPENING

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
