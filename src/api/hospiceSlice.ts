import { 
    createApi, 
    fetchBaseQuery 
  } from "@reduxjs/toolkit/query/react";
  import LocalStorage from "~/services/local-storage";
  
  export const hospiceSlice = createApi({
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
      getHospices: builder.query({
        query: () => ({
          url: "/hospices",
          method: "GET"
        })
      }),
      getHospice: builder.query({
        query: (id) => ({
          url: `/hospices/${id}`,
          method: "GET"
        })
      }),
      getHospiceReferrals: builder.query({
        query: (id) => ({
          url: `/hospices/${id}/referrals`,
          method: "GET"
        })
      })
    })
  });
  
  export const {
    useGetHospicesQuery,
    useGetHospiceQuery,
    useGetHospiceReferralsQuery
  } = hospiceSlice;
  