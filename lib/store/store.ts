import { configureStore, ThunkAction, Action, Store } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../redux/services/api.service";

import counterReducer from "../redux/features/counter/counterSlice";
import quoteReducer from "../redux/features/quoteDocument/quoteSlice";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      quote: quoteReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([apiSlice.middleware]),
  });
}

const store = makeStore();
setupListeners(store.dispatch);
export const wrapper = createWrapper<Store<AppState>>(makeStore, {
  debug: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
