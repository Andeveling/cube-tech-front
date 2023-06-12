import { NEXT_PUBLIC_SERVER } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const apiSlice = createApi({
  reducerPath: "RTK-Query",
  baseQuery: fetchBaseQuery({ baseUrl: NEXT_PUBLIC_SERVER }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({}),
  tagTypes: ["Contacts"],
});
