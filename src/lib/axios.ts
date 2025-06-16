import axios from "axios";
import axiosRetry from "axios-retry";

export const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
});

axiosRetry(api, {
  retries: 1,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return axiosRetry.isNetworkError(error);
  },
});
