import React from "react";
import { Icons } from "../../../Navigation/Icons";
import { Whatssap } from "../../../Navigation/Styles/Iconos";
import {
  ContendorFooter,
  ContenedorDerechos,
  ContenedorErudito,
  ContenedorRedesSoliales,
} from "./Styles/Styles";

export const FooterApp = () => {
  return (
    <>
      <hr />
     
        <ContendorFooter className="footer">
          <ContenedorErudito>Erudito Dev &copy;</ContenedorErudito>
          <ContenedorDerechos className="derechos">
            Todos Los Derechos Reservados 2022
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
