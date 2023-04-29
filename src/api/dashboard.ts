import axiosInstance from "services/axios-interceptor";

export async function getHospices() {
  return await axiosInstance.get("/todos");
}
