import React from "react";

import { ENGLISH } from "../Languages/EN";
import { SPANISH } from "../Languages/ES";

import {
  ContendorFooter,
  ContenedorDerechos,
  ContenedorErudito,
  ContenedorRedesSoliales,
} from "./Styles/StylesFooter";

export const Footer = () => {
  const languages = localStorage.getItem("language");
  return (
    <>
      <hr />

      <ContendorFooter className="footer">
        <ContenedorErudito>Erudito Dev &copy;</ContenedorErudito>
        {languages === "ES" ? (
          <ContenedorDerechos className="derechos">
            {SPANISH.Author}
          </ContenedorDerechos>
        ) : (
          <ContenedorDerechos className="derechos">
            {ENGLISH.Author}
          </ContenedorDerechos>
        )}
        <ContenedorRedesSoliales>
         
        </ContenedorRedesSoliales>
      </ContendorFooter>
    </>
  );
};
