import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Icons } from "../Footer/Icons";
import { RutasApp } from "../Helpers/Rutas";
import { ContenedorHeader, ContenedorIconos, ContenedorMenu } from "../Home/styles/Styles";
import { NavBarMenu } from "../Menu/NavBarMenu";

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


      <h1
        style={{
          margin: "40px auto",
          color: "white",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        !Hi Welcome Erudito
      </h1>
      <ContenedorPrincipal>
        <ContenedorContactos>
          <ContenedorTitulo>Contacts</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil
              src="https://cdn.pixabay.com/photo/2017/06/22/10/11/icon-2430270_960_720.png"
              alt="perfil"
            />
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
            <ContenedorPerfil
              src="https://www.seekpng.com/png/full/326-3269585_digital-marketing-services-for-smes-bicycle-icon-circle.png"
              alt="perfil"
            />
          </ContenedorA>
          <div>
            <Botones>Post</Botones>
          </div>
        </ContenedorContactos>

        <ContenedorAccount>
          <ContenedorTitulo>Account</ContenedorTitulo>
          <ContenedorA>
            <ContenedorPerfil
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              alt="perfil"
            />
            <ContenedorName>Jorge Loor</ContenedorName>
            <ContenedorRol>Admin</ContenedorRol>
          </ContenedorA>
          <div>
            <Botones>Logout</Botones>
          </div>
        </ContenedorAccount>
      </ContenedorPrincipal>
      <Footer/>
    </>
  );
};
