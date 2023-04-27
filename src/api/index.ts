import axios from "axios";
import LocalStorage from "../storage";

const ENV = import.meta.env;
const BASE_URL = ENV.mode === "development" ? ENV.VITE_DEVELOPMENT_API_BASE_URL : ENV.VITE_PRODUCTION_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const { refresh_token, token } = LocalStorage.getTokens();
  console.log(refresh_token, token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

let isRefreshing = false;
axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const { response: { status } } = error;

  if (status !== 401) return Promise.reject(error);
  if (isRefreshing) return; 

  isRefreshing = true;
  refreshToken();
});

async function refreshToken() {
  await axiosInstance.post('/refresh_token').then((response) => {
    const { access_token } = response.data;
    LocalStorage.setToken(access_token);
    //TODO: Implement some business logic when token is refreshed
    isRefreshing = false;
  }).catch((error) => {
    //TODO: Implement some business logic when token is failded while refreshing
    isRefreshing = false;
  });
};

export default axiosInstance;
