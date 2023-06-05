import { ID } from "../id.interface";
import { WindowModelsEnum } from "../windowPVC.model";

export interface QuoteWindowCalculatedI {
  id: ID;
  reference: string;
  location: string;
  width: number;
  height: number;
  glassName: string;
  quantity: number;
  system: string;
  trm: number;
  priceUSD: number;
  priceCOP: number;
  model: WindowModelsEnum;
}
