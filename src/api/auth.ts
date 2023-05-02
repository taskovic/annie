import axiosInstance from "services/axios-interceptor";
import { TLogin, TLogout } from "../types";

export async function login(data: TLogin) {
  try {
    return await axiosInstance.post("/auth/login", data);
  } catch (error) {
    throw new Error("Error while logout api call");
  }
}

export async function logout() {
  try {
    //return new Promise.reject();
    return await axiosInstance.post("/auth/logout");
  } catch (error) {
    throw new Error("Error while logout api call");
  }
}

export async function resetPassword(email: string | boolean) {
  try {
    //new Promise.reject();
    const data = {
      email: email
    }
    return await axiosInstance.post("/users/reset-password", data);
  } catch (error) {
    throw new Error("Error while logout api call");
  }
}

export async function updatePassword(userId: number, passwords: object) {
  try {
    return await axiosInstance.patch(`/users/${userId}/password`, passwords);
  } catch (error) {
    throw new Error("Error while logout api call");
  }
}
