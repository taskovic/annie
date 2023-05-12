import { 
  createApi, 
  fetchBaseQuery 
} from "@reduxjs/toolkit/query/react";
import LocalStorage from "~/services/local-storage";


export const authSlice = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_DEVELOPMENT_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
    
      const token = LocalStorage.getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST"
      })
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/users/reset-password",
        method: "POST",
        body: email
      })
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/users/${data.userId}/reset-password`,
        method: "PATCH",
        body: data.body
      })
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation
} = authSlice;
