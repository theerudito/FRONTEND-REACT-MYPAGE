import React from "react";
import { Icons } from "./Icons";
import { Whatssap } from "./Styles/Iconos";
import {
  ContendorFooter,
  ContenedorDerechos,
  ContenedorErudito,
  ContenedorRedesSoliales,
} from "./Styles/StylesFooter";

export const Footer = () => {
  return (
    <>
      <hr />

      <ContendorFooter className="footer">
        <ContenedorErudito>Erudito Dev &copy;</ContenedorErudito>
        <ContenedorDerechos className="derechos">
          All Rights Reserved 2022
        </ContenedorDerechos>
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
