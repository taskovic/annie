import axiosInstance from "services/axios-interceptor";
import { TLogin, TLogout } from "../types";

export async function login(data: TLogin) {
  return await axiosInstance.post("/auth/login", data);
}

export async function logout(data: TLogout) {
  return await axiosInstance.post("/logout", data);
}
