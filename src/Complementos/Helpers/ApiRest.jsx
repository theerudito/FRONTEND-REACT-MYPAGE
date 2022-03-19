import axios from "axios";

const url = "https://erudito-dev.herokuapp.com/api/contactos";

export const MostrarTodosLosContactos = async () => {
  try {
    const res = await axios.get(url);
    //console.log(res);
    const data = res.data;
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const MostrarUnContactos = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const CrearContacto = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const EditarContacto = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const EliminarContacto = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
