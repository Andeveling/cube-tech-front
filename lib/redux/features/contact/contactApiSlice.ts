import { ContactAttributes } from "@/models/Contact/Contact.strapi";
import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { apiSlice } from "../../services/api.service";

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<
      SingleStrapiResponse<ContactAttributes>,
      any
    >({
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
