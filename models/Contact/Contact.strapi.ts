import { Meta } from "../strapi/Global.response";
import { ContactI } from "./Contact.type";

export interface ContactResponse {
  data: ContactData;
  meta: Meta;
}

interface ContactData {
  id: number;
  attributes: ContactAttributes;
}

export interface ContactAttributes extends Omit<ContactI, "windowsQuote"> {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  windowsQuote: WindowsQuote[];
}

interface WindowsQuote {
  id: string;
  trm: number;
  width: number;
  height: number;
  system: string;
  location: string;
  priceCOP: number;
  priceUSD: number;
  quantity: number;
  glassName: string;
  reference: string;
}
