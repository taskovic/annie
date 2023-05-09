import axios from "axios";
import LocalStorage from "services/local-storage";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEVELOPMENT_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url === "/auth/login") return config; //TODO: Create routes enum and include login route here instead string
    const accessToken = LocalStorage.getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      response: { status },
    } = error;

    if (status !== 401) return Promise.reject(error);
    if (isRefreshing) return;

    isRefreshing = true;
    refreshToken();
    return Promise.reject(error)
  }
);

async function refreshToken() {
  await axiosInstance
    .post("/auth/refresh-token")
    .then((response) => {
      const { accessToken } = response.data;
      LocalStorage.setToken(accessToken);
      //TODO: Implement some business logic when token is refreshed
      isRefreshing = false;
    })
    .catch((error) => {
      //TODO: Implement some business logic when token is failded while refreshing
      isRefreshing = false;
    });
}

export default axiosInstance;
