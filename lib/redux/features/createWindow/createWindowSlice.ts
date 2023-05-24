import { AppState } from "@/lib/store/store";
import { GlassDatum } from "@/models/strapi/Glasses.response";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentWindow: CreateWindowDataI;
}

export interface CreateWindowDataI {
  reference: string;
  location: string;
  width: number;
  height: number;
  glassData: GlassDatum | null;
  quantity: number;
}

const initialState: InitialState = {
  currentWindow: {
    reference: "V",
    location: "",
    width: 1000,
    height: 1000,
    glassData: null,
    quantity: 1,
  },
};

export const createWindowSlice = createSlice({
  name: "createWindow",
  initialState,
  reducers: {
    setWindowLocation: (state, action: PayloadAction<string>) => {
      state.currentWindow.location = action.payload;
    },
    setWindowDimensions: (state, action) => {
      state.currentWindow.width = action.payload.width;
      state.currentWindow.height = action.payload.height;
    },
    setWindowGlassData: (state, action) => {
      state.currentWindow.glassData = action.payload;
    },
    generateReference: (state, action: PayloadAction<number>) => {
      let referenceNumber = action.payload + 1;
      state.currentWindow.reference = `V${referenceNumber}`;
    },
    resetWindowState: (state) => {
      state.currentWindow.reference = initialState.currentWindow.reference;
      state.currentWindow.location = initialState.currentWindow.location;
      state.currentWindow.width = initialState.currentWindow.width;
      state.currentWindow.height = initialState.currentWindow.height;
      state.currentWindow.glassData = initialState.currentWindow.glassData;
      state.currentWindow.quantity = initialState.currentWindow.quantity;
    },
  },
});

// Selectors
export const selectCurrentWindow = (state: AppState) =>
  state.createWindow.currentWindow;

// Actions
export const {
  setWindowLocation,
  setWindowDimensions,
  setWindowGlassData,
  generateReference,
  resetWindowState,
} = createWindowSlice.actions;
// Reducers
export default createWindowSlice.reducer;
