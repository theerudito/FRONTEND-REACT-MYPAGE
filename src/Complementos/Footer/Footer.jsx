import React from "react";
import { useSelector } from "react-redux";
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

  const { theme } = useSelector((state) => state.erudito);

  return (
    <>
      <hr />

      <ContendorFooter theme={theme}>
        <ContenedorErudito theme={theme}>Erudito Dev &copy;</ContenedorErudito>
        {languages === "ES" ? (
          <ContenedorDerechos theme={theme}>
            {SPANISH.Author}
          </ContenedorDerechos>
        ) : (
          <ContenedorDerechos>{ENGLISH.Author}</ContenedorDerechos>
        )}
        
      </ContendorFooter>
    </>
  );
};
