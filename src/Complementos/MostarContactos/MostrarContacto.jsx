import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { useModalContactApp } from "../Hooks/useModalContact";
import { NavBarMenu } from "../Menu/NavBarMenu";

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
  ContainnerSearch,
  ContenedorPrincipal,
  ContenedorTabla,
  ImgProfile,
  InputSeach,
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
import { ContenedorHeader, ContenedorMenu } from "../Home/styles/Styles";
import { useState } from "react";
import {
  MostrarTodosLosContactos,
  MostrarUnContactos,
} from "../Helpers/ApiRest";
import {
  deleteContact,
  editContatct,
  getContacts,
} from "../../store/slices/edudito/erudito";

export const MostrarContactoApp = () => {
  const theme = localStorage.getItem("theme");
  const [isOpenModalCrear, openModalCrear, closeModalCrear] =
    useModalContactApp(false);
  const [isOpenModalEditar, openModalEditar, closeModalEditar] =
    useModalContactApp(false);

  const Account = () => {
    navigate("/account");
  };

  const [search, setSeach] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { contacts = [] } = useSelector((store) => store.erudito);

  const GET_ALL_CONTACT = async () => {
    const data = await MostrarTodosLosContactos();

    dispatch(getContacts(data));
  };

  const GET_ONE_CONTACT = async (item) => {
    dispatch(editContatct(item));
    openModalEditar();
  };

  const DELETE_CONTACT = (id) => {
    dispatch(deleteContact(id));
    GET_ALL_CONTACT();
  };

  useEffect(() => {
    GET_ALL_CONTACT();
  }, []);

  // let result = !contact
  //   ? contact
  //   : contact.filter((user) =>
  //       user.nombre.toLowerCase().includes(search.toLowerCase())
  //     );

  // let buscarDato = (e) => {
  //   setSeach(e.target.value);
  // };

  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>
      </ContenedorHeader>
      <hr />

      <ContenedorPrincipal>
        <ButtonAccount onClick={() => Account()}>Account</ButtonAccount>
        <Titulo theme={theme}>Consulta de Contactos</Titulo>

        <BotonCrear onClick={openModalCrear}>Crear</BotonCrear>

        <Modal isOpen={isOpenModalCrear} closeModal={closeModalCrear}>
          <FormularioContactoCrear />
        </Modal>

        {/* <ContainnerSearch>
          <InputSeach
            type="text"
            placeholder="Search"
            value={search}
            onChange={buscarDato}
          />
        </ContainnerSearch> */}

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

        {contacts.map((item) => (
          <ContainerUsers key={item._id}>
            <ULUsers>
              <ImgProfile src={item.pic} alt="avatar" className="pic" />
              <LIUsers className="name">{item.name}</LIUsers>
              <LIUsers className="email">{item.email}</LIUsers>
              <LIUsers className="phone">{item.phone} </LIUsers>
              <LIUsers className="messages">{item.message} </LIUsers>
              <LIUsers className="actiones">
                <BotonEditar onClick={(e) => GET_ONE_CONTACT(item)}>
                  Editar
                </BotonEditar>

                <Modal isOpen={isOpenModalEditar} closeModal={closeModalEditar}>
                  <FormularioContactoEditar />
                </Modal>

                <BotonEliminar onClick={() => DELETE_CONTACT(item._id)}>
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
