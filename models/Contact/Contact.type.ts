import { QuoteItemI } from "@/lib/redux/features/quoteDocument/quoteSlice";

export interface ContactI {
  fullName: string;
  cellphone: string;
  address: string;
  email: string;
  windowsQuote: QuoteItemI[];
}
export interface CreateContactI extends ContactI {
  terms: boolean;
}
