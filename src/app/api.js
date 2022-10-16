import axios from 'axios';
import { API_PATH } from '~/constants';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    if (config.url === API_PATH.auth.signup || config.url === API_PATH.auth.login) return config;
    const accessToken = JSON.parse(window.localStorage.getItem('ACCESS_TOKEN'));
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (response && response.data) return response.data;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
