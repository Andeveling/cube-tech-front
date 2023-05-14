import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../redux/counter/counterSlice";
import quoteReducer from "../redux/quoteDocument/quoteSlice";

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer, quote: quoteReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
