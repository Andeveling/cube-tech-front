import { AppState } from "@/lib/store/store";
import { createSlice } from "@reduxjs/toolkit";

export interface QuoteItemI {
  id: string;
  price: number;
}
export type QuantityT = number;

export interface QuoteItemWithQuantityI {
  item: QuoteItemI;
  quantity: QuantityT;
}

interface InitialState {
  quoteState: QuoteItemWithQuantityI[];
}

const initialState: InitialState = {
  quoteState: [],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
      addWindowToQuote: (state, action) => {
          state.quoteState.push(action.payload)
    },
  },
});


export const { addWindowToQuote } = quoteSlice.actions;
export const selectCountQuoteItems = (state: AppState) => state.quote.quoteState.length;
export default quoteSlice.reducer;
/* 

  switch (type) {
    case "add":
      const newState = {
        ...state,
        [item.id]: { ...item },
      };
      return newState;

    case "remove": {
      if (existingCartItem == undefined) {
        return state;
      }

      const newCartItems = { ...state };
      delete newCartItems[item.id];
      return newCartItems;
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }

*/
