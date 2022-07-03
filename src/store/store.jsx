import { configureStore } from "@reduxjs/toolkit";
import { coursesSlice } from "./slices/courses";

export const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
  },
});
