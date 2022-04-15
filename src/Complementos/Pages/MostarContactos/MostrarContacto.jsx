import React, { useEffect, useState } from "react";
import { MostrarTodosLosContactos } from "../../Helpers/ApiRest";
import { useModalContactApp } from "../../Hooks/useModalContact";
import { inicialState } from "../../InicialValues/InicialValue";
import { FooterApp } from "../Home/Footer/FooterApp";
import { FormularioContactoCrear } from "./Formulario";
import { Modal } from "./Modal";
import {
  BotonCrear,
  ContenedorPrincipal,
  ContenedorTabla,
  Tabla,
  TH,
  Thead,
  Titulo,
  TR,
} from "./Styles/Styles";
import { TablaApp } from "./Tabla";

export const MostrarContactoApp = () => {
  const [contact, setContact] = useState(inicialState);
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);

  const updateContact = async () => {
    const data = await MostrarTodosLosContactos();
    setContact(data);
    //console.log(data);
  };

  useEffect(() => {
    updateContact();
  }, []);

  return (
    <>
      <ContenedorPrincipal>
        <Titulo>Consulta de Contactos</Titulo>
        <BotonCrear onClick={openModal}>Crear</BotonCrear>

        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <FormularioContactoCrear />
        </Modal>
        <ContenedorTabla>
          <Tabla className="table" style={{ color: "white" }}>
            <Thead>
              <TR>
                <th>Nombre</th>
                <th>Email</th>
                <TH>Telefono</TH>
                <TH>Mensaje</TH>
                <th>Acciones</th>
              </TR>
            </Thead>

            {contact.map((item, _id) => (
              <TablaApp item={item} id={_id} />
            ))}
          </Tabla>
        </ContenedorTabla>
      </ContenedorPrincipal>
      <FooterApp />
    </>
  );
};
