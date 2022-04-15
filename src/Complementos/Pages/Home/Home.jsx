import React from "react";
import { ImagenesSobreYo } from "./Extras/ImagenesSobreMe";
import { MapaApp } from "./Extras/Mapa";
import { FooterApp } from "./Footer/FooterApp";
import { FormularioApp } from "./Formulario/FormularioContacto";
import { Informacion } from "./SobreMe/Informacion";
import { Skills } from "./SobreMe/Skills";
import { DivContenedorHome } from "./StyleHome";

export const Home = () => {
  return (
    <DivContenedorHome>
      <ImagenesSobreYo />
      <Skills />
      <Informacion />
      <MapaApp />
      <FormularioApp />
    </DivContenedorHome>
  );
};
