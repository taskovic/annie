import { 
  createApi, 
  fetchBaseQuery 
} from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_DEVELOPMENT_API_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user
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
      query: (userId, ...data) => ({
        url: `/users/${userId}/reset-password`,
        method: "PATCH",
        body: data
      })
    })
  })
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation
} = authSlice;
