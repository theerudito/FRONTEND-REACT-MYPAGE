import axios from "axios";

const url = "https://erudito-backend.herokuapp.com/api/contactos";
const url_dev = "http://localhost:8000/api/contactos";

export const incialValueUser = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const MostrarTodosLosContactos = async () => {
  try {
    const res = await axios.get(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const MostrarUnContactos = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const CrearContacto = async (formData) => {
  try {
    const res = await axios.post(url, formData);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const EditarContacto = async (id, formData) => {
  try {
    const res = await axios.put(`${url}/${id}`, formData);
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const EliminarContacto = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
