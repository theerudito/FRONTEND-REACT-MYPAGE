import React from "react";
import { Link } from "react-router-dom";
import { RutasApp } from "../../Helpers/Rutas";
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

export const Account = () => {
  return (
    <>
      <h1
        style={{
          margin: "auto",
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
    </>
  );
};
