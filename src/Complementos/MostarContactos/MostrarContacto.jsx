import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Icons } from "../Footer/Icons";

import { useModalContactApp } from "../Hooks/useModalContact";
import { NavBarMenu } from "../Menu/NavBarMenu";
import contactContext from "../Provider/ContactsProvider";
import {
  FormularioContactoCrear,
  FormularioContactoEditar,
} from "./Formulario";
import { Modal } from "./Modal";
import {
  BotonCrear,
  BotonEditar,
  BotonEliminar,
  ButtonAccount,
  ContainerTitles,
  ContainerUsers,
  ContenedorPrincipal,
  ContenedorTabla,
  ImgProfile,
  LITitles,
  LIUsers,
  Tabla,
  TH,
  Thead,
  Titulo,
  TR,
  ULTitles,
  ULUsers,
} from "./Styles/Styles";
import {
  ContenedorHeader,
  ContenedorIconos,
  ContenedorMenu,
} from "../Home/styles/Styles";

export const MostrarContactoApp = () => {
  const [isOpenModalCrear, openModalCrear, closeModalCrear] = useModalContactApp(false);
  const [isOpenModalEditar, openModalEditar, closeModalEditar] = useModalContactApp(false);

  const navigate = useNavigate();
  const { contact, getAllUsers, deleteUser, getOneUser } =
    useContext(contactContext);

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
        <BotonCrear onClick={openModalCrear}>Crear</BotonCrear>

        <Modal isOpen={isOpenModalCrear} closeModal={closeModalCrear}>
          <FormularioContactoCrear />
        </Modal>

        <ContainerTitles>
          <ULTitles>
            <LITitles className="pic">Pic</LITitles>
            <LITitles className="name">Name</LITitles>
            <LITitles className="email">Email</LITitles>
            <LITitles className="phone">Phone</LITitles>
            <LITitles className="messages">Messages</LITitles>
            <LITitles className="actiones">Actiones</LITitles>
          </ULTitles>
        </ContainerTitles>

        {contact.map((item) => (
          <ContainerUsers key={item._id}>
            <ULUsers>
              <ImgProfile src={item.pic} alt="avatar" className="pic" />
              <LIUsers className="name">{item.nombre}</LIUsers>
              <LIUsers className="email">{item.email}</LIUsers>
              <LIUsers className="phone">{item.telefono} </LIUsers>
              <LIUsers className="messages">{item.mensaje} </LIUsers>
              <LIUsers className="actiones">
                <BotonEditar
                  onClick={(e) => openModalEditar(getOneUser(item._id, item))}
                >
                  Editar
                </BotonEditar>

                <Modal isOpen={isOpenModalEditar} closeModal={closeModalEditar}>
                  <FormularioContactoEditar item={item} Userid={item._id} />
                </Modal>

                <BotonEliminar onClick={() => deleteUser(item._id)}>
                  Eliminar
                </BotonEliminar>
              </LIUsers>
            </ULUsers>
          </ContainerUsers>
        ))}
      </ContenedorPrincipal>
      <Footer />
    </>
  );
};

{
  /* <Tabla className="table" style={{ color: "white" }}>
<Thead>
  <TR>
    <th >Avatar</th>
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
</Tabla> */
}
