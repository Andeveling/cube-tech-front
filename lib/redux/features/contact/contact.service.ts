import { apiSlice } from "../../services/api.service";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { ContactI } from "@/models/Contact/Contact.type";
import { getStrapiURL } from "@/lib/utils";

type ContactData = {
  data: ContactI;
};

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<ContactData, unknown>({
      query: (contact) => ({
        url: "/api/quote/create",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const { useCreateContactMutation } = contactApiSlice;
