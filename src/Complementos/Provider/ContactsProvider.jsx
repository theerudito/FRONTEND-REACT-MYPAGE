import { createContext, useState } from "react";
import { EliminarContacto, MostrarTodosLosContactos } from "../Helpers/ApiRest";


const contactContext = createContext();

const ContantacProvider = ({ children }) => {
  const [contact, setContact] = useState([]);

  const getAllUsers = async () => {
    const user = await MostrarTodosLosContactos();
    setContact(user);
  };

  const getOneUser = async () => {};

  const upateUser = async () => {};

  const deleteUser = async (id) => {
    await EliminarContacto(id)
    console.log("Eliminado")
  };

  const data = { contact, getAllUsers, getOneUser, upateUser, deleteUser };

  return (
    <contactContext.Provider value={data}>{children} </contactContext.Provider>
  );
};

export { ContantacProvider };
export default contactContext;
