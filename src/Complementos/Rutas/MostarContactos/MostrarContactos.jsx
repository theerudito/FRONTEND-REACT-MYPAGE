import axios from "axios";
import { Modal } from "bootstrap";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MostrarTodosLosContactos } from "../../Helpers/ApiRest";
import { ModalComponeteApp } from "./ModalComponete";

const url = "https://erudito-dev.herokuapp.com/api/contactos";

const incialState = [
  {
    name: "_id",
    label: "ID",
    options: { filter: true, sort: true },
  },
  {
    name: "nombre",
    label: "NOMBRE",
    options: { filter: true, sort: true },
  },
  {
    name: "email",
    label: "EMAIL",
    options: { filter: true, sort: true },
  },
  {
    name: "telefono",
    label: "TELEFONO",
    options: { filter: true, sort: true },
  },
  {
    name: "mensaje",
    label: "MENSAJE",
    options: { filter: true, sort: true },
  },
];

// const incialState = [
//   {
//     nombre: "Jorge",
//     email: "sdsd6",
//     telefono: "0865588",
//     mensaje: "sdsdsd",
//   },
//   {
//     nombre: "Jorge",
//     email: "sdsd6",
//     telefono: "0865588",
//     mensaje: "sdsdsd",
//   },
// ];

export const MostrarContactosApp = () => {
  const [contactos, setContactos] = useState(incialState);

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getContactos();
  }, []);

  const getContactos = async () => {
    const datos = await MostrarTodosLosContactos();
    setContactos(datos);
    console.log(datos);
  };

  //=============BORRAR========================
  const borrarContacto = async (id) => {
    await axios.delete(`${url}/${id}`);
    getContactos();
  };
  //=============BORRAR========================

  const openModal = () => {
    setIsOpenModal(true);
    console.log("cli");
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <button onClick={openModal}>Crear</button>

      <ModalComponeteApp isOpenModal={isOpenModal} closeModal={closeModal} />

      {/* <MUIDataTable
        title={"Contactos"}
        data={contactos}
        columns={incialState}
      /> */}

      {/* <button className="btn btn-success">Editar</button>

      <button
        className="btn btn-danger"
        onClick={() => borrarContacto(contactos._id)}
      >
        Borrar
      </button> */}
    </>
  );
};
