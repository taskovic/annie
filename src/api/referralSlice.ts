import { 
  createApi, 
  fetchBaseQuery 
} from "@reduxjs/toolkit/query/react";
import LocalStorage from "~/services/local-storage";

export const referralSlice = createApi({
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
    createReferral: builder.mutation({
      query: (referral) => ({
        url: "/referrals",
        method: "POST",
        body: referral
      })
    }),
    uploadReferralResource: builder.mutation({
      query: (resource) => ({
        url: "/upload", //TODO: change this path to real route,
        method: "POST",
        body: resource
      }) 
    })
  })
});

export const {
  useCreateReferralMutation,
  useUploadReferralResourceMutation
} = referralSlice;
  