import React from "react";
import { Link } from "react-router-dom";
import { RutasApp } from "../../Helpers/Rutas";
import {
  ContenedorAccount,
  ContenedorContactos,
  ContenedorPrincipal,
  Botones,
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
          <h1>Contacts</h1>
          <div>
            <Botones as={Link} to={RutasApp.contact}>
              Contactos
            </Botones>
          </div>
        </ContenedorContactos>

        <ContenedorAccount>
          <h1>Account</h1>
          <div>
            <Botones>Contactos</Botones>
          </div>
        </ContenedorAccount>
      </ContenedorPrincipal>
    </>
  );
};
