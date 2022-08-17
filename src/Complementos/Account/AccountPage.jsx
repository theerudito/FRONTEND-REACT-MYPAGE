import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

import { RutasApp } from "../Helpers/Rutas";
import {
  ContenedorHeader,
  ContenedorIconos,
  ContenedorMenu,
} from "../Home/styles/Styles";
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
} from "./Styles";

export const AccountPage = () => {
  const dataUser = JSON.parse(localStorage.getItem("accessToken"));
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

      <hr />

      <h1
        style={{
          margin: "40px auto",
          color: "white",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        !Hi Welcome {dataUser.name}
      </h1>
      <ContenedorPrincipal>
        <ContenedorContactos>
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

        <ContenedorContactos>
          <ContenedorTitulo>Post</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil src={Post} alt="perfil" />
          </ContenedorA>
          <div>
            <Botones>Post</Botones>
          </div>
        </ContenedorContactos>

        <ContenedorAccount>
          <ContenedorTitulo>Account</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil src={dataUser.pic} alt="perfil" />
            <ContenedorName>{dataUser.name} </ContenedorName>
            <ContenedorRol>{dataUser.email} </ContenedorRol>
          </ContenedorA>
          <div>
            <Botones onClick={() => logout()}>Logout</Botones>
          </div>
        </ContenedorAccount>

        <ContenedorContactos>
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
