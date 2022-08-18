import React from "react";
import { HR } from "../Home/styles/Styles";

import { ENGLISH } from "../Languages/EN";
import { SPANISH } from "../Languages/ES";
import {
  ContendorFooter,
  ContenedorDerechos,
  ContenedorErudito,
} from "./Styles/StylesFooter";

export const Footer = () => {
  const languages = localStorage.getItem("language");

  const theme = localStorage.getItem("theme");
  return (
    <>
      <HR theme={theme} />
      <ContendorFooter theme={theme}>
        <ContenedorErudito theme={theme}>Erudito Dev &copy;</ContenedorErudito>
        {languages === "ES" ? (
          <ContenedorDerechos theme={theme}>
            {SPANISH.Author}
          </ContenedorDerechos>
        ) : (
          <ContenedorDerechos theme={theme}>
            {ENGLISH.Author}
          </ContenedorDerechos>
        )}
      </ContendorFooter>
    </>
  );
};
