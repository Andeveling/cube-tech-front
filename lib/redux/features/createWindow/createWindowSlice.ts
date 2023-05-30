import { AppState } from "@/lib/store/store";
import { GlassDatum } from "@/models/GlassCategories/GlassCategory.strapi";
import { ID } from "@/models/id.interface";
import { SystemsAvailableEnum } from "@/models/System-PVC/SystemPVC.interface";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentWindow: CreateWindowDataI;
}

export interface CreateWindowDataI {
  modelId: string | number;
  reference: string;
  location: string;
  width: number;
  height: number;
  glassData: GlassDatum;
  quantity: number;
  system: SystemsAvailableEnum;
  model: WindowModelsEnum;
}

const initialState: InitialState = {
  currentWindow: {
    modelId: "",
    reference: "V",
    location: "",
    width: 1000,
    height: 1000,
    glassData: {} as GlassDatum,
    quantity: 1,
    system: "" as SystemsAvailableEnum,
    model: "" as WindowModelsEnum,
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
      state.currentWindow.modelId = initialState.currentWindow.modelId;
      state.currentWindow.reference = initialState.currentWindow.reference;
      state.currentWindow.location = initialState.currentWindow.location;
      state.currentWindow.width = initialState.currentWindow.width;
      state.currentWindow.height = initialState.currentWindow.height;
      state.currentWindow.glassData = initialState.currentWindow.glassData;
      state.currentWindow.quantity = initialState.currentWindow.quantity;
      state.currentWindow.system = initialState.currentWindow.system;
      state.currentWindow.model = initialState.currentWindow.model;
    },
    setModelWindowId: (state, action: PayloadAction<ID>) => {
      const newModelId = action.payload;
      state.currentWindow.modelId = newModelId;
    },
    setWindowSystem: (state, action: PayloadAction<SystemsAvailableEnum>) => {
      const systemName = action.payload;
      state.currentWindow.system = systemName;
    },
    setModelWidow: (state, action: PayloadAction<WindowModelsEnum>) => {
      const windowModel = action.payload;
      state.currentWindow.model = windowModel;
    },
  },
});

// Selectors
export const selectCurrentWindow = (state: AppState) =>
  state.createWindow.currentWindow;

// Actions
export const {
  setModelWindowId,
  setModelWidow,
  setWindowLocation,
  setWindowDimensions,
  setWindowGlassData,
  generateReference,
  resetWindowState,
  setWindowSystem,
} = createWindowSlice.actions;
// Reducers
export default createWindowSlice.reducer;
