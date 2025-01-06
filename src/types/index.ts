export interface ApiResponse<T> {
  responseCode: string;
  responseMessage: string;
  errors: string[]; // Array of errors, if any
  responseData: T; // Generic type for the response data
}
