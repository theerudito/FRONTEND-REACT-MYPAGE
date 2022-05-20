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
import {
  ContenedorHeader,
  ContenedorIconos,
  ContenedorMenu,
} from "../Home/styles/Styles";
import { useState } from "react";

export const MostrarContactoApp = () => {
  const [isOpenModalCrear, openModalCrear, closeModalCrear] = useModalContactApp(false);
  const [isOpenModalEditar, openModalEditar, closeModalEditar] = useModalContactApp(false);
  const [search, setSeach] = useState("")

  const navigate = useNavigate();
  const { contact, getAllUsers, deleteUser, getOneUser } =
    useContext(contactContext);

  const Account = () => {
    navigate("/account");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  let result = !contact
  ? contact
  : contact.filter(user =>  user.nombre.toLowerCase().includes(search.toLowerCase()))


  let buscarDato = (e) => {
    setSeach(e.target.value)
  }

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

      <ContainnerSearch>
        <InputSeach 
        type="text"
        placeholder="Search" 
        value={search}
        onChange={buscarDato}
        />
      </ContainnerSearch>
        


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

        {result.map((item) => (
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

