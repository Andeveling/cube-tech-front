import { fetchAPI } from "@/lib/utils";

export const createContact = async (body: any) => {
  const contactPath = `/contacts`;
  const options = {
    method: "POST",
    body,
  };
  const newContact = await fetchAPI(contactPath, {}, options);
  return newContact;
};
