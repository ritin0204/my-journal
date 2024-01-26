import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';

const baseApi = axios.create({
  baseURL: baseURL,
});

export default baseApi;
