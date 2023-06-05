import { fetchAPI } from "@/lib/utils";
import { QuoteWindowCalculatedI } from "@/models/QuoteWindowCalculated/QuoteWindowCalculated.interface";

type BodyType = {
  data: {
    fullName: string;
    cellphone: string;
    email: string;
    address: string;
    windowsQuote: QuoteWindowCalculatedI[]; 
  };
};

export const createContact = async (contactBody: BodyType) => {
  const contactPath = `/contacts`;
  const options = {
    method: "POST",
    body: JSON.stringify(contactBody),
  };
  const newContact = await fetchAPI(contactPath, {}, options);
  return newContact;
};
