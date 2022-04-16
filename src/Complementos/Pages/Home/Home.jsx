import React from "react";
import { ImagenesSobreYo } from "./Extras/ImagenesSobreMe";
import { MapaApp } from "./Extras/Mapa";
import { FormularioApp } from "./Formulario/FormularioContacto";
import { Informacion } from "./SobreMe/Informacion";
import { Skills } from "./SobreMe/Skills";

export const Home = () => {
  return (
    <div>
      <ImagenesSobreYo />
      <Skills />
      <Informacion />
      <MapaApp />
      <FormularioApp />
    </div>
  );
};
