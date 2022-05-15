import React, { useContext, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Icons } from "../Footer/Icons";
import { TablaApp } from "./Tabla";
import { useModalContactApp } from "../Hooks/useModalContact";
import { NavBarMenu } from "../Menu/NavBarMenu";
import contactContext from "../Provider/ContactsProvider";
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
import {
  ContenedorHeader,
  ContenedorIconos,
  ContenedorMenu,
} from "../Home/styles/Styles";

export const MostrarContactoApp = () => {
  const [isOpenModal, openModal, closeModal] = useModalContactApp(false);
  const navigate = useNavigate();
  const { contact, getAllUsers } = useContext(contactContext);

  const Account = () => {
    navigate("/account");
  };

  useEffect(() => {
    getAllUsers();
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
              <TablaApp item={item} key={item._id} />
            ))}
          </Tabla>
        </ContenedorTabla>
      </ContenedorPrincipal>
      <Footer />
    </>
  );
};
