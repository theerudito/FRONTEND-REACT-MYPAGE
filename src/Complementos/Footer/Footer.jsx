import React from "react";
import { useSelector } from "react-redux";
import { ENGLISH } from "../Languages/EN";
import { SPANISH } from "../Languages/ES";
import { Icons } from "./Icons";
import { Whatssap } from "./Styles/Iconos";
import {
  ContendorFooter,
  ContenedorDerechos,
  ContenedorErudito,
  ContenedorRedesSoliales,
} from "./Styles/StylesFooter";

export const Footer = () => {
  const { languages } = useSelector((store) => store.erudito);
  return (
    <>
      <hr />

      <ContendorFooter className="footer">
        <ContenedorErudito>Erudito Dev &copy;</ContenedorErudito>
        {languages ? (
          <ContenedorDerechos className="derechos">
            {ENGLISH.Author}
          </ContenedorDerechos>
        ) : (
          <ContenedorDerechos className="derechos">
            {SPANISH.Author}
          </ContenedorDerechos>
        )}
        <ContenedorRedesSoliales>
          <Icons />
          <a
            id="ws"
            href="https://wa.me/593960806054"
            target="_blank"
            rel="noreferrer"
          >
            <Whatssap className="bi-whatsapp"></Whatssap>
          </a>
        </ContenedorRedesSoliales>
      </ContendorFooter>
    </>
  );
};
