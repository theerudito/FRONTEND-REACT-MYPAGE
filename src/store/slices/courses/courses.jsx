import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    tecnology1: [],
    tecnology2: [],
  },
  reducers: {
    getCourse: (state, actions) => {
      state.courses = actions.payload;
    },
    getTec1: (state, actions) => {
      state.tecnology1 = actions.payload;
    },
    getTec2: (state, actions) => {
      state.tecnology2 = actions.payload;
    },
  },
});

// actions para el reducer
export const { getCourse, getTec1, getTec2 } = coursesSlice.actions;
