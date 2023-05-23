import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem(
      "quoteState",
      JSON.stringify(store.getState().quote.quoteState),
    );
  };

export const persistedState = localStorage.getItem("quoteState")
  ? {
      quote: {
        quoteState: JSON.parse(localStorage.getItem("quoteState") as string),
      },
    }
  : {};
