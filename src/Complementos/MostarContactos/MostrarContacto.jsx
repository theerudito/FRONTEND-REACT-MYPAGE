import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Icons } from "../Footer/Icons";
import { MostrarTodosLosContactos } from "../Helpers/ApiRest";
import {
  ContenedorHeader,
  ContenedorIconos,
  ContenedorMenu,
} from "../Home/styles/Styles";
import { useModalContactApp } from "../Hooks/useModalContact";
import { inicialState } from "../InicialValues/InicialValue";
import { NavBarMenu } from "../Menu/NavBarMenu";

import { FormularioContactoCrear } from "./Formulario";
import { Modal } from "./Modal";
import {
  BotonCrear,
  ButtonAccount,
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
  const navigate = useNavigate();

  const updateContact = async () => {
    const data = await MostrarTodosLosContactos();
    setContact(data);
    //console.log(data);
  };

  const Account = () => {
    navigate("/account");
  };

  useEffect(() => {
    updateContact();
  }, []);

  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>

        <ContenedorIconos>
          <Icons />
        </ContenedorIconos>
      </ContenedorHeader>
      <hr />

      <ContenedorPrincipal>
        <ButtonAccount onClick={() => Account()}>Account</ButtonAccount>
        <Titulo>Consulta de Contactos</Titulo>
        <BotonCrear onClick={openModal}>Crear</BotonCrear>

        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <FormularioContactoCrear />
        </Modal>
        <ContenedorTabla>
          <Tabla className="table" style={{ color: "white" }}>
            <Thead>
              <TR>
                <th id="th">Nombre</th>
                <TH id="hide">Email</TH>
                <td id="th">Telefono</td>
                <TH id="hide">Mensaje</TH>
                <th id="th">Acciones</th>
              </TR>
            </Thead>

            {contact.map((item) => (
              <TablaApp item={item} />
            ))}
          </Tabla>
        </ContenedorTabla>
      </ContenedorPrincipal>
      <Footer />
    </>
  );
};
