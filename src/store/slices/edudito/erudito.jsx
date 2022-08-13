import { createSlice } from "@reduxjs/toolkit";
import { EliminarContacto } from "../../../Complementos/Helpers/ApiRest";

export const eruditoSlice = createSlice({
  name: "erudtio",
  initialState: {
    login: false,
    logout: false,
    isLoading: false,
    courses: [],
    tecnology1: [],
    tecnology2: [],
    porfolio: [],
    contacts: [],
    user: {},
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
    getPorfolio: (state, actions) => {
      state.porfolio = actions.payload;
    },
    getContacts: (state, actions) => {
      state.contacts = actions.payload;
    },
    createContact: (state, actions) => {
      state.contacts = [...state.contacts, actions.payload];
    },
    editContatct: (state, actions) => {
      state.user = actions.payload;
    },
    deleteContact: (state, actions) => {
      const id = actions.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
      EliminarContacto(id);
    },
  },
});

// actions para el reducer
export const {
  getCourse,
  getTec1,
  getTec2,
  getPorfolio,
  getContacts,
  createContact,
  editContatct,
  deleteContact,
} = eruditoSlice.actions;