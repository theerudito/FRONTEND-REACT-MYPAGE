import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { RutasApp } from "../Helpers/Rutas";
import { ContenedorHeader, ContenedorMenu, HR } from "../Home/styles/Styles";
import { NavBarMenu } from "../Menu/NavBarMenu";
import Blog from "../Account/blog.png";
import Contact from "../Account/contact.png";
import Post from "../Account/post.png";

import {
  ContenedorAccount,
  ContenedorContactos,
  ContenedorPrincipal,
  Botones,
  ContenedorTitulo,
  ContenedorPerfil,
  ContenedorName,
  ContenedorRol,
  ContenedorA,
  TitlePrincipalAccount,
  ContenedorTitleAccount,
} from "./Styles";

export const AccountPage = () => {
  const dataUser = JSON.parse(localStorage.getItem("accessToken"));
  const theme = localStorage.getItem("theme");
  const logout = () => {
    localStorage.clear("accessToken");
    window.location.href = "/";
  };

  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>
      </ContenedorHeader>

      <HR theme={theme} />

      <ContenedorTitleAccount>
        <TitlePrincipalAccount theme={theme}>
          !Hi Welcome {dataUser.name}
        </TitlePrincipalAccount>
      </ContenedorTitleAccount>

      <ContenedorPrincipal>
        <ContenedorContactos theme={theme}>
          <ContenedorTitulo>Contacts</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil src={Contact} alt="perfil" />
          </ContenedorA>
          <div>
            <Botones as={Link} to={RutasApp.contact}>
              Contactos
            </Botones>
          </div>
        </ContenedorContactos>

        <ContenedorContactos theme={theme}>
          <ContenedorTitulo>Post</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil src={Post} alt="perfil" />
          </ContenedorA>
          <div>
            <Botones>Post</Botones>
          </div>
        </ContenedorContactos>

        <ContenedorAccount theme={theme}>
          <ContenedorTitulo>Account</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil src={dataUser.pic} alt="perfil" theme={theme} />
            <ContenedorName theme={theme}>{dataUser.name} </ContenedorName>
            <ContenedorRol theme={theme}>{dataUser.email} </ContenedorRol>
          </ContenedorA>
          <div>
            <Botones onClick={() => logout()}>Logout</Botones>
          </div>
        </ContenedorAccount>

        <ContenedorContactos theme={theme}>
          <ContenedorTitulo>BLOG</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil src={Blog} alt="perfil" />
          </ContenedorA>
          <div>
            <Botones as={Link} to="">
              Blog
            </Botones>
          </div>
        </ContenedorContactos>
      </ContenedorPrincipal>
      <Footer />
    </>
  );
};
