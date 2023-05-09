import axiosInstance from "services/axios-interceptor";
import { TLogin, TLogout } from "../types";

export async function login(data: TLogin) {
  return await axiosInstance.post("/auth/login", data);
}

export async function logout() {
  return await axiosInstance.post("/auth/logout");
}

export async function forgotPassword(email: string | boolean) {
  //new Promise.reject();
  const data = {
    email: email
  }
  return await axiosInstance.post("/users/reset-password", data);
}

// export async function resetPassword(email: string | boolean) {
//   //new Promise.reject();
//   const data = {
//     email: email
//   }
//   return await axiosInstance.post("/users/reset-password", data);
// }

export async function updatePassword(userId: string | undefined, data: object) {
  return await axiosInstance.patch(`/users/${userId}/reset-password`, data);
}
