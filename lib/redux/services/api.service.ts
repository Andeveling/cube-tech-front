import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";


export const apiSlice = createApi({
  reducerPath: "Strapi Server",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api/" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({}),
});