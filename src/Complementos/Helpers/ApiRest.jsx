import axios from "axios";

const backendDev = "http://localhost:5272";
const backendProduction = "";

const Login = `${backendDev}/Auth/login`;
const Clients = `${backendDev}/Clients`;

export const incialValueUser = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const MostrarTodosLosContactos = async () => {
  try {
    const res = await axios.get(Clients);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const MostrarUnContactos = async (id) => {
  // try {
  //   const res = await axios.get(`${url}/${id}`);
  //   const data = res.data;
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export const CrearContacto = async (formData) => {
  try {
    const res = await axios.post(Clients, formData);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const EditarContacto = async (id, formData) => {
  try {
    const res = await axios.put(`${Clients}/${id}`, formData);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const EliminarContacto = async (id) => {
  try {
    await axios.delete(`${Clients}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (formData) => {
  try {
    const res = await axios.post(Login, formData);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
