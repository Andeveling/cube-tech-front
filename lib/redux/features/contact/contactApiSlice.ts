import { ContactResponse } from "@/models/Contact/Contact.strapi";
import { CreateContactI } from "@/models/Contact/Contact.type";
import { apiSlice } from "../../services/api.service";

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<ContactResponse, any>({
      query: (contactBody) => ({
        url: "/api/contact/create-contact",
        method: "POST",
        body: contactBody,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const { useCreateContactMutation } = contactApiSlice;
