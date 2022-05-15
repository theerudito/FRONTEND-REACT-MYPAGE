import axios from "axios";

const url = "https://erudito-dev.herokuapp.com/api/contactos";

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
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const CrearContacto = async (formData) => {
  try {
    const res = await axios.post(url, formData);
    console.log(res)
    const data = await res.data
    console.log(data)
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const EditarContacto = async (formData, id) => {
  try {
    const res = await axios.put(`${url}/${id}`, formData)
    return res
  } catch (error) {
    console.log(error);
  }
};

export const EliminarContacto = async (id) => {
  try {
    const res = await axios.delete(`${url}/${id}`)
    return res
  } catch (error) {
    console.log(error);
  }
};
