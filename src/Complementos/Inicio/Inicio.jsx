import React from "react";
import { MapaApp } from "../Extras/Mapa";
import { FooterApp } from "../Footer/FooterApp";
import { FormularioApp } from "../Formulario/FormularioContacto";
import { HeaderPrincipal } from "../Header/Header";
import { Navbar } from "../Menu/Navbar";
import { Informacion } from "../SobreMe/Informacion";
import { Skills } from "../SobreMe/Skills";
import { SobreMeApp } from "../SobreMe/SobreMeApp";

export const Inicio = () => {
  return (
    <>
      <div>
        <HeaderPrincipal />
      </div>

      <div>
        <Navbar />
      </div>

      <div>
        <SobreMeApp />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Informacion />
      </div>

      <div>
        <MapaApp/>
      </div>

      <div id="formulario">
        <FormularioApp />
      </div>

      <div>
        <FooterApp />
      </div>
    </>
  );
};
