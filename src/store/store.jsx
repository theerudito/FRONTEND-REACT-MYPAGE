import { configureStore } from "@reduxjs/toolkit";
import { eruditoSlice } from "./slices/edudito/erudito";

export const store = configureStore({
  reducer: {
    erudito: eruditoSlice.reducer,
  },
});
