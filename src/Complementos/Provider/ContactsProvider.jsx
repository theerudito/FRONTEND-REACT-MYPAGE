
import { createContext, useState } from "react";
import {
  EditarContacto,
  EliminarContacto,
  MostrarTodosLosContactos,
  MostrarUnContactos,
} from "../Helpers/ApiRest";

const contactContext = createContext();

const ContantacProvider = ({ children }) => {
  const [contact, setContact] = useState([]);


  const getAllUsers = async () => {
    const user = await MostrarTodosLosContactos();
    setContact(user);
  };

 
  const getOneUser = async (id) => {
    await MostrarUnContactos(id);
    console.log("Obtenido");
  };

  
  const upateUser = async (id, formData) => {
    getAllUsers()
    await EditarContacto(id, formData)
    console.log("Editado")
  };

  const deleteUser = async (id) => {
    await EliminarContacto(id);
    getAllUsers()
    console.log("Eliminado");
  };

  const data = {
    contact,
    setContact,
    getAllUsers,
    getOneUser,
    upateUser,
    deleteUser,
  };

  return (
    <contactContext.Provider value={data}>{children} </contactContext.Provider>
  );
};

export { ContantacProvider };
export default contactContext;
