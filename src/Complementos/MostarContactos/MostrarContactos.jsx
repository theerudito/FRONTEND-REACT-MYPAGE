import axios from "axios";
import React, { useEffect, useState } from "react";
import { MostrarTodosLosContactos } from "../Helpers/ApiRest";

const url = "https://erudito-dev.herokuapp.com/api/contactos";
const incialState = [
  {
    nombre: "Jorge",
    email: "sdsd6",
    telefono: "0865588",
    mensaje: "sdsdsd",
  },
  {
    nombre: "Jorge",
    email: "sdsd6",
    telefono: "0865588",
    mensaje: "sdsdsd",
  },
];

export const MostrarContactos = () => {
  const [contactos, setContactos] = useState(incialState);

  useEffect(() => {
    getContactos();
  }, []);

  const getContactos = async () => {
    const datos = await MostrarTodosLosContactos();
    setContactos(datos);
  };

  //=============BORRAR========================
  const borrarContacto = async (id) => {
    await axios.delete(`${url}/${id}`)
    getContactos()
  } 
  //=============BORRAR========================

  return (
    <>
      <div>
        <h1>Contactos</h1>
      </div>
      <div>
        <button className="btn btn-primary">Crear</button>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefomo</th>
              <th>Email</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          {contactos.map((item) => (
            <tr>
              <td>{item.nombre}</td>
              <td>{item.telefono}</td>
              <td>{item.email}</td>
              <td>{item.mensaje}</td>
              <td>
                <button className="btn btn-success">Editar</button>


                <button 
                  className="btn btn-danger"
                  onClick={() => borrarContacto(item._id)} 
                  >Borrar</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
