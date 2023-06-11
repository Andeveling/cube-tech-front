import { AppState } from "@/lib/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CreateWindowDataI } from "../createWindow/createWindowSlice";
import { v4 as uuid } from "uuid";

export interface QuoteItemI {
  id: string;
  item: CreateWindowDataI;
}

interface InitialState {
  quoteState: QuoteItemI[];
}

const initialState: InitialState = {
  quoteState: [],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    addWindowToQuote: (state, action: PayloadAction<CreateWindowDataI>) => {
      const newWindowData: CreateWindowDataI = action.payload;
      const newWindow: QuoteItemI = {
        id: uuid(),
        item: newWindowData,
      };
      state.quoteState.push(newWindow);
    },
    removeWindowFromQuote: (state, action: PayloadAction<QuoteItemI["id"]>) => {
      const id = action.payload;
      state.quoteState = state.quoteState.filter(
        (item: { id: string }) => item.id !== id,
      );
    },
    incrementQuantity: (state, action: PayloadAction<QuoteItemI["id"]>) => {
      const id = action.payload;
      const windowItem = state.quoteState.find(
        (item: { id: string }) => item.id === id,
      );
      if (windowItem) {
        windowItem.item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<QuoteItemI["id"]>) => {
      const id = action.payload;
      const windowItem = state.quoteState.find(
        (item: { id: string }) => item.id === id,
      );
      if (windowItem && windowItem.item.quantity > 1) {
        windowItem.item.quantity -= 1;
      }
    },
    resetQuote: (state) => {
      return initialState;
    },
  },
});

/* Actions */
export const {
  addWindowToQuote,
  removeWindowFromQuote,
  incrementQuantity,
  decrementQuantity,
  resetQuote,
} = quoteSlice.actions;
/* Selectors */
export const selectQuoteItems = (state: AppState) => state.quote.quoteState;
export const selectCountQuoteItems = (state: AppState) =>
  state.quote.quoteState.length;

/* Reducer */
export default quoteSlice.reducer;
