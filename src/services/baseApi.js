import axios from 'axios';
import Cookies from 'js-cookie';
import {getAccessToken} from './authApis';

const baseURL = 'http://127.0.0.1:8000/api';
// const baseURL = 'http://0.0.0.0:8000/api';

const baseApi = axios.create({
  baseURL: baseURL,
});


// Add a request interceptor
baseApi.interceptors.request.use(
    (config) => {
      // Set Authorization header with Bearer token
      const accessToken = Cookies.get('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
);

// Add a response interceptor
baseApi.interceptors.response.use(
    (response) => {
      // Do something with the response data
      return response;
    },
    async (error) => {
      // Handle response errors (e.g., refresh token on 401)
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const newAccessToken = await getAccessToken();

        if (newAccessToken) {
          originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
          return baseApi(originalRequest);
        }
      }

      return Promise.reject(error);
    },
);


export default baseApi;
