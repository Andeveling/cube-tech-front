import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);

    if (typeof window !== "undefined") {
      // Solo ejecuta el código si está en el lado del cliente
      localStorage.setItem(
        "quoteState",
        JSON.stringify(store.getState().quote.quoteState),
      );
    }
  };

  export const persistedState = () => {
    if (typeof window !== "undefined") {
      // Solo ejecuta el código si está en el lado del cliente
      const quoteState = localStorage.getItem("quoteState");
      if (quoteState) {
        return {
          quote: {
            quoteState: JSON.parse(quoteState),
          },
        };
      }
    }

    return {};
  };
