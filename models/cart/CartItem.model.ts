import { Dispatch, SetStateAction } from "react";

import { TypeWithKey } from "../type-with-key.model";

export type QuantityT = number;
export interface CartItemI {
  id: string;
  cant: number;
  price: number;
}
export interface CartStateI extends TypeWithKey<CartItemI> {
  [key: string]: CartItemI;
}
export type CartActionT = {
  type: "add" | "remove";
  item: CartItemI;
};
export interface CartShowPriceT {
  showPrice: boolean;
  setShowPrice: Dispatch<SetStateAction<boolean>>;
}

export interface CartHtmlStringT {
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
}
