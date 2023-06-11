import { ContactAttributes } from "@/models/Contact/Contact.strapi";
import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currentContact: null | SingleStrapiResponse<ContactAttributes>;
}

const initialState: InitialState = {
  currentContact: null,
};
const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    setContactWithQuote: (
      state,
      action: PayloadAction<SingleStrapiResponse<ContactAttributes>>,
    ) => {
      state.currentContact = action.payload;
    },
    clearContactInfo: (state) => {
      state.currentContact = null;
    },
  },
});

export const { setContactWithQuote, clearContactInfo } = contactSlice.actions;

export default contactSlice.reducer;
