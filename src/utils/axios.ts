import { API_URL, CHANNEL_ID, CHANNEL_SECRET } from "@/config";
import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: API_URL,
  timeout: 500000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include Channel-ID and Channel-Secret headers
request.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    config.headers = {
      ...config.headers,
      "Channel-ID": CHANNEL_ID,
      "Channel-Secret": CHANNEL_SECRET,
    };

    return config as any;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Perform redirection or other actions if needed
    }

    return Promise.reject(error);
  }
);

export default request;
