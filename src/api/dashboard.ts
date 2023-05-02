import axiosInstance from "services/axios-interceptor";

export async function getHospices() {
  try {
    return await axiosInstance.get("/todos");
  } catch (error) {
    throw new Error("Error while logout api call");
  }
}
